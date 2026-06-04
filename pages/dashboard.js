// ══════════════════════════════════════════════════════════════
//  PAGE: DASHBOARD EXECUTIVO
// ══════════════════════════════════════════════════════════════

window.renderPage_dashboard = function () {
  const lang = APP.lang;

  const labels = {
    pt: {
      title: 'Dashboard Executivo', sub: 'Visão consolidada · ' + APP.tenant.name,
      active_users: 'Usuários Ativos', inactive_users: 'Usuários Inativos',
      completed: 'Treinamentos Concluídos', pending: 'Pendentes',
      certs: 'Certificados Emitidos', hours: 'Horas Consumidas',
      scores_title: 'Índices Estratégicos', dept_title: 'Desempenho por Departamento',
      trend_title: 'Evolução Mensal', top_trainings: 'Top Treinamentos',
      compliance_map: 'Mapa de Conformidade Global',
      alerts_title: 'Alertas & Ações', view_all: 'Ver todos',
      dept_completion: 'Conclusão', dept_avg: 'Nota Média', dept_certs: 'Certificados',
      risk_low: 'Baixo Risco', risk_med: 'Risco Médio', risk_high: 'Alto Risco',
      month_label: ['Jan','Fev','Mar','Abr','Mai','Jun'],
      period: 'Últimos 30 dias', vs_last: 'vs mês anterior',
      alert_overdue: 'colaboradores com treinamentos vencidos',
      alert_expiring: 'certificados vencem em 30 dias',
      alert_low_risk: 'usuários com Human Risk Score crítico',
      btn_assign: 'Atribuir', btn_notify: 'Notificar', btn_review: 'Revisar',
    },
    en: {
      title: 'Executive Dashboard', sub: 'Consolidated view · ' + APP.tenant.name,
      active_users: 'Active Users', inactive_users: 'Inactive Users',
      completed: 'Completed Trainings', pending: 'Pending',
      certs: 'Certificates Issued', hours: 'Hours Consumed',
      scores_title: 'Strategic Scores', dept_title: 'Department Performance',
      trend_title: 'Monthly Trend', top_trainings: 'Top Trainings',
      compliance_map: 'Global Compliance Map',
      alerts_title: 'Alerts & Actions', view_all: 'View all',
      dept_completion: 'Completion', dept_avg: 'Avg Score', dept_certs: 'Certificates',
      risk_low: 'Low Risk', risk_med: 'Medium Risk', risk_high: 'High Risk',
      month_label: ['Jan','Feb','Mar','Apr','May','Jun'],
      period: 'Last 30 days', vs_last: 'vs previous month',
      alert_overdue: 'employees with overdue trainings',
      alert_expiring: 'certificates expiring in 30 days',
      alert_low_risk: 'users with critical Human Risk Score',
      btn_assign: 'Assign', btn_notify: 'Notify', btn_review: 'Review',
    },
    es: {
      title: 'Panel Ejecutivo', sub: 'Vista consolidada · ' + APP.tenant.name,
      active_users: 'Usuarios Activos', inactive_users: 'Usuarios Inactivos',
      completed: 'Formaciones Completadas', pending: 'Pendientes',
      certs: 'Certificados Emitidos', hours: 'Horas Consumidas',
      scores_title: 'Índices Estratégicos', dept_title: 'Rendimiento por Departamento',
      trend_title: 'Tendencia Mensual', top_trainings: 'Top Formaciones',
      compliance_map: 'Mapa de Cumplimiento Global',
      alerts_title: 'Alertas y Acciones', view_all: 'Ver todos',
      dept_completion: 'Finalización', dept_avg: 'Nota Media', dept_certs: 'Certificados',
      risk_low: 'Bajo Riesgo', risk_med: 'Riesgo Medio', risk_high: 'Alto Riesgo',
      month_label: ['Ene','Feb','Mar','Abr','May','Jun'],
      period: 'Últimos 30 días', vs_last: 'vs mes anterior',
      alert_overdue: 'empleados con formaciones vencidas',
      alert_expiring: 'certificados vencen en 30 días',
      alert_low_risk: 'usuarios con Human Risk Score crítico',
      btn_assign: 'Asignar', btn_notify: 'Notificar', btn_review: 'Revisar',
    },
    fr: {
      title: 'Tableau de Bord Exécutif', sub: 'Vue consolidée · ' + APP.tenant.name,
      active_users: 'Utilisateurs Actifs', inactive_users: 'Utilisateurs Inactifs',
      completed: 'Formations Terminées', pending: 'En attente',
      certs: 'Certificats Émis', hours: 'Heures Consommées',
      scores_title: 'Indices Stratégiques', dept_title: 'Performance par Département',
      trend_title: 'Tendance Mensuelle', top_trainings: 'Top Formations',
      compliance_map: 'Carte de Conformité Mondiale',
      alerts_title: 'Alertes & Actions', view_all: 'Voir tout',
      dept_completion: 'Achèvement', dept_avg: 'Note Moy.', dept_certs: 'Certificats',
      risk_low: 'Faible Risque', risk_med: 'Risque Moyen', risk_high: 'Risque Élevé',
      month_label: ['Jan','Fév','Mar','Avr','Mai','Juin'],
      period: '30 derniers jours', vs_last: 'vs mois précédent',
      alert_overdue: 'employés avec formations en retard',
      alert_expiring: 'certificats expirent dans 30 jours',
      alert_low_risk: 'utilisateurs avec score critique',
      btn_assign: 'Attribuer', btn_notify: 'Notifier', btn_review: 'Réviser',
    },
    ar: {
      title: 'لوحة تحكم تنفيذية', sub: 'عرض موحد · ' + APP.tenant.name,
      active_users: 'المستخدمون النشطون', inactive_users: 'المستخدمون غير النشطين',
      completed: 'التدريبات المكتملة', pending: 'معلقة',
      certs: 'الشهادات الصادرة', hours: 'الساعات المستهلكة',
      scores_title: 'المؤشرات الاستراتيجية', dept_title: 'الأداء حسب القسم',
      trend_title: 'الاتجاه الشهري', top_trainings: 'أفضل التدريبات',
      compliance_map: 'خريطة الامتثال العالمية',
      alerts_title: 'التنبيهات والإجراءات', view_all: 'عرض الكل',
      dept_completion: 'الإتمام', dept_avg: 'متوسط الدرجة', dept_certs: 'الشهادات',
      risk_low: 'مخاطر منخفضة', risk_med: 'مخاطر متوسطة', risk_high: 'مخاطر عالية',
      month_label: ['يناير','فبراير','مارس','أبريل','مايو','يونيو'],
      period: 'آخر 30 يومًا', vs_last: 'مقارنة بالشهر الماضي',
      alert_overdue: 'موظفون لديهم تدريبات متأخرة',
      alert_expiring: 'شهادات تنتهي خلال 30 يومًا',
      alert_low_risk: 'مستخدمون بدرجة مخاطر حرجة',
      btn_assign: 'تعيين', btn_notify: 'إشعار', btn_review: 'مراجعة',
    },
  };
  const L = labels[lang] || labels.pt;

  // ── Data ──
  const kpis = [
    { label: L.active_users,   value: '340',    delta: '+12', up: true,  icon: '👥', color: 'var(--brand-accent)',   spark: [280,295,300,310,325,340] },
    { label: L.inactive_users, value: '28',     delta: '-5',  up: true,  icon: '💤', color: 'var(--brand-warning)',  spark: [40,38,35,33,31,28] },
    { label: L.completed,      value: '2.847',  delta: '+234',up: true,  icon: '✅', color: 'var(--brand-success)',  spark: [1800,2000,2200,2450,2650,2847] },
    { label: L.pending,        value: '183',    delta: '-41', up: true,  icon: '⏳', color: 'var(--brand-danger)',   spark: [280,260,240,210,200,183] },
    { label: L.certs,          value: '1.204',  delta: '+98', up: true,  icon: '🏆', color: 'var(--brand-teal)',     spark: [800,900,980,1050,1120,1204] },
    { label: L.hours,          value: '8.641h', delta: '+12%',up: true,  icon: '⏱', color: 'var(--brand-purple)',  spark: [5000,5800,6500,7100,7900,8641] },
  ];

  const scores = [
    { label: 'Cybersecurity Awareness Score', value: 82, color: '#0057FF', prev: 76, icon: '🛡' },
    { label: 'Compliance Score',              value: 91, color: '#00D68F', prev: 88, icon: '📋' },
    { label: 'Privacy Score',                 value: 78, color: '#7B5EA7', prev: 72, icon: '🔒' },
    { label: 'Human Risk Score',              value: 65, color: '#FF9500', prev: 69, icon: '⚠️', inverted: true },
    { label: 'Learning Engagement Score',     value: 88, color: '#00B8A9', prev: 83, icon: '🎯' },
    { label: 'Organizational Maturity Score', value: 74, color: '#FF3B5C', prev: 70, icon: '🏢' },
  ];

  const depts = [
    { name: 'RH',         icon: '👥', completion: 96, avg: 9.1, certs: 48,  rank: 1, risk: 'low'  },
    { name: 'Jurídico',   icon: '⚖️', completion: 94, avg: 9.3, certs: 22,  rank: 2, risk: 'low'  },
    { name: 'TI',         icon: '💻', completion: 88, avg: 8.7, certs: 64,  rank: 3, risk: 'low'  },
    { name: 'Financeiro', icon: '💰', completion: 81, avg: 8.2, certs: 38,  rank: 4, risk: 'med'  },
    { name: 'Comercial',  icon: '📈', completion: 72, avg: 7.8, certs: 55,  rank: 5, risk: 'med'  },
    { name: 'Operações',  icon: '⚙️', completion: 61, avg: 7.1, certs: 31,  rank: 6, risk: 'high' },
  ];

  const topTrainings = [
    { name: 'Phishing & Engenharia Social',      category: 'Cybersecurity', completions: 312, rate: 94, lang: '🇧🇷🇺🇸🇪🇸' },
    { name: 'LGPD na Prática',                   category: 'Privacidade',   completions: 287, rate: 91, lang: '🇧🇷' },
    { name: 'Código de Ética Empresarial',        category: 'Compliance',    completions: 274, rate: 89, lang: '🇧🇷🇺🇸🇫🇷🇸🇦' },
    { name: 'Senhas Seguras e MFA',               category: 'Cybersecurity', completions: 251, rate: 96, lang: '🇧🇷🇺🇸🇪🇸' },
    { name: 'Home Office Seguro',                 category: 'Cybersecurity', completions: 228, rate: 88, lang: '🇧🇷🇺🇸' },
  ];

  const alerts = [
    { type: 'error',   icon: '❌', count: 47,  text: L.alert_overdue,   btn: L.btn_notify  },
    { type: 'warning', icon: '⚠️', count: 23,  text: L.alert_expiring,  btn: L.btn_review  },
    { type: 'warning', icon: '🔴', count: 12,  text: L.alert_low_risk,  btn: L.btn_assign  },
  ];

  const monthData = {
    completions: [320, 410, 480, 520, 610, 680],
    certs:       [180, 220, 280, 310, 370, 420],
  };

  // ─────────────────────────────
  // RENDER
  // ─────────────────────────────
  return `
  <div style="display:flex;flex-direction:column;gap:24px;">

    <!-- Header -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        <span style="font-size:0.75rem;color:var(--text-muted);background:rgba(255,255,255,0.04);border:1px solid var(--bg-border);border-radius:99px;padding:4px 12px;">${L.period}</span>
        <button class="btn btn-secondary btn-sm" onclick="showToast('Exportando relatório PDF...','info')">⬇ Export PDF</button>
        <button class="btn btn-primary btn-sm" onclick="navTo('reports',null)">📊 Full Report</button>
      </div>
    </div>

    <!-- KPI Grid -->
    <div class="stagger" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
      ${kpis.map(k => `
        <div class="card" style="padding:18px;display:flex;flex-direction:column;gap:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:1.4rem;">${k.icon}</span>
            <span style="font-size:0.72rem;font-weight:700;color:${k.up?'var(--brand-success)':'var(--brand-danger)'};background:${k.up?'rgba(0,214,143,0.1)':'rgba(255,59,92,0.1)'};padding:3px 8px;border-radius:99px;">
              ${k.delta} <span style="opacity:.6;font-size:0.65rem;">${L.vs_last}</span>
            </span>
          </div>
          <div>
            <div style="font-size:1.7rem;font-weight:800;letter-spacing:-0.03em;color:${k.color};">${k.value}</div>
            <div style="font-size:0.76rem;color:var(--text-muted);margin-top:2px;">${k.label}</div>
          </div>
          <div>${sparklineSVG(k.spark, k.color, 140, 36)}</div>
        </div>
      `).join('')}
    </div>

    <!-- Strategic Scores + Alerts -->
    <div style="display:grid;grid-template-columns:1fr 340px;gap:18px;align-items:start;">

      <!-- Scores -->
      <div class="card" style="padding:22px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
          <h3>${L.scores_title}</h3>
          <span class="badge badge-blue">Enterprise</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
          ${scores.map(s => `
            <div style="display:flex;align-items:center;gap:14px;padding:14px;border-radius:var(--radius-md);background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);">
              ${scoreRingSVG(s.value, s.color, 68, 5)}
              <div style="flex:1;min-width:0;">
                <div style="font-size:0.72rem;color:var(--text-muted);line-height:1.3;margin-bottom:6px;">${s.label}</div>
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="font-size:0.72rem;color:${s.inverted?(s.value<s.prev?'var(--brand-success)':'var(--brand-danger)'):(s.value>s.prev?'var(--brand-success)':'var(--brand-danger)')};font-weight:700;">
                    ${s.inverted?(s.value<s.prev?'▼':'▲'):(s.value>s.prev?'▲':'▼')} ${Math.abs(s.value-s.prev)}pts
                  </span>
                  <span style="font-size:0.68rem;color:var(--text-muted);">${s.icon}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Alerts -->
      <div class="card" style="padding:22px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
          <h3>${L.alerts_title}</h3>
          <a href="#" style="font-size:0.76rem;color:var(--text-accent);">${L.view_all}</a>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${alerts.map(a => `
            <div style="padding:14px;border-radius:var(--radius-md);background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span>${a.icon}</span>
                <span style="font-size:1.1rem;font-weight:800;color:${a.type==='error'?'var(--brand-danger)':'var(--brand-warning)'};">${a.count}</span>
                <span style="font-size:0.76rem;color:var(--text-secondary);flex:1;">${a.text}</span>
              </div>
              <button class="btn btn-sm" style="align-self:flex-end;background:${a.type==='error'?'rgba(255,59,92,0.12)':'rgba(255,149,0,0.12)'};color:${a.type==='error'?'var(--brand-danger)':'var(--brand-warning)'};border:1px solid ${a.type==='error'?'rgba(255,59,92,0.25)':'rgba(255,149,0,0.25)'};" onclick="showToast('Ação executada','success')">
                ${a.btn}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Trend Chart + Top Trainings -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">

      <!-- Monthly Trend -->
      <div class="card" style="padding:22px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
          <h3>${L.trend_title}</h3>
          <div style="display:flex;gap:16px;font-size:0.72rem;">
            <span style="display:flex;align-items:center;gap:5px;color:var(--text-secondary);">
              <span style="width:10px;height:2px;background:var(--brand-accent);display:inline-block;border-radius:2px;"></span>${L.completed}
            </span>
            <span style="display:flex;align-items:center;gap:5px;color:var(--text-secondary);">
              <span style="width:10px;height:2px;background:var(--brand-teal);display:inline-block;border-radius:2px;"></span>${L.certs}
            </span>
          </div>
        </div>
        ${barChartSVG(monthData, L.month_label)}
      </div>

      <!-- Top Trainings -->
      <div class="card" style="padding:22px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
          <h3>${L.top_trainings}</h3>
          <button class="btn btn-ghost btn-sm" onclick="navTo('library',null)">${L.view_all} →</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${topTrainings.map((tr, i) => `
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:0.72rem;font-weight:800;color:var(--text-muted);width:18px;text-align:center;flex-shrink:0;">${i+1}</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:0.84rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${tr.name}</div>
                <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
                  <span class="badge ${tr.category==='Cybersecurity'?'badge-blue':tr.category==='Privacidade'?'badge-purple':'badge-green'}" style="font-size:0.62rem;">${tr.category}</span>
                  <span style="font-size:0.68rem;color:var(--text-muted);">${tr.lang}</span>
                </div>
              </div>
              <div style="text-align:right;flex-shrink:0;">
                <div style="font-size:0.82rem;font-weight:700;color:var(--brand-success);">${tr.rate}%</div>
                <div style="font-size:0.68rem;color:var(--text-muted);">${tr.completions}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Department Performance -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
        <h3>${L.dept_title}</h3>
        <button class="btn btn-ghost btn-sm" onclick="navTo('departments',null)">${L.view_all} →</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Departamento</th>
              <th>${L.dept_completion}</th>
              <th>${L.dept_avg}</th>
              <th>${L.dept_certs}</th>
              <th>Risk Level</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            ${depts.map(d => `
              <tr>
                <td>
                  <span style="font-size:0.78rem;font-weight:800;color:${d.rank<=2?'var(--brand-warning)':'var(--text-muted)'};">
                    ${d.rank<=3?['🥇','🥈','🥉'][d.rank-1]:'#'+d.rank}
                  </span>
                </td>
                <td>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <span style="font-size:1.1rem;">${d.icon}</span>
                    <span style="font-weight:600;">${d.name}</span>
                  </div>
                </td>
                <td>
                  <div style="display:flex;align-items:center;gap:10px;min-width:120px;">
                    <div class="progress-bar" style="flex:1;">
                      <div class="progress-fill ${d.completion>=90?'green':d.completion>=70?'':'red'}" style="width:${d.completion}%;"></div>
                    </div>
                    <span style="font-size:0.8rem;font-weight:700;color:${d.completion>=90?'var(--brand-success)':d.completion>=70?'var(--text-primary)':'var(--brand-danger)'};">${d.completion}%</span>
                  </div>
                </td>
                <td><span style="font-weight:700;">${d.avg}</span></td>
                <td><span class="badge badge-teal">${d.certs}</span></td>
                <td>
                  <span class="badge ${d.risk==='low'?'badge-green':d.risk==='med'?'badge-yellow':'badge-red'}">
                    ${d.risk==='low'?L.risk_low:d.risk==='med'?L.risk_med:L.risk_high}
                  </span>
                </td>
                <td>${sparklineSVG([d.completion-15,d.completion-10,d.completion-6,d.completion-2,d.completion],'var(--brand-accent)',80,28)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Compliance Map (stylized world regions) -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
        <h3>${L.compliance_map}</h3>
        <div style="display:flex;gap:14px;font-size:0.72rem;">
          <span style="display:flex;align-items:center;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:var(--brand-success);display:inline-block;"></span>${L.risk_low}</span>
          <span style="display:flex;align-items:center;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:var(--brand-warning);display:inline-block;"></span>${L.risk_med}</span>
          <span style="display:flex;align-items:center;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:var(--brand-danger);display:inline-block;"></span>${L.risk_high}</span>
        </div>
      </div>
      ${complianceMapHTML()}
    </div>

  </div>`;
};

// ─────────────────────────────
// BAR CHART (SVG)
// ─────────────────────────────
function barChartSVG(data, labels) {
  const w = 480, h = 180, pad = { left: 30, right: 10, top: 10, bottom: 28 };
  const iw = w - pad.left - pad.right;
  const ih = h - pad.top - pad.bottom;
  const maxVal = Math.max(...data.completions, ...data.certs);
  const groups = labels.length;
  const groupW = iw / groups;
  const barW = groupW * 0.28;

  const bars1 = data.completions.map((v, i) => {
    const bh = (v / maxVal) * ih;
    const x = pad.left + i * groupW + groupW * 0.15;
    const y = pad.top + ih - bh;
    return `<rect x="${x}" y="${y}" width="${barW}" height="${bh}" rx="3" fill="var(--brand-accent)" opacity="0.85"/>`;
  }).join('');

  const bars2 = data.certs.map((v, i) => {
    const bh = (v / maxVal) * ih;
    const x = pad.left + i * groupW + groupW * 0.15 + barW + 3;
    const y = pad.top + ih - bh;
    return `<rect x="${x}" y="${y}" width="${barW}" height="${bh}" rx="3" fill="var(--brand-teal)" opacity="0.85"/>`;
  }).join('');

  const xLabels = labels.map((l, i) => {
    const x = pad.left + i * groupW + groupW / 2;
    return `<text x="${x}" y="${h - 6}" text-anchor="middle" fill="var(--text-muted)" font-size="10">${l}</text>`;
  }).join('');

  // Y gridlines
  const yLines = [0.25, 0.5, 0.75, 1].map(f => {
    const y = pad.top + ih * (1 - f);
    const val = Math.round(maxVal * f);
    return `<line x1="${pad.left}" y1="${y}" x2="${w - pad.right}" y2="${y}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <text x="${pad.left - 4}" y="${y + 4}" text-anchor="end" fill="var(--text-muted)" font-size="9">${val}</text>`;
  }).join('');

  return `<svg width="100%" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" style="overflow:visible;">
    ${yLines}${bars1}${bars2}${xLabels}
  </svg>`;
}

// ─────────────────────────────
// COMPLIANCE MAP (stylized regions)
// ─────────────────────────────
function complianceMapHTML() {
  const regions = [
    { label: 'Brasil',         regs: ['LGPD'], score: 91, color: 'var(--brand-success)', users: 187, flag: '🇧🇷' },
    { label: 'EUA',            regs: ['SOC 2','CCPA'], score: 88, color: 'var(--brand-success)', users: 62, flag: '🇺🇸' },
    { label: 'Europa',         regs: ['GDPR','NIS2'], score: 94, color: 'var(--brand-success)', users: 48, flag: '🇪🇺' },
    { label: 'México',         regs: ['LFPDPPP'], score: 76, color: 'var(--brand-warning)', users: 21, flag: '🇲🇽' },
    { label: 'Oriente Médio',  regs: ['PDPL','DIFC'], score: 68, color: 'var(--brand-warning)', users: 14, flag: '🇸🇦' },
    { label: 'África',         regs: ['POPIA'], score: 54, color: 'var(--brand-danger)', users: 8, flag: '🌍' },
  ];
  return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">
    ${regions.map(r => `
      <div style="padding:16px;border-radius:var(--radius-md);background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:1.3rem;">${r.flag}</span>
          <div>
            <div style="font-size:0.84rem;font-weight:700;">${r.label}</div>
            <div style="font-size:0.68rem;color:var(--text-muted);">${r.users} usuários</div>
          </div>
          <span style="margin-left:auto;font-size:0.9rem;font-weight:800;color:${r.color};">${r.score}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${r.score}%;background:${r.color};"></div></div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">
          ${r.regs.map(reg => `<span class="badge badge-blue" style="font-size:0.6rem;">${reg}</span>`).join('')}
        </div>
      </div>
    `).join('')}
  </div>`;
}

window.initPage_dashboard = function () {
  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(el => {
      const w = el.style.width;
      el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.8s ease'; el.style.width = w; });
    });
  }, 100);
};
