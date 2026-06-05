// ══════════════════════════════════════════════════════════════
//  📑 EXECUTIVE MONTHLY REPORT — Automated Intelligence
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectExecCSS() {
  if (document.getElementById('exec-css')) return;
  const s = document.createElement('style');
  s.id = 'exec-css';
  s.textContent = `
    .ex-tabs { display:flex; gap:4px; background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:5px; margin-bottom:20px; overflow-x:auto; }
    .ex-tab  { display:flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; font-size:0.83rem; font-weight:600; cursor:pointer; color:#94a3b8; background:transparent; border:none; white-space:nowrap; transition:all 0.2s; font-family:inherit; }
    .ex-tab:hover  { color:#f1f5f9; background:rgba(255,255,255,0.04); }
    .ex-tab.active { color:#000; background:#00d4ff; box-shadow:0 4px 16px rgba(0,212,255,0.25); }

    .ex-card { background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px; }
    .ex-kpi  { background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:16px; }
    .ex-kpi-val { font-size:1.7rem; font-weight:900; letter-spacing:-0.04em; }
    .ex-kpi-lbl { font-size:0.68rem; color:#6b7280; margin-top:4px; text-transform:uppercase; letter-spacing:0.07em; }
    .ex-kpi-delta { font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:99px; margin-top:6px; display:inline-flex; align-items:center; gap:3px; }

    .ex-section { font-size:0.68rem; font-weight:800; color:#6b7280; text-transform:uppercase; letter-spacing:0.10em; padding-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.06); margin-bottom:14px; margin-top:20px; }
    .ex-section:first-child { margin-top:0; }

    .ex-prog { height:6px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .ex-prog-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    .ex-btn { display:inline-flex; align-items:center; gap:6px; padding:9px 18px; border-radius:9px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .ex-btn-primary { background:#00d4ff; color:#000; box-shadow:0 4px 14px rgba(0,212,255,0.25); }
    .ex-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .ex-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .ex-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#e2e8f0; }
    .ex-btn-sm { padding:6px 12px; font-size:0.76rem; border-radius:8px; }

    .ex-input, .ex-select, .ex-textarea { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10); border-radius:9px; padding:10px 13px; color:#f1f5f9; font-size:0.85rem; font-family:inherit; outline:none; transition:border-color 0.2s; width:100%; box-sizing:border-box; }
    .ex-input:focus, .ex-select:focus { border-color:#00d4ff; box-shadow:0 0 0 3px rgba(0,212,255,0.10); }
    .ex-input::placeholder { color:#6b7280; }
    .ex-select option { background:#1a1a26; }
    .ex-label { display:block; font-size:0.70rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px; }

    .ex-toggle { position:relative; width:44px; height:24px; flex-shrink:0; }
    .ex-toggle input { opacity:0; width:0; height:0; position:absolute; }
    .ex-slider { position:absolute; inset:0; background:rgba(255,255,255,0.10); border-radius:24px; cursor:pointer; transition:0.3s; }
    .ex-slider:before { content:''; position:absolute; width:18px; height:18px; left:3px; top:3px; background:#fff; border-radius:50%; transition:0.3s; box-shadow:0 1px 4px rgba(0,0,0,.3); }
    .ex-toggle input:checked + .ex-slider { background:#00d4ff; }
    .ex-toggle input:checked + .ex-slider:before { transform:translateX(20px); }

    .ex-report-row { display:flex; align-items:center; gap:12px; padding:12px 14px; border-radius:10px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); margin-bottom:8px; transition:all 0.2s; }
    .ex-report-row:hover { background:rgba(255,255,255,0.04); }

    .ex-recip { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:9px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); margin-bottom:7px; }

    .ex-narrative { background:rgba(0,212,255,0.04); border:1px solid rgba(0,212,255,0.12); border-radius:12px; padding:18px; font-size:0.82rem; color:#94a3b8; line-height:1.75; font-style:italic; }

    .ex-maturity-gauge { position:relative; width:140px; height:80px; margin:0 auto 10px; overflow:hidden; }

    .ex-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.80); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .ex-modal { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:30px; width:100%; max-width:680px; max-height:90vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,0.7); animation:exIn 0.25s ease; }
    @keyframes exIn { from{transform:scale(0.95);opacity:0} to{transform:scale(1);opacity:1} }

    .ex-canvas-wrap { position:relative; overflow:hidden; contain:layout style; transform:translateZ(0); }
    .ex-canvas-wrap canvas { position:absolute !important; top:0; left:0; width:100% !important; height:100% !important; }
  `;
  document.head.appendChild(s);
}
injectExecCSS();

// ── State ─────────────────────────────────────────────────────
let EX = { tab: 'reports', generating: false };

// ── Mock Data ─────────────────────────────────────────────────
const EX_REPORTS = [
  { id:'r1', period:'Maio 2025', start:'01/05/2025', end:'31/05/2025', maturity:74.2, delta:+3.1, status:'sent',      sent:'01/06/2025 08:01', recipients:3, size:'2.4 MB' },
  { id:'r2', period:'Abril 2025',start:'01/04/2025', end:'30/04/2025', maturity:71.1, delta:+2.4, status:'sent',      sent:'01/05/2025 08:00', recipients:3, size:'2.1 MB' },
  { id:'r3', period:'Março 2025',start:'01/03/2025', end:'31/03/2025', maturity:68.7, delta:+4.8, status:'sent',      sent:'01/04/2025 08:02', recipients:2, size:'2.0 MB' },
  { id:'r4', period:'Fev 2025',  start:'01/02/2025', end:'28/02/2025', maturity:63.9, delta:+1.2, status:'sent',      sent:'01/03/2025 08:00', recipients:2, size:'1.9 MB' },
  { id:'r5', period:'Jan 2025',  start:'01/01/2025', end:'31/01/2025', maturity:62.7, delta:null,  status:'sent',      sent:'01/02/2025 08:00', recipients:2, size:'1.8 MB' },
  { id:'r6', period:'Jun 2025',  start:'01/06/2025', end:'30/06/2025', maturity:null, delta:null,  status:'generating',sent:null,               recipients:3, size:null    },
];

const EX_CURRENT = {
  period: 'Maio 2025', company: 'Empresa Demo S.A.', totalUsers: 340, activeUsers: 312,
  maturity: 74.2, maturityDelta: +3.1,
  training:  { completions: 2847, rate: 84, avgScore: 8.6, certs: 420, deltaRate: +6 },
  phishing:  { sent: 340, clickRate: 18, reportRate: 42, deltaClick: -4 },
  humanRisk: { avg: 65, delta: -4, high: 12, low: 187, medium: 141 },
  iso:       { coverage: 68, covered: 63, total: 93, newThisMonth: 5 },
  recs: [
    { priority:1, icon:'🔴', text:'Iniciar campanha de reforço para os 47 usuários com treinamentos vencidos — prazo recomendado: 7 dias.' },
    { priority:2, icon:'🟡', text:'Cobrir os 28 controles ISO 27001 descobertos com trilhas da biblioteca (Cloud Security e Resposta a Incidentes).' },
    { priority:3, icon:'🟢', text:'Expandir programa de phishing simulation para o departamento Operações (18% de cliques — acima da média).' },
  ],
};

const EX_NARRATIVE = `No período de Maio de 2025, a Empresa Demo S.A. registrou progresso significativo em sua postura de segurança humana, atingindo um Índice de Maturidade de 74,2 pontos — uma melhora de 3,1 pontos em relação ao mês anterior. Este resultado reflete o esforço contínuo em conscientização e treinamento de colaboradores, colocando a organização na trajetória de superar a meta de 80 pontos até o final do exercício.

Entre os destaques positivos do período, destacam-se a taxa de conclusão de treinamentos de 84%, a emissão de 420 novos certificados digitais e a redução de 4 pontos percentuais na taxa de cliques em simulações de phishing. O departamento de RH, com 96% de conclusão, e o Jurídico, com 94%, mantiveram desempenho exemplar e servem como referência interna.

No entanto, três pontos merecem atenção imediata da liderança: (1) 47 colaboradores estão com treinamentos obrigatórios vencidos, gerando exposição regulatória direta; (2) o departamento de Operações apresentou taxa de cliques em phishing de 18%, significativamente acima da média organizacional; (3) a cobertura ISO 27001 permanece em 68%, com 28 controles ainda descobertos.

Para o próximo período, recomenda-se priorizar: a regularização imediata dos treinamentos vencidos, a expansão das simulações de phishing para áreas de maior risco, e o mapeamento de trilhas de Cloud Security e Resposta a Incidentes aos controles ISO descobertos. A adoção dessas medidas pode elevar o Índice de Maturidade para a faixa de 77-80 pontos em junho.`;

const EX_CONFIG = {
  enabled: true, sendDay: 1,
  language: 'pt-BR',
  recipients: [
    { name:'Carlos Ferreira', email:'ceo@empresa.com',    role:'CEO'      },
    { name:'Mariana Teles',   email:'ciso@empresa.com',   role:'CISO'     },
    { name:'Paulo Rodrigues', email:'cfo@empresa.com',    role:'CFO'      },
  ],
  sections: { training:true, phishing:true, risk:true, iso:true, recommendations:true },
  customIntro: '',
};

const EX_HISTORY_LABELS = EX_REPORTS.filter(r=>r.maturity).map(r=>r.period).reverse();
const EX_HISTORY_SCORES  = EX_REPORTS.filter(r=>r.maturity).map(r=>r.maturity).reverse();

// ── Main Render ───────────────────────────────────────────────
window.renderPage_executive = function() {
  injectExecCSS();
  return `
<div id="exec-module">
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">📑 Relatório Executivo Mensal</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px;">Geração automática · narrativa por IA · entrega por e-mail · PDF com hash de integridade</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="ex-btn ex-btn-ghost" onclick="exTab('config')">⚙️ Configurar</button>
      <button class="ex-btn ex-btn-primary" onclick="exGenerateNow()">▶ Gerar Agora</button>
    </div>
  </div>

  <div class="ex-tabs">
    <button class="ex-tab${EX.tab==='reports'?' active':''}" onclick="exTab('reports')">📋 Relatórios</button>
    <button class="ex-tab${EX.tab==='view'?   ' active':''}" onclick="exTab('view')">👁 Visualizar</button>
    <button class="ex-tab${EX.tab==='config'? ' active':''}" onclick="exTab('config')">⚙️ Configuração</button>
  </div>

  <div id="ex-body">${exRenderTab(EX.tab)}</div>
  <div id="ex-modal-area"></div>
</div>`;
};

window.initPage_executive = function() {
  setTimeout(() => {
    document.querySelectorAll('.ex-prog-fill').forEach(el => {
      const w = el.style.width; el.style.width='0';
      requestAnimationFrame(()=>{ el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
    if (EX.tab === 'reports' || EX.tab === 'view') exInitCharts();
  }, 150);
};

window.exTab = function(tab) {
  EX.tab = tab;
  document.querySelectorAll('.ex-tab').forEach((b,i) => {
    b.classList.toggle('active', ['reports','view','config'][i] === tab);
  });
  const body = document.getElementById('ex-body');
  if (!body) return;
  body.style.opacity = '0';
  body.innerHTML = exRenderTab(tab);
  requestAnimationFrame(() => { body.style.transition='opacity 0.2s'; body.style.opacity='1'; });
  setTimeout(() => {
    document.querySelectorAll('.ex-prog-fill').forEach(el => {
      const w=el.style.width; el.style.width='0';
      requestAnimationFrame(()=>{ el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
    if (tab === 'reports' || tab === 'view') exInitCharts();
  }, 80);
};

function exRenderTab(tab) {
  if (tab === 'reports') return exRenderReports();
  if (tab === 'view')    return exRenderView();
  if (tab === 'config')  return exRenderConfig();
  return exRenderReports();
}

// ══════════════════════════════════════════════════════════════
//  TAB: REPORTS LIST
// ══════════════════════════════════════════════════════════════
function exRenderReports() {
  return `
  <!-- Maturity evolution chart -->
  <div class="ex-card" style="margin-bottom:16px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <h3 style="font-size:0.95rem;font-weight:800;">📈 Evolução do Maturity Score</h3>
      <span style="font-size:0.78rem;font-weight:800;color:#00d4ff;">Atual: ${EX_CURRENT.maturity} <span style="color:#22c55e;">▲ +${EX_CURRENT.maturityDelta}</span></span>
    </div>
    <div class="ex-canvas-wrap" style="height:160px;"><canvas id="ex-maturity-chart"></canvas></div>
  </div>

  <!-- Reports table -->
  <div class="ex-card" style="padding:0;overflow:hidden;">
    <div style="padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:space-between;">
      <h3 style="font-size:0.90rem;font-weight:800;">📋 Histórico de Relatórios</h3>
      <button class="ex-btn ex-btn-primary ex-btn-sm" onclick="exGenerateNow()">▶ Gerar Relatório</button>
    </div>
    ${EX_REPORTS.map(r=>`
      <div class="ex-report-row" style="border-radius:0;border:none;border-bottom:1px solid rgba(255,255,255,0.04);">
        <div style="width:38px;height:38px;border-radius:10px;background:rgba(0,212,255,0.08);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">
          ${r.status==='generating'?'⏳':'📑'}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.88rem;">${r.period}</div>
          <div style="font-size:0.70rem;color:#6b7280;margin-top:2px;">${r.start} – ${r.end}
            ${r.sent?`· Enviado em ${r.sent}`:''}</div>
        </div>
        ${r.maturity ? `
          <div style="text-align:center;padding:6px 12px;border-radius:9px;background:rgba(0,212,255,0.06);min-width:80px;">
            <div style="font-size:1.1rem;font-weight:900;color:#00d4ff;">${r.maturity}</div>
            <div style="font-size:0.60rem;color:#6b7280;">Maturity</div>
          </div>
          ${r.delta!==null?`<span style="font-size:0.76rem;font-weight:700;color:${r.delta>=0?'#22c55e':'#ef4444'};">${r.delta>=0?'▲':'▼'} ${Math.abs(r.delta)}</span>`:''}
        ` : `<span style="font-size:0.72rem;color:#f59e0b;background:rgba(245,158,11,0.10);padding:4px 10px;border-radius:99px;">⏳ Gerando...</span>`}
        <span class="badge ${r.status==='sent'?'badge-green':r.status==='generating'?'badge-yellow':'badge-blue'}" style="font-size:0.62rem;">${r.status==='sent'?'Enviado':r.status==='generating'?'Gerando':'Pronto'}</span>
        ${r.status!=='generating'?`
          <div style="display:flex;gap:5px;">
            <button class="ex-btn ex-btn-ghost ex-btn-sm" onclick="exTab('view')" title="Visualizar">👁</button>
            <button class="ex-btn ex-btn-ghost ex-btn-sm" onclick="showToast&&showToast('Baixando ${r.period}.pdf...','info')" title="Download">📥</button>
            <button class="ex-btn ex-btn-ghost ex-btn-sm" onclick="exResendEmail('${r.id}')" title="Reenviar">📧</button>
          </div>`:''
        }
      </div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  TAB: VIEW REPORT
// ══════════════════════════════════════════════════════════════
function exRenderView() {
  const d = EX_CURRENT;
  function deltaColor(v,invert) { return (invert?(v<0):(v>0)) ? '#22c55e' : '#ef4444'; }
  function deltaArrow(v,invert) { return ((invert?(v<0):(v>0)) ? '▲' : '▼') + ' ' + Math.abs(v); }

  return `
  <!-- Maturity Score hero -->
  <div class="ex-card" style="text-align:center;margin-bottom:16px;background:linear-gradient(135deg,rgba(0,212,255,0.05),rgba(139,92,246,0.05));">
    <div style="font-size:0.72rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:0.10em;margin-bottom:8px;">${d.period} · ${d.company}</div>
    <div style="font-size:4rem;font-weight:900;letter-spacing:-0.05em;color:#00d4ff;line-height:1;">${d.maturity}</div>
    <div style="font-size:0.80rem;color:#6b7280;margin-bottom:8px;">Índice de Maturidade em Segurança Humana · /100</div>
    <span style="font-size:0.82rem;font-weight:700;color:#22c55e;background:rgba(34,197,94,0.10);padding:4px 12px;border-radius:99px;">▲ +${d.maturityDelta} pts vs mês anterior</span>

    <!-- Maturity gauge chart -->
    <div class="ex-canvas-wrap" style="height:130px;margin:16px auto 0;max-width:400px;"><canvas id="ex-gauge-chart"></canvas></div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px;">
      ${[
        ['Taxa de Conclusão', d.training.rate+'%', deltaColor(d.training.deltaRate,false), deltaArrow(d.training.deltaRate,false)],
        ['Cliques Phishing', d.phishing.clickRate+'%', deltaColor(d.phishing.deltaClick,true), deltaArrow(d.phishing.deltaClick,true)],
        ['Risk Score Médio', d.humanRisk.avg, deltaColor(d.humanRisk.delta,true), deltaArrow(d.humanRisk.delta,true)],
        ['Cobertura ISO', d.iso.coverage+'%', '#22c55e', '▲ +'+d.iso.newThisMonth],
      ].map(([lbl,val,col,dl])=>`
        <div style="padding:10px;border-radius:10px;background:rgba(255,255,255,0.02);">
          <div style="font-size:1.1rem;font-weight:900;color:${col};">${val}</div>
          <div style="font-size:0.62rem;color:#6b7280;margin-top:2px;">${lbl}</div>
          <div style="font-size:0.68rem;font-weight:700;color:${col};margin-top:3px;">${dl}</div>
        </div>`).join('')}
    </div>
  </div>

  <!-- AI Narrative -->
  <div class="ex-card" style="margin-bottom:16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <span style="font-size:1.2rem;">🤖</span>
      <div>
        <div style="font-size:0.90rem;font-weight:800;">Narrativa Executiva</div>
        <div style="font-size:0.70rem;color:#6b7280;">Gerada pela IA · Claude Sonnet · ${d.period}</div>
      </div>
      <button class="ex-btn ex-btn-ghost ex-btn-sm" style="margin-left:auto;" onclick="exRegenerateNarrative()">🔄 Regenerar</button>
    </div>
    <div class="ex-narrative">${EX_NARRATIVE.replace(/\n/g,'<br><br>')}</div>
  </div>

  <!-- Metrics sections -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">

    <!-- Training -->
    <div class="ex-card">
      <div class="ex-section">📚 Treinamentos</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        ${[
          ['Concluídos',  d.training.completions.toLocaleString('pt-BR'), '#00d4ff'],
          ['Taxa',        d.training.rate+'%',    '#22c55e'],
          ['Nota Média',  d.training.avgScore,    '#8b5cf6'],
          ['Certificados',d.training.certs,       '#14b8a6'],
        ].map(([l,v,c])=>`
          <div style="padding:10px;border-radius:9px;background:rgba(255,255,255,0.02);">
            <div style="font-size:1.1rem;font-weight:900;color:${c};">${v}</div>
            <div style="font-size:0.65rem;color:#6b7280;margin-top:2px;">${l}</div>
          </div>`).join('')}
      </div>
      <div style="font-size:0.72rem;color:#6b7280;margin-bottom:4px;">Taxa de conclusão geral</div>
      <div class="ex-prog"><div class="ex-prog-fill" style="width:${d.training.rate}%;background:#22c55e;"></div></div>
    </div>

    <!-- Phishing -->
    <div class="ex-card">
      <div class="ex-section">📧 Phishing Simulation</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        ${[
          ['E-mails Enviados', d.phishing.sent,          '#94a3b8'],
          ['Taxa de Cliques',  d.phishing.clickRate+'%', '#ef4444'],
          ['Taxa de Reporte',  d.phishing.reportRate+'%','#22c55e'],
          ['Melhora vs Ant.',  '-'+Math.abs(d.phishing.deltaClick)+'pp', '#22c55e'],
        ].map(([l,v,c])=>`
          <div style="padding:10px;border-radius:9px;background:rgba(255,255,255,0.02);">
            <div style="font-size:1.1rem;font-weight:900;color:${c};">${v}</div>
            <div style="font-size:0.65rem;color:#6b7280;margin-top:2px;">${l}</div>
          </div>`).join('')}
      </div>
      <div style="font-size:0.72rem;color:#6b7280;margin-bottom:4px;">Taxa de cliques (menor = melhor) — meta: <10%</div>
      <div class="ex-prog"><div class="ex-prog-fill" style="width:${d.phishing.clickRate}%;background:#ef4444;"></div></div>
    </div>

    <!-- Human Risk -->
    <div class="ex-card">
      <div class="ex-section">⚠️ Human Risk Score</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px;">
        <div style="padding:10px;border-radius:9px;background:rgba(34,197,94,0.08);">
          <div style="font-size:1.1rem;font-weight:900;color:#22c55e;">${d.humanRisk.low}</div>
          <div style="font-size:0.65rem;color:#22c55e;">🟢 Baixo</div>
        </div>
        <div style="padding:10px;border-radius:9px;background:rgba(245,158,11,0.08);">
          <div style="font-size:1.1rem;font-weight:900;color:#f59e0b;">${d.humanRisk.medium}</div>
          <div style="font-size:0.65rem;color:#f59e0b;">🟡 Médio</div>
        </div>
        <div style="padding:10px;border-radius:9px;background:rgba(239,68,68,0.08);">
          <div style="font-size:1.1rem;font-weight:900;color:#ef4444;">${d.humanRisk.high}</div>
          <div style="font-size:0.65rem;color:#ef4444;">🔴 Alto</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="flex:1;">
          <div style="font-size:0.72rem;color:#6b7280;margin-bottom:3px;">Score médio: <strong style="color:#f59e0b;">${d.humanRisk.avg}/100</strong> (meta: &lt;40)</div>
          <div class="ex-prog"><div class="ex-prog-fill" style="width:${d.humanRisk.avg}%;background:#f59e0b;"></div></div>
        </div>
        <span style="font-size:0.78rem;font-weight:700;color:#22c55e;">▼ ${Math.abs(d.humanRisk.delta)} pts</span>
      </div>
    </div>

    <!-- ISO Coverage -->
    <div class="ex-card">
      <div class="ex-section">🛡 Cobertura ISO 27001:2022</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="padding:10px;border-radius:9px;background:rgba(255,255,255,0.02);">
          <div style="font-size:1.1rem;font-weight:900;color:#22c55e;">${d.iso.coverage}%</div>
          <div style="font-size:0.65rem;color:#6b7280;">Cobertura Geral</div>
        </div>
        <div style="padding:10px;border-radius:9px;background:rgba(255,255,255,0.02);">
          <div style="font-size:1.1rem;font-weight:900;color:#00d4ff;">${d.iso.covered}/${d.iso.total}</div>
          <div style="font-size:0.65rem;color:#6b7280;">Controles Cobertos</div>
        </div>
      </div>
      <div style="font-size:0.72rem;color:#6b7280;margin-bottom:4px;">+${d.iso.newThisMonth} controles cobertos este mês</div>
      <div class="ex-prog"><div class="ex-prog-fill" style="width:${d.iso.coverage}%;background:#22c55e;"></div></div>
      <button class="ex-btn ex-btn-ghost ex-btn-sm" style="margin-top:10px;" onclick="navTo&&navTo('iso27001',null)">Ver ISO 27001 →</button>
    </div>
  </div>

  <!-- Recommendations -->
  <div class="ex-card" style="margin-bottom:16px;">
    <div class="ex-section">🎯 Recomendações para o Próximo Período</div>
    ${d.recs.map(r=>`
      <div style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);margin-bottom:8px;">
        <span style="font-size:1.0rem;flex-shrink:0;">${r.icon}</span>
        <div style="flex:1;">
          <span style="font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;margin-right:8px;">Prioridade ${r.priority}</span>
          <span style="font-size:0.82rem;color:#d1d5db;">${r.text}</span>
        </div>
      </div>`).join('')}
  </div>

  <!-- Export actions -->
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <button class="ex-btn ex-btn-ghost" onclick="showToast&&showToast('Gerando PDF executivo...','info');setTimeout(()=>showToast&&showToast('✅ PDF gerado: Relatorio_Executivo_Maio2025.pdf','success'),2000)">📄 Exportar PDF</button>
    <button class="ex-btn ex-btn-ghost" onclick="showToast&&showToast('Enviando por e-mail...','info');setTimeout(()=>showToast&&showToast('✅ Enviado para 3 destinatários','success'),1500)">📧 Reenviar por E-mail</button>
    <button class="ex-btn ex-btn-primary" onclick="exGenerateNow()">▶ Gerar Próximo Relatório</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  TAB: CONFIGURATION
// ══════════════════════════════════════════════════════════════
function exRenderConfig() {
  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">

    <!-- Left col -->
    <div>
      <div class="ex-card" style="margin-bottom:14px;">
        <div class="ex-section">🔧 Configurações Gerais</div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);margin-bottom:8px;">
          <div>
            <div style="font-weight:700;font-size:0.86rem;">Relatório mensal automático</div>
            <div style="font-size:0.72rem;color:#6b7280;">Geração e envio automático</div>
          </div>
          <label class="ex-toggle">
            <input type="checkbox" ${EX_CONFIG.enabled?'checked':''} onchange="EX_CONFIG.enabled=this.checked;showToast&&showToast('Configuração salva','info')">
            <span class="ex-slider"></span>
          </label>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
          <div>
            <label class="ex-label">Dia do envio</label>
            <select class="ex-select">
              ${[1,5,10,15,28].map(d=>`<option ${d===1?'selected':''}>${d}º dia do mês</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="ex-label">Idioma</label>
            <select class="ex-select">
              <option selected>PT-BR — Português</option>
              <option>EN — English</option>
              <option>ES — Español</option>
              <option>FR — Français</option>
            </select>
          </div>
        </div>
        <div>
          <label class="ex-label">Introdução personalizada (opcional)</label>
          <textarea class="ex-input" rows="3" placeholder="Adicione uma mensagem de abertura personalizada para o relatório...">${EX_CONFIG.customIntro}</textarea>
        </div>
      </div>

      <div class="ex-card">
        <div class="ex-section">📋 Seções do Relatório</div>
        ${[
          ['training',       '📚 Treinamentos & Certificados'],
          ['phishing',       '📧 Phishing Simulation'],
          ['risk',           '⚠️ Human Risk Score'],
          ['iso',            '🛡 ISO 27001 Coverage'],
          ['recommendations','🎯 Recomendações por IA'],
        ].map(([k,lbl])=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:9px;background:rgba(255,255,255,0.02);margin-bottom:6px;">
            <span style="font-size:0.83rem;">${lbl}</span>
            <label class="ex-toggle">
              <input type="checkbox" ${EX_CONFIG.sections[k]?'checked':''} onchange="EX_CONFIG.sections['${k}']=this.checked">
              <span class="ex-slider"></span>
            </label>
          </div>`).join('')}
      </div>
    </div>

    <!-- Right col -->
    <div>
      <div class="ex-card" style="margin-bottom:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
          <div class="ex-section" style="border:none;padding:0;margin:0;">📬 Destinatários</div>
          <button class="ex-btn ex-btn-ghost ex-btn-sm" onclick="exOpenAddRecipient()">+ Adicionar</button>
        </div>
        <div id="ex-recipients">
          ${EX_CONFIG.recipients.map((r,i)=>`
            <div class="ex-recip">
              <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:800;color:#000;flex-shrink:0;">${r.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-weight:700;font-size:0.84rem;">${r.name}</div>
                <div style="font-size:0.70rem;color:#6b7280;">${r.role} · ${r.email}</div>
              </div>
              <button class="ex-btn ex-btn-ghost ex-btn-sm" style="color:#ef4444;" onclick="EX_CONFIG.recipients.splice(${i},1);exTab('config');showToast&&showToast('Destinatário removido','info')">✕</button>
            </div>`).join('')}
        </div>
      </div>

      <div class="ex-card">
        <div class="ex-section">⚡ Ações Rápidas</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <button class="ex-btn ex-btn-ghost" style="justify-content:flex-start;" onclick="exSendTest()">📧 Enviar e-mail de teste</button>
          <button class="ex-btn ex-btn-ghost" style="justify-content:flex-start;" onclick="exGenerateNow()">▶ Gerar relatório agora (Maio 2025)</button>
          <button class="ex-btn ex-btn-ghost" style="justify-content:flex-start;" onclick="exTab('view')">👁 Visualizar último relatório</button>
        </div>
        <div style="margin-top:14px;padding:12px;border-radius:10px;background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.12);">
          <div style="font-size:0.72rem;font-weight:700;color:#00d4ff;margin-bottom:4px;">⏰ Próximo envio automático</div>
          <div style="font-size:0.82rem;font-weight:700;">01 de Julho, 2025 às 06:00 UTC</div>
          <div style="font-size:0.70rem;color:#6b7280;margin-top:2px;">3 destinatários · PT-BR · PDF + e-mail</div>
        </div>
      </div>
    </div>
  </div>

  <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px;">
    <button class="ex-btn ex-btn-ghost" onclick="showToast&&showToast('Cancelado','info')">Cancelar</button>
    <button class="ex-btn ex-btn-primary" onclick="exSaveConfig()">💾 Salvar Configuração</button>
  </div>`;
}

// ── Actions ───────────────────────────────────────────────────
window.exGenerateNow = function() {
  if (EX.generating) return;
  EX.generating = true;
  showToast&&showToast('Coletando dados do período...', 'info');
  setTimeout(()=>showToast&&showToast('🤖 Gerando narrativa com IA (Claude Sonnet)...', 'info'), 1500);
  setTimeout(()=>showToast&&showToast('📄 Compilando PDF executivo...', 'info'), 3000);
  setTimeout(()=>{
    showToast&&showToast('✅ Relatório Executivo gerado e enviado para 3 destinatários!', 'success');
    EX.generating = false;
    exTab('reports');
  }, 5000);
};

window.exRegenerateNarrative = function() {
  showToast&&showToast('Regenerando narrativa com IA...', 'info');
  setTimeout(()=>showToast&&showToast('✅ Narrativa regenerada!', 'success'), 2500);
};

window.exResendEmail = function(id) {
  showToast&&showToast('Reenviando relatório por e-mail...', 'info');
  setTimeout(()=>showToast&&showToast('✅ E-mail reenviado com sucesso!', 'success'), 1500);
};

window.exSendTest = function() {
  showToast&&showToast('Enviando e-mail de teste para os destinatários...', 'info');
  setTimeout(()=>showToast&&showToast('✅ E-mail de teste enviado!', 'success'), 1200);
};

window.exSaveConfig = function() {
  showToast&&showToast('✅ Configurações salvas! Próximo envio: 01/07/2025', 'success');
};

window.exOpenAddRecipient = function() {
  exShowModal(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <div style="font-weight:800;font-size:1.0rem;">+ Adicionar Destinatário</div>
      <button class="ex-btn ex-btn-ghost ex-btn-sm" onclick="exCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div><label class="ex-label">Nome Completo *</label><input class="ex-input" id="ex-rc-name" placeholder="Ex: João Silva"></div>
      <div><label class="ex-label">E-mail *</label><input class="ex-input" id="ex-rc-email" placeholder="joao@empresa.com"></div>
      <div><label class="ex-label">Cargo</label>
        <select class="ex-input ex-select" id="ex-rc-role">
          <option>CEO</option><option>CFO</option><option>CISO</option>
          <option>CTO</option><option>Board</option><option>Diretor</option>
        </select>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:16px;">
      <button class="ex-btn ex-btn-ghost" style="flex:1;" onclick="exCloseModal()">Cancelar</button>
      <button class="ex-btn ex-btn-primary" style="flex:1;" onclick="exSaveRecipient()">Adicionar</button>
    </div>
  `);
};

window.exSaveRecipient = function() {
  const name  = document.getElementById('ex-rc-name')?.value.trim();
  const email = document.getElementById('ex-rc-email')?.value.trim();
  const role  = document.getElementById('ex-rc-role')?.value;
  if (!name || !email) { showToast&&showToast('Preencha nome e e-mail','error'); return; }
  EX_CONFIG.recipients.push({ name, email, role });
  exCloseModal();
  exTab('config');
  showToast&&showToast('✅ Destinatário adicionado!', 'success');
};

// ── Chart init ────────────────────────────────────────────────
function exInitCharts() {
  if (!window.Chart) return;
  setTimeout(() => {
    // Maturity evolution line chart
    const lineCanvas = document.getElementById('ex-maturity-chart');
    if (lineCanvas) {
      const w = lineCanvas.parentElement.offsetWidth || 600;
      lineCanvas.width  = w;
      lineCanvas.height = lineCanvas.parentElement.offsetHeight || 160;
      const lc = new Chart(lineCanvas, {
        type: 'line',
        data: {
          labels: EX_HISTORY_LABELS,
          datasets: [{
            label: 'Maturity Score',
            data: EX_HISTORY_SCORES,
            borderColor: '#00d4ff',
            backgroundColor: 'rgba(0,212,255,0.10)',
            borderWidth: 2.5, pointRadius: 5, pointHoverRadius: 5,
            tension: 0.4, fill: true,
          }],
        },
        options: {
          responsive:true, maintainAspectRatio:false,
          animation:{duration:600}, transitions:{resize:{animation:{duration:0}}},
          plugins: {
            legend:{display:false},
            tooltip:{animation:false,callbacks:{label:ctx=>'Maturity: '+ctx.raw}},
          },
          scales: {
            x:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#6b7280',font:{size:11}}},
            y:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#6b7280',font:{size:11}},min:55,max:85,
               title:{display:true,text:'Score /100',color:'#6b7280',font:{size:10}}},
          },
        },
      });
      requestAnimationFrame(()=>lc.resize());
    }

    // Gauge doughnut
    const gaugeCanvas = document.getElementById('ex-gauge-chart');
    if (gaugeCanvas) {
      gaugeCanvas.width  = gaugeCanvas.parentElement.offsetWidth  || 400;
      gaugeCanvas.height = gaugeCanvas.parentElement.offsetHeight || 130;
      const val = EX_CURRENT.maturity;
      const gc = new Chart(gaugeCanvas, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [val, 100-val],
            backgroundColor: ['#00d4ff', 'rgba(255,255,255,0.05)'],
            borderWidth: 0, hoverOffset: 0,
          }],
        },
        options: {
          responsive:true, maintainAspectRatio:false,
          circumference:180, rotation:-90, cutout:'75%',
          animation:{duration:800}, transitions:{resize:{animation:{duration:0}}},
          plugins:{legend:{display:false},tooltip:{enabled:false}},
        },
      });
      requestAnimationFrame(()=>gc.resize());
    }
  }, 200);
}

// ── Modal helpers ─────────────────────────────────────────────
function exShowModal(html) {
  exCloseModal();
  const ov = document.createElement('div'); ov.className='ex-overlay'; ov.id='ex-overlay';
  ov.addEventListener('click', e => { if(e.target===ov) exCloseModal(); });
  const m  = document.createElement('div'); m.className='ex-modal'; m.innerHTML=html;
  ov.appendChild(m); document.body.appendChild(ov);
}
window.exCloseModal = function() { const el=document.getElementById('ex-overlay'); if(el) el.remove(); };
document.addEventListener('keydown', e => { if(e.key==='Escape') exCloseModal(); });

window.EX_REPORTS=EX_REPORTS;window.EX_CURRENT=EX_CURRENT;window.EX_CONFIG=EX_CONFIG;