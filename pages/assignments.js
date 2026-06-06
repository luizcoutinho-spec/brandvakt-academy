// ══════════════════════════════════════════════════════════════
//  📋 ATRIBUIÇÕES DE TREINAMENTO — Complete Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectAssignCSS() {
  if (document.getElementById('assign-css')) return;
  const s = document.createElement('style');
  s.id = 'assign-css';
  s.textContent = `
    :root {
      --as-blue:   #00d4ff;
      --as-green:  #22c55e;
      --as-red:    #ef4444;
      --as-amber:  #f59e0b;
      --as-purple: #8b5cf6;
      --as-card:   #12121a;
      --as-border: rgba(255,255,255,0.07);
    }

    /* ── Tabs ── */
    .as-tabs { display:flex; gap:4px; background:var(--as-card); border:1px solid var(--as-border); border-radius:14px; padding:5px; margin-bottom:20px; overflow-x:auto; }
    .as-tab  { display:flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; font-size:0.83rem; font-weight:600; cursor:pointer; color:#94a3b8; background:transparent; border:none; white-space:nowrap; transition:all 0.2s; font-family:inherit; }
    .as-tab:hover  { color:#f1f5f9; background:rgba(255,255,255,0.04); }
    .as-tab.active { color:#000; background:var(--as-blue); box-shadow:0 4px 16px rgba(0,212,255,0.28); }

    /* ── KPI ── */
    .as-kpi-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(170px,1fr)); gap:14px; margin-bottom:20px; }
    .as-kpi { background:var(--as-card); border:1px solid var(--as-border); border-radius:16px; padding:18px; transition:all 0.22s; }
    .as-kpi:hover { border-color:rgba(255,255,255,0.14); transform:translateY(-2px); }
    .as-kpi-icon { font-size:1.5rem; margin-bottom:10px; }
    .as-kpi-val  { font-size:1.9rem; font-weight:800; letter-spacing:-0.04em; line-height:1; }
    .as-kpi-lbl  { font-size:0.70rem; color:#6b7280; margin-top:5px; text-transform:uppercase; letter-spacing:0.08em; }
    .as-kpi-sub  { font-size:0.72rem; margin-top:5px; }

    /* ── Table ── */
    .as-table { width:100%; border-collapse:collapse; font-size:0.84rem; }
    .as-table th { text-align:left; padding:10px 14px; font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#6b7280; border-bottom:1px solid var(--as-border); cursor:pointer; user-select:none; }
    .as-table th:hover { color:#f1f5f9; }
    .as-table td { padding:13px 14px; border-bottom:1px solid rgba(255,255,255,0.03); vertical-align:middle; }
    .as-table tr:last-child td { border-bottom:none; }
    .as-table tr:hover td { background:rgba(255,255,255,0.02); cursor:pointer; }

    /* ── Progress ── */
    .as-prog-wrap { display:flex; align-items:center; gap:8px; min-width:120px; }
    .as-prog-bar  { flex:1; height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .as-prog-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    /* ── Badge ── */
    .as-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:99px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }
    .as-obrig    { background:rgba(239,68,68,0.12);  color:#ef4444; }
    .as-opcional { background:rgba(59,130,246,0.12); color:#60a5fa; }
    .as-ativa    { background:rgba(34,197,94,0.12);  color:#22c55e; }
    .as-pausada  { background:rgba(245,158,11,0.12); color:#f59e0b; }
    .as-rascunho { background:rgba(107,114,128,0.15);color:#9ca3af; }
    .as-concluida{ background:rgba(139,92,246,0.12); color:#a78bfa; }

    /* ── Buttons ── */
    .as-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .as-btn-primary { background:var(--as-blue); color:#000; box-shadow:0 4px 14px rgba(0,212,255,0.28); }
    .as-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .as-btn-ghost   { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .as-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#f1f5f9; }
    .as-btn-danger  { background:rgba(239,68,68,0.12); color:#ef4444; border:1px solid rgba(239,68,68,0.22); }
    .as-btn-sm { padding:6px 13px; font-size:0.76rem; border-radius:8px; }
    .as-btn-icon { padding:7px; border-radius:7px; font-size:0.85rem; }

    /* ── Input / Select ── */
    .as-input, .as-select, .as-textarea {
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10);
      border-radius:9px; padding:10px 13px; color:#f1f5f9;
      font-size:0.85rem; font-family:inherit; outline:none;
      transition:border-color 0.2s; width:100%;
    }
    .as-input:focus, .as-select:focus, .as-textarea:focus { border-color:var(--as-blue); box-shadow:0 0 0 3px rgba(0,212,255,0.10); }
    .as-input::placeholder, .as-textarea::placeholder { color:#6b7280; }
    .as-select option { background:#1a1a26; }
    .as-textarea { resize:vertical; min-height:80px; }

    /* ── Label ── */
    .as-label { display:block; font-size:0.70rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px; }

    /* ── Card ── */
    .as-card { background:var(--as-card); border:1px solid var(--as-border); border-radius:16px; padding:22px; }

    /* ── Modal ── */
    .as-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.80); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .as-modal   { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:32px; width:100%; max-width:680px; max-height:90vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,0.7); animation:asIn 0.25s ease; }
    .as-modal-lg{ max-width:860px; }
    @keyframes asIn { from{transform:scale(0.95);opacity:0} to{transform:scale(1);opacity:1} }
    .as-modal-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
    .as-modal-close { background:none; border:none; color:#6b7280; font-size:1.3rem; cursor:pointer; }
    .as-modal-close:hover { color:#f1f5f9; }

    /* ── Stepper ── */
    .as-stepper { display:flex; align-items:center; gap:0; margin-bottom:26px; }
    .as-step     { display:flex; align-items:center; gap:9px; flex:1; }
    .as-step-num { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; flex-shrink:0; border:1px solid rgba(255,255,255,0.15); color:#6b7280; transition:all 0.25s; }
    .as-step.active .as-step-num { background:var(--as-blue); border-color:var(--as-blue); color:#000; }
    .as-step.done   .as-step-num { background:var(--as-green); border-color:var(--as-green); color:#000; }
    .as-step-lbl  { font-size:0.78rem; color:#6b7280; }
    .as-step.active .as-step-lbl { color:#f1f5f9; font-weight:600; }
    .as-step-line { flex:1; height:1px; background:rgba(255,255,255,0.08); margin:0 8px; }

    /* ── Section header ── */
    .as-sh { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:16px; }
    .as-sh-title { font-size:1rem; font-weight:800; letter-spacing:-0.015em; }

    /* ── Detail row ── */
    .as-detail-row { display:flex; align-items:flex-start; gap:12px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
    .as-detail-row:last-child { border-bottom:none; }
    .as-detail-label { font-size:0.72rem; color:#6b7280; min-width:110px; flex-shrink:0; padding-top:2px; }
    .as-detail-value { font-size:0.84rem; font-weight:500; }

    /* ── Timeline ── */
    .as-timeline { display:flex; flex-direction:column; gap:0; }
    .as-tl-row   { display:flex; gap:12px; padding-bottom:14px; }
    .as-tl-dot   { width:8px; height:8px; border-radius:50%; flex-shrink:0; margin-top:5px; }
    .as-tl-bar   { width:1px; background:rgba(255,255,255,0.07); flex-shrink:0; margin-left:3.5px; }

    /* ── Chip filter ── */
    .as-chip { display:inline-flex; align-items:center; gap:5px; padding:5px 13px; border-radius:99px; font-size:0.76rem; font-weight:600; border:1px solid rgba(255,255,255,0.10); cursor:pointer; transition:all 0.15s; color:#94a3b8; background:transparent; }
    .as-chip:hover { border-color:rgba(255,255,255,0.22); color:#f1f5f9; }
    .as-chip.active { background:rgba(0,212,255,0.12); border-color:rgba(0,212,255,0.32); color:var(--as-blue); }

    /* ── Notification preview ── */
    .as-notif-preview { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:10px; padding:14px; font-size:0.82rem; line-height:1.65; color:#94a3b8; white-space:pre-wrap; }
  `;
  document.head.appendChild(s);
}
injectAssignCSS();

// ── Data ─────────────────────────────────────────────────────
const ASSIGN_DATA = {
  assignments: [
    { id:1,  course:'Phishing & Engenharia Social',  target:'Todos os usuários',       targetType:'global',  due:'2024-12-31', completion:87, status:'ativa',    mandatory:true,  enviados:11, concluidos:10, pendentes:1,  atrasados:1, created:'2024-10-01', priority:'Alta',  category:'Cybersecurity', notify:true },
    { id:2,  course:'LGPD na Prática',               target:'RH · Jurídico',           targetType:'group',   due:'2024-12-15', completion:91, status:'ativa',    mandatory:true,  enviados:4,  concluidos:4,  pendentes:0,  atrasados:0, created:'2024-09-15', priority:'Alta',  category:'Privacidade',   notify:true },
    { id:3,  course:'Código de Ética Empresarial',   target:'Todos os usuários',       targetType:'global',  due:'2025-01-31', completion:76, status:'ativa',    mandatory:true,  enviados:11, concluidos:8, pendentes:3,  atrasados:0,  created:'2024-10-15', priority:'Alta',  category:'Compliance',    notify:true },
    { id:4,  course:'Anticorrupção e Antissuborno',  target:'Gestores · Financeiro',   targetType:'group',   due:'2024-12-20', completion:68, status:'ativa',    mandatory:true,  enviados:5,  concluidos:3,  pendentes:2,  atrasados:1, created:'2024-11-01', priority:'Alta',  category:'Compliance',    notify:false },
    { id:5,  course:'Home Office Seguro',            target:'Trabalho Remoto',         targetType:'group',   due:'2025-02-28', completion:55, status:'ativa',    mandatory:false, enviados:5,  concluidos:3,  pendentes:2,  atrasados:0,  created:'2024-11-15', priority:'Média', category:'Cybersecurity', notify:true },
    { id:6,  course:'Cloud Security Awareness',     target:'TI · DevOps',             targetType:'dept',    due:'2025-03-31', completion:42, status:'ativa',    mandatory:false, enviados:2,  concluidos:1,  pendentes:1,  atrasados:0,  created:'2024-12-01', priority:'Média', category:'Cybersecurity', notify:false },
    { id:7,  course:'ESG e Sustentabilidade',        target:'Lideranças',              targetType:'group',   due:'2025-04-30', completion:0,  status:'rascunho', mandatory:false, enviados:0,  concluidos:0,  pendentes:0,  atrasados:0,  created:'2024-12-10', priority:'Baixa', category:'ESG',           notify:false },
    { id:8,  course:'ISO 27001 Fundamentos',         target:'TI',                      targetType:'dept',    due:'2025-02-15', completion:100,status:'concluida',mandatory:true,  enviados:2,  concluidos:2,  pendentes:0,  atrasados:0,  created:'2024-09-01', priority:'Alta',  category:'Information Security', notify:false },
    { id:9,  course:'Gestão de Senhas e MFA',        target:'Todos os usuários',       targetType:'global',  due:'2025-01-15', completion:63, status:'pausada',  mandatory:true,  enviados:11, concluidos:7, pendentes:4, atrasados:2, created:'2024-10-20', priority:'Alta',  category:'Cybersecurity', notify:true },
    { id:10, course:'Canal de Denúncias',            target:'Todos os usuários',       targetType:'global',  due:'2025-03-01', completion:34, status:'ativa',    mandatory:true,  enviados:11, concluidos:4, pendentes:7, atrasados:0,  created:'2024-12-05', priority:'Média', category:'Compliance',    notify:true },
  ],

  groups: ['Todos os usuários','RH','Jurídico','TI','Financeiro','Comercial','Marketing','Operações','Diretoria','Lideranças','Gestores','Trabalho Remoto','TI · DevOps'],
  courses: [
    'Phishing & Engenharia Social','LGPD na Prática','GDPR Fundamentos',
    'Código de Ética Empresarial','Anticorrupção e Antissuborno','Home Office Seguro',
    'Cloud Security Awareness','ISO 27001 Fundamentos','Senhas Seguras e MFA',
    'Canal de Denúncias','ESG e Sustentabilidade','CEO Fraud Awareness',
    'Resposta a Incidentes','Assédio Moral e Sexual','Lavagem de Dinheiro (AML)',
    'Uso Seguro de IA Generativa','Assédio Moral e Sexual',
  ],
  categories: ['Cybersecurity','Compliance','Privacidade','Information Security','ESG','RH'],
};

// ══════════════════════════════════════════════════════════════
//  PER-TENANT ASSIGNMENT POOL
//  Cada empresa tem seu próprio conjunto de atribuições.
//  Ao trocar de empresa, as atribuições da empresa anterior são
//  salvas no pool e as da nova empresa são carregadas.
// ══════════════════════════════════════════════════════════════

// Base assignments para cada tenant (escaladas a partir dos dados originais)
const _AS_BASE_TENANT1 = JSON.parse(JSON.stringify(ASSIGN_DATA.assignments)); // Empresa Demo S.A. (11 users)

function asGetActiveTenantId() {
  if (typeof APP !== 'undefined' && APP.tenants) {
    const t = APP.tenants.find(t => t.active);
    return t ? t.id : 1;
  }
  return 1;
}

function asBuildPoolForTenant(tenantId) {
  // Get user count for the TARGET tenant directly from APP (not getActiveTenantUsers)
  const targetTenant = (typeof APP !== 'undefined' && APP.tenants)
    ? APP.tenants.find(t => t.id === tenantId) : null;
  const targetUsers  = targetTenant ? (targetTenant.userData || []) : [];
  const actualTotal  = targetUsers.length + (tenantId === 1 ? 1 : 0); // +1 for DEMO_STATE on tenant 1
  const baseTotal    = 11; // Empresa Demo S.A. base user count (including Admin Local)
  const ratio        = actualTotal / baseTotal;

  return _AS_BASE_TENANT1.map((a, idx) => {
    const newId = tenantId === 1 ? a.id : (tenantId * 100 + idx + 1);
    if (a.enviados === 0) return { ...a, id: newId }; // draft — keep as-is

    if (a.targetType === 'global') {
      // All-user: enviados = actual total
      const env  = actualTotal;
      const rate = a.concluidos / Math.max(a.enviados, 1);
      const conc = Math.min(env, Math.round(rate * env));
      const pend = env - conc;
      const atrR = a.atrasados / Math.max(a.enviados, 1);
      const atr  = Math.min(pend, Math.max(0, Math.round(atrR * env)));
      const comp = env ? Math.round(conc / env * 100) : a.completion;
      return { ...a, id: newId, enviados: env, concluidos: conc, pendentes: Math.max(0, pend), atrasados: atr, completion: comp };
    } else {
      // Group/dept: scale proportionally
      const env  = Math.max(1, Math.round(a.enviados * ratio));
      const conc = Math.min(env, Math.round(a.concluidos * ratio));
      const pend = env - conc;
      const atr  = Math.min(pend, Math.max(0, Math.round(a.atrasados * ratio)));
      const comp = env ? Math.round(conc / env * 100) : a.completion;
      return { ...a, id: newId, enviados: env, concluidos: conc, pendentes: Math.max(0, pend), atrasados: atr, completion: comp };
    }
  });
}

// Pool: maps tenantId → assignments[] (persists across tenant switches in the session)
let _AS_POOLS = null;

function asEnsurePools() {
  if (_AS_POOLS) return;
  _AS_POOLS = {
    1: JSON.parse(JSON.stringify(_AS_BASE_TENANT1)),
    // Tenants 2 and 3 are lazily built on first access
  };
}

function asGetTenantPool(tenantId) {
  asEnsurePools();
  if (!_AS_POOLS[tenantId]) {
    _AS_POOLS[tenantId] = asBuildPoolForTenant(tenantId);
  }
  return _AS_POOLS[tenantId];
}

// Load the active tenant's assignments into ASSIGN_DATA
function asLoadTenantPool() {
  const tid = asGetActiveTenantId();
  const pool = asGetTenantPool(tid);
  // Replace non-demo assignments
  ASSIGN_DATA.assignments = pool.filter(a => !a.isDemo).map(a => ({ ...a }));
}

// Save current non-demo assignments back to the active tenant's pool
function asSaveTenantPool() {
  if (!_AS_POOLS) return; // not yet initialized
  const tid = asGetActiveTenantId();
  _AS_POOLS[tid] = ASSIGN_DATA.assignments.filter(a => !a.isDemo).map(a => ({ ...a }));
}

// ── Tamanho de grupo baseado nos usuários reais (_usersAll de users.js) ──
function asGroupSize(group) {
  // Fonte de verdade: array real de usuários (populado em renderPage_users)
  const all = (typeof _usersAll !== 'undefined' && _usersAll.length) ? _usersAll : [];
  const total = all.length || 11; // fallback: total real cadastrado
  if (!group || group === 'Todos os usuários') return total;
  // Contar por departamento/grupo no array real
  const byDept = {};
  all.forEach(u => { byDept[u.dept] = (byDept[u.dept] || 0) + 1; });
  // Grupos compostos (ex: "TI · DevOps")
  if (group.includes('·')) {
    const parts = group.split('·').map(s => s.trim());
    return parts.reduce((s, p) => s + (byDept[p] || 0), 0) || 1;
  }
  return byDept[group] || all.filter(u =>
    u.dept === group || (u.company||'').includes(group)
  ).length || 1;
}

// ── State ─────────────────────────────────────────────────────
let AS = {
  tab: 'lista',
  filterStatus: '', filterCat: '', filterPriority: '', search: '',
  sortCol: 'due', sortDir: 'asc',
  newStep: 1,
  newData: {},
  editId: null,
};

// ── Helpers ───────────────────────────────────────────────────
const asStatusLabel = { ativa:'Ativa', rascunho:'Rascunho', concluida:'Concluída', pausada:'Pausada', pendente:'Aguardando' };
const asPriorityColor = { Alta:'#ef4444', Média:'#f59e0b', Baixa:'#22c55e' };
const asProgColor = (pct) => pct >= 80 ? '#22c55e' : pct >= 50 ? '#00d4ff' : '#ef4444';
const asDaysLeft = (d) => { const r=Math.ceil((new Date(d)-new Date())/(864e5)); return r; };
const asFmtDate = (d) => { try { return new Date(d).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}); } catch(e){return d;} };

// ── Despachante global de ações ──
window._AS = function(action, id) {
  try {
    switch (action) {
      case 'view':       window.asOpenDetail(id);    break;
      case 'edit':       window.asOpenEdit(id);      break;
      case 'notify':     window.asNotifyGroup(id);   break;
      case 'publish':    window.asPublish(id);       break;
      case 'pause':      window.asPause(id);         break;
      case 'reactivate': window.asReactivate(id);    break;
      case 'delete':     window.asConfirmDelete(id); break;
    }
  } catch(err) { console.error('[AS] action='+action+' id='+id, err); }
};

// ── Bind action buttons via addEventListener (100% confiável) ──
function asBindButtons() {
  // ── Lista: rows e action buttons ──
  var tbody = document.getElementById('as-tbody');
  if (tbody) {
    tbody.querySelectorAll('tr[data-as-id]').forEach(function(tr) {
      tr.addEventListener('click', function(e) {
        if (e.target.closest('.as-act-cell')) return;
        window.asOpenDetail(tr.dataset.asId);
      });
    });
    tbody.querySelectorAll('button[data-as-action]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        window._AS(btn.dataset.asAction, btn.dataset.asId);
      });
    });
  }
  // ── Kanban + Calendário: divs com data-as-action ──
  var body = document.getElementById('as-body');
  if (body) {
    body.querySelectorAll('[data-as-action]:not(button)').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        window._AS(el.dataset.asAction, el.dataset.asId);
      });
    });
  }
}

function asFilterData() {
  let data = [...ASSIGN_DATA.assignments];
  if (AS.search)          data = data.filter(a => a.course.toLowerCase().includes(AS.search.toLowerCase()) || a.target.toLowerCase().includes(AS.search.toLowerCase()));
  if (AS.filterStatus)    data = data.filter(a => a.status === AS.filterStatus);
  if (AS.filterCat)       data = data.filter(a => a.category === AS.filterCat);
  if (AS.filterPriority)  data = data.filter(a => a.priority === AS.filterPriority);
  data.sort((a,b) => {
    let av=a[AS.sortCol], bv=b[AS.sortCol];
    if (AS.sortDir === 'asc') return av>bv?1:-1; else return av<bv?1:-1;
  });
  return data;
}

function asSortArrow(col) {
  if (AS.sortCol !== col) return '<span style="opacity:0.3">↕</span>';
  return AS.sortDir === 'asc' ? '↑' : '↓';
}

// ── Main Render ───────────────────────────────────────────────
window.renderPage_assignments = function() {
  injectAssignCSS();

  // ── Load this tenant's assignment pool (tenant isolation) ──
  asLoadTenantPool();

  // ── Inject Admin Local DEMO assignments (Diretoria · DEMO SA) ──
  if (typeof DEMO_STATE !== 'undefined') {
    const demoTarget = 'Diretoria';
    const demoGroup  = 'Diretoria';

    // Add target group if not already present
    if (!ASSIGN_DATA.groups.includes(demoGroup)) {
      ASSIGN_DATA.groups.push(demoGroup);
    }

    // Remove stale demo assignments so we can re-inject fresh ones
    ASSIGN_DATA.assignments = ASSIGN_DATA.assignments.filter(a => !a.isDemo);

    // One assignment record per completed/attempted course
    DEMO_STATE.completions.forEach(c => {
      ASSIGN_DATA.assignments.unshift({
        id: 'demo-' + c.courseId,
        course: c.courseName,
        target: demoTarget,
        targetType: 'dept',
        due: new Date(new Date(c.dateISO).setMonth(new Date(c.dateISO).getMonth() + 3)).toISOString().split('T')[0],
        completion: c.passed ? 100 : Math.round(c.score),
        status: c.passed ? 'concluida' : 'ativa',
        mandatory: true,
        enviados: 1,
        concluidos: c.passed ? 1 : 0,
        pendentes: c.passed ? 0 : 1,
        atrasados: 0,
        created: c.dateISO,
        priority: 'Alta',
        category: 'Cybersecurity',
        notify: false,
        isDemo: true,
      });
    });

    // ── Sincronizar atribuições manuais que incluem o Admin Local DEMO ──
    // Grupos que incluem o usuário demo
    const demoGroups = ['Todos os usuários', 'Diretoria', 'Lideranças', 'Gestores'];
    ASSIGN_DATA.assignments.forEach(a => {
      if (a.isDemo) return; // já tratado acima
      if (!demoGroups.some(g => a.target.includes(g))) return;
      // Encontrar completion do demo neste curso
      const match = DEMO_STATE.completions.find(c =>
        c.courseName.toLowerCase().includes(a.course.toLowerCase()) ||
        a.course.toLowerCase().includes(c.courseName.toLowerCase())
      );
      if (match) {
        // Atualizar conclusão do demo nesta atribuição
        const demoCompletion = match.passed ? 100 : Math.round(match.score);
        a.completion = Math.max(a.completion, demoCompletion);
        if (match.passed && a.concluidos < a.enviados) {
          a.concluidos = Math.min(a.concluidos + 1, a.enviados);
          a.pendentes  = Math.max(0, a.pendentes - 1);
          if (a.pendentes === 0) a.status = 'concluida';
        }
      }
    });

    // If no activity yet: show one pending assignment so user is visible
    if (DEMO_STATE.completions.length === 0) {
      ASSIGN_DATA.assignments.unshift({
        id: 'demo-pending',
        course: 'Home Office Seguro',
        target: demoTarget,
        targetType: 'dept',
        due: new Date(Date.now() + 30 * 864e5).toISOString().split('T')[0],
        completion: 0,
        status: 'ativa',
        mandatory: true,
        enviados: 1,
        concluidos: 0,
        pendentes: 1,
        atrasados: 0,
        created: new Date().toISOString().split('T')[0],
        priority: 'Alta',
        category: 'Cybersecurity',
        notify: false,
        isDemo: true,
      });
    }
  }

  return `
<div id="assign-module">
  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em">📋 Atribuições de Treinamento</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px">Gerencie obrigatoriedades, prazos e notificações de treinamento</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="as-btn as-btn-ghost as-btn-sm" onclick="asOpenNotifyAll()">🔔 Notificar Pendentes</button>
      <button class="as-btn as-btn-ghost as-btn-sm" onclick="showToast&&showToast('Exportando...','info');setTimeout(()=>showToast&&showToast('Exportado!','success'),1200)">⬇ Exportar</button>
      <button class="as-btn as-btn-primary" onclick="asOpenNew()">+ Nova Atribuição</button>
    </div>
  </div>

  <!-- KPIs — live target: id="as-kpi-wrap" -->
  <div id="as-kpi-wrap">${asKPIHtml()}</div>

  <!-- Tabs -->
  <div class="as-tabs">
    <button class="as-tab${AS.tab==='lista'?    ' active':''}" data-atab="lista"     onclick="asTab('lista')">📋 Lista</button>
    <button class="as-tab${AS.tab==='kanban'?   ' active':''}" data-atab="kanban"    onclick="asTab('kanban')">🗂 Kanban</button>
    <button class="as-tab${AS.tab==='analytics'?' active':''}" data-atab="analytics" onclick="asTab('analytics')">📊 Analytics</button>
    <button class="as-tab${AS.tab==='calendar'? ' active':''}" data-atab="calendar"  onclick="asTab('calendar')">📅 Calendário</button>
  </div>

  <!-- Tab body -->
  <div id="as-body">${renderAsTab(AS.tab)}</div>
  <div id="as-modals"></div>
</div>`;
};

window.initPage_assignments = function() {
  asBindButtons();
  setTimeout(() => {
    document.querySelectorAll('.as-prog-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.7s ease'; el.style.width = w; });
    });
  }, 100);
};

// ── KPI computation — called on every mutation ─────────────────
function asKPIHtml() {
  const list     = ASSIGN_DATA.assignments;
  const total    = list.length;
  const ativas   = list.filter(a=>a.status==='ativa').length;
  const concl    = list.filter(a=>a.status==='concluida').length;
  const pend     = list.reduce((s,a)=>s+a.pendentes,0);
  const atras    = list.reduce((s,a)=>s+a.atrasados,0);
  const enviados = list.reduce((s,a)=>s+a.enviados,0);
  const withEnv  = list.filter(a=>a.enviados>0);
  const avgCompl = withEnv.length ? Math.round(withEnv.reduce((s,a)=>s+a.completion,0)/withEnv.length) : 0;
  return `<div class="as-kpi-grid">
    <div class="as-kpi">
      <div class="as-kpi-icon">📋</div>
      <div class="as-kpi-val" style="color:var(--as-blue)">${ativas}</div>
      <div class="as-kpi-lbl">Atribuições Ativas</div>
      <div class="as-kpi-sub" style="color:#6b7280">${total} total</div>
    </div>
    <div class="as-kpi">
      <div class="as-kpi-icon">✅</div>
      <div class="as-kpi-val" style="color:#22c55e">${concl}</div>
      <div class="as-kpi-lbl">Concluídas</div>
      <div class="as-kpi-sub" style="color:#22c55e">100% de conclusão</div>
    </div>
    <div class="as-kpi">
      <div class="as-kpi-icon">⏳</div>
      <div class="as-kpi-val" style="color:#f59e0b">${pend}</div>
      <div class="as-kpi-lbl">Pendentes</div>
      <div class="as-kpi-sub" style="color:#6b7280">de ${enviados} enviados</div>
    </div>
    <div class="as-kpi">
      <div class="as-kpi-icon">🚨</div>
      <div class="as-kpi-val" style="color:#ef4444">${atras}</div>
      <div class="as-kpi-lbl">Em Atraso</div>
      <div class="as-kpi-sub" style="color:#ef4444">Ação necessária</div>
    </div>
    <div class="as-kpi">
      <div class="as-kpi-icon">📤</div>
      <div class="as-kpi-val" style="color:#8b5cf6">${enviados.toLocaleString()}</div>
      <div class="as-kpi-lbl">Total Enviados</div>
      <div class="as-kpi-sub" style="color:#6b7280">todos os cursos</div>
    </div>
    <div class="as-kpi">
      <div class="as-kpi-icon">📊</div>
      <div class="as-kpi-val" style="color:#00d4ff">${avgCompl}%</div>
      <div class="as-kpi-lbl">Conclusão Média</div>
      <div class="as-kpi-sub" style="color:#6b7280">todas as atribuições</div>
    </div>
  </div>`;
}

// ── Refresh KPIs in-place (no full page reload) ─────────────────
function asRefreshKPIs() {
  const wrap = document.getElementById('as-kpi-wrap');
  if (!wrap) return;
  wrap.style.opacity = '0.5';
  wrap.innerHTML = asKPIHtml();
  requestAnimationFrame(() => { wrap.style.transition='opacity 0.25s'; wrap.style.opacity='1'; });
}

// ── Full refresh: KPIs + tab body ──────────────────────────────
function asRefreshAll() {
  asSaveTenantPool(); // persist changes to active tenant's pool
  asRefreshKPIs();
  asTab(AS.tab);
}

window.asTab = function(tab) {
  AS.tab = tab;
  document.querySelectorAll('.as-tab').forEach(b => b.classList.toggle('active', b.dataset.atab === tab));
  const body = document.getElementById('as-body');
  if (!body) return;
  body.style.opacity = '0';
  body.innerHTML = renderAsTab(tab);
  asBindButtons();
  requestAnimationFrame(() => { body.style.transition='opacity 0.22s'; body.style.opacity='1'; });
  setTimeout(() => {
    document.querySelectorAll('.as-prog-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.7s ease'; el.style.width=w; });
    });
  }, 80);
};

function renderAsTab(tab) {
  if (tab === 'lista')     return renderAsLista();
  if (tab === 'kanban')    return renderAsKanban();
  if (tab === 'analytics') return renderAsAnalytics();
  if (tab === 'calendar')  return renderAsCalendar();
  return renderAsLista();
}

// ══════════════════════════════════════════════════════════════
//  LISTA
// ══════════════════════════════════════════════════════════════
function renderAsLista() {
  const data = asFilterData();
  return `
  <!-- Filters -->
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:16px">
    <input class="as-input" id="as-search" placeholder="🔍 Buscar atribuição..." style="width:220px" oninput="asFilter()" value="${AS.search}">
    <select class="as-select" id="as-fstatus" style="width:auto" onchange="asFilter()">
      <option value="">Todos os status</option>
      <option value="pendente"  ${AS.filterStatus==='pendente' ?'selected':''}>⏳ Aguardando criação</option>
      <option value="ativa"    ${AS.filterStatus==='ativa'    ?'selected':''}>Ativa</option>
      <option value="rascunho" ${AS.filterStatus==='rascunho' ?'selected':''}>Rascunho</option>
      <option value="pausada"  ${AS.filterStatus==='pausada'  ?'selected':''}>Pausada</option>
      <option value="concluida"${AS.filterStatus==='concluida'?'selected':''}>Concluída</option>
    </select>
    <select class="as-select" id="as-fcat" style="width:auto" onchange="asFilter()">
      <option value="">Todas as categorias</option>
      ${ASSIGN_DATA.categories.map(c=>`<option value="${c}"${AS.filterCat===c?' selected':''}>${c}</option>`).join('')}
    </select>
    <select class="as-select" id="as-fpri" style="width:auto" onchange="asFilter()">
      <option value="">Todas as prioridades</option>
      ${['Alta','Média','Baixa'].map(p=>`<option value="${p}"${AS.filterPriority===p?' selected':''}>${p}</option>`).join('')}
    </select>
    <span style="font-size:0.78rem;color:#6b7280;margin-left:auto">${data.length} atribuições</span>
  </div>

  <div class="as-card" style="padding:0;overflow:hidden">
    <div style="overflow-x:auto">
    <table class="as-table">
      <thead><tr>
        <th onclick="asSort('course')">Treinamento ${asSortArrow('course')}</th>
        <th onclick="asSort('target')">Público-Alvo ${asSortArrow('target')}</th>
        <th onclick="asSort('due')">Prazo ${asSortArrow('due')}</th>
        <th onclick="asSort('completion')">Conclusão ${asSortArrow('completion')}</th>
        <th onclick="asSort('mandatory')">Tipo ${asSortArrow('mandatory')}</th>
        <th onclick="asSort('priority')">Prioridade ${asSortArrow('priority')}</th>
        <th onclick="asSort('status')">Status ${asSortArrow('status')}</th>
        <th>Ações</th>
      </tr></thead>
      <tbody id="as-tbody">
        ${data.map(a => asRow(a)).join('')}
      </tbody>
    </table>
    </div>
  </div>`;
}

function asRow(a) {
  const days = asDaysLeft(a.due);
  const daysLabel = days < 0 ? (Math.abs(days)+'d atrasado') : days === 0 ? 'Hoje!' : days < 7 ? (days+'d restantes') : asFmtDate(a.due);
  const daysColor = days < 0 ? '#ef4444' : days < 7 ? '#f59e0b' : '#6b7280';
  const pc  = asProgColor(a.completion);
  const sid = String(a.id);
  const demoTag = a.isDemo ? '<span style="font-size:0.62rem;font-weight:700;padding:2px 7px;border-radius:99px;background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(139,92,246,0.15));color:#00d4ff;border:1px solid rgba(0,212,255,0.3);">DEMO</span>' : '';
  const lateTag = a.atrasados > 0 ? '<span style="color:#ef4444">'+a.atrasados+' em atraso</span>' : '';
  const pub  = a.status==='rascunho' ? '<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="publish"    data-as-id="'+sid+'" title="Publicar"  style="color:#22c55e">▶</button>' : '';
  const pau  = a.status==='ativa'    ? '<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="pause"      data-as-id="'+sid+'" title="Pausar"    style="color:#f59e0b">⏸</button>' : '';
  const reac = a.status==='pausada'  ? '<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="reactivate" data-as-id="'+sid+'" title="Reativar"  style="color:#22c55e">▶</button>' : '';
  return '<tr data-as-id="'+sid+'" style="cursor:pointer">'
    +'<td><div style="font-weight:700;font-size:0.85rem;margin-bottom:2px">'+a.course+'</div>'
    +'<div style="font-size:0.70rem;color:#6b7280">'+a.category+' · '+a.enviados+' enviados</div></td>'
    +'<td style="font-size:0.80rem;color:#94a3b8">'+a.target+' '+demoTag+'</td>'
    +'<td><div style="font-size:0.80rem;font-weight:600;color:'+daysColor+'">'+daysLabel+'</div>'
    +(days>=7?'<div style="font-size:0.68rem;color:#6b7280">'+asFmtDate(a.due)+'</div>':'')+'</td>'
    +'<td><div class="as-prog-wrap"><div class="as-prog-bar"><div class="as-prog-fill" style="width:'+a.completion+'%;background:'+pc+'"></div></div>'
    +'<span style="font-size:0.80rem;font-weight:800;color:'+pc+';min-width:36px">'+a.completion+'%</span></div>'
    +'<div style="font-size:0.65rem;color:#6b7280;margin-top:3px">'+a.concluidos+'/'+a.enviados+' · '+lateTag+'</div></td>'
    +'<td>'+(a.mandatory?'<span class="as-badge as-obrig">OBRIG.</span>':'<span class="as-badge as-opcional">Opcional</span>')+'</td>'
    +'<td><span style="font-size:0.75rem;font-weight:700;color:'+asPriorityColor[a.priority]+'">'+a.priority+'</span></td>'
    +'<td>'+(a.pendingCreation?'<span class="as-badge" style="background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.30);font-size:0.60rem">⏳ Aguardando</span>':'<span class="as-badge as-'+a.status+'">'+(asStatusLabel[a.status]||a.status)+'</span>')+'</td>'
    +'<td class="as-act-cell"><div style="display:flex;gap:4px">'
    +'<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="view"   data-as-id="'+sid+'" title="Ver">👁</button>'
    +'<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="edit"   data-as-id="'+sid+'" title="Editar">✏️</button>'
    +'<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="notify" data-as-id="'+sid+'" title="Notificar">🔔</button>'
    +pub+pau+reac
    +'<button type="button" class="as-btn as-btn-ghost as-btn-icon" data-as-action="delete" data-as-id="'+sid+'" title="Excluir" style="color:#ef4444">🗑</button>'
    +'</div></td></tr>';
}

window.asFilter = function() {
  AS.search          = document.getElementById('as-search')?.value   || '';
  AS.filterStatus    = document.getElementById('as-fstatus')?.value  || '';
  AS.filterCat       = document.getElementById('as-fcat')?.value     || '';
  AS.filterPriority  = document.getElementById('as-fpri')?.value     || '';
  const tbody = document.getElementById('as-tbody');
  if (tbody) { tbody.innerHTML = asFilterData().map(a=>asRow(a)).join(''); asBindButtons(); }
};

window.asSort = function(col) {
  if (AS.sortCol===col) AS.sortDir=AS.sortDir==='asc'?'desc':'asc'; else{AS.sortCol=col;AS.sortDir='asc';}
  const tbody = document.getElementById('as-tbody');
  if (tbody) { tbody.innerHTML = asFilterData().map(a=>asRow(a)).join(''); asBindButtons(); }
};

window.asPublish = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id));
  if(a){ a.status='ativa'; a.enviados=asGroupSize(a.target||'Todos os usuários'); a.pendentes=a.enviados-a.concluidos; }
  asRefreshAll(); showToast&&showToast('✅ Atribuição publicada e enviada!','success');
};
window.asPause = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id)); if(a) a.status='pausada';
  asRefreshAll(); showToast&&showToast('Atribuição pausada.','info');
};

window.asReactivate = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id)); if(a) a.status='ativa';
  asRefreshAll(); showToast&&showToast('✅ Atribuição reativada!','success');
};

window.asConfirmDelete = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id)); if(!a) return;
  asShowModal(`
    <div class="as-modal-hdr">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:1.4rem">🗑️</span>
        <span style="font-size:1rem;font-weight:800">Excluir Atribuição?</span>
      </div>
      <button class="as-modal-close" onclick="asCloseModal()">✕</button>
    </div>
    <p style="font-size:0.84rem;color:#94a3b8;text-align:center;margin-bottom:6px;line-height:1.6">
      <strong style="color:#f1f5f9">${a.course}</strong><br>
      <span style="font-size:0.76rem">${a.target} · ${a.enviados} enviados</span>
    </p>
    <p style="font-size:0.76rem;color:#ef4444;text-align:center;margin-bottom:24px">Esta ação não pode ser desfeita.</p>
    <div style="display:flex;gap:10px">
      <button class="as-btn as-btn-ghost" style="flex:1" onclick="asCloseModal()">Cancelar</button>
      <button class="as-btn as-btn-danger" style="flex:1" onclick="asDelete('${id}')">🗑 Excluir</button>
    </div>
  `);
};

window.asDelete = function(id) {
  const idx = ASSIGN_DATA.assignments.findIndex(x=>String(x.id)===String(id));
  if(idx !== -1) ASSIGN_DATA.assignments.splice(idx,1);
  asCloseModal();
  asRefreshAll();
  showToast&&showToast('Atribuição excluída.','info');
};

// ══════════════════════════════════════════════════════════════
//  KANBAN
// ══════════════════════════════════════════════════════════════
function renderAsKanban() {
  const cols = [
    { id:'pendente',  label:'🔴 Aguardando', color:'#ef4444' },
    { id:'rascunho',  label:'📝 Rascunho',   color:'#6b7280' },
    { id:'ativa',     label:'🟢 Ativas',      color:'#22c55e' },
    { id:'pausada',   label:'⏸ Pausadas',    color:'#f59e0b' },
    { id:'concluida', label:'✅ Concluídas',  color:'#8b5cf6' },
  ];
  return `
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;align-items:start">
    ${cols.map(col=>{
      const items = ASSIGN_DATA.assignments.filter(a=>a.status===col.id);
      return `
      <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <div style="font-size:0.80rem;font-weight:700;color:${col.color}">${col.label}</div>
          <div style="width:20px;height:20px;border-radius:50%;background:${col.color}22;display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:800;color:${col.color}">${items.length}</div>
        </div>
        ${items.length===0?`<div style="text-align:center;padding:20px;color:#6b7280;font-size:0.78rem">Nenhuma</div>`:''}
        ${items.map(a=>{
          const isPending = !!a.pendingCreation;
          const cardBg    = isPending ? 'rgba(239,68,68,0.04)' : 'var(--as-card)';
          const cardBord  = isPending ? 'rgba(239,68,68,0.35)' : 'rgba(255,255,255,0.07)';
          const cardHover = isPending ? 'rgba(239,68,68,0.55)' : 'rgba(255,255,255,0.14)';
          return `
          <div data-as-action="view" data-as-id="${a.id}" style="background:${cardBg};border:1px dashed ${cardBord};border-radius:10px;padding:14px;margin-bottom:8px;cursor:pointer;transition:all 0.2s"
            onmouseenter="this.style.borderColor='${cardHover}'" onmouseleave="this.style.borderColor='${cardBord}'">
            ${isPending ? `<div style="font-size:0.60rem;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px">⏳ Aguardando criação/publicação</div>` : ''}
            <div style="font-weight:700;font-size:0.83rem;margin-bottom:5px;color:${isPending?'#fca5a5':'inherit'}">${a.course}</div>
            <div style="font-size:0.70rem;color:#6b7280;margin-bottom:8px">${a.target}</div>
            ${isPending ? `
            <div style="font-size:0.70rem;color:#ef4444;margin-bottom:6px">${a.pendingNote||'Curso não disponível na biblioteca'}</div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
              <span style="font-size:0.68rem;color:#6b7280">Prazo: ${asFmtDate(a.due)}</span>
              <span class="as-badge" style="background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.25);font-size:0.60rem">Pendente</span>
            </div>` : `
            <div class="as-prog-wrap">
              <div class="as-prog-bar"><div class="as-prog-fill" style="width:${a.completion}%;background:${asProgColor(a.completion)}"></div></div>
              <span style="font-size:0.72rem;font-weight:700;color:${asProgColor(a.completion)}">${a.completion}%</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
              <span style="font-size:0.68rem;color:${asDaysLeft(a.due)<0?'#ef4444':asDaysLeft(a.due)<7?'#f59e0b':'#6b7280'}">${asFmtDate(a.due)}</span>
              ${a.mandatory?'<span class="as-badge as-obrig" style="font-size:0.60rem">OBRIG.</span>':'<span class="as-badge as-opcional" style="font-size:0.60rem">Opcional</span>'}
            </div>`}
          </div>`;
        }).join('')}
      </div>`;
    }).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  ANALYTICS
// ══════════════════════════════════════════════════════════════
function renderAsAnalytics() {
  const totalUsers = asGroupSize('Todos os usuários');
  const byCategory = ASSIGN_DATA.categories.map(cat=>{
    const items = ASSIGN_DATA.assignments.filter(a=>a.category===cat);
    const avg   = items.length ? Math.round(items.reduce((s,a)=>s+a.completion,0)/items.length) : 0;
    return { cat, count:items.length, avg };
  }).filter(x=>x.count>0);

  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">

    <!-- Completion by course -->
    <div class="as-card">
      <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:16px">📊 Taxa de Conclusão por Treinamento</div>
      ${[...ASSIGN_DATA.assignments].sort((a,b)=>b.completion-a.completion).map(a=>`
        <div style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:5px">
            <span style="font-weight:500;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.course}</span>
            <span style="font-weight:700;color:${asProgColor(a.completion)}">${a.completion}%</span>
          </div>
          <div class="as-prog-bar" style="height:6px">
            <div class="as-prog-fill" style="width:${a.completion}%;background:${asProgColor(a.completion)}"></div>
          </div>
        </div>`).join('')}
    </div>

    <!-- By category + atrasados -->
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="as-card">
        <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:14px">📂 Por Categoria</div>
        ${byCategory.map(x=>`
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font-size:0.80rem;font-weight:500;min-width:110px">${x.cat}</span>
            <div style="flex:1" class="as-prog-bar">
              <div class="as-prog-fill" style="width:${x.avg}%;background:${asProgColor(x.avg)}"></div>
            </div>
            <span style="font-size:0.78rem;font-weight:700;color:${asProgColor(x.avg)};min-width:36px;text-align:right">${x.avg}%</span>
            <span style="font-size:0.68rem;color:#6b7280">(${x.count})</span>
          </div>`).join('')}
      </div>

      <div class="as-card">
        <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:14px">🚨 Atrasados por Atribuição</div>
        ${ASSIGN_DATA.assignments.filter(a=>a.atrasados>0).sort((a,b)=>b.atrasados-a.atrasados).map(a=>`
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <div style="flex:1">
              <div style="font-size:0.80rem;font-weight:500">${a.course}</div>
              <div style="font-size:0.68rem;color:#6b7280">${a.target}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:1rem;font-weight:800;color:#ef4444">${a.atrasados}</div>
              <div style="font-size:0.62rem;color:#6b7280">usuários</div>
            </div>
          </div>`).join('')}
        ${!ASSIGN_DATA.assignments.some(a=>a.atrasados>0)?`<div style="text-align:center;color:#22c55e;font-size:0.84rem;padding:10px">✅ Sem atrasos!</div>`:''}
      </div>
    </div>
  </div>

  <!-- Funil geral -->
  <div class="as-card">
    <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:16px">📈 Funil Global de Progresso</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${(()=>{
        const tot = ASSIGN_DATA.assignments.reduce((s,a)=>s+a.enviados,0)||1;
        const ab  = ASSIGN_DATA.assignments.reduce((s,a)=>s+Math.round(a.enviados*(a.completion/100)*1.2),0);
        const cl  = ASSIGN_DATA.assignments.reduce((s,a)=>s+a.concluidos,0);
        const at  = ASSIGN_DATA.assignments.reduce((s,a)=>s+a.atrasados,0);
        return [
          ['Notificações Enviadas', tot,  '#00d4ff'],
          ['Iniciaram o treinamento', Math.round(ab*0.8), '#8b5cf6'],
          ['Concluíram', cl, '#22c55e'],
          ['Em Atraso', at, '#ef4444'],
        ].map(([label,val,color])=>`
          <div style="display:flex;align-items:center;gap:14px">
            <div style="min-width:180px;font-size:0.80rem;color:#94a3b8">${label}</div>
            <div style="flex:1;height:10px;background:rgba(255,255,255,0.06);border-radius:5px;overflow:hidden">
              <div class="as-prog-fill" style="width:${Math.min(Math.round(val/tot*100),100)}%;background:${color};height:100%"></div>
            </div>
            <div style="min-width:60px;text-align:right;font-size:0.85rem;font-weight:800;color:${color}">${val.toLocaleString()}</div>
          </div>`).join('');
      })()}
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  CALENDÁRIO
// ══════════════════════════════════════════════════════════════
function renderAsCalendar() {
  const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const now    = new Date();
  const year   = now.getFullYear();

  return `
  <div class="as-card" style="margin-bottom:14px">
    <div style="font-size:0.80rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:16px">📅 Prazos de Vencimento — ${year}</div>

    <!-- Compact timeline by month -->
    <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px">
      ${months.map((m,i)=>{
        const monthItems = ASSIGN_DATA.assignments.filter(a=>{
          try { const d=new Date(a.due); return d.getMonth()===i && d.getFullYear()===year; } catch(e){return false;}
        });
        const isNow = i===now.getMonth();
        return `
          <div style="background:${isNow?'rgba(0,212,255,0.08)':'rgba(255,255,255,0.02)'};border:1px solid ${isNow?'rgba(0,212,255,0.25)':'rgba(255,255,255,0.07)'};border-radius:10px;padding:12px">
            <div style="font-size:0.72rem;font-weight:700;color:${isNow?'#00d4ff':'#6b7280'};margin-bottom:8px">${m}${isNow?' ← Atual':''}</div>
            ${monthItems.length===0?`<div style="font-size:0.66rem;color:#374151">—</div>`:''}
            ${monthItems.map(a=>`
              <div style="font-size:0.68rem;font-weight:600;padding:4px 8px;border-radius:6px;margin-bottom:4px;background:${a.mandatory?'rgba(239,68,68,0.12)':'rgba(59,130,246,0.10)'};color:${a.mandatory?'#ef4444':'#60a5fa'};cursor:pointer;line-height:1.4" data-as-action="view" data-as-id="${a.id}">
                ${a.course.substring(0,22)}${a.course.length>22?'...':''}
              </div>`).join('')}
          </div>`;
      }).join('')}
    </div>
  </div>

  <!-- Upcoming (next 30 days) -->
  <div class="as-card">
    <div style="font-size:0.80rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:16px">⏰ Próximos 90 dias</div>
    ${ASSIGN_DATA.assignments
      .filter(a=>{ const d=asDaysLeft(a.due); return d>=0 && d<=90; })
      .sort((a,b)=>asDaysLeft(a.due)-asDaysLeft(b.due))
      .map(a=>{
        const d = asDaysLeft(a.due);
        const col = d<7?'#ef4444':d<30?'#f59e0b':'#6b7280';
        return `
          <div style="display:flex;align-items:center;gap:14px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,0.04);cursor:pointer" data-as-action="view" data-as-id="${a.id}">
            <div style="width:50px;height:50px;border-radius:10px;background:${col}18;border:1px solid ${col}30;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0">
              <div style="font-size:1rem;font-weight:900;color:${col};line-height:1">${d}</div>
              <div style="font-size:0.55rem;color:${col}">dias</div>
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;font-size:0.85rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.course}</div>
              <div style="font-size:0.72rem;color:#6b7280">${a.target} · ${asFmtDate(a.due)}</div>
            </div>
            <div class="as-prog-wrap" style="min-width:100px">
              <div class="as-prog-bar"><div class="as-prog-fill" style="width:${a.completion}%;background:${asProgColor(a.completion)}"></div></div>
              <span style="font-size:0.78rem;font-weight:700;color:${asProgColor(a.completion)}">${a.completion}%</span>
            </div>
            ${a.mandatory?'<span class="as-badge as-obrig">OBRIG.</span>':''}
          </div>`;
      }).join('')}
    ${!ASSIGN_DATA.assignments.some(a=>{ const d=asDaysLeft(a.due); return d>=0&&d<=90; })?`<div style="text-align:center;padding:20px;color:#6b7280;font-size:0.84rem">Sem vencimentos nos próximos 90 dias.</div>`:''}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  DETAIL MODAL
// ══════════════════════════════════════════════════════════════
window.asOpenDetail = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id));
  if (!a) return;
  const days = asDaysLeft(a.due);
  const pc   = asProgColor(a.completion);

  asShowModal(`
    <div class="as-modal-hdr">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:1.3rem">📋</span>
        <div>
          <div style="font-size:1rem;font-weight:800">${a.course}</div>
          <div style="font-size:0.72rem;color:#6b7280">${a.category} · ${a.mandatory?'Obrigatório':'Opcional'}</div>
        </div>
      </div>
      <button class="as-modal-close" onclick="asCloseModal()">✕</button>
    </div>

    <!-- Progress hero -->
    <div style="background:rgba(255,255,255,0.03);border-radius:14px;padding:20px;margin-bottom:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div>
          <div style="font-size:2.2rem;font-weight:900;color:${pc}">${a.completion}%</div>
          <div style="font-size:0.72rem;color:#6b7280">concluído</div>
        </div>
        <div style="text-align:right">
          <span class="as-badge as-${a.status}">${asStatusLabel[a.status]}</span>
          <div style="margin-top:6px;font-size:0.72rem;color:${days<0?'#ef4444':days<7?'#f59e0b':'#6b7280'};font-weight:600">
            ${days<0?`Venceu há ${Math.abs(days)} dias`:days===0?'Vence hoje!':days<7?`Vence em ${days} dias`:`Prazo: ${asFmtDate(a.due)}`}
          </div>
        </div>
      </div>
      <div class="as-prog-bar" style="height:8px">
        <div class="as-prog-fill" style="width:${a.completion}%;background:${pc}"></div>
      </div>
      <!-- Funil da atribuição -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:14px">
        ${[['📤','Enviados',a.enviados,'#00d4ff'],['✅','Concluídos',a.concluidos,'#22c55e'],['⏳','Pendentes',a.pendentes,'#f59e0b'],['🚨','Atrasados',a.atrasados,'#ef4444']].map(([icon,lbl,val,col])=>`
          <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.02);border-radius:8px">
            <div style="font-size:0.9rem">${icon}</div>
            <div style="font-size:1rem;font-weight:800;color:${col};margin-top:3px">${val}</div>
            <div style="font-size:0.62rem;color:#6b7280">${lbl}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Details -->
    <div class="as-detail-row"><div class="as-detail-label">Público-alvo</div><div class="as-detail-value">${a.target}</div></div>
    <div class="as-detail-row"><div class="as-detail-label">Prazo</div><div class="as-detail-value" style="color:${days<0?'#ef4444':days<7?'#f59e0b':'inherit'}">${asFmtDate(a.due)}</div></div>
    <div class="as-detail-row"><div class="as-detail-label">Prioridade</div><div class="as-detail-value" style="color:${asPriorityColor[a.priority]}">${a.priority}</div></div>
    <div class="as-detail-row"><div class="as-detail-label">Tipo</div><div class="as-detail-value">${a.mandatory?'<span class="as-badge as-obrig">Obrigatório</span>':'<span class="as-badge as-opcional">Opcional</span>'}</div></div>
    <div class="as-detail-row"><div class="as-detail-label">Criado em</div><div class="as-detail-value">${asFmtDate(a.created)}</div></div>
    <div class="as-detail-row"><div class="as-detail-label">Notificação</div><div class="as-detail-value">${a.notify?'<span style="color:#22c55e">✓ Ativa</span>':'<span style="color:#6b7280">Desativada</span>'}</div></div>

    <!-- User list -->
    ${(()=>{
      const tenantUsers = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
      // Filter by target group
      let groupUsers = tenantUsers;
      if (a.target && a.target !== 'Todos os usuários') {
        groupUsers = tenantUsers.filter(u => u.dept === a.target || (a.target.includes('·') && a.target.split('·').map(s=>s.trim()).includes(u.dept)));
      }
      if (!groupUsers.length) return '';
      // Deterministically assign status per user based on assignment completion rate
      const compRate = a.completion / 100;
      const atrasRate = a.atrasados / Math.max(a.enviados, 1);
      return `
      <div style="margin-top:20px">
        <div style="font-size:0.70rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:12px">👥 Usuários (${groupUsers.length})</div>
        <div style="max-height:260px;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding-right:4px">
          ${groupUsers.map((u,i) => {
            const seed = ((u.id||i) * 1664525 + a.id * 22695477 + 1013904223) & 0x7FFFFFFF;
            const roll = (seed % 100) / 100;
            let ustatus, ucolor, ulabel;
            if (roll < compRate * 0.9) { ustatus='done'; ucolor='#22c55e'; ulabel='✅ Concluído'; }
            else if (roll < compRate)  { ustatus='done'; ucolor='#22c55e'; ulabel='✅ Concluído'; }
            else if (roll < compRate + atrasRate) { ustatus='late'; ucolor='#ef4444'; ulabel='🚨 Em atraso'; }
            else { ustatus='pend'; ucolor='#f59e0b'; ulabel='⏳ Pendente'; }
            // DEMO: check real completions
            if (typeof DEMO_STATE !== 'undefined' && DEMO_STATE.completions && u.isDemo) {
              ulabel = '✅ Concluído'; ucolor = '#22c55e';
            }
            const deptColor = {'Diretoria':'#8b5cf6','TI':'#00d4ff','RH':'#22c55e','Financeiro':'#f59e0b','Jurídico':'#f97316','Operações':'#06b6d4','Comercial':'#ec4899','Marketing':'#a78bfa'}[u.dept] || '#6b7280';
            return `<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:10px">
              <div style="width:32px;height:32px;border-radius:50%;background:${deptColor}22;border:1px solid ${deptColor}40;display:flex;align-items:center;justify-content:center;font-size:0.80rem;font-weight:700;color:${deptColor};flex-shrink:0">${(u.name||'?').charAt(0)}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:0.82rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.name||u.id}</div>
                <div style="font-size:0.68rem;color:#6b7280">${u.dept||''}</div>
              </div>
              <div style="font-size:0.72rem;font-weight:700;color:${ucolor};white-space:nowrap">${ulabel}</div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    })()}

    <!-- Actions -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
      <button class="as-btn as-btn-ghost" style="flex:1" onclick="asCloseModal()">Fechar</button>
      <button class="as-btn as-btn-ghost" style="flex:1" onclick="asNotifyGroup('${a.id}');asCloseModal()">🔔 Notificar Grupo</button>
      <button class="as-btn as-btn-ghost" style="flex:1" onclick="asCloseModal();asOpenEdit('${a.id}')">✏️ Editar</button>
      ${a.status==='rascunho'?`<button class="as-btn as-btn-primary" style="flex:1" onclick="asPublish('${a.id}');asCloseModal()">▶ Publicar</button>`:''}
      ${a.status==='ativa'   ?`<button class="as-btn as-btn-danger"  style="flex:1" onclick="asPause('${a.id}');asCloseModal()">⏸ Pausar</button>`:''}
      ${a.status==='pausada' ?`<button class="as-btn as-btn-primary" style="flex:1" onclick="asReactivate('${a.id}');asCloseModal()">▶ Reativar</button>`:''}
    </div>
  `, 'as-modal as-modal-lg');
};

// ══════════════════════════════════════════════════════════════
//  NOVA ATRIBUIÇÃO — 4 STEPS
// ══════════════════════════════════════════════════════════════
window.asOpenNew = function() {
  AS.newStep = 1;
  AS.newData = { mandatory: true, notify: true, priority: 'Alta' };
  asRenderStep(1);
};

function asRenderStep(step) {
  AS.newStep = step;
  const steps = ['Treinamento','Público','Configurar','Revisar'];
  const stepper = `
    <div class="as-stepper">
      ${steps.map((l,i)=>`
        <div class="as-step ${step===i+1?'active':step>i+1?'done':''}">
          <div class="as-step-num">${step>i+1?'✓':i+1}</div>
          <div class="as-step-lbl">${l}</div>
        </div>${i<steps.length-1?'<div class="as-step-line"></div>':''}`).join('')}
    </div>`;

  let body = '';
  if (step===1) {
    body=`
      <div class="as-modal-hdr">
        <span style="font-size:1rem;font-weight:800">+ Nova Atribuição</span>
        <button class="as-modal-close" onclick="asCloseModal()">✕</button>
      </div>
      ${stepper}
      <div style="display:flex;flex-direction:column;gap:14px">
        <div><label class="as-label">Treinamento *</label>
          <select class="as-select" id="as-nc-course">
            <option value="">Selecionar treinamento...</option>
            ${AS.newData.course && !ASSIGN_DATA.courses.includes(AS.newData.course) ? `<option value="${AS.newData.course}" selected>${AS.newData.course}</option>` : ''}
            ${ASSIGN_DATA.courses.map(c=>`<option value="${c}"${AS.newData.course===c?' selected':''}>${c}</option>`).join('')}
          </select>
        </div>
        <div><label class="as-label">Objetivo / Descrição</label>
          <textarea class="as-textarea" id="as-nc-desc" placeholder="Descreva o objetivo desta atribuição...">${AS.newData.desc||''}</textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          <div><label class="as-label">Data de Início</label><input class="as-input" type="date" id="as-nc-start" value="${AS.newData.start||new Date().toISOString().split('T')[0]}"></div>
          <div><label class="as-label">Prazo Final *</label><input class="as-input" type="date" id="as-nc-due" value="${AS.newData.due||''}"></div>
        </div>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:18px">
        <button class="as-btn as-btn-primary" onclick="asStep1Next()">Próximo →</button>
      </div>`;
  } else if (step===2) {
    body=`
      <div class="as-modal-hdr">
        <span style="font-size:1rem;font-weight:800">Nova Atribuição — Público-Alvo</span>
        <button class="as-modal-close" onclick="asCloseModal()">✕</button>
      </div>
      ${stepper}
      <div style="display:flex;flex-direction:column;gap:14px">
        <div><label class="as-label">Grupo / Departamento *</label>
          <select class="as-select" id="as-nc-target" onchange="AS.newData.target=this.value;const el=document.getElementById('as-group-count');if(el)el.textContent=asGroupSize(this.value);">
            ${AS.newData.target && !ASSIGN_DATA.groups.includes(AS.newData.target) ? `<option value="${AS.newData.target}" selected>${AS.newData.target}</option>` : ''}
            ${ASSIGN_DATA.groups.map(g=>`<option value="${g}"${AS.newData.target===g?' selected':''}>${g}</option>`).join('')}
          </select>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:14px">
          <div style="font-size:0.72rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:10px">Usuários no grupo</div>
          <div style="display:flex;align-items:center;gap:8px" id="as-group-preview">
            <div style="font-size:1.4rem;font-weight:900;color:#00d4ff" id="as-group-count">${asGroupSize(AS.newData.target)}</div>
            <div style="font-size:0.78rem;color:#6b7280">usuários receberão esta atribuição</div>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:18px">
        <button class="as-btn as-btn-ghost" onclick="asRenderStep(1)">← Voltar</button>
        <button class="as-btn as-btn-primary" onclick="asStep2Next()">Próximo →</button>
      </div>`;
  } else if (step===3) {
    body=`
      <div class="as-modal-hdr">
        <span style="font-size:1rem;font-weight:800">Nova Atribuição — Configurações</span>
        <button class="as-modal-close" onclick="asCloseModal()">✕</button>
      </div>
      ${stepper}
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          <div><label class="as-label">Tipo</label>
            <select class="as-select" id="as-nc-mandatory">
              <option value="1"${AS.newData.mandatory?' selected':''}>Obrigatório</option>
              <option value="0"${!AS.newData.mandatory?' selected':''}>Opcional</option>
            </select>
          </div>
          <div><label class="as-label">Prioridade</label>
            <select class="as-select" id="as-nc-priority">
              ${['Alta','Média','Baixa'].map(p=>`<option${AS.newData.priority===p?' selected':''}>${p}</option>`).join('')}
            </select>
          </div>
        </div>
        <div><label class="as-label">Nota de aprovação (%)</label>
          <input class="as-input" type="number" id="as-nc-passmark" min="0" max="100" placeholder="70" value="${AS.newData.passmark||70}">
        </div>
        <!-- Toggles -->
        <div>
          <label class="as-label">Opções de notificação</label>
          ${[
            ['as-nc-notify','Enviar notificação por e-mail ao publicar',true],
            ['as-nc-remind','Lembretes automáticos 7 e 2 dias antes do prazo',true],
            ['as-nc-cert',  'Emitir certificado automaticamente ao concluir',true],
            ['as-nc-alert', 'Alertar gestor ao ultrapassar prazo',false],
          ].map(([id,lbl,def])=>`
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <input type="checkbox" id="${id}" ${def?'checked':''} style="accent-color:#00d4ff;width:16px;height:16px">
              <label for="${id}" style="font-size:0.84rem;color:#94a3b8;cursor:pointer">${lbl}</label>
            </div>`).join('')}
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:18px">
        <button class="as-btn as-btn-ghost" onclick="asRenderStep(2)">← Voltar</button>
        <button class="as-btn as-btn-primary" onclick="asStep3Next()">Próximo →</button>
      </div>`;
  } else if (step===4) {
    body=`
      <div class="as-modal-hdr">
        <span style="font-size:1rem;font-weight:800">Nova Atribuição — Revisão</span>
        <button class="as-modal-close" onclick="asCloseModal()">✕</button>
      </div>
      ${stepper}
      <div style="background:rgba(255,255,255,0.03);border-radius:14px;padding:20px;margin-bottom:18px">
        <div style="font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:14px">Resumo</div>
        ${[
          ['Treinamento', AS.newData.course||'—'],
          ['Grupo',       AS.newData.target||'Todos os usuários'],
          ['Prazo',       AS.newData.due?asFmtDate(AS.newData.due):'—'],
          ['Tipo',        AS.newData.mandatory?'Obrigatório':'Opcional'],
          ['Prioridade',  AS.newData.priority||'Média'],
          ['Destinatários', asGroupSize(AS.newData.target) + ' usuários'],
        ].map(([k,v])=>`<div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,0.04)"><span style="min-width:120px;font-size:0.75rem;color:#6b7280">${k}</span><span style="font-weight:600;font-size:0.88rem">${v}</span></div>`).join('')}
      </div>
      <div style="display:flex;gap:10px">
        <button class="as-btn as-btn-ghost" style="flex:1" onclick="asRenderStep(3)">← Voltar</button>
        <button class="as-btn as-btn-ghost" style="flex:1" onclick="asSaveAsDraft()">💾 Salvar Rascunho</button>
        <button class="as-btn as-btn-primary" style="flex:1" onclick="asPublishNew()">🚀 Publicar Agora</button>
      </div>`;
  }
  asShowModal(body);
}

// Steps
window.asStep1Next = function() {
  AS.newData.course = document.getElementById('as-nc-course')?.value;
  AS.newData.desc   = document.getElementById('as-nc-desc')?.value;
  AS.newData.start  = document.getElementById('as-nc-start')?.value;
  AS.newData.due    = document.getElementById('as-nc-due')?.value;
  if (!AS.newData.course) { showToast&&showToast('Selecione um treinamento','error'); return; }
  if (!AS.newData.due)    { showToast&&showToast('Defina o prazo final','error'); return; }
  asRenderStep(2);
};
window.asStep2Next = function() {
  AS.newData.target = document.getElementById('as-nc-target')?.value || 'Todos os usuários';
  asRenderStep(3);
};
window.asStep3Next = function() {
  AS.newData.mandatory = document.getElementById('as-nc-mandatory')?.value === '1';
  AS.newData.priority  = document.getElementById('as-nc-priority')?.value || 'Média';
  AS.newData.passmark  = document.getElementById('as-nc-passmark')?.value || 70;
  asRenderStep(4);
};
window.asSaveAsDraft = function() {
  ASSIGN_DATA.assignments.push({ id:Date.now(), course:AS.newData.course, target:AS.newData.target||'Todos', targetType:'global', due:AS.newData.due, completion:0, status:'rascunho', mandatory:AS.newData.mandatory, enviados:0, concluidos:0, pendentes:0, atrasados:0, created:new Date().toISOString().split('T')[0], priority:AS.newData.priority||'Média', category:'Compliance', notify:true });
  asCloseModal(); asRefreshAll();
  showToast&&showToast('Rascunho salvo!','info');
};
window.asPublishNew = function() {
  const _asPubSize = asGroupSize(AS.newData.target||'Todos os usuários');
  ASSIGN_DATA.assignments.push({ id:Date.now(), course:AS.newData.course, target:AS.newData.target||'Todos os usuários', targetType:'global', due:AS.newData.due, completion:0, status:'ativa', mandatory:AS.newData.mandatory, enviados:_asPubSize, concluidos:0, pendentes:_asPubSize, atrasados:0, created:new Date().toISOString().split('T')[0], priority:AS.newData.priority||'Média', category:'Compliance', notify:true });
  asCloseModal(); asRefreshAll();
  showToast&&showToast('🚀 Atribuição publicada com sucesso!','success');
};

// ── Edit Modal ────────────────────────────────────────────────
window.asOpenEdit = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id));
  if (!a) return;
  asShowModal(`
    <div class="as-modal-hdr">
      <span style="font-size:1rem;font-weight:800">✏️ Editar Atribuição</span>
      <button class="as-modal-close" onclick="asCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div><label class="as-label">Treinamento</label>
        <input class="as-input" value="${a.course}" readonly style="opacity:0.6">
      </div>
      <div><label class="as-label">Público-Alvo</label>
        <select class="as-select" id="as-edit-target">
          ${ASSIGN_DATA.groups.map(g=>`<option value="${g}"${g===a.target?' selected':''}>${g}</option>`).join('')}
        </select>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="as-label">Prazo Final</label><input class="as-input" type="date" id="as-edit-due" value="${a.due}"></div>
        <div><label class="as-label">Prioridade</label>
          <select class="as-select" id="as-edit-priority">
            ${['Alta','Média','Baixa'].map(p=>`<option${p===a.priority?' selected':''}>${p}</option>`).join('')}
          </select>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="as-label">Tipo</label>
          <select class="as-select" id="as-edit-mandatory">
            <option value="1"${a.mandatory?' selected':''}>Obrigatório</option>
            <option value="0"${!a.mandatory?' selected':''}>Opcional</option>
          </select>
        </div>
        <div><label class="as-label">Status</label>
          <select class="as-select" id="as-edit-status">
            ${['ativa','rascunho','pausada'].map(s=>`<option value="${s}"${s===a.status?' selected':''}>${asStatusLabel[s]}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="as-btn as-btn-ghost" style="flex:1" onclick="asCloseModal()">Cancelar</button>
      <button class="as-btn as-btn-primary" style="flex:1" onclick="asSaveEdit('${a.id}')">Salvar Alterações</button>
    </div>
  `);
};

window.asSaveEdit = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id));
  if (a) {
    a.target    = document.getElementById('as-edit-target')?.value    || a.target;
    a.due       = document.getElementById('as-edit-due')?.value       || a.due;
    a.priority  = document.getElementById('as-edit-priority')?.value  || a.priority;
    a.mandatory = document.getElementById('as-edit-mandatory')?.value === '1';
    a.status    = document.getElementById('as-edit-status')?.value    || a.status;
  }
  asCloseModal(); asRefreshAll();
  showToast&&showToast('Atribuição atualizada!','success');
};

// ── Notify ────────────────────────────────────────────────────
window.asNotifyGroup = function(id) {
  const a = ASSIGN_DATA.assignments.find(x=>String(x.id)===String(id));
  if (!a) return;
  // Compute real pending count from tenant users
  const tenantUsers = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
  let groupUsers = tenantUsers;
  if (a.target && a.target !== 'Todos os usuários') {
    groupUsers = tenantUsers.filter(u => u.dept === a.target || (a.target.includes('·') && a.target.split('·').map(s=>s.trim()).includes(u.dept)));
  }
  const realPending = Math.max(a.pendentes, groupUsers.length - a.concluidos);
  asShowModal(`
    <div class="as-modal-hdr">
      <span style="font-size:1rem;font-weight:800">🔔 Notificar Grupo</span>
      <button class="as-modal-close" onclick="asCloseModal()">✕</button>
    </div>
    <div style="margin-bottom:16px">
      <div style="font-size:0.82rem;color:#94a3b8;margin-bottom:4px">Atribuição: <strong style="color:#f1f5f9">${a.course}</strong></div>
      <div style="font-size:0.82rem;color:#94a3b8">Destinatários: <strong style="color:#00d4ff">${realPending} usuários pendentes</strong></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px">
      <div><label class="as-label">Canal</label>
        <select class="as-select">
          <option>E-mail corporativo</option>
          <option>Teams / Slack</option>
          <option>Push notification (plataforma)</option>
          <option>Todos os canais</option>
        </select>
      </div>
      <div><label class="as-label">Mensagem</label>
        <textarea class="as-textarea" id="as-notif-msg" style="min-height:100px">Olá,

Lembramos que o treinamento "${a.course}" está pendente em seu perfil.

Prazo final: ${asFmtDate(a.due)}

Acesse a plataforma para concluir: https://brandvakt-academy-nine.vercel.app

Atenciosamente,
Equipe de Treinamento</textarea>
      </div>
    </div>
    <div style="display:flex;gap:10px">
      <button class="as-btn as-btn-ghost" style="flex:1" onclick="asCloseModal()">Cancelar</button>
      <button class="as-btn as-btn-primary" style="flex:1" onclick="asCloseModal();showToast&&showToast('✉️ Notificação enviada para ${realPending} usuários!','success')">Enviar Notificação</button>
    </div>
  `);
};

window.asOpenNotifyAll = function() {
  const totalPend = ASSIGN_DATA.assignments.reduce((s,a)=>s+a.pendentes,0);
  showToast&&showToast(`🔔 Notificando ${totalPend} usuários pendentes...`,'info');
  setTimeout(()=>showToast&&showToast('✉️ Notificações enviadas com sucesso!','success'),1500);
};

// ── Helpers / Modal ───────────────────────────────────────────
window.asShowModal = function(html, cls='as-modal') {
  window.asCloseModal();
  const ov=document.createElement('div'); ov.className='as-overlay'; ov.id='as-overlay';
  ov.addEventListener('click', e=>{ if(e.target===ov) window.asCloseModal(); });
  const m=document.createElement('div'); m.className=cls; m.innerHTML=html;
  ov.appendChild(m); document.body.appendChild(ov);
};
function asShowModal(html, cls='as-modal') { window.asShowModal(html, cls); }
window.asCloseModal = function() { const el=document.getElementById('as-overlay'); if(el) el.remove(); };
document.addEventListener('keydown', e=>{ if(e.key==='Escape') asCloseModal(); });

// ── Entry points from other modules ──────────────────────────
// Called from Trilhas (departments) or Biblioteca (library)
window.asOpenNewPrefilled = function(courseName, targetGroup, isMandatory) {
  AS.newStep = 1;
  AS.newData = {
    course:    courseName   || '',
    target:    targetGroup  || 'Todos os usuários',
    mandatory: isMandatory !== undefined ? !!isMandatory : false,
    notify:    true,
    priority:  isMandatory ? 'Alta' : 'Média',
  };
  // ensure the assignments page is rendered first, then open wizard
  const render = () => { if (document.getElementById('assign-module')) { asRenderStep(1); } else { setTimeout(render, 80); } };
  render();
};
