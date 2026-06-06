// ══════════════════════════════════════════════════════════════
//  🏢 DEPARTAMENTOS & TRILHAS — Complete Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectDeptCSS() {
  if (document.getElementById('dept-css')) return;
  const s = document.createElement('style');
  s.id = 'dept-css';
  s.textContent = `
    :root {
      --dp-blue:   #00d4ff;
      --dp-green:  #22c55e;
      --dp-red:    #ef4444;
      --dp-amber:  #f59e0b;
      --dp-purple: #8b5cf6;
      --dp-teal:   #14b8a6;
      --dp-card:   #12121a;
      --dp-border: rgba(255,255,255,0.07);
    }

    /* ── Tabs ── */
    .dp-tabs { display:flex; gap:4px; background:var(--dp-card); border:1px solid var(--dp-border); border-radius:14px; padding:5px; margin-bottom:20px; overflow-x:auto; }
    .dp-tab  { display:flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; font-size:0.83rem; font-weight:600; cursor:pointer; color:#94a3b8; background:transparent; border:none; white-space:nowrap; transition:all 0.2s; font-family:inherit; }
    .dp-tab:hover  { color:#f1f5f9; background:rgba(255,255,255,0.04); }
    .dp-tab.active { color:#000; background:var(--dp-blue); box-shadow:0 4px 16px rgba(0,212,255,0.28); }

    /* ── KPI ── */
    .dp-kpi-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(170px,1fr)); gap:14px; margin-bottom:20px; }
    .dp-kpi { background:var(--dp-card); border:1px solid var(--dp-border); border-radius:16px; padding:18px; transition:all 0.22s; }
    .dp-kpi:hover { border-color:rgba(255,255,255,0.14); transform:translateY(-2px); }
    .dp-kpi-icon { font-size:1.5rem; margin-bottom:10px; }
    .dp-kpi-val  { font-size:1.9rem; font-weight:800; letter-spacing:-0.04em; line-height:1; }
    .dp-kpi-lbl  { font-size:0.70rem; color:#6b7280; margin-top:5px; text-transform:uppercase; letter-spacing:0.08em; }
    .dp-kpi-sub  { font-size:0.72rem; margin-top:5px; }

    /* ── Department Card ── */
    .dp-dept-card {
      background:var(--dp-card); border:1px solid var(--dp-border);
      border-radius:16px; padding:20px; cursor:pointer;
      transition:all 0.22s;
    }
    .dp-dept-card:hover { border-color:rgba(0,212,255,0.30); transform:translateY(-3px); box-shadow:0 12px 36px rgba(0,0,0,0.4); }

    /* ── Trail Card ── */
    .dp-trail-card {
      background:rgba(255,255,255,0.02); border:1px solid var(--dp-border);
      border-radius:14px; padding:18px; cursor:pointer; transition:all 0.2s;
    }
    .dp-trail-card:hover { border-color:rgba(255,255,255,0.14); background:rgba(255,255,255,0.04); }

    /* ── Progress ── */
    .dp-prog { height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; margin-top:6px; }
    .dp-prog-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    /* ── Buttons ── */
    .dp-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .dp-btn-primary { background:var(--dp-blue); color:#000; box-shadow:0 4px 14px rgba(0,212,255,0.28); }
    .dp-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .dp-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .dp-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#f1f5f9; }
    .dp-btn-sm { padding:6px 13px; font-size:0.76rem; border-radius:8px; }
    .dp-btn-icon { padding:7px; border-radius:7px; font-size:0.85rem; }

    /* ── Input ── */
    .dp-input, .dp-select, .dp-textarea {
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10);
      border-radius:9px; padding:10px 13px; color:#f1f5f9;
      font-size:0.85rem; font-family:inherit; outline:none;
      transition:border-color 0.2s; width:100%;
    }
    .dp-input:focus, .dp-select:focus, .dp-textarea:focus { border-color:var(--dp-blue); box-shadow:0 0 0 3px rgba(0,212,255,0.10); }
    .dp-input::placeholder { color:#6b7280; }
    .dp-select option { background:#1a1a26; }

    /* ── Label ── */
    .dp-label { display:block; font-size:0.70rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px; }

    /* ── Card ── */
    .dp-card { background:var(--dp-card); border:1px solid var(--dp-border); border-radius:16px; padding:22px; }

    /* ── Modal ── */
    .dp-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.80); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .dp-modal   { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:32px; width:100%; max-width:680px; max-height:90vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,0.7); animation:dpIn 0.25s ease; }
    .dp-modal-lg{ max-width:960px; }
    @keyframes dpIn { from{transform:scale(0.95);opacity:0} to{transform:scale(1);opacity:1} }
    .dp-modal-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
    .dp-modal-close { background:none; border:none; color:#6b7280; font-size:1.3rem; cursor:pointer; }
    .dp-modal-close:hover { color:#f1f5f9; }

    /* ── User row ── */
    .dp-user-row { display:flex; align-items:center; gap:12px; padding:9px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
    .dp-user-row:last-child { border-bottom:none; }
    .dp-avatar { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.65rem; font-weight:700; color:#fff; flex-shrink:0; }

    /* ── Risk badge ── */
    .dp-risk-low  { background:rgba(34,197,94,0.12);  color:#22c55e; }
    .dp-risk-med  { background:rgba(245,158,11,0.12); color:#f59e0b; }
    .dp-risk-high { background:rgba(239,68,68,0.12);  color:#ef4444; }
    .dp-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:99px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }

    /* ── Stat bar ── */
    .dp-stat-bar { height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .dp-stat-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    /* ── Table ── */
    .dp-table { width:100%; border-collapse:collapse; font-size:0.84rem; }
    .dp-table th { text-align:left; padding:10px 14px; font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#6b7280; border-bottom:1px solid var(--dp-border); }
    .dp-table td { padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.03); vertical-align:middle; }
    .dp-table tr:last-child td { border-bottom:none; }
    .dp-table tr:hover td { background:rgba(255,255,255,0.02); cursor:pointer; }

    /* ── Module chip (trail detail) ── */
    .dp-module-chip { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); margin-bottom:8px; }
    .dp-module-chip:hover { background:rgba(255,255,255,0.06); }
  `;
  document.head.appendChild(s);
}
injectDeptCSS();

// ── Data ─────────────────────────────────────────────────────
const DEPT_DATA = {
  departments: [
    { id:'rh',  name:'RH',         icon:'👥', users:46,  completion:96, avg:9.1, certs:48,  mandatory:100, risk:'low',  trend:[70,78,85,90,93,96], manager:'Mariana Teles',   country:'🇧🇷', city:'São Paulo',   color:'#22c55e', created:'2022-01-01' },
    { id:'ti',  name:'TI',         icon:'💻', users:68,  completion:88, avg:8.7, certs:64,  mandatory:95,  risk:'low',  trend:[60,68,74,80,84,88], manager:'Rafael Neto',    country:'🇧🇷', city:'São Paulo',   color:'#00d4ff', created:'2022-01-01' },
    { id:'jur', name:'Jurídico',   icon:'⚖️', users:22,  completion:94, avg:9.3, certs:22,  mandatory:100, risk:'low',  trend:[72,78,84,89,91,94], manager:'Juliana Rocha',  country:'🇧🇷', city:'Rio de Janeiro',color:'#8b5cf6', created:'2022-03-15' },
    { id:'fin', name:'Financeiro', icon:'💰', users:38,  completion:81, avg:8.2, certs:38,  mandatory:88,  risk:'med',  trend:[55,60,66,72,77,81], manager:'Beatriz Alves',  country:'🇧🇷', city:'São Paulo',   color:'#f59e0b', created:'2022-01-01' },
    { id:'com', name:'Comercial',  icon:'📞', users:55,  completion:72, avg:7.8, certs:55,  mandatory:80,  risk:'med',  trend:[45,52,58,62,68,72], manager:'Marcos Oliveira',country:'🇧🇷', city:'Belo Horizonte',color:'#f97316', created:'2022-06-01' },
    { id:'ops', name:'Operações',  icon:'⚙️', users:31,  completion:61, avg:7.1, certs:31,  mandatory:70,  risk:'high', trend:[30,38,44,50,56,61], manager:'Rodrigo Lima',   country:'🇧🇷', city:'Curitiba',    color:'#ef4444', created:'2023-01-15' },
  ],

  trails: [
    { id:'cyber', name:'Cybersecurity Essentials', icon:'🛡', color:'#00d4ff', mandatory:true, modules:8, users:280, completion:84, target:'Todos os Usuários',
      description:'Fundamentos de cibersegurança para todos os colaboradores. Phishing, senhas, MFA, trabalho remoto e resposta a incidentes.',
      modules_list:[
        { n:1, name:'Fundamentos de Cybersecurity', duration:'4h', completion:98, status:'done' },
        { n:2, name:'Phishing & Engenharia Social', duration:'8h', completion:94, status:'done' },
        { n:3, name:'Senhas Seguras e MFA',         duration:'4h', completion:92, status:'done' },
        { n:4, name:'Home Office Seguro',            duration:'6h', completion:88, status:'done' },
        { n:5, name:'Cloud Security Awareness',     duration:'8h', completion:78, status:'active' },
        { n:6, name:'Resposta a Incidentes',         duration:'6h', completion:65, status:'active' },
        { n:7, name:'Uso Seguro de IA Generativa',  duration:'4h', completion:42, status:'active' },
        { n:8, name:'CEO Fraud Awareness',           duration:'4h', completion:21, status:'active' },
      ]
    },
    { id:'compliance', name:'Compliance & Ética', icon:'📋', color:'#22c55e', mandatory:true, modules:12, users:340, completion:91, target:'Todos os Usuários',
      description:'Trilha completa de compliance corporativo, ética empresarial, anticorrupção e canal de denúncias.',
      modules_list:[
        { n:1,  name:'Código de Ética Empresarial',   duration:'8h',  completion:99, status:'done' },
        { n:2,  name:'Anticorrupção e Antissuborno',   duration:'10h', completion:97, status:'done' },
        { n:3,  name:'Canal de Denúncias',             duration:'4h',  completion:96, status:'done' },
        { n:4,  name:'Conflito de Interesses',         duration:'6h',  completion:94, status:'done' },
        { n:5,  name:'AML — Lavagem de Dinheiro',      duration:'8h',  completion:91, status:'done' },
        { n:6,  name:'Assédio Moral e Sexual',         duration:'6h',  completion:89, status:'done' },
        { n:7,  name:'Diversidade e Inclusão',         duration:'4h',  completion:88, status:'done' },
        { n:8,  name:'Gestão de Riscos (ISO 31000)',   duration:'12h', completion:85, status:'done' },
        { n:9,  name:'ESG Essentials',                 duration:'8h',  completion:78, status:'active' },
        { n:10, name:'Sustentabilidade Corporativa',   duration:'6h',  completion:70, status:'active' },
        { n:11, name:'Direitos Humanos e Negócios',    duration:'4h',  completion:58, status:'active' },
        { n:12, name:'Governança Corporativa',         duration:'8h',  completion:40, status:'active' },
      ]
    },
    { id:'privacy', name:'Privacidade & LGPD/GDPR', icon:'🔒', color:'#8b5cf6', mandatory:true, modules:6, users:195, completion:78, target:'RH · Jurídico · TI',
      description:'Proteção de dados pessoais, conformidade com LGPD e GDPR, direitos dos titulares e boas práticas de privacidade.',
      modules_list:[
        { n:1, name:'LGPD na Prática',              duration:'8h',  completion:95, status:'done' },
        { n:2, name:'GDPR Fundamentos',             duration:'8h',  completion:90, status:'done' },
        { n:3, name:'Proteção de Dados Sensíveis',  duration:'6h',  completion:82, status:'done' },
        { n:4, name:'Direitos dos Titulares',       duration:'4h',  completion:76, status:'active' },
        { n:5, name:'DPO — Encarregado de Dados',   duration:'12h', completion:61, status:'active' },
        { n:6, name:'Transferência Internacional',  duration:'6h',  completion:35, status:'active' },
      ]
    },
    { id:'leader', name:'Liderança Ética', icon:'🎯', color:'#14b8a6', mandatory:false, modules:5, users:42, completion:65, target:'Lideranças · Diretoria',
      description:'Desenvolvimento de líderes éticos, tomada de decisão responsável e gestão de equipes com integridade.',
      modules_list:[
        { n:1, name:'Accountability na Liderança',  duration:'6h',  completion:88, status:'done' },
        { n:2, name:'Tomada de Decisão Ética',      duration:'6h',  completion:80, status:'done' },
        { n:3, name:'Liderança sob Pressão',        duration:'4h',  completion:72, status:'active' },
        { n:4, name:'Comunicação Transparente',     duration:'4h',  completion:48, status:'active' },
        { n:5, name:'Gestão de Conflitos Éticos',   duration:'6h',  completion:25, status:'active' },
      ]
    },
  ],

  // Users per department
  users_by_dept: {
    rh:  [{name:'Mariana Teles',  email:'m.teles@empresa.com',  role:'Gerente RH',    score:23,  certs:9},{name:'Ana Lima',     email:'ana.lima@empresa.com', role:'Analista RH',    score:45,  certs:6},{name:'Paula Souza', email:'paula.s@empresa.com',  role:'Recrutamento',   score:31,  certs:7}],
    ti:  [{name:'Rafael Neto',   email:'rafael.n@empresa.com', role:'DevOps',         score:12,  certs:14},{name:'Lucas Ferreira',email:'l.ferreira@empresa.com',role:'Analista TI',  score:9,   certs:12},{name:'Bruno Santos',email:'b.santos@empresa.com', role:'Sysadmin',       score:18,  certs:10}],
    jur: [{name:'Juliana Rocha', email:'j.rocha@empresa.com',  role:'Advogada',       score:18,  certs:10},{name:'Pedro Costa', email:'p.costa@empresa.com',  role:'Jurídico',       score:28,  certs:8}],
    fin: [{name:'Beatriz Alves', email:'b.alves@empresa.com',  role:'Controller',     score:82,  certs:4},{name:'Ana Lima',    email:'ana.lima@empresa.com', role:'Analista Fin.',   score:78,  certs:5},{name:'Bruno Santos',email:'b.santos@empresa.com','role':'Contabilidade',  score:52,  certs:6}],
    com: [{name:'Marcos Oliveira',email:'m.oliveira@empresa.com',role:'Ger. Vendas',  score:67,  certs:5},{name:'Carlos Souza',email:'carlos.s@empresa.com', role:'Executivo',       score:55,  certs:4},{name:'Camila Santos',email:'c.santos@empresa.com',role:'Marketing',      score:38,  certs:6}],
    ops: [{name:'Rodrigo Lima',  email:'r.lima@empresa.com',   role:'Supervisor',     score:85,  certs:2},{name:'Carla Mendes',email:'c.mendes@empresa.com', role:'Operações',       score:79,  certs:2}],
  },
};

// ── State ─────────────────────────────────────────────────────
let DP = {
  tab: 'departments',
  activeTrail: null,
};

// ── Helpers ───────────────────────────────────────────────────
const dpRiskColor = { low:'#22c55e', med:'#f59e0b', high:'#ef4444' };
const dpRiskLabel = { low:'Baixo', med:'Médio', high:'Alto' };
const dpRiskClass = { low:'dp-risk-low', med:'dp-risk-med', high:'dp-risk-high' };
const dpAvgColor  = (v) => v >= 9 ? '#22c55e' : v >= 7.5 ? '#00d4ff' : '#f59e0b';
const dpCompColor = (v) => v >= 90 ? '#22c55e' : v >= 70 ? '#00d4ff' : v >= 50 ? '#f59e0b' : '#ef4444';

function dpSparkline(data, color, w=240, h=40) {
  const max=Math.max(...data), min=Math.min(...data), range=max-min||1;
  const xs=data.map((_,i)=>(i/(data.length-1))*w);
  const ys=data.map(v=>h-((v-min)/range)*(h-4)-2);
  const path=xs.map((x,i)=>`${i===0?'M':'L'}${x},${ys[i]}`).join(' ');
  const area=`${path} L${w},${h} L0,${h} Z`;
  const gid='dpg'+Math.random().toString(36).slice(2,6);
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.25"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
    <path d="${area}" fill="url(#${gid})"/>
    <path d="${path}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

function dpAvatar(name, size=32) {
  const colors=['#3b82f6','#8b5cf6','#ec4899','#ef4444','#f59e0b','#22c55e','#06b6d4','#f97316'];
  const bg=colors[(name.charCodeAt(0)+name.charCodeAt(1))%colors.length];
  const initials=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return `<div class="dp-avatar" style="width:${size}px;height:${size}px;background:${bg};font-size:${size*0.28}px">${initials}</div>`;
}

// ── Rebuild departments from active tenant users ───────────────
function rebuildDeptsFromTenant() {
  if (typeof getActiveTenantUsers !== 'function') return;
  const users = getActiveTenantUsers();
  if (!users || !users.length) return;

  // Group users by dept
  const deptMap = {};
  users.forEach(u => {
    const key = u.dept || 'Outros';
    if (!deptMap[key]) deptMap[key] = [];
    deptMap[key].push(u);
  });

  const iconMap = { 'Diretoria':'🏛️','TI':'💻','RH':'👥','Financeiro':'💰','Jurídico':'⚖️','Operações':'⚙️','Comercial':'📞','Marketing':'📣','Segurança':'🛡','DevOps':'🔧' };
  const colorMap = { 'Diretoria':'#8b5cf6','TI':'#00d4ff','RH':'#22c55e','Financeiro':'#f59e0b','Jurídico':'#a78bfa','Operações':'#06b6d4','Comercial':'#f97316','Marketing':'#ec4899' };

  // Keep existing dept metadata (manager, city, etc.) for known depts
  const existing = {};
  DEPT_DATA.departments.forEach(d => { existing[d.name] = d; });

  DEPT_DATA.departments = Object.keys(deptMap).map(deptName => {
    const dus = deptMap[deptName];
    const ex  = existing[deptName] || {};
    const completion = Math.round(dus.reduce((s,u) => s + (u.completion||70), 0) / dus.length);
    const highRisk = dus.filter(u => u.risk === 'high').length;
    const risk = highRisk / dus.length > 0.4 ? 'high' : highRisk / dus.length > 0.15 ? 'med' : 'low';
    const certs = dus.filter(u => u.certs === 'valid').length;
    return {
      id:   ex.id   || 'dept_' + deptName.toLowerCase().replace(/\s/g,'_'),
      name: deptName,
      icon: ex.icon || iconMap[deptName] || '🏢',
      color: ex.color || colorMap[deptName] || '#6b7280',
      users: dus.length,
      completion,
      avg: Math.round(completion / 10 * 10) / 10,
      certs,
      mandatory: ex.mandatory || 80,
      risk,
      trend: ex.trend || [50, 55, 60, 65, 68, completion],
      manager: ex.manager || '—',
      country: ex.country || '🇧🇷',
      city:    ex.city    || '—',
      created: ex.created || new Date().toISOString().split('T')[0],
    };
  });
  DEPT_DATA.departments.sort((a,b) => b.completion - a.completion);
}

// ── Main Render ───────────────────────────────────────────────
window.renderPage_departments = function() {
  injectDeptCSS();
  rebuildDeptsFromTenant();
  const totalUsers = DEPT_DATA.departments.reduce((s,d)=>s+d.users,0);
  const avgComp    = Math.round(DEPT_DATA.departments.reduce((s,d)=>s+d.completion,0)/DEPT_DATA.departments.length);
  const atRisk     = DEPT_DATA.departments.filter(d=>d.risk==='high').length;
  const totalCerts = DEPT_DATA.departments.reduce((s,d)=>s+d.certs,0);
  const totalTrails= DEPT_DATA.trails.length;

  return `
<div id="dept-module">
  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em">🏢 Departamentos & Trilhas</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px">Estrutura organizacional, performance e trilhas de aprendizagem</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="dp-btn dp-btn-ghost dp-btn-sm" onclick="dpOpenNewTrail()">+ Nova Trilha</button>
      <button class="dp-btn dp-btn-primary" onclick="dpOpenNewDept()">+ Novo Departamento</button>
    </div>
  </div>

  <!-- KPIs -->
  <div class="dp-kpi-grid">
    <div class="dp-kpi">
      <div class="dp-kpi-icon">🏢</div>
      <div class="dp-kpi-val" style="color:var(--dp-blue)">${DEPT_DATA.departments.length}</div>
      <div class="dp-kpi-lbl">Departamentos</div>
      <div class="dp-kpi-sub" style="color:#6b7280">${totalUsers} usuários total</div>
    </div>
    <div class="dp-kpi">
      <div class="dp-kpi-icon">📊</div>
      <div class="dp-kpi-val" style="color:${dpCompColor(avgComp)}">${avgComp}%</div>
      <div class="dp-kpi-lbl">Conclusão Média</div>
      <div class="dp-kpi-sub" style="color:#6b7280">todos os dept.</div>
    </div>
    <div class="dp-kpi">
      <div class="dp-kpi-icon">🏆</div>
      <div class="dp-kpi-val" style="color:#8b5cf6">${totalCerts}</div>
      <div class="dp-kpi-lbl">Certificados</div>
      <div class="dp-kpi-sub" style="color:#6b7280">emitidos no total</div>
    </div>
    <div class="dp-kpi">
      <div class="dp-kpi-icon">⚠️</div>
      <div class="dp-kpi-val" style="color:${atRisk>0?'#ef4444':'#22c55e'}">${atRisk}</div>
      <div class="dp-kpi-lbl">Alto Risco</div>
      <div class="dp-kpi-sub" style="color:${atRisk>0?'#ef4444':'#22c55e'}">${atRisk===0?'Todos OK':'Atenção imediata'}</div>
    </div>
    <div class="dp-kpi">
      <div class="dp-kpi-icon">🛤</div>
      <div class="dp-kpi-val" style="color:#14b8a6">${totalTrails}</div>
      <div class="dp-kpi-lbl">Trilhas Ativas</div>
      <div class="dp-kpi-sub" style="color:#6b7280">${DEPT_DATA.trails.filter(t=>t.mandatory).length} obrigatórias</div>
    </div>
    <div class="dp-kpi">
      <div class="dp-kpi-icon">👥</div>
      <div class="dp-kpi-val" style="color:#f59e0b">${totalUsers}</div>
      <div class="dp-kpi-lbl">Total Usuários</div>
      <div class="dp-kpi-sub" style="color:#6b7280">ativos na plataforma</div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="dp-tabs">
    <button class="dp-tab${DP.tab==='departments'?' active':''}" data-dtab="departments" onclick="dpTab('departments')">🏢 Departamentos</button>
    <button class="dp-tab${DP.tab==='trails'?     ' active':''}" data-dtab="trails"     onclick="dpTab('trails')">🛤 Trilhas</button>
    <button class="dp-tab${DP.tab==='matrix'?     ' active':''}" data-dtab="matrix"     onclick="dpTab('matrix')">📊 Matriz de Performance</button>
    <button class="dp-tab${DP.tab==='comparison'? ' active':''}" data-dtab="comparison" onclick="dpTab('comparison')">⚖ Comparativo</button>
  </div>

  <div id="dp-body">${dpRenderTab(DP.tab)}</div>
  <div id="dp-modals"></div>
</div>`;
};

window.initPage_departments = window.initPage_trails = function() {
  setTimeout(() => {
    document.querySelectorAll('.dp-prog-fill, .dp-stat-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
  }, 100);
};

window.renderPage_trails = function() { DP.tab = 'trails'; return window.renderPage_departments(); };

window.dpTab = function(tab) {
  DP.tab = tab;
  document.querySelectorAll('.dp-tab').forEach(b => b.classList.toggle('active', b.dataset.dtab === tab));
  const body = document.getElementById('dp-body');
  if (!body) return;
  body.style.opacity = '0';
  body.innerHTML = dpRenderTab(tab);
  requestAnimationFrame(() => { body.style.transition='opacity 0.22s'; body.style.opacity='1'; });
  setTimeout(() => {
    document.querySelectorAll('.dp-prog-fill, .dp-stat-fill').forEach(el => {
      const w=el.style.width; el.style.width='0';
      requestAnimationFrame(()=>{ el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
  }, 80);
};

function dpRenderTab(tab) {
  if (tab==='departments') return dpRenderDepartments();
  if (tab==='trails')      return dpRenderTrails();
  if (tab==='matrix')      return dpRenderMatrix();
  if (tab==='comparison')  return dpRenderComparison();
  return dpRenderDepartments();
}

// ══════════════════════════════════════════════════════════════
//  DEPARTMENTS TAB
// ══════════════════════════════════════════════════════════════
function dpRenderDepartments() {
  return `
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:16px">
    ${DEPT_DATA.departments.map(d=>`
    <div class="dp-dept-card" onclick="dpOpenDeptDetail('${d.id}')">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <div style="width:46px;height:46px;border-radius:13px;background:${d.color}18;border:1px solid ${d.color}30;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0">${d.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:1rem;font-weight:800">${d.name}</div>
          <div style="font-size:0.72rem;color:#6b7280">${d.users} usuários · ${d.manager}</div>
        </div>
        <span class="dp-badge ${dpRiskClass[d.risk]}">${dpRiskLabel[d.risk]}</span>
      </div>

      <!-- 3 metrics -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div style="text-align:center;padding:9px;background:rgba(255,255,255,0.02);border-radius:9px">
          <div style="font-size:1.1rem;font-weight:900;color:${dpCompColor(d.completion)}">${d.completion}%</div>
          <div style="font-size:0.60rem;color:#6b7280;margin-top:2px">Conclusão</div>
        </div>
        <div style="text-align:center;padding:9px;background:rgba(255,255,255,0.02);border-radius:9px">
          <div style="font-size:1.1rem;font-weight:900;color:${dpAvgColor(d.avg)}">${d.avg}</div>
          <div style="font-size:0.60rem;color:#6b7280;margin-top:2px">Nota Média</div>
        </div>
        <div style="text-align:center;padding:9px;background:rgba(255,255,255,0.02);border-radius:9px">
          <div style="font-size:1.1rem;font-weight:900;color:#8b5cf6">${d.certs}</div>
          <div style="font-size:0.60rem;color:#6b7280;margin-top:2px">Certificados</div>
        </div>
      </div>

      <!-- Progress bar -->
      <div style="display:flex;justify-content:space-between;font-size:0.68rem;color:#6b7280;margin-bottom:4px">
        <span>Obrigatórios: ${d.mandatory}%</span>
        <span>Conclusão</span>
      </div>
      <div class="dp-prog"><div class="dp-prog-fill" style="width:${d.completion}%;background:${d.color}"></div></div>

      <!-- Sparkline -->
      <div style="margin-top:12px">${dpSparkline(d.trend, d.color, 260, 38)}</div>
    </div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  DEPARTMENT DETAIL MODAL
// ══════════════════════════════════════════════════════════════
window.dpOpenDeptDetail = function(id) {
  const d = DEPT_DATA.departments.find(x=>x.id===id);
  if (!d) return;
  const users = DEPT_DATA.users_by_dept[id] || [];

  dpShowModal(`
    <div class="dp-modal-hdr">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:44px;height:44px;border-radius:12px;background:${d.color}18;border:1px solid ${d.color}30;display:flex;align-items:center;justify-content:center;font-size:1.4rem">${d.icon}</div>
        <div>
          <div style="font-size:1.1rem;font-weight:800">${d.name}</div>
          <div style="font-size:0.72rem;color:#6b7280">${d.users} usuários · ${d.country} ${d.city}</div>
        </div>
      </div>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>

    <!-- Stats row -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      ${[
        ['Conclusão', d.completion+'%', dpCompColor(d.completion)],
        ['Nota Média', d.avg, dpAvgColor(d.avg)],
        ['Certificados', d.certs, '#8b5cf6'],
        ['Risk Score', dpRiskLabel[d.risk], dpRiskColor[d.risk]],
      ].map(([lbl,val,col])=>`
        <div style="text-align:center;padding:12px;background:rgba(255,255,255,0.03);border-radius:10px">
          <div style="font-size:1.2rem;font-weight:900;color:${col}">${val}</div>
          <div style="font-size:0.62rem;color:#6b7280;margin-top:3px">${lbl}</div>
        </div>`).join('')}
    </div>

    <!-- Progress -->
    <div style="margin-bottom:18px">
      <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:#6b7280;margin-bottom:5px">
        <span>Progresso geral (obrigatórios: ${d.mandatory}%)</span>
        <span style="color:${d.color};font-weight:700">${d.completion}%</span>
      </div>
      <div class="dp-prog" style="height:8px"><div class="dp-prog-fill" style="width:${d.completion}%;background:${d.color}"></div></div>
    </div>

    <!-- Evolução -->
    <div style="margin-bottom:18px">
      <div style="font-size:0.72rem;color:#6b7280;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.07em">Evolução (últimos 6 meses)</div>
      ${dpSparkline(d.trend, d.color, '100%', 52)}
    </div>

    <!-- Users -->
    <div style="font-size:0.72rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:10px">
      👤 Usuários (${users.length} de ${d.users} exibidos)
    </div>
    ${users.map(u=>`
      <div class="dp-user-row">
        ${dpAvatar(u.name)}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:0.85rem">${u.name}</div>
          <div style="font-size:0.70rem;color:#6b7280">${u.role} · ${u.email}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:0.78rem;font-weight:800;color:${u.score<=30?'#22c55e':u.score<=60?'#f59e0b':'#ef4444'}">${u.score}</div>
          <div style="font-size:0.62rem;color:#6b7280">risk score</div>
        </div>
        <div style="font-size:0.75rem;color:#8b5cf6;font-weight:700;min-width:20px;text-align:right">${u.certs}🏆</div>
      </div>`).join('')}
    ${d.users>users.length?`<div style="text-align:center;padding:10px;font-size:0.78rem;color:#6b7280">+ ${d.users-users.length} outros usuários</div>`:''}

    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Fechar</button>
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal();dpOpenEditDept('${d.id}')">✏️ Editar</button>
      <button class="dp-btn dp-btn-primary" style="flex:1" onclick="dpCloseModal();navTo('users',null)">👥 Ver Usuários</button>
    </div>
  `, 'dp-modal dp-modal-lg');
};

// ══════════════════════════════════════════════════════════════
//  TRAILS TAB
// ══════════════════════════════════════════════════════════════
function dpRenderTrails() {
  return `
  <!-- AI Banner -->
  <div style="background:linear-gradient(135deg,rgba(139,92,246,0.12),rgba(0,212,255,0.08));border:1px solid rgba(139,92,246,0.28);border-radius:16px;padding:18px 22px;margin-bottom:20px;display:flex;align-items:center;gap:18px;">
    <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#8b5cf6,#00d4ff);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;box-shadow:0 8px 24px rgba(139,92,246,0.35);">🤖</div>
    <div style="flex:1;min-width:0;">
      <div style="font-weight:800;font-size:0.95rem;margin-bottom:3px;">Gerador de Trilha por IA</div>
      <div style="font-size:0.78rem;color:#94a3b8;line-height:1.5;">A IA analisa automaticamente o perfil de Human Risk da organização e gera uma trilha de treinamento personalizada, com justificativas, prioridades e cronograma.</div>
    </div>
    <button class="dp-btn dp-btn-primary" style="flex-shrink:0;background:linear-gradient(135deg,#8b5cf6,#6366f1);box-shadow:0 4px 16px rgba(139,92,246,0.35);" onclick="dpAiGenerateTrail()">✨ Analisar e Gerar Trilha</button>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px;margin-bottom:20px">
    ${DEPT_DATA.trails.map(t=>`
    <div class="dp-trail-card" onclick="dpOpenTrailDetail('${t.id}')">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:42px;height:42px;border-radius:12px;background:${t.color}18;border:1px solid ${t.color}30;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">${t.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:0.90rem">${t.name}</div>
          <div style="font-size:0.70rem;color:#6b7280">${t.modules} módulos · ${t.users} usuários</div>
        </div>
        ${t.mandatory?'<span class="dp-badge" style="background:rgba(239,68,68,0.12);color:#ef4444;font-size:0.60rem">OBRIG.</span>':''}
      </div>
      <div style="font-size:0.78rem;color:#6b7280;margin-bottom:10px;line-height:1.5">${t.description.substring(0,80)}...</div>
      <div>
        <div style="display:flex;justify-content:space-between;font-size:0.70rem;margin-bottom:4px">
          <span style="color:#6b7280">${t.target}</span>
          <span style="font-weight:800;color:${t.color}">${t.completion}%</span>
        </div>
        <div class="dp-prog"><div class="dp-prog-fill" style="width:${t.completion}%;background:${t.color}"></div></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:0.72rem;color:#6b7280">
        <span>📚 ${t.modules} módulos</span>
        <span>👥 ${t.users} usuários</span>
        <span style="color:${t.color};font-weight:600">Ver detalhes →</span>
      </div>
    </div>`).join('')}
  </div>`;
}

// ── Trail Detail Modal ────────────────────────────────────────
window.dpOpenTrailDetail = function(id) {
  const t = DEPT_DATA.trails.find(x=>x.id===id);
  if (!t) return;
  const done = t.modules_list.filter(m=>m.status==='done').length;

  dpShowModal(`
    <div class="dp-modal-hdr">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:44px;height:44px;border-radius:12px;background:${t.color}18;border:1px solid ${t.color}30;display:flex;align-items:center;justify-content:center;font-size:1.4rem">${t.icon}</div>
        <div>
          <div style="font-size:1.05rem;font-weight:800">${t.name}</div>
          <div style="font-size:0.72rem;color:#6b7280">${t.modules} módulos · ${t.users} usuários · ${t.target}</div>
        </div>
      </div>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>

    <p style="font-size:0.84rem;color:#94a3b8;margin-bottom:20px;line-height:1.65">${t.description}</p>

    <!-- Progress overview -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      ${[
        ['Conclusão', t.completion+'%', t.color],
        ['Módulos', t.modules, '#00d4ff'],
        ['Completos', done+'/'+t.modules, '#22c55e'],
        ['Usuários', t.users, '#8b5cf6'],
      ].map(([lbl,val,col])=>`
        <div style="text-align:center;padding:12px;background:rgba(255,255,255,0.03);border-radius:10px">
          <div style="font-size:1.2rem;font-weight:900;color:${col}">${val}</div>
          <div style="font-size:0.62rem;color:#6b7280;margin-top:3px">${lbl}</div>
        </div>`).join('')}
    </div>

    <!-- Overall progress -->
    <div style="margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:#6b7280;margin-bottom:5px">
        <span>Progresso geral</span>
        <span style="color:${t.color};font-weight:700">${t.completion}%</span>
      </div>
      <div class="dp-prog" style="height:7px"><div class="dp-prog-fill" style="width:${t.completion}%;background:${t.color}"></div></div>
    </div>

    <!-- Modules list -->
    <div style="font-size:0.72rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:12px">📚 Módulos da Trilha</div>
    ${t.modules_list.map(m=>`
      <div class="dp-module-chip" style="cursor:pointer" onclick="showToast&&showToast('Módulo ${m.n}: ${m.name}','info')">
        <div style="width:26px;height:26px;border-radius:50%;background:${m.status==='done'?'rgba(34,197,94,0.15)':'rgba(255,255,255,0.06)'};border:1px solid ${m.status==='done'?'rgba(34,197,94,0.30)':'rgba(255,255,255,0.10)'};display:flex;align-items:center;justify-content:center;font-size:0.70rem;font-weight:700;flex-shrink:0;color:${m.status==='done'?'#22c55e':'#6b7280'}">${m.status==='done'?'✓':m.n}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:0.84rem;font-weight:600">${m.name}</div>
          <div style="font-size:0.68rem;color:#6b7280;margin-top:2px">⏱ ${m.duration}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;min-width:60px">
          <div style="font-size:0.80rem;font-weight:800;color:${dpCompColor(m.completion)}">${m.completion}%</div>
          <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;margin-top:4px;width:60px">
            <div style="height:100%;width:${m.completion}%;background:${dpCompColor(m.completion)};border-radius:2px"></div>
          </div>
        </div>
      </div>`).join('')}

    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Fechar</button>
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal();dpOpenEditTrail('${t.id}')">✏️ Editar</button>
      <button class="dp-btn dp-btn-primary" style="flex:1" onclick="dpCloseModal();navTo('assignments',document.querySelector('[data-page=assignments]'));setTimeout(()=>asOpenNewPrefilled&&asOpenNewPrefilled('${t.name}','${t.target}',${t.mandatory}),220)">📋 Atribuir</button>
      <button class="dp-btn" style="flex:1;background:rgba(239,68,68,.12);color:#ef4444;border:1px solid rgba(239,68,68,.25)" onclick="dpConfirmDeleteTrail('${t.id}','${t.name.replace(/'/g,"\'")}')">🗑 Excluir</button>
    </div>
  `, 'dp-modal dp-modal-lg');
};

// ══════════════════════════════════════════════════════════════
//  MATRIX TAB
// ══════════════════════════════════════════════════════════════
function dpRenderMatrix() {
  return `
  <div style="overflow-x:auto">
    <table class="dp-table" style="min-width:700px">
      <thead><tr>
        <th>Departamento</th>
        <th onclick="dpMatrixSort('completion')">Conclusão ↕</th>
        <th onclick="dpMatrixSort('avg')">Nota Média ↕</th>
        <th onclick="dpMatrixSort('certs')">Certificados ↕</th>
        <th>Progresso</th>
        <th>Tendência</th>
        <th>Risk</th>
        <th>Ações</th>
      </tr></thead>
      <tbody id="dp-matrix-tbody">
        ${[...DEPT_DATA.departments].sort((a,b)=>b.completion-a.completion).map(d=>`
        <tr onclick="dpOpenDeptDetail('${d.id}')">
          <td>
            <div style="display:flex;align-items:center;gap:10px">
              <span style="font-size:1.1rem">${d.icon}</span>
              <div>
                <div style="font-weight:700">${d.name}</div>
                <div style="font-size:0.70rem;color:#6b7280">${d.users} usuários</div>
              </div>
            </div>
          </td>
          <td>
            <div style="font-size:1.1rem;font-weight:900;color:${dpCompColor(d.completion)}">${d.completion}%</div>
          </td>
          <td>
            <div style="font-size:1rem;font-weight:800;color:${dpAvgColor(d.avg)}">${d.avg}</div>
          </td>
          <td>
            <span style="font-size:0.88rem;font-weight:700;color:#8b5cf6">🏆 ${d.certs}</span>
          </td>
          <td style="min-width:140px">
            <div class="dp-stat-bar" style="height:6px">
              <div class="dp-stat-fill" style="width:${d.completion}%;background:${d.color}"></div>
            </div>
            <div style="font-size:0.62rem;color:#6b7280;margin-top:3px">${d.mandatory}% obrigatórios</div>
          </td>
          <td style="min-width:80px">${dpSparkline(d.trend, d.color, 80, 28)}</td>
          <td>
            <span class="dp-badge ${dpRiskClass[d.risk]}">${dpRiskLabel[d.risk]}</span>
          </td>
          <td onclick="event.stopPropagation()">
            <div style="display:flex;gap:4px">
              <button class="dp-btn dp-btn-ghost dp-btn-icon" onclick="dpOpenDeptDetail('${d.id}')" title="Detalhes">👁</button>
              <button class="dp-btn dp-btn-ghost dp-btn-icon" onclick="dpOpenEditDept('${d.id}')" title="Editar">✏️</button>
            </div>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

let _dpMatrixSortCol = 'completion';
let _dpMatrixSortDir = -1; // -1 = desc, 1 = asc
window.dpMatrixSort = function(col) {
  if (_dpMatrixSortCol === col) { _dpMatrixSortDir *= -1; }
  else { _dpMatrixSortCol = col; _dpMatrixSortDir = -1; }
  const tbody = document.getElementById('dp-matrix-tbody');
  if (!tbody) { dpTab('matrix'); return; }
  const sorted = [...DEPT_DATA.departments].sort((a,b) => _dpMatrixSortDir * ((a[col]||0) - (b[col]||0)));
  tbody.innerHTML = sorted.map(d => `
    <tr onclick="dpOpenDeptDetail('${d.id}')">
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.1rem">${d.icon}</span>
          <div>
            <div style="font-weight:700">${d.name}</div>
            <div style="font-size:0.70rem;color:#6b7280">${d.users} usuários</div>
          </div>
        </div>
      </td>
      <td><div style="font-size:1.1rem;font-weight:900;color:${dpCompColor(d.completion)}">${d.completion}%</div></td>
      <td><div style="font-size:1rem;font-weight:800;color:${dpAvgColor(d.avg)}">${d.avg}</div></td>
      <td><span style="font-size:0.88rem;font-weight:700;color:#8b5cf6">🏆 ${d.certs}</span></td>
      <td style="min-width:140px">
        <div class="dp-stat-bar" style="height:6px">
          <div class="dp-stat-fill" style="width:${d.completion}%;background:${d.color}"></div>
        </div>
        <div style="font-size:0.62rem;color:#6b7280;margin-top:3px">${d.mandatory}% obrigatórios</div>
      </td>
      <td style="min-width:80px">${dpSparkline(d.trend, d.color, 80, 28)}</td>
      <td><span class="dp-badge ${dpRiskClass[d.risk]}">${dpRiskLabel[d.risk]}</span></td>
      <td onclick="event.stopPropagation()">
        <div style="display:flex;gap:4px">
          <button class="dp-btn dp-btn-ghost dp-btn-icon" onclick="dpOpenDeptDetail('${d.id}')" title="Detalhes">👁</button>
          <button class="dp-btn dp-btn-ghost dp-btn-icon" onclick="dpOpenEditDept('${d.id}')" title="Editar">✏️</button>
        </div>
      </td>
    </tr>`).join('');
  showToast&&showToast(`Ordenado por ${col} ${_dpMatrixSortDir < 0 ? '↓ decrescente' : '↑ crescente'}`, 'info');
};

// ══════════════════════════════════════════════════════════════
//  COMPARISON TAB
// ══════════════════════════════════════════════════════════════
function dpRenderComparison() {
  const sorted = [...DEPT_DATA.departments].sort((a,b)=>b.completion-a.completion);
  const best   = sorted[0];
  const worst  = sorted[sorted.length-1];

  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
    <!-- Top performer -->
    <div class="dp-card" style="border-color:rgba(34,197,94,0.25)">
      <div style="font-size:0.72rem;font-weight:700;color:#22c55e;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">🥇 Melhor Desempenho</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <span style="font-size:1.6rem">${best.icon}</span>
        <div>
          <div style="font-size:1.1rem;font-weight:800">${best.name}</div>
          <div style="font-size:0.72rem;color:#6b7280">${best.users} usuários</div>
        </div>
        <div style="margin-left:auto;font-size:1.6rem;font-weight:900;color:#22c55e">${best.completion}%</div>
      </div>
      ${dpSparkline(best.trend, '#22c55e', 280, 44)}
    </div>
    <!-- Needs attention -->
    <div class="dp-card" style="border-color:rgba(239,68,68,0.25)">
      <div style="font-size:0.72rem;font-weight:700;color:#ef4444;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">⚠️ Necessita Atenção</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <span style="font-size:1.6rem">${worst.icon}</span>
        <div>
          <div style="font-size:1.1rem;font-weight:800">${worst.name}</div>
          <div style="font-size:0.72rem;color:#6b7280">${worst.users} usuários</div>
        </div>
        <div style="margin-left:auto;font-size:1.6rem;font-weight:900;color:#ef4444">${worst.completion}%</div>
      </div>
      ${dpSparkline(worst.trend, '#ef4444', 280, 44)}
    </div>
  </div>

  <!-- Full ranking -->
  <div class="dp-card">
    <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:16px">📊 Ranking Completo</div>
    ${sorted.map((d,i)=>`
      <div style="display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.04)" onclick="dpOpenDeptDetail('${d.id}')" style="cursor:pointer">
        <div style="width:28px;height:28px;border-radius:50%;background:${i===0?'rgba(34,197,94,0.15)':i===sorted.length-1?'rgba(239,68,68,0.12)':'rgba(255,255,255,0.05)'};display:flex;align-items:center;justify-content:center;font-size:0.80rem;font-weight:800;color:${i===0?'#22c55e':i===sorted.length-1?'#ef4444':'#6b7280'};flex-shrink:0">${i+1}</div>
        <div style="font-size:1.1rem">${d.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:0.88rem">${d.name}</div>
          <div style="font-size:0.70rem;color:#6b7280">${d.users} usuários · ${d.manager}</div>
        </div>
        <div style="min-width:180px">
          <div class="dp-stat-bar"><div class="dp-stat-fill" style="width:${d.completion}%;background:${d.color}"></div></div>
        </div>
        <div style="min-width:50px;text-align:right;font-size:1rem;font-weight:900;color:${d.color}">${d.completion}%</div>
        <div style="min-width:36px;text-align:right;font-size:0.80rem;font-weight:700;color:${dpAvgColor(d.avg)}">${d.avg}</div>
        <span class="dp-badge ${dpRiskClass[d.risk]}" style="flex-shrink:0">${dpRiskLabel[d.risk]}</span>
      </div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  MODALS — New / Edit Dept + Trail
// ══════════════════════════════════════════════════════════════
window.dpOpenNewDept = function() {
  dpShowModal(`
    <div class="dp-modal-hdr">
      <span style="font-size:1rem;font-weight:800">🏢 Novo Departamento</span>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="dp-label">Nome *</label><input class="dp-input" id="dp-nd-name" placeholder="Ex: Marketing Digital"></div>
        <div><label class="dp-label">Ícone</label>
          <select class="dp-select" id="dp-nd-icon">
            ${['👥','💻','⚖️','💰','📞','⚙️','📣','🎯','🏭','🌐'].map(ic=>`<option value="${ic}">${ic}</option>`).join('')}
          </select>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="dp-label">Gestor Responsável</label><input class="dp-input" id="dp-nd-manager" placeholder="Nome do gestor"></div>
        <div><label class="dp-label">País / Região</label>
          <select class="dp-select" id="dp-nd-country">
            <option>🇧🇷 Brasil</option><option>🇺🇸 EUA</option><option>🇪🇺 Europa</option><option>🌍 Global</option>
          </select>
        </div>
      </div>
      <div><label class="dp-label">Cidade</label><input class="dp-input" id="dp-nd-city" placeholder="Ex: São Paulo"></div>
      <div><label class="dp-label">Descrição (opcional)</label>
        <textarea class="dp-textarea" id="dp-nd-desc" placeholder="Descreva as responsabilidades do departamento..."></textarea>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Cancelar</button>
      <button class="dp-btn dp-btn-primary" style="flex:1" onclick="dpSaveNewDept()">Criar Departamento</button>
    </div>
  `);
};

window.dpSaveNewDept = function() {
  const name = document.getElementById('dp-nd-name')?.value.trim();
  if (!name) { showToast&&showToast('Informe o nome do departamento','error'); return; }
  const icon = document.getElementById('dp-nd-icon')?.value || '🏢';
  const manager = document.getElementById('dp-nd-manager')?.value || '—';
  const city = document.getElementById('dp-nd-city')?.value || '';
  DEPT_DATA.departments.push({ id:'dept'+Date.now(), name, icon, users:0, completion:0, avg:0, certs:0, mandatory:0, risk:'low', trend:[0,0,0,0,0,0], manager, country:'🇧🇷', city, color:'#00d4ff', created:new Date().toISOString().split('T')[0] });
  dpCloseModal(); dpTab(DP.tab);
  showToast&&showToast('✅ Departamento criado com sucesso!','success');
};

window.dpOpenEditDept = function(id) {
  const d = DEPT_DATA.departments.find(x=>x.id===id);
  if (!d) return;
  dpShowModal(`
    <div class="dp-modal-hdr">
      <span style="font-size:1rem;font-weight:800">✏️ Editar — ${d.name}</span>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="dp-label">Nome</label><input class="dp-input" id="dp-ed-name" value="${d.name}"></div>
        <div><label class="dp-label">Ícone</label>
          <select class="dp-select" id="dp-ed-icon">
            ${['👥','💻','⚖️','💰','📞','⚙️','📣','🎯','🏭','🌐'].map(ic=>`<option value="${ic}"${ic===d.icon?' selected':''}>${ic}</option>`).join('')}
          </select>
        </div>
      </div>
      <div><label class="dp-label">Gestor Responsável</label><input class="dp-input" id="dp-ed-manager" value="${d.manager}"></div>
      <div><label class="dp-label">Cidade</label><input class="dp-input" id="dp-ed-city" value="${d.city}"></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Cancelar</button>
      <button class="dp-btn dp-btn-primary" style="flex:1" onclick="dpSaveEditDept('${d.id}')">Salvar</button>
    </div>
  `);
};

window.dpSaveEditDept = function(id) {
  const d = DEPT_DATA.departments.find(x=>x.id===id);
  if (d) {
    d.name    = document.getElementById('dp-ed-name')?.value    || d.name;
    d.icon    = document.getElementById('dp-ed-icon')?.value    || d.icon;
    d.manager = document.getElementById('dp-ed-manager')?.value || d.manager;
    d.city    = document.getElementById('dp-ed-city')?.value    || d.city;
  }
  dpCloseModal(); dpTab(DP.tab);
  showToast&&showToast('Departamento actualizado!','success');
};

window.dpOpenNewTrail = function() {
  dpShowModal(`
    <div class="dp-modal-hdr">
      <span style="font-size:1rem;font-weight:800">🛤 Nova Trilha de Aprendizagem</span>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div><label class="dp-label">Nome da Trilha *</label><input class="dp-input" id="dp-nt-name" placeholder="Ex: Segurança para Executivos"></div>
      <div><label class="dp-label">Descrição</label>
        <textarea class="dp-textarea" id="dp-nt-desc" placeholder="Descreva os objetivos desta trilha..."></textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="dp-label">Ícone</label>
          <select class="dp-select" id="dp-nt-icon">
            ${['🛡','📋','🔒','🎯','📚','⭐','🏆','💡','🔐','🌐'].map(ic=>`<option value="${ic}">${ic}</option>`).join('')}
          </select>
        </div>
        <div><label class="dp-label">Tipo</label>
          <select class="dp-select" id="dp-nt-mandatory">
            <option value="1">Obrigatória</option>
            <option value="0">Opcional</option>
          </select>
        </div>
      </div>
      <div><label class="dp-label">Público-Alvo</label>
        <select class="dp-select" id="dp-nt-target">
          <option>Todos os Usuários</option>
          ${(()=>{
            const depts = (typeof getActiveTenantUsers==='function')
              ? [...new Set(getActiveTenantUsers().map(u=>u.dept).filter(Boolean))].sort()
              : DEPT_DATA.departments.map(d=>d.name);
            return depts.map(d=>`<option>${d}</option>`).join('');
          })()}
        </select>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Cancelar</button>
      <button class="dp-btn dp-btn-primary" style="flex:1" onclick="dpSaveNewTrail()">Criar Trilha</button>
    </div>
  `);
};

window.dpSaveNewTrail = function() {
  const name = document.getElementById('dp-nt-name')?.value.trim();
  if (!name) { showToast&&showToast('Informe o nome da trilha','error'); return; }
  const icon = document.getElementById('dp-nt-icon')?.value || '📚';
  const mandatory = document.getElementById('dp-nt-mandatory')?.value === '1';
  const target = document.getElementById('dp-nt-target')?.value || 'Todos os Usuários';
  const colors = ['#00d4ff','#22c55e','#8b5cf6','#f59e0b','#ef4444','#14b8a6'];
  DEPT_DATA.trails.push({ id:'trail'+Date.now(), name, icon, color:colors[Math.floor(Math.random()*colors.length)], mandatory, modules:0, users:0, completion:0, target, description:document.getElementById('dp-nt-desc')?.value||'', modules_list:[] });
  dpCloseModal(); dpTab('trails');
  showToast&&showToast('✅ Trilha criada com sucesso!','success');
};

window.dpOpenEditTrail = function(id) {
  const t = DEPT_DATA.trails.find(x=>x.id===id);
  if (!t) return;
  dpShowModal(`
    <div class="dp-modal-hdr">
      <span style="font-size:1rem;font-weight:800">✏️ Editar Trilha — ${t.name}</span>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div><label class="dp-label">Nome</label><input class="dp-input" id="dp-et-name" value="${t.name}"></div>
      <div><label class="dp-label">Descrição</label>
        <textarea class="dp-textarea" id="dp-et-desc">${t.description}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label class="dp-label">Tipo</label>
          <select class="dp-select" id="dp-et-mandatory">
            <option value="1"${t.mandatory?' selected':''}>Obrigatória</option>
            <option value="0"${!t.mandatory?' selected':''}>Opcional</option>
          </select>
        </div>
        <div><label class="dp-label">Público-Alvo</label><input class="dp-input" id="dp-et-target" value="${t.target}"></div>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Cancelar</button>
      <button class="dp-btn dp-btn-primary" style="flex:1" onclick="dpSaveEditTrail('${t.id}')">Salvar</button>
    </div>
  `);
};

window.dpSaveEditTrail = function(id) {
  const t = DEPT_DATA.trails.find(x=>x.id===id);
  if (t) {
    t.name      = document.getElementById('dp-et-name')?.value      || t.name;
    t.description=document.getElementById('dp-et-desc')?.value      || t.description;
    t.mandatory = document.getElementById('dp-et-mandatory')?.value === '1';
    t.target    = document.getElementById('dp-et-target')?.value    || t.target;
  }
  dpCloseModal(); dpTab(DP.tab);
  showToast&&showToast('Trilha actualizada!','success');
};

window.dpConfirmDeleteTrail = function(id, name) {
  dpCloseModal();
  dpShowModal(`
    <div class="dp-modal-hdr"><div style="font-size:1rem;font-weight:800">🗑️ Excluir Trilha?</div></div>
    <div style="text-align:center;padding:10px 0 20px">
      <div style="font-size:2rem;margin-bottom:12px">🗑️</div>
      <p style="font-size:0.88rem;color:#94a3b8;line-height:1.6;margin-bottom:6px">
        Tem a certeza que quer excluir a trilha<br>
        <strong style="color:#f1f5f9">${name}</strong>?
      </p>
      <p style="font-size:0.76rem;color:#ef4444;margin-bottom:24px">Esta ação não pode ser desfeita.</p>
      <div style="display:flex;gap:10px">
        <button class="dp-btn dp-btn-ghost" style="flex:1" onclick="dpCloseModal()">Cancelar</button>
        <button class="dp-btn" style="flex:1;background:rgba(239,68,68,.12);color:#ef4444;border:1px solid rgba(239,68,68,.30)" onclick="dpDeleteTrail('${id}')">🗑 Confirmar Exclusão</button>
      </div>
    </div>
  `);
};

window.dpDeleteTrail = function(id) {
  const idx = DEPT_DATA.trails.findIndex(x=>x.id===id);
  if(idx !== -1) DEPT_DATA.trails.splice(idx, 1);
  dpCloseModal();
  dpTab('trails');
  showToast&&showToast('Trilha excluída.','info');
};

// ══════════════════════════════════════════════════════════════
//  AI TRAIL GENERATOR
// ══════════════════════════════════════════════════════════════

// ── Internal state for generated trail ───────────────────────
let _dpAiTrail = null;

// ── Step 1: Show scanning animation, then run analysis ────────
window.dpAiGenerateTrail = function() {
  const steps = [
    { pct: 12, msg: '🔍 Carregando perfil de Human Risk da organização...' },
    { pct: 28, msg: '📊 Analisando scores de risco por usuário e departamento...' },
    { pct: 44, msg: '🎣 Avaliando taxa de clique em simulações de phishing...' },
    { pct: 60, msg: '📚 Verificando lacunas de treinamento e certificados vencidos...' },
    { pct: 76, msg: '🧠 Gerando recomendações personalizadas com IA (Claude Sonnet)...' },
    { pct: 90, msg: '📋 Definindo prioridades, prazos e metas de conformidade...' },
    { pct: 100, msg: '✅ Trilha gerada com sucesso!' },
  ];

  // Inject spinner keyframes once
  if (!document.getElementById('dp-ai-spin-css')) {
    const s = document.createElement('style');
    s.id = 'dp-ai-spin-css';
    s.textContent = `
      @keyframes dpAiSpin   { to { transform: rotate(360deg); } }
      @keyframes dpAiPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.55;transform:scale(0.88)} }
      @keyframes dpAiDot    { 0%,80%,100%{transform:scale(0);opacity:0} 40%{transform:scale(1);opacity:1} }
      @keyframes dpAiFadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
      .dp-ai-spinner { width:56px;height:56px;border-radius:50%;border:3px solid rgba(139,92,246,0.18);border-top-color:#8b5cf6;animation:dpAiSpin 0.9s linear infinite; }
      .dp-ai-dot { width:7px;height:7px;border-radius:50%;background:#8b5cf6;display:inline-block;animation:dpAiDot 1.4s ease-in-out infinite; }
      .dp-ai-dot:nth-child(2){animation-delay:0.16s}
      .dp-ai-dot:nth-child(3){animation-delay:0.32s}
      .dp-ai-log-item { animation:dpAiFadeIn 0.35s ease; }
    `;
    document.head.appendChild(s);
  }

  dpShowModal(`
    <div style="text-align:center;padding:14px 0 10px;">

      <!-- Spinner + orb -->
      <div style="position:relative;width:80px;height:80px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
        <div class="dp-ai-spinner" style="position:absolute;inset:0;"></div>
        <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#6366f1);display:flex;align-items:center;justify-content:center;font-size:1.5rem;animation:dpAiPulse 2s ease-in-out infinite;">🤖</div>
      </div>

      <!-- Title -->
      <div style="font-weight:800;font-size:1.08rem;margin-bottom:6px;letter-spacing:-0.01em;">Gerando sua trilha personalizada com IA</div>
      <div style="font-size:0.80rem;color:#6b7280;margin-bottom:6px;">Isso pode levar alguns instantes.</div>

      <!-- Animated dots -->
      <div style="margin-bottom:22px;display:flex;justify-content:center;gap:6px;">
        <div class="dp-ai-dot"></div>
        <div class="dp-ai-dot"></div>
        <div class="dp-ai-dot"></div>
      </div>

      <!-- Progress bar -->
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:6px;overflow:hidden;margin-bottom:6px;">
        <div id="dp-ai-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#8b5cf6,#00d4ff);border-radius:99px;transition:width 0.55s ease;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:20px;">
        <div id="dp-ai-step-msg" style="font-size:0.74rem;color:#94a3b8;text-align:left;flex:1;">Iniciando análise...</div>
        <div id="dp-ai-pct" style="font-size:0.74rem;font-weight:700;color:#8b5cf6;margin-left:10px;">0%</div>
      </div>

      <!-- Step log -->
      <div id="dp-ai-log" style="text-align:left;display:flex;flex-direction:column;gap:5px;max-height:160px;overflow:hidden;"></div>

      <!-- Non-blocking note -->
      <div style="margin-top:18px;padding:10px 14px;background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:9px;font-size:0.72rem;color:#94a3b8;line-height:1.55;">
        🧠 A IA está analisando os scores de Human Risk, lacunas de treinamento, simulações de phishing e perfis por departamento para montar uma trilha totalmente personalizada.
      </div>
    </div>
  `, 'dp-modal');

  let i = 0;
  function tick() {
    if (i >= steps.length) {
      _dpAiTrail = dpAiBuildTrailData();
      dpAiShowReview();
      return;
    }
    const s = steps[i++];
    const bar = document.getElementById('dp-ai-bar');
    const msg = document.getElementById('dp-ai-step-msg');
    const pct = document.getElementById('dp-ai-pct');
    const log = document.getElementById('dp-ai-log');
    if (bar) bar.style.width = s.pct + '%';
    if (msg) msg.textContent = s.msg;
    if (pct) pct.textContent = s.pct + '%';
    if (log) {
      const isDone = (i === steps.length);
      const item = document.createElement('div');
      item.className = 'dp-ai-log-item';
      item.style.cssText = 'display:flex;align-items:center;gap:8px;padding:5px 10px;border-radius:7px;background:rgba(255,255,255,0.03);font-size:0.72rem;color:#94a3b8;';
      item.innerHTML = isDone
        ? `<span style="color:#22c55e;flex-shrink:0;">✅</span><span style="color:#22c55e;font-weight:600;">${s.msg}</span>`
        : `<span style="color:#8b5cf6;flex-shrink:0;">✓</span><span>${s.msg}</span>`;
      log.appendChild(item);
      // Keep scroll at bottom
      log.scrollTop = log.scrollHeight;
    }
    setTimeout(tick, isDone ? 700 : 620);
  }
  setTimeout(tick, 400);
};

// ── Build the AI trail object from live HRM + tenant data ─────
function dpAiBuildTrailData() {
  // Gather live data
  const users     = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
  const total     = users.length || 11;
  const tenant    = (typeof APP !== 'undefined' && APP.tenants)
    ? (APP.tenants.find(t => t.active) || {}).name || 'Empresa'
    : 'Empresa';

  // Pull from HRM_DATA if available, else use EX_CURRENT as fallback
  const hrmUsers  = (typeof HRM_DATA !== 'undefined') ? HRM_DATA.users : [];
  const hrmDepts  = (typeof HRM_DATA !== 'undefined') ? HRM_DATA.depts : [];

  const highRisk  = hrmUsers.filter(u => u.score > 60).length || 3;
  const medRisk   = hrmUsers.filter(u => u.score > 30 && u.score <= 60).length || 5;
  const expCerts  = hrmUsers.filter(u => u.certs === 'expired').length || 2;
  const avgScore  = hrmUsers.length
    ? Math.round(hrmUsers.reduce((s,u) => s+u.score, 0) / hrmUsers.length)
    : 65;

  // Factor analysis
  const factors = (typeof HRM_DATA !== 'undefined' && HRM_DATA.factors) ? HRM_DATA.factors : [];
  const phFactor = factors.find(f => f.id === 'phishing') || { id:'phishing', label:'Phishing', weight:30 };
  const trFactor = factors.find(f => f.id === 'training')  || { id:'training', label:'Treinamento', weight:25 };
  const pwFactor = factors.find(f => f.id === 'password')  || { id:'password', label:'Senhas', weight:20 };

  const phAvg = hrmUsers.length
    ? Math.round(hrmUsers.reduce((s,u) => s+(u.phishing||0), 0) / hrmUsers.length)
    : 72;
  const trAvg = hrmUsers.length
    ? Math.round(hrmUsers.reduce((s,u) => s+(u.training||0), 0) / hrmUsers.length)
    : 45;
  const pwAvg = hrmUsers.length
    ? Math.round(hrmUsers.reduce((s,u) => s+(u.password||0), 0) / hrmUsers.length)
    : 38;

  // Highest-risk departments
  const sortedDepts = [...hrmDepts].sort((a,b) => b.score - a.score).slice(0, 3);
  const topDeptNames = sortedDepts.length
    ? sortedDepts.map(d => d.name).join(' · ')
    : 'Operações · Comercial · Financeiro';

  // Deadline helpers
  const today = new Date();
  const addDays = (n) => {
    const d = new Date(today); d.setDate(d.getDate()+n);
    return d.toLocaleDateString('pt-BR');
  };

  return {
    id: 'ai-trail-' + Date.now(),
    tenant,
    generatedAt: today.toLocaleDateString('pt-BR') + ' às ' + today.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
    orgRisk: { avgScore, highRisk, medRisk, expCerts, total },
    phAvg, trAvg, pwAvg, topDeptNames,
    name: 'Plano de Mitigação de Risco Humano — IA',
    icon: '🤖',
    color: '#8b5cf6',
    mandatory: true,
    description: `Trilha gerada automaticamente pela IA com base na análise do perfil de Human Risk de ${tenant}. Prioriza a redução de ${highRisk} usuários em alto risco e melhora a postura de segurança organizacional.`,
    target: topDeptNames || 'Todos os Usuários',
    modules: [
      {
        n:1, priority:'🔴 URGENTE', deadline: addDays(7),
        name:'Phishing — Reconhecimento e Resposta Imediata',
        duration:'6h', recurrence:'Trimestral',
        audience: `${highRisk} usuários de alto risco · ${topDeptNames}`,
        justification: `Score médio de phishing: ${phAvg}/100 — acima do limiar crítico de 60. ${highRisk} usuário(s) clicaram em simulações recentes. Ação imediata recomendada.`,
        goal:'Reduzir taxa de clique para <8% em 30 dias',
        status:'active', completion:0,
      },
      {
        n:2, priority:'🔴 URGENTE', deadline: addDays(14),
        name:'Engenharia Social & CEO Fraud Awareness',
        duration:'4h', recurrence:'Semestral',
        audience:`Gestores · Diretoria · Financeiro`,
        justification:`Departamentos de alto risco (${topDeptNames}) apresentam maior exposição a ataques de spear-phishing e fraude de CEO. Score médio HRM: ${avgScore}/100.`,
        goal:'100% de conclusão por gestores em 14 dias',
        status:'active', completion:0,
      },
      {
        n:3, priority:'🟡 ALTA', deadline: addDays(21),
        name:'Senhas Seguras, MFA e Gestão de Acessos',
        duration:'3h', recurrence:'Anual',
        audience:`Todos os ${total} usuários`,
        justification:`Score médio de senha/acesso: ${pwAvg}/100. ${expCerts} usuário(s) com certificados vencidos, indicando baixo engajamento com boas práticas de segurança.`,
        goal:'100% dos usuários com MFA ativado em 21 dias',
        status:'active', completion:0,
      },
      {
        n:4, priority:'🟡 ALTA', deadline: addDays(30),
        name:'Lacunas de Treinamento — Reforço Direcionado',
        duration:'8h', recurrence:'Semestral',
        audience:`${medRisk} usuários de risco moderado`,
        justification:`Score médio de treinamento: ${trAvg}/100. ${medRisk} usuário(s) com conclusão <50% nos últimos 90 dias. Módulos de reforço personalizados por departamento.`,
        goal:`Elevar taxa de conclusão para >85% em 30 dias`,
        status:'active', completion:0,
      },
      {
        n:5, priority:'🟡 ALTA', deadline: addDays(45),
        name:'Proteção de Dados, LGPD e Privacidade Avançada',
        duration:'6h', recurrence:'Anual',
        audience:`RH · Jurídico · TI · todos os ${total} usuários`,
        justification:`Cobertura ISO 27001 abaixo do ideal. Riscos de privacidade e conformidade identificados nos fatores de acesso e treinamento do perfil HRM.`,
        goal:'Cobertura de privacidade >90% em 45 dias',
        status:'active', completion:0,
      },
      {
        n:6, priority:'🟢 MÉDIA', deadline: addDays(60),
        name:'Cultura de Segurança — Boas Práticas Contínuas',
        duration:'4h', recurrence:'Trimestral',
        audience:`Todos os ${total} usuários`,
        justification:`Reforço cultural necessário para manter os ganhos gerados pelos módulos urgentes. Inclui gamificação, casos reais e métricas de progresso individuais.`,
        goal:'Score HRM médio <40 em 60 dias',
        status:'active', completion:0,
      },
    ],
    metrics: [
      { label:'Usuários de alto risco', baseline: highRisk, target: Math.max(0, Math.round(highRisk * 0.3)), unit:'' },
      { label:'Taxa de clique (phishing)', baseline: phAvg+'%', target:'<8%', unit:'' },
      { label:'Conclusão de treinamentos', baseline: (100-trAvg)+'%', target:'>85%', unit:'' },
      { label:'Score HRM médio', baseline: avgScore, target: Math.max(10, Math.round(avgScore * 0.55)), unit:'/100' },
      { label:'Certificados válidos', baseline: (total-expCerts)+'/'+total, target: total+'/'+total, unit:'' },
    ],
    recs: [
      `Agendar simulações de phishing mensais para os ${highRisk} usuários de maior risco, com relatório automático para gestores.`,
      `Configurar alertas automáticos de Human Risk para usuários que atingirem score > 70 pela primeira vez.`,
      `Implementar plano de recompensas (badges, ranking) para aumentar o engajamento com os módulos de reforço.`,
      `Revisão trimestral desta trilha com nova análise de IA para ajustar módulos conforme a evolução do perfil de risco.`,
    ],
  };
}

// ── Step 2: Show the full review modal ───────────────────────
function dpAiShowReview() {
  const t = _dpAiTrail;
  if (!t) return;

  const priorityColor = { '🔴 URGENTE':'#ef4444', '🟡 ALTA':'#f59e0b', '🟢 MÉDIA':'#22c55e' };

  dpShowModal(`
    <div class="dp-modal-hdr">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6366f1);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">🤖</div>
        <div>
          <div style="font-size:1.0rem;font-weight:800;">${t.name}</div>
          <div style="font-size:0.72rem;color:#6b7280;">Gerado em ${t.generatedAt} · ${t.tenant} · ${t.modules.length} módulos</div>
        </div>
      </div>
      <button class="dp-modal-close" onclick="dpCloseModal()">✕</button>
    </div>

    <!-- Org Risk Summary -->
    <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.18);border-radius:12px;padding:14px 16px;margin-bottom:16px;">
      <div style="font-size:0.68rem;font-weight:800;color:#8b5cf6;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">📊 Diagnóstico Human Risk — Base da Análise IA</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;text-align:center;">
        ${[
          ['Score Médio HRM', t.orgRisk.avgScore+'/100', t.orgRisk.avgScore > 60 ? '#ef4444' : t.orgRisk.avgScore > 30 ? '#f59e0b' : '#22c55e'],
          ['Alto Risco', t.orgRisk.highRisk+' usuários', '#ef4444'],
          ['Risco Moderado', t.orgRisk.medRisk+' usuários', '#f59e0b'],
          ['Certs Vencidos', t.orgRisk.expCerts+' usuários', '#f59e0b'],
          ['Total Usuários', t.orgRisk.total, '#00d4ff'],
        ].map(([lbl,val,col])=>`
          <div style="padding:10px;background:rgba(255,255,255,0.03);border-radius:9px;">
            <div style="font-size:1.05rem;font-weight:900;color:${col};">${val}</div>
            <div style="font-size:0.60rem;color:#6b7280;margin-top:3px;">${lbl}</div>
          </div>`).join('')}
      </div>
      <div style="margin-top:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:0.72rem;">
        <div style="padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:8px;"><span style="color:#6b7280;">Score Phishing: </span><strong style="color:#ef4444;">${t.phAvg}/100</strong></div>
        <div style="padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:8px;"><span style="color:#6b7280;">Score Treinamento: </span><strong style="color:#f59e0b;">${t.trAvg}/100</strong></div>
        <div style="padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:8px;"><span style="color:#6b7280;">Score Senha/Acesso: </span><strong style="color:#f59e0b;">${t.pwAvg}/100</strong></div>
      </div>
      <div style="margin-top:8px;font-size:0.72rem;color:#6b7280;">🎯 Departamentos prioritários identificados: <strong style="color:#f1f5f9;">${t.topDeptNames}</strong></div>
    </div>

    <!-- Modules -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">📚 Módulos Gerados pela IA</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px;">
      ${t.modules.map(m=>`
        <div style="border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 15px;background:rgba(255,255,255,0.02);">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
            <span style="font-size:0.72rem;font-weight:800;padding:3px 10px;border-radius:99px;background:${priorityColor[m.priority]}18;color:${priorityColor[m.priority]};">${m.priority}</span>
            <span style="font-size:0.87rem;font-weight:700;flex:1;">${m.n}. ${m.name}</span>
            <span style="font-size:0.68rem;color:#6b7280;">${m.duration} · ${m.recurrence}</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;font-size:0.72rem;">
            <div style="padding:6px 10px;background:rgba(255,255,255,0.03);border-radius:7px;"><span style="color:#6b7280;">👥 Público: </span>${m.audience}</div>
            <div style="padding:6px 10px;background:rgba(255,255,255,0.03);border-radius:7px;"><span style="color:#6b7280;">⏰ Prazo: </span><strong>${m.deadline}</strong></div>
          </div>
          <div style="padding:8px 10px;background:rgba(0,212,255,0.04);border:1px solid rgba(0,212,255,0.10);border-radius:8px;font-size:0.72rem;color:#94a3b8;line-height:1.55;margin-bottom:6px;">
            <span style="color:#00d4ff;font-weight:700;">🧠 Justificativa IA: </span>${m.justification}
          </div>
          <div style="font-size:0.70rem;color:#22c55e;"><span style="color:#6b7280;">🎯 Meta: </span>${m.goal}</div>
        </div>`).join('')}
    </div>

    <!-- Success Metrics -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">📈 Indicadores de Sucesso</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:18px;">
      ${t.metrics.map(m=>`
        <div style="padding:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;">
          <div style="font-size:0.68rem;color:#6b7280;margin-bottom:5px;">${m.label}</div>
          <div style="display:flex;align-items:baseline;gap:8px;">
            <span style="font-size:0.82rem;color:#6b7280;text-decoration:line-through;">${m.baseline}${m.unit}</span>
            <span style="font-size:1rem;font-weight:800;color:#22c55e;">→ ${m.target}</span>
          </div>
        </div>`).join('')}
    </div>

    <!-- Additional Recommendations -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">💡 Recomendações Adicionais</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:20px;">
      ${t.recs.map((r,i)=>`
        <div style="display:flex;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.02);border-radius:9px;border:1px solid rgba(255,255,255,0.06);font-size:0.78rem;color:#94a3b8;line-height:1.5;">
          <span style="color:#8b5cf6;font-weight:700;flex-shrink:0;">${i+1}.</span>${r}
        </div>`).join('')}
    </div>

    <!-- Disclaimer -->
    <div style="padding:10px 14px;background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.15);border-radius:9px;font-size:0.72rem;color:#f59e0b;margin-bottom:18px;">
      ⚠️ Revise os módulos, públicos-alvo e prazos antes de publicar. Você poderá editar a trilha após a aprovação.
    </div>

    <!-- Actions -->
    <div style="display:flex;gap:10px;">
      <button class="dp-btn dp-btn-ghost" style="flex:1;" onclick="dpCloseModal()">✕ Descartar</button>
      <button class="dp-btn dp-btn-ghost" style="flex:1;" onclick="dpAiRegenerateTrail()">🔄 Regerar</button>
      <button class="dp-btn dp-btn-primary" style="flex:2;background:linear-gradient(135deg,#8b5cf6,#6366f1);box-shadow:0 4px 16px rgba(139,92,246,0.35);" onclick="dpAiApproveTrail()">✅ Aprovar e Publicar Trilha</button>
    </div>
  `, 'dp-modal dp-modal-lg');
}

// ── Regenerate (re-run analysis with slight variation) ────────
window.dpAiRegenerateTrail = function() {
  dpCloseModal();
  setTimeout(() => dpAiGenerateTrail(), 100);
};

// ── Approve: add trail to DEPT_DATA.trails + refresh ─────────
window.dpAiApproveTrail = function() {
  const t = _dpAiTrail;
  if (!t) return;
  // Build modules_list in the format DEPT_DATA.trails expects
  const modules_list = t.modules.map(m => ({
    n: m.n, name: m.name, duration: m.duration, completion: 0, status: 'active',
  }));
  DEPT_DATA.trails.unshift({
    id: t.id,
    name: t.name,
    icon: t.icon,
    color: t.color,
    mandatory: t.mandatory,
    modules: t.modules.length,
    users: t.orgRisk.total,
    completion: 0,
    target: t.target,
    description: t.description,
    modules_list,
    aiGenerated: true,
  });
  dpCloseModal();
  dpTab('trails');
  showToast && showToast('✅ Trilha gerada pela IA publicada com sucesso!', 'success');
  _dpAiTrail = null;
};

// ── Modal helpers ─────────────────────────────────────────────
function dpShowModal(html, cls='dp-modal') {
  dpCloseModal();
  const ov=document.createElement('div'); ov.className='dp-overlay'; ov.id='dp-overlay';
  ov.addEventListener('click', e=>{ if(e.target===ov) dpCloseModal(); });
  const m=document.createElement('div'); m.className=cls; m.innerHTML=html;
  ov.appendChild(m); document.body.appendChild(ov);
}
window.dpCloseModal = function() { const el=document.getElementById('dp-overlay'); if(el) el.remove(); };
document.addEventListener('keydown', e=>{ if(e.key==='Escape') dpCloseModal(); });
