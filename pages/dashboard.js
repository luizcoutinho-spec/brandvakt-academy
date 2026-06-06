// ══════════════════════════════════════════════════════════════
//  📊 DASHBOARD EXECUTIVO — Complete Module
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectDashCSS() {
  if (document.getElementById('dash-css')) return;
  const s = document.createElement('style');
  s.id = 'dash-css';
  s.textContent = `
    /* ── Canvas wrap (chart stability) ── */
    .dash-canvas-wrap {
      position: relative;
      overflow: hidden;
      contain: layout style;
      transform: translateZ(0);
    }
    .dash-canvas-wrap canvas {
      position: absolute !important;
      top: 0; left: 0;
      width: 100% !important;
      height: 100% !important;
    }

    /* ── KPI card ── */
    .db-kpi {
      background: var(--bg-card, #12121a);
      border: 1px solid var(--bg-border, rgba(255,255,255,0.07));
      border-radius: 16px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 11px;
      transition: transform 0.2s, border-color 0.2s;
      cursor: default;
    }
    .db-kpi:hover {
      transform: translateY(-3px);
      border-color: rgba(255,255,255,0.14);
    }

    /* ── Score ring card ── */
    .db-score-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px;
      border-radius: 12px;
      background: rgba(255,255,255,0.02);
      border: 1px solid var(--bg-border, rgba(255,255,255,0.07));
      transition: all 0.2s;
    }
    .db-score-card:hover { background: rgba(255,255,255,0.04); }

    /* ── Alert row ── */
    .db-alert {
      padding: 12px 14px;
      border-radius: 10px;
      background: rgba(255,255,255,0.02);
      border: 1px solid var(--bg-border, rgba(255,255,255,0.07));
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.2s;
    }
    .db-alert:hover { background: rgba(255,255,255,0.04); }

    /* ── Activity feed ── */
    .db-feed-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .db-feed-item:last-child { border-bottom: none; }
    .db-feed-dot {
      width: 8px; height: 8px; border-radius: 50%;
      flex-shrink: 0; margin-top: 5px;
    }

    /* ── Quick action ── */
    .db-quick {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;
      padding: 14px 10px;
      border-radius: 12px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.07);
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .db-quick:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.14);
      transform: translateY(-2px);
    }
    .db-quick-icon { font-size: 1.5rem; }
    .db-quick-lbl  { font-size: 0.70rem; font-weight: 600; color: #94a3b8; }

    /* ── Progress bar ── */
    .db-prog { height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; margin-top: 5px; }
    .db-prog-fill { height: 100%; border-radius: 3px; transition: width 0.8s ease; }

    /* ── Campaign pill ── */
    .db-campaign-row {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .db-campaign-row:last-child { border-bottom: none; }

    /* ── Deadline pill ── */
    .db-deadline {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 12px; border-radius: 9px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 7px;
    }
  `;
  document.head.appendChild(s);
}
injectDashCSS();

// ── i18n labels ───────────────────────────────────────────────
const DASH_LABELS = {
  pt: {
    title: 'Dashboard Executivo', sub_prefix: 'Visão consolidada · ',
    active_users:'Usuários Ativos', inactive_users:'Usuários Inativos',
    completed:'Concluídos', pending:'Pendentes',
    certs:'Certificados', hours:'Horas de Aprendizagem',
    scores_title:'Índices Estratégicos', dept_title:'Desempenho por Departamento',
    trend_title:'Evolução Mensal', top_trainings:'Top Treinamentos',
    compliance_map:'Conformidade Global', alerts_title:'Alertas & Ações',
    activity_title:'Atividade Recente', quick_title:'Ações Rápidas',
    phishing_title:'Campanhas de Phishing', deadlines_title:'Próximos Vencimentos',
    view_all:'Ver todos', vs_last:'vs mês ant.',
    rank:'Rank', dept:'Departamento', completion:'Conclusão', avg:'Nota Média',
    risk_low:'Baixo', risk_med:'Médio', risk_high:'Alto',
    month_label:['Jan','Fev','Mar','Abr','Mai','Jun'],
    period:'Últimos 30 dias',
    alert_overdue:'colaboradores com treinamentos vencidos',
    alert_expiring:'certificados vencem em 30 dias',
    alert_low_risk:'usuários com Human Risk Score crítico',
    btn_assign:'Atribuir', btn_notify:'Notificar', btn_review:'Revisar',
    export_pdf:'Export PDF', full_report:'Relatório Completo',
    completed_lbl:'Concluídos', certs_lbl:'Certificados',
  },
  en: {
    title:'Executive Dashboard', sub_prefix:'Consolidated view · ',
    active_users:'Active Users', inactive_users:'Inactive Users',
    completed:'Completed', pending:'Pending',
    certs:'Certificates', hours:'Learning Hours',
    scores_title:'Strategic Scores', dept_title:'Department Performance',
    trend_title:'Monthly Trend', top_trainings:'Top Trainings',
    compliance_map:'Global Compliance', alerts_title:'Alerts & Actions',
    activity_title:'Recent Activity', quick_title:'Quick Actions',
    phishing_title:'Phishing Campaigns', deadlines_title:'Upcoming Deadlines',
    view_all:'View all', vs_last:'vs prev month',
    rank:'Rank', dept:'Department', completion:'Completion', avg:'Avg Score',
    risk_low:'Low', risk_med:'Medium', risk_high:'High',
    month_label:['Jan','Feb','Mar','Apr','May','Jun'],
    period:'Last 30 days',
    alert_overdue:'employees with overdue trainings',
    alert_expiring:'certificates expiring in 30 days',
    alert_low_risk:'users with critical Human Risk Score',
    btn_assign:'Assign', btn_notify:'Notify', btn_review:'Review',
    export_pdf:'Export PDF', full_report:'Full Report',
    completed_lbl:'Completed', certs_lbl:'Certificates',
  },
  es: {
    title:'Panel Ejecutivo', sub_prefix:'Vista consolidada · ',
    active_users:'Usuarios Activos', inactive_users:'Usuarios Inactivos',
    completed:'Completados', pending:'Pendientes',
    certs:'Certificados', hours:'Horas de Aprendizaje',
    scores_title:'Índices Estratégicos', dept_title:'Rendimiento por Departamento',
    trend_title:'Tendencia Mensual', top_trainings:'Top Formaciones',
    compliance_map:'Conformidad Global', alerts_title:'Alertas y Acciones',
    activity_title:'Actividad Reciente', quick_title:'Acciones Rápidas',
    phishing_title:'Campañas de Phishing', deadlines_title:'Próximos Vencimientos',
    view_all:'Ver todos', vs_last:'vs mes anterior',
    rank:'Posición', dept:'Departamento', completion:'Finalización', avg:'Nota Media',
    risk_low:'Bajo', risk_med:'Medio', risk_high:'Alto',
    month_label:['Ene','Feb','Mar','Abr','May','Jun'],
    period:'Últimos 30 días',
    alert_overdue:'empleados con formaciones vencidas',
    alert_expiring:'certificados vencen en 30 días',
    alert_low_risk:'usuarios con Human Risk Score crítico',
    btn_assign:'Asignar', btn_notify:'Notificar', btn_review:'Revisar',
    export_pdf:'Export PDF', full_report:'Informe Completo',
    completed_lbl:'Completados', certs_lbl:'Certificados',
  },
  fr: {
    title:"Tableau de Bord Exécutif", sub_prefix:'Vue consolidée · ',
    active_users:'Utilisateurs Actifs', inactive_users:'Utilisateurs Inactifs',
    completed:'Terminées', pending:'En attente',
    certs:'Certificats', hours:"Heures d'Apprentissage",
    scores_title:'Indices Stratégiques', dept_title:'Performance par Département',
    trend_title:'Tendance Mensuelle', top_trainings:'Top Formations',
    compliance_map:'Conformité Mondiale', alerts_title:'Alertes & Actions',
    activity_title:'Activité Récente', quick_title:'Actions Rapides',
    phishing_title:'Campagnes Phishing', deadlines_title:'Échéances Proches',
    view_all:'Voir tout', vs_last:'vs mois préc.',
    rank:'Rang', dept:'Département', completion:'Achèvement', avg:'Note Moy.',
    risk_low:'Faible', risk_med:'Moyen', risk_high:'Élevé',
    month_label:['Jan','Fév','Mar','Avr','Mai','Juin'],
    period:'30 derniers jours',
    alert_overdue:'employés avec formations en retard',
    alert_expiring:'certificats expirent dans 30 jours',
    alert_low_risk:'utilisateurs avec score critique',
    btn_assign:'Attribuer', btn_notify:'Notifier', btn_review:'Réviser',
    export_pdf:'Export PDF', full_report:'Rapport Complet',
    completed_lbl:'Terminées', certs_lbl:'Certificats',
  },
};

// ── Data ──────────────────────────────────────────────────────
const DASH_DATA = {
  kpis: [
    { key:'active_users',   value:'340',    numVal:340,  delta:'+12',  up:true,  icon:'👥', color:'#00d4ff', spark:[280,295,300,310,325,340],  nav:'users'       },
    { key:'inactive_users', value:'28',     numVal:28,   delta:'-5',   up:true,  icon:'💤', color:'#f59e0b', spark:[40,38,35,33,31,28],         nav:'users'       },
    { key:'completed',      value:'2.847',  numVal:2847, delta:'+234', up:true,  icon:'✅', color:'#22c55e', spark:[1800,2000,2200,2450,2650,2847], nav:'library' },
    { key:'pending',        value:'183',    numVal:183,  delta:'-41',  up:true,  icon:'⏳', color:'#ef4444', spark:[280,260,240,210,200,183],    nav:'assignments' },
    { key:'certs',          value:'1.204',  numVal:1204, delta:'+98',  up:true,  icon:'🏆', color:'#8b5cf6', spark:[800,900,980,1050,1120,1204], nav:'certificates'},
    { key:'hours',          value:'8.641h', numVal:8641, delta:'+12%', up:true,  icon:'⏱', color:'#14b8a6', spark:[5000,5800,6500,7100,7900,8641], nav:'reports' },
  ],
  scores: [
    { label:'Cybersecurity Awareness', value:82, color:'#00d4ff', prev:76, icon:'🛡', nav:'phishing'      },
    { label:'Compliance Score',        value:91, color:'#22c55e', prev:88, icon:'📋', nav:'compliance'    },
    { label:'Privacy Score',           value:78, color:'#8b5cf6', prev:72, icon:'🔒', nav:'compliance'    },
    { label:'Human Risk Score',        value:65, color:'#f59e0b', prev:69, icon:'⚠️', nav:'hrm', inverted:true },
    { label:'Learning Engagement',     value:88, color:'#14b8a6', prev:83, icon:'🎯', nav:'library'       },
    { label:'Org. Maturity Score',     value:74, color:'#f97316', prev:70, icon:'🏢', nav:'departments'   },
  ],
  depts: [
    { name:'RH',         icon:'👥', completion:96, avg:9.1, certs:48, risk:'low'  },
    { name:'Jurídico',   icon:'⚖️', completion:94, avg:9.3, certs:22, risk:'low'  },
    { name:'TI',         icon:'💻', completion:88, avg:8.7, certs:64, risk:'low'  },
    { name:'Financeiro', icon:'💰', completion:81, avg:8.2, certs:38, risk:'med'  },
    { name:'Comercial',  icon:'📞', completion:72, avg:7.8, certs:55, risk:'med'  },
    { name:'Operações',  icon:'⚙️', completion:61, avg:7.1, certs:31, risk:'high' },
  ],
  topTrainings: [
    { name:'Phishing & Engenharia Social',  cat:'Cybersecurity', completions:312, rate:94, flags:'🇧🇷🇺🇸🇪🇸' },
    { name:'LGPD na Prática',               cat:'Privacidade',   completions:287, rate:91, flags:'🇧🇷' },
    { name:'Código de Ética Empresarial',   cat:'Compliance',    completions:274, rate:89, flags:'🇧🇷🇺🇸🇫🇷' },
    { name:'Senhas Seguras e MFA',          cat:'Cybersecurity', completions:251, rate:96, flags:'🇧🇷🇺🇸🇪🇸' },
    { name:'Home Office Seguro',            cat:'Cybersecurity', completions:228, rate:88, flags:'🇧🇷🇺🇸' },
  ],
  alerts: [
    { type:'error',   icon:'❌', count:47,  key:'alert_overdue',  btn:'btn_notify', nav:'users'       },
    { type:'warning', icon:'⚠️', count:23,  key:'alert_expiring', btn:'btn_review', nav:'certificates'},
    { type:'warning', icon:'🔴', count:12,  key:'alert_low_risk', btn:'btn_assign', nav:'hrm'         },
  ],
  phishingCampaigns: [
    { name:'Campanha Q2 — Invoice Fraud',  status:'active',   sent:340, opened:41, click:18, color:'#ef4444' },
    { name:'Password Reset Simulation',    status:'active',   sent:195, opened:33, click:12, color:'#f59e0b' },
    { name:'IT Support Impersonation',     status:'finished', sent:280, opened:28, click:9,  color:'#22c55e' },
  ],
  activity: [
    { icon:'🏆', text:'Ana Lima concluiu <b>LGPD na Prática</b> e recebeu certificado', time:'há 3 min',  color:'#22c55e' },
    { icon:'⚠️', text:'Score de risco do Rodrigo Lima subiu para <b>85 (Alto)</b>',     time:'há 8 min',  color:'#ef4444' },
    { icon:'📧', text:'47 usuários clicaram no link de phishing (Campanha Q2)',          time:'há 14 min', color:'#f59e0b' },
    { icon:'✅', text:'Departamento TI atingiu <b>88% de conclusão</b>',                time:'há 22 min', color:'#00d4ff' },
    { icon:'🏆', text:'Rafael Neto emitiu certificado <b>Cybersecurity Essentials</b>', time:'há 31 min', color:'#8b5cf6' },
    { icon:'📋', text:'Nova atribuição criada: <b>GDPR Refresh — Equipe Europa</b>',    time:'há 45 min', color:'#14b8a6' },
    { icon:'👥', text:'3 novos usuários adicionados ao departamento <b>Comercial</b>',  time:'há 1h',     color:'#f97316' },
    { icon:'🔒', text:'Trilha Privacidade & LGPD atingiu <b>78% de conclusão</b>',      time:'há 1h 20min',color:'#8b5cf6'},
  ],
  deadlines: [
    { label:'LGPD Recertificação — Jurídico',    date:'08 Jun', urgency:'high',  dept:'⚖️' },
    { label:'Phishing Q2 — Prazo Final',         date:'10 Jun', urgency:'high',  dept:'📧' },
    { label:'Compliance Annual Review',          date:'15 Jun', urgency:'med',   dept:'📋' },
    { label:'Human Risk Assessment Q2',          date:'20 Jun', urgency:'med',   dept:'⚠️' },
    { label:'Certificação ISO 27001 — TI',       date:'30 Jun', urgency:'low',   dept:'💻' },
  ],
  trend: {
    completions: [320, 410, 480, 520, 610, 680],
    certs:       [180, 220, 280, 310, 370, 420],
  },
  donut: {
    labels: ['Cybersecurity','Compliance','Privacidade','Liderança'],
    values: [38, 29, 22, 11],
    colors: ['#00d4ff','#22c55e','#8b5cf6','#14b8a6'],
  },
  regions: [
    { label:'Brasil',        regs:['LGPD'],         score:91, color:'#22c55e', users:187, flag:'🇧🇷' },
    { label:'EUA',           regs:['SOC 2','CCPA'], score:88, color:'#22c55e', users:62,  flag:'🇺🇸' },
    { label:'Europa',        regs:['GDPR','NIS2'],  score:94, color:'#22c55e', users:48,  flag:'🇪🇺' },
    { label:'México',        regs:['LFPDPPP'],      score:76, color:'#f59e0b', users:21,  flag:'🇲🇽' },
    { label:'Oriente Médio', regs:['PDPL'],         score:68, color:'#f59e0b', users:14,  flag:'🇸🇦' },
    { label:'África',        regs:['POPIA'],        score:54, color:'#ef4444', users:8,   flag:'🌍'  },
  ],
};

// ── Helpers ───────────────────────────────────────────────────
function dbCompColor(v) { return v >= 90 ? '#22c55e' : v >= 70 ? '#00d4ff' : v >= 50 ? '#f59e0b' : '#ef4444'; }
function dbAvgColor(v)  { return v >= 9 ? '#22c55e' : v >= 7.5 ? '#00d4ff' : '#f59e0b'; }
const dbRiskCls = { low:'badge-green', med:'badge-yellow', high:'badge-red' };
const dbRiskColor = { low:'#22c55e', med:'#f59e0b', high:'#ef4444' };
const dbUrgColor  = { high:'#ef4444', med:'#f59e0b', low:'#22c55e' };
const dbCatBadge  = { 'Cybersecurity':'badge-blue','Privacidade':'badge-purple','Compliance':'badge-green' };

// ══════════════════════════════════════════════════════════════
//  MAIN RENDER
// ══════════════════════════════════════════════════════════════
function demoProgressWidget() {
  if (typeof DEMO_STATE === 'undefined') return '';
  const u = DEMO_STATE;
  const rm = u.getRiskMeta();
  const score = u.getRiskScore();
  const certs = u.getCertCount();
  const passed = u.completions.filter(c=>c.passed).length;
  const compPct = u.getCompletionPct();
  const lastAct = u.getLastActivity();
  const recentItems = [
    ...u.completions.slice(-3).reverse().map(c=>({ icon: c.passed?'✅':'❌', label: c.courseName, sub: c.date, color: c.passed?'#22c55e':'#ef4444' })),
    ...u.phishing.slice(-2).reverse().map(p=>({ icon: p.action==='clicked'?'🎣':'🛡', label: p.campaignName, sub: p.date.split(',')[0], color: p.action==='clicked'?'#ef4444':'#22c55e' })),
  ].slice(0,4);
  return `
  <div style="background:linear-gradient(135deg,rgba(0,212,255,0.06),rgba(139,92,246,0.06));border:1px solid rgba(0,212,255,0.2);border-radius:18px;padding:20px;margin-top:4px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:0.78rem;font-weight:800;color:#000;flex-shrink:0;">AL</div>
        <div>
          <div style="font-size:0.9rem;font-weight:800;">Meu Progresso — ${u.user.name}</div>
          <div style="font-size:0.7rem;color:#6b7280;">${u.user.email} · ${u.user.dept} · ${u.user.company || 'DEMO SA'}</div>
        </div>
      </div>
      <button onclick="demoShowProfile()" style="padding:6px 14px;border-radius:8px;border:1px solid rgba(0,212,255,0.3);background:transparent;color:#00d4ff;cursor:pointer;font-size:0.76rem;font-weight:600;font-family:inherit;">Ver Perfil Completo →</button>
    </div>
    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;">
      ${[['🏆',certs,'Certificados','#f59e0b'],['📚',passed,'Concluídos','#22c55e'],['📊',compPct+'%','Conclusão','#00d4ff'],['🛡',score,'Risk Score',rm.color]].map(([ic,v,l,c])=>`
        <div style="text-align:center;padding:10px;border-radius:10px;background:rgba(255,255,255,0.03);">
          <div style="font-size:0.85rem;">${ic}</div>
          <div style="font-size:1.2rem;font-weight:900;color:${c};">${v}</div>
          <div style="font-size:0.6rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;">${l}</div>
        </div>`).join('')}
    </div>
    <!-- Risk bar -->
    <div style="margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:#6b7280;margin-bottom:4px;"><span>Human Risk Score</span><span style="color:${rm.color};font-weight:700;">${score}/100 — ${rm.label}</span></div>
      <div style="height:5px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;"><div style="height:100%;width:${score}%;background:${rm.color};border-radius:3px;transition:width .8s;"></div></div>
    </div>
    <!-- Recent activity -->
    ${recentItems.length ? `
    <div style="font-size:0.65rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Atividade Recente</div>
    <div style="display:flex;flex-direction:column;gap:5px;">
      ${recentItems.map(r=>`
        <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;background:rgba(255,255,255,0.02);">
          <span style="font-size:1rem;">${r.icon}</span>
          <div style="flex:1;min-width:0;font-size:0.78rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r.label}</div>
          <span style="font-size:0.65rem;color:#6b7280;flex-shrink:0;">${r.sub}</span>
        </div>`).join('')}
    </div>` : `<div style="text-align:center;color:#6b7280;font-size:0.78rem;padding:8px;">Nenhuma atividade ainda. Vá à Biblioteca e comece um treinamento!</div>`}
  </div>`;
}

// ── Rebuild DASH_DATA from active tenant users ─────────────────
function rebuildDashFromTenant() {
  if (typeof getActiveTenantUsers !== 'function') return;
  const users = getActiveTenantUsers();
  if (!users.length) return;

  const active   = users.filter(u => u.status === 'active' || !u.status);
  const inactive = users.filter(u => u.status === 'inactive');
  const totalCerts = users.reduce((s,u) => s + (typeof u.certs === 'number' ? u.certs : 0), 0);
  const avgCompletion = Math.round(users.reduce((s,u) => s + (u.completion||0), 0) / users.length);
  const highRisk = users.filter(u => u.risk === 'high').length;
  const pendingCount = users.filter(u => (u.completion||0) < 100).length;
  const estHours = Math.round(users.reduce((s,u) => s + ((u.completion||0)/100)*8, 0));

  // Update KPIs
  DASH_DATA.kpis[0] = { ...DASH_DATA.kpis[0], value: String(active.length),   numVal: active.length,   spark: [Math.max(0,active.length-5),Math.max(0,active.length-3),Math.max(0,active.length-2),Math.max(0,active.length-1),active.length,active.length] };
  DASH_DATA.kpis[1] = { ...DASH_DATA.kpis[1], value: String(inactive.length), numVal: inactive.length, spark: [inactive.length+3,inactive.length+2,inactive.length+2,inactive.length+1,inactive.length,inactive.length] };
  DASH_DATA.kpis[2] = { ...DASH_DATA.kpis[2], value: String(avgCompletion)+'%', numVal: avgCompletion };
  DASH_DATA.kpis[3] = { ...DASH_DATA.kpis[3], value: String(pendingCount),  numVal: pendingCount  };
  DASH_DATA.kpis[4] = { ...DASH_DATA.kpis[4], value: String(totalCerts),    numVal: totalCerts    };
  DASH_DATA.kpis[5] = { ...DASH_DATA.kpis[5], value: estHours+'h',          numVal: estHours      };

  // Update scores — Human Risk from HRM if available
  const orgRisk = (typeof HRM_DATA !== 'undefined' && HRM_DATA.orgScore) ? HRM_DATA.orgScore : Math.round(users.reduce((s,u) => s + (u.risk==='high'?75:u.risk==='med'?45:20), 0)/users.length);
  const avgComp2 = avgCompletion;
  DASH_DATA.scores[3] = { ...DASH_DATA.scores[3], value: orgRisk };
  DASH_DATA.scores[4] = { ...DASH_DATA.scores[4], value: avgComp2 };

  // Rebuild depts from real users
  const deptIconMap = { 'Diretoria':'🏛️','TI':'💻','Financeiro':'💰','RH':'👥','Marketing':'📣','Vendas':'📈','Operações':'⚙️','Jurídico':'⚖️','Comercial':'📞','Segurança':'🔒' };
  const deptMap = {};
  users.forEach(u => {
    if (!deptMap[u.dept]) deptMap[u.dept] = [];
    deptMap[u.dept].push(u);
  });
  DASH_DATA.depts = Object.keys(deptMap).map(deptName => {
    const du = deptMap[deptName];
    const avgC = Math.round(du.reduce((s,u)=>s+(u.completion||0),0)/du.length);
    const certCount = du.reduce((s,u)=>s+(typeof u.certs==='number'?u.certs:0),0);
    const riskVals = du.map(u=>u.risk==='high'?3:u.risk==='med'?2:1);
    const avgRisk = riskVals.reduce((s,v)=>s+v,0)/riskVals.length;
    const risk = avgRisk >= 2.5 ? 'high' : avgRisk >= 1.5 ? 'med' : 'low';
    return { name: deptName, icon: deptIconMap[deptName]||'🏢', completion: avgC, avg: (avgC/10).toFixed(1), certs: certCount, risk };
  }).sort((a,b) => b.completion - a.completion);

  // Rebuild activity from real user names
  const riskUsers = users.filter(u=>u.risk==='high');
  const lowRiskUsers = users.filter(u=>u.risk==='low'&&(u.completion||0)>80);
  const acts = [];
  if (lowRiskUsers[0]) acts.push({ icon:'🏆', text:`${lowRiskUsers[0].name} concluiu treinamento e recebeu certificado`, time:'há 5 min', color:'#22c55e' });
  if (riskUsers[0])    acts.push({ icon:'⚠️', text:`Score de risco de <b>${riskUsers[0].name}</b> está em nível <b>Alto</b>`, time:'há 12 min', color:'#ef4444' });
  if (lowRiskUsers[1]) acts.push({ icon:'📚', text:`${lowRiskUsers[1].name} iniciou treinamento de Phishing Awareness`, time:'há 18 min', color:'#00d4ff' });
  if (riskUsers[1])    acts.push({ icon:'📋', text:`Plano de ação criado para <b>${riskUsers[1].name}</b> — ${riskUsers[1].dept}`, time:'há 27 min', color:'#f59e0b' });
  acts.push({ icon:'✅', text:`Departamento ${users[0]?.dept||'TI'} atingiu ${avgCompletion}% de conclusão`, time:'há 35 min', color:'#22c55e' });
  if (typeof DEMO_STATE !== 'undefined' && DEMO_STATE.completions.length) {
    const last = DEMO_STATE.completions[DEMO_STATE.completions.length-1];
    acts.unshift({ icon: last.passed?'🏆':'❌', text:`<b>Admin Local DEMO</b> ${last.passed?'concluiu':'reprovou'}: <b>${last.courseName}</b> (${last.score}%)`, time:'agora', color: last.passed?'#22c55e':'#ef4444' });
  }
  DASH_DATA.activity = acts;

  // Alerts
  DASH_DATA.alerts[0] = { ...DASH_DATA.alerts[0], count: pendingCount };
  DASH_DATA.alerts[2] = { ...DASH_DATA.alerts[2], count: highRisk };
}

window.renderPage_dashboard = function() {
  injectDashCSS();

  // ── Rebuild dashboard from active tenant ──────────────────
  rebuildDashFromTenant();

  const lang = (typeof APP !== 'undefined' && APP.lang) || 'pt';
  const L = DASH_LABELS[lang] || DASH_LABELS.pt;
  const tenantName = (typeof APP !== 'undefined' && APP.tenant && APP.tenant.name) || 'Empresa';

  const totalUsers = DASH_DATA.kpis[0].numVal;
  const avgComp = Math.round(DASH_DATA.depts.reduce((s,d)=>s+d.completion,0)/(DASH_DATA.depts.length||1));

  return `
<div id="dash-module" style="display:flex;flex-direction:column;gap:22px;">

  <!-- ── Header ── -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
      <p style="color:var(--text-secondary,#6b7280);font-size:0.84rem;margin-top:3px;">${L.sub_prefix}${tenantName}</p>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <span style="font-size:0.74rem;color:var(--text-muted,#94a3b8);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:99px;padding:4px 12px;">${L.period}</span>
      <button class="btn btn-secondary btn-sm" onclick="showToast&&showToast('Exportando PDF...','info')">⬇ ${L.export_pdf}</button>
      <button class="btn btn-primary btn-sm" onclick="navTo('reports',null)">📊 ${L.full_report}</button>
    </div>
  </div>

  <!-- ── Quick Actions ── -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px;">
    ${[
      { icon:'👥', lbl:'Novo Usuário',    nav:'users'       },
      { icon:'📋', lbl:'Atribuição',      nav:'assignments' },
      { icon:'🏆', lbl:'Certificado',     nav:'certificates'},
      { icon:'📧', lbl:'Campanha',        nav:'phishing'    },
      { icon:'🛤', lbl:'Nova Trilha',     nav:'departments' },
      { icon:'⚠️', lbl:'Risco Humano',    nav:'hrm'         },
      { icon:'📊', lbl:'Relatório',       nav:'reports'     },
      { icon:'⚙️', lbl:'Configurações',   nav:'settings'    },
    ].map(q=>`
      <div class="db-quick" onclick="navTo('${q.nav}',null)">
        <div class="db-quick-icon">${q.icon}</div>
        <div class="db-quick-lbl">${q.lbl}</div>
      </div>`).join('')}
  </div>

  <!-- ── KPI Grid ── -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
    ${DASH_DATA.kpis.map(k=>`
      <div class="db-kpi" onclick="navTo('${k.nav}',null)" style="cursor:pointer;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:1.4rem;">${k.icon}</span>
          <span style="font-size:0.70rem;font-weight:700;color:${k.up?'#22c55e':'#ef4444'};background:${k.up?'rgba(34,197,94,0.10)':'rgba(239,68,68,0.10)'};padding:3px 8px;border-radius:99px;">
            ${k.delta} <span style="opacity:.65;font-size:0.62rem;">${L.vs_last}</span>
          </span>
        </div>
        <div>
          <div style="font-size:1.7rem;font-weight:800;letter-spacing:-0.03em;color:${k.color};">${k.value}</div>
          <div style="font-size:0.75rem;color:var(--text-muted,#94a3b8);margin-top:2px;">${L[k.key]}</div>
        </div>
        <div>${sparklineSVG ? sparklineSVG(k.spark, k.color, 160, 36) : ''}</div>
      </div>`).join('')}
  </div>

  <!-- ── Scores + Alerts ── -->
  <div style="display:grid;grid-template-columns:1fr 340px;gap:18px;align-items:start;">

    <!-- Scores -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <h3>${L.scores_title}</h3>
        <span class="badge badge-blue">Enterprise</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;">
        ${DASH_DATA.scores.map(sc=>`
          <div class="db-score-card" onclick="navTo('${sc.nav}',null)" style="cursor:pointer;">
            ${scoreRingSVG ? scoreRingSVG(sc.value, sc.color, 68, 5) : `<div style="font-size:1.4rem;font-weight:900;color:${sc.color}">${sc.value}</div>`}
            <div style="flex:1;min-width:0;">
              <div style="font-size:0.72rem;color:var(--text-muted,#94a3b8);line-height:1.35;margin-bottom:6px;">${sc.label}</div>
              <span style="font-size:0.72rem;font-weight:700;color:${sc.inverted?(sc.value<sc.prev?'#22c55e':'#ef4444'):(sc.value>sc.prev?'#22c55e':'#ef4444')};">
                ${sc.inverted?(sc.value<sc.prev?'▼':'▲'):(sc.value>sc.prev?'▲':'▼')} ${Math.abs(sc.value-sc.prev)}pts
              </span>
              <span style="font-size:0.68rem;color:var(--text-muted,#94a3b8);margin-left:4px;">${sc.icon}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Alerts -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3>${L.alerts_title}</h3>
        <span style="font-size:0.72rem;color:var(--text-muted,#94a3b8);">3 ativos</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${DASH_DATA.alerts.map(a=>`
          <div class="db-alert">
            <span style="font-size:1.1rem;">${a.icon}</span>
            <div style="flex:1;min-width:0;">
              <span style="font-size:1.0rem;font-weight:800;color:${a.type==='error'?'#ef4444':'#f59e0b'};">${a.count}</span>
              <span style="font-size:0.76rem;color:var(--text-secondary,#94a3b8);margin-left:5px;">${L[a.key]}</span>
            </div>
            <button class="btn btn-sm" style="flex-shrink:0;background:${a.type==='error'?'rgba(239,68,68,0.12)':'rgba(245,158,11,0.12)'};color:${a.type==='error'?'#ef4444':'#f59e0b'};border:1px solid ${a.type==='error'?'rgba(239,68,68,0.25)':'rgba(245,158,11,0.25)'};" onclick="navTo('${a.nav}',null)">
              ${L[a.btn]}
            </button>
          </div>`).join('')}
      </div>

      <!-- Deadlines -->
      <div style="margin-top:18px;">
        <div style="font-size:0.70rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted,#94a3b8);margin-bottom:10px;">${L.deadlines_title}</div>
        ${DASH_DATA.deadlines.map(d=>`
          <div class="db-deadline">
            <span style="font-size:1.0rem;">${d.dept}</span>
            <div style="flex:1;min-width:0;">
              <div style="font-size:0.78rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d.label}</div>
            </div>
            <span style="font-size:0.70rem;font-weight:800;color:${dbUrgColor[d.urgency]};white-space:nowrap;">${d.date}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- ── Chart Row: Line + Donut ── -->
  <div style="display:grid;grid-template-columns:1fr 340px;gap:18px;align-items:start;">

    <!-- Monthly Trend (Chart.js line) -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3>${L.trend_title}</h3>
        <div style="display:flex;gap:14px;font-size:0.72rem;color:var(--text-muted,#94a3b8);">
          <span style="display:flex;align-items:center;gap:5px;"><span style="width:10px;height:2px;background:#00d4ff;display:inline-block;border-radius:2px;"></span>${L.completed_lbl}</span>
          <span style="display:flex;align-items:center;gap:5px;"><span style="width:10px;height:2px;background:#8b5cf6;display:inline-block;border-radius:2px;"></span>${L.certs_lbl}</span>
        </div>
      </div>
      <div class="dash-canvas-wrap" style="height:200px;">
        <canvas id="dash-line-chart"></canvas>
      </div>
    </div>

    <!-- Donut: Distribution -->
    <div class="card" style="padding:22px;">
      <h3 style="margin-bottom:16px;">📚 Distribuição por Área</h3>
      <div class="dash-canvas-wrap" style="height:160px;">
        <canvas id="dash-donut-chart"></canvas>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
        ${DASH_DATA.donut.labels.map((lbl,i)=>`
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:10px;height:10px;border-radius:50%;background:${DASH_DATA.donut.colors[i]};flex-shrink:0;"></div>
            <div style="flex:1;font-size:0.78rem;">${lbl}</div>
            <div style="font-size:0.80rem;font-weight:800;color:${DASH_DATA.donut.colors[i]};">${DASH_DATA.donut.values[i]}%</div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- ── Top Trainings + Phishing + Activity ── -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;align-items:start;">

    <!-- Top Trainings -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3>${L.top_trainings}</h3>
        <button class="btn btn-ghost btn-sm" onclick="navTo('library',null)">${L.view_all} →</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${DASH_DATA.topTrainings.map((tr,i)=>`
          <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="navTo('library',null)">
            <span style="font-size:0.72rem;font-weight:800;color:var(--text-muted,#94a3b8);width:16px;text-align:center;flex-shrink:0;">${i+1}</span>
            <div style="flex:1;min-width:0;">
              <div style="font-size:0.82rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${tr.name}</div>
              <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
                <span class="badge ${dbCatBadge[tr.cat]||'badge-blue'}" style="font-size:0.60rem;">${tr.cat}</span>
                <span style="font-size:0.66rem;color:var(--text-muted,#94a3b8);">${tr.flags}</span>
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <div style="font-size:0.80rem;font-weight:700;color:#22c55e;">${tr.rate}%</div>
              <div style="font-size:0.66rem;color:var(--text-muted,#94a3b8);">${tr.completions}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Phishing Campaigns -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3>${L.phishing_title}</h3>
        <button class="btn btn-ghost btn-sm" onclick="navTo('phishing',null)">${L.view_all} →</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:2px;">
        ${DASH_DATA.phishingCampaigns.map(c=>`
          <div class="db-campaign-row" onclick="navTo('phishing',null)" style="cursor:pointer;">
            <div style="width:7px;height:7px;border-radius:50%;background:${c.color};flex-shrink:0;${c.status==='active'?'box-shadow:0 0 6px '+c.color:''}"></div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:0.80rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.name}</div>
              <div style="font-size:0.66rem;color:var(--text-muted,#94a3b8);margin-top:2px;">${c.sent} enviados · ${c.opened}% abriram</div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <div style="font-size:0.80rem;font-weight:800;color:${c.color};">${c.click}%</div>
              <div style="font-size:0.62rem;color:var(--text-muted,#94a3b8);">cliques</div>
            </div>
          </div>`).join('')}
      </div>

      <!-- Phishing bar mini chart -->
      <div class="dash-canvas-wrap" style="height:100px;margin-top:14px;">
        <canvas id="dash-phish-chart"></canvas>
      </div>
    </div>

    <!-- Activity Feed -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <h3>${L.activity_title}</h3>
        <span style="font-size:0.70rem;color:var(--text-muted,#94a3b8);">ao vivo</span>
      </div>
      <div style="display:flex;flex-direction:column;">
        ${DASH_DATA.activity.map(a=>`
          <div class="db-feed-item">
            <div class="db-feed-dot" style="background:${a.color};"></div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:0.78rem;line-height:1.45;color:var(--text-secondary,#94a3b8);">${a.text}</div>
              <div style="font-size:0.66rem;color:var(--text-muted,#6b7280);margin-top:3px;">${a.time}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- ── Department Performance Table ── -->
  <div class="card" style="padding:22px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <h3>${L.dept_title}</h3>
      <button class="btn btn-ghost btn-sm" onclick="navTo('departments',null)">${L.view_all} →</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr>
          <th>${L.rank}</th>
          <th>${L.dept}</th>
          <th>${L.completion}</th>
          <th>${L.avg}</th>
          <th>${L.certs}</th>
          <th>Risk</th>
          <th>Trend</th>
        </tr></thead>
        <tbody>
          ${DASH_DATA.depts.map((d,i)=>`
            <tr onclick="navTo('departments',null)" style="cursor:pointer;">
              <td><span style="font-size:0.80rem;font-weight:800;color:${i<3?'#f59e0b':'var(--text-muted,#94a3b8)'};">${i<3?['🥇','🥈','🥉'][i]:'#'+(i+1)}</span></td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="font-size:1.05rem;">${d.icon}</span>
                  <span style="font-weight:600;">${d.name}</span>
                </div>
              </td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;min-width:120px;">
                  <div class="progress-bar" style="flex:1;"><div class="progress-fill" style="width:${d.completion}%;background:${dbCompColor(d.completion)};"></div></div>
                  <span style="font-size:0.80rem;font-weight:700;color:${dbCompColor(d.completion)};">${d.completion}%</span>
                </div>
              </td>
              <td><span style="font-weight:700;color:${dbAvgColor(d.avg)};">${d.avg}</span></td>
              <td><span class="badge badge-purple">${d.certs} 🏆</span></td>
              <td><span class="badge ${dbRiskCls[d.risk]}">${d.risk==='low'?L.risk_low:d.risk==='med'?L.risk_med:L.risk_high}</span></td>
              <td>${sparklineSVG ? sparklineSVG([d.completion-15,d.completion-10,d.completion-6,d.completion-2,d.completion], dbCompColor(d.completion), 80, 28) : ''}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- ── Compliance Map ── -->
  <div class="card" style="padding:22px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <h3>🌐 ${L.compliance_map}</h3>
      <div style="display:flex;gap:14px;font-size:0.72rem;color:var(--text-muted,#94a3b8);">
        <span style="display:flex;align-items:center;gap:5px;"><span style="width:9px;height:9px;border-radius:50%;background:#22c55e;display:inline-block;"></span>${L.risk_low}</span>
        <span style="display:flex;align-items:center;gap:5px;"><span style="width:9px;height:9px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>${L.risk_med}</span>
        <span style="display:flex;align-items:center;gap:5px;"><span style="width:9px;height:9px;border-radius:50%;background:#ef4444;display:inline-block;"></span>${L.risk_high}</span>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">
      ${DASH_DATA.regions.map(r=>`
        <div style="padding:16px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;gap:9px;transition:all 0.2s;cursor:default;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:1.3rem;">${r.flag}</span>
            <div style="flex:1;">
              <div style="font-size:0.84rem;font-weight:700;">${r.label}</div>
              <div style="font-size:0.68rem;color:var(--text-muted,#94a3b8);">${r.users} usuários</div>
            </div>
            <span style="font-size:0.92rem;font-weight:900;color:${r.color};">${r.score}%</span>
          </div>
          <div class="db-prog"><div class="db-prog-fill" style="width:${r.score}%;background:${r.color};"></div></div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;">
            ${r.regs.map(reg=>`<span class="badge badge-blue" style="font-size:0.60rem;">${reg}</span>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  </div>

  ${demoProgressWidget()}

</div>`;
};

// ══════════════════════════════════════════════════════════════
//  CHART.JS INIT (double rAF pattern)
// ══════════════════════════════════════════════════════════════
window.initPage_dashboard = function() {
  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll('.progress-fill, .db-prog-fill').forEach(el => {
      const w = el.style.width;
      el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
  }, 100);

  // Charts — setTimeout 200ms is more reliable than double rAF
  // for canvas elements inside display:grid containers
  setTimeout(() => {
    try { _dashInitLineChart();  } catch(e) { console.warn('dash line chart:', e); }
    try { _dashInitDonutChart(); } catch(e) { console.warn('dash donut chart:', e); }
    try { _dashInitPhishChart(); } catch(e) { console.warn('dash phish chart:', e); }
  }, 200);
};

function _dashChartDefaults() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 600 },
    transitions: { resize: { animation: { duration: 0 } } },
  };
}

function _dashInitLineChart() {
  const canvas = document.getElementById('dash-line-chart');
  if (!canvas || !window.Chart) return;

  const lang = (typeof APP !== 'undefined' && APP.lang) || 'pt';
  const L = DASH_LABELS[lang] || DASH_LABELS.pt;
  const d = DASH_DATA.trend;

  // Set canvas intrinsic size to match CSS layout size
  const wrap = canvas.parentElement;
  const w = wrap.offsetWidth || 600;
  const h = wrap.offsetHeight || 200;
  canvas.width  = w;
  canvas.height = h;

  const chart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: L.month_label,
      datasets: [
        {
          label: L.completed_lbl,
          data: d.completions,
          borderColor: '#00d4ff',
          backgroundColor: 'rgba(0,212,255,0.10)',
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 4,
          tension: 0.4,
          fill: true,
        },
        {
          label: L.certs_lbl,
          data: d.certs,
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139,92,246,0.08)',
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 4,
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      ..._dashChartDefaults(),
      plugins: {
        legend: { display: false },
        tooltip: { animation: false, mode: 'index', intersect: false },
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280', font: { size: 11 } } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280', font: { size: 11 } }, beginAtZero: false },
      },
    },
  });
  requestAnimationFrame(() => chart.resize());
}

function _dashInitDonutChart() {
  const canvas = document.getElementById('dash-donut-chart');
  if (!canvas || !window.Chart) return;

  const wrap = canvas.parentElement;
  const w = wrap.offsetWidth  || 280;
  const h = wrap.offsetHeight || 160;
  canvas.width  = w;
  canvas.height = h;

  const d = DASH_DATA.donut;
  const chart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: d.labels,
      datasets: [{
        data: d.values,
        backgroundColor: d.colors.map(c => c + 'cc'),
        borderColor: d.colors,
        borderWidth: 2,
        hoverOffset: 0,
      }],
    },
    options: {
      ..._dashChartDefaults(),
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: { animation: false },
      },
    },
  });
  requestAnimationFrame(() => chart.resize());
}

function _dashInitPhishChart() {
  const canvas = document.getElementById('dash-phish-chart');
  if (!canvas || !window.Chart) return;

  const wrap = canvas.parentElement;
  const w = wrap.offsetWidth  || 280;
  const h = wrap.offsetHeight || 100;
  canvas.width  = w;
  canvas.height = h;

  const campaigns = DASH_DATA.phishingCampaigns;
  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: campaigns.map(c => c.name.substring(0,18) + '…'),
      datasets: [
        {
          label: 'Abertos %',
          data: campaigns.map(c => c.opened),
          backgroundColor: 'rgba(245,158,11,0.60)',
          borderColor: '#f59e0b',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Cliques %',
          data: campaigns.map(c => c.click),
          backgroundColor: 'rgba(239,68,68,0.60)',
          borderColor: '#ef4444',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      ..._dashChartDefaults(),
      plugins: {
        legend: { display: false },
        tooltip: { animation: false },
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 9 } } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280', font: { size: 9 } }, max: 50 },
      },
    },
  });
  requestAnimationFrame(() => chart.resize());
}
