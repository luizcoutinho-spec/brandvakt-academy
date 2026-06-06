// ══════════════════════════════════════════════════════════════
//  🛡 HUMAN RISK MANAGEMENT — Complete Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

/* Named as regular function so it's accessible globally */
function injectHRMCSS() {
  if (document.getElementById('hrm-css')) return;
  const s = document.createElement('style');
  s.id = 'hrm-css';
  s.textContent = `
    :root {
      --hrm-bg:      #0a0a0f;
      --hrm-card:    #12121a;
      --hrm-card2:   #1a1a26;
      --hrm-border:  rgba(255,255,255,0.07);
      --hrm-low:     #22c55e;
      --hrm-med:     #f59e0b;
      --hrm-high:    #ef4444;
      --hrm-blue:    #3b82f6;
      --hrm-purple:  #8b5cf6;
      --hrm-teal:    #00d4ff;
      --hrm-muted:   #6b7280;
      --hrm-text:    #f1f5f9;
      --hrm-text2:   #94a3b8;
    }

    #hrm-module { font-family: inherit; color: var(--hrm-text); }

    /* ── Tabs ── */
    .hrm-tabs { display:flex; gap:4px; background:var(--hrm-card); border:1px solid var(--hrm-border); border-radius:14px; padding:5px; margin-bottom:22px; overflow-x:auto; }
    .hrm-tab  { display:flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; font-size:0.83rem; font-weight:600; cursor:pointer; color:var(--hrm-text2); background:transparent; border:none; white-space:nowrap; transition:all 0.2s; }
    .hrm-tab:hover  { color:var(--hrm-text); background:rgba(255,255,255,0.04); }
    .hrm-tab.active { color:#000; background:var(--hrm-teal); box-shadow:0 4px 16px rgba(0,212,255,0.25); }

    /* ── KPI Cards ── */
    .hrm-kpi-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:14px; margin-bottom:20px; }
    .hrm-kpi { background:var(--hrm-card); border:1px solid var(--hrm-border); border-radius:16px; padding:20px; transition:all 0.25s; }
    .hrm-kpi:hover { border-color:rgba(255,255,255,0.14); transform:translateY(-2px); }
    .hrm-kpi-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.2rem; margin-bottom:14px; }
    .hrm-kpi-val   { font-size:2rem; font-weight:800; letter-spacing:-0.04em; line-height:1; }
    .hrm-kpi-label { font-size:0.72rem; color:var(--hrm-text2); margin-top:5px; text-transform:uppercase; letter-spacing:0.08em; }
    .hrm-kpi-trend { font-size:0.72rem; margin-top:6px; display:flex; align-items:center; gap:4px; }

    /* ── Risk Score Ring (SVG) ── */
    .hrm-ring-wrap { position:relative; display:inline-flex; align-items:center; justify-content:center; }
    .hrm-ring-val  { position:absolute; text-align:center; }

    /* ── Cards ── */
    .hrm-card { background:var(--hrm-card); border:1px solid var(--hrm-border); border-radius:16px; padding:22px; }
    .hrm-card-title { font-size:0.80rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--hrm-text2); margin-bottom:16px; }

    /* ── Table ── */
    .hrm-table { width:100%; border-collapse:collapse; font-size:0.84rem; }
    .hrm-table th { text-align:left; padding:10px 12px; font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--hrm-muted); border-bottom:1px solid var(--hrm-border); cursor:pointer; user-select:none; }
    .hrm-table th:hover { color:var(--hrm-text); }
    .hrm-table td { padding:12px 12px; border-bottom:1px solid rgba(255,255,255,0.03); vertical-align:middle; }
    .hrm-table tr:last-child td { border-bottom:none; }
    .hrm-table tr:hover td { background:rgba(255,255,255,0.02); cursor:pointer; }

    /* ── Risk Badge ── */
    .hrm-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 9px; border-radius:99px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }
    .hrm-low  { background:rgba(34,197,94,0.12);  color:var(--hrm-low); }
    .hrm-med  { background:rgba(245,158,11,0.12); color:var(--hrm-med); }
    .hrm-high { background:rgba(239,68,68,0.12);  color:var(--hrm-high); }
    .hrm-crit { background:rgba(239,68,68,0.20);  color:#ff6b6b; border:1px solid rgba(239,68,68,0.3); }

    /* ── Risk Score Mini ── */
    .hrm-score-bar { display:flex; align-items:center; gap:8px; }
    .hrm-score-track { flex:1; height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; min-width:60px; }
    .hrm-score-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    /* ── User Avatar ── */
    .hrm-avatar { width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0; }

    /* ── Modal ── */
    .hrm-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.78); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .hrm-modal  { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:32px; width:100%; max-width:760px; max-height:88vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,0.6); animation:hrmIn 0.25s ease; }
    .hrm-modal-xl { max-width:960px; }
    @keyframes hrmIn { from{ transform:scale(0.95); opacity:0 } to{ transform:scale(1); opacity:1 } }
    .hrm-modal-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:22px; }
    .hrm-modal-close { background:none; border:none; color:var(--hrm-muted); font-size:1.3rem; cursor:pointer; }
    .hrm-modal-close:hover { color:var(--hrm-text); }

    /* ── Radar / Grid Heatmap ── */
    .hrm-heatmap { display:grid; gap:4px; }
    .hrm-heatmap-cell { border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.70rem; font-weight:700; transition:all 0.2s; cursor:pointer; }
    .hrm-heatmap-cell:hover { transform:scale(1.05); }

    /* ── Action Plan Cards ── */
    .hrm-plan-card { background:var(--hrm-card2); border:1px solid var(--hrm-border); border-radius:12px; padding:16px; margin-bottom:10px; transition:all 0.2s; }
    .hrm-plan-card:hover { border-color:rgba(255,255,255,0.12); }

    /* ── Timeline / Alert Feed ── */
    .hrm-alert { display:flex; gap:12px; padding:12px 14px; border-radius:10px; margin-bottom:8px; border:1px solid; }
    .hrm-alert-crit { background:rgba(239,68,68,0.06);  border-color:rgba(239,68,68,0.18); }
    .hrm-alert-warn { background:rgba(245,158,11,0.06); border-color:rgba(245,158,11,0.18); }
    .hrm-alert-info { background:rgba(59,130,246,0.06); border-color:rgba(59,130,246,0.18); }
    .hrm-alert-ok   { background:rgba(34,197,94,0.06);  border-color:rgba(34,197,94,0.18); }

    /* ── Buttons ── */
    .hrm-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .hrm-btn-primary { background:var(--hrm-teal); color:#000; }
    .hrm-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .hrm-btn-ghost   { background:rgba(255,255,255,0.06); color:var(--hrm-text2); border:1px solid var(--hrm-border); }
    .hrm-btn-ghost:hover { background:rgba(255,255,255,0.10); color:var(--hrm-text); }
    .hrm-btn-danger  { background:rgba(239,68,68,0.14); color:var(--hrm-high); border:1px solid rgba(239,68,68,0.25); }
    .hrm-btn-sm { padding:6px 13px; font-size:0.76rem; border-radius:8px; }

    /* ── Input ── */
    .hrm-input, .hrm-select { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10); border-radius:9px; padding:9px 13px; color:var(--hrm-text); font-size:0.84rem; font-family:inherit; outline:none; transition:border-color 0.2s; }
    .hrm-input:focus, .hrm-select:focus { border-color:var(--hrm-teal); }
    .hrm-input::placeholder { color:var(--hrm-muted); }
    .hrm-select option { background:#1a1a26; }

    /* ── Section header ── */
    .hrm-sh { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:16px; }
    .hrm-sh-title { font-size:1rem; font-weight:800; letter-spacing:-0.015em; }

    /* ── Profile Radar (pure CSS bars) ── */
    .hrm-radar-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
    .hrm-radar-item { background:rgba(255,255,255,0.02); border-radius:10px; padding:12px; }
    .hrm-radar-label { font-size:0.72rem; color:var(--hrm-text2); margin-bottom:6px; display:flex; justify-content:space-between; }
    .hrm-radar-track { height:6px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .hrm-radar-fill  { height:100%; border-radius:3px; }

    /* ── Charts layout ── */
    .hrm-charts-2 { display:grid; grid-template-columns:1fr 360px; gap:16px; margin-bottom:18px; }
    @media(max-width:1100px) { .hrm-charts-2 { grid-template-columns:1fr; } }

    /* ── Progress ring (for dept summary) ── */
    .hrm-dept-row { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.03); }
    .hrm-dept-row:last-child { border-bottom:none; }

    /* Fixed canvas wrapper — prevents chart shifting on hover */
    .hrm-canvas-wrap {
      position: relative;
      height: 200px;
      overflow: hidden;
      contain: layout style;
      transform: translateZ(0);
    }
    .hrm-canvas-wrap canvas {
      position: absolute !important;
      top: 0 !important; left: 0 !important;
      width: 100% !important; height: 100% !important;
    }
    /* Disable ALL transitions on chart cards to stop ResizeObserver firing */
    .hrm-card { transition: none !important; }
  `;
  document.head.appendChild(s);
}
injectHRMCSS(); /* call immediately on script load */

// ── HRM Mock Data ─────────────────────────────────────────────
const HRM_DATA = {
  /* Organisation-level risk score (0-100, lower = safer) */
  orgScore: 42,
  orgTrend: -6, // improved by 6 points vs last month
  orgLabel: 'Risco Moderado',

  /* 12-month history */
  history: [
    { month:'Abr/24', score:71 },
    { month:'Mai/24', score:68 },
    { month:'Jun/24', score:65 },
    { month:'Jul/24', score:62 },
    { month:'Ago/24', score:59 },
    { month:'Set/24', score:55 },
    { month:'Out/24', score:52 },
    { month:'Nov/24', score:49 },
    { month:'Dez/24', score:51 },
    { month:'Jan/25', score:48 },
    { month:'Fev/25', score:45 },
    { month:'Mar/25', score:42 },
  ],

  /* Department risk */
  depts: [
    { id:'dir',  name:'Diretoria',  icon:'💼', members:12,  score:58, phishing:45, training:72, password:61, access:55, inactivity:40, certs:38 },
    { id:'fin',  name:'Financeiro', icon:'💰', members:67,  score:63, phishing:72, training:58, password:54, access:48, inactivity:33, certs:55 },
    { id:'com',  name:'Comercial',  icon:'📞', members:89,  score:48, phishing:52, training:65, password:42, access:38, inactivity:28, certs:20 },
    { id:'ti',   name:'TI',         icon:'💻', members:48,  score:18, phishing:12, training:88, password:15, access:22, inactivity:8,  certs:5  },
    { id:'rh',   name:'RH',         icon:'👥', members:34,  score:29, phishing:25, training:79, password:28, access:31, inactivity:18, certs:12 },
    { id:'mkt',  name:'Marketing',  icon:'📣', members:42,  score:41, phishing:48, training:68, password:38, access:35, inactivity:22, certs:18 },
    { id:'jur',  name:'Jurídico',   icon:'⚖️', members:18,  score:22, phishing:18, training:85, password:20, access:25, inactivity:12, certs:8  },
    { id:'ops',  name:'Operações',  icon:'⚙️', members:31,  score:74, phishing:81, training:42, password:68, access:72, inactivity:58, certs:62 },
  ],

  /* Individual users */
  users: [
    { id:1,  name:'Fernanda Dias',   email:'f.dias@empresa.com',      dept:'Diretoria', deptId:'dir', avatar:'FD', score:91, phishing:88, training:38, password:82, access:74, inactivity:5,  certs:'expired',  lastSeen:2,  cliques:4, campanhas:4, reportou:0,  treinamentos:2, planos:2, trend:'stable' },
    { id:2,  name:'Ana Lima',        email:'ana.lima@empresa.com',     dept:'Financeiro',deptId:'fin', avatar:'AL', score:78, phishing:72, training:52, password:65, access:58, inactivity:8,  certs:'expiring', lastSeen:3,  cliques:3, campanhas:4, reportou:1,  treinamentos:3, planos:1, trend:'down'   },
    { id:3,  name:'Diego Martins',   email:'d.martins@empresa.com',    dept:'Diretoria', deptId:'dir', avatar:'DM', score:73, phishing:65, training:55, password:70, access:62, inactivity:12, certs:'valid',    lastSeen:1,  cliques:2, campanhas:3, reportou:0,  treinamentos:4, planos:1, trend:'up'     },
    { id:4,  name:'Beatriz Alves',   email:'b.alves@empresa.com',      dept:'Financeiro',deptId:'fin', avatar:'BA', score:82, phishing:80, training:45, password:78, access:70, inactivity:15, certs:'expired',  lastSeen:5,  cliques:4, campanhas:4, reportou:0,  treinamentos:1, planos:2, trend:'stable' },
    { id:5,  name:'Marcos Oliveira', email:'m.oliveira@empresa.com',   dept:'Comercial', deptId:'com', avatar:'MO', score:67, phishing:60, training:62, password:55, access:50, inactivity:7,  certs:'valid',    lastSeen:1,  cliques:3, campanhas:4, reportou:1,  treinamentos:5, planos:1, trend:'up'     },
    { id:6,  name:'Carlos Souza',    email:'carlos.s@empresa.com',     dept:'Comercial', deptId:'com', avatar:'CS', score:55, phishing:50, training:68, password:48, access:42, inactivity:4,  certs:'valid',    lastSeen:0,  cliques:2, campanhas:4, reportou:2,  treinamentos:6, planos:0, trend:'up'     },
    { id:7,  name:'Pedro Costa',     email:'p.costa@empresa.com',      dept:'Marketing', deptId:'mkt', avatar:'PC', score:44, phishing:42, training:72, password:38, access:35, inactivity:6,  certs:'valid',    lastSeen:2,  cliques:1, campanhas:3, reportou:1,  treinamentos:6, planos:0, trend:'up'     },
    { id:8,  name:'Camila Santos',   email:'c.santos@empresa.com',     dept:'Marketing', deptId:'mkt', avatar:'CS', score:38, phishing:35, training:78, password:32, access:30, inactivity:3,  certs:'valid',    lastSeen:1,  cliques:1, campanhas:3, reportou:2,  treinamentos:7, planos:0, trend:'up'     },
    { id:9,  name:'Mariana Teles',   email:'m.teles@empresa.com',      dept:'RH',        deptId:'rh',  avatar:'MT', score:23, phishing:20, training:85, password:18, access:22, inactivity:2,  certs:'valid',    lastSeen:0,  cliques:0, campanhas:3, reportou:3,  treinamentos:9, planos:0, trend:'up'     },
    { id:10, name:'Juliana Rocha',   email:'j.rocha@empresa.com',      dept:'Jurídico',  deptId:'jur', avatar:'JR', score:18, phishing:15, training:90, password:16, access:20, inactivity:1,  certs:'valid',    lastSeen:0,  cliques:0, campanhas:2, reportou:2,  treinamentos:10,planos:0, trend:'up'     },
    { id:11, name:'Rafael Neto',     email:'rafael.n@empresa.com',     dept:'TI',        deptId:'ti',  avatar:'RN', score:12, phishing:10, training:92, password:10, access:15, inactivity:0,  certs:'valid',    lastSeen:0,  cliques:0, campanhas:4, reportou:4,  treinamentos:12,planos:0, trend:'stable' },
    { id:12, name:'Lucas Ferreira',  email:'l.ferreira@empresa.com',   dept:'TI',        deptId:'ti',  avatar:'LF', score:9,  phishing:8,  training:95, password:8,  access:10, inactivity:0,  certs:'valid',    lastSeen:0,  cliques:0, campanhas:4, reportou:4,  treinamentos:14,planos:0, trend:'up'     },
    { id:13, name:'Rodrigo Lima',    email:'r.lima@empresa.com',       dept:'Operações', deptId:'ops', avatar:'RL', score:85, phishing:90, training:30, password:78, access:80, inactivity:22, certs:'expired',  lastSeen:22, cliques:4, campanhas:4, reportou:0,  treinamentos:1, planos:2, trend:'down'   },
    { id:14, name:'Carla Mendes',    email:'c.mendes@empresa.com',     dept:'Operações', deptId:'ops', avatar:'CM', score:79, phishing:82, training:38, password:70, access:72, inactivity:18, certs:'expiring', lastSeen:18, cliques:3, campanhas:4, reportou:0,  treinamentos:2, planos:1, trend:'stable' },
    { id:15, name:'Bruno Santos',    email:'b.santos@empresa.com',     dept:'Financeiro',deptId:'fin', avatar:'BS', score:52, phishing:48, training:66, password:45, access:40, inactivity:5,  certs:'valid',    lastSeen:2,  cliques:2, campanhas:4, reportou:1,  treinamentos:5, planos:0, trend:'up'     },
  ],

  /* Risk factors with weights */
  factors: [
    { id:'phishing',   label:'Phishing Vulnerabilidade', weight:0.25, icon:'🎣', desc:'Taxa de cliques em simulações de phishing' },
    { id:'training',   label:'Atraso em Treinamentos',   weight:0.30, icon:'📚', desc:'Treinamentos obrigatórios pendentes ou atrasados' },
    { id:'password',   label:'Higiene de Senha',         weight:0.15, icon:'🔑', desc:'Força e reutilização de senhas detectadas' },
    { id:'access',     label:'Conformidade de Acesso',   weight:0.15, icon:'🔐', desc:'Violações de política de controle de acesso' },
    { id:'inactivity', label:'Inatividade Prolongada',   weight:0.10, icon:'💤', desc:'Ausência de atividade na plataforma' },
    { id:'certs',      label:'Certificados Expirados',   weight:0.05, icon:'📜', desc:'Certificações vencidas ou próximas do vencimento' },
  ],

  /* Action plans */
  plans: [
    { id:1, user:'Fernanda Dias',    dept:'Diretoria', type:'Treinamento Obrigatório', status:'Em andamento', priority:'Alta',  created:'2025-01-15', due:'2025-02-15', progress:60, actions:['Phishing Awareness Avançado','MFA Corporativo','Gestão de Senhas'] },
    { id:2, user:'Ana Lima',         dept:'Financeiro',type:'Reforço Phishing',        status:'Em andamento', priority:'Alta',  created:'2025-02-01', due:'2025-03-01', progress:35, actions:['Módulo Anti-Phishing','Simulação Supervisionada'] },
    { id:3, user:'Beatriz Alves',    dept:'Financeiro',type:'Renovação Certificados',  status:'Pendente',     priority:'Média', created:'2025-02-10', due:'2025-03-10', progress:0,  actions:['ISO 27001 Foundation','LGPD na Prática'] },
    { id:4, user:'Rodrigo Lima',     dept:'Operações', type:'Plano de Reativação',     status:'Em andamento', priority:'Alta',  created:'2025-02-20', due:'2025-03-20', progress:20, actions:['Onboarding Segurança','Treinamentos Básicos','Acompanhamento Semanal'] },
    { id:5, user:'Diego Martins',    dept:'Diretoria', type:'Melhoria Contínua',       status:'Em andamento', priority:'Média', created:'2025-01-20', due:'2025-04-20', progress:48, actions:['Compliance Executivo','Governança de Dados'] },
    { id:6, user:'Marcos Oliveira',  dept:'Comercial', type:'Reforço Phishing',        status:'Concluído',    priority:'Baixa', created:'2024-12-01', due:'2025-01-01', progress:100,actions:['Phishing Básico'] },
    { id:7, user:'Carla Mendes',     dept:'Operações', type:'Treinamento Obrigatório', status:'Pendente',     priority:'Alta',  created:'2025-03-01', due:'2025-04-01', progress:0,  actions:['Cybersecurity Awareness','LGPD Operacional'] },
  ],

  /* Alerts */
  alerts: [
    { id:1,  type:'crit', icon:'🔴', msg:'Fernanda Dias (Diretoria) clicou em 4 simulações consecutivas sem reportar', time:'há 2h',  user:1 },
    { id:2,  type:'crit', icon:'🔴', msg:'Rodrigo Lima (Operações) inativo há 22 dias — risco crítico de acesso', time:'há 5h',  user:13 },
    { id:3,  type:'warn', icon:'🟡', msg:'Ana Lima tem certificados vencendo em menos de 7 dias', time:'há 1d',  user:2 },
    { id:4,  type:'warn', icon:'🟡', msg:'Beatriz Alves completou 0% dos treinamentos obrigatórios de Q1', time:'há 1d',  user:4 },
    { id:5,  type:'warn', icon:'🟡', msg:'Carla Mendes (Operações) com 3 treinamentos vencidos há mais de 15 dias', time:'há 2d',  user:14 },
    { id:6,  type:'info', icon:'🔵', msg:'Departamento Operações ultrapassou limiar de risco alto (74/100)', time:'há 2d',  user:null },
    { id:7,  type:'ok',   icon:'🟢', msg:'Rafael Neto (TI) mantém Human Risk Score perfeito — 12/100 por 3 meses', time:'há 3d',  user:11 },
    { id:8,  type:'ok',   icon:'🟢', msg:'Treinamento Q1 Phishing Awareness concluído com 87% do time', time:'há 4d',  user:null },
    { id:9,  type:'warn', icon:'🟡', msg:'Diego Martins ainda não completou módulo de Compliance executivo', time:'há 5d',  user:3 },
    { id:10, type:'info', icon:'🔵', msg:'Score organizacional melhorou 6 pontos em relação ao mês anterior', time:'há 7d',  user:null },
  ],
};

// ── State ─────────────────────────────────────────────────────
let HRM = {
  tab: 'dashboard',
  sortCol: 'score', sortDir: 'desc',
  filter: { dept: '', risk: '', search: '' },
  charts: {},
};

// ── Helpers ──────────────────────────────────────────────────
const hc = (s) => s <= 30 ? 'var(--hrm-low)' : s <= 60 ? 'var(--hrm-med)' : 'var(--hrm-high)';
const hl = (s) => s <= 30 ? 'Baixo' : s <= 60 ? 'Moderado' : 'Alto';
const hbadge = (s) => `<span class="hrm-badge ${s<=30?'hrm-low':s<=60?'hrm-med':'hrm-high'}">${hl(s)}</span>`;
const trendIcon = (t) => ({ up:'↓ Melhora', down:'↑ Piora', stable:'→ Estável' }[t] || '');
const trendCol  = (t) => ({ up:'var(--hrm-low)', down:'var(--hrm-high)', stable:'var(--hrm-med)' }[t] || '');
const certStyle = { valid:'var(--hrm-low)', expiring:'var(--hrm-med)', expired:'var(--hrm-high)' };
const certLabel = { valid:'Válidos', expiring:'Vencendo', expired:'Expirados' };

function hrmRing(score, size=110, stroke=9) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  const color = hc(score);
  return `
    <div class="hrm-ring-wrap" style="width:${size}px;height:${size}px;">
      <svg width="${size}" height="${size}" style="transform:rotate(-90deg)">
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${stroke}"/>
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
          stroke-dasharray="${fill} ${circ}" stroke-linecap="round"/>
      </svg>
      <div class="hrm-ring-val">
        <div style="font-size:${size>90?'1.6rem':'1rem'};font-weight:900;color:${color};line-height:1">${score}</div>
        <div style="font-size:0.58rem;color:var(--hrm-text2);text-transform:uppercase;letter-spacing:0.06em">${hl(score)}</div>
      </div>
    </div>`;
}

function hrmBar(pct, color) {
  return `<div class="hrm-score-bar">
    <div class="hrm-score-track">
      <div class="hrm-score-fill" style="width:${pct}%;background:${color||hc(pct)}"></div>
    </div>
    <span style="font-size:0.78rem;font-weight:700;min-width:30px;color:${color||hc(pct)}">${pct}</span>
  </div>`;
}

function avatarBg(name) {
  const colors = ['#3b82f6','#8b5cf6','#ec4899','#ef4444','#f59e0b','#22c55e','#06b6d4','#f97316'];
  return colors[(name.charCodeAt(0) + name.charCodeAt(1)) % colors.length];
}

// ── Converte usuário de users.js para formato HRM ────────────────
function userToHRM(u, idx) {
  const deptMap = { Diretoria:'dir', RH:'rh', TI:'ti', Jurídico:'jur', Financeiro:'fin', Comercial:'com', Operações:'ops', Marketing:'mkt' };
  // Score base por nível de risco
  const scoreBase = u.risk === 'high' ? 75 : u.risk === 'med' ? 48 : 22;
  const score = Math.min(99, scoreBase + Math.round((100 - u.completion) * 0.2));
  // Determinístico por id (evita flicker a cada render)
  const jitter = (u.id * 17 + (u.name.charCodeAt(0) || 0)) % 16;
  const phishing = u.risk === 'high' ? 70 + (jitter % 15) : u.risk === 'med' ? 40 + (jitter % 20) : 8 + (jitter % 15);
  const training = Math.round(u.completion * 0.9);
  const certStatus = u.certs > 3 ? 'valid' : u.certs > 0 ? 'expiring' : 'expired';
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    dept: u.dept,
    deptId: deptMap[u.dept] || 'ops',
    avatar: u.avatar,
    score,
    phishing,
    training,
    password: Math.round(score * 0.85),
    access:   Math.round(score * 0.75),
    inactivity: u.status === 'inactive' ? 30 : (u.lastLogin === 'Hoje' || u.lastLogin === 'Agora') ? 0 : 5,
    certs: certStatus,
    lastSeen: u.lastLogin === 'Hoje' || u.lastLogin === 'Agora' ? 0 : u.lastLogin === 'Ontem' ? 1 : parseInt(u.lastLogin) || 7,
    cliques: u.risk === 'high' ? 3 : u.risk === 'med' ? 1 : 0,
    campanhas: 3,
    reportou: u.risk === 'low' ? 2 : u.risk === 'med' ? 1 : 0,
    treinamentos: Math.round(u.completion / 10),
    planos: u.risk === 'high' ? 2 : u.risk === 'med' ? 1 : 0,
    trend: u.risk === 'low' ? 'up' : u.risk === 'med' ? 'stable' : 'down',
    isDemo: u.isDemo || false,
  };
}

// ── Main Page Render (overrides certificates.js renderPage_risk) ──
window.renderPage_risk = function() {
  injectHRMCSS && injectHRMCSS();

  // ── Substituir HRM_DATA.users pelos usuários reais da empresa ativa ──
  // Garante dados frescos mesmo se users.js não foi renderizado ainda
  const _hrmSource = (typeof getActiveTenantUsers === 'function')
    ? getActiveTenantUsers()
    : (typeof _usersAll !== 'undefined' && _usersAll.length > 0 ? _usersAll : []);
  if (typeof _usersAll !== 'undefined') _usersAll = _hrmSource; // sincroniza cache

  if (_hrmSource.length > 0) {
    // Reconstrói a lista a partir dos usuários reais
    HRM_DATA.users = _hrmSource.map((u, i) => {
      // Admin Local DEMO: usa DEMO_STATE para dados precisos
      if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
        return DEMO_STATE.asHRMUser();
      }
      return userToHRM(u, i);
    });

    // ── Reconstruir HRM_DATA.depts a partir dos usuários reais ──────
    // Agrupa usuários HRM por dept
    const deptMap = {};
    HRM_DATA.users.forEach(u => {
      const key = u.dept;
      if (!deptMap[key]) deptMap[key] = [];
      deptMap[key].push(u);
    });

    // Ícones padrão por dept (fallback se não existir entrada anterior)
    const deptIconMap = { 'Diretoria':'🏛️','TI':'💻','Financeiro':'💰','RH':'👥','Marketing':'📣','Vendas':'📈','Operações':'⚙️','Jurídico':'⚖️','Engenharia':'🔧','Produto':'🎯','Design':'🎨','Suporte':'🛠️','Logística':'🚚','Comercial':'🤝','Segurança':'🔒' };
    const oldDeptIcons = {};
    HRM_DATA.depts.forEach(d => { oldDeptIcons[d.name] = d.icon; });

    // Fatores disponíveis
    const factorIds = HRM_DATA.factors.map(f => f.id); // ['phishing','training','password','access','inactivity','certs']

    // Constrói array de depts apenas com usuários reais
    HRM_DATA.depts = Object.keys(deptMap).map(deptName => {
      const users = deptMap[deptName];
      const members = users.length;
      // Média de cada fator (certs é 'valid'/'expired', converte para score numérico)
      const factors = {};
      factorIds.forEach(fid => {
        const vals = users.map(u => {
          if (fid === 'certs') return u.certs === 'valid' ? 10 : u.certs === 'expiring' ? 42 : 72;
          return typeof u[fid] === 'number' ? u[fid] : 50;
        });
        factors[fid] = Math.round(vals.reduce((s,v)=>s+v,0)/vals.length);
      });
      const scoreAvg = Math.round(users.reduce((s,u)=>s+u.score,0)/users.length);
      return {
        name:    deptName,
        icon:    oldDeptIcons[deptName] || deptIconMap[deptName] || '🏢',
        members,
        score:   scoreAvg,
        ...factors,
      };
    });

    // Ordena por score decrescente (mais arriscado primeiro)
    HRM_DATA.depts.sort((a,b) => b.score - a.score);

    // Recalcular score organizacional
    const orgAvg = Math.round(HRM_DATA.users.reduce((s,u) => s + u.score, 0) / HRM_DATA.users.length);
    HRM_DATA.orgScore = orgAvg;
    HRM_DATA.orgLabel = orgAvg <= 30 ? 'Baixo Risco' : orgAvg <= 60 ? 'Risco Moderado' : 'Alto Risco';
  } else {
    // Fallback: só injeta o demo
    if (typeof DEMO_STATE !== 'undefined') {
      const du = DEMO_STATE.asHRMUser();
      const idx = HRM_DATA.users.findIndex(u => u.id === 999);
      if (idx >= 0) HRM_DATA.users[idx] = du;
      else HRM_DATA.users.push(du);
    }
  }
  return `
<div id="hrm-module">
  <div class="hrm-tabs">
    ${[
      ['dashboard','📊 Dashboard'],
      ['usuarios', '👤 Usuários'],
      ['matriz',   '🔥 Matriz de Risco'],
      ['planos',   '📋 Planos de Ação'],
      ['alertas',  '🔔 Alertas'],
      ['relatorio','📄 Relatório Executivo'],
    ].map(([k,l])=>`<button class="hrm-tab${HRM.tab===k?' active':''}" data-htab="${k}" onclick="hrmTab('${k}')">${l}</button>`).join('')}
  </div>
  <div id="hrm-body">${renderHRMDashboard()}</div>
  <div id="hrm-modals"></div>
</div>`;
};

window.initPage_risk = function() {
  hrmRunCharts(HRM.tab);
};

/* Double rAF ensures DOM is fully painted before chart init */
function hrmRunCharts(tab) {
  function tryLoad(cb) {
    if (window.Chart) {
      requestAnimationFrame(() => requestAnimationFrame(cb));
    } else {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
      s.onload = () => requestAnimationFrame(() => requestAnimationFrame(cb));
      document.head.appendChild(s);
    }
  }
  tryLoad(() => {
    if (tab === 'dashboard') initHRMDashCharts();
    if (tab === 'matriz')    initHRMMatrixChart();
    if (tab === 'relatorio') initHRMReportChart();
  });
}

window.hrmTab = function(tab) {
  HRM.tab = tab;
  document.querySelectorAll('.hrm-tab').forEach(b => b.classList.toggle('active', b.dataset.htab === tab));
  const body = document.getElementById('hrm-body');
  if (!body) return;
  const renderers = {
    dashboard: renderHRMDashboard,
    usuarios:  renderHRMUsuarios,
    matriz:    renderHRMMatriz,
    planos:    renderHRMPlanos,
    alertas:   renderHRMAlertas,
    relatorio: renderHRMRelatorio,
  };
  body.style.opacity = '0';
  body.innerHTML = (renderers[tab] || renderHRMDashboard)();
  requestAnimationFrame(() => { body.style.transition = 'opacity 0.25s'; body.style.opacity = '1'; });
  hrmRunCharts(tab);
};

// ══════════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════════
function renderHRMDashboard() {
  const highRisk = HRM_DATA.users.filter(u => u.score > 60).length;
  const avgScore = Math.round(HRM_DATA.users.reduce((s,u)=>s+u.score,0)/HRM_DATA.users.length);
  const totalPlans = HRM_DATA.plans.filter(p=>p.status!=='Concluído').length;
  const critAlerts = HRM_DATA.alerts.filter(a=>a.type==='crit').length;
  const trend = HRM_DATA.orgTrend;

  return `
  <!-- KPIs -->
  <div class="hrm-kpi-grid">
    <div class="hrm-kpi">
      <div class="hrm-kpi-icon" style="background:rgba(239,68,68,0.12);font-size:1.3rem">⚠️</div>
      <div class="hrm-kpi-val" style="color:var(--hrm-high)">${highRisk}</div>
      <div class="hrm-kpi-label">Usuários Alto Risco</div>
      <div class="hrm-kpi-trend" style="color:var(--hrm-high)">▲ Requer atenção imediata</div>
    </div>
    <div class="hrm-kpi">
      <div class="hrm-kpi-icon" style="background:rgba(245,158,11,0.12);font-size:1.3rem">📊</div>
      <div class="hrm-kpi-val" style="color:${hc(avgScore)}">${avgScore}</div>
      <div class="hrm-kpi-label">Score Médio Org.</div>
      <div class="hrm-kpi-trend" style="color:${trend<0?'var(--hrm-low)':'var(--hrm-high)'}">
        ${trend<0?'↓':'↑'} ${Math.abs(trend)} pts vs. mês anterior
      </div>
    </div>
    <div class="hrm-kpi">
      <div class="hrm-kpi-icon" style="background:rgba(59,130,246,0.12);font-size:1.3rem">📋</div>
      <div class="hrm-kpi-val" style="color:var(--hrm-blue)">${totalPlans}</div>
      <div class="hrm-kpi-label">Planos Ativos</div>
      <div class="hrm-kpi-trend" style="color:var(--hrm-text2)">${HRM_DATA.plans.filter(p=>p.status==='Concluído').length} concluídos</div>
    </div>
    <div class="hrm-kpi">
      <div class="hrm-kpi-icon" style="background:rgba(239,68,68,0.12);font-size:1.3rem">🚨</div>
      <div class="hrm-kpi-val" style="color:var(--hrm-high)">${critAlerts}</div>
      <div class="hrm-kpi-label">Alertas Críticos</div>
      <div class="hrm-kpi-trend" style="color:var(--hrm-text2)">Requerem ação hoje</div>
    </div>
    <div class="hrm-kpi">
      <div class="hrm-kpi-icon" style="background:rgba(34,197,94,0.12);font-size:1.3rem">✅</div>
      <div class="hrm-kpi-val" style="color:var(--hrm-low)">${HRM_DATA.users.filter(u=>u.score<=30).length}</div>
      <div class="hrm-kpi-label">Baixo Risco</div>
      <div class="hrm-kpi-trend" style="color:var(--hrm-low)">Conformes e ativos</div>
    </div>
    <div class="hrm-kpi">
      <div class="hrm-kpi-icon" style="background:rgba(139,92,246,0.12);font-size:1.3rem">🎯</div>
      <div class="hrm-kpi-val" style="color:var(--hrm-purple)">${HRM_DATA.users.filter(u=>u.certs==='expired').length}</div>
      <div class="hrm-kpi-label">Certs. Expirados</div>
      <div class="hrm-kpi-trend" style="color:var(--hrm-med)">${HRM_DATA.users.filter(u=>u.certs==='expiring').length} vencendo em breve</div>
    </div>
  </div>

  <!-- Trend + Org Score -->
  <div class="hrm-charts-2">
    <div class="hrm-card">
      <div class="hrm-card-title">📈 Evolução do Risco Organizacional — 12 Meses</div>
      <div class="hrm-canvas-wrap"><canvas id="hrm-dash-line"></canvas></div>
    </div>
    <div class="hrm-card" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px">
      <div class="hrm-card-title" style="text-align:center">🛡 Score Organizacional Atual</div>
      ${hrmRing(HRM_DATA.orgScore, 130, 11)}
      <div style="text-align:center">
        <div style="font-size:0.85rem;color:var(--hrm-text2)">${HRM_DATA.orgLabel}</div>
        <div style="font-size:0.75rem;color:${trend<0?'var(--hrm-low)':'var(--hrm-high)'};margin-top:4px;font-weight:700">
          ${trend<0?'↓ Melhorou':'↑ Piorou'} ${Math.abs(trend)} pts vs. mês anterior
        </div>
      </div>
      <div style="width:100%;display:flex;flex-direction:column;gap:7px;margin-top:4px">
        ${[['🟢 Baixo Risco',HRM_DATA.users.filter(u=>u.score<=30).length,'var(--hrm-low)'],
           ['🟡 Moderado',   HRM_DATA.users.filter(u=>u.score>30&&u.score<=60).length,'var(--hrm-med)'],
           ['🔴 Alto Risco', HRM_DATA.users.filter(u=>u.score>60).length,'var(--hrm-high)']
          ].map(([l,n,c])=>`
          <div>
            <div style="display:flex;justify-content:space-between;font-size:0.72rem;margin-bottom:3px">
              <span style="color:${c}">${l}</span>
              <span style="color:var(--hrm-text2)">${n} usuários (${Math.round(n/HRM_DATA.users.length*100)}%)</span>
            </div>
            <div style="height:5px;background:rgba(255,255,255,0.06);border-radius:3px">
              <div style="width:${Math.round(n/HRM_DATA.users.length*100)}%;height:100%;background:${c};border-radius:3px"></div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Department Overview + Top Risk Users -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
    <div class="hrm-card">
      <div class="hrm-card-title">🏢 Score por Departamento</div>
      ${HRM_DATA.depts.sort((a,b)=>b.score-a.score).map(d=>`
        <div class="hrm-dept-row">
          <span style="font-size:1rem;width:22px;text-align:center">${d.icon}</span>
          <span style="font-size:0.83rem;font-weight:600;min-width:90px">${d.name}</span>
          <div style="flex:1">${hrmBar(d.score)}</div>
          ${hbadge(d.score)}
        </div>`).join('')}
    </div>

    <div class="hrm-card">
      <div class="hrm-sh">
        <div class="hrm-card-title" style="margin:0">🔴 Maiores Riscos</div>
        <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="hrmTab('usuarios')">Ver todos →</button>
      </div>
      ${HRM_DATA.users.sort((a,b)=>b.score-a.score).slice(0,6).map(u=>`
        <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,0.03);cursor:pointer" onclick="hrmOpenProfile(${u.id})">
          <div class="hrm-avatar" style="background:${avatarBg(u.name)}">${u.avatar}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:600;font-size:0.84rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.name}</div>
            <div style="font-size:0.72rem;color:var(--hrm-text2)">${u.dept}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:1.1rem;font-weight:800;color:${hc(u.score)}">${u.score}</div>
            <div style="font-size:0.62rem;color:${trendCol(u.trend)}">${trendIcon(u.trend)}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>

  <!-- Risk Factors Distribution -->
  <div class="hrm-card">
    <div class="hrm-card-title">⚠️ Fatores de Risco Activos</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px">
      ${HRM_DATA.factors.map(f => {
        const affected = HRM_DATA.users.filter(u => u[f.id] > 40).length;
        const avgFactor = Math.round(HRM_DATA.users.reduce((s,u)=>s+(u[f.id]||0),0)/HRM_DATA.users.length);
        return `
        <div style="background:rgba(255,255,255,0.02);border:1px solid var(--hrm-border);border-radius:12px;padding:14px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span style="font-size:1.1rem">${f.icon}</span>
            <div style="flex:1">
              <div style="font-size:0.80rem;font-weight:600">${f.label}</div>
              <div style="font-size:0.68rem;color:var(--hrm-text2)">${Math.round(f.weight*100)}% peso</div>
            </div>
            <div style="font-size:1.1rem;font-weight:800;color:${hc(avgFactor)}">${avgFactor}</div>
          </div>
          ${hrmBar(avgFactor)}
          <div style="font-size:0.68rem;color:var(--hrm-text2);margin-top:7px">${affected} usuários afectados</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function hrmDestroyChart(key) {
  try { if (HRM.charts[key]) { HRM.charts[key].destroy(); HRM.charts[key] = null; } } catch(e) {}
}

function initHRMDashCharts() {
  if (!window.Chart) return;
  hrmDestroyChart('dashLine');
  const ctx = document.getElementById('hrm-dash-line');
  if (!ctx) return;
  /* Force explicit canvas dimensions */
  /* canvas sized by .hrm-canvas-wrap CSS */
  const parent = ctx.closest('.hrm-card');
  if (parent) parent.style.minHeight = '260px';
  Chart.defaults.color = '#94a3b8';
  HRM.charts.dashLine = new Chart(ctx, {
    type: 'line',
    data: {
      labels: HRM_DATA.history.map(h => h.month),
      datasets: [{
        label: 'Human Risk Score',
        data:  HRM_DATA.history.map(h => h.score),
        borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.10)',
        tension: 0.4, fill: true, pointRadius: 5, pointBackgroundColor: '#ef4444',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 700 },
      transitions: { resize: { animation: { duration: 0 } } },
      elements: { point: { hoverRadius: 5 } },   /* no growth on hover */
      plugins: {
        legend: { display: false },
        tooltip: { animation: false, callbacks: { label: c => `Score: ${c.raw} — ${hl(c.raw)}` } }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280' } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280' }, min: 0, max: 100 }
      }
    }
  });
  requestAnimationFrame(() => { if (HRM.charts.dashLine) HRM.charts.dashLine.resize(); });
}

// ══════════════════════════════════════════════════════════════
//  USUÁRIOS
// ══════════════════════════════════════════════════════════════
function renderHRMUsuarios() {
  const users = getFilteredUsers();
  return `
  <div class="hrm-sh">
    <div class="hrm-sh-title">👤 Perfis de Risco Individual <span style="font-size:0.75rem;font-weight:400;color:var(--hrm-text2)">(${users.length} usuários)</span></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <input class="hrm-input" placeholder="🔍 Buscar usuário..." style="width:200px" id="hrm-search" oninput="hrmFilterUsers()" value="${HRM.filter.search}">
      <select class="hrm-select" id="hrm-fdept" onchange="hrmFilterUsers()">
        <option value="">Todos os dept.</option>
        ${HRM_DATA.depts.map(d=>`<option value="${d.id}"${HRM.filter.dept===d.id?' selected':''}>${d.name}</option>`).join('')}
      </select>
      <select class="hrm-select" id="hrm-frisk" onchange="hrmFilterUsers()">
        <option value="">Todos os riscos</option>
        <option value="low"${HRM.filter.risk==='low'?' selected':''}>🟢 Baixo (≤30)</option>
        <option value="med"${HRM.filter.risk==='med'?' selected':''}>🟡 Moderado (31-60)</option>
        <option value="high"${HRM.filter.risk==='high'?' selected':''}>🔴 Alto (>60)</option>
      </select>
      <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="hrmExportUsers()">⬇ Exportar</button>
    </div>
  </div>

  <div class="hrm-card" style="padding:0;overflow:hidden">
    <div style="overflow-x:auto">
    <table class="hrm-table">
      <thead><tr>
        <th onclick="hrmSort('name')">Usuário ${sortIcon('name')}</th>
        <th onclick="hrmSort('dept')">Departamento ${sortIcon('dept')}</th>
        <th onclick="hrmSort('score')">Risk Score ${sortIcon('score')}</th>
        <th onclick="hrmSort('phishing')">Phishing ${sortIcon('phishing')}</th>
        <th onclick="hrmSort('training')">Treinamento ${sortIcon('training')}</th>
        <th onclick="hrmSort('certs')">Certificados ${sortIcon('certs')}</th>
        <th onclick="hrmSort('lastSeen')">Última Ativ. ${sortIcon('lastSeen')}</th>
        <th>Tendência</th>
        <th>Acções</th>
      </tr></thead>
      <tbody id="hrm-users-tbody">
        ${users.map(u => hrmUserRow(u)).join('')}
      </tbody>
    </table>
    </div>
  </div>`;
}

function hrmUserRow(u) {
  const dayLabel = u.lastSeen === 0 ? 'Hoje' : u.lastSeen === 1 ? 'Ontem' : `${u.lastSeen}d atrás`;
  return `<tr onclick="hrmOpenProfile(${u.id})" title="Clique para ver perfil completo">
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div class="hrm-avatar" style="background:${avatarBg(u.name)}">${u.avatar}</div>
        <div>
          <div style="font-weight:600;font-size:0.85rem">${u.name}</div>
          <div style="font-size:0.70rem;color:var(--hrm-text2)">${u.email}</div>
        </div>
      </div>
    </td>
    <td><span style="font-size:0.80rem">${u.dept}</span></td>
    <td>
      <div style="display:flex;align-items:center;gap:8px">
        ${hrmRing(u.score, 48, 4)}
        ${hbadge(u.score)}
      </div>
    </td>
    <td>${hrmBar(u.phishing, hc(u.phishing))}</td>
    <td>${hrmBar(u.training, hc(u.training))}</td>
    <td><span style="font-size:0.78rem;font-weight:600;color:${certStyle[u.certs]}">${certLabel[u.certs]}</span></td>
    <td style="font-size:0.78rem;color:${u.lastSeen>14?'var(--hrm-high)':u.lastSeen>7?'var(--hrm-med)':'var(--hrm-text2)'}">${dayLabel}</td>
    <td><span style="font-size:0.78rem;font-weight:600;color:${trendCol(u.trend)}">${trendIcon(u.trend)}</span></td>
    <td onclick="event.stopPropagation()">
      <div style="display:flex;gap:5px">
        <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="hrmOpenProfile(${u.id})">👁 Perfil</button>
        <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="hrmCreatePlan(${u.id})">📋</button>
      </div>
    </td>
  </tr>`;
}

function sortIcon(col) {
  if (HRM.sortCol !== col) return '<span style="opacity:0.3">↕</span>';
  return HRM.sortDir === 'asc' ? '↑' : '↓';
}

function getFilteredUsers() {
  let users = [...HRM_DATA.users];
  if (HRM.filter.search) users = users.filter(u => u.name.toLowerCase().includes(HRM.filter.search.toLowerCase()) || u.email.toLowerCase().includes(HRM.filter.search.toLowerCase()));
  if (HRM.filter.dept)   users = users.filter(u => u.deptId === HRM.filter.dept);
  if (HRM.filter.risk === 'low')  users = users.filter(u => u.score <= 30);
  if (HRM.filter.risk === 'med')  users = users.filter(u => u.score > 30 && u.score <= 60);
  if (HRM.filter.risk === 'high') users = users.filter(u => u.score > 60);
  users.sort((a,b) => {
    const av = a[HRM.sortCol]; const bv = b[HRM.sortCol];
    return HRM.sortDir === 'asc' ? (av>bv?1:-1) : (av<bv?1:-1);
  });
  return users;
}

window.hrmSort = function(col) {
  if (HRM.sortCol === col) HRM.sortDir = HRM.sortDir === 'asc' ? 'desc' : 'asc';
  else { HRM.sortCol = col; HRM.sortDir = 'desc'; }
  const tbody = document.getElementById('hrm-users-tbody');
  if (tbody) tbody.innerHTML = getFilteredUsers().map(u => hrmUserRow(u)).join('');
};

window.hrmFilterUsers = function() {
  HRM.filter.search = document.getElementById('hrm-search')?.value || '';
  HRM.filter.dept   = document.getElementById('hrm-fdept')?.value  || '';
  HRM.filter.risk   = document.getElementById('hrm-frisk')?.value  || '';
  const tbody = document.getElementById('hrm-users-tbody');
  if (tbody) tbody.innerHTML = getFilteredUsers().map(u => hrmUserRow(u)).join('');
};

window.hrmExportUsers = function() {
  showToast && showToast('Exportando CSV de perfis de risco…','info');
  setTimeout(() => showToast && showToast('CSV exportado com sucesso!','success'), 1200);
};

// ── User Profile Modal ────────────────────────────────────────
window.hrmOpenProfile = function(userId) {
  const u = HRM_DATA.users.find(x => x.id === userId);
  if (!u) return;
  const userPlans = HRM_DATA.plans.filter(p => p.user === u.name);
  const dept = HRM_DATA.depts.find(d => d.id === u.deptId);

  hrmShowModal(`
    <div class="hrm-modal-hdr">
      <div style="display:flex;align-items:center;gap:14px">
        <div class="hrm-avatar" style="background:${avatarBg(u.name)};width:48px;height:48px;font-size:1rem">${u.avatar}</div>
        <div>
          <div style="font-size:1.1rem;font-weight:800">${u.name}</div>
          <div style="font-size:0.80rem;color:var(--hrm-text2)">${u.email} · ${u.dept}</div>
        </div>
      </div>
      <button class="hrm-modal-close" onclick="hrmCloseModal()">✕</button>
    </div>

    <!-- Score summary -->
    <div style="display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:center;margin-bottom:22px;background:var(--hrm-card2);border-radius:14px;padding:20px">
      ${hrmRing(u.score, 110, 10)}
      <div>
        <div style="font-size:1.3rem;font-weight:800;color:${hc(u.score)};margin-bottom:4px">${hl(u.score)} Risco</div>
        <div style="font-size:0.82rem;color:var(--hrm-text2);margin-bottom:10px">Score: ${u.score}/100 · Tendência: <span style="color:${trendCol(u.trend)};font-weight:700">${trendIcon(u.trend)}</span></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${hbadge(u.score)}
          <span class="hrm-badge" style="background:rgba(99,102,241,0.12);color:#818cf8">${u.cliques}/${u.campanhas} cliques phishing</span>
          <span class="hrm-badge" style="background:rgba(16,185,129,0.10);color:#34d399">${u.reportou} reportes</span>
          <span class="hrm-badge" style="background:${certStyle[u.certs]}22;color:${certStyle[u.certs]}">${certLabel[u.certs]}</span>
        </div>
      </div>
    </div>

    <!-- Risk Dimensions -->
    <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--hrm-text2);margin-bottom:12px">Dimensões de Risco</div>
    <div class="hrm-radar-grid" style="margin-bottom:20px">
      ${HRM_DATA.factors.map(f => `
        <div class="hrm-radar-item">
          <div class="hrm-radar-label">
            <span>${f.icon} ${f.label}</span>
            <span style="color:${hc(u[f.id])};font-weight:700">${u[f.id]}/100</span>
          </div>
          <div class="hrm-radar-track">
            <div class="hrm-radar-fill" style="width:${u[f.id]}%;background:${hc(u[f.id])}"></div>
          </div>
          <div style="font-size:0.65rem;color:var(--hrm-text2);margin-top:4px">${f.desc}</div>
        </div>`).join('')}
    </div>

    <!-- Stats -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      ${[
        ['📧','Campanhas\nRecebidas',u.campanhas],
        ['🎣','Cliques\nPhishing',u.cliques],
        ['🚩','Reportes',u.reportou],
        ['🎓','Treinamentos\nCompletos',u.treinamentos],
      ].map(([icon,label,val])=>`
        <div style="background:var(--hrm-card2);border-radius:10px;padding:12px;text-align:center">
          <div style="font-size:1.4rem">${icon}</div>
          <div style="font-size:1.3rem;font-weight:800;margin:4px 0">${val}</div>
          <div style="font-size:0.65rem;color:var(--hrm-text2);white-space:pre-line">${label}</div>
        </div>`).join('')}
    </div>

    <!-- Action Plans -->
    ${userPlans.length ? `
    <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--hrm-text2);margin-bottom:10px">Planos de Ação</div>
    ${userPlans.map(p=>`
      <div class="hrm-plan-card" style="margin-bottom:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <span style="font-weight:600;font-size:0.85rem">${p.type}</span>
          <span class="hrm-badge ${p.status==='Concluído'?'hrm-low':p.status==='Em andamento'?'hrm-med':'hrm-high'}">${p.status}</span>
        </div>
        <div style="height:4px;background:rgba(255,255,255,0.06);border-radius:2px;margin-bottom:7px">
          <div style="width:${p.progress}%;height:100%;background:${p.progress===100?'var(--hrm-low)':'var(--hrm-teal)'};border-radius:2px"></div>
        </div>
        <div style="font-size:0.70rem;color:var(--hrm-text2)">${p.progress}% concluído · Prazo: ${p.due}</div>
      </div>`).join('')}
    ` : ''}

    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="hrm-btn hrm-btn-ghost" style="flex:1" onclick="hrmCloseModal()">Fechar</button>
      <button class="hrm-btn hrm-btn-ghost" style="flex:1" onclick="hrmCloseModal();hrmCreatePlan(${u.id})">📋 Criar Plano</button>
      <button class="hrm-btn hrm-btn-primary" style="flex:1" onclick="showToast&&showToast('Gestor notificado!','success');hrmCloseModal()">🔔 Notificar Gestor</button>
    </div>
  `, 'hrm-modal hrm-modal-xl');
};

// ══════════════════════════════════════════════════════════════
//  MATRIZ DE RISCO
// ══════════════════════════════════════════════════════════════
function renderHRMMatriz() {
  const factors = HRM_DATA.factors;
  const depts   = HRM_DATA.depts;

  // ── Factor details (shown only on hover) ────────────────────
  const factorDetails = {
    phishing:   { detail:'Taxa de cliques em simulações de phishing enviadas pela plataforma. Cada clique aumenta o score. Reportar uma campanha reduz o risco.', badge:'Quanto maior → mais vulnerável a ataques reais', users:'Usuários que clicaram / reportaram / ignoraram campanhas' },
    training:   { detail:'Atraso e incompletude de treinamentos obrigatórios. Calculado pela % de conclusão de cada colaborador. Reprovações em quiz aumentam o peso.', badge:'Quanto maior → mais treinamentos obrigatórios em atraso', users:'Lista de cursos: Aprovado / Reprovado / Atrasado / Pendente' },
    password:   { detail:'Qualidade e higiene das senhas detectadas na plataforma. Considera reutilização, força, 2FA, rotação e padrões previsíveis.', badge:'Quanto maior → senhas mais fracas ou vulneráveis', users:'Vulnerabilidades: reutilização, força insuficiente, 2FA off, senha expirada' },
    access:     { detail:'Violações de política de controle de acesso: logins fora do horário, IPs suspeitos, tentativas negadas, downloads em massa, escalada de privilégio.', badge:'Quanto maior → mais violações de acesso detectadas', users:'Cada violação com sistema, data e severidade (Crítico/Médio/Baixo)' },
    inactivity: { detail:'Dias sem acesso à plataforma. Inatividade >7 dias = risco médio; >14 dias = risco alto. Calculado por módulo (Dashboard, Treinamentos, Phishing…).', badge:'Quanto maior → mais dias sem uso da plataforma', users:'Alerta com dias exatos + último acesso por módulo' },
    certs:      { detail:'Status dos certificados emitidos. Certificados válidos = score 10 (baixo risco). Vencendo em <90 dias = 42. Expirados = 72 (alto risco).', badge:'Quanto maior → mais certificados vencidos ou expirados', users:'Cada certificado com nome, emissão, vencimento e status' },
  };

  return `
  <style>
    .hrm-factor-legend-row { position:relative; display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); cursor:default; transition:border-color .2s; }
    .hrm-factor-legend-row:hover { border-color:rgba(255,255,255,.16); background:rgba(255,255,255,.05); }
    .hrm-factor-legend-row:hover .hrm-factor-tooltip { opacity:1; pointer-events:auto; transform:translateY(0); }
    .hrm-factor-tooltip { position:absolute; left:0; top:calc(100% + 8px); z-index:200; width:340px; background:#1a1a2e; border:1px solid rgba(255,255,255,.14); border-radius:12px; padding:14px 16px; opacity:0; pointer-events:none; transform:translateY(-6px); transition:opacity .22s, transform .22s; box-shadow:0 12px 40px rgba(0,0,0,.6); }
    .hrm-factor-tooltip::before { content:''; position:absolute; top:-6px; left:22px; width:10px; height:10px; background:#1a1a2e; border-left:1px solid rgba(255,255,255,.14); border-top:1px solid rgba(255,255,255,.14); transform:rotate(45deg); }
  </style>

  <div class="hrm-sh">
    <div class="hrm-sh-title">🔥 Matriz de Risco — Departamento × Factor</div>
    <div style="display:flex;gap:12px;font-size:0.72rem;align-items:center;flex-wrap:wrap">
      <span style="display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;border-radius:4px;background:rgba(34,197,94,0.7);display:inline-block"></span>Baixo (≤30)</span>
      <span style="display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;border-radius:4px;background:rgba(245,158,11,0.8);display:inline-block"></span>Médio (31-60)</span>
      <span style="display:flex;align-items:center;gap:5px"><span style="width:14px;height:14px;border-radius:4px;background:rgba(239,68,68,0.85);display:inline-block"></span>Alto (>60)</span>
      <span style="color:var(--hrm-muted);font-size:0.68rem;margin-left:8px">💡 Clique em qualquer célula para detalhar • Passe o mouse nos factores para ver a explicação</span>
    </div>
  </div>

  <!-- ── Factor Legend (hover to reveal details) ─────────────── -->
  <div class="hrm-card" style="padding:14px 16px;margin-bottom:4px">
    <div style="font-size:.65rem;font-weight:800;color:var(--hrm-muted);text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px">📖 Legenda dos Factores — passe o mouse para ver detalhes</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:8px">
      ${factors.map(f => {
        const d = factorDetails[f.id] || {};
        return `
        <div class="hrm-factor-legend-row">
          <span style="font-size:1.2rem;flex-shrink:0">${f.icon}</span>
          <div style="min-width:0;flex:1">
            <div style="font-size:.80rem;font-weight:700">${f.label}</div>
            <div style="font-size:.65rem;color:var(--hrm-muted);margin-top:1px">Peso: ${Math.round(f.weight*100)}% do score total</div>
          </div>
          <span style="font-size:.62rem;color:var(--hrm-muted)">ℹ️</span>
          <!-- Tooltip (visible only on hover via CSS) -->
          <div class="hrm-factor-tooltip">
            <div style="font-size:.70rem;font-weight:800;color:var(--hrm-text2);margin-bottom:8px;display:flex;align-items:center;gap:6px">${f.icon} ${f.label}</div>
            <div style="font-size:.78rem;color:var(--hrm-text2);line-height:1.55;margin-bottom:10px">${d.detail||f.desc||''}</div>
            <div style="font-size:.68rem;padding:6px 10px;border-radius:7px;background:rgba(255,255,255,.05);color:var(--hrm-muted);margin-bottom:6px">📊 ${d.badge||''}</div>
            <div style="font-size:.68rem;padding:6px 10px;border-radius:7px;background:rgba(255,255,255,.05);color:var(--hrm-muted)">👤 No detalhamento: ${d.users||''}</div>
            <div style="margin-top:10px;display:flex;gap:8px;font-size:.65rem">
              <span style="color:#22c55e">● ≤30 Baixo</span>
              <span style="color:#f59e0b">● 31–60 Médio</span>
              <span style="color:#ef4444">● >60 Alto</span>
              <span style="color:var(--hrm-muted);margin-left:auto">Peso: ${Math.round(f.weight*100)}%</span>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div class="hrm-card" style="overflow-x:auto">
    <table style="width:100%;border-collapse:separate;border-spacing:4px">
      <thead>
        <tr>
          <th style="text-align:left;padding:8px 12px;font-size:0.68rem;color:var(--hrm-muted)">Departamento</th>
          ${factors.map(f=>`<th style="text-align:center;padding:8px 6px;font-size:0.68rem;color:var(--hrm-text2);font-weight:600;white-space:nowrap;cursor:pointer" title="${f.desc}">${f.icon} ${f.label.split(' ').slice(0,2).join(' ')}</th>`).join('')}
          <th style="text-align:center;padding:8px;font-size:0.68rem;color:var(--hrm-muted)">Score</th>
        </tr>
      </thead>
      <tbody>
        ${depts.map(d=>`
          <tr>
            <td style="padding:6px 12px;cursor:pointer" onclick="hrmMatrizDrilldown('${d.name}',null)" title="Ver resumo de ${d.name}">
              <div style="display:flex;align-items:center;gap:8px">
                <span>${d.icon}</span>
                <span style="font-size:0.83rem;font-weight:600">${d.name}</span>
                <span style="font-size:0.70rem;color:var(--hrm-text2)">(${d.members})</span>
              </div>
            </td>
            ${factors.map(f=>{
              const val = d[f.id];
              const bg = val<=30?`rgba(34,197,94,${0.15+val/200})`:val<=60?`rgba(245,158,11,${0.15+val/200})`:`rgba(239,68,68,${0.15+val/200})`;
              const col = hc(val);
              return `<td style="padding:4px">
                <div class="hrm-heatmap-cell" onclick="hrmMatrizDrilldown('${d.name}','${f.id}')"
                  style="background:${bg};color:${col};height:38px;border-radius:8px;border:1px solid ${col}22;cursor:pointer;transition:transform .15s,box-shadow .15s"
                  onmouseenter="this.style.transform='scale(1.12)';this.style.boxShadow='0 4px 16px ${col}44'"
                  onmouseleave="this.style.transform='';this.style.boxShadow=''"
                  title="Clique para detalhar: ${d.name} — ${f.label} (${val}/100)">
                  ${val}
                </div>
              </td>`;
            }).join('')}
            <td style="padding:4px;cursor:pointer" onclick="hrmMatrizDrilldown('${d.name}',null)">
              <div style="text-align:center;font-size:1rem;font-weight:800;color:${hc(d.score)}">${d.score}</div>
            </td>
          </tr>`).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td style="padding:8px 12px;font-size:0.70rem;color:var(--hrm-muted);font-weight:700">Média Org.</td>
          ${factors.map(f=>{
            const avg = Math.round(depts.reduce((s,d)=>s+(d[f.id]||0),0)/depts.length);
            return `<td style="padding:4px;text-align:center;font-size:0.80rem;font-weight:800;color:${hc(avg)};cursor:pointer" onclick="hrmMatrizDrilldown(null,'${f.id}')" title="Ver todos os departamentos: ${f.label}">${avg}</td>`;
          }).join('')}
          <td style="padding:4px;text-align:center;font-size:1rem;font-weight:800;color:${hc(HRM_DATA.orgScore)}">${HRM_DATA.orgScore}</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <!-- Factor breakdown chart area -->
  <div class="hrm-card" style="margin-top:16px">
    <div class="hrm-card-title">📊 Score Médio por Factor de Risco</div>
    <div class="hrm-canvas-wrap" style="height:160px"><canvas id="hrm-matrix-chart"></canvas></div>
  </div>`;
}

// ── Deterministic pseudo-random seeded by user id ─────────────
function _hrmR(uid, salt, max) {
  const v = ((uid * 1664525 + salt * 22695477 + 1013904223) & 0x7FFFFFFF);
  return v % (max || 100);
}

// ── Rich detail generators per factor ─────────────────────────
function hrmFactorDetail(u, factorId) {
  const uid = typeof u.id === 'number' ? u.id : 1;

  // ── Courses catalogue ──────────────────────────────────────
  const COURSES = [
    { id:'c1', name:'Segurança da Informação Básica',       dur:'45min', mandatory:true  },
    { id:'c2', name:'Phishing e Engenharia Social',          dur:'30min', mandatory:true  },
    { id:'c3', name:'LGPD e Proteção de Dados Pessoais',    dur:'60min', mandatory:true  },
    { id:'c4', name:'Gestão de Senhas e Autenticação',       dur:'25min', mandatory:true  },
    { id:'c5', name:'Acesso Remoto e VPN Segura',            dur:'20min', mandatory:false },
    { id:'c6', name:'Classificação de Informações',          dur:'35min', mandatory:true  },
    { id:'c7', name:'Resposta a Incidentes de Segurança',   dur:'50min', mandatory:false },
    { id:'c8', name:'Compliance e Ética Corporativa',        dur:'40min', mandatory:true  },
    { id:'c9', name:'Segurança em Dispositivos Móveis',      dur:'20min', mandatory:false },
    { id:'c10',name:'Boas Práticas em Ambientes de Nuvem',  dur:'30min', mandatory:false },
  ];

  // ── Phishing campaigns catalogue ──────────────────────────
  const CAMPAIGNS = [
    { id:'ph1', name:'Promoção Black Friday — TI',      date:'12/11/2024', type:'Oferta comercial'  },
    { id:'ph2', name:'Atualização Urgente de Senha',     date:'05/12/2024', type:'Credencial'        },
    { id:'ph3', name:'Reunião Emergencial — CEO',        date:'18/12/2024', type:'Urgência executiva'},
    { id:'ph4', name:'Benefícios 2025 — Portal RH',     date:'08/01/2025', type:'Portal interno'   },
    { id:'ph5', name:'Entrega Frustrada — Correios',     date:'22/01/2025', type:'Logística'         },
    { id:'ph6', name:'Alerta de Segurança — Banco',      date:'03/02/2025', type:'Bancário'          },
    { id:'ph7', name:'Convite Exclusivo LinkedIn',       date:'14/02/2025', type:'Rede social'       },
    { id:'ph8', name:'Fatura Pendente — Financeiro',     date:'28/02/2025', type:'Financeiro'        },
  ];

  // ── Password weaknesses ───────────────────────────────────
  const PWD_ISSUES = [
    { icon:'🔁', label:'Reutilização de senha',      detail:'Senha idêntica detectada em 3 sistemas distintos',           sev:'high'  },
    { icon:'🔡', label:'Força insuficiente',          detail:'Senha com 7 caracteres, sem caracteres especiais',           sev:'high'  },
    { icon:'📵', label:'2FA não ativado',             detail:'Autenticação de dois fatores desabilitada no portal',        sev:'med'   },
    { icon:'⏳', label:'Senha expirada',              detail:'Senha não foi alterada há 97 dias (política: 90 dias)',      sev:'med'   },
    { icon:'🔤', label:'Padrão previsível',           detail:'Senha segue padrão Nome+Ano detectado pelo auditor',         sev:'med'   },
    { icon:'📋', label:'Sem rotação de token',        detail:'Token de API corporativo não rotacionado em 180 dias',      sev:'low'   },
    { icon:'🔓', label:'Sessão sem timeout',          detail:'Sessões ativas por mais de 12h sem reautenticação',         sev:'low'   },
  ];

  // ── Access violations ─────────────────────────────────────
  const ACCESS_ISSUES = [
    { icon:'🌙', label:'Login fora do horário',       detail:'Acesso às 02h47 — fora do padrão (08h–20h)',                sys:'Portal Corporativo',  date:'14/02/2025', sev:'high' },
    { icon:'🌍', label:'IP desconhecido',             detail:'Login de IP 179.214.xx.xx (localização: Rússia)',           sys:'Office 365',           date:'10/02/2025', sev:'high' },
    { icon:'🚫', label:'Acesso negado recorrente',    detail:'8 tentativas de acesso ao módulo Financeiro em 24h',        sys:'ERP Financeiro',       date:'07/02/2025', sev:'high' },
    { icon:'📥', label:'Download em massa',           detail:'847 arquivos baixados em 12 minutos via SharePoint',        sys:'SharePoint',           date:'03/02/2025', sev:'med'  },
    { icon:'👤', label:'Dados de outro dept',         detail:'Acesso a registros do departamento Jurídico sem permissão', sys:'Sistema de Gestão',   date:'28/01/2025', sev:'med'  },
    { icon:'⬆️', label:'Escalada de privilégio',      detail:'Solicitação de acesso admin negada — 2ª ocorrência',        sys:'Azure AD',             date:'21/01/2025', sev:'med'  },
    { icon:'🔑', label:'Chave API compartilhada',     detail:'Credencial de API usada em 2 máquinas simultaneamente',    sys:'API Gateway',          date:'15/01/2025', sev:'low'  },
  ];

  // ── Inactivity modules ─────────────────────────────────────
  const MODULES = ['Dashboard', 'Treinamentos', 'Phishing', 'Relatórios', 'Certificados', 'Human Risk', 'Configurações'];

  // ── Cert catalogue ─────────────────────────────────────────
  const CERT_NAMES = [
    'Segurança da Informação Básica',
    'LGPD e Proteção de Dados',
    'Phishing Awareness Level 1',
    'Compliance Corporativo',
    'Acesso Seguro e VPN',
    'Gestão de Incidentes',
  ];

  // ────────────────────────────────────────────────────────────
  if (factorId === 'training') {
    // Admin Local DEMO: usa dados reais do DEMO_STATE
    if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
      const comps = DEMO_STATE.completions;
      const rows = COURSES.map(c => {
        const found = comps.find(x => x.courseId === c.id || x.courseName === c.name);
        if (found) {
          const st = found.passed
            ? `<span style="color:#22c55e;font-weight:700">✅ Aprovado (${found.score}%)</span>`
            : `<span style="color:#ef4444;font-weight:700">❌ Reprovado (${found.score}%)</span>`;
          return `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)">
            <span style="font-size:.8rem;flex:1">${c.name} <span style="color:var(--hrm-muted);font-size:.68rem">${c.dur}</span>${c.mandatory?'<span style="font-size:.6rem;background:rgba(239,68,68,.15);color:#ef4444;padding:1px 5px;border-radius:4px;margin-left:4px">Obrigatório</span>':''}</span>
            ${st}
          </div>`;
        }
        const pend = c.mandatory
          ? `<span style="color:#ef4444;font-weight:700">⏰ Atrasado</span>`
          : `<span style="color:#6b7280">— Pendente</span>`;
        return `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)">
          <span style="font-size:.8rem;flex:1">${c.name} <span style="color:var(--hrm-muted);font-size:.68rem">${c.dur}</span>${c.mandatory?'<span style="font-size:.6rem;background:rgba(239,68,68,.15);color:#ef4444;padding:1px 5px;border-radius:4px;margin-left:4px">Obrigatório</span>':''}</span>
          ${pend}
        </div>`;
      }).join('');
      const delayed = COURSES.filter(c => c.mandatory && !comps.find(x=>x.courseName===c.name && x.passed)).length;
      return `<div style="margin-top:8px">
        <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem">
          <span style="color:#ef4444">⏰ ${delayed} atrasado${delayed!==1?'s':''}</span>
          <span style="color:#22c55e">✅ ${comps.filter(c=>c.passed).length} aprovado${comps.filter(c=>c.passed).length!==1?'s':''}</span>
          <span style="color:#f59e0b">❌ ${comps.filter(c=>!c.passed).length} reprovado${comps.filter(c=>!c.passed).length!==1?'s':''}</span>
        </div>
        ${rows}
      </div>`;
    }
    // Outros usuários: gera lista determinística
    const passed_count = Math.round((u.treinamentos || 0));
    const rows = COURSES.map((c, i) => {
      const seed = _hrmR(uid, i*7+1, 100);
      const done = i < passed_count;
      const failed = !done && seed < (u.score > 60 ? 40 : u.score > 30 ? 20 : 5);
      const score = done ? 60 + _hrmR(uid, i*3, 35) : failed ? 30 + _hrmR(uid, i*5, 30) : 0;
      const st = done
        ? `<span style="color:#22c55e;font-weight:700">✅ Aprovado (${score}%)</span>`
        : failed
          ? `<span style="color:#ef4444;font-weight:700">❌ Reprovado (${score}%)</span>`
          : c.mandatory
            ? `<span style="color:#ef4444;font-weight:700">⏰ Atrasado</span>`
            : `<span style="color:#6b7280">— Pendente</span>`;
      return `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)">
        <span style="font-size:.8rem;flex:1">${c.name} <span style="color:var(--hrm-muted);font-size:.68rem">${c.dur}</span>${c.mandatory?'<span style="font-size:.6rem;background:rgba(239,68,68,.15);color:#ef4444;padding:1px 5px;border-radius:4px;margin-left:4px">Obrigatório</span>':''}</span>
        ${st}
      </div>`;
    }).join('');
    const delayed = COURSES.filter((c,i) => c.mandatory && i >= passed_count).length;
    return `<div style="margin-top:8px">
      <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem">
        <span style="color:#ef4444">⏰ ${delayed} atrasado${delayed!==1?'s':''}</span>
        <span style="color:#22c55e">✅ ${passed_count} concluído${passed_count!==1?'s':''}</span>
      </div>${rows}</div>`;
  }

  if (factorId === 'phishing') {
    // Admin Local DEMO: dados reais
    if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
      const ph = DEMO_STATE.phishing;
      const realRows = CAMPAIGNS.map((c, i) => {
        const real = ph.find(p => p.campaignId === c.id || p.campaignName === c.name);
        const seed = _hrmR(uid, i*11, 100);
        // Simulate result: if real found use it, else derive from risk
        let action = seed < 20 ? 'clicked' : seed < 50 ? 'reported' : 'ignored';
        let st, detail;
        if (real) {
          action = real.action;
          detail = real.date;
        } else { detail = c.date; }
        if (action === 'clicked')  st = `<span style="color:#ef4444;font-weight:700">🎣 Clicou</span>`;
        else if (action === 'reported') st = `<span style="color:#22c55e;font-weight:700">🛡 Reportou</span>`;
        else st = `<span style="color:#6b7280">— Ignorou</span>`;
        return `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)">
          <div style="flex:1">
            <div style="font-size:.80rem">${c.name}</div>
            <div style="font-size:.68rem;color:var(--hrm-muted)">${c.type} • ${detail}</div>
          </div>${st}
        </div>`;
      }).join('');
      const clicked = ph.filter(p=>p.action==='clicked').length;
      const reported = ph.filter(p=>p.action==='reported').length;
      return `<div style="margin-top:8px">
        <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem">
          <span style="color:#ef4444">🎣 ${clicked} clique${clicked!==1?'s':''}</span>
          <span style="color:#22c55e">🛡 ${reported} reporte${reported!==1?'s':''}</span>
          <span style="color:#6b7280">📧 ${CAMPAIGNS.length} campanhas totais</span>
        </div>${realRows}</div>`;
    }
    // Outros usuários
    const totalClicks = u.cliques || 0;
    const totalReported = u.reportou || 0;
    let clicksLeft = totalClicks, reportsLeft = totalReported;
    const rows = CAMPAIGNS.map((c, i) => {
      const seed = _hrmR(uid, i*13+3, 10);
      let action = 'ignored';
      if (clicksLeft > 0 && seed < 3) { action = 'clicked'; clicksLeft--; }
      else if (reportsLeft > 0 && seed < 6) { action = 'reported'; reportsLeft--; }
      const st = action === 'clicked'
        ? `<span style="color:#ef4444;font-weight:700">🎣 Clicou</span>`
        : action === 'reported'
          ? `<span style="color:#22c55e;font-weight:700">🛡 Reportou</span>`
          : `<span style="color:#6b7280">— Ignorou</span>`;
      return `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)">
        <div style="flex:1">
          <div style="font-size:.80rem">${c.name}</div>
          <div style="font-size:.68rem;color:var(--hrm-muted)">${c.type} • ${c.date}</div>
        </div>${st}
      </div>`;
    }).join('');
    return `<div style="margin-top:8px">
      <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem">
        <span style="color:#ef4444">🎣 ${totalClicks} clique${totalClicks!==1?'s':''}</span>
        <span style="color:#22c55e">🛡 ${totalReported} reporte${totalReported!==1?'s':''}</span>
        <span style="color:#6b7280">📧 ${u.campanhas||0} campanhas totais</span>
      </div>${rows}</div>`;
  }

  if (factorId === 'password') {
    const count = u.password > 60 ? 3 + _hrmR(uid, 7, 3) : u.password > 30 ? 1 + _hrmR(uid, 7, 2) : 1;
    const selected = PWD_ISSUES.slice(0, count);
    const SYSTEMS = ['Portal Corporativo','Office 365','ERP','VPN Corporativa','Azure AD','SharePoint'];
    const lastChange = `${10 + _hrmR(uid, 3, 80)} dias atrás`;
    const rows = selected.map((p, i) => {
      const sys = SYSTEMS[_hrmR(uid, i*7+2, SYSTEMS.length)];
      const sColor = p.sev==='high'?'#ef4444':p.sev==='med'?'#f59e0b':'#6b7280';
      const sLabel = p.sev==='high'?'Alto':'Médio';
      if (p.sev==='low') return '';
      return `<div style="padding:10px;border-radius:8px;background:rgba(255,255,255,.03);border-left:3px solid ${sColor};margin-bottom:8px">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span>${p.icon}</span>
          <span style="font-size:.82rem;font-weight:700">${p.label}</span>
          <span style="font-size:.62rem;padding:1px 6px;border-radius:99px;background:${sColor}22;color:${sColor};margin-left:auto">${sLabel}</span>
        </div>
        <div style="font-size:.75rem;color:var(--hrm-text2)">${p.detail}</div>
        <div style="font-size:.68rem;color:var(--hrm-muted);margin-top:3px">Sistema: ${sys}</div>
      </div>`;
    }).join('');
    const okRow = u.password <= 30 ? `<div style="padding:10px;border-radius:8px;background:rgba(34,197,94,.06);border-left:3px solid #22c55e;font-size:.80rem;color:#22c55e">✅ Nenhuma vulnerabilidade crítica de senha detectada</div>` : '';
    return `<div style="margin-top:8px">
      <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem;color:var(--hrm-muted)">
        <span>🔄 Última troca: <b style="color:var(--hrm-text2)">${lastChange}</b></span>
        <span>🔐 Força: <b style="color:${u.password>60?'#ef4444':u.password>30?'#f59e0b':'#22c55e'}">${u.password>60?'Fraca':u.password>30?'Regular':'Forte'}</b></span>
      </div>
      ${rows}${okRow}
    </div>`;
  }

  if (factorId === 'access') {
    const count = u.access > 60 ? 3 + _hrmR(uid, 9, 2) : u.access > 30 ? 1 + _hrmR(uid, 9, 2) : 0;
    const selected = ACCESS_ISSUES.slice(0, count);
    const rows = selected.map(a => {
      const sColor = a.sev==='high'?'#ef4444':a.sev==='med'?'#f59e0b':'#6b7280';
      const sLabel = a.sev==='high'?'Crítico':a.sev==='med'?'Médio':'Baixo';
      return `<div style="padding:10px;border-radius:8px;background:rgba(255,255,255,.03);border-left:3px solid ${sColor};margin-bottom:8px">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span>${a.icon}</span>
          <span style="font-size:.82rem;font-weight:700">${a.label}</span>
          <span style="font-size:.62rem;padding:1px 6px;border-radius:99px;background:${sColor}22;color:${sColor};margin-left:auto">${sLabel}</span>
        </div>
        <div style="font-size:.75rem;color:var(--hrm-text2)">${a.detail}</div>
        <div style="font-size:.68rem;color:var(--hrm-muted);margin-top:3px">📌 ${a.sys} • ${a.date}</div>
      </div>`;
    }).join('');
    const ok = count === 0 ? `<div style="padding:10px;border-radius:8px;background:rgba(34,197,94,.06);border-left:3px solid #22c55e;font-size:.80rem;color:#22c55e">✅ Nenhuma violação de acesso detectada no período</div>` : '';
    const totalViolations = count;
    return `<div style="margin-top:8px">
      <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem;color:var(--hrm-muted)">
        <span>🚨 <b style="color:${u.access>60?'#ef4444':u.access>30?'#f59e0b':'#22c55e'}">${totalViolations} violaç${totalViolations===1?'ão':'ões'}</b> nos últimos 90 dias</span>
      </div>
      ${rows}${ok}
    </div>`;
  }

  if (factorId === 'inactivity') {
    const days = u.lastSeen || 0;
    const lastDate = days === 0 ? 'Hoje' : days === 1 ? 'Ontem' : `há ${days} dias`;
    // Which modules are inactive
    const inactiveModules = MODULES.filter((m, i) => {
      if (days === 0) return false;
      return _hrmR(uid, i*5+1, 10) < (days > 14 ? 7 : days > 7 ? 4 : 2);
    });
    const activeModules = MODULES.filter(m => !inactiveModules.includes(m));
    const modRows = MODULES.map(m => {
      const inactive = inactiveModules.includes(m);
      const modDays = inactive ? days + _hrmR(uid, m.charCodeAt(0), 10) : _hrmR(uid, m.charCodeAt(0), 3);
      const col = inactive ? '#ef4444' : '#22c55e';
      const label = inactive ? `Inativo há ${modDays} dias` : modDays === 0 ? 'Acessado hoje' : `Acessado há ${modDays} dia${modDays!==1?'s':''}`;
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04)">
        <span style="font-size:.80rem">${m}</span>
        <span style="font-size:.72rem;color:${col}">${label}</span>
      </div>`;
    }).join('');
    const streak = days > 0 ? `<div style="padding:10px;border-radius:8px;background:rgba(239,68,68,.06);border-left:3px solid #ef4444;margin-bottom:12px">
      <div style="font-size:.82rem;font-weight:700;color:#ef4444">⚠️ Inatividade prolongada detectada</div>
      <div style="font-size:.75rem;color:var(--hrm-text2);margin-top:3px">Usuário sem acesso à plataforma há <b>${days} dias</b>. Política: máximo 7 dias sem login.</div>
      <div style="font-size:.68rem;color:var(--hrm-muted);margin-top:3px">Último acesso: ${lastDate}</div>
    </div>` : `<div style="padding:10px;border-radius:8px;background:rgba(34,197,94,.06);border-left:3px solid #22c55e;margin-bottom:12px;font-size:.80rem;color:#22c55e">✅ Usuário ativo — último acesso hoje</div>`;
    return `<div style="margin-top:8px">
      <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem;color:var(--hrm-muted)">
        <span>🕐 Último login: <b style="color:var(--hrm-text2)">${lastDate}</b></span>
        <span>📊 ${inactiveModules.length} módulo${inactiveModules.length!==1?'s':''} sem uso recente</span>
      </div>
      ${streak}
      <div style="font-size:.68rem;font-weight:700;color:var(--hrm-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Uso por módulo</div>
      ${modRows}
    </div>`;
  }

  if (factorId === 'certs') {
    // Admin Local DEMO: dados reais
    if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
      const comps = DEMO_STATE.completions.filter(c => c.passed && c.certId);
      const rows = CERT_NAMES.map((name, i) => {
        const real = comps[i];
        if (real) {
          const issued = real.date;
          const expiry = `${real.date.split('/')[0]}/${parseInt(real.date.split('/')[1])+6>12?(parseInt(real.date.split('/')[1])+6-12).toString().padStart(2,'0'):String(parseInt(real.date.split('/')[1])+6).padStart(2,'0')}/${real.date.split('/')[2]}`;
          return `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)">
            <span style="font-size:1.1rem">📜</span>
            <div style="flex:1">
              <div style="font-size:.80rem;font-weight:600">${real.courseName}</div>
              <div style="font-size:.68rem;color:var(--hrm-muted)">Emitido: ${issued} • ID: ${real.certId}</div>
            </div>
            <span style="font-size:.70rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">✅ Válido</span>
          </div>`;
        }
        return `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)">
          <span style="font-size:1.1rem">📋</span>
          <div style="flex:1">
            <div style="font-size:.80rem;font-weight:600">${name}</div>
            <div style="font-size:.68rem;color:var(--hrm-muted)">Treinamento não concluído</div>
          </div>
          <span style="font-size:.70rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">❌ Expirado</span>
        </div>`;
      }).join('');
      const valid = comps.length;
      const expired = CERT_NAMES.length - valid;
      return `<div style="margin-top:8px">
        <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem">
          <span style="color:#22c55e">📜 ${valid} válido${valid!==1?'s':''}</span>
          <span style="color:#ef4444">❌ ${expired} expirado${expired!==1?'s':''}</span>
        </div>${rows}</div>`;
    }
    // Outros usuários
    const certStatus = u.certs || 'expired';
    const validCount = certStatus === 'valid' ? 3 + _hrmR(uid, 5, 3) : certStatus === 'expiring' ? 2 : 0 + _hrmR(uid, 5, 2);
    const rows = CERT_NAMES.map((name, i) => {
      const isValid = i < validCount;
      const isExpiring = !isValid && certStatus === 'expiring' && i === validCount;
      const issueYear = 2023 + _hrmR(uid, i*3, 2);
      const issueMonth = String(1 + _hrmR(uid, i*7, 12)).padStart(2,'0');
      const expiryYear = issueYear + 1;
      const st = isValid
        ? `<div>
            <span style="font-size:.70rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">✅ Válido</span>
            <div style="font-size:.64rem;color:var(--hrm-muted);margin-top:2px">Vence: ${issueMonth}/${expiryYear}</div>
           </div>`
        : isExpiring
          ? `<div>
              <span style="font-size:.70rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">⏳ Vencendo</span>
              <div style="font-size:.64rem;color:var(--hrm-muted);margin-top:2px">Expira em 15 dias</div>
             </div>`
          : `<div>
              <span style="font-size:.70rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">❌ Expirado</span>
              <div style="font-size:.64rem;color:var(--hrm-muted);margin-top:2px">Venceu: ${issueMonth}/${issueYear}</div>
             </div>`;
      return `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)">
        <span style="font-size:1.1rem">${isValid?'📜':'📋'}</span>
        <div style="flex:1">
          <div style="font-size:.80rem;font-weight:600">${name}</div>
          <div style="font-size:.68rem;color:var(--hrm-muted)">Emitido: ${issueMonth}/${issueYear}</div>
        </div>${st}
      </div>`;
    }).join('');
    const expired2 = CERT_NAMES.length - validCount - (certStatus === 'expiring' ? 1 : 0);
    return `<div style="margin-top:8px">
      <div style="display:flex;gap:12px;margin-bottom:10px;font-size:.72rem">
        <span style="color:#22c55e">📜 ${validCount} válido${validCount!==1?'s':''}</span>
        ${certStatus==='expiring'?'<span style="color:#f59e0b">⏳ 1 vencendo</span>':''}
        <span style="color:#ef4444">❌ ${expired2} expirado${expired2!==1?'s':''}</span>
      </div>${rows}</div>`;
  }

  return `<div style="padding:8px;color:var(--hrm-muted);font-size:.80rem">Sem detalhes disponíveis para este factor.</div>`;
}

// ── Drilldown modal: dept × factor ──────────────────────────────
window.hrmMatrizDrilldown = function(deptName, factorId) {
  const factors = HRM_DATA.factors;
  const depts   = HRM_DATA.depts;

  // Determine which users to show
  const allUsers = HRM_DATA.users;
  const users = deptName
    ? allUsers.filter(u => u.dept === deptName)
    : allUsers;
  const dept  = deptName ? depts.find(d => d.name === deptName) : null;
  const factor = factorId ? factors.find(f => f.id === factorId) : null;

  // ── Texts & helpers per factor ────────────────────────────────
  const factorMeta = {
    phishing: {
      how: 'Calculado pela taxa de cliques em simulações de phishing. Cada clique aumenta o risco. Reportar uma campanha reduz o score.',
      userDetail: u => {
        if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
          const c = DEMO_STATE.phishing.filter(p=>p.action==='clicked').length;
          const r = DEMO_STATE.phishing.filter(p=>p.action==='reported').length;
          const t = DEMO_STATE.phishing.length;
          return `${c} clique${c!==1?'s':''} • ${r} reporte${r!==1?'s':''} • ${t} campanha${t!==1?'s':''}`;
        }
        return `${u.cliques||0} clique${(u.cliques||0)!==1?'s':''} em ${u.campanhas||0} campanhas • ${u.reportou||0} reportado${(u.reportou||0)!==1?'s':''}`;
      },
      badge: u => {
        const v = u.phishing;
        if (v > 60) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">⚠️ Vulnerável</span>`;
        if (v > 30) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">⚡ Moderado</span>`;
        return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">✅ Seguro</span>`;
      },
    },
    training: {
      how: 'Calculado com base na % de conclusão de treinamentos obrigatórios. Quanto menor a conclusão, maior o score de risco. Reprovações aumentam o peso.',
      userDetail: u => {
        if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
          const p = DEMO_STATE.completions.filter(c=>c.passed).length;
          const f = DEMO_STATE.completions.filter(c=>!c.passed).length;
          const pct = DEMO_STATE.getCompletionPct();
          return `${pct}% concluído • ${p} aprovado${p!==1?'s':''} • ${f} reprovado${f!==1?'s':''}`;
        }
        const pending = Math.max(0, 10 - (u.treinamentos||0));
        return `${u.treinamentos||0} treinamentos • ${pending} pendente${pending!==1?'s':''} • score ${u.training}/100`;
      },
      badge: u => {
        const v = u.training;
        if (v > 60) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">🔴 Atrasado</span>`;
        if (v > 30) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">🟡 Parcial</span>`;
        return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">🟢 Em dia</span>`;
      },
    },
    password: {
      how: 'Score estimado com base no perfil de risco global do usuário. Reflete a qualidade e reutilização de senhas detectadas na plataforma.',
      userDetail: u => {
        if (u.password > 60) return 'Senhas fracas ou reutilizadas detectadas';
        if (u.password > 30) return 'Algumas senhas abaixo do padrão';
        return 'Higiene de senhas adequada';
      },
      badge: u => {
        const v = u.password;
        if (v > 60) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">🔐 Fraca</span>`;
        if (v > 30) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">🔑 Regular</span>`;
        return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">🔒 Forte</span>`;
      },
    },
    access: {
      how: 'Mede violações de controle de acesso: acessos fora do horário, tentativas negadas, privilégios excessivos.',
      userDetail: u => {
        if (u.access > 60) return `${Math.ceil(u.access/20)} violações de acesso detectadas`;
        if (u.access > 30) return `${Math.ceil(u.access/30)} ocorrência${u.access>45?'s':''} de acesso incomum`;
        return 'Conformidade de acesso: OK';
      },
      badge: u => {
        const v = u.access;
        if (v > 60) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">🚨 Violação</span>`;
        if (v > 30) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">⚡ Atenção</span>`;
        return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">✅ Conforme</span>`;
      },
    },
    inactivity: {
      how: 'Score calculado pelos dias sem acesso à plataforma. Inatividade > 7 dias = risco médio. > 30 dias = risco alto.',
      userDetail: u => {
        const days = u.lastSeen || 0;
        if (days === 0) return 'Ativo hoje';
        if (days === 1) return 'Ativo ontem';
        return `Inativo há ${days} dia${days!==1?'s':''}`;
      },
      badge: u => {
        const days = u.lastSeen || 0;
        if (days > 14) return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">💤 Inativo</span>`;
        if (days > 7)  return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">⚠️ Ausente</span>`;
        return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">🟢 Ativo</span>`;
      },
    },
    certs: {
      how: 'Score baseado no status dos certificados. Certificados válidos = baixo risco (10). Vencendo = médio (42). Expirados = alto (72).',
      userDetail: u => {
        if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
          const n = DEMO_STATE.getCertCount();
          return n > 0 ? `${n} certificado${n!==1?'s':''} válido${n!==1?'s':''}` : 'Nenhum certificado válido';
        }
        const status = { valid:'Certificados válidos e atualizados', expiring:'Certificados próximos do vencimento', expired:'Certificados expirados — renovação necessária' };
        return status[u.certs] || 'Status desconhecido';
      },
      badge: u => {
        const s = typeof u.certs === 'string' ? u.certs : 'expired';
        if (s === 'valid')    return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e">📜 Válido</span>`;
        if (s === 'expiring') return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b">⏳ Vencendo</span>`;
        return `<span style="font-size:.68rem;padding:2px 8px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444">❌ Expirado</span>`;
      },
    },
  };

  // ── Title & score ─────────────────────────────────────────────
  const titleDept   = dept   ? `${dept.icon} ${dept.name}`   : '🏢 Toda a Organização';
  const titleFactor = factor ? `${factor.icon} ${factor.label}` : '📊 Todos os Factores';
  const cellScore   = dept && factor ? dept[factorId] : (dept ? dept.score : HRM_DATA.orgScore);
  const scoreColor  = hc(cellScore);

  // ── Sort users by factor score desc ──────────────────────────
  const sortedUsers = [...users].sort((a,b) => {
    const va = factorId ? (a[factorId] === 'valid' ? 10 : a[factorId] === 'expiring' ? 42 : typeof a[factorId]==='number' ? a[factorId] : 72) : a.score;
    const vb = factorId ? (b[factorId] === 'valid' ? 10 : b[factorId] === 'expiring' ? 42 : typeof b[factorId]==='number' ? b[factorId] : 72) : b.score;
    return vb - va;
  });

  // ── Factor rows per factor (for "all factors" view) ──────────
  const allFactorsRow = u => factors.map(f => {
    const val = f.id === 'certs'
      ? (u.certs === 'valid' ? 10 : u.certs === 'expiring' ? 42 : 72)
      : (typeof u[f.id] === 'number' ? u[f.id] : 50);
    const col = hc(val);
    return `<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04)">
      <span style="font-size:.72rem;color:var(--hrm-text2)">${f.icon} ${f.label}</span>
      <span style="font-size:.80rem;font-weight:800;color:${col}">${val}</span>
    </div>`;
  }).join('');

  // ── User cards ────────────────────────────────────────────────
  const meta = factorId ? factorMeta[factorId] : null;
  const userCards = sortedUsers.map(u => {
    const userScore = factorId
      ? (u.certs === 'valid' && factorId==='certs' ? 10 : u.certs === 'expiring' && factorId==='certs' ? 42 : typeof u[factorId]==='number' ? u[factorId] : 72)
      : u.score;
    const col = hc(userScore);
    const badge = meta ? meta.badge(u) : '';
    const initials = (u.avatar || u.name.split(' ').map(w=>w[0]).join('').slice(0,2)).toUpperCase();
    const bg = u.isDemo
      ? 'linear-gradient(135deg,#00d4ff,#8b5cf6)'
      : `#${(((u.id||1)*2654435761)&0xFFFFFF).toString(16).padStart(6,'0').slice(0,2)}3${(u.id||1)*37%9}`;
    const demoTag = u.isDemo ? `<span style="font-size:.58rem;background:linear-gradient(90deg,#00d4ff22,#8b5cf622);border:1px solid #00d4ff44;color:#00d4ff;padding:1px 6px;border-radius:99px;margin-left:4px">DEMO</span>` : '';

    // Rich factor detail block
    const richDetail = factorId
      ? hrmFactorDetail(u, factorId)
      : `<div style="margin-top:8px;padding:8px;background:rgba(255,255,255,.03);border-radius:8px">${allFactorsRow(u)}</div>`;

    return `
    <div style="border-radius:12px;background:rgba(255,255,255,.03);margin-bottom:10px;border:1px solid rgba(255,255,255,.07);overflow:hidden">
      <!-- User header row -->
      <div style="display:flex;align-items:center;gap:12px;padding:12px 14px;cursor:pointer;background:rgba(255,255,255,.02)"
        onclick="const b=this.nextElementSibling;b.style.display=b.style.display==='none'?'block':'none'">
        <div style="width:40px;height:40px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;font-size:.82rem;font-weight:800;color:#fff;flex-shrink:0">${initials}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:.88rem;font-weight:700">${u.name}</span>${demoTag}${badge}
          </div>
          <div style="font-size:.70rem;color:var(--hrm-muted)">${u.email || ''} • ${u.dept}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:1.2rem;font-weight:900;color:${col}">${userScore}</div>
          <div style="font-size:.58rem;color:var(--hrm-muted)">/100</div>
        </div>
        <div style="color:var(--hrm-muted);font-size:.80rem;margin-left:4px">▼</div>
      </div>
      <!-- Detail block (collapsed by default for non-demo, expanded for demo) -->
      <div style="padding:0 14px 14px;display:${u.isDemo?'block':'none'}">
        <div style="border-top:1px solid rgba(255,255,255,.06);padding-top:10px">
          ${richDetail}
        </div>
      </div>
    </div>`;
  }).join('');

  // ── How is it calculated ──────────────────────────────────────
  const howSection = factor ? `
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px;margin-bottom:16px">
      <div style="font-size:.68rem;font-weight:800;color:var(--hrm-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px">⚙️ Como é calculado</div>
      <div style="font-size:.80rem;color:var(--hrm-text2);line-height:1.5">${factorMeta[factorId].how}</div>
      <div style="margin-top:10px;display:flex;gap:12px;font-size:.72rem">
        <span style="color:#22c55e">● ≤30 Baixo</span>
        <span style="color:#f59e0b">● 31–60 Médio</span>
        <span style="color:#ef4444">● >60 Alto</span>
      </div>
    </div>` : '';

  // ── All factors overview (when no factor selected) ────────────
  const deptFactorGrid = dept && !factorId ? `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
      ${factors.map(f => {
        const val = dept[f.id] || 0;
        const col = hc(val);
        return `<div onclick="hrmMatrizDrilldown('${dept.name}','${f.id}')"
          style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px;cursor:pointer;transition:border-color .2s"
          onmouseenter="this.style.borderColor='${col}66'" onmouseleave="this.style.borderColor='rgba(255,255,255,.07)'">
          <div style="font-size:1.1rem;margin-bottom:4px">${f.icon}</div>
          <div style="font-size:.68rem;color:var(--hrm-text2);margin-bottom:6px">${f.label}</div>
          <div style="font-size:1.4rem;font-weight:900;color:${col}">${val}</div>
        </div>`;
      }).join('')}
    </div>` : '';

  hrmShowModal(`
    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
      <div>
        <div style="font-size:1.1rem;font-weight:800;margin-bottom:2px">${titleDept} × ${titleFactor}</div>
        <div style="font-size:.72rem;color:var(--hrm-muted)">${sortedUsers.length} usuário${sortedUsers.length!==1?'s':''} • Score: <span style="color:${scoreColor};font-weight:700">${cellScore}/100</span></div>
      </div>
      <div style="text-align:center;min-width:70px">
        ${hrmRing(cellScore, 72, 7)}
      </div>
    </div>

    ${howSection}
    ${deptFactorGrid}

    <!-- User list -->
    <div style="font-size:.68rem;font-weight:800;color:var(--hrm-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px">
      👤 Usuários — ordenados por risco (maior → menor)
    </div>
    ${userCards || '<div style="text-align:center;color:var(--hrm-muted);padding:20px">Nenhum usuário encontrado.</div>'}

    <!-- Actions -->
    <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
      <button class="hrm-btn hrm-btn-primary" style="flex:1" onclick="showToast&&showToast('Plano de ação criado!','success');hrmCloseModal()">📋 Criar Plano de Ação</button>
      <button class="hrm-btn" style="flex:1" onclick="showToast&&showToast('Notificação enviada ao gestor!','success');hrmCloseModal()">🔔 Notificar Gestor</button>
      <button class="hrm-btn" style="flex:1" onclick="hrmCloseModal()">✕ Fechar</button>
    </div>
  `, 'hrm-modal hrm-modal-xl');
};

function initHRMMatrixChart() {
  if (!window.Chart) return;
  hrmDestroyChart('matrix');
  const ctx = document.getElementById('hrm-matrix-chart');
  if (!ctx) return;
  /* canvas sized by .hrm-canvas-wrap CSS */
  const factors = HRM_DATA.factors;
  const avgs = factors.map(f => Math.round(HRM_DATA.depts.reduce((s,d)=>s+(d[f.id]||0),0)/HRM_DATA.depts.length));
  HRM.charts.matrix = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: factors.map(f => f.icon + ' ' + f.label.split(' ').slice(0,2).join(' ')),
      datasets: [{
        data: avgs,
        backgroundColor: avgs.map(v => v<=30?'rgba(34,197,94,0.65)':v<=60?'rgba(245,158,11,0.70)':'rgba(239,68,68,0.70)'),
        borderRadius: 6, borderWidth: 0,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 700 },
      transitions: { resize: { animation: { duration: 0 } } },
      plugins: { legend: { display: false }, tooltip: { animation: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#94a3b8', font: { size: 11 } } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280' }, min: 0, max: 100 }
      }
    }
  });
  requestAnimationFrame(() => { if (HRM.charts.matrix) HRM.charts.matrix.resize(); });
}

// ══════════════════════════════════════════════════════════════
//  PLANOS DE ACÇÃO
// ══════════════════════════════════════════════════════════════
function renderHRMPlanos() {
  const active    = HRM_DATA.plans.filter(p => p.status !== 'Concluído');
  const completed = HRM_DATA.plans.filter(p => p.status === 'Concluído');
  return `
  <div class="hrm-sh">
    <div class="hrm-sh-title">📋 Planos de Remediação</div>
    <button class="hrm-btn hrm-btn-primary hrm-btn-sm" onclick="hrmCreatePlan(null)">+ Novo Plano</button>
  </div>

  <!-- Stats strip -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
    ${[
      ['📋','Total',HRM_DATA.plans.length,'var(--hrm-teal)'],
      ['🔄','Em andamento',HRM_DATA.plans.filter(p=>p.status==='Em andamento').length,'var(--hrm-med)'],
      ['⏳','Pendentes',HRM_DATA.plans.filter(p=>p.status==='Pendente').length,'var(--hrm-high)'],
      ['✅','Concluídos',completed.length,'var(--hrm-low)'],
    ].map(([icon,label,val,color])=>`
      <div class="hrm-kpi">
        <div style="font-size:1.5rem;margin-bottom:8px">${icon}</div>
        <div class="hrm-kpi-val" style="color:${color};font-size:1.6rem">${val}</div>
        <div class="hrm-kpi-label">${label}</div>
      </div>`).join('')}
  </div>

  <!-- Active plans -->
  <div class="hrm-card" style="margin-bottom:16px">
    <div class="hrm-card-title">🔄 Planos Activos (${active.length})</div>
    ${active.map(p => hrmPlanCard(p)).join('')}
    ${!active.length ? `<div style="text-align:center;padding:20px;color:var(--hrm-muted)">Nenhum plano activo.</div>` : ''}
  </div>

  <!-- Completed -->
  ${completed.length ? `
  <div class="hrm-card">
    <div class="hrm-card-title">✅ Concluídos (${completed.length})</div>
    ${completed.map(p => hrmPlanCard(p)).join('')}
  </div>` : ''}`;
}

function hrmPlanCard(p) {
  const priorColor = { Alta:'var(--hrm-high)', Média:'var(--hrm-med)', Baixa:'var(--hrm-low)' }[p.priority];
  return `
  <div class="hrm-plan-card">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px">
      <div>
        <div style="font-weight:700;font-size:0.90rem;margin-bottom:4px">${p.type} — ${p.user}</div>
        <div style="font-size:0.75rem;color:var(--hrm-text2)">${p.dept} · Criado: ${p.created} · Prazo: ${p.due}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <span class="hrm-badge ${p.status==='Concluído'?'hrm-low':p.status==='Em andamento'?'hrm-med':'hrm-high'}">${p.status}</span>
        <span class="hrm-badge" style="background:${priorColor}18;color:${priorColor}">${p.priority}</span>
      </div>
    </div>
    <div style="height:5px;background:rgba(255,255,255,0.06);border-radius:3px;margin-bottom:8px">
      <div style="width:${p.progress}%;height:100%;background:${p.progress===100?'var(--hrm-low)':'var(--hrm-teal)'};border-radius:3px;transition:width 0.8s ease"></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${p.actions.map(a=>`<span style="font-size:0.68rem;padding:2px 8px;border-radius:6px;background:rgba(255,255,255,0.05);color:var(--hrm-text2)">📌 ${a}</span>`).join('')}
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <span style="font-size:0.75rem;color:var(--hrm-text2)">${p.progress}% concluído</span>
        ${p.status!=='Concluído'?`<button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="hrmUpdatePlan(${p.id})">Actualizar</button>`:``}
      </div>
    </div>
  </div>`;
}

window.hrmCreatePlan = function(userId) {
  const user = userId ? HRM_DATA.users.find(u=>u.id===userId) : null;
  hrmShowModal(`
    <div class="hrm-modal-hdr">
      <span style="font-size:1.1rem;font-weight:800">📋 Novo Plano de Remediação</span>
      <button class="hrm-modal-close" onclick="hrmCloseModal()">✕</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div>
        <label style="font-size:0.70rem;color:var(--hrm-text2);text-transform:uppercase;letter-spacing:0.07em;display:block;margin-bottom:5px">Usuário</label>
        <select class="hrm-select" id="hrm-np-user" style="width:100%">
          ${HRM_DATA.users.map(u=>`<option value="${u.id}"${u.id===userId?' selected':''}>${u.name} (${u.dept})</option>`).join('')}
        </select>
      </div>
      <div>
        <label style="font-size:0.70rem;color:var(--hrm-text2);text-transform:uppercase;letter-spacing:0.07em;display:block;margin-bottom:5px">Tipo de Intervenção</label>
        <select class="hrm-select" id="hrm-np-type" style="width:100%">
          <option>Treinamento Obrigatório</option>
          <option>Reforço Phishing</option>
          <option>Renovação Certificados</option>
          <option>Plano de Reativação</option>
          <option>Melhoria Contínua</option>
          <option>Conscientização Executiva</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.70rem;color:var(--hrm-text2);text-transform:uppercase;letter-spacing:0.07em;display:block;margin-bottom:5px">Prioridade</label>
        <select class="hrm-select" id="hrm-np-priority" style="width:100%">
          <option>Alta</option><option>Média</option><option>Baixa</option>
        </select>
      </div>
      <div>
        <label style="font-size:0.70rem;color:var(--hrm-text2);text-transform:uppercase;letter-spacing:0.07em;display:block;margin-bottom:5px">Prazo</label>
        <input class="hrm-input" type="date" id="hrm-np-due" style="width:100%">
      </div>
    </div>
    <div style="margin-top:14px">
      <label style="font-size:0.70rem;color:var(--hrm-text2);text-transform:uppercase;letter-spacing:0.07em;display:block;margin-bottom:5px">Acções Planeadas</label>
      <div id="hrm-actions-list" style="display:flex;flex-direction:column;gap:7px;margin-bottom:8px">
        <input class="hrm-input" placeholder="Ex: Phishing Awareness Module" style="width:100%">
      </div>
      <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="hrmAddActionField()">+ Adicionar acção</button>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="hrm-btn hrm-btn-ghost" style="flex:1" onclick="hrmCloseModal()">Cancelar</button>
      <button class="hrm-btn hrm-btn-primary" style="flex:1" onclick="hrmSavePlan()">Criar Plano</button>
    </div>
  `);
};

window.hrmAddActionField = function() {
  const list = document.getElementById('hrm-actions-list');
  if (!list) return;
  const inp = document.createElement('input');
  inp.className = 'hrm-input'; inp.placeholder = 'Nova acção…'; inp.style.width = '100%';
  list.appendChild(inp);
};

window.hrmSavePlan = function() {
  const uid = parseInt(document.getElementById('hrm-np-user')?.value);
  const user = HRM_DATA.users.find(u=>u.id===uid);
  const type = document.getElementById('hrm-np-type')?.value;
  const priority = document.getElementById('hrm-np-priority')?.value;
  const due = document.getElementById('hrm-np-due')?.value || '2025-04-30';
  const actions = [...document.querySelectorAll('#hrm-actions-list .hrm-input')]
    .map(i=>i.value).filter(v=>v.trim());
  HRM_DATA.plans.push({
    id: Date.now(), user: user?.name||'', dept: user?.dept||'',
    type, status: 'Pendente', priority, created: new Date().toISOString().split('T')[0],
    due, progress: 0, actions: actions.length ? actions : ['Treinamento geral'],
  });
  hrmCloseModal();
  hrmTab('planos');
  showToast && showToast('Plano criado com sucesso!','success');
};

window.hrmUpdatePlan = function(planId) {
  const p = HRM_DATA.plans.find(x=>x.id===planId);
  if (!p) return;
  const newProg = Math.min(100, p.progress + 20);
  p.progress = newProg;
  if (newProg === 100) p.status = 'Concluído';
  else if (p.status === 'Pendente') p.status = 'Em andamento';
  hrmTab('planos');
  showToast && showToast(`Plano actualizado — ${newProg}% concluído`,'success');
};

// ══════════════════════════════════════════════════════════════
//  ALERTAS
// ══════════════════════════════════════════════════════════════
function renderHRMAlertas() {
  const byCrit = HRM_DATA.alerts.filter(a=>a.type==='crit');
  const byWarn = HRM_DATA.alerts.filter(a=>a.type==='warn');
  return `
  <div class="hrm-sh">
    <div class="hrm-sh-title">🔔 Alertas de Risco</div>
    <div style="display:flex;gap:8px">
      <button class="hrm-btn hrm-btn-danger hrm-btn-sm" onclick="showToast&&showToast('Gestores notificados!','success')">Notificar Gestores (${byCrit.length})</button>
      <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="showToast&&showToast('Alertas marcados como lidos','info')">Marcar todos como lidos</button>
    </div>
  </div>

  <!-- Summary strip -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
    ${[
      ['🔴','Críticos',HRM_DATA.alerts.filter(a=>a.type==='crit').length,'var(--hrm-high)'],
      ['🟡','Alertas',HRM_DATA.alerts.filter(a=>a.type==='warn').length,'var(--hrm-med)'],
      ['🔵','Informativos',HRM_DATA.alerts.filter(a=>a.type==='info').length,'var(--hrm-blue)'],
      ['🟢','Positivos',HRM_DATA.alerts.filter(a=>a.type==='ok').length,'var(--hrm-low)'],
    ].map(([icon,label,val,color])=>`
      <div class="hrm-kpi">
        <div style="font-size:1.5rem;margin-bottom:8px">${icon}</div>
        <div class="hrm-kpi-val" style="color:${color};font-size:1.6rem">${val}</div>
        <div class="hrm-kpi-label">${label}</div>
      </div>`).join('')}
  </div>

  <div class="hrm-card">
    <div class="hrm-card-title">Feed de Alertas — Mais Recentes</div>
    ${HRM_DATA.alerts.map(a=>`
      <div class="hrm-alert hrm-alert-${a.type}" style="cursor:${a.user?'pointer':'default'}" ${a.user?`onclick="hrmOpenProfile(${a.user})"`:''}>
        <span style="font-size:1.2rem;flex-shrink:0">${a.icon}</span>
        <div style="flex:1">
          <div style="font-size:0.84rem;line-height:1.5">${a.msg}</div>
          <div style="font-size:0.70rem;margin-top:4px;opacity:0.6">${a.time}${a.user?' · Clique para ver perfil':''}</div>
        </div>
        <div style="flex-shrink:0;display:flex;gap:5px">
          ${a.user?`<button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="event.stopPropagation();hrmCreatePlan(${a.user})">📋</button>`:''}
          <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="event.stopPropagation();showToast&&showToast('Alerta dispensado','info')">✓</button>
        </div>
      </div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  RELATÓRIO EXECUTIVO
// ══════════════════════════════════════════════════════════════
function renderHRMRelatorio() {
  const top5 = [...HRM_DATA.users].sort((a,b)=>b.score-a.score).slice(0,5);
  const improved = [...HRM_DATA.users].filter(u=>u.trend==='up').length;
  return `
  <div class="hrm-sh">
    <div class="hrm-sh-title">📄 Relatório Executivo — Human Risk Management</div>
    <div style="display:flex;gap:8px">
      <button class="hrm-btn hrm-btn-primary hrm-btn-sm" onclick="showToast&&showToast('Gerando PDF…','info');setTimeout(()=>showToast&&showToast('PDF gerado com sucesso!','success'),2000)">📥 Exportar PDF</button>
      <button class="hrm-btn hrm-btn-ghost hrm-btn-sm" onclick="showToast&&showToast('Enviando por e-mail…','info');setTimeout(()=>showToast&&showToast('Enviado!','success'),1500)">📧 Enviar por E-mail</button>
    </div>
  </div>

  <!-- Executive summary -->
  <div class="hrm-card" style="margin-bottom:16px;border:1px solid rgba(0,212,255,0.15)">
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
      ${hrmRing(HRM_DATA.orgScore, 90, 8)}
      <div>
        <div style="font-size:1.2rem;font-weight:800;margin-bottom:4px">Sumário Executivo — ${new Date().toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}</div>
        <div style="font-size:0.84rem;color:var(--hrm-text2)">Score Organizacional: <strong style="color:${hc(HRM_DATA.orgScore)}">${HRM_DATA.orgScore}/100</strong> (${HRM_DATA.orgLabel})</div>
        <div style="font-size:0.82rem;color:var(--hrm-low);margin-top:4px">↓ Melhoria de ${Math.abs(HRM_DATA.orgTrend)} pontos vs. mês anterior</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
      ${[
        ['Total de Usuários Monitorados',HRM_DATA.users.length,'var(--hrm-teal)'],
        ['Usuários em Melhoria',improved,'var(--hrm-low)'],
        ['Planos de Remediação Activos',HRM_DATA.plans.filter(p=>p.status!=='Concluído').length,'var(--hrm-blue)'],
      ].map(([label,val,color])=>`
        <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px;text-align:center">
          <div style="font-size:1.5rem;font-weight:800;color:${color}">${val}</div>
          <div style="font-size:0.68rem;color:var(--hrm-text2);margin-top:3px">${label}</div>
        </div>`).join('')}
    </div>
  </div>

  <!-- Charts -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
    <div class="hrm-card">
      <div class="hrm-card-title">📈 Evolução do Score (12 meses)</div>
      <div class="hrm-canvas-wrap" style="height:180px"><canvas id="hrm-rep-line"></canvas></div>
    </div>
    <div class="hrm-card">
      <div class="hrm-card-title">🏢 Score por Departamento</div>
      <div class="hrm-canvas-wrap" style="height:180px"><canvas id="hrm-rep-bar"></canvas></div>
    </div>
  </div>

  <!-- Department table -->
  <div class="hrm-card" style="margin-bottom:16px">
    <div class="hrm-card-title">🏢 Análise por Departamento</div>
    <table class="hrm-table">
      <thead><tr>
        <th>Departamento</th><th>Membros</th><th>Score Médio</th><th>Maior Risco</th><th>Planos Activos</th><th>Status</th>
      </tr></thead>
      <tbody>
        ${HRM_DATA.depts.sort((a,b)=>b.score-a.score).map(d=>{
          const plans = HRM_DATA.plans.filter(p=>p.dept===d.name&&p.status!=='Concluído').length;
          const worstFactor = HRM_DATA.factors.reduce((prev,f)=>d[f.id]>d[prev.id]?f:prev);
          return `<tr>
            <td><span>${d.icon}</span> <strong>${d.name}</strong></td>
            <td>${d.members}</td>
            <td>${hrmBar(d.score)}</td>
            <td style="font-size:0.78rem;color:${hc(d[worstFactor.id])}">${worstFactor.icon} ${worstFactor.label.split(' ').slice(0,2).join(' ')} (${d[worstFactor.id]})</td>
            <td style="font-size:0.82rem">${plans} ${plans>0?'<span style="color:var(--hrm-med)">⚠</span>':''}</td>
            <td>${hbadge(d.score)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <!-- Top risk users -->
  <div class="hrm-card">
    <div class="hrm-card-title">🔴 Top 5 Usuários de Maior Risco — Atenção Imediata</div>
    ${top5.map((u,i)=>`
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.03);cursor:pointer" onclick="hrmOpenProfile(${u.id})">
        <div style="width:28px;height:28px;border-radius:50%;background:rgba(239,68,68,0.15);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:800;color:var(--hrm-high);flex-shrink:0">${i+1}</div>
        <div class="hrm-avatar" style="background:${avatarBg(u.name)}">${u.avatar}</div>
        <div style="flex:1">
          <div style="font-weight:600;font-size:0.85rem">${u.name}</div>
          <div style="font-size:0.72rem;color:var(--hrm-text2)">${u.dept} · ${u.email}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:1.1rem;font-weight:800;color:${hc(u.score)}">${u.score}</div>
          ${hbadge(u.score)}
        </div>
      </div>`).join('')}
  </div>`;
}

function initHRMReportChart() {
  if (!window.Chart) return;
  ['repLine','repBar'].forEach(k => hrmDestroyChart(k));

  const lineCtx = document.getElementById('hrm-rep-line');
  if (lineCtx) {
    /* canvas sized by .hrm-canvas-wrap CSS */
    HRM.charts.repLine = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: HRM_DATA.history.map(h => h.month),
        datasets: [{ label: 'Risk Score', data: HRM_DATA.history.map(h => h.score), borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.10)', tension: 0.4, fill: true, pointRadius: 4, pointHoverRadius: 4, borderWidth: 2 }]
      },
      options: { responsive: true, maintainAspectRatio: false, animation: { duration: 700 }, transitions: { resize: { animation: { duration: 0 } } }, plugins: { legend: { display: false }, tooltip: { animation: false } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280', font: { size: 10 } } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280' }, min: 0, max: 100 } } }
    });
    requestAnimationFrame(() => { if (HRM.charts.repLine) HRM.charts.repLine.resize(); });
  }

  const barCtx = document.getElementById('hrm-rep-bar');
  if (barCtx) {
    /* canvas sized by .hrm-canvas-wrap CSS */
    const depts = [...HRM_DATA.depts].sort((a,b) => b.score - a.score);
    HRM.charts.repBar = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: depts.map(d => d.icon + ' ' + d.name),
        datasets: [{ data: depts.map(d => d.score), backgroundColor: depts.map(d => d.score<=30?'rgba(34,197,94,0.65)':d.score<=60?'rgba(245,158,11,0.70)':'rgba(239,68,68,0.70)'), borderRadius: 5, borderWidth: 0 }]
      },
      options: { responsive: true, maintainAspectRatio: false, animation: { duration: 700 }, transitions: { resize: { animation: { duration: 0 } } }, plugins: { legend: { display: false }, tooltip: { animation: false } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#94a3b8', font: { size: 10 } } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280' }, min: 0, max: 100 } } }
    });
    requestAnimationFrame(() => { if (HRM.charts.repBar) HRM.charts.repBar.resize(); });
  }
}

// ── Modal Helpers ─────────────────────────────────────────────
function hrmShowModal(html, cls='hrm-modal') {
  hrmCloseModal();
  const ov = document.createElement('div');
  ov.className = 'hrm-overlay'; ov.id = 'hrm-overlay';
  ov.addEventListener('click', e => { if (e.target===ov) hrmCloseModal(); });
  const m = document.createElement('div'); m.className = cls; m.innerHTML = html;
  ov.appendChild(m); document.body.appendChild(ov);
}
window.hrmCloseModal = function() { const el=document.getElementById('hrm-overlay'); if(el) el.remove(); };
document.addEventListener('keydown', e => { if(e.key==='Escape') hrmCloseModal(); });
