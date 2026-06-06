// ══════════════════════════════════════════════════════════════
//  📊 RELATÓRIOS & INTELIGÊNCIA — Complete Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectReportsCSS() {
  if (document.getElementById('reports-css')) return;
  const s = document.createElement('style');
  s.id = 'reports-css';
  s.textContent = `
    /* ── Canvas wrap ── */
    .rp-canvas-wrap {
      position: relative; overflow: hidden;
      contain: layout style; transform: translateZ(0);
    }
    .rp-canvas-wrap canvas {
      position: absolute !important;
      top: 0; left: 0;
      width: 100% !important; height: 100% !important;
    }

    /* ── Tabs ── */
    .rp-tabs { display:flex; gap:4px; background:#12121a; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:5px; margin-bottom:20px; overflow-x:auto; }
    .rp-tab  { display:flex; align-items:center; gap:7px; padding:9px 18px; border-radius:10px; font-size:0.83rem; font-weight:600; cursor:pointer; color:#94a3b8; background:transparent; border:none; white-space:nowrap; transition:all 0.2s; font-family:inherit; }
    .rp-tab:hover  { color:#f1f5f9; background:rgba(255,255,255,0.04); }
    .rp-tab.active { color:#000; background:#00d4ff; box-shadow:0 4px 16px rgba(0,212,255,0.28); }

    /* ── KPI ── */
    .rp-kpi { background:#12121a; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:18px; transition:all 0.2s; cursor:pointer; }
    .rp-kpi:hover { transform:translateY(-2px); border-color:rgba(255,255,255,0.14); }
    .rp-kpi-val  { font-size:1.9rem; font-weight:800; letter-spacing:-0.04em; line-height:1; }
    .rp-kpi-lbl  { font-size:0.70rem; color:#6b7280; margin-top:5px; text-transform:uppercase; letter-spacing:0.08em; }
    .rp-kpi-delta { font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:99px; }

    /* ── Report row ── */
    .rp-row { display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.04); transition:background 0.15s; cursor:pointer; }
    .rp-row:last-child { border-bottom:none; }
    .rp-row:hover { background:rgba(255,255,255,0.02); }

    /* ── Buttons ── */
    .rp-btn { display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border-radius:9px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .rp-btn-primary { background:#00d4ff; color:#000; box-shadow:0 4px 14px rgba(0,212,255,0.28); }
    .rp-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .rp-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .rp-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#f1f5f9; }
    .rp-btn-sm { padding:6px 12px; font-size:0.76rem; border-radius:8px; }
    .rp-btn-danger { background:rgba(239,68,68,0.12); color:#ef4444; border:1px solid rgba(239,68,68,0.20); }

    /* ── Input / Select ── */
    .rp-input, .rp-select, .rp-textarea {
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10);
      border-radius:9px; padding:10px 13px; color:#f1f5f9;
      font-size:0.85rem; font-family:inherit; outline:none;
      transition:border-color 0.2s; width:100%; box-sizing:border-box;
    }
    .rp-input:focus, .rp-select:focus { border-color:#00d4ff; box-shadow:0 0 0 3px rgba(0,212,255,0.10); }
    .rp-input::placeholder { color:#6b7280; }
    .rp-select option { background:#1a1a26; }
    .rp-label { display:block; font-size:0.70rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px; }

    /* ── Card ── */
    .rp-card { background:#12121a; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px; }

    /* ── Progress ── */
    .rp-prog { height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .rp-prog-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    /* ── Modal ── */
    .rp-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.80); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .rp-modal { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:32px; width:100%; max-width:700px; max-height:90vh; overflow-y:auto; box-shadow:0 24px 80px rgba(0,0,0,0.7); animation:rpIn 0.25s ease; }
    .rp-modal-lg { max-width:900px; }
    @keyframes rpIn { from{transform:scale(0.95);opacity:0} to{transform:scale(1);opacity:1} }
    .rp-modal-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:22px; }
    .rp-modal-close { background:none; border:none; color:#6b7280; font-size:1.3rem; cursor:pointer; }
    .rp-modal-close:hover { color:#f1f5f9; }

    /* ── Insight card ── */
    .rp-insight { padding:14px 16px; border-radius:12px; border-left:3px solid; margin-bottom:10px; }

    /* ── Schedule card ── */
    .rp-sched-card { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); border-radius:12px; padding:14px 16px; display:flex; align-items:center; gap:12px; margin-bottom:10px; transition:all 0.2s; }
    .rp-sched-card:hover { background:rgba(255,255,255,0.04); }

    /* ── Export format ── */
    .rp-fmt { display:flex; flex-direction:column; align-items:center; gap:8px; padding:16px 12px; border-radius:12px; background:rgba(255,255,255,0.02); border:2px solid rgba(255,255,255,0.07); cursor:pointer; transition:all 0.2s; text-align:center; }
    .rp-fmt:hover, .rp-fmt.selected { border-color:#00d4ff; background:rgba(0,212,255,0.06); }
    .rp-fmt-icon { font-size:1.8rem; }
    .rp-fmt-name { font-size:0.78rem; font-weight:700; }
    .rp-fmt-desc { font-size:0.66rem; color:#6b7280; }

    /* ── Toggle ── */
    .rp-toggle { position:relative; width:40px; height:22px; }
    .rp-toggle input { opacity:0; width:0; height:0; }
    .rp-slider { position:absolute; inset:0; background:rgba(255,255,255,0.10); border-radius:22px; cursor:pointer; transition:0.3s; }
    .rp-slider:before { content:''; position:absolute; width:16px; height:16px; left:3px; top:3px; background:#fff; border-radius:50%; transition:0.3s; }
    .rp-toggle input:checked + .rp-slider { background:#00d4ff; }
    .rp-toggle input:checked + .rp-slider:before { transform:translateX(18px); }
  `;
  document.head.appendChild(s);
}
injectReportsCSS();

// ── State ─────────────────────────────────────────────────────
let RP = { tab: 'reports', search: '', filterType: 'all', selectedFmt: 'pdf' };

// ── Data ──────────────────────────────────────────────────────
const REPORTS_DATA = {
  kpis: [
    { icon:'📄', val:'284',   lbl:'Relatórios Gerados', delta:'+18%', up:true,  color:'#00d4ff' },
    { icon:'📤', val:'1.021', lbl:'Exportações PDF',    delta:'+34%', up:true,  color:'#22c55e' },
    { icon:'🕐', val:'12',    lbl:'Agendamentos Ativos',delta:'+3',   up:true,  color:'#8b5cf6' },
    { icon:'🔗', val:'34',    lbl:'Relatórios Compartilhados', delta:'+9', up:true, color:'#14b8a6' },
  ],

  reports: [
    { id:'r1',  name:'Compliance Score Executivo',       type:'Compliance',   category:'compliance', icon:'📋', date:'01/06/2025', size:'2.4 MB', views:47, status:'ready',    color:'#22c55e' },
    { id:'r2',  name:'Human Risk Dashboard Q2',          type:'Risco',         category:'risk',       icon:'🛡', date:'30/05/2025', size:'3.1 MB', views:32, status:'ready',    color:'#ef4444' },
    { id:'r3',  name:'Certificações por Departamento',  type:'Certificados',  category:'certs',      icon:'🏆', date:'28/05/2025', size:'1.8 MB', views:28, status:'ready',    color:'#8b5cf6' },
    { id:'r4',  name:'LGPD Conformidade Brasil',         type:'Privacidade',   category:'privacy',    icon:'🔒', date:'25/05/2025', size:'4.2 MB', views:51, status:'ready',    color:'#f59e0b' },
    { id:'r5',  name:'Phishing Simulation Q2',           type:'Cybersecurity', category:'cyber',      icon:'📧', date:'20/05/2025', size:'5.7 MB', views:63, status:'ready',    color:'#ef4444' },
    { id:'r6',  name:'Engajamento & Conclusões',         type:'Engajamento',   category:'training',   icon:'📊', date:'15/05/2025', size:'2.9 MB', views:39, status:'ready',    color:'#00d4ff' },
    { id:'r7',  name:'Relatório Executivo Mensal',       type:'Executivo',     category:'executive',  icon:'📑', date:'01/05/2025', size:'8.1 MB', views:84, status:'ready',    color:'#00d4ff' },
    { id:'r8',  name:'NIS2 Gap Analysis — Europa',      type:'Compliance',    category:'compliance', icon:'🇪🇺', date:'28/04/2025', size:'3.6 MB', views:22, status:'ready',    color:'#22c55e' },
    { id:'r9',  name:'GDPR Audit Trail Q1',              type:'Privacidade',   category:'privacy',    icon:'📝', date:'15/04/2025', size:'6.2 MB', views:17, status:'ready',    color:'#f59e0b' },
    { id:'r10', name:'Trilhas de Aprendizagem — Q2',    type:'Treinamento',   category:'training',   icon:'🛤', date:'10/04/2025', size:'2.1 MB', views:29, status:'generating',color:'#14b8a6' },
  ],

  trends: {
    compliance: [72, 76, 80, 84, 88, 91],
    risk:       [69, 67, 65, 64, 65, 65],
    training:   [55, 62, 70, 76, 82, 84],
    certs:      [180,220,280,310,370,420],
    labels:     ['Jan','Fev','Mar','Abr','Mai','Jun'],
  },

  categories: [
    { name:'Compliance',    pct:32, color:'#22c55e', count:6  },
    { name:'Cybersecurity', pct:28, color:'#00d4ff', count:5  },
    { name:'Privacidade',   pct:21, color:'#8b5cf6', count:4  },
    { name:'Treinamento',   pct:12, color:'#14b8a6', count:3  },
    { name:'Executivo',     pct:7,  color:'#f59e0b', count:2  },
  ],

  schedules: [
    { id:'s1', name:'Relatório Executivo Semanal',   freq:'Toda segunda-feira',  next:'09 Jun', to:'diretoria@empresa.com',    active:true,  icon:'📑' },
    { id:'s2', name:'Human Risk — Alerta Diário',    freq:'Todo dia às 08:00',   next:'06 Jun', to:'ciso@empresa.com',         active:true,  icon:'⚠️' },
    { id:'s3', name:'Compliance Score Mensal',       freq:'Dia 1 de cada mês',   next:'01 Jul', to:'compliance@empresa.com',   active:true,  icon:'📋' },
    { id:'s4', name:'Phishing Results — Campanha',  freq:'Ao fim de campanha',   next:'15 Jun', to:'security@empresa.com',     active:false, icon:'📧' },
    { id:'s5', name:'Certificados Vencendo',         freq:'30 dias antes',       next:'20 Jun', to:'rh@empresa.com',           active:true,  icon:'🏆' },
  ],

  insights: [
    { type:'success', color:'#22c55e', bg:'rgba(34,197,94,0.08)',   icon:'✅', title:'Compliance em alta', text:'Score subiu 6pts em 6 meses. Europa (94%) lidera o ranking global.' },
    { type:'warning', color:'#f59e0b', bg:'rgba(245,158,11,0.08)',  icon:'⚠️', title:'Risco Humano estabilizado', text:'65 pontos — acima da meta de 60. Operações e Comercial precisam de atenção.' },
    { type:'info',    color:'#00d4ff', bg:'rgba(0,212,255,0.08)',   icon:'💡', title:'Engajamento crescendo', text:'Taxa de conclusão subiu de 55% para 84% nos últimos 6 meses.' },
    { type:'error',   color:'#ef4444', bg:'rgba(239,68,68,0.08)',   icon:'🔴', title:'Phishing: 18% de cliques', text:'Campanha Q2 teve 18% de taxa de cliques. Recomendado reforço imediato.' },
  ],

  dept_perf: [
    { name:'RH',         compliance:96, risk:14, certs:48, training:96, color:'#22c55e' },
    { name:'Jurídico',   compliance:94, risk:18, certs:22, training:94, color:'#22c55e' },
    { name:'TI',         compliance:88, risk:12, certs:64, training:88, color:'#00d4ff' },
    { name:'Financeiro', compliance:81, risk:52, certs:38, training:81, color:'#f59e0b' },
    { name:'Comercial',  compliance:72, risk:67, certs:55, training:72, color:'#f59e0b' },
    { name:'Operações',  compliance:61, risk:85, certs:31, training:61, color:'#ef4444' },
  ],
};

const RP_TYPES = ['all','compliance','risk','certs','privacy','cyber','training','executive'];

// ══════════════════════════════════════════════════════════════
//  MAIN RENDER
// ══════════════════════════════════════════════════════════════
function rpDemoActivitySection() {
  if (typeof DEMO_STATE === 'undefined') return '';
  const u = DEMO_STATE;
  if (!u.completions.length && !u.phishing.length) return '';
  const rm = u.getRiskMeta();
  const score = u.getRiskScore();
  const allActivity = [
    ...u.completions.map(c=>({ date: c.dateISO, displayDate: c.date, icon: c.passed?'✅':'❌', label: c.courseName, sub: (c.passed?'Aprovado':'Reprovado')+' · '+c.score+'%', color: c.passed?'#22c55e':'#ef4444', type:'training' })),
    ...u.phishing.map(p=>({ date: p.dateISO, displayDate: p.date.split(',')[0], icon: p.action==='clicked'?'🎣':'🛡', label: p.campaignName, sub: p.action==='clicked'?'Clicou no link':'Reportou o phishing', color: p.action==='clicked'?'#ef4444':'#22c55e', type:'phishing' })),
  ].sort((a,b)=>b.date.localeCompare(a.date));
  return `
  <div style="background:linear-gradient(135deg,rgba(0,212,255,0.05),rgba(139,92,246,0.05));border:1px solid rgba(0,212,255,0.18);border-radius:18px;padding:22px;margin-top:8px;margin-bottom:8px;">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:18px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:0.78rem;font-weight:800;color:#000;">AL</div>
        <div>
          <div style="font-size:1rem;font-weight:800;">Atividade — ${u.user.name}</div>
          <div style="font-size:0.72rem;color:#6b7280;">${u.user.email} · ${u.user.dept} · ${u.user.company || 'DEMO SA'} · Sessão atual</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="padding:4px 12px;border-radius:99px;font-size:0.7rem;font-weight:700;background:${rm.bg};color:${rm.color};">🛡 ${score}/100 — ${rm.label}</span>
        <button onclick="demoShowProfile()" style="padding:6px 14px;border-radius:8px;border:1px solid rgba(0,212,255,0.3);background:transparent;color:#00d4ff;cursor:pointer;font-size:0.76rem;font-weight:600;font-family:inherit;">Ver Perfil</button>
      </div>
    </div>
    <!-- KPIs row -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;">
      ${[['📚',u.completions.filter(c=>c.passed).length+' cursos','Treinamentos Concluídos','#22c55e'],['🏆',u.getCertCount()+' certs','Certificados Emitidos','#f59e0b'],['🎣',u.phishing.filter(p=>p.action==='clicked').length+' cliques','Phishing Clicados','#ef4444'],['🛡',u.phishing.filter(p=>p.action==='reported').length+' reportes','Phishing Reportados','#22c55e']].map(([ic,v,l,c])=>`
        <div style="flex:1;min-width:110px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);text-align:center;">
          <div style="font-size:0.9rem;">${ic}</div>
          <div style="font-size:1.1rem;font-weight:800;color:${c};">${v}</div>
          <div style="font-size:0.62rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;">${l}</div>
        </div>`).join('')}
    </div>
    <!-- Activity feed -->
    <div style="font-size:0.65rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Linha do Tempo (${allActivity.length} eventos)</div>
    <div style="display:flex;flex-direction:column;gap:6px;">
      ${allActivity.map(a=>`
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);">
          <span style="font-size:1.1rem;flex-shrink:0;">${a.icon}</span>
          <div style="flex:1;min-width:0;">
            <div style="font-size:0.82rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${a.label}</div>
            <div style="font-size:0.68rem;color:#6b7280;">${a.sub}</div>
          </div>
          <span style="font-size:0.7rem;font-weight:700;padding:3px 9px;border-radius:99px;background:${a.color}18;color:${a.color};flex-shrink:0;">${a.displayDate}</span>
        </div>`).join('')}
    </div>
  </div>`;
}

window.renderPage_reports = function() {
  injectReportsCSS();

  // ── Rebuild all analytics from active tenant ─────────────────
  if (typeof getActiveTenantUsers === 'function') {
    const users = getActiveTenantUsers();
    if (users.length) {
      const total      = users.length;
      const active     = users.filter(u => u.status === 'active' || !u.status).length;
      const certsValid = users.filter(u => u.certs === 'valid' || (typeof u.certs === 'number' && u.certs > 0)).length;
      const highRisk   = users.filter(u => u.risk === 'high').length;
      const avgCompl   = Math.round(users.reduce((s,u) => s + (u.completion||0), 0) / total);
      const clickRate  = Math.round((highRisk / total) * 100 * 0.8 + 8);

      REPORTS_DATA.kpis[0] = { ...REPORTS_DATA.kpis[0], val: String(active * 3 + 12), lbl: 'Relatórios Gerados' };
      REPORTS_DATA.kpis[1] = { ...REPORTS_DATA.kpis[1], val: String(certsValid + active), lbl: 'Exportações PDF' };

      // Rebuild dept_perf from real users
      const deptMap = {};
      users.forEach(u => {
        const d = u.dept || 'Outros';
        if (!deptMap[d]) deptMap[d] = { total:0, high:0, certsValid:0, completion:0 };
        deptMap[d].total++;
        if (u.risk === 'high') deptMap[d].high++;
        if (u.certs === 'valid') deptMap[d].certsValid++;
        deptMap[d].completion += (u.completion || 0);
      });
      REPORTS_DATA.dept_perf = Object.entries(deptMap).map(([name, d]) => {
        const compliancePct = Math.round(d.completion / d.total);
        const riskPct       = Math.round((d.high / d.total) * 100);
        const col = compliancePct >= 90 ? '#22c55e' : compliancePct >= 75 ? '#f59e0b' : '#ef4444';
        return { name, compliance: compliancePct, risk: riskPct, certs: d.certsValid, training: compliancePct, color: col };
      }).sort((a,b) => b.compliance - a.compliance);

      // Rebuild trends based on real current values
      const baseCompl = Math.max(40, avgCompl - 29);
      REPORTS_DATA.trends.compliance = [baseCompl, baseCompl+4, baseCompl+8, baseCompl+12, baseCompl+17, Math.min(99, baseCompl+21)];
      REPORTS_DATA.trends.training   = [Math.max(35, avgCompl-29), Math.max(42, avgCompl-22), Math.max(50, avgCompl-14), Math.max(56, avgCompl-8), Math.max(63, avgCompl-2), avgCompl];
      REPORTS_DATA.trends.certs      = [Math.round(certsValid*0.43), Math.round(certsValid*0.52), Math.round(certsValid*0.67), Math.round(certsValid*0.74), Math.round(certsValid*0.88), certsValid];

      // Rebuild insights
      REPORTS_DATA.insights = [
        { type:'success', color:'#22c55e', bg:'rgba(34,197,94,0.08)', icon:'✅', title:'Taxa de conclusão', text:`${avgCompl}% de conclusão de treinamentos — ${avgCompl >= 80 ? 'acima da meta de 80%' : 'abaixo da meta de 80%'}. ${REPORTS_DATA.dept_perf[0] ? REPORTS_DATA.dept_perf[0].name + ' lidera com ' + REPORTS_DATA.dept_perf[0].compliance + '%.' : ''}` },
        { type:'warning', color:'#f59e0b', bg:'rgba(245,158,11,0.08)', icon:'⚠️', title:'Risco Humano', text:`${highRisk} usuário${highRisk!==1?'s':''} em alto risco (${Math.round(highRisk/total*100)}% do total). ${REPORTS_DATA.dept_perf[REPORTS_DATA.dept_perf.length-1] ? REPORTS_DATA.dept_perf[REPORTS_DATA.dept_perf.length-1].name + ' precisa de atenção.' : ''}` },
        { type:'info', color:'#00d4ff', bg:'rgba(0,212,255,0.08)', icon:'💡', title:'Certificados digitais', text:`${certsValid} certificado${certsValid!==1?'s':''} válido${certsValid!==1?'s':''} de ${total} usuário${total!==1?'s':''}. Taxa de certificação: ${Math.round(certsValid/total*100)}%.` },
        { type:'error', color:'#ef4444', bg:'rgba(239,68,68,0.08)', icon:'🔴', title:'Phishing: ' + clickRate + '% de cliques', text:`Taxa de cliques estimada em ${clickRate}% com base no perfil de risco dos usuários. ${clickRate > 20 ? 'Recomendado reforço imediato.' : 'Dentro do limite aceitável.'}` },
      ];
    }
  }

  return `
<div id="reports-module">

  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">📊 Relatórios & Inteligência</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px;">Analytics avançado · exportação · agendamentos automáticos</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="rp-btn rp-btn-ghost rp-btn-sm" onclick="rpOpenSchedule()">🕐 Agendar Envio</button>
      <button class="rp-btn rp-btn-ghost rp-btn-sm" onclick="rpOpenExport()">📤 Exportar</button>
      <button class="rp-btn rp-btn-primary" onclick="rpOpenNewReport()">+ Novo Relatório</button>
    </div>
  </div>

  <!-- KPIs -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;margin-bottom:20px;">
    ${REPORTS_DATA.kpis.map(k=>`
      <div class="rp-kpi">
        <div style="font-size:1.5rem;margin-bottom:8px;">${k.icon}</div>
        <div class="rp-kpi-val" style="color:${k.color};">${k.val}</div>
        <div class="rp-kpi-lbl">${k.lbl}</div>
        <div style="margin-top:8px;">
          <span class="rp-kpi-delta" style="color:${k.up?'#22c55e':'#ef4444'};background:${k.up?'rgba(34,197,94,0.10)':'rgba(239,68,68,0.10)'};">${k.delta}</span>
        </div>
      </div>`).join('')}
  </div>

  <!-- Tabs -->
  <div class="rp-tabs">
    <button class="rp-tab${RP.tab==='reports'?  ' active':''}" onclick="rpTab('reports')">📋 Relatórios</button>
    <button class="rp-tab${RP.tab==='analytics'?' active':''}" onclick="rpTab('analytics')">📈 Analytics</button>
    <button class="rp-tab${RP.tab==='schedules'?' active':''}" onclick="rpTab('schedules')">🕐 Agendamentos</button>
    <button class="rp-tab${RP.tab==='export'?   ' active':''}" onclick="rpTab('export')">📤 Exportação</button>
  </div>

  <div id="rp-body">${rpRenderTab(RP.tab)}</div>
  <div id="rp-modals"></div>
  ${rpDemoActivitySection()}
</div>`;
};

window.initPage_reports = function() {
  setTimeout(() => {
    document.querySelectorAll('.rp-prog-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
    if (RP.tab === 'analytics') rpInitAnalyticsCharts();
  }, 120);
};

window.rpTab = function(tab) {
  RP.tab = tab;
  document.querySelectorAll('.rp-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.rp-tab').forEach(b => { if (b.textContent.toLowerCase().includes(tab==='reports'?'relatório':tab==='analytics'?'analytics':tab==='schedules'?'agendament':'export')) b.classList.add('active'); });
  const body = document.getElementById('rp-body');
  if (!body) return;
  body.style.opacity = '0';
  body.innerHTML = rpRenderTab(tab);
  requestAnimationFrame(() => { body.style.transition='opacity 0.22s'; body.style.opacity='1'; });
  setTimeout(() => {
    document.querySelectorAll('.rp-prog-fill').forEach(el => {
      const w = el.style.width; el.style.width='0';
      requestAnimationFrame(() => { el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
    if (tab === 'analytics') rpInitAnalyticsCharts();
  }, 80);
};

function rpRenderTab(tab) {
  if (tab === 'reports')   return rpRenderReports();
  if (tab === 'analytics') return rpRenderAnalytics();
  if (tab === 'schedules') return rpRenderSchedules();
  if (tab === 'export')    return rpRenderExport();
  return rpRenderReports();
}

// ══════════════════════════════════════════════════════════════
//  TAB: RELATÓRIOS
// ══════════════════════════════════════════════════════════════
function rpRenderReports() {
  const filtered = REPORTS_DATA.reports.filter(r =>
    (RP.filterType === 'all' || r.category === RP.filterType) &&
    (!RP.search || r.name.toLowerCase().includes(RP.search.toLowerCase()) || r.type.toLowerCase().includes(RP.search.toLowerCase()))
  );

  return `
  <!-- Search + Filter -->
  <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
    <input class="rp-input" style="max-width:320px;" placeholder="🔍 Buscar relatório..." value="${RP.search}" oninput="RP.search=this.value;rpRefreshList()">
    <select class="rp-select" style="max-width:200px;" onchange="RP.filterType=this.value;rpRefreshList()">
      <option value="all"${RP.filterType==='all'?' selected':''}>Todos os tipos</option>
      <option value="compliance"${RP.filterType==='compliance'?' selected':''}>Compliance</option>
      <option value="risk"${RP.filterType==='risk'?' selected':''}>Risco</option>
      <option value="certs"${RP.filterType==='certs'?' selected':''}>Certificados</option>
      <option value="privacy"${RP.filterType==='privacy'?' selected':''}>Privacidade</option>
      <option value="cyber"${RP.filterType==='cyber'?' selected':''}>Cybersecurity</option>
      <option value="training"${RP.filterType==='training'?' selected':''}>Treinamento</option>
      <option value="executive"${RP.filterType==='executive'?' selected':''}>Executivo</option>
    </select>
    <span style="margin-left:auto;font-size:0.78rem;color:#6b7280;align-self:center;">${filtered.length} relatório${filtered.length!==1?'s':''}</span>
  </div>

  <!-- List -->
  <div id="rp-list" class="rp-card" style="padding:0;overflow:hidden;">
    ${rpReportRows(filtered)}
  </div>`;
}

function rpReportRows(list) {
  if (!list.length) return `<div style="padding:40px;text-align:center;color:#6b7280;">Nenhum relatório encontrado.</div>`;
  return list.map(r => `
    <div class="rp-row" onclick="rpOpenDetail('${r.id}')">
      <div style="width:38px;height:38px;border-radius:10px;background:${r.color}18;border:1px solid ${r.color}30;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">${r.icon}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.88rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r.name}</div>
        <div style="font-size:0.70rem;color:#6b7280;margin-top:2px;">${r.date} · ${r.size} · ${r.views} visualizações</div>
      </div>
      <span class="badge" style="background:${r.color}18;color:${r.color};flex-shrink:0;font-size:0.65rem;">${r.type}</span>
      ${r.status==='generating'
        ? `<span style="font-size:0.68rem;color:#f59e0b;background:rgba(245,158,11,0.10);padding:3px 9px;border-radius:99px;flex-shrink:0;">⏳ Gerando</span>`
        : `<div style="display:flex;gap:5px;flex-shrink:0;" onclick="event.stopPropagation()">
             <button class="rp-btn rp-btn-ghost rp-btn-sm" onclick="rpOpenDetail('${r.id}')">👁 Ver</button>
             <button class="rp-btn rp-btn-ghost rp-btn-sm" onclick="rpExportReport('${r.id}')">📤</button>
             <button class="rp-btn rp-btn-ghost rp-btn-sm" onclick="rpCopyShareLink('${r.id}')">🔗</button>
           </div>`}
    </div>`).join('');
}

window.rpRefreshList = function() {
  const el = document.getElementById('rp-list');
  if (!el) return;
  const filtered = REPORTS_DATA.reports.filter(r =>
    (RP.filterType === 'all' || r.category === RP.filterType) &&
    (!RP.search || r.name.toLowerCase().includes(RP.search.toLowerCase()) || r.type.toLowerCase().includes(RP.search.toLowerCase()))
  );
  el.innerHTML = rpReportRows(filtered);
};

// ══════════════════════════════════════════════════════════════
//  TAB: ANALYTICS
// ══════════════════════════════════════════════════════════════
function rpRenderAnalytics() {
  const t = REPORTS_DATA.trends;
  const cats = REPORTS_DATA.categories;
  const depts = REPORTS_DATA.dept_perf;

  return `
  <!-- Insights row -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-bottom:20px;">
    ${REPORTS_DATA.insights.map(i=>`
      <div class="rp-insight" style="background:${i.bg};border-color:${i.color};">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
          <span style="font-size:1.0rem;">${i.icon}</span>
          <span style="font-size:0.82rem;font-weight:800;color:${i.color};">${i.title}</span>
        </div>
        <p style="font-size:0.76rem;color:#94a3b8;line-height:1.5;margin:0;">${i.text}</p>
      </div>`).join('')}
  </div>

  <!-- Charts row 1: Line + Donut -->
  <div style="display:grid;grid-template-columns:1fr 320px;gap:18px;margin-bottom:18px;">

    <div class="rp-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <h3 style="font-size:0.95rem;font-weight:800;">📈 Evolução dos Scores</h3>
        <div style="display:flex;gap:12px;font-size:0.68rem;color:#6b7280;">
          ${[['#22c55e','Compliance'],['#ef4444','Risk (inv.)'],['#00d4ff','Treinamento']].map(([c,l])=>`
            <span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:2px;background:${c};display:inline-block;border-radius:2px;"></span>${l}</span>`).join('')}
        </div>
      </div>
      <div class="rp-canvas-wrap" style="height:200px;"><canvas id="rp-line-chart"></canvas></div>
    </div>

    <div class="rp-card">
      <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:14px;">📊 Distribuição por Tipo</h3>
      <div class="rp-canvas-wrap" style="height:140px;"><canvas id="rp-donut-chart"></canvas></div>
      <div style="display:flex;flex-direction:column;gap:7px;margin-top:14px;">
        ${cats.map(c=>`
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:9px;height:9px;border-radius:50%;background:${c.color};flex-shrink:0;"></div>
            <div style="flex:1;font-size:0.76rem;">${c.name}</div>
            <span style="font-size:0.76rem;font-weight:800;color:${c.color};">${c.pct}%</span>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Charts row 2: Bar + Table -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px;">

    <div class="rp-card">
      <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:14px;">🏆 Certificados Emitidos por Mês</h3>
      <div class="rp-canvas-wrap" style="height:180px;"><canvas id="rp-bar-chart"></canvas></div>
    </div>

    <div class="rp-card">
      <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:14px;">🏢 Performance por Departamento</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${depts.map(d=>`
          <div>
            <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:4px;">
              <span style="font-weight:600;">${d.name}</span>
              <span style="color:${d.color};font-weight:800;">${d.compliance}%</span>
            </div>
            <div class="rp-prog"><div class="rp-prog-fill" style="width:${d.compliance}%;background:${d.color};"></div></div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Dept detailed table -->
  <div class="rp-card" style="padding:0;overflow:hidden;">
    <div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.07);">
      <h3 style="font-size:0.95rem;font-weight:800;">📋 Scorecard por Departamento</h3>
    </div>
    <div class="table-wrap" style="border:none;border-radius:0;">
      <table>
        <thead><tr>
          <th>Departamento</th><th>Compliance</th><th>Risk Score</th><th>Certificados</th><th>Treinamento</th><th>Status</th>
        </tr></thead>
        <tbody>
          ${depts.map(d=>`<tr>
            <td><span style="font-weight:700;">${d.name}</span></td>
            <td><span style="font-weight:800;color:${d.compliance>=90?'#22c55e':d.compliance>=70?'#00d4ff':'#f59e0b'};">${d.compliance}%</span></td>
            <td><span style="font-weight:800;color:${d.risk<=30?'#22c55e':d.risk<=60?'#f59e0b':'#ef4444'};">${d.risk}</span></td>
            <td><span class="badge badge-purple">${d.certs} 🏆</span></td>
            <td><span style="font-weight:700;color:${d.training>=90?'#22c55e':d.training>=70?'#00d4ff':'#f59e0b'};">${d.training}%</span></td>
            <td><span class="badge ${d.compliance>=85?'badge-green':d.compliance>=70?'badge-yellow':'badge-red'}">${d.compliance>=85?'OK':d.compliance>=70?'Atenção':'Crítico'}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

function rpInitAnalyticsCharts() {
  if (!window.Chart) return;

  const t = REPORTS_DATA.trends;
  const cats = REPORTS_DATA.categories;

  // Line chart
  const lineCanvas = document.getElementById('rp-line-chart');
  if (lineCanvas) {
    const w = lineCanvas.parentElement.offsetWidth || 600;
    lineCanvas.width  = w;
    lineCanvas.height = lineCanvas.parentElement.offsetHeight || 200;
    const lc = new Chart(lineCanvas, {
      type: 'line',
      data: {
        labels: t.labels,
        datasets: [
          { label:'Compliance', data:t.compliance, borderColor:'#22c55e', backgroundColor:'rgba(34,197,94,0.08)', borderWidth:2.5, pointRadius:4, pointHoverRadius:4, tension:0.4, fill:true },
          { label:'Human Risk', data:t.risk,        borderColor:'#ef4444', backgroundColor:'rgba(239,68,68,0.06)', borderWidth:2.5, pointRadius:4, pointHoverRadius:4, tension:0.4, fill:false },
          { label:'Treinamento',data:t.training,    borderColor:'#00d4ff', backgroundColor:'rgba(0,212,255,0.06)', borderWidth:2.5, pointRadius:4, pointHoverRadius:4, tension:0.4, fill:false },
        ],
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        animation:{duration:600}, transitions:{resize:{animation:{duration:0}}},
        plugins:{ legend:{display:false}, tooltip:{animation:false,mode:'index',intersect:false} },
        scales:{
          x:{ grid:{color:'rgba(255,255,255,0.05)'}, ticks:{color:'#6b7280',font:{size:11}} },
          y:{ grid:{color:'rgba(255,255,255,0.05)'}, ticks:{color:'#6b7280',font:{size:11}}, min:40, max:100 },
        },
      },
    });
    requestAnimationFrame(() => lc.resize());
  }

  // Donut chart
  const donutCanvas = document.getElementById('rp-donut-chart');
  if (donutCanvas) {
    donutCanvas.width  = donutCanvas.parentElement.offsetWidth  || 260;
    donutCanvas.height = donutCanvas.parentElement.offsetHeight || 140;
    const dc = new Chart(donutCanvas, {
      type: 'doughnut',
      data: {
        labels: cats.map(c=>c.name),
        datasets:[{ data:cats.map(c=>c.pct), backgroundColor:cats.map(c=>c.color+'cc'), borderColor:cats.map(c=>c.color), borderWidth:2, hoverOffset:0 }],
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        animation:{duration:600}, transitions:{resize:{animation:{duration:0}}},
        cutout:'72%',
        plugins:{ legend:{display:false}, tooltip:{animation:false} },
      },
    });
    requestAnimationFrame(() => dc.resize());
  }

  // Bar chart
  const barCanvas = document.getElementById('rp-bar-chart');
  if (barCanvas) {
    barCanvas.width  = barCanvas.parentElement.offsetWidth  || 400;
    barCanvas.height = barCanvas.parentElement.offsetHeight || 180;
    const bc = new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: t.labels,
        datasets:[{ label:'Certificados', data:t.certs, backgroundColor:'rgba(139,92,246,0.70)', borderColor:'#8b5cf6', borderWidth:1.5, borderRadius:5 }],
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        animation:{duration:600}, transitions:{resize:{animation:{duration:0}}},
        plugins:{ legend:{display:false}, tooltip:{animation:false} },
        scales:{
          x:{ grid:{display:false}, ticks:{color:'#6b7280',font:{size:11}} },
          y:{ grid:{color:'rgba(255,255,255,0.05)'}, ticks:{color:'#6b7280',font:{size:11}}, beginAtZero:true },
        },
      },
    });
    requestAnimationFrame(() => bc.resize());
  }
}

// ══════════════════════════════════════════════════════════════
//  TAB: AGENDAMENTOS
// ══════════════════════════════════════════════════════════════
function rpRenderSchedules() {
  const scheds = REPORTS_DATA.schedules;
  return `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
    <div style="font-size:0.78rem;color:#6b7280;">${scheds.filter(s=>s.active).length} de ${scheds.length} agendamentos ativos</div>
    <button class="rp-btn rp-btn-primary rp-btn-sm" onclick="rpOpenSchedule()">+ Novo Agendamento</button>
  </div>

  ${scheds.map(s=>`
    <div class="rp-sched-card">
      <div style="width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">${s.icon}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.88rem;">${s.name}</div>
        <div style="font-size:0.72rem;color:#6b7280;margin-top:3px;">📅 ${s.freq} · Próximo: <span style="color:#00d4ff;">${s.next}</span></div>
        <div style="font-size:0.70rem;color:#6b7280;margin-top:2px;">📧 ${s.to}</div>
      </div>
      <label class="rp-toggle">
        <input type="checkbox" ${s.active?'checked':''} onchange="rpToggleSchedule('${s.id}',this.checked)">
        <span class="rp-slider"></span>
      </label>
      <button class="rp-btn rp-btn-ghost rp-btn-sm" onclick="rpEditSchedule('${s.id}')">✏️</button>
      <button class="rp-btn rp-btn-danger rp-btn-sm" onclick="rpDeleteSchedule('${s.id}')">🗑</button>
    </div>`).join('')}

  <!-- Summary -->
  <div class="rp-card" style="margin-top:16px;">
    <h4 style="font-size:0.80rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:14px;">📬 Próximos Envios</h4>
    ${scheds.filter(s=>s.active).sort((a,b)=>a.next.localeCompare(b.next)).map(s=>`
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
        <span style="font-size:1.0rem;">${s.icon}</span>
        <div style="flex:1;font-size:0.80rem;font-weight:600;">${s.name}</div>
        <span style="font-size:0.72rem;color:#00d4ff;font-weight:800;">${s.next}</span>
      </div>`).join('')}
  </div>`;
}

window.rpToggleSchedule = function(id, active) {
  const s = REPORTS_DATA.schedules.find(x=>x.id===id);
  if (s) { s.active = active; showToast&&showToast(s.name + (active?' ativado':' desativado'),'info'); }
};
window.rpEditSchedule   = function(id) { showToast&&showToast('Editar agendamento em breve','info'); };
window.rpDeleteSchedule = function(id) {
  const idx = REPORTS_DATA.schedules.findIndex(x=>x.id===id);
  if (idx > -1) { REPORTS_DATA.schedules.splice(idx,1); rpTab('schedules'); showToast&&showToast('Agendamento removido','success'); }
};

// ══════════════════════════════════════════════════════════════
//  TAB: EXPORTAÇÃO
// ══════════════════════════════════════════════════════════════
function rpRenderExport() {
  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;">

    <!-- Format selector -->
    <div class="rp-card">
      <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:16px;">📦 Formato de Exportação</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
        ${[
          { id:'pdf',   icon:'📄', name:'PDF',      desc:'Relatório visual completo' },
          { id:'xlsx',  icon:'📊', name:'Excel',    desc:'Dados tabulares editáveis' },
          { id:'json',  icon:'🔧', name:'JSON',     desc:'Integração via API / BI' },
        ].map(f=>`
          <div class="rp-fmt${RP.selectedFmt===f.id?' selected':''}" onclick="RP.selectedFmt='${f.id}';document.querySelectorAll('.rp-fmt').forEach(el=>el.classList.remove('selected'));this.classList.add('selected')">
            <div class="rp-fmt-icon">${f.icon}</div>
            <div class="rp-fmt-name">${f.name}</div>
            <div class="rp-fmt-desc">${f.desc}</div>
          </div>`).join('')}
      </div>

      <h4 style="font-size:0.78rem;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:10px;">Período</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
        <div><label class="rp-label">De</label><input type="date" class="rp-input" value="2025-01-01"></div>
        <div><label class="rp-label">Até</label><input type="date" class="rp-input" value="2025-06-05"></div>
      </div>

      <button class="rp-btn rp-btn-primary" style="width:100%;" onclick="rpDoExport()">
        📤 Exportar Relatório
      </button>
    </div>

    <!-- Report selector + options -->
    <div class="rp-card">
      <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:16px;">📋 Conteúdo do Relatório</h3>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
        ${[
          ['compliance', '📋 Compliance Score',     true ],
          ['risk',       '⚠️ Human Risk Dashboard', true ],
          ['certs',      '🏆 Certificados',         true ],
          ['phishing',   '📧 Phishing Results',     true ],
          ['training',   '📚 Treinamentos',         true ],
          ['depts',      '🏢 Departamentos',        false],
          ['regions',    '🌐 Mapa de Conformidade', false],
        ].map(([id,label,checked])=>`
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);">
            <input type="checkbox" ${checked?'checked':''} style="accent-color:#00d4ff;width:15px;height:15px;">
            <span style="font-size:0.84rem;">${label}</span>
          </label>`).join('')}
      </div>

      <h4 style="font-size:0.78rem;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:10px;">Opções</h4>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${[['Incluir gráficos',true],['Incluir tabelas detalhadas',true],['Adicionar rodapé corporativo',true],['Marca d\'água confidencial',false]].map(([lbl,chk])=>`
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
            <input type="checkbox" ${chk?'checked':''} style="accent-color:#00d4ff;width:14px;height:14px;">
            <span style="font-size:0.82rem;color:#94a3b8;">${lbl}</span>
          </label>`).join('')}
      </div>
    </div>
  </div>

  <!-- Quick exports -->
  <div class="rp-card" style="margin-top:18px;">
    <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:14px;">⚡ Exportações Rápidas</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;">
      ${[
        { icon:'📑', name:'Relatório Executivo',   desc:'Resumo completo · PDF',    color:'#00d4ff', cat:'executive',  type:'Executivo'     },
        { icon:'⚠️', name:'Human Risk Report',     desc:'Score + ranking · PDF',    color:'#ef4444', cat:'risk',       type:'Risco'         },
        { icon:'📋', name:'Compliance Audit',       desc:'Evidências + gaps · PDF',  color:'#22c55e', cat:'compliance', type:'Compliance'    },
        { icon:'📧', name:'Phishing Summary',       desc:'Resultados Q2 · PDF',      color:'#f59e0b', cat:'cyber',      type:'Cybersecurity' },
        { icon:'🏆', name:'Certificados Emitidos', desc:'Lista completa · PDF',      color:'#8b5cf6', cat:'certs',      type:'Certificados'  },
        { icon:'🛤', name:'Trilhas & Progresso',   desc:'Por usuário · PDF',         color:'#14b8a6', cat:'training',   type:'Treinamento'   },
      ].map(e=>`
        <div class="rp-sched-card" onclick="rpQuickExport('${e.cat}','${e.name}','${e.type}')" style="cursor:pointer;flex-direction:column;align-items:flex-start;gap:6px;transition:all 0.18s;" onmouseenter="this.style.borderColor='${e.color}55';this.style.background='rgba(255,255,255,0.04)'" onmouseleave="this.style.borderColor='';this.style.background=''">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:1.1rem;">${e.icon}</span>
            <span style="font-size:0.82rem;font-weight:700;color:${e.color};">${e.name}</span>
          </div>
          <div style="font-size:0.70rem;color:#6b7280;">${e.desc}</div>
          <div style="font-size:0.66rem;color:${e.color};opacity:0.7;margin-top:2px;">📤 Clique para gerar PDF</div>
        </div>`).join('')}
    </div>
  </div>`;
}

window.rpDoExport = function() {
  const fmtNames = { pdf:'PDF', xlsx:'Excel', json:'JSON' };
  showToast&&showToast('Gerando relatório ' + (fmtNames[RP.selectedFmt]||'PDF') + '... Aguarde.', 'info');
  setTimeout(() => showToast&&showToast('✅ Relatório exportado com sucesso!', 'success'), 1800);
};

// ── Quick Export: generate PDF directly from category ─────────
window.rpQuickExport = function(category, name, type) {
  showToast&&showToast(`📄 Gerando "${name}"...`, 'info');
  const tenantName = APP&&APP.tenants ? (APP.tenants.find(t=>t.active)||{}).name||'Empresa' : 'Empresa';
  const now = new Date().toLocaleString('pt-BR');
  // Build a synthetic report object matching rpBuildBody expectations
  const synth = { id: 'quick_'+category, name, type, category, icon:'📄', date: new Date().toLocaleDateString('pt-BR'), size: null, views: 0, status: 'ready', color: '#00d4ff' };
  const body = rpBuildBody(synth);
  const html = rpPdfShell(name, type, tenantName, now, null, body);
  const win = window.open('', '_blank');
  if (!win) { showToast&&showToast('❌ Permita pop-ups para exportar PDF.','error'); return; }
  win.document.write(html);
  win.document.close();
  win.onload = () => { win.focus(); win.print(); };
  setTimeout(() => showToast&&showToast(`✅ "${name}" gerado como PDF!`, 'success'), 700);
};

// ══════════════════════════════════════════════════════════════
//  MODALS
// ══════════════════════════════════════════════════════════════

// Report Detail Modal
window.rpOpenDetail = function(id) {
  const r = REPORTS_DATA.reports.find(x=>x.id===id);
  if (!r) return;
  if (r.status === 'generating') { showToast&&showToast('Relatório ainda sendo gerado...','warning'); return; }

  rpShowModal(`
    <div class="rp-modal-hdr">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;border-radius:11px;background:${r.color}18;border:1px solid ${r.color}30;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">${r.icon}</div>
        <div>
          <div style="font-size:1.0rem;font-weight:800;">${r.name}</div>
          <div style="font-size:0.72rem;color:#6b7280;">${r.type} · ${r.date} · ${r.size}</div>
        </div>
      </div>
      <button class="rp-modal-close" onclick="rpCloseModal()">✕</button>
    </div>

    <!-- Stats -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px;">
      ${[['Visualizações',r.views,'#00d4ff'],['Tamanho',r.size,'#22c55e'],['Atualizado',r.date,'#8b5cf6'],['Status','Pronto','#22c55e']].map(([l,v,c])=>`
        <div style="text-align:center;padding:12px;background:rgba(255,255,255,0.03);border-radius:10px;">
          <div style="font-size:1.0rem;font-weight:900;color:${c};">${v}</div>
          <div style="font-size:0.62rem;color:#6b7280;margin-top:3px;">${l}</div>
        </div>`).join('')}
    </div>

    <!-- Preview placeholder -->
    <div style="background:rgba(255,255,255,0.02);border:2px dashed rgba(255,255,255,0.10);border-radius:14px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px;gap:10px;">
      <span style="font-size:2rem;">📄</span>
      <div style="font-size:0.84rem;font-weight:600;color:#6b7280;">Preview do Relatório</div>
      <div style="font-size:0.72rem;color:#4b5563;">${r.name}</div>
    </div>

    <div style="display:flex;gap:10px;">
      <button class="rp-btn rp-btn-ghost" style="flex:1;" onclick="rpCloseModal()">Fechar</button>
      <button class="rp-btn rp-btn-ghost" style="flex:1;" onclick="rpCopyShareLink('${r.id}');rpCloseModal()">🔗 Compartilhar</button>
      <button class="rp-btn rp-btn-primary" style="flex:1;" onclick="rpExportReport('${r.id}');rpCloseModal()">📤 Exportar PDF</button>
    </div>
  `);
};

// New Report Wizard
window.rpOpenNewReport = function() {
  rpShowModal(`
    <div class="rp-modal-hdr">
      <span style="font-size:1.0rem;font-weight:800;">+ Novo Relatório</span>
      <button class="rp-modal-close" onclick="rpCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div><label class="rp-label">Nome do Relatório *</label><input class="rp-input" id="rp-nr-name" placeholder="Ex: Compliance Q3 2025"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div><label class="rp-label">Tipo</label>
          <select class="rp-select" id="rp-nr-type">
            <option>Compliance</option><option>Risco</option><option>Certificados</option>
            <option>Privacidade</option><option>Cybersecurity</option><option>Treinamento</option><option>Executivo</option>
          </select>
        </div>
        <div><label class="rp-label">Período</label>
          <select class="rp-select" id="rp-nr-period">
            <option>Último mês</option><option>Último trimestre</option><option>Últimos 6 meses</option><option>Ano atual</option><option>Personalizado</option>
          </select>
        </div>
      </div>
      <div><label class="rp-label">Departamentos</label>
        <select class="rp-select" id="rp-nr-dept">
          <option>Todos os Departamentos</option><option>RH</option><option>TI</option><option>Jurídico</option><option>Financeiro</option><option>Comercial</option><option>Operações</option>
        </select>
      </div>
      <div><label class="rp-label">Formato de saída</label>
        <select class="rp-select" id="rp-nr-fmt">
          <option value="pdf">PDF — Relatório visual completo</option>
          <option value="xlsx">Excel — Dados tabulares</option>
        </select>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px;">
      <button class="rp-btn rp-btn-ghost" style="flex:1;" onclick="rpCloseModal()">Cancelar</button>
      <button class="rp-btn rp-btn-primary" style="flex:1;" onclick="rpSaveNewReport()">Gerar Relatório</button>
    </div>
  `);
};

window.rpSaveNewReport = function() {
  const name = document.getElementById('rp-nr-name')?.value.trim();
  if (!name) { showToast&&showToast('Informe o nome do relatório','error'); return; }
  const type   = document.getElementById('rp-nr-type')?.value   || 'Compliance';
  const period = document.getElementById('rp-nr-period')?.value || 'Último mês';
  const dept   = document.getElementById('rp-nr-dept')?.value   || 'Todos os Departamentos';
  const fmt    = document.getElementById('rp-nr-fmt')?.value    || 'pdf';
  const catMap = {'Compliance':'compliance','Risco':'risk','Certificados':'certs','Privacidade':'privacy','Cybersecurity':'cyber','Treinamento':'training','Executivo':'executive'};
  const newId  = 'r'+Date.now();

  REPORTS_DATA.reports.unshift({
    id: newId, name, type, category: catMap[type]||'compliance',
    icon:'📄', date: new Date().toLocaleDateString('pt-BR'),
    size:'2.3 MB', views:0, status:'ready', color:'#00d4ff',
  });

  rpCloseModal();
  rpTab('reports');
  showToast&&showToast(`📄 Gerando PDF "${name}"...`, 'info');

  // Generate and open PDF using rpBuildBody for type-specific content
  setTimeout(() => {
    const tenantName = APP&&APP.tenants ? (APP.tenants.find(t=>t.active)||{}).name||'Empresa' : 'Empresa';
    const now = new Date().toLocaleString('pt-BR');
    const newR = REPORTS_DATA.reports.find(x=>x.id===newId);
    const paramsHtml = `<div style="display:flex;gap:20px;margin-bottom:16px;padding:10px 14px;background:#f8fafc;border-radius:8px;font-size:11px;border:1px solid #e2e8f0;">
      <div><strong style="color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.06em;display:block;margin-bottom:2px;">Período</strong>${period}</div>
      <div><strong style="color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.06em;display:block;margin-bottom:2px;">Departamento</strong>${dept}</div>
      <div><strong style="color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.06em;display:block;margin-bottom:2px;">Formato</strong>PDF</div>
    </div>`;
    const body = paramsHtml + (newR ? rpBuildBody(newR) : '');
    const html = rpPdfShell(name, type, tenantName, now, null, body);
    const win = window.open('', '_blank');
    if (!win) { showToast&&showToast('❌ Permita pop-ups para exportar PDF.','error'); return; }
    win.document.write(html);
    win.document.close();
    win.onload = () => { win.focus(); win.print(); };
    showToast&&showToast(`✅ Relatório "${name}" gerado como PDF!`, 'success');
  }, 400);
};

// Schedule Modal
window.rpOpenSchedule = function() {
  rpShowModal(`
    <div class="rp-modal-hdr">
      <span style="font-size:1.0rem;font-weight:800;">🕐 Agendar Envio Automático</span>
      <button class="rp-modal-close" onclick="rpCloseModal()">✕</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div><label class="rp-label">Nome do Agendamento *</label><input class="rp-input" id="rp-sc-name" placeholder="Ex: Compliance Semanal"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div><label class="rp-label">Relatório</label>
          <select class="rp-select" id="rp-sc-report">
            ${REPORTS_DATA.reports.filter(r=>r.status==='ready').map(r=>`<option value="${r.id}">${r.name}</option>`).join('')}
          </select>
        </div>
        <div><label class="rp-label">Frequência</label>
          <select class="rp-select" id="rp-sc-freq">
            <option>Diário</option><option>Semanal</option><option>Quinzenal</option><option>Mensal</option><option>Trimestral</option>
          </select>
        </div>
      </div>
      <div><label class="rp-label">Destinatário(s) *</label><input class="rp-input" id="rp-sc-to" placeholder="email@empresa.com, email2@empresa.com"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div><label class="rp-label">Formato</label>
          <select class="rp-select" id="rp-sc-fmt"><option>PDF</option><option>Excel</option></select>
        </div>
        <div><label class="rp-label">Horário</label>
          <input type="time" class="rp-input" id="rp-sc-time" value="08:00">
        </div>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px;">
      <button class="rp-btn rp-btn-ghost" style="flex:1;" onclick="rpCloseModal()">Cancelar</button>
      <button class="rp-btn rp-btn-primary" style="flex:1;" onclick="rpSaveSchedule()">Criar Agendamento</button>
    </div>
  `);
};

window.rpSaveSchedule = function() {
  const name = document.getElementById('rp-sc-name')?.value.trim();
  if (!name) { showToast&&showToast('Informe o nome do agendamento','error'); return; }
  const to   = document.getElementById('rp-sc-to')?.value.trim();
  if (!to) { showToast&&showToast('Informe o(s) destinatário(s)','error'); return; }
  const freq = document.getElementById('rp-sc-freq')?.value || 'Semanal';
  REPORTS_DATA.schedules.push({ id:'s'+Date.now(), name, freq, next:'15 Jun', to, active:true, icon:'🕐' });
  rpCloseModal(); rpTab('schedules');
  showToast&&showToast('✅ Agendamento criado com sucesso!', 'success');
};

// Export Modal
window.rpOpenExport = function() { rpTab('export'); };

// ── Modal helpers ─────────────────────────────────────────────
function rpShowModal(html, cls='rp-modal') {
  rpCloseModal();
  const ov = document.createElement('div'); ov.className='rp-overlay'; ov.id='rp-overlay';
  ov.addEventListener('click', e => { if (e.target===ov) rpCloseModal(); });
  const m  = document.createElement('div'); m.className=cls; m.innerHTML=html;
  ov.appendChild(m); document.body.appendChild(ov);
}
window.rpCloseModal = function() { const el=document.getElementById('rp-overlay'); if (el) el.remove(); };
document.addEventListener('keydown', e => { if (e.key==='Escape') rpCloseModal(); });

// ── Shared PDF shell ──────────────────────────────────────────
function rpPdfShell(title, type, tenantName, now, size, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="pt-BR"><head>
<meta charset="UTF-8"><title>${title}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Segoe UI',Arial,sans-serif;color:#111;padding:32px;font-size:13px;line-height:1.5;}
  .hdr{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #1e293b;}
  .logo{font-size:19px;font-weight:900;color:#1e293b;letter-spacing:-0.03em;}
  .logo span{color:#7c3aed;}
  .meta{text-align:right;font-size:11px;color:#64748b;}
  h1{font-size:17px;font-weight:800;color:#1e293b;margin-bottom:4px;}
  h2{font-size:12px;font-weight:700;color:#374151;margin:20px 0 8px;text-transform:uppercase;letter-spacing:.07em;border-bottom:1px solid #e2e8f0;padding-bottom:4px;}
  .badge{display:inline-block;padding:3px 10px;border-radius:99px;font-size:10px;font-weight:700;background:#ede9fe;color:#6d28d9;margin-bottom:12px;}
  .kpi-row{display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;}
  .kpi{flex:1;min-width:100px;border:1px solid #e2e8f0;border-radius:8px;padding:10px 14px;text-align:center;}
  .kpi-val{font-size:20px;font-weight:800;color:#1e293b;}
  .kpi-lbl{font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-top:2px;}
  table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:12px;}
  th{background:#1e293b;color:#fff;padding:7px 11px;font-size:10px;font-weight:700;text-align:left;text-transform:uppercase;letter-spacing:.05em;}
  td{padding:6px 11px;border-bottom:1px solid #e2e8f0;vertical-align:middle;}
  tr:nth-child(even) td{background:#f8fafc;}
  .ok{color:#16a34a;font-weight:700;} .warn{color:#d97706;font-weight:700;} .bad{color:#dc2626;font-weight:700;}
  .tag{display:inline-block;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;}
  .tag-g{background:#dcfce7;color:#16a34a;} .tag-y{background:#fef9c3;color:#92400e;} .tag-r{background:#fee2e2;color:#b91c1c;}
  p{margin-bottom:10px;font-size:12px;color:#374151;}
  .footer{margin-top:28px;padding-top:12px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;text-align:center;}
  @media print{body{padding:20px}@page{margin:16mm}}
</style>
</head><body>
<div class="hdr">
  <div class="logo">Brand<span>vakt</span> <span style="font-weight:400;font-size:12px;color:#64748b;">Academy</span></div>
  <div class="meta"><strong>${tenantName}</strong><br>Gerado em: ${now}${size?'<br>Tamanho: '+size:''}</div>
</div>
<h1>${title}</h1>
<span class="badge">${type}</span>
${bodyHtml}
<div class="footer">Brandvakt Academy · Documento gerado automaticamente · ${now}</div>
</body></html>`;
}

// ── Build report body per category ───────────────────────────
function rpBuildBody(r) {
  const depts    = REPORTS_DATA.dept_perf || [];
  const insights = REPORTS_DATA.insights  || [];
  const trends   = REPORTS_DATA.trends    || {};
  const camps    = (typeof PHISHING_MOCK !== 'undefined') ? PHISHING_MOCK.campanhas : [];
  const assigns  = (typeof ASSIGN_DATA   !== 'undefined') ? ASSIGN_DATA.assignments : [];
  const users    = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
  const cat      = r.category || 'compliance';

  // ── helpers ──
  const bar = (pct, color='#6d28d9') =>
    `<div style="height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden;display:inline-block;width:80px;vertical-align:middle;margin-right:6px"><div style="height:100%;width:${pct}%;background:${color};border-radius:4px"></div></div>`;
  const cls = pct => pct>=80?'ok':pct>=60?'warn':'bad';
  const clsR = pct => pct<=30?'ok':pct<=60?'warn':'bad'; // reversed for risk

  // ── COMPLIANCE ───────────────────────────────────────────────
  if (cat === 'compliance') {
    const avgCompl = depts.length ? Math.round(depts.reduce((s,d)=>s+d.compliance,0)/depts.length) : 0;
    const failing  = depts.filter(d=>d.compliance<80);
    const passing  = depts.filter(d=>d.compliance>=80);
    const rows = depts.map(d=>`<tr>
      <td>${d.name}</td>
      <td>${bar(d.compliance,'#22c55e')}<span class="${cls(d.compliance)}">${d.compliance}%</span></td>
      <td class="${clsR(d.risk)}">${d.risk}%</td>
      <td>${d.certs}</td>
      <td class="${cls(d.training)}">${d.training}%</td>
      <td>${d.compliance>=80?'<span class="tag tag-g">✓ Conforme</span>':'<span class="tag tag-r">✗ Em risco</span>'}</td>
    </tr>`).join('');
    return `
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-val ${cls(avgCompl)}">${avgCompl}%</div><div class="kpi-lbl">Score Médio</div></div>
      <div class="kpi"><div class="kpi-val ok">${passing.length}</div><div class="kpi-lbl">Depts Conformes</div></div>
      <div class="kpi"><div class="kpi-val bad">${failing.length}</div><div class="kpi-lbl">Depts Em Risco</div></div>
      <div class="kpi"><div class="kpi-val">${depts.reduce((s,d)=>s+d.certs,0)}</div><div class="kpi-lbl">Certificados</div></div>
    </div>
    <h2>Compliance por Departamento</h2>
    <table><thead><tr><th>Departamento</th><th>Compliance</th><th>Risco</th><th>Certificados</th><th>Treinamento</th><th>Status</th></tr></thead>
    <tbody>${rows}</tbody></table>
    ${failing.length?`<h2>Departamentos Abaixo da Meta (&lt;80%)</h2><p>${failing.map(d=>`<strong>${d.name}</strong> (${d.compliance}%)`).join(', ')} — recomenda-se plano de ação imediato.</p>`:''}
    <h2>Recomendações</h2>
    <p>${avgCompl>=80?'Score geral acima da meta de 80%. Manter cadência de treinamentos obrigatórios.':'Score geral abaixo da meta. Priorizar '+failing.map(d=>d.name).join(', ')+' com treinamentos obrigatórios imediatos.'}</p>`;
  }

  // ── RISK / HUMAN RISK ────────────────────────────────────────
  if (cat === 'risk') {
    const highRisk = users.filter(u=>(u.riskScore||u.score||0)>60);
    const medRisk  = users.filter(u=>{const s=u.riskScore||u.score||0;return s>30&&s<=60;});
    const lowRisk  = users.filter(u=>(u.riskScore||u.score||0)<=30);
    const avgScore = users.length ? Math.round(users.reduce((s,u)=>s+(u.riskScore||u.score||0),0)/users.length) : 0;
    const userRows = [...users].sort((a,b)=>(b.riskScore||b.score||0)-(a.riskScore||a.score||0))
      .slice(0,15).map(u=>{
        const s=u.riskScore||u.score||0;
        return `<tr><td>${u.name||u.nome||'—'}</td><td>${u.dept||u.department||'—'}</td><td>${u.role||u.cargo||'—'}</td>
        <td>${bar(s, s>60?'#ef4444':s>30?'#f59e0b':'#22c55e')}<span class="${s>60?'bad':s>30?'warn':'ok'}">${s}/100</span></td>
        <td>${s>60?'<span class="tag tag-r">Alto Risco</span>':s>30?'<span class="tag tag-y">Médio</span>':'<span class="tag tag-g">Baixo</span>'}</td></tr>`;
      }).join('');
    return `
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-val ${avgScore>60?'bad':avgScore>30?'warn':'ok'}">${avgScore}/100</div><div class="kpi-lbl">Score HRM Médio</div></div>
      <div class="kpi"><div class="kpi-val bad">${highRisk.length}</div><div class="kpi-lbl">Alto Risco</div></div>
      <div class="kpi"><div class="kpi-val warn">${medRisk.length}</div><div class="kpi-lbl">Médio Risco</div></div>
      <div class="kpi"><div class="kpi-val ok">${lowRisk.length}</div><div class="kpi-lbl">Baixo Risco</div></div>
    </div>
    <h2>Ranking de Risco por Usuário (Top 15)</h2>
    <table><thead><tr><th>Usuário</th><th>Departamento</th><th>Cargo</th><th>Score HRM</th><th>Nível</th></tr></thead>
    <tbody>${userRows||'<tr><td colspan="5" style="text-align:center;color:#64748b">Nenhum usuário com dados de risco</td></tr>'}</tbody></table>
    <h2>Distribuição por Departamento</h2>
    <table><thead><tr><th>Departamento</th><th>Compliance</th><th>Risco Médio</th><th>Treinamento</th></tr></thead>
    <tbody>${depts.map(d=>`<tr><td>${d.name}</td><td class="${cls(d.compliance)}">${d.compliance}%</td><td class="${clsR(d.risk)}">${d.risk}%</td><td class="${cls(d.training)}">${d.training}%</td></tr>`).join('')}</tbody></table>
    <h2>Recomendações</h2>
    <p>${highRisk.length>0?`${highRisk.length} usuário(s) em alto risco requerem treinamento prioritário de phishing e gestão de senhas.`:'Nenhum usuário em alto risco. Manter monitoramento contínuo.'}</p>`;
  }

  // ── CERTIFICADOS ─────────────────────────────────────────────
  if (cat === 'certs') {
    const totalCerts  = depts.reduce((s,d)=>s+d.certs,0);
    const totalUsers  = users.length || 11;
    const certRate    = Math.round(totalCerts/totalUsers*100);
    const certAssigns = assigns.filter(a=>a.status==='concluida');
    const rows = depts.map(d=>`<tr>
      <td>${d.name}</td>
      <td style="text-align:center;font-weight:700">${d.certs}</td>
      <td>${bar(d.compliance,'#8b5cf6')}<span class="${cls(d.compliance)}">${d.compliance}%</span></td>
      <td>${d.certs>0?'<span class="tag tag-g">Emitidos</span>':'<span class="tag tag-y">Pendente</span>'}</td>
    </tr>`).join('');
    return `
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-val" style="color:#8b5cf6">${totalCerts}</div><div class="kpi-lbl">Total Certificados</div></div>
      <div class="kpi"><div class="kpi-val ${cls(certRate)}">${certRate}%</div><div class="kpi-lbl">Taxa de Certificação</div></div>
      <div class="kpi"><div class="kpi-val ok">${certAssigns.length}</div><div class="kpi-lbl">Cursos Concluídos</div></div>
      <div class="kpi"><div class="kpi-val">${totalUsers}</div><div class="kpi-lbl">Total Usuários</div></div>
    </div>
    <h2>Certificados por Departamento</h2>
    <table><thead><tr><th>Departamento</th><th>Certificados Emitidos</th><th>Taxa de Conclusão</th><th>Status</th></tr></thead>
    <tbody>${rows}</tbody></table>
    ${certAssigns.length?`<h2>Cursos com Certificação Concluída</h2>
    <table><thead><tr><th>Curso</th><th>Público-Alvo</th><th>Conclusão</th></tr></thead>
    <tbody>${certAssigns.map(a=>`<tr><td>${a.course}</td><td>${a.target}</td><td class="ok">${a.completion}%</td></tr>`).join('')}</tbody></table>`:''}
    <h2>Análise</h2>
    <p>Taxa de certificação: <strong>${certRate}%</strong>. ${certRate>=80?'Meta atingida.':certRate>=60?'Próximo da meta de 80%. Foco em concluir treinamentos pendentes.':'Abaixo da meta. Ação imediata recomendada para acelerar conclusões.'}</p>`;
  }

  // ── PRIVACIDADE / LGPD / GDPR ────────────────────────────────
  if (cat === 'privacy') {
    const privAssigns = assigns.filter(a=>a.category==='Privacidade');
    const avgPriv = privAssigns.length ? Math.round(privAssigns.reduce((s,a)=>s+a.completion,0)/privAssigns.length) : 0;
    const frameworks = [
      {name:'LGPD (Lei 13.709/2018)', status:depts[0]?.compliance>=80?'Conforme':'Parcial', score:depts[0]?.compliance||0},
      {name:'GDPR (EU 2016/679)',     status:depts[1]?.compliance>=80?'Conforme':'Parcial', score:depts[1]?.compliance||0},
      {name:'ISO 27701',              status:depts[2]?.compliance>=80?'Conforme':'Em avaliação', score:depts[2]?.compliance||0},
    ];
    return `
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-val ${cls(avgPriv)}">${avgPriv}%</div><div class="kpi-lbl">Conclusão Privacidade</div></div>
      <div class="kpi"><div class="kpi-val ok">${frameworks.filter(f=>f.status==='Conforme').length}</div><div class="kpi-lbl">Frameworks Conformes</div></div>
      <div class="kpi"><div class="kpi-val">${privAssigns.length}</div><div class="kpi-lbl">Treinamentos Ativos</div></div>
    </div>
    <h2>Status por Framework</h2>
    <table><thead><tr><th>Framework</th><th>Score</th><th>Status</th></tr></thead>
    <tbody>${frameworks.map(f=>`<tr><td><strong>${f.name}</strong></td><td>${bar(f.score,'#8b5cf6')}<span class="${cls(f.score)}">${f.score}%</span></td>
    <td>${f.status==='Conforme'?'<span class="tag tag-g">✓ Conforme</span>':f.status==='Parcial'?'<span class="tag tag-y">⚠ Parcial</span>':'<span class="tag tag-r">Em Avaliação</span>'}</td></tr>`).join('')}</tbody></table>
    <h2>Treinamentos de Privacidade</h2>
    <table><thead><tr><th>Treinamento</th><th>Público</th><th>Conclusão</th><th>Status</th></tr></thead>
    <tbody>${privAssigns.length?privAssigns.map(a=>`<tr><td>${a.course}</td><td>${a.target}</td><td class="${cls(a.completion)}">${a.completion}%</td><td>${a.status==='concluida'?'<span class="tag tag-g">Concluído</span>':a.status==='ativa'?'<span class="tag tag-y">Ativo</span>':'<span class="tag tag-r">'+a.status+'</span>'}</td></tr>`).join(''):'<tr><td colspan="4" style="text-align:center;color:#64748b">Nenhum treinamento de privacidade registrado</td></tr>'}</tbody></table>
    <h2>Exposição a Dados Pessoais por Departamento</h2>
    <table><thead><tr><th>Departamento</th><th>Compliance</th><th>Risco</th></tr></thead>
    <tbody>${depts.map(d=>`<tr><td>${d.name}</td><td class="${cls(d.compliance)}">${d.compliance}%</td><td class="${clsR(d.risk)}">${d.risk}%</td></tr>`).join('')}</tbody></table>`;
  }

  // ── CYBERSECURITY / PHISHING ─────────────────────────────────
  if (cat === 'cyber') {
    const concluded = camps.filter(c=>c.status==='Concluída');
    const active    = camps.filter(c=>c.status==='Ativa');
    const totalSent = concluded.reduce((s,c)=>s+(c.enviados||0),0);
    const totalClk  = concluded.reduce((s,c)=>s+(c.cliques||0),0);
    const totalRpt  = concluded.reduce((s,c)=>s+(c.reportou||0),0);
    const clickRate = totalSent>0?Math.round(totalClk/totalSent*100):0;
    const rptRate   = totalSent>0?Math.round(totalRpt/totalSent*100):0;
    const campRows  = camps.slice(0,8).map(c=>{
      const pct = c.enviados>0?Math.round(c.cliques/c.enviados*100):0;
      const rpt = c.enviados>0?Math.round(c.reportou/c.enviados*100):0;
      return `<tr><td><strong>${c.nome}</strong></td><td>${c.template||'—'}</td><td>${c.enviados||0}</td>
      <td class="${pct>20?'bad':pct>10?'warn':'ok'}">${pct}%</td>
      <td class="${rpt>30?'ok':rpt>15?'warn':'bad'}">${rpt}%</td>
      <td>${c.status==='Concluída'?'<span class="tag tag-g">Concluída</span>':c.status==='Ativa'?'<span class="tag tag-y">Ativa</span>':'<span class="tag">'+c.status+'</span>'}</td></tr>`;
    }).join('');
    return `
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-val">${camps.length}</div><div class="kpi-lbl">Campanhas Total</div></div>
      <div class="kpi"><div class="kpi-val ok">${concluded.length}</div><div class="kpi-lbl">Concluídas</div></div>
      <div class="kpi"><div class="kpi-val ${clickRate>20?'bad':clickRate>10?'warn':'ok'}">${clickRate}%</div><div class="kpi-lbl">Taxa de Cliques</div></div>
      <div class="kpi"><div class="kpi-val ${rptRate>30?'ok':rptRate>15?'warn':'bad'}">${rptRate}%</div><div class="kpi-lbl">Taxa de Reporte</div></div>
    </div>
    <h2>Histórico de Campanhas de Phishing</h2>
    <table><thead><tr><th>Campanha</th><th>Template</th><th>Enviados</th><th>% Clicaram</th><th>% Reportaram</th><th>Status</th></tr></thead>
    <tbody>${campRows||'<tr><td colspan="6" style="text-align:center;color:#64748b">Nenhuma campanha registrada</td></tr>'}</tbody></table>
    <h2>Análise de Vulnerabilidade por Departamento</h2>
    <table><thead><tr><th>Departamento</th><th>Risco</th><th>Compliance</th></tr></thead>
    <tbody>${depts.sort((a,b)=>b.risk-a.risk).map(d=>`<tr><td>${d.name}</td><td class="${clsR(d.risk)}">${d.risk}%</td><td class="${cls(d.compliance)}">${d.compliance}%</td></tr>`).join('')}</tbody></table>
    <h2>Conclusão</h2>
    <p>Taxa de cliques: <strong class="${clickRate>20?'bad':clickRate>10?'warn':'ok'}">${clickRate}%</strong> ${clickRate>20?'— Acima do limite aceitável (20%). Reforço imediato recomendado.':clickRate>10?'— Atenção. Recomendado treinamento adicional de conscientização.':'— Dentro do limite aceitável.'}</p>`;
  }

  // ── TREINAMENTO / ENGAJAMENTO ────────────────────────────────
  if (cat === 'training') {
    const avgCompl = assigns.length ? Math.round(assigns.reduce((s,a)=>s+a.completion,0)/assigns.length) : 0;
    const active   = assigns.filter(a=>a.status==='ativa');
    const concluded= assigns.filter(a=>a.status==='concluida');
    const overdue  = assigns.filter(a=>a.atrasados>0);
    const rows = [...assigns].sort((a,b)=>b.completion-a.completion).map(a=>`<tr>
      <td>${a.course}</td><td>${a.target}</td>
      <td>${bar(a.completion, a.completion>=80?'#22c55e':a.completion>=60?'#f59e0b':'#ef4444')}<span class="${cls(a.completion)}">${a.completion}%</span></td>
      <td>${a.concluidos||0}/${a.enviados||0}</td>
      <td>${a.atrasados>0?`<span class="tag tag-r">${a.atrasados} atrasado(s)</span>`:'<span class="tag tag-g">Em dia</span>'}</td>
    </tr>`).join('');
    return `
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-val ${cls(avgCompl)}">${avgCompl}%</div><div class="kpi-lbl">Conclusão Média</div></div>
      <div class="kpi"><div class="kpi-val ok">${concluded.length}</div><div class="kpi-lbl">Concluídos</div></div>
      <div class="kpi"><div class="kpi-val">${active.length}</div><div class="kpi-lbl">Em Andamento</div></div>
      <div class="kpi"><div class="kpi-val bad">${overdue.length}</div><div class="kpi-lbl">Com Atraso</div></div>
    </div>
    <h2>Progresso por Treinamento</h2>
    <table><thead><tr><th>Treinamento</th><th>Público</th><th>Conclusão</th><th>Concluídos/Enviados</th><th>Atrasos</th></tr></thead>
    <tbody>${rows||'<tr><td colspan="5" style="text-align:center;color:#64748b">Nenhum treinamento registrado</td></tr>'}</tbody></table>
    <h2>Análise por Categoria</h2>
    <table><thead><tr><th>Categoria</th><th>Qtd Treinamentos</th><th>Conclusão Média</th></tr></thead>
    <tbody>${['Cybersecurity','Compliance','Privacidade','ESG','Information Security'].map(cat=>{
      const items=assigns.filter(a=>a.category===cat);
      const avg=items.length?Math.round(items.reduce((s,a)=>s+a.completion,0)/items.length):null;
      return items.length?`<tr><td>${cat}</td><td>${items.length}</td><td class="${cls(avg)}">${avg}%</td></tr>`:'';
    }).join('')||'<tr><td colspan="3">—</td></tr>'}</tbody></table>`;
  }

  // ── EXECUTIVO ────────────────────────────────────────────────
  const avgCompl2 = depts.length?Math.round(depts.reduce((s,d)=>s+d.compliance,0)/depts.length):0;
  const totalCerts2=depts.reduce((s,d)=>s+d.certs,0);
  const campsActive=camps.filter(c=>c.status==='Ativa').length;
  const concluded2=camps.filter(c=>c.status==='Concluída');
  const totalSent2=concluded2.reduce((s,c)=>s+(c.enviados||0),0);
  const clickRate2=totalSent2>0?Math.round(concluded2.reduce((s,c)=>s+(c.cliques||0),0)/totalSent2*100):0;
  const avgTraining=assigns.length?Math.round(assigns.reduce((s,a)=>s+a.completion,0)/assigns.length):0;
  const highRiskU=users.filter(u=>(u.riskScore||u.score||0)>60);
  return `
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-val ${cls(avgCompl2)}">${avgCompl2}%</div><div class="kpi-lbl">Compliance Geral</div></div>
    <div class="kpi"><div class="kpi-val ${cls(avgTraining)}">${avgTraining}%</div><div class="kpi-lbl">Conclusão Treinamentos</div></div>
    <div class="kpi"><div class="kpi-val">${totalCerts2}</div><div class="kpi-lbl">Certificados Emitidos</div></div>
    <div class="kpi"><div class="kpi-val ${clickRate2>20?'bad':clickRate2>10?'warn':'ok'}">${clickRate2}%</div><div class="kpi-lbl">Cliques Phishing</div></div>
    <div class="kpi"><div class="kpi-val bad">${highRiskU.length}</div><div class="kpi-lbl">Usuários Alto Risco</div></div>
  </div>
  <h2>Visão Executiva — Desempenho por Área</h2>
  <table><thead><tr><th>Departamento</th><th>Compliance</th><th>Risco</th><th>Certificados</th><th>Treinamento</th><th>Status</th></tr></thead>
  <tbody>${depts.map(d=>`<tr><td><strong>${d.name}</strong></td><td class="${cls(d.compliance)}">${d.compliance}%</td><td class="${clsR(d.risk)}">${d.risk}%</td><td>${d.certs}</td><td class="${cls(d.training)}">${d.training}%</td><td>${d.compliance>=80&&d.risk<=50?'<span class="tag tag-g">✓ OK</span>':d.compliance>=60?'<span class="tag tag-y">⚠ Atenção</span>':'<span class="tag tag-r">✗ Crítico</span>'}</td></tr>`).join('')}</tbody></table>
  <h2>Campanhas de Phishing</h2>
  <table><thead><tr><th>Métrica</th><th>Valor</th><th>Avaliação</th></tr></thead>
  <tbody>
    <tr><td>Campanhas concluídas</td><td>${concluded2.length}</td><td>—</td></tr>
    <tr><td>Campanhas ativas</td><td>${campsActive}</td><td>—</td></tr>
    <tr><td>Taxa de cliques</td><td class="${clickRate2>20?'bad':clickRate2>10?'warn':'ok'}">${clickRate2}%</td><td>${clickRate2>20?'Crítico — acima de 20%':clickRate2>10?'Atenção':'Aceitável'}</td></tr>
  </tbody></table>
  <h2>Treinamentos em Andamento</h2>
  <table><thead><tr><th>Treinamento</th><th>Conclusão</th><th>Obrigatório</th></tr></thead>
  <tbody>${assigns.slice(0,8).map(a=>`<tr><td>${a.course}</td><td class="${cls(a.completion)}">${a.completion}%</td><td>${a.mandatory?'Sim':'Não'}</td></tr>`).join('')}</tbody></table>
  <h2>Recomendações Executivas</h2>
  <p>${avgCompl2<80?`Compliance abaixo da meta (${avgCompl2}% vs meta 80%). Priorizar ${depts.filter(d=>d.compliance<80).map(d=>d.name).join(', ')}.`:'Compliance acima da meta. Manter cadência atual.'}</p>
  <p>${highRiskU.length>0?`${highRiskU.length} usuário(s) em alto risco. Treinamento obrigatório recomendado.`:'Nenhum usuário em alto risco crítico.'}</p>`;
}

// ── Export report as PDF (print dialog) ──────────────────────
window.rpExportReport = function(id) {
  const r = REPORTS_DATA.reports.find(x=>x.id===id);
  if (!r) { showToast&&showToast('Relatório não encontrado','error'); return; }
  const tenantName = APP&&APP.tenants ? (APP.tenants.find(t=>t.active)||{}).name||'Empresa' : 'Empresa';
  const now = new Date().toLocaleString('pt-BR');
  const html = rpPdfShell(r.name, r.type||r.category, tenantName, now, r.size, rpBuildBody(r));
  showToast&&showToast(`📄 Abrindo PDF de "${r.name}"...`, 'info');
  const win = window.open('', '_blank');
  if (!win) { showToast&&showToast('❌ Permita pop-ups para exportar PDF.','error'); return; }
  win.document.write(html);
  win.document.close();
  win.onload = () => { win.focus(); win.print(); };
  setTimeout(() => showToast&&showToast(`✅ "${r.name}" exportado como PDF!`, 'success'), 800);
};

// ── Copy share link ───────────────────────────────────────────
window.rpCopyShareLink = function(id) {
  const r = REPORTS_DATA.reports.find(x=>x.id===id);
  const link = `https://brandvakt.academy/reports/${id || 'rpt'}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(link).then(() => {
      showToast&&showToast(`🔗 Link copiado: ${link}`, 'success');
    }).catch(() => {
      showToast&&showToast('🔗 Link copiado para a área de transferência!', 'success');
    });
  } else {
    showToast&&showToast('🔗 Link copiado para a área de transferência!', 'success');
  }
};
