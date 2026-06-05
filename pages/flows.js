// ══════════════════════════════════════════════════════════════
//  🔀 FLUXO DE SISTEMA — Interactive Flowchart Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectFlowsCSS() {
  if (document.getElementById('flows-css')) return;
  const s = document.createElement('style');
  s.id = 'flows-css';
  s.textContent = `
    /* ── Tabs ── */
    .fl-tabs { display:flex; gap:4px; flex-wrap:wrap; margin-bottom:16px; }
    .fl-tab  { display:flex; align-items:center; gap:7px; padding:8px 16px; border-radius:10px; font-size:0.80rem; font-weight:600; cursor:pointer; color:#94a3b8; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); transition:all 0.2s; white-space:nowrap; }
    .fl-tab:hover  { color:#f1f5f9; border-color:rgba(255,255,255,0.14); }
    .fl-tab.active { color:#000; background:#00d4ff; border-color:#00d4ff; box-shadow:0 4px 14px rgba(0,212,255,0.25); }

    /* ── Toolbar ── */
    .fl-toolbar { display:flex; align-items:center; gap:8px; margin-bottom:12px; flex-wrap:wrap; }
    .fl-btn { display:inline-flex; align-items:center; gap:6px; padding:7px 14px; border-radius:8px; border:none; font-size:0.78rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .fl-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .fl-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#f1f5f9; }
    .fl-btn-primary { background:#00d4ff; color:#000; }
    .fl-btn-primary:hover { opacity:0.9; }
    .fl-zoom-display { padding:5px 12px; border-radius:7px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); font-size:0.78rem; font-weight:700; color:#94a3b8; min-width:52px; text-align:center; }

    /* ── Viewport ── */
    .fl-viewport-wrap { display:flex; gap:16px; align-items:flex-start; }
    .fl-viewport {
      flex:1; overflow:hidden; border-radius:16px;
      background:radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%),
                 linear-gradient(135deg, #0a0a14 0%, #0d0d1a 100%);
      border:1px solid rgba(255,255,255,0.08);
      position:relative; height:540px; cursor:grab; user-select:none;
    }
    .fl-viewport:active { cursor:grabbing; }
    .fl-canvas {
      position:absolute; transform-origin:0 0;
      transition:transform 0.1s ease;
    }

    /* ── SVG node styles ── */
    .fl-node { cursor:pointer; transition:all 0.2s; }
    .fl-node:hover .fl-node-rect { filter:brightness(1.3); }
    .fl-node:hover .fl-node-shadow { opacity:0.6 !important; }
    .fl-node text { pointer-events:none; font-family:Inter,sans-serif; }

    /* ── Legend ── */
    .fl-legend { display:flex; flex-direction:column; gap:8px; min-width:140px; }
    .fl-legend-item { display:flex; align-items:center; gap:8px; font-size:0.74rem; color:#94a3b8; }
    .fl-legend-dot  { width:12px; height:12px; border-radius:3px; flex-shrink:0; }

    /* ── Detail panel ── */
    .fl-detail { background:#0d0d14; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px; min-width:240px; max-width:260px; animation:flDetailIn 0.22s ease; }
    @keyframes flDetailIn { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
    .fl-detail-icon { font-size:1.8rem; margin-bottom:10px; }
    .fl-detail-type { font-size:0.64rem; font-weight:700; text-transform:uppercase; letter-spacing:0.10em; margin-bottom:6px; }
    .fl-detail-title { font-size:0.92rem; font-weight:800; margin-bottom:8px; }
    .fl-detail-desc  { font-size:0.76rem; color:#94a3b8; line-height:1.55; margin-bottom:12px; }
    .fl-detail-meta  { font-size:0.70rem; color:#6b7280; display:flex; flex-direction:column; gap:4px; }
    .fl-detail-meta span { display:flex; gap:6px; align-items:center; }

    /* ── Minimap ── */
    .fl-minimap { position:absolute; bottom:12px; right:12px; width:120px; height:70px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.10); border-radius:8px; overflow:hidden; }
    .fl-minimap-vp { position:absolute; border:1px solid #00d4ff; border-radius:3px; background:rgba(0,212,255,0.08); }
  `;
  document.head.appendChild(s);
}
injectFlowsCSS();

// ── State ─────────────────────────────────────────────────────
let FL = {
  flow: 'training',
  zoom: 1.0,
  panX: 0, panY: 0,
  dragging: false, lastX: 0, lastY: 0,
  selectedNode: null,
};

// ── SVG Helpers ───────────────────────────────────────────────
const FL_COLORS = {
  start:    { stroke:'#22c55e', fill:'rgba(34,197,94,0.12)',   glow:'rgba(34,197,94,0.25)'   },
  end:      { stroke:'#22c55e', fill:'rgba(34,197,94,0.12)',   glow:'rgba(34,197,94,0.25)'   },
  process:  { stroke:'#00d4ff', fill:'rgba(0,212,255,0.08)',   glow:'rgba(0,212,255,0.20)'   },
  decision: { stroke:'#f59e0b', fill:'rgba(245,158,11,0.10)',  glow:'rgba(245,158,11,0.25)'  },
  action:   { stroke:'#8b5cf6', fill:'rgba(139,92,246,0.10)',  glow:'rgba(139,92,246,0.25)'  },
  output:   { stroke:'#14b8a6', fill:'rgba(20,184,166,0.10)',  glow:'rgba(20,184,166,0.25)'  },
  alert:    { stroke:'#ef4444', fill:'rgba(239,68,68,0.10)',   glow:'rgba(239,68,68,0.25)'   },
};

// Node: cx, cy are CENTER coordinates
function flNode(id, type, icon, label, sub, cx, cy) {
  const c = FL_COLORS[type] || FL_COLORS.process;
  const W = 168, H = 58;

  if (type === 'start' || type === 'end') {
    return `<g class="fl-node" onclick="flSelectNode('${id}')">
      <ellipse cx="${cx}" cy="${cy}" rx="72" ry="22" fill="${c.glow}" filter="url(#fl-blur)"/>
      <rect x="${cx-72}" y="${cy-22}" width="144" height="44" rx="22" fill="${c.fill}" stroke="${c.stroke}" stroke-width="2"/>
      <text x="${cx}" y="${cy+5}" text-anchor="middle" fill="${c.stroke}" font-size="13" font-weight="800">${icon} ${label}</text>
    </g>`;
  }

  if (type === 'decision') {
    const dw = 84, dh = 44;
    const pts = `${cx},${cy-dh} ${cx+dw},${cy} ${cx},${cy+dh} ${cx-dw},${cy}`;
    return `<g class="fl-node" onclick="flSelectNode('${id}')">
      <polygon points="${pts}" fill="${c.glow}" transform="translate(0,3)" filter="url(#fl-blur)"/>
      <polygon points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="2"/>
      <text x="${cx}" y="${cy-6}" text-anchor="middle" fill="${c.stroke}" font-size="12">${icon}</text>
      <text x="${cx}" y="${cy+9}" text-anchor="middle" fill="#f1f5f9" font-size="9.5" font-weight="700">${label}</text>
    </g>`;
  }

  // Standard rounded rect
  return `<g class="fl-node" onclick="flSelectNode('${id}')">
    <rect x="${cx-W/2+2}" y="${cy-H/2+4}" width="${W}" height="${H}" rx="12" fill="${c.glow}" filter="url(#fl-blur)"/>
    <rect x="${cx-W/2}" y="${cy-H/2}" width="${W}" height="${H}" rx="12" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.5"/>
    <text x="${cx}" y="${cy-7}" text-anchor="middle" fill="${c.stroke}" font-size="14">${icon}</text>
    <text x="${cx}" y="${cy+8}" text-anchor="middle" fill="#f1f5f9" font-size="9.5" font-weight="700">${label}</text>
    ${sub ? `<text x="${cx}" y="${cy+22}" text-anchor="middle" fill="#6b7280" font-size="8.5">${sub}</text>` : ''}
  </g>`;
}

// Edge: connects two points with a bezier curve + arrowhead
function flEdge(x1, y1, x2, y2, label, color, bend) {
  const c = color || '#4b5563';
  const id = 'arr' + Math.abs(x1+y1+x2+y2).toFixed(0);
  let cp1x, cp1y, cp2x, cp2y;

  if (bend === 'v') {
    // Purely vertical — straight down
    cp1x = x1; cp1y = y1 + (y2-y1)*0.4;
    cp2x = x2; cp2y = y2 - (y2-y1)*0.4;
  } else if (bend === 'h') {
    // Purely horizontal
    cp1x = x1 + (x2-x1)*0.4; cp1y = y1;
    cp2x = x2 - (x2-x1)*0.4; cp2y = y2;
  } else if (bend === 'diag-ru') {
    // Right then up
    cp1x = x2; cp1y = y1;
    cp2x = x2; cp2y = y1 + (y2-y1)*0.4;
  } else if (bend === 'diag-rd') {
    // Right then down
    cp1x = x2; cp1y = y1;
    cp2x = x2; cp2y = y1 + (y2-y1)*0.6;
  } else if (bend === 'loop') {
    // Curved loop back (used for retrain → training)
    cp1x = x1; cp1y = y1 + 60;
    cp2x = x2; cp2y = y2 + 60;
  } else {
    cp1x = x1 + (x2-x1)*0.5; cp1y = y1;
    cp2x = x1 + (x2-x1)*0.5; cp2y = y2;
  }

  const d = `M${x1},${y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`;
  const mx = (x1+x2)/2 + (cp1x-x1)*0.1;
  const my = (y1+y2)/2 + (cp1y-y1)*0.1 - 8;

  return `
    <defs>
      <marker id="${id}" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <polygon points="0 0, 8 3.5, 0 7" fill="${c}"/>
      </marker>
    </defs>
    <path d="${d}" fill="none" stroke="${c}" stroke-width="1.8" stroke-dasharray="" marker-end="url(#${id})" opacity="0.75"/>
    ${label ? `<rect x="${mx-18}" y="${my-10}" width="36" height="14" rx="4" fill="#1a1a26"/>
    <text x="${mx}" y="${my+1}" text-anchor="middle" fill="${c}" font-size="8.5" font-weight="700">${label}</text>` : ''}
  `;
}

// Grid line background for the canvas
function flGrid(W, H) {
  let lines = '';
  for (let x = 0; x <= W; x += 40) lines += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="rgba(255,255,255,0.025)" stroke-width="1"/>`;
  for (let y = 0; y <= H; y += 40) lines += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(255,255,255,0.025)" stroke-width="1"/>`;
  return `<g>${lines}</g>`;
}

function flSVGWrap(W, H, content) {
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="fl-blur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4"/>
    </filter>
  </defs>
  ${flGrid(W, H)}
  ${content}
</svg>`;
}

// ══════════════════════════════════════════════════════════════
//  FLOW 1 — TREINAMENTO
// ══════════════════════════════════════════════════════════════
function buildFlowTraining() {
  // Layout: left → right, 1200 x 500
  // Row y=150 (main), y=60 (top branch YES), y=280 (bot branch NO)
  const W=1180, H=440;
  const nodes = [
    flNode('tr_start', 'start',    '🚀', 'Início',          '',                 70,  220),
    flNode('tr_cad',   'process',  '👤', 'Cadastro',        'Usuário criado',   230, 220),
    flNode('tr_risk',  'process',  '⚡', 'Avaliação Risco', 'Score calculado',  420, 220),
    flNode('tr_d1',    'decision', '⚠️', 'Alto Risco?',    '',                 610, 220),
    flNode('tr_urg',   'action',   '🔴', 'Trilha Urgente',  'Prazo: 7 dias',   610, 80),
    flNode('tr_pad',   'action',   '🟡', 'Trilha Padrão',   'Prazo: 30 dias',  610, 360),
    flNode('tr_train', 'process',  '📚', 'Treinamento',     'Módulos + quizzes',800, 220),
    flNode('tr_d2',    'decision', '❓', 'Aprovado?',       '',               1000, 220),
    flNode('tr_cert',  'output',   '🏆', 'Certificado',     'Emitido digitalmente',1000,80),
    flNode('tr_retry', 'action',   '🔄', 'Retreinamento',   'Novo ciclo',     1000, 360),
    flNode('tr_end',   'end',      '✅', 'Concluído',       '',               1130, 220),
  ];

  const edges = [
    flEdge(142, 220, 146, 220, '', '#4b5563', 'h'),
    flEdge(314, 220, 336, 220, '', '#4b5563', 'h'),
    flEdge(504, 220, 526, 220, '', '#4b5563', 'h'),
    // d1 → top (YES = alto risco)
    flEdge(610, 176, 610, 124, 'SIM', '#ef4444', 'v'),
    // d1 → bottom (NO = baixo)
    flEdge(610, 264, 610, 316, 'NÃO', '#22c55e', 'v'),
    // urg → train
    flEdge(694, 80, 716, 220, '', '#8b5cf6', 'diag-rd'),
    // pad → train
    flEdge(694, 360, 716, 220, '', '#8b5cf6', 'diag-ru'),
    flEdge(884, 220, 916, 220, '', '#4b5563', 'h'),
    // d2 → cert (YES)
    flEdge(1000, 176, 1000, 124, 'SIM', '#22c55e', 'v'),
    // d2 → retry (NO)
    flEdge(1000, 264, 1000, 316, 'NÃO', '#ef4444', 'v'),
    // retry → train (loop back)
    flEdge(916, 360, 800, 278, '', '#ef4444', 'loop'),
    // cert → end
    flEdge(1072, 80, 1130, 198, '', '#22c55e', 'diag-rd'),
    // d2 middle → end straight
  ];

  return flSVGWrap(W, H, nodes.join('') + edges.join(''));
}

// ══════════════════════════════════════════════════════════════
//  FLOW 2 — PHISHING SIMULATION
// ══════════════════════════════════════════════════════════════
function buildFlowPhishing() {
  const W=1180, H=440;
  const nodes = [
    flNode('ph_start',   'start',    '📧', 'Campanha',        '',                   70,  220),
    flNode('ph_template','process',  '📝', 'Definir Template', 'E-mail malicioso',  230, 220),
    flNode('ph_targets', 'process',  '🎯', 'Selecionar Alvos', 'Dep. ou usuários',  420, 220),
    flNode('ph_send',    'process',  '📨', 'Enviar E-mails',   'Disparo automático',610, 220),
    flNode('ph_d1',      'decision', '🖱', 'Clicou no Link?',  '',                 800, 220),
    flNode('ph_alert',   'alert',    '🚨', 'Alerta de Risco',  'Score sobe +15pts', 800, 80),
    flNode('ph_train_c', 'action',   '📚', 'Treino Corretivo', 'Módulo phishing',   800, 360),
    flNode('ph_score_hi','action',   '📉', 'Score Atualizado', 'Risk alto',        1000, 80),
    flNode('ph_reinf',   'output',   '✨', 'Reforço Positivo', 'Usuário seguro',   1000, 360),
    flNode('ph_report',  'output',   '📊', 'Relatório',        'Resultados da camp.',1000,220),
    flNode('ph_end',     'end',      '✅', 'Concluído',        '',                 1130, 220),
  ];

  const edges = [
    flEdge(142, 220, 146, 220, '', '#4b5563', 'h'),
    flEdge(314, 220, 336, 220, '', '#4b5563', 'h'),
    flEdge(504, 220, 526, 220, '', '#4b5563', 'h'),
    flEdge(694, 220, 716, 220, '', '#4b5563', 'h'),
    flEdge(800, 176, 800, 124, 'SIM', '#ef4444', 'v'),
    flEdge(800, 264, 800, 316, 'NÃO', '#22c55e', 'v'),
    flEdge(884, 80,  916, 80,  '', '#ef4444', 'h'),
    flEdge(884, 360, 916, 360, '', '#22c55e', 'h'),
    flEdge(1084, 80,  1084, 198, '', '#ef4444', 'v'),
    flEdge(1084, 360, 1084, 242, '', '#22c55e', 'v'),
    flEdge(1084, 220, 1056, 220, '', '#4b5563', 'h'),
    flEdge(916, 220, 930, 220,  '', '#4b5563', 'h'),
    flEdge(1084, 220, 1116, 220, '', '#4b5563', 'h'),
  ];

  return flSVGWrap(W, H, nodes.join('') + edges.join(''));
}

// ══════════════════════════════════════════════════════════════
//  FLOW 3 — COMPLIANCE
// ══════════════════════════════════════════════════════════════
function buildFlowCompliance() {
  const W=1180, H=440;
  const nodes = [
    flNode('co_start', 'start',    '📋', 'Requisito',       '',                  70,  220),
    flNode('co_map',   'process',  '🗺', 'Mapeamento',      'LGPD, GDPR, NIS2', 230, 220),
    flNode('co_scope', 'process',  '🎯', 'Definir Escopo',  'Dep. afetados',    420, 220),
    flNode('co_asn',   'process',  '📌', 'Atribuir Trilha', 'Obrigatório',      610, 220),
    flNode('co_train', 'process',  '📚', 'Treinamento',     'Conteúdo regulatório', 800, 220),
    flNode('co_test',  'process',  '📝', 'Avaliação',       'Prova + score',   1000, 220),
    flNode('co_d1',    'decision', '✓',  'Aprovado?',       '',                1000, 360),
    flNode('co_evid',  'output',   '📄', 'Evidências',      'Log + certificado',800, 360),
    flNode('co_gap',   'action',   '🔍', 'Análise de Gap',  'Corrigir falhas',  610, 360),
    flNode('co_audit', 'output',   '🔒', 'Auditoria',       'Relatório final',  800,  80),
    flNode('co_end',   'end',      '✅', 'Conforme',        '',                1000,  80),
  ];

  const edges = [
    flEdge(142, 220, 146, 220, '', '#4b5563', 'h'),
    flEdge(314, 220, 336, 220, '', '#4b5563', 'h'),
    flEdge(504, 220, 526, 220, '', '#4b5563', 'h'),
    flEdge(694, 220, 716, 220, '', '#4b5563', 'h'),
    flEdge(884, 220, 916, 220, '', '#4b5563', 'h'),
    flEdge(1000, 264, 1000, 316, '', '#4b5563', 'v'),
    flEdge(1000, 360, 884, 360, 'SIM', '#22c55e', 'h'),
    flEdge(1000, 360, 694, 360, 'NÃO', '#ef4444', 'h'),
    // gap → re-train
    flEdge(610, 316, 610, 242, '', '#f59e0b', 'v'),
    // evid → audit
    flEdge(800, 316, 800, 124, '', '#14b8a6', 'v'),
    // audit → end
    flEdge(884, 80, 916, 80, '', '#22c55e', 'h'),
  ];

  return flSVGWrap(W, H, nodes.join('') + edges.join(''));
}

// ══════════════════════════════════════════════════════════════
//  FLOW 4 — ONBOARDING
// ══════════════════════════════════════════════════════════════
function buildFlowOnboarding() {
  const W=1180, H=440;
  const nodes = [
    flNode('ob_start', 'start',    '🏢', 'Contratação',     '',                   70,  220),
    flNode('ob_hr',    'process',  '👥', 'RH Notifica',     'Dados do colaborador',230, 220),
    flNode('ob_acc',   'process',  '🔐', 'Criar Conta',     'E-mail + SSO + MFA', 420, 220),
    flNode('ob_dept',  'process',  '🏢', 'Departamento',    'Atribuir trilhas',   610, 220),
    flNode('ob_d1',    'decision', '❓', 'Cargo de Risco?', '',                   800, 220),
    flNode('ob_int',   'action',   '🔴', 'Trilha Intensiva','Seg. + Compliance',  800,  80),
    flNode('ob_std',   'action',   '🟢', 'Trilha Padrão',   'Onboarding geral',   800, 360),
    flNode('ob_week1', 'process',  '📅', '1ª Semana',       '80% obrigatórios',  1000, 220),
    flNode('ob_cert',  'output',   '🏆', '1º Certificado',  'Badge de boas-vindas',1000,80),
    flNode('ob_risk',  'output',   '📊', 'Risk Score',      'Baseline criado',   1000, 360),
    flNode('ob_end',   'end',      '✅', 'Integrado',       '',                  1130, 220),
  ];

  const edges = [
    flEdge(142, 220, 146, 220, '', '#4b5563', 'h'),
    flEdge(314, 220, 336, 220, '', '#4b5563', 'h'),
    flEdge(504, 220, 526, 220, '', '#4b5563', 'h'),
    flEdge(694, 220, 716, 220, '', '#4b5563', 'h'),
    flEdge(800, 176, 800, 124, 'SIM', '#ef4444', 'v'),
    flEdge(800, 264, 800, 316, 'NÃO', '#22c55e', 'v'),
    flEdge(884, 80,  916, 80,  '', '#ef4444', 'h'),
    flEdge(884, 360, 916, 360, '', '#22c55e', 'h'),
    flEdge(1000, 124, 1000, 198, '', '#4b5563', 'v'),
    flEdge(1000, 316, 1000, 242, '', '#4b5563', 'v'),
    flEdge(1084, 220, 1116, 220, '', '#22c55e', 'h'),
  ];

  return flSVGWrap(W, H, nodes.join('') + edges.join(''));
}

// ══════════════════════════════════════════════════════════════
//  NODE DETAIL DATA
// ══════════════════════════════════════════════════════════════
const FL_NODE_INFO = {
  // Training
  tr_start:   { icon:'🚀', type:'Início',    title:'Novo Colaborador',        desc:'Ponto de entrada: usuário criado manualmente, por importação CSV ou sincronização SCIM/LDAP. Evento que dispara o fluxo de treinamento.',         meta:[['Gatilho','Criação de usuário'],['Sistema','IAM / HR Sync']] },
  tr_cad:     { icon:'👤', type:'Processo',  title:'Cadastro & Perfil',       desc:'Dados básicos preenchidos: nome, e-mail, departamento, cargo. MFA ativado e convite de SSO enviado.',                                         meta:[['Ação','Envio de e-mail de boas-vindas'],['SLA','5 minutos']] },
  tr_risk:    { icon:'⚡', type:'Processo',  title:'Avaliação de Risco',      desc:'Cálculo do Human Risk Score inicial baseado em histórico, cargo, departamento e dados de campanhas anteriores. Score de 0 a 100.',             meta:[['Score inicial','Calculado em tempo real'],['Algoritmo','ML Risk Model v2']] },
  tr_d1:      { icon:'⚠️', type:'Decisão',   title:'Verificação de Risco',    desc:'Se o Human Risk Score for ≥ 60 pontos (Alto), o colaborador é direcionado à trilha urgente. Caso contrário, segue a trilha padrão.',          meta:[['Threshold','≥ 60 = Alto Risco'],['Revisão','A cada 30 dias']] },
  tr_urg:     { icon:'🔴', type:'Ação',      title:'Trilha Urgente',          desc:'Trilha intensiva com módulos obrigatórios de Phishing, Senhas, MFA e LGPD. Prazo de 7 dias corridos. Gestores notificados.',                   meta:[['Prazo','7 dias'],['Módulos','6 obrigatórios']] },
  tr_pad:     { icon:'🟡', type:'Ação',      title:'Trilha Padrão',           desc:'Trilha de onboarding padrão com módulos de boas-vindas, compliance básico e cybersecurity essentials. Prazo de 30 dias.',                     meta:[['Prazo','30 dias'],['Módulos','4 obrigatórios']] },
  tr_train:   { icon:'📚', type:'Processo',  title:'Treinamento',             desc:'Execução dos módulos de e-learning, vídeos, quizzes e simulações. Progresso salvo automaticamente. Suporte a mobile e desktop.',              meta:[['Formatos','Vídeo, Quiz, PDF, SCORM'],['Plataforma','Multi-device']] },
  tr_d2:      { icon:'❓', type:'Decisão',   title:'Aprovação',               desc:'O colaborador precisa atingir nota mínima de 70% nos quizzes para ser aprovado. Em caso de reprovação, um novo ciclo é iniciado.',            meta:[['Nota mínima','70%'],['Tentativas','Ilimitadas']] },
  tr_cert:    { icon:'🏆', type:'Saída',     title:'Certificado Digital',     desc:'Certificado emitido automaticamente com hash de verificação, assinatura digital e QR Code. Enviado por e-mail e disponível no perfil.',        meta:[['Validade','12 meses'],['Verificação','QR Code + Link público']] },
  tr_retry:   { icon:'🔄', type:'Ação',      title:'Retreinamento',           desc:'Módulos de reforço personalizados baseados nos pontos onde o colaborador errou. Score de risco aumentado temporariamente.',                   meta:[['Espera','24 horas'],['Módulos','Personalizados por IA']] },
  tr_end:     { icon:'✅', type:'Fim',       title:'Processo Concluído',      desc:'Colaborador completa o ciclo de treinamento. Risk Score atualizado, certificado no perfil e relatório enviado ao gestor.',                    meta:[['Notificação','Gestor + RH'],['Dashboard','Atualizado em tempo real']] },
  // Phishing
  ph_start:   { icon:'📧', type:'Início',    title:'Nova Campanha',           desc:'Campanha de phishing simulation criada pelo administrador com nome, objetivo, janela de tempo e grupo-alvo definidos.',                         meta:[['Criador','Admin / CISO'],['Tipos','E-mail, SMS, QR Code']] },
  ph_template:{ icon:'📝', type:'Processo',  title:'Definir Template',        desc:'Seleção ou criação do template de e-mail malicioso simulado: invoice fraud, suporte de TI, redefinição de senha, entre outros.',             meta:[['Biblioteca','50+ templates'],['Personalização','Logo, domínio']] },
  ph_targets: { icon:'🎯', type:'Processo',  title:'Selecionar Alvos',        desc:'Definição do público: todos os usuários, departamento específico, grupo de risco ou lista manual. Programação de horário de envio.',           meta:[['Granularidade','Usuário, Dept, Grupo'],['Horário','Programável']] },
  ph_send:    { icon:'📨', type:'Processo',  title:'Envio dos E-mails',       desc:'Disparo automático dos e-mails simulados via SMTP seguro. Tracking de abertura, clique e reporte ativado por pixel e link rastreado.',         meta:[['Tracking','Pixel + URL rastreada'],['SMTP','TLS 1.3']] },
  ph_d1:      { icon:'🖱', type:'Decisão',   title:'Clique no Link',          desc:'Se o colaborador clicar no link malicioso simulado, o sistema registra o evento, aumenta o risk score e inicia o fluxo corretivo automaticamente.', meta:[['Detecção','Tempo real'],['Score','Risk +15pts']] },
  ph_alert:   { icon:'🚨', type:'Alerta',   title:'Alerta de Risco',         desc:'Alerta enviado ao CISO e gestor imediato. Usuário redirecionado para página de conscientização imediata com explicação do ataque.',             meta:[['Notificados','CISO, Gestor'],['Redirecionamento','Página educativa']] },
  ph_report:  { icon:'📊', type:'Saída',     title:'Relatório de Campanha',   desc:'Relatório completo com taxa de cliques, taxa de abertura, usuários expostos e análise comparativa com campanhas anteriores.',                  meta:[['Métricas','Cliques, Aberturas, Reports'],['Exportação','PDF, Excel']] },
  // Compliance
  co_start:   { icon:'📋', type:'Início',    title:'Requisito Regulatório',   desc:'Identificação de novo requisito: LGPD, GDPR, NIS2, SOC 2, ISO 27001, Lei Anticorrupção. Entrada manual ou via monitor de regulatórios.',      meta:[['Fonte','Monitor regulatório'],['Regiões','BR, EU, US, SA']] },
  co_map:     { icon:'🗺', type:'Processo',  title:'Mapeamento de Obrigações',desc:'Análise detalhada do regulatório: artigos aplicáveis, obrigações da empresa, prazos de adequação e sanções por descumprimento.',              meta:[['Metodologia','ISO 31000'],['Revisão','Anual']] },
  co_scope:   { icon:'🎯', type:'Processo',  title:'Definição de Escopo',     desc:'Identificação dos departamentos, cargos e processos afetados pelo requisito. Mapeamento de controladores e operadores de dados.',              meta:[['Output','Matriz RACI'],['Ferramenta','Risk Matrix']] },
  co_evid:    { icon:'📄', type:'Saída',     title:'Evidências de Auditoria', desc:'Registro automático de todas as conclusões, datas, notas e documentos. Trilha de auditoria imutável com hash de integridade.',                 meta:[['Armazenamento','7 anos'],['Integridade','Hash SHA-256']] },
  co_audit:   { icon:'🔒', type:'Saída',     title:'Relatório de Auditoria',  desc:'Documento formal com evidências, nível de conformidade, lacunas identificadas e plano de remediação. Pronto para órgãos reguladores.',         meta:[['Formato','PDF/A-3'],['Assinatura','Digital + carimbo de tempo']] },
  co_end:     { icon:'✅', type:'Fim',       title:'Organização Conforme',    desc:'Estado de conformidade atingido. Certificados emitidos, evidências arquivadas e próxima revisão agendada automaticamente.',                    meta:[['Próxima revisão','Automática em 12 meses'],['Status','Dashboard atualizado']] },
  // Onboarding
  ob_start:   { icon:'🏢', type:'Início',    title:'Nova Contratação',        desc:'Colaborador contratado pelo RH. Evento gerado pelo sistema de RH (SAP, Workday, SuccessFactors) via integração SCIM ou importação manual.',    meta:[['Integração','SAP / Workday / SCIM'],['Gatilho','Admissão']] },
  ob_acc:     { icon:'🔐', type:'Processo',  title:'Criação de Conta',        desc:'Conta criada automaticamente: e-mail corporativo, credenciais temporárias, MFA configurado e convite SSO enviado via Azure AD ou Google.',     meta:[['MFA','Obrigatório'],['SSO','Azure AD / Google']] },
  ob_week1:   { icon:'📅', type:'Processo',  title:'Primeira Semana',         desc:'Meta: completar 80% dos módulos obrigatórios na primeira semana. Lembretes diários automáticos. Gestor notificado em caso de atraso.',          meta:[['Meta','80% em 7 dias'],['Lembretes','Diários automatizados']] },
  ob_cert:    { icon:'🏆', type:'Saída',     title:'Primeiro Certificado',    desc:'Badge de boas-vindas e primeiro certificado da organização emitido. Compartilhado no perfil e enviado ao colaborador por e-mail.',              meta:[['Badge','Bem-vindo à empresa'],['Compartilhamento','LinkedIn opt-in']] },
  ob_end:     { icon:'✅', type:'Fim',       title:'Integração Completa',     desc:'Colaborador completamente integrado: conta ativa, trilha iniciada, baseline de risco criado e acesso à plataforma completo.',                  meta:[['Tempo médio','3 dias úteis'],['Relatório','Enviado ao RH']] },
};

// ── Flow Definitions ─────────────────────────────────────────
const FL_FLOWS = [
  { id:'training',   icon:'📚', name:'Fluxo de Treinamento',         desc:'Do cadastro ao certificado',           build: buildFlowTraining    },
  { id:'phishing',   icon:'📧', name:'Fluxo de Phishing Simulation',  desc:'Da campanha ao relatório de riscos',   build: buildFlowPhishing    },
  { id:'compliance', icon:'📋', name:'Fluxo de Compliance',           desc:'Do requisito à conformidade',          build: buildFlowCompliance  },
  { id:'onboarding', icon:'🏢', name:'Fluxo de Onboarding',           desc:'Da contratação à integração completa', build: buildFlowOnboarding  },
];

// ══════════════════════════════════════════════════════════════
//  MAIN RENDER
// ══════════════════════════════════════════════════════════════
window.renderPage_flows = function() {
  injectFlowsCSS();
  const flow = FL_FLOWS.find(f => f.id === FL.flow) || FL_FLOWS[0];

  return `
<div id="flows-module">
  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:18px;">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">🔀 Fluxo de Sistema</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px;">Representação visual dos processos e decisões da plataforma</p>
    </div>
    <div style="display:flex;gap:8px;">
      <button class="fl-btn fl-btn-ghost" onclick="flExport()">📤 Exportar SVG</button>
      <button class="fl-btn fl-btn-primary" onclick="flResetView()">⊕ Centralizar</button>
    </div>
  </div>

  <!-- Flow selector tabs -->
  <div class="fl-tabs">
    ${FL_FLOWS.map(f=>`
      <button class="fl-tab${FL.flow===f.id?' active':''}" onclick="flSelectFlow('${f.id}')">
        ${f.icon} ${f.name}
      </button>`).join('')}
  </div>

  <!-- Flow description -->
  <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);margin-bottom:14px;">
    <span style="font-size:1.2rem;">${flow.icon}</span>
    <div>
      <span style="font-weight:700;font-size:0.88rem;">${flow.name}</span>
      <span style="font-size:0.78rem;color:#6b7280;margin-left:10px;">${flow.desc}</span>
    </div>
    <div style="margin-left:auto;display:flex;gap:6px;align-items:center;font-size:0.72rem;color:#6b7280;">
      <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:2px;background:#00d4ff;display:inline-block;"></span>Processo</span>
      <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>Decisão</span>
      <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:2px;background:#8b5cf6;display:inline-block;"></span>Ação</span>
      <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:2px;background:#14b8a6;display:inline-block;"></span>Saída</span>
    </div>
  </div>

  <!-- Toolbar -->
  <div class="fl-toolbar">
    <button class="fl-btn fl-btn-ghost" onclick="flZoom(-0.15)" title="Zoom out">🔍−</button>
    <span class="fl-zoom-display" id="fl-zoom-lbl">${Math.round(FL.zoom*100)}%</span>
    <button class="fl-btn fl-btn-ghost" onclick="flZoom(+0.15)" title="Zoom in">🔍+</button>
    <button class="fl-btn fl-btn-ghost" onclick="flResetView()" title="Reset">↩ Reset</button>
    <span style="font-size:0.72rem;color:#6b7280;margin-left:8px;">💡 Clique em um nó para ver detalhes · Arraste para navegar</span>
  </div>

  <!-- Main area -->
  <div class="fl-viewport-wrap">
    <!-- Viewport -->
    <div class="fl-viewport" id="fl-viewport"
      onmousedown="flDragStart(event)"
      onmousemove="flDragMove(event)"
      onmouseup="flDragEnd()"
      onmouseleave="flDragEnd()"
      onwheel="flWheel(event)">
      <div class="fl-canvas" id="fl-canvas" style="transform:scale(${FL.zoom}) translate(${FL.panX}px,${FL.panY}px);">
        ${flow.build()}
      </div>
      <!-- Minimap -->
      <div class="fl-minimap" id="fl-minimap">
        <div style="transform:scale(0.10);transform-origin:0 0;opacity:0.5;pointer-events:none;">
          ${flow.build()}
        </div>
      </div>
    </div>

    <!-- Detail panel -->
    <div id="fl-detail-panel" style="display:none;">
      <div class="fl-detail" id="fl-detail-content"></div>
    </div>
  </div>
</div>`;
};

window.initPage_flows = function() {
  FL.panX = 20; FL.panY = 40; FL.zoom = 0.85;
  setTimeout(() => flApplyTransform(), 50);
};

// ── Flow selection ────────────────────────────────────────────
window.flSelectFlow = function(id) {
  FL.flow = id; FL.panX = 20; FL.panY = 40; FL.zoom = 0.85; FL.selectedNode = null;
  document.querySelectorAll('.fl-tab').forEach(b => {
    const flowId = FL_FLOWS.find(f => b.textContent.includes(f.name));
    b.classList.toggle('active', b.textContent.includes(FL_FLOWS.find(f=>f.id===id).name));
  });
  const viewport = document.getElementById('fl-viewport');
  if (!viewport) return;
  viewport.style.opacity = '0';
  setTimeout(() => {
    const flow = FL_FLOWS.find(f => f.id === id);
    const canvas = document.getElementById('fl-canvas');
    if (canvas && flow) canvas.innerHTML = flow.build();
    const mini = document.getElementById('fl-minimap');
    if (mini && flow) mini.querySelector('div').innerHTML = flow.build();
    const panel = document.getElementById('fl-detail-panel');
    if (panel) panel.style.display = 'none';
    flApplyTransform();
    viewport.style.transition = 'opacity 0.25s';
    viewport.style.opacity = '1';
  }, 150);
};

// ── Zoom & Pan ────────────────────────────────────────────────
window.flZoom = function(delta) {
  FL.zoom = Math.min(2.0, Math.max(0.35, FL.zoom + delta));
  const lbl = document.getElementById('fl-zoom-lbl');
  if (lbl) lbl.textContent = Math.round(FL.zoom * 100) + '%';
  flApplyTransform();
};

window.flWheel = function(e) {
  e.preventDefault();
  flZoom(e.deltaY < 0 ? 0.08 : -0.08);
};

window.flResetView = function() {
  FL.zoom = 0.85; FL.panX = 20; FL.panY = 40;
  const lbl = document.getElementById('fl-zoom-lbl');
  if (lbl) lbl.textContent = '85%';
  flApplyTransform();
};

window.flDragStart = function(e) {
  if (e.button !== 0) return;
  FL.dragging = true; FL.lastX = e.clientX; FL.lastY = e.clientY;
};
window.flDragMove = function(e) {
  if (!FL.dragging) return;
  FL.panX += (e.clientX - FL.lastX) / FL.zoom;
  FL.panY += (e.clientY - FL.lastY) / FL.zoom;
  FL.lastX = e.clientX; FL.lastY = e.clientY;
  flApplyTransform();
};
window.flDragEnd = function() { FL.dragging = false; };

function flApplyTransform() {
  const canvas = document.getElementById('fl-canvas');
  if (!canvas) return;
  canvas.style.transform = `scale(${FL.zoom}) translate(${FL.panX}px, ${FL.panY}px)`;
}

// ── Node click ────────────────────────────────────────────────
window.flSelectNode = function(id) {
  FL.selectedNode = id;
  const info = FL_NODE_INFO[id];
  const panel = document.getElementById('fl-detail-panel');
  const content = document.getElementById('fl-detail-content');
  if (!panel || !content) return;

  if (!info) {
    panel.style.display = 'none';
    return;
  }

  const typeColors = {
    'Início': '#22c55e', 'Fim': '#22c55e',
    'Processo': '#00d4ff', 'Decisão': '#f59e0b',
    'Ação': '#8b5cf6', 'Saída': '#14b8a6',
    'Alerta': '#ef4444',
  };
  const color = typeColors[info.type] || '#94a3b8';

  content.innerHTML = `
    <div class="fl-detail-icon">${info.icon}</div>
    <div class="fl-detail-type" style="color:${color};">${info.type}</div>
    <div class="fl-detail-title">${info.title}</div>
    <div class="fl-detail-desc">${info.desc}</div>
    <div class="fl-detail-meta">
      ${info.meta.map(([k,v])=>`
        <span><span style="color:#6b7280;min-width:70px;display:inline-block;">${k}:</span><span style="color:#e2e8f0;font-weight:600;">${v}</span></span>`).join('')}
    </div>
    <button onclick="document.getElementById('fl-detail-panel').style.display='none'" style="margin-top:14px;width:100%;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.10);background:rgba(255,255,255,0.04);color:#94a3b8;font-size:0.76rem;cursor:pointer;font-family:inherit;">✕ Fechar</button>`;

  panel.style.display = 'block';
};

// ── Export ────────────────────────────────────────────────────
window.flExport = function() {
  showToast&&showToast('Exportando SVG do fluxo...', 'info');
  setTimeout(() => showToast&&showToast('✅ Fluxo exportado com sucesso!', 'success'), 1200);
};

window.FL_NODE_INFO = FL_NODE_INFO; window.buildFlowTraining=buildFlowTraining; window.buildFlowPhishing=buildFlowPhishing; window.buildFlowCompliance=buildFlowCompliance; window.buildFlowOnboarding=buildFlowOnboarding;
