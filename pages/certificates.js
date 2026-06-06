// ══════════════════════════════════════════════════════════════
//  🏆 CERTIFICADOS DIGITAIS — Complete Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectCertCSS() {
  if (document.getElementById('cert-css')) return;
  const s = document.createElement('style');
  s.id = 'cert-css';
  s.textContent = `
    :root {
      --cert-gold:   #f59e0b;
      --cert-gold2:  #fbbf24;
      --cert-teal:   #00d4ff;
      --cert-green:  #22c55e;
      --cert-red:    #ef4444;
      --cert-amber:  #f59e0b;
      --cert-card:   #12121a;
      --cert-border: rgba(255,255,255,0.07);
    }

    /* ── Tabs ── */
    .cert-tabs { display:flex; gap:4px; background:var(--cert-card); border:1px solid var(--cert-border); border-radius:14px; padding:5px; margin-bottom:20px; overflow-x:auto; }
    .cert-tab  { display:flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; font-size:0.83rem; font-weight:600; cursor:pointer; color:#94a3b8; background:transparent; border:none; white-space:nowrap; transition:all 0.2s; font-family:inherit; }
    .cert-tab:hover  { color:#f1f5f9; background:rgba(255,255,255,0.04); }
    .cert-tab.active { color:#000; background:var(--cert-gold); box-shadow:0 4px 16px rgba(245,158,11,0.30); }

    /* ── KPI Cards ── */
    .cert-kpi-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(175px,1fr)); gap:14px; margin-bottom:20px; }
    .cert-kpi { background:var(--cert-card); border:1px solid var(--cert-border); border-radius:16px; padding:20px; transition:all 0.22s; }
    .cert-kpi:hover { border-color:rgba(255,255,255,0.14); transform:translateY(-2px); }
    .cert-kpi-icon { font-size:1.6rem; margin-bottom:10px; }
    .cert-kpi-val  { font-size:1.9rem; font-weight:800; letter-spacing:-0.04em; line-height:1; }
    .cert-kpi-lbl  { font-size:0.70rem; color:#6b7280; margin-top:5px; text-transform:uppercase; letter-spacing:0.08em; }
    .cert-kpi-sub  { font-size:0.72rem; margin-top:5px; }

    /* ── Table ── */
    .cert-table { width:100%; border-collapse:collapse; font-size:0.84rem; }
    .cert-table th { text-align:left; padding:10px 14px; font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#6b7280; border-bottom:1px solid var(--cert-border); cursor:pointer; user-select:none; }
    .cert-table th:hover { color:#f1f5f9; }
    .cert-table td { padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.03); vertical-align:middle; }
    .cert-table tr:last-child td { border-bottom:none; }
    .cert-table tr:hover td { background:rgba(255,255,255,0.02); cursor:pointer; }

    /* ── Badge ── */
    .cert-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:99px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }
    .cert-valid    { background:rgba(34,197,94,0.12);  color:#22c55e; }
    .cert-expiring { background:rgba(245,158,11,0.12); color:#f59e0b; }
    .cert-expired  { background:rgba(239,68,68,0.12);  color:#ef4444; }

    /* ── Buttons ── */
    .cert-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .cert-btn-gold  { background:var(--cert-gold); color:#000; box-shadow:0 4px 14px rgba(245,158,11,0.28); }
    .cert-btn-gold:hover { background:var(--cert-gold2); transform:translateY(-1px); }
    .cert-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .cert-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#f1f5f9; }
    .cert-btn-sm { padding:6px 13px; font-size:0.76rem; border-radius:8px; }

    /* ── Input ── */
    .cert-input, .cert-select { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10); border-radius:9px; padding:9px 13px; color:#f1f5f9; font-size:0.84rem; font-family:inherit; outline:none; transition:border-color 0.2s; }
    .cert-input:focus, .cert-select:focus { border-color:var(--cert-gold); }
    .cert-input::placeholder { color:#6b7280; }
    .cert-select option { background:#1a1a26; }

    /* ── Filter chips ── */
    .cert-chip { display:inline-flex; align-items:center; gap:3px; padding:3px 10px; border-radius:99px; font-size:0.70rem; background:rgba(245,158,11,0.12); border:1px solid rgba(245,158,11,0.25); color:#f59e0b; }

    /* ── Certificate Card (Visual) ── */
    .cert-card-visual {
      background: linear-gradient(135deg, #0d1117 0%, #1a1f2e 40%, #0d1117 100%);
      border: 1px solid rgba(245,158,11,0.30);
      border-radius: 16px; padding: 36px;
      position: relative; overflow: hidden;
    }
    .cert-card-visual::before {
      content:''; position:absolute; inset:0;
      background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08), transparent);
      pointer-events:none;
    }
    .cert-card-visual::after {
      content:''; position:absolute; top:0; left:0; right:0; height:2px;
      background: linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #f59e0b, transparent);
    }
    .cert-seal {
      width:56px; height:56px; border-radius:50%;
      background:linear-gradient(135deg,#f59e0b,#b45309);
      display:flex; align-items:center; justify-content:center;
      font-size:1.6rem; box-shadow:0 0 24px rgba(245,158,11,0.4);
      flex-shrink:0;
    }

    /* ── Modal ── */
    .cert-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.80); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .cert-modal   { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:32px; width:100%; max-width:700px; max-height:90vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,0.7); animation:certIn 0.25s ease; }
    .cert-modal-xl{ max-width:900px; }
    @keyframes certIn { from{transform:scale(0.95);opacity:0} to{transform:scale(1);opacity:1} }
    .cert-modal-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
    .cert-modal-close { background:none; border:none; color:#6b7280; font-size:1.3rem; cursor:pointer; }
    .cert-modal-close:hover { color:#f1f5f9; }

    /* ── QR Code (CSS grid) ── */
    .cert-qr { display:inline-grid; gap:2px; padding:10px; background:#fff; border-radius:8px; }
    .cert-qr-cell { width:6px; height:6px; border-radius:1px; }

    /* ── Progress ring ── */
    .cert-ring-wrap { position:relative; display:inline-flex; align-items:center; justify-content:center; }
    .cert-ring-val  { position:absolute; font-size:1rem; font-weight:800; }

    /* ── Section header ── */
    .cert-sh { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:16px; }
    .cert-sh-title { font-size:1rem; font-weight:800; letter-spacing:-0.015em; }

    /* ── Card ── */
    .cert-card { background:var(--cert-card); border:1px solid var(--cert-border); border-radius:16px; padding:22px; }

    /* ── Validation box ── */
    .cert-validate-box { background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.20); border-radius:14px; padding:24px; text-align:center; }

    /* ── Timeline ── */
    .cert-timeline { display:flex; flex-direction:column; gap:0; }
    .cert-tl-item  { display:flex; gap:14px; padding-bottom:16px; }
    .cert-tl-item:last-child { padding-bottom:0; }
    .cert-tl-dot   { width:10px; height:10px; border-radius:50%; flex-shrink:0; margin-top:4px; }
    .cert-tl-line  { width:1px; background:rgba(255,255,255,0.08); flex-shrink:0; margin-left:4.5px; }

    /* ── Stats bar ── */
    .cert-stat-bar { height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; margin-top:4px; }
    .cert-stat-fill{ height:100%; border-radius:3px; transition:width 0.8s ease; }
  `;
  document.head.appendChild(s);
}
injectCertCSS();

// ── Data ─────────────────────────────────────────────────────
const CERT_DATA = {
  certificates: [
    { id:'BVA-2025-001340', user:'Ana Lima',         email:'ana.lima@empresa.com',     course:'ISO/IEC 27001 Lead Auditor',            category:'Information Security', dept:'Financeiro', date:'2025-03-10', expires:'2026-03-10', lang:'pt', score:96, status:'valid',    country:'🇧🇷', duration:'40h', issuer:'PECB · Brandvakt Academy' },
    { id:'BVA-2025-001339', user:'Carlos Souza',     email:'carlos.s@empresa.com',     course:'Phishing Awareness & Simulation',        category:'Cybersecurity',         dept:'Comercial',  date:'2025-03-08', expires:'2026-03-08', lang:'pt', score:88, status:'valid',    country:'🇧🇷', duration:'8h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001338', user:'Sarah Johnson',    email:'sarah.j@empresa.com',      course:'GDPR Compliance Fundamentals',           category:'Privacy',               dept:'Jurídico',   date:'2025-03-05', expires:'2026-03-05', lang:'en', score:100,status:'valid',    country:'🇺🇸', duration:'16h', issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001337', user:'Marie Dupont',     email:'marie.d@empresa.com',      course:'Code of Business Ethics',               category:'Compliance',            dept:'Comercial',  date:'2025-03-01', expires:'2026-03-01', lang:'fr', score:92, status:'valid',    country:'🇫🇷', duration:'12h', issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001320', user:'Rafael Neto',      email:'rafael.n@empresa.com',     course:'ISO/IEC 27005 Risk Management',          category:'Information Security', dept:'TI',         date:'2025-02-20', expires:'2026-02-20', lang:'pt', score:98, status:'valid',    country:'🇧🇷', duration:'35h', issuer:'PECB · Brandvakt Academy' },
    { id:'BVA-2025-001315', user:'Catalina Ruiz',    email:'cat.ruiz@empresa.com',     course:'Anti-Corruption & Anti-Bribery (ISO 37001)',category:'Compliance',         dept:'RH',         date:'2025-02-15', expires:'2026-02-15', lang:'es', score:95, status:'valid',    country:'🇪🇸', duration:'20h', issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001290', user:'Mariana Teles',    email:'m.teles@empresa.com',      course:'LGPD na Prática',                        category:'Privacy',               dept:'RH',         date:'2025-01-28', expires:'2026-01-28', lang:'pt', score:97, status:'valid',    country:'🇧🇷', duration:'16h', issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001278', user:'Lucas Ferreira',   email:'l.ferreira@empresa.com',   course:'Secure Password & MFA',                  category:'Cybersecurity',         dept:'TI',         date:'2025-01-20', expires:'2026-01-20', lang:'pt', score:91, status:'valid',    country:'🇧🇷', duration:'4h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001240', user:'Claire Martin',    email:'claire.m@empresa.com',     course:'ESG Essentials',                         category:'ESG',                   dept:'Jurídico',   date:'2024-12-15', expires:'2025-06-15', lang:'fr', score:89, status:'expiring', country:'🇫🇷', duration:'8h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001235', user:'Pedro Costa',      email:'p.costa@empresa.com',      course:'CEO Fraud Awareness',                    category:'Cybersecurity',         dept:'Marketing',  date:'2024-12-10', expires:'2025-06-10', lang:'pt', score:84, status:'expiring', country:'🇧🇷', duration:'4h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2024-001180', user:'Fernanda Dias',    email:'f.dias@empresa.com',       course:'Secure Home Office',                     category:'Cybersecurity',         dept:'Diretoria',  date:'2024-11-05', expires:'2025-05-05', lang:'pt', score:76, status:'expiring', country:'🇧🇷', duration:'6h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2024-001050', user:'João Silva',       email:'joao.s@empresa.com',       course:'LGPD Fundamentos',                       category:'Privacy',               dept:'TI',         date:'2024-08-10', expires:'2025-02-10', lang:'pt', score:75, status:'expired',  country:'🇧🇷', duration:'8h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2024-000980', user:'Rodrigo Lima',     email:'r.lima@empresa.com',       course:'Phishing Awareness Básico',              category:'Cybersecurity',         dept:'Operações',  date:'2024-06-20', expires:'2025-01-20', lang:'pt', score:72, status:'expired',  country:'🇧🇷', duration:'4h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2024-000920', user:'Diego Martins',    email:'d.martins@empresa.com',    course:'Código de Ética Empresarial',            category:'Compliance',            dept:'Diretoria',  date:'2024-05-15', expires:'2024-12-15', lang:'pt', score:88, status:'expired',  country:'🇧🇷', duration:'8h',  issuer:'Brandvakt Academy' },
    { id:'BVA-2025-001341', user:'Beatriz Alves',    email:'b.alves@empresa.com',      course:'ISO 31000 Risk Management Practitioner', category:'Compliance',            dept:'Financeiro', date:'2025-03-12', expires:'2026-03-12', lang:'pt', score:93, status:'valid',    country:'🇧🇷', duration:'20h', issuer:'PECB · Brandvakt Academy' },
  ],

  categories: ['Todos','Cybersecurity','Compliance','Privacy','Information Security','ESG'],
  courses: [
    'ISO/IEC 27001 Lead Auditor','ISO/IEC 27005 Risk Management','ISO 37001 Anti-Bribery',
    'GDPR Compliance Fundamentals','LGPD na Prática','Phishing Awareness','Code of Business Ethics','ESG Essentials'
  ],

  stats_by_category: [
    { name:'Cybersecurity',         count:5, color:'#00d4ff' },
    { name:'Compliance',            count:4, color:'#7c3aed' },
    { name:'Privacy',               count:3, color:'#22c55e' },
    { name:'Information Security',  count:2, color:'#f59e0b' },
    { name:'ESG',                   count:1, color:'#ec4899' },
  ],

  top_issuers: [
    { name:'Brandvakt Academy',     count:11, pct:73 },
    { name:'PECB · Brandvakt',      count:3,  pct:20 },
    { name:'External / Third-party',count:1,  pct:7  },
  ],
};

// ── State ─────────────────────────────────────────────────────
let CERT_STATE = {
  tab: 'lista',
  search: '', filterStatus: '', filterCategory: '', filterDept: '', filterUser: '',
  sortCol: 'date', sortDir: 'desc',
  selected: new Set(),
};

// ── Helpers ───────────────────────────────────────────────────
const cStatusColor = { valid:'#22c55e', expiring:'#f59e0b', expired:'#ef4444' };
const cStatusLabel = { valid:'Válido', expiring:'Vencendo', expired:'Expirado' };
const cLangFlag    = { pt:'🇧🇷', en:'🇺🇸', es:'🇪🇸', fr:'🇫🇷' };
const daysUntil = (d) => Math.ceil((new Date(d)-new Date())/(1000*60*60*24));
const fmtDate   = (d) => new Date(d).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});

function cBadge(status) {
  return `<span class="cert-badge cert-${status}">${cStatusLabel[status]||status}</span>`;
}

function scoreRing(val, size=52) {
  const r=(size-6)/2, circ=2*Math.PI*r;
  const c=val>=90?'#22c55e':val>=70?'#f59e0b':'#ef4444';
  return `<div class="cert-ring-wrap" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" style="transform:rotate(-90deg)">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="5"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${c}" stroke-width="5"
        stroke-dasharray="${(val/100)*circ} ${circ}" stroke-linecap="round"/>
    </svg>
    <div class="cert-ring-val" style="color:${c};font-size:0.75rem">${val}</div>
  </div>`;
}

function getFilteredCerts() {
  let data = [...CERT_DATA.certificates];
  if (CERT_STATE.search)         data = data.filter(c=>c.user.toLowerCase().includes(CERT_STATE.search.toLowerCase())||c.course.toLowerCase().includes(CERT_STATE.search.toLowerCase())||c.id.toLowerCase().includes(CERT_STATE.search.toLowerCase()));
  if (CERT_STATE.filterStatus)   data = data.filter(c=>c.status===CERT_STATE.filterStatus);
  if (CERT_STATE.filterCategory) data = data.filter(c=>c.category===CERT_STATE.filterCategory);
  if (CERT_STATE.filterDept)     data = data.filter(c=>c.dept===CERT_STATE.filterDept);
  if (CERT_STATE.filterUser)     data = data.filter(c=>c.user===CERT_STATE.filterUser);
  data.sort((a,b)=>{
    const av=a[CERT_STATE.sortCol], bv=b[CERT_STATE.sortCol];
    return CERT_STATE.sortDir==='asc'?(av>bv?1:-1):(av<bv?1:-1);
  });
  return data;
}

// ── Course pool for cert generation ───────────────────────────
const CERT_COURSES_POOL = [
  { course:'Phishing Awareness & Simulation',    category:'Cybersecurity',        duration:'8h',  issuer:'Brandvakt Academy'        },
  { course:'Segurança da Informação Básica',      category:'Information Security', duration:'6h',  issuer:'Brandvakt Academy'        },
  { course:'LGPD e Proteção de Dados Pessoais',  category:'Privacy',              duration:'16h', issuer:'Brandvakt Academy'        },
  { course:'Gestão de Senhas e MFA',             category:'Cybersecurity',        duration:'4h',  issuer:'Brandvakt Academy'        },
  { course:'Compliance e Ética Corporativa',     category:'Compliance',           duration:'8h',  issuer:'Brandvakt Academy'        },
  { course:'GDPR Compliance Fundamentals',       category:'Privacy',              duration:'12h', issuer:'Brandvakt Academy'        },
  { course:'ISO/IEC 27001 Fundamentos',          category:'Information Security', duration:'20h', issuer:'PECB · Brandvakt Academy' },
  { course:'ESG e Sustentabilidade Corporativa', category:'ESG',                  duration:'8h',  issuer:'Brandvakt Academy'        },
  { course:'Acesso Remoto e VPN Segura',         category:'Cybersecurity',        duration:'6h',  issuer:'Brandvakt Academy'        },
  { course:'Resposta a Incidentes',              category:'Compliance',           duration:'10h', issuer:'Brandvakt Academy'        },
  { course:'Segurança em Dispositivos Móveis',   category:'Cybersecurity',        duration:'4h',  issuer:'Brandvakt Academy'        },
  { course:'Classificação da Informação',        category:'Information Security', duration:'3h',  issuer:'Brandvakt Academy'        },
];

const CERT_LANG_MAP = { '🇧🇷':'pt','🇺🇸':'en','🇫🇷':'fr','🇪🇸':'es','🇸🇦':'ar','🇩🇪':'de' };

// ── Rebuild CERT_DATA from active tenant users ─────────────────
function rebuildCertsFromTenant() {
  if (typeof getActiveTenantUsers !== 'function') return;
  const tenantUsers = getActiveTenantUsers();
  if (!tenantUsers.length) return;

  const now = new Date();
  const generated = [];
  let seqNum = 1000 + (tenantUsers.length * 17);

  tenantUsers.forEach(u => {
    // certs pode ser número OU string 'valid'|'expiring'|'expired'
    let certCount;
    if (typeof u.certs === 'number') {
      certCount = Math.min(u.certs, CERT_COURSES_POOL.length);
    } else if (u.certs === 'valid') {
      certCount = Math.min(2 + Math.floor(((u.completion||70) - 60) / 15), 5);
    } else if (u.certs === 'expiring') {
      certCount = 2;
    } else if (u.certs === 'expired') {
      certCount = 1;
    } else {
      certCount = 0;
    }
    if (certCount <= 0) return;

    const lang = CERT_LANG_MAP[u.country] || 'pt';

    // Admin Local DEMO: inject from DEMO_STATE (handled separately below)
    if (u.isDemo) return;

    for (let i = 0; i < certCount; i++) {
      // Deterministic course selection: each user gets a unique slice of the pool
      const courseIdx = ((u.id * 7 + i * 3) % CERT_COURSES_POOL.length);
      const pool = CERT_COURSES_POOL[courseIdx];

      // Stagger issue dates: most recent first (1 month ago), then older
      const monthsAgo = 1 + i * 2 + Math.floor(((u.id * 13 + i) % 3));
      const issueDate = new Date(now);
      issueDate.setMonth(issueDate.getMonth() - monthsAgo);
      const expireDate = new Date(issueDate);
      expireDate.setFullYear(expireDate.getFullYear() + 1);

      const daysLeft = Math.ceil((expireDate - now) / (1000*60*60*24));
      // Respeitar status original do usuário se for string
      const status = typeof u.certs === 'string' && i === 0
        ? u.certs  // primeiro cert segue o status real do usuário
        : daysLeft < 0 ? 'expired' : daysLeft < 90 ? 'expiring' : 'valid';

      // Score based on completion and slight jitter (deterministic)
      const jitter = ((u.id * 11 + i * 7) % 10) - 5;
      const score = Math.max(60, Math.min(100, (u.completion || 75) + jitter));

      seqNum++;
      const year = issueDate.getFullYear();
      const certId = `BVA-${year}-${String(seqNum).padStart(6,'0')}`;

      generated.push({
        id: certId,
        user: u.name,
        email: u.email || `${u.name.toLowerCase().replace(/\s+/,'.')}@empresa.com`,
        course: pool.course,
        category: pool.category,
        dept: u.dept,
        date: issueDate.toISOString().split('T')[0],
        expires: expireDate.toISOString().split('T')[0],
        lang,
        score,
        status,
        country: u.country || '🇧🇷',
        duration: pool.duration,
        issuer: pool.issuer,
      });
    }
  });

  // Sort by date desc
  generated.sort((a,b) => b.date.localeCompare(a.date));
  CERT_DATA.certificates = generated;
}

// ── Main Render ───────────────────────────────────────────────
window.renderPage_certificates = function() {
  injectCertCSS();

  // ── Rebuild certs from active tenant ──────────────────────
  rebuildCertsFromTenant();

  // ── Inject Admin Local DEMO real completions ───────────────
  if (typeof DEMO_STATE !== 'undefined') {
    DEMO_STATE.completions.filter(c => c.passed && c.certId).forEach(c => {
      const exists = CERT_DATA.certificates.find(x => x.id === c.certId);
      if (!exists) {
        const expDate = new Date(c.dateISO);
        expDate.setFullYear(expDate.getFullYear() + 1);
        CERT_DATA.certificates.unshift({
          id: c.certId,
          user: DEMO_STATE.user.name,
          email: DEMO_STATE.user.email,
          course: c.courseName,
          category: 'Cybersecurity',
          dept: DEMO_STATE.user.dept,
          date: c.dateISO,
          expires: expDate.toISOString().split('T')[0],
          lang: 'pt', score: c.score, status: 'valid',
          country: DEMO_STATE.user.country,
          duration: '6h', issuer: 'Brandvakt Academy', isDemo: true,
        });
      }
    });
  }

  const total   = CERT_DATA.certificates.length;
  const valid   = CERT_DATA.certificates.filter(c=>c.status==='valid').length;
  const expiring= CERT_DATA.certificates.filter(c=>c.status==='expiring').length;
  const expired = CERT_DATA.certificates.filter(c=>c.status==='expired').length;
  const avgScore= Math.round(CERT_DATA.certificates.reduce((s,c)=>s+c.score,0)/total);

  return `
<div id="cert-module" style="display:flex;flex-direction:column;gap:0">

  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em">🏆 Certificados Digitais</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px">Emitidos automaticamente ao concluir treinamentos · Autenticação com QR Code</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certOpenValidate()">🔍 Validar Certificado</button>
      <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="showToast&&showToast('Exportando PDF...','info');setTimeout(()=>showToast&&showToast('PDF exportado!','success'),1500)">⬇ Exportar</button>
      <button class="cert-btn cert-btn-gold cert-btn-sm" onclick="certOpenIssue()">+ Emitir Certificado</button>
    </div>
  </div>

  <!-- KPIs -->
  <div class="cert-kpi-grid">
    <div class="cert-kpi">
      <div class="cert-kpi-icon">🏅</div>
      <div class="cert-kpi-val" style="color:var(--cert-teal)">${total}</div>
      <div class="cert-kpi-lbl">Total Emitidos</div>
      <div class="cert-kpi-sub" style="color:#22c55e">↑ +28 este mês</div>
    </div>
    <div class="cert-kpi">
      <div class="cert-kpi-icon">✅</div>
      <div class="cert-kpi-val" style="color:#22c55e">${valid}</div>
      <div class="cert-kpi-lbl">Válidos</div>
      <div class="cert-kpi-sub" style="color:#6b7280">${Math.round(valid/total*100)}% do total</div>
    </div>
    <div class="cert-kpi">
      <div class="cert-kpi-icon">⚠️</div>
      <div class="cert-kpi-val" style="color:#f59e0b">${expiring}</div>
      <div class="cert-kpi-lbl">Vencendo em 90d</div>
      <div class="cert-kpi-sub" style="color:#f59e0b">Renovação urgente</div>
    </div>
    <div class="cert-kpi">
      <div class="cert-kpi-icon">❌</div>
      <div class="cert-kpi-val" style="color:#ef4444">${expired}</div>
      <div class="cert-kpi-lbl">Expirados</div>
      <div class="cert-kpi-sub" style="color:#ef4444">Renovar agora</div>
    </div>
    <div class="cert-kpi">
      <div class="cert-kpi-icon">🎯</div>
      <div class="cert-kpi-val" style="color:${avgScore>=90?'#22c55e':avgScore>=70?'#f59e0b':'#ef4444'}">${avgScore}</div>
      <div class="cert-kpi-lbl">Nota Média</div>
      <div class="cert-kpi-sub" style="color:#6b7280">de 100 pontos</div>
    </div>
    <div class="cert-kpi">
      <div class="cert-kpi-icon">🌍</div>
      <div class="cert-kpi-val" style="color:#ec4899">4</div>
      <div class="cert-kpi-lbl">Idiomas</div>
      <div class="cert-kpi-sub" style="color:#6b7280">PT · EN · ES · FR</div>
    </div>
  </div>

  <!-- Tab bar -->
  <div class="cert-tabs">
    <button class="cert-tab${CERT_STATE.tab==='lista'?' active':''}"    data-ctab="lista"    onclick="certTab('lista')">📋 Lista</button>
    <button class="cert-tab${CERT_STATE.tab==='gallery'?' active':''}"  data-ctab="gallery"  onclick="certTab('gallery')">🖼 Galeria Visual</button>
    <button class="cert-tab${CERT_STATE.tab==='analytics'?' active':''}" data-ctab="analytics" onclick="certTab('analytics')">📊 Analytics</button>
    <button class="cert-tab${CERT_STATE.tab==='validate'?' active':''}" data-ctab="validate" onclick="certTab('validate')">🔍 Validar</button>
  </div>

  <!-- Tab content -->
  <div id="cert-body">${renderCertTab(CERT_STATE.tab)}</div>

  <!-- Modals container -->
  <div id="cert-modals"></div>
</div>`;
};

window.initPage_certificates = function() {
  // Animate progress bars after render
  setTimeout(() => {
    document.querySelectorAll('.cert-stat-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.8s ease'; el.style.width = w; });
    });
  }, 100);
};

// ── Tab switcher ──────────────────────────────────────────────
window.certTab = function(tab) {
  CERT_STATE.tab = tab;
  document.querySelectorAll('.cert-tab').forEach(b => b.classList.toggle('active', b.dataset.ctab === tab));
  const body = document.getElementById('cert-body');
  if (!body) return;
  body.style.opacity = '0';
  body.innerHTML = renderCertTab(tab);
  requestAnimationFrame(() => { body.style.transition = 'opacity 0.22s'; body.style.opacity = '1'; });
  setTimeout(() => {
    document.querySelectorAll('.cert-stat-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.8s ease'; el.style.width = w; });
    });
  }, 80);
};

function renderCertTab(tab) {
  if (tab === 'lista')     return renderCertLista();
  if (tab === 'gallery')   return renderCertGallery();
  if (tab === 'analytics') return renderCertAnalytics();
  if (tab === 'validate')  return renderCertValidate();
  return renderCertLista();
}

// ══════════════════════════════════════════════════════════════
//  LISTA
// ══════════════════════════════════════════════════════════════
function renderCertLista() {
  const data = getFilteredCerts();

  // Depts from ALL registered tenant users (not just certs) — ensures Diretoria always appears
  const tenantUsers = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
  const depts = [...new Set(tenantUsers.map(u => u.dept))].filter(Boolean).sort();

  // Users in the selected dept (for sub-filter)
  const usersInDept = CERT_STATE.filterDept
    ? tenantUsers.filter(u => u.dept === CERT_STATE.filterDept).map(u => u.name).sort()
    : [];

  return `
  <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px">
    <input class="cert-input" id="cert-search" placeholder="🔍 Buscar certificado, usuário ou ID..." style="flex:1;min-width:200px;max-width:360px" oninput="certFilter()" value="${CERT_STATE.search}">
    <select class="cert-select" id="cert-fstatus" onchange="certFilter()">
      <option value="">Todos os status</option>
      <option value="valid"   ${CERT_STATE.filterStatus==='valid'   ?'selected':''}>✅ Válidos</option>
      <option value="expiring"${CERT_STATE.filterStatus==='expiring'?'selected':''}>⚠️ Vencendo</option>
      <option value="expired" ${CERT_STATE.filterStatus==='expired' ?'selected':''}>❌ Expirados</option>
    </select>
    <select class="cert-select" id="cert-fcat" onchange="certFilter()">
      <option value="">Todas as categorias</option>
      ${[...new Set(CERT_DATA.certificates.map(c=>c.category))].sort().map(c=>`<option value="${c}"${CERT_STATE.filterCategory===c?' selected':''}>${c}</option>`).join('')}
    </select>
    <select class="cert-select" id="cert-fdept" onchange="certDeptChanged()">
      <option value="">Todos os dept.</option>
      ${depts.map(d=>`<option value="${d}"${CERT_STATE.filterDept===d?' selected':''}>${d}</option>`).join('')}
    </select>
    <!-- Sub-filtro de usuário — só aparece quando um dept está selecionado -->
    <select class="cert-select" id="cert-fuser" onchange="certFilter()"
      style="display:${CERT_STATE.filterDept?'block':'none'};min-width:160px">
      <option value="">Todos os usuários</option>
      ${usersInDept.map(u=>`<option value="${u}"${CERT_STATE.filterUser===u?' selected':''}>${u}</option>`).join('')}
    </select>
    <span id="cert-count" style="font-size:0.78rem;color:#6b7280;white-space:nowrap;min-width:90px">${data.length} certificado${data.length!==1?'s':''}</span>
  </div>
  <!-- Active filter chips -->
  <div id="cert-filter-chips" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:${(CERT_STATE.filterDept||CERT_STATE.filterStatus||CERT_STATE.filterCategory||CERT_STATE.search||CERT_STATE.filterUser)?'10px':'0'}">
    ${CERT_STATE.filterDept     ? `<span class="cert-chip">Dept: <b>${CERT_STATE.filterDept}</b> <a onclick="document.getElementById('cert-fdept').value='';certDeptChanged()" style="cursor:pointer;margin-left:4px">✕</a></span>` : ''}
    ${CERT_STATE.filterUser     ? `<span class="cert-chip">Usuário: <b>${CERT_STATE.filterUser}</b> <a onclick="document.getElementById('cert-fuser').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>` : ''}
    ${CERT_STATE.filterStatus   ? `<span class="cert-chip">Status: <b>${{valid:'Válido',expiring:'Vencendo',expired:'Expirado'}[CERT_STATE.filterStatus]}</b> <a onclick="document.getElementById('cert-fstatus').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>` : ''}
    ${CERT_STATE.filterCategory ? `<span class="cert-chip">Cat: <b>${CERT_STATE.filterCategory}</b> <a onclick="document.getElementById('cert-fcat').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>` : ''}
    ${CERT_STATE.search         ? `<span class="cert-chip">Busca: <b>"${CERT_STATE.search}"</b> <a onclick="document.getElementById('cert-search').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>` : ''}
  </div>

  <!-- Bulk actions -->
  <div id="cert-bulk-bar" style="display:none;padding:10px 14px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.20);border-radius:10px;margin-bottom:12px;align-items:center;gap:10px">
    <span id="cert-bulk-count" style="font-size:0.82rem;font-weight:600;color:#f59e0b"></span>
    <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certBulkExport()">⬇ Exportar Selecionados</button>
    <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certBulkNotify()">🔔 Notificar para Renovar</button>
    <button class="cert-btn cert-btn-ghost cert-btn-sm" style="margin-left:auto" onclick="certClearSelection()">✕ Limpar</button>
  </div>

  <div class="cert-card" style="padding:0;overflow:hidden">
    <div style="overflow-x:auto">
    <table class="cert-table">
      <thead><tr>
        <th style="width:32px"><input type="checkbox" id="cert-chk-all" onchange="certToggleAll(this)" style="accent-color:var(--cert-gold)"></th>
        <th onclick="certSort('id')">ID ${sortArrow('id')}</th>
        <th onclick="certSort('user')">Usuário ${sortArrow('user')}</th>
        <th onclick="certSort('course')">Curso / Certificação ${sortArrow('course')}</th>
        <th onclick="certSort('category')">Categoria ${sortArrow('category')}</th>
        <th onclick="certSort('score')">Nota ${sortArrow('score')}</th>
        <th onclick="certSort('date')">Emitido ${sortArrow('date')}</th>
        <th onclick="certSort('expires')">Validade ${sortArrow('expires')}</th>
        <th onclick="certSort('status')">Status ${sortArrow('status')}</th>
        <th>Ações</th>
      </tr></thead>
      <tbody id="cert-tbody">
        ${data.map(c => certRow(c)).join('')}
      </tbody>
    </table>
    </div>
  </div>`;
}

function sortArrow(col) {
  if (CERT_STATE.sortCol !== col) return '<span style="opacity:0.3">↕</span>';
  return CERT_STATE.sortDir === 'asc' ? '↑' : '↓';
}

function certRow(c) {
  const days = daysUntil(c.expires);
  const daysLabel = days < 0 ? `Expirado há ${Math.abs(days)}d` : days < 90 ? `${days}d restantes` : fmtDate(c.expires);
  const daysColor = days < 0 ? '#ef4444' : days < 30 ? '#ef4444' : days < 90 ? '#f59e0b' : '#6b7280';
  return `<tr onclick="certOpenPreview('${c.id}')" style="cursor:pointer">
    <td onclick="event.stopPropagation()">
      <input type="checkbox" class="cert-row-chk" data-id="${c.id}" onchange="certToggleRow(this)" style="accent-color:var(--cert-gold)">
    </td>
    <td><span style="font-family:monospace;font-size:0.72rem;color:#6b7280">${c.id}</span></td>
    <td>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;color:#fff;flex-shrink:0">${c.user.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        <div>
          <div style="font-weight:600;font-size:0.84rem">${c.user}</div>
          <div style="font-size:0.70rem;color:#6b7280">${c.dept}</div>
        </div>
      </div>
    </td>
    <td>
      <div style="font-weight:600;font-size:0.83rem;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.course}</div>
      <div style="font-size:0.68rem;color:#6b7280;margin-top:2px">⏱ ${c.duration} · ${cLangFlag[c.lang]||'🌐'}</div>
    </td>
    <td>
      <span style="font-size:0.72rem;padding:3px 8px;border-radius:6px;background:rgba(255,255,255,0.06);color:#94a3b8">${c.category}</span>
    </td>
    <td>${scoreRing(c.score,44)}</td>
    <td style="font-size:0.78rem;color:#94a3b8">${fmtDate(c.date)}</td>
    <td style="font-size:0.78rem;color:${daysColor}">${daysLabel}</td>
    <td>${cBadge(c.status)}</td>
    <td onclick="event.stopPropagation()">
      <div style="display:flex;gap:4px">
        <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certOpenPreview('${c.id}')" title="Visualizar">👁</button>
        <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certDownload('${c.id}')" title="Baixar">⬇</button>
        <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certShare('${c.id}')" title="Compartilhar">🔗</button>
      </div>
    </td>
  </tr>`;
}

// ── Called when dept changes: rebuild user sub-filter ─────────
window.certDeptChanged = function() {
  CERT_STATE.filterDept = document.getElementById('cert-fdept')?.value || '';
  CERT_STATE.filterUser = ''; // reset user sub-filter when dept changes

  const userSel = document.getElementById('cert-fuser');
  if (userSel) {
    const tenantUsers = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
    const usersInDept = CERT_STATE.filterDept
      ? tenantUsers.filter(u => u.dept === CERT_STATE.filterDept).map(u => u.name).sort()
      : [];
    userSel.style.display = CERT_STATE.filterDept ? 'block' : 'none';
    userSel.innerHTML = `<option value="">Todos os usuários</option>`
      + usersInDept.map(u => `<option value="${u}">${u}</option>`).join('');
  }
  certFilter();
};

window.certFilter = function() {
  // Read all filter values from DOM
  CERT_STATE.search         = document.getElementById('cert-search')?.value?.trim()  || '';
  CERT_STATE.filterStatus   = document.getElementById('cert-fstatus')?.value || '';
  CERT_STATE.filterCategory = document.getElementById('cert-fcat')?.value    || '';
  CERT_STATE.filterDept     = document.getElementById('cert-fdept')?.value   || '';
  CERT_STATE.filterUser     = document.getElementById('cert-fuser')?.value   || '';

  try {
    const filtered = getFilteredCerts();

    // ── Update table body ──────────────────────────────────
    const tbody = document.getElementById('cert-tbody');
    if (tbody) {
      tbody.innerHTML = filtered.length
        ? filtered.map(c => certRow(c)).join('')
        : `<tr><td colspan="10" style="text-align:center;padding:32px;color:#6b7280">
            Nenhum certificado encontrado para os filtros selecionados.
            <br><button class="cert-btn cert-btn-ghost" style="margin-top:10px;font-size:.78rem" onclick="certClearFilters()">✕ Limpar filtros</button>
           </td></tr>`;
    }

    // ── Update counter ─────────────────────────────────────
    const countEl = document.getElementById('cert-count');
    if (countEl) {
      const total = CERT_DATA.certificates.length;
      const n     = filtered.length;
      const isFiltered = CERT_STATE.search || CERT_STATE.filterStatus || CERT_STATE.filterCategory || CERT_STATE.filterDept;
      countEl.innerHTML = isFiltered
        ? `<span style="color:#00d4ff;font-weight:700">${n}</span> de ${total} certificado${total!==1?'s':''}`
        : `${n} certificado${n!==1?'s':''}`;
    }

    // ── Active filter chips ────────────────────────────────
    const chipsEl = document.getElementById('cert-filter-chips');
    if (chipsEl) {
      const chips = [];
      if (CERT_STATE.filterDept)     chips.push(`<span class="cert-chip">🏢 Dept: <b>${CERT_STATE.filterDept}</b> <a onclick="document.getElementById('cert-fdept').value='';certDeptChanged()" style="cursor:pointer;margin-left:4px">✕</a></span>`);
      if (CERT_STATE.filterUser)     chips.push(`<span class="cert-chip">👤 Usuário: <b>${CERT_STATE.filterUser}</b> <a onclick="document.getElementById('cert-fuser').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>`);
      if (CERT_STATE.filterStatus)   chips.push(`<span class="cert-chip">Status: <b>${{valid:'Válido',expiring:'Vencendo',expired:'Expirado'}[CERT_STATE.filterStatus]}</b> <a onclick="document.getElementById('cert-fstatus').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>`);
      if (CERT_STATE.filterCategory) chips.push(`<span class="cert-chip">Cat: <b>${CERT_STATE.filterCategory}</b> <a onclick="document.getElementById('cert-fcat').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>`);
      if (CERT_STATE.search)         chips.push(`<span class="cert-chip">🔍 Busca: <b>"${CERT_STATE.search}"</b> <a onclick="document.getElementById('cert-search').value='';certFilter()" style="cursor:pointer;margin-left:4px">✕</a></span>`);
      chipsEl.innerHTML = chips.length ? chips.join('') + `<a onclick="certClearFilters()" style="font-size:.70rem;color:var(--cert-gold);cursor:pointer;margin-left:8px">✕ Limpar tudo</a>` : '';
    }
  } catch(e) {
    console.error('certFilter error:', e);
  }
};

window.certClearFilters = function() {
  CERT_STATE.search = ''; CERT_STATE.filterStatus = ''; CERT_STATE.filterCategory = '';
  CERT_STATE.filterDept = ''; CERT_STATE.filterUser = '';
  const s = document.getElementById('cert-search');   if(s) s.value = '';
  const d = document.getElementById('cert-fdept');    if(d) d.value = '';
  const u = document.getElementById('cert-fuser');    if(u) { u.value = ''; u.style.display = 'none'; }
  const st= document.getElementById('cert-fstatus');  if(st) st.value = '';
  const ct= document.getElementById('cert-fcat');     if(ct) ct.value = '';
  certFilter();
};

window.certSort = function(col) {
  if (CERT_STATE.sortCol === col) CERT_STATE.sortDir = CERT_STATE.sortDir==='asc'?'desc':'asc';
  else { CERT_STATE.sortCol = col; CERT_STATE.sortDir = 'desc'; }
  const tbody = document.getElementById('cert-tbody');
  if (tbody) tbody.innerHTML = getFilteredCerts().map(c=>certRow(c)).join('');
};

// Selection
window.certToggleAll = function(cb) {
  document.querySelectorAll('.cert-row-chk').forEach(c => { c.checked = cb.checked; cb.checked ? CERT_STATE.selected.add(c.dataset.id) : CERT_STATE.selected.delete(c.dataset.id); });
  certUpdateBulkBar();
};
window.certToggleRow = function(cb) {
  cb.checked ? CERT_STATE.selected.add(cb.dataset.id) : CERT_STATE.selected.delete(cb.dataset.id);
  certUpdateBulkBar();
};
window.certClearSelection = function() {
  CERT_STATE.selected.clear();
  document.querySelectorAll('.cert-row-chk').forEach(c=>c.checked=false);
  const all = document.getElementById('cert-chk-all'); if(all) all.checked=false;
  certUpdateBulkBar();
};
function certUpdateBulkBar() {
  const bar = document.getElementById('cert-bulk-bar');
  const cnt = document.getElementById('cert-bulk-count');
  if (!bar) return;
  const n = CERT_STATE.selected.size;
  bar.style.display = n > 0 ? 'flex' : 'none';
  if (cnt) cnt.textContent = `${n} certificado${n>1?'s':''} selecionado${n>1?'s':''}`;
}
window.certBulkExport = function() { showToast&&showToast(`Exportando ${CERT_STATE.selected.size} certificados...`,'info'); setTimeout(()=>showToast&&showToast('Exportados com sucesso!','success'),1500); };
window.certBulkNotify = function() { showToast&&showToast(`Notificação enviada para ${CERT_STATE.selected.size} usuários`,'success'); };
window.certDownload   = function(id) { showToast&&showToast('Baixando certificado PDF...','info'); setTimeout(()=>showToast&&showToast('PDF baixado!','success'),1200); };
window.certShare      = function(id) { showToast&&showToast('Link copiado para a área de transferência!','success'); };

// ══════════════════════════════════════════════════════════════
//  GALERIA VISUAL
// ══════════════════════════════════════════════════════════════
function renderCertGallery() {
  // Garantir dados da empresa ativa
  rebuildCertsFromTenant();

  const allCerts = CERT_DATA.certificates;
  const tenantUsers = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];

  // Estado de filtro da galeria
  if (!window._cgFilter) window._cgFilter = { status:'valid', dept:'' };
  const f = window._cgFilter;

  // Departamentos disponíveis nos certs
  const depts = [...new Set(allCerts.map(c=>c.dept).filter(Boolean))].sort();

  // Dados filtrados
  let data = allCerts;
  if (f.status) data = data.filter(c => c.status === f.status);
  if (f.dept)   data = data.filter(c => c.dept === f.dept);

  // KPIs rápidos da galeria
  const total   = allCerts.length;
  const validos = allCerts.filter(c=>c.status==='valid').length;
  const expiring= allCerts.filter(c=>c.status==='expiring').length;
  const expired = allCerts.filter(c=>c.status==='expired').length;

  const deptColorMap = {'Diretoria':'#8b5cf6','TI':'#00d4ff','RH':'#22c55e','Financeiro':'#f59e0b','Jurídico':'#f97316','Operações':'#06b6d4','Comercial':'#ec4899','Marketing':'#a78bfa'};

  return `
  <!-- Mini KPIs -->
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px">
    ${[
      ['🏆','Total de Certificados', total, '#f59e0b'],
      ['✅','Válidos',   validos,  '#22c55e'],
      ['⚠️','A Vencer',  expiring, '#f59e0b'],
      ['❌','Expirados', expired,  '#ef4444'],
    ].map(([icon,label,val,col])=>`
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px 18px;display:flex;align-items:center;gap:10px;flex:1;min-width:130px">
        <span style="font-size:1.3rem">${icon}</span>
        <div>
          <div style="font-size:1.3rem;font-weight:800;color:${col};line-height:1">${val}</div>
          <div style="font-size:0.65rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em">${label}</div>
        </div>
      </div>`).join('')}
  </div>

  <!-- Filtros da galeria -->
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:18px">
    <div style="display:flex;gap:4px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:4px">
      ${['valid','expiring','expired',''].map((s,i)=>{
        const labels = ['✅ Válidos','⚠️ A Vencer','❌ Expirados','🏆 Todos'];
        return `<button onclick="window._cgFilter.status='${s}';certTab('gallery')"
          style="padding:6px 14px;border-radius:7px;border:none;font-size:0.76rem;font-weight:600;cursor:pointer;font-family:inherit;transition:all 0.15s;background:${f.status===s?'rgba(245,158,11,0.18)':'transparent'};color:${f.status===s?'#f59e0b':'#6b7280'}">${labels[i]}</button>`;
      }).join('')}
    </div>
    <select onchange="window._cgFilter.dept=this.value;certTab('gallery')"
      style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:9px;padding:7px 12px;color:#f1f5f9;font-size:0.82rem;font-family:inherit;outline:none">
      <option value="">Todos os departamentos</option>
      ${depts.map(d=>`<option value="${d}" ${f.dept===d?'selected':''}>${d}</option>`).join('')}
    </select>
    <span style="font-size:0.75rem;color:#6b7280;margin-left:auto">${data.length} certificado${data.length!==1?'s':''} · ${tenantUsers.length} usuário${tenantUsers.length!==1?'s':''}</span>
  </div>

  <!-- Cards da galeria -->
  ${data.length === 0 ? `<div style="text-align:center;padding:60px;color:#6b7280;font-size:0.90rem">Nenhum certificado encontrado com os filtros selecionados.</div>` : ''}
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px">
    ${data.map(c => {
      const deptCol = deptColorMap[c.dept] || '#6b7280';
      return `
      <div class="cert-card-visual" style="cursor:pointer;transition:transform 0.22s" onclick="certOpenPreview('${c.id}')"
        onmouseenter="this.style.transform='translateY(-4px)'" onmouseleave="this.style.transform=''">

        <!-- Dept badge top-left -->
        <div style="position:absolute;top:12px;left:12px;font-size:0.60rem;font-weight:700;padding:2px 8px;border-radius:99px;background:${deptCol}22;color:${deptCol};border:1px solid ${deptCol}44;z-index:2">${c.dept||''}</div>

        <!-- Language flag top-right -->
        <div style="position:absolute;top:12px;right:12px;font-size:1rem;z-index:2">${cLangFlag[c.lang]||'🌐'}</div>

        <!-- Header bar -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;margin-top:18px;position:relative;z-index:1">
          <div class="cert-seal">🏆</div>
          <div>
            <div style="font-size:0.56rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#f59e0b;margin-bottom:3px">CERTIFICADO DE CONCLUSÃO</div>
            <div style="font-size:0.64rem;color:rgba(255,255,255,0.45);font-family:monospace">${c.id}</div>
          </div>
          <div style="margin-left:auto">${cBadge(c.status)}</div>
        </div>

        <!-- User & Course -->
        <div style="font-size:0.66rem;color:rgba(255,255,255,0.45);margin-bottom:5px;position:relative;z-index:1">Certificamos que</div>
        <div style="font-family:Georgia,serif;font-size:1.02rem;font-weight:700;color:#fff;margin-bottom:4px;position:relative;z-index:1">${c.user}</div>
        <div style="font-size:0.66rem;color:rgba(255,255,255,0.50);margin-bottom:10px;position:relative;z-index:1">concluiu com êxito o treinamento</div>
        <div style="font-size:0.85rem;font-weight:700;color:#fbbf24;margin-bottom:14px;position:relative;z-index:1;line-height:1.3">«${c.course}»</div>

        <!-- Divider -->
        <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(245,158,11,0.35),transparent);margin-bottom:12px;position:relative;z-index:1"></div>

        <!-- Footer -->
        <div style="display:flex;align-items:center;justify-content:space-between;position:relative;z-index:1">
          <div>
            <div style="font-size:0.60rem;color:rgba(255,255,255,0.40)">Emitido em</div>
            <div style="font-size:0.70rem;font-weight:600;color:rgba(255,255,255,0.70)">${fmtDate(c.date)}</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:1.2rem;font-weight:900;color:${c.score>=90?'#22c55e':c.score>=70?'#f59e0b':'#ef4444'}">${c.score}</div>
            <div style="font-size:0.56rem;color:rgba(255,255,255,0.40)">NOTA</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:0.60rem;color:rgba(255,255,255,0.40)">Válido até</div>
            <div style="font-size:0.70rem;font-weight:600;color:${c.status==='expired'?'#ef4444':c.status==='expiring'?'#f59e0b':'rgba(255,255,255,0.70)'}">${fmtDate(c.expires)}</div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  ANALYTICS
// ══════════════════════════════════════════════════════════════
function renderCertAnalytics() {
  const byMonth = [
    { m:'Out/24', n:42 },{ m:'Nov/24', n:58 },{ m:'Dez/24', n:35 },
    { m:'Jan/25', n:67 },{ m:'Fev/25', n:54 },{ m:'Mar/25', n:28 },
  ];
  const maxN = Math.max(...byMonth.map(m=>m.n));

  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">

    <!-- Emissões mensais -->
    <div class="cert-card">
      <div class="cert-sh-title" style="margin-bottom:16px;font-size:0.80rem;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">📅 Emissões Mensais</div>
      <div style="display:flex;align-items:flex-end;gap:8px;height:140px">
        ${byMonth.map(m=>`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;height:100%">
            <div style="flex:1;display:flex;align-items:flex-end;width:100%">
              <div class="cert-stat-fill" style="width:100%;height:${Math.round(m.n/maxN*100)}%;background:linear-gradient(180deg,#f59e0b,#b45309);border-radius:5px 5px 0 0"></div>
            </div>
            <div style="font-size:0.68rem;color:#6b7280;white-space:nowrap">${m.m}</div>
            <div style="font-size:0.72rem;font-weight:700;color:#f59e0b">${m.n}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Por categoria -->
    <div class="cert-card">
      <div class="cert-sh-title" style="margin-bottom:16px;font-size:0.80rem;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">📂 Por Categoria</div>
      ${CERT_DATA.stats_by_category.map(cat=>`
        <div style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:5px">
            <span style="font-weight:500">${cat.name}</span>
            <span style="font-weight:700;color:${cat.color}">${cat.count}</span>
          </div>
          <div class="cert-stat-bar">
            <div class="cert-stat-fill" style="width:${Math.round(cat.count/15*100)}%;background:${cat.color}"></div>
          </div>
        </div>`).join('')}
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">

    <!-- Top issuers -->
    <div class="cert-card">
      <div class="cert-sh-title" style="margin-bottom:16px;font-size:0.80rem;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">🏛 Emissores</div>
      ${CERT_DATA.top_issuers.map(iss=>`
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
          <div style="flex:1">
            <div style="font-size:0.82rem;font-weight:500;margin-bottom:4px">${iss.name}</div>
            <div class="cert-stat-bar">
              <div class="cert-stat-fill" style="width:${iss.pct}%;background:linear-gradient(90deg,#f59e0b,#fbbf24)"></div>
            </div>
          </div>
          <div style="text-align:right;min-width:40px">
            <div style="font-size:0.88rem;font-weight:700;color:#f59e0b">${iss.count}</div>
            <div style="font-size:0.65rem;color:#6b7280">${iss.pct}%</div>
          </div>
        </div>`).join('')}
    </div>

    <!-- Score distribution -->
    <div class="cert-card">
      <div class="cert-sh-title" style="margin-bottom:16px;font-size:0.80rem;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">🎯 Distribuição de Notas</div>
      ${[
        ['90–100', CERT_DATA.certificates.filter(c=>c.score>=90).length, '#22c55e'],
        ['80–89',  CERT_DATA.certificates.filter(c=>c.score>=80&&c.score<90).length, '#f59e0b'],
        ['70–79',  CERT_DATA.certificates.filter(c=>c.score>=70&&c.score<80).length, '#f97316'],
        ['< 70',   CERT_DATA.certificates.filter(c=>c.score<70).length, '#ef4444'],
      ].map(([range,count,color])=>`
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <span style="font-size:0.78rem;font-weight:600;min-width:60px;color:${color}">${range}</span>
          <div style="flex:1" class="cert-stat-bar">
            <div class="cert-stat-fill" style="width:${Math.round(count/15*100)}%;background:${color}"></div>
          </div>
          <span style="font-size:0.78rem;font-weight:700;color:${color};min-width:20px;text-align:right">${count}</span>
        </div>`).join('')}
      <div style="margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.06)">
        <div style="display:flex;justify-content:space-between;font-size:0.78rem">
          <span style="color:#6b7280">Nota média geral</span>
          <span style="font-weight:800;color:#f59e0b;font-size:1rem">${Math.round(CERT_DATA.certificates.reduce((s,c)=>s+c.score,0)/CERT_DATA.certificates.length)}/100</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Per-user table -->
  <div class="cert-card" style="margin-top:16px">
    <div class="cert-sh-title" style="margin-bottom:16px;font-size:0.80rem;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">👤 Certificados por Usuário</div>
    <table class="cert-table">
      <thead><tr><th>Usuário</th><th>Departamento</th><th>Certificados</th><th>Nota Média</th><th>Último</th><th>Status</th></tr></thead>
      <tbody>
        ${Object.entries(
          CERT_DATA.certificates.reduce((acc,c)=>{
            if(!acc[c.user]) acc[c.user]={user:c.user,dept:c.dept,certs:[],lastDate:c.date,status:c.status};
            acc[c.user].certs.push(c);
            if(c.date>acc[c.user].lastDate) acc[c.user].lastDate=c.date;
            if(c.status==='expired') acc[c.user].status='expired';
            else if(c.status==='expiring'&&acc[c.user].status!=='expired') acc[c.user].status='expiring';
            return acc;
          },{})
        ).sort((a,b)=>b[1].certs.length-a[1].certs.length).slice(0,8).map(([,u])=>{
          const avg=Math.round(u.certs.reduce((s,c)=>s+c.score,0)/u.certs.length);
          return `<tr>
            <td style="font-weight:600">${u.user}</td>
            <td style="color:#6b7280">${u.dept}</td>
            <td><span style="font-size:1rem;font-weight:800;color:var(--cert-teal)">${u.certs.length}</span></td>
            <td>${scoreRing(avg,40)}</td>
            <td style="font-size:0.78rem;color:#6b7280">${fmtDate(u.lastDate)}</td>
            <td>${cBadge(u.status)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  VALIDAR
// ══════════════════════════════════════════════════════════════
function renderCertValidate() {
  return `
  <div style="max-width:540px;margin:0 auto;text-align:center;padding:40px 20px">
    <div style="font-size:3rem;margin-bottom:16px">🔍</div>
    <h3 style="font-size:1.2rem;font-weight:800;margin-bottom:8px">Validar Autenticidade do Certificado</h3>
    <p style="font-size:0.84rem;color:#6b7280;margin-bottom:32px;line-height:1.6">
      Insira o ID único do certificado para verificar sua autenticidade.<br>
      O sistema confirma em tempo real se o certificado é válido e foi emitido pela Brandvakt Academy.
    </p>

    <div style="display:flex;gap:10px;margin-bottom:24px">
      <input class="cert-input" id="cert-val-input" style="flex:1;font-family:monospace;font-size:0.88rem" placeholder="BVA-2025-000000" value="" oninput="certValidateInput(this)">
      <button class="cert-btn cert-btn-gold" onclick="certRunValidate()">Verificar</button>
    </div>

    <div id="cert-val-result" style="display:none"></div>

    <div style="margin-top:32px;padding:18px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;text-align:left">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:10px">IDs disponíveis para teste</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${CERT_DATA.certificates.slice(0,6).map(c=>`
          <button onclick="document.getElementById('cert-val-input').value='${c.id}';certRunValidate()" style="font-family:monospace;font-size:0.68rem;padding:4px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:#94a3b8;cursor:pointer">${c.id}</button>`).join('')}
      </div>
    </div>
  </div>`;
}

window.certValidateInput = function(inp) { inp.value = inp.value.toUpperCase().replace(/[^A-Z0-9-]/g,''); };
window.certRunValidate = function() {
  const val   = document.getElementById('cert-val-input')?.value.trim();
  const res   = document.getElementById('cert-val-result');
  if (!val || !res) return;
  const cert  = CERT_DATA.certificates.find(c=>c.id===val);
  res.style.display = 'block';

  if (!cert) {
    res.innerHTML = `
      <div style="padding:20px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);border-radius:12px">
        <div style="font-size:1.5rem;margin-bottom:10px">❌</div>
        <div style="font-weight:700;color:#ef4444;margin-bottom:6px">Certificado não encontrado</div>
        <div style="font-size:0.82rem;color:#6b7280">O ID <strong style="font-family:monospace">${val}</strong> não corresponde a nenhum certificado emitido.</div>
      </div>`;
    return;
  }

  const color = cStatusColor[cert.status];
  const days  = daysUntil(cert.expires);
  res.innerHTML = `
    <div style="padding:22px;background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.20);border-radius:14px;text-align:left">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
        <div style="font-size:1.6rem">✅</div>
        <div>
          <div style="font-weight:800;color:#22c55e;font-size:1rem">Certificado Verificado e Autêntico</div>
          <div style="font-size:0.72rem;color:#6b7280;font-family:monospace">${cert.id}</div>
        </div>
        <div style="margin-left:auto">${cBadge(cert.status)}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:0.82rem">
        ${[
          ['Titular',    cert.user],
          ['Curso',      cert.course],
          ['Categoria',  cert.category],
          ['Departamento',cert.dept],
          ['Emitido',    fmtDate(cert.date)],
          ['Válido até', fmtDate(cert.expires)],
          ['Nota',       cert.score+'/100'],
          ['Idioma',     (cLangFlag[cert.lang]||'🌐')+' '+cert.lang.toUpperCase()],
          ['Emissor',    cert.issuer],
          ['Duração',    cert.duration],
        ].map(([k,v])=>`<div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px 12px"><div style="font-size:0.65rem;color:#6b7280;margin-bottom:3px">${k}</div><div style="font-weight:600">${v}</div></div>`).join('')}
      </div>
      <div style="margin-top:14px;display:flex;gap:8px">
        <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certDownload('${cert.id}')">⬇ Baixar PDF</button>
        <button class="cert-btn cert-btn-ghost cert-btn-sm" onclick="certShare('${cert.id}')">🔗 Compartilhar</button>
        <button class="cert-btn cert-btn-gold cert-btn-sm" onclick="certOpenPreview('${cert.id}')">👁 Ver Certificado</button>
      </div>
    </div>`;
};

// ══════════════════════════════════════════════════════════════
//  CERTIFICATE PREVIEW MODAL
// ══════════════════════════════════════════════════════════════
window.certOpenPreview = function(id) {
  const c = CERT_DATA.certificates.find(x=>x.id===id);
  if (!c) return;
  const days  = daysUntil(c.expires);
  const color = cStatusColor[c.status];

  certShowModal(`
    <div class="cert-modal-hdr">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="font-size:1.5rem">🏆</div>
        <div>
          <div style="font-size:1rem;font-weight:800">Certificado Digital</div>
          <div style="font-size:0.72rem;font-family:monospace;color:#6b7280">${c.id}</div>
        </div>
      </div>
      <button class="cert-modal-close" onclick="certCloseModal()">✕</button>
    </div>

    <!-- Visual Certificate -->
    <div class="cert-card-visual" style="margin-bottom:20px">
      <div style="position:absolute;top:0;bottom:0;left:0;right:0;background:linear-gradient(135deg,rgba(245,158,11,0.04),transparent);pointer-events:none"></div>

      <!-- Brand header -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;position:relative;z-index:1">
        <div class="cert-seal">🏆</div>
        <div style="flex:1">
          <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#f59e0b">Brandvakt Academy</div>
          <div style="font-size:0.58rem;letter-spacing:0.10em;text-transform:uppercase;color:rgba(255,255,255,0.40)">Enterprise Training Platform</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:0.58rem;color:rgba(255,255,255,0.40)">PECB Authorized Partner</div>
          <div style="font-size:0.58rem;color:rgba(255,255,255,0.40)">ISO 27001 Ready</div>
        </div>
      </div>

      <div style="text-align:center;position:relative;z-index:1">
        <div style="font-size:0.62rem;color:rgba(255,255,255,0.45);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:8px">Certificado de Conclusão</div>
        <div style="font-size:0.75rem;color:rgba(255,255,255,0.55);margin-bottom:8px">Certifica-se que</div>
        <div style="font-family:Georgia,serif;font-size:1.6rem;font-weight:700;color:#fff;margin-bottom:6px;letter-spacing:-0.01em">${c.user}</div>
        <div style="font-size:0.75rem;color:rgba(255,255,255,0.55);margin-bottom:10px">${c.dept} — ${c.email}</div>
        <div style="font-size:0.75rem;color:rgba(255,255,255,0.55);margin-bottom:8px">concluiu com aprovação o treinamento</div>
        <div style="font-size:1.05rem;font-weight:800;color:#fbbf24;margin-bottom:6px">«${c.course}»</div>
        <div style="font-size:0.70rem;color:rgba(255,255,255,0.40);margin-bottom:20px">${c.category} · ${c.duration} · ${c.issuer}</div>

        <!-- Score badge -->
        <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(${c.score>=90?'34,197,94':c.score>=70?'245,158,11':'239,68,68'},0.12);border:1px solid rgba(${c.score>=90?'34,197,94':c.score>=70?'245,158,11':'239,68,68'},0.28);border-radius:99px;padding:7px 18px;margin-bottom:20px">
          <span style="font-weight:900;font-size:1.1rem;color:${c.score>=90?'#22c55e':c.score>=70?'#f59e0b':'#ef4444'}">${c.score}/100</span>
          <span style="font-size:0.68rem;color:rgba(255,255,255,0.50)">· Aprovado</span>
          <span style="font-size:1rem">${cLangFlag[c.lang]||'🌐'}</span>
        </div>
      </div>

      <!-- Footer with QR -->
      <div style="display:flex;align-items:center;justify-content:space-between;position:relative;z-index:1;border-top:1px solid rgba(245,158,11,0.15);padding-top:16px">
        <div>
          <div style="font-size:0.60rem;color:rgba(255,255,255,0.35);margin-bottom:3px">Emitido em</div>
          <div style="font-size:0.78rem;font-weight:600;color:rgba(255,255,255,0.65)">${fmtDate(c.date)}</div>
          <div style="font-size:0.60rem;color:rgba(255,255,255,0.35);margin-top:6px;margin-bottom:3px">Válido até</div>
          <div style="font-size:0.78rem;font-weight:600;color:${color}">${fmtDate(c.expires)}</div>
        </div>
        <!-- QR Code -->
        <div style="text-align:center">
          ${generateQR(c.id)}
          <div style="font-size:0.55rem;color:rgba(255,255,255,0.30);margin-top:4px">Verificar autenticidade</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:0.60rem;color:rgba(255,255,255,0.35);margin-bottom:3px">Assinatura Digital</div>
          <div style="font-size:0.68rem;color:#22c55e">✓ Verificada</div>
          <div style="font-size:0.60rem;color:rgba(255,255,255,0.35);margin-top:6px;margin-bottom:3px">Código único</div>
          <div style="font-family:monospace;font-size:0.62rem;color:rgba(255,255,255,0.45)">${c.id}</div>
        </div>
      </div>
    </div>

    <!-- Status info -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:12px">
        <div style="font-size:0.65rem;color:#6b7280;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.06em">Status</div>
        <div>${cBadge(c.status)}</div>
        ${days>0?`<div style="font-size:0.72rem;color:${color};margin-top:6px">${days} dias restantes</div>`:`<div style="font-size:0.72rem;color:#ef4444;margin-top:6px">Expirado há ${Math.abs(days)} dias</div>`}
      </div>
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:12px">
        <div style="font-size:0.65rem;color:#6b7280;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.06em">Nota Final</div>
        <div style="font-size:1.4rem;font-weight:900;color:${c.score>=90?'#22c55e':c.score>=70?'#f59e0b':'#ef4444'}">${c.score}<span style="font-size:0.7rem;color:#6b7280">/100</span></div>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="cert-btn cert-btn-ghost" style="flex:1" onclick="certCloseModal()">Fechar</button>
      <button class="cert-btn cert-btn-ghost" style="flex:1" onclick="certShare('${c.id}');certCloseModal()">🔗 Compartilhar Link</button>
      <button class="cert-btn cert-btn-gold" style="flex:1" onclick="certDownload('${c.id}');certCloseModal()">⬇ Baixar PDF</button>
    </div>
  `, 'cert-modal cert-modal-xl');
};

// ── QR Code generator (decorative CSS grid) ───────────────────
function generateQR(id) {
  // Generate a deterministic pattern from the ID
  const hash = id.split('').reduce((h,c)=>(h*31+c.charCodeAt(0))&0xFFFF,0);
  const size = 9;
  const cells = [];
  // Corners (always filled for real QR look)
  const corners=[[0,0],[0,1],[0,2],[1,0],[2,0],[1,2],[2,1],[2,2],[0,6],[0,7],[0,8],[1,6],[1,8],[2,6],[2,7],[2,8],[6,0],[7,0],[8,0],[6,2],[7,1],[8,2],[6,1],[8,1]];
  const cornerSet=new Set(corners.map(([r,c])=>`${r},${c}`));
  for(let r=0;r<size;r++) for(let c=0;c<size;c++) {
    const isCor=cornerSet.has(`${r},${c}`);
    const bit=isCor?1:((hash>>(r*size+c)%16)&1);
    cells.push(`<div class="cert-qr-cell" style="background:${bit?'#1a1a1a':'#ffffff'}"></div>`);
  }
  return `<div class="cert-qr" style="grid-template-columns:repeat(${size},6px)">${cells.join('')}</div>`;
}

// ── Validate Modal ────────────────────────────────────────────
window.certOpenValidate = function() {
  CERT_STATE.tab = 'validate';
  certTab('validate');
};

// ── Issue Modal ───────────────────────────────────────────────
window.certOpenIssue = function() {
  certShowModal(`
    <div class="cert-modal-hdr">
      <span style="font-size:1rem;font-weight:800">+ Emitir Certificado</span>
      <button class="cert-modal-close" onclick="certCloseModal()">✕</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="grid-column:1/-1">
        <label style="display:block;font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">Usuário *</label>
        <select class="cert-select" style="width:100%">
          <option>Selecionar usuário...</option>
          ${[...new Set(CERT_DATA.certificates.map(c=>c.user))].sort().map(u=>`<option>${u}</option>`).join('')}
        </select>
      </div>
      <div style="grid-column:1/-1">
        <label style="display:block;font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">Curso / Certificação *</label>
        <select class="cert-select" style="width:100%">
          <option>Selecionar certificação...</option>
          ${CERT_DATA.courses.map(c=>`<option>${c}</option>`).join('')}
        </select>
      </div>
      <div>
        <label style="display:block;font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">Nota (0–100) *</label>
        <input class="cert-input" type="number" min="0" max="100" placeholder="Ex: 92" style="width:100%">
      </div>
      <div>
        <label style="display:block;font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">Data de Conclusão</label>
        <input class="cert-input" type="date" style="width:100%" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div>
        <label style="display:block;font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">Idioma</label>
        <select class="cert-select" style="width:100%">
          <option value="pt">🇧🇷 Português</option>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>
      <div>
        <label style="display:block;font-size:0.70rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">Validade</label>
        <select class="cert-select" style="width:100%">
          <option>12 meses</option><option>24 meses</option><option>Permanente</option>
        </select>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px">
      <button class="cert-btn" style="flex:1;background:rgba(255,255,255,0.06);color:#94a3b8;border:1px solid rgba(255,255,255,0.10)" onclick="certCloseModal()">Cancelar</button>
      <button class="cert-btn cert-btn-gold" style="flex:1" onclick="certCloseModal();showToast&&showToast('🏆 Certificado emitido com sucesso!','success')">🏆 Emitir Certificado</button>
    </div>
  `);
};

// ── Modal helpers ─────────────────────────────────────────────
function certShowModal(html, cls='cert-modal') {
  certCloseModal();
  const ov=document.createElement('div'); ov.className='cert-overlay'; ov.id='cert-overlay';
  ov.addEventListener('click', e=>{ if(e.target===ov) certCloseModal(); });
  const m=document.createElement('div'); m.className=cls; m.innerHTML=html;
  ov.appendChild(m); document.body.appendChild(ov);
}
window.certCloseModal = function() { const el=document.getElementById('cert-overlay'); if(el) el.remove(); };
document.addEventListener('keydown', e=>{ if(e.key==='Escape') certCloseModal(); });

// ── Legacy riskL ─────────────────────────────────────────────
// (kept to prevent reference errors from old code)
const certL = {
  pt:{ title:'Certificados Digitais', sub:'Emitidos automaticamente', btn_export:'Exportar', btn_validate:'Validar', kpi_total:'Total', kpi_valid:'Válidos', kpi_expiring:'Vencendo', kpi_expired:'Expirados', kpi_langs:'Idiomas', table_title:'Certificados', search_ph:'Buscar...', all_status:'Todos', status_valid:'Válido', status_expiring:'Vencendo', status_expired:'Expirado', col_id:'ID', col_user:'Usuário', col_course:'Curso', col_lang:'Idioma', col_score:'Nota', col_date:'Emitido', col_expires:'Validade', col_status:'Status', col_actions:'Ações', btn_view:'Ver', btn_download:'Baixar', btn_share:'Compartilhar' },
  en:{ title:'Digital Certificates', sub:'Automatically issued', btn_export:'Export', btn_validate:'Validate', kpi_total:'Total', kpi_valid:'Valid', kpi_expiring:'Expiring', kpi_expired:'Expired', kpi_langs:'Languages', table_title:'Certificates', search_ph:'Search...', all_status:'All', status_valid:'Valid', status_expiring:'Expiring', status_expired:'Expired', col_id:'ID', col_user:'User', col_course:'Course', col_lang:'Lang', col_score:'Score', col_date:'Issued', col_expires:'Expiry', col_status:'Status', col_actions:'Actions', btn_view:'View', btn_download:'Download', btn_share:'Share' },
  es:{ title:'Certificados Digitales', sub:'Emitidos automáticamente', btn_export:'Exportar', btn_validate:'Validar', kpi_total:'Total', kpi_valid:'Válidos', kpi_expiring:'Venciendo', kpi_expired:'Expirados', kpi_langs:'Idiomas', table_title:'Certificados', search_ph:'Buscar...', all_status:'Todos', status_valid:'Válido', status_expiring:'Venciendo', status_expired:'Expirado', col_id:'ID', col_user:'Usuario', col_course:'Formación', col_lang:'Idioma', col_score:'Nota', col_date:'Emitido', col_expires:'Vence', col_status:'Estado', col_actions:'Acciones', btn_view:'Ver', btn_download:'Descargar', btn_share:'Compartir' },
  fr:{ title:'Certificats Numériques', sub:'Émis automatiquement', btn_export:'Exporter', btn_validate:'Valider', kpi_total:'Total', kpi_valid:'Valides', kpi_expiring:'Expirant', kpi_expired:'Expirés', kpi_langs:'Langues', table_title:'Certificats', search_ph:'Rechercher...', all_status:'Tous', status_valid:'Valide', status_expiring:'Expirant', status_expired:'Expiré', col_id:'ID', col_user:'Utilisateur', col_course:'Formation', col_lang:'Langue', col_score:'Note', col_date:'Émis', col_expires:'Expiration', col_status:'Statut', col_actions:'Actions', btn_view:'Voir', btn_download:'Télécharger', btn_share:'Partager' },
};
