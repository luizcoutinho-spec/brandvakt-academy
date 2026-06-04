// ══════════════════════════════════════════════════════════════
//  MISC PAGES: Reports · SCORM · Assignments · Settings · Integrations
// ══════════════════════════════════════════════════════════════

// ─────────────────────────────
//  REPORTS
// ─────────────────────────────
window.renderPage_reports = function() {
  const lang = APP.lang;
  const L = {
    pt:{ title:'Relatórios & Inteligência', sub:'Analytics avançado e exportação de dados', btn_new:'Novo Relatório', btn_schedule:'Agendar Envio', kpi1:'Relatórios gerados', kpi2:'Exportações PDF', kpi3:'Agendamentos ativos', kpi4:'Dashboards compartilhados', rep_title:'Relatórios Disponíveis', col_name:'Nome', col_type:'Tipo', col_date:'Última Atualização', col_actions:'Ações', btn_view:'Ver', btn_export:'Exportar', btn_share:'Compartilhar' },
    en:{ title:'Reports & Intelligence', sub:'Advanced analytics and data export', btn_new:'New Report', btn_schedule:'Schedule Send', kpi1:'Reports generated', kpi2:'PDF Exports', kpi3:'Active schedules', kpi4:'Shared dashboards', rep_title:'Available Reports', col_name:'Name', col_type:'Type', col_date:'Last Updated', col_actions:'Actions', btn_view:'View', btn_export:'Export', btn_share:'Share' },
    es:{ title:'Informes e Inteligencia', sub:'Analítica avanzada y exportación de datos', btn_new:'Nuevo Informe', btn_schedule:'Programar Envío', kpi1:'Informes generados', kpi2:'Exportaciones PDF', kpi3:'Programaciones activas', kpi4:'Paneles compartidos', rep_title:'Informes Disponibles', col_name:'Nombre', col_type:'Tipo', col_date:'Última Actualización', col_actions:'Acciones', btn_view:'Ver', btn_export:'Exportar', btn_share:'Compartir' },
    fr:{ title:'Rapports & Intelligence', sub:'Analytique avancée et exportation de données', btn_new:'Nouveau Rapport', btn_schedule:'Planifier l\'envoi', kpi1:'Rapports générés', kpi2:'Exports PDF', kpi3:'Planifications actives', kpi4:'Tableaux partagés', rep_title:'Rapports Disponibles', col_name:'Nom', col_type:'Type', col_date:'Dernière mise à jour', col_actions:'Actions', btn_view:'Voir', btn_export:'Exporter', btn_share:'Partager' },
    ar:{ title:'التقارير والذكاء', sub:'تحليلات متقدمة وتصدير البيانات', btn_new:'تقرير جديد', btn_schedule:'جدولة الإرسال', kpi1:'تقارير تم إنشاؤها', kpi2:'تصدير PDF', kpi3:'جداول نشطة', kpi4:'لوحات مشتركة', rep_title:'التقارير المتاحة', col_name:'الاسم', col_type:'النوع', col_date:'آخر تحديث', col_actions:'الإجراءات', btn_view:'عرض', btn_export:'تصدير', btn_share:'مشاركة' },
  }[lang] || { title:'Reports', sub:'Analytics' };

  const reports = [
    { name:'Compliance Score Executivo', type:'Compliance', date:'01/12/2024', icon:'📋', badge:'badge-green' },
    { name:'Human Risk Dashboard', type:'Risco', date:'30/11/2024', icon:'🛡', badge:'badge-red' },
    { name:'Certificações por Departamento', type:'Certificados', date:'28/11/2024', icon:'🏆', badge:'badge-teal' },
    { name:'LGPD Conformidade Brasil', type:'Privacidade', date:'25/11/2024', icon:'🔒', badge:'badge-purple' },
    { name:'Engajamento e Conclusões', type:'Engajamento', date:'20/11/2024', icon:'📊', badge:'badge-blue' },
    { name:'Phishing Simulation Results', type:'Cybersecurity', date:'15/11/2024', icon:'🎣', badge:'badge-yellow' },
    { name:'Relatório Executivo Mensal', type:'Executivo', date:'01/11/2024', icon:'📑', badge:'badge-blue' },
  ];

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div><h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
      <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p></div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary btn-sm" onclick="showToast('Agendando relatório...','info')">🕐 ${L.btn_schedule}</button>
        <button class="btn btn-primary btn-sm" onclick="showToast('Criando relatório customizado...','info')">+ ${L.btn_new}</button>
      </div>
    </div>

    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:12px;" class="stagger">
      ${[['📄','284',L.kpi1,'var(--brand-accent)'],['📤','1.021',L.kpi2,'var(--brand-teal)'],['🕐','12',L.kpi3,'var(--brand-purple)'],['🔗','34',L.kpi4,'var(--brand-success)']].map(([icon,val,label,color])=>`
        <div class="card" style="padding:16px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:1.3rem;">${icon}</span>
          <div><div style="font-size:1.2rem;font-weight:800;color:${color};">${val}</div><div style="font-size:0.68rem;color:var(--text-muted);">${label}</div></div>
        </div>`).join('')}
    </div>

    <!-- Chart: trend -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div class="card" style="padding:22px;">
        <h3 style="margin-bottom:16px;">📈 Compliance Score — Evolução</h3>
        ${barChartSVG({completions:[72,76,80,84,88,91],certs:[65,70,74,79,83,87]},['Jan','Fev','Mar','Abr','Mai','Jun'])}
      </div>
      <div class="card" style="padding:22px;">
        <h3 style="margin-bottom:16px;">🛡 Human Risk Score — Evolução</h3>
        ${barChartSVG({completions:[45,50,54,58,62,65],certs:[30,35,38,42,46,48]},['Jan','Fev','Mar','Abr','Mai','Jun'])}
      </div>
    </div>

    <!-- Reports list -->
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:16px 20px;border-bottom:1px solid var(--bg-border);">
        <h4>${L.rep_title}</h4>
      </div>
      <div class="table-wrap" style="border:none;border-radius:0;">
        <table>
          <thead><tr><th>${L.col_name}</th><th>${L.col_type}</th><th>${L.col_date}</th><th>${L.col_actions}</th></tr></thead>
          <tbody>
            ${reports.map(r=>`<tr>
              <td><div style="display:flex;align-items:center;gap:8px;"><span>${r.icon}</span><span style="font-weight:600;">${r.name}</span></div></td>
              <td><span class="badge ${r.badge}">${r.type}</span></td>
              <td style="color:var(--text-muted);font-size:0.78rem;">${r.date}</td>
              <td><div style="display:flex;gap:5px;">
                <button class="btn btn-ghost btn-sm" onclick="showToast('Visualizando...','info')">👁 ${L.btn_view}</button>
                <button class="btn btn-secondary btn-sm" onclick="showToast('Exportando PDF...','info')">⬇ PDF</button>
                <button class="btn btn-ghost btn-sm" onclick="showToast('Link copiado!','success')">🔗</button>
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
};

// ─────────────────────────────
//  SCORM UPLOAD PAGE
// ─────────────────────────────
window.renderPage_scorm = function() {
  const lang = APP.lang;
  const queue = [
    { name:'phishing_awareness_v2.zip',    size:'14.2 MB', status:'published', scorm:'1.2',  langs:'🇧🇷🇺🇸🇪🇸', date:'01/12/2024', icon:'🎣' },
    { name:'lgpd_pratica_v3.zip',          size:'22.8 MB', status:'published', scorm:'1.2',  langs:'🇧🇷',       date:'28/11/2024', icon:'🔒' },
    { name:'home_office_seguro_v1.zip',    size:'18.4 MB', status:'validating',scorm:'2004', langs:'🇧🇷🇺🇸',     date:'30/11/2024', icon:'🏠' },
    { name:'esg_sustentabilidade_v1.zip',  size:'9.1 MB',  status:'draft',     scorm:'1.2',  langs:'🇧🇷🇺🇸🇪🇸', date:'27/11/2024', icon:'🌱' },
    { name:'aml_integridade_v1.zip',       size:'16.5 MB', status:'error',     scorm:'2004', langs:'🇧🇷🇺🇸',     date:'25/11/2024', icon:'💸' },
  ];
  const statusColor = { published:'var(--brand-success)', validating:'var(--brand-warning)', draft:'var(--text-muted)', error:'var(--brand-danger)' };
  const statusLabel = { pt:{published:'Publicado',validating:'Validando',draft:'Rascunho',error:'Erro'}, en:{published:'Published',validating:'Validating',draft:'Draft',error:'Error'} };
  const SL = statusLabel[lang] || statusLabel.pt;
  const title = {pt:'Gestão SCORM',en:'SCORM Management',es:'Gestión SCORM',fr:'Gestion SCORM',ar:'إدارة SCORM'}[lang]||'SCORM Management';
  const sub = {pt:'Upload, validação e controle de versões de pacotes SCORM',en:'Upload, validation and version control of SCORM packages',es:'Subida, validación y control de versiones SCORM',fr:'Upload, validation et contrôle de versions SCORM',ar:'رفع وتحقق والتحكم في إصدارات حزم SCORM'}[lang]||'';

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div><h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${title}</h2>
      <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${sub}</p></div>
      <button class="btn btn-primary btn-sm" onclick="showModal('modal-new-course')">📦 Upload SCORM</button>
    </div>

    <!-- Compat banner -->
    <div style="display:flex;gap:12px;padding:14px 18px;background:rgba(0,87,255,0.06);border:1px solid rgba(0,87,255,0.15);border-radius:var(--radius-md);flex-wrap:wrap;align-items:center;">
      <span style="font-size:1.2rem;">📦</span>
      <div style="flex:1;min-width:200px;">
        <div style="font-size:0.85rem;font-weight:700;">Compatibilidade SCORM Total</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">SCORM 1.2 · SCORM 2004 3ª Ed. · SCORM 2004 4ª Ed. · Preparado para xAPI / Tin Can / LRS</div>
      </div>
      <div style="display:flex;gap:10px;">
        ${['SCORM 1.2','SCORM 2004','xAPI Ready','LRS Ready'].map(t=>`<span class="badge badge-blue">${t}</span>`).join('')}
      </div>
    </div>

    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;" class="stagger">
      ${[['📦','48','Pacotes','var(--brand-accent)'],['✅','42','Publicados','var(--brand-success)'],['⚠️','3','Validando','var(--brand-warning)'],['❌','1','Com erro','var(--brand-danger)'],['🌍','127','Versões linguísticas','var(--brand-teal)']].map(([i,v,l,c])=>`
        <div class="card" style="padding:14px;display:flex;align-items:center;gap:8px;">
          <span>${i}</span><div><div style="font-size:1.1rem;font-weight:800;color:${c};">${v}</div><div style="font-size:0.66rem;color:var(--text-muted);">${l}</div></div>
        </div>`).join('')}
    </div>

    <!-- Queue -->
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:16px 20px;border-bottom:1px solid var(--bg-border);"><h4>Pacotes SCORM</h4></div>
      <div class="table-wrap" style="border:none;border-radius:0;">
        <table>
          <thead><tr><th>Arquivo</th><th>SCORM</th><th>Idiomas</th><th>Tamanho</th><th>Upload</th><th>Status</th><th>Ações</th></tr></thead>
          <tbody>
            ${queue.map(q=>`<tr>
              <td><div style="display:flex;align-items:center;gap:8px;"><span>${q.icon}</span><span style="font-weight:600;font-size:0.82rem;">${q.name}</span></div></td>
              <td><span class="badge badge-blue">${q.scorm}</span></td>
              <td>${q.langs}</td>
              <td style="font-size:0.78rem;color:var(--text-muted);">${q.size}</td>
              <td style="font-size:0.78rem;color:var(--text-muted);">${q.date}</td>
              <td><span style="font-size:0.72rem;font-weight:700;color:${statusColor[q.status]};background:${statusColor[q.status]}22;padding:3px 9px;border-radius:99px;border:1px solid ${statusColor[q.status]}44;">${SL[q.status]}</span></td>
              <td><div style="display:flex;gap:4px;">
                ${q.status==='error'?`<button class="btn btn-sm btn-danger" onclick="showToast('Revalidando...','info')">↺ Revalidar</button>`:`<button class="btn btn-ghost btn-sm" onclick="showToast('Editando...','info')">✏️</button>`}
                <button class="btn btn-ghost btn-sm" onclick="showToast('Baixando...','info')">⬇</button>
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
};

// ─────────────────────────────
//  ASSIGNMENTS
// ─────────────────────────────
window.renderPage_assignments = function() {
  const lang = APP.lang;
  const title = {pt:'Atribuições de Treinamento',en:'Training Assignments',es:'Asignaciones de Formación',fr:'Attributions de Formation',ar:'تكليفات التدريب'}[lang]||'Assignments';
  const sub = {pt:'Gerencie obrigatoriedades e prazos de treinamento',en:'Manage training requirements and deadlines',es:'Gestione requisitos y plazos de formación',fr:'Gérez les obligations et délais de formation',ar:'إدارة متطلبات التدريب والمواعيد النهائية'}[lang]||'';

  const assignments = [
    { course:'Phishing & Engenharia Social', target:'Todos os usuários', due:'31/12/2024', completion:87, status:'active', mandatory:true },
    { course:'LGPD na Prática',             target:'Brasil · RH · Jurídico', due:'15/12/2024', completion:91, status:'active', mandatory:true },
    { course:'Código de Ética',             target:'Todos os usuários', due:'31/01/2025', completion:76, status:'active', mandatory:true },
    { course:'Anticorrupção',               target:'Gestores · Financeiro', due:'20/12/2024', completion:68, status:'active', mandatory:true },
    { course:'Home Office Seguro',          target:'Trabalho Remoto', due:'28/02/2025', completion:55, status:'active', mandatory:false },
    { course:'Cloud Security',             target:'TI · DevOps', due:'31/03/2025', completion:42, status:'active', mandatory:false },
    { course:'ESG e Sustentabilidade',      target:'Lideranças', due:'30/04/2025', completion:18, status:'draft', mandatory:false },
  ];

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div><h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${title}</h2>
      <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${sub}</p></div>
      <button class="btn btn-primary btn-sm" onclick="showToast('Criando atribuição...','info')">+ Nova Atribuição</button>
    </div>

    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;" class="stagger">
      ${[['📋','24','Atribuições ativas','var(--brand-accent)'],['✅','19','Concluídas','var(--brand-success)'],['⏳','183','Pendentes','var(--brand-warning)'],['🚨','47','Em atraso','var(--brand-danger)']].map(([i,v,l,c])=>`
        <div class="card" style="padding:14px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:1.3rem;">${i}</span><div><div style="font-size:1.2rem;font-weight:800;color:${c};">${v}</div><div style="font-size:0.68rem;color:var(--text-muted);">${l}</div></div>
        </div>`).join('')}
    </div>

    <!-- Table -->
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:16px 20px;border-bottom:1px solid var(--bg-border);"><h4>Atribuições</h4></div>
      <div class="table-wrap" style="border:none;border-radius:0;">
        <table>
          <thead><tr><th>Treinamento</th><th>Público-Alvo</th><th>Prazo</th><th>Conclusão</th><th>Tipo</th><th>Status</th><th>Ações</th></tr></thead>
          <tbody>
            ${assignments.map(a=>`<tr>
              <td style="font-weight:600;font-size:0.84rem;">${a.course}</td>
              <td style="font-size:0.78rem;color:var(--text-muted);">${a.target}</td>
              <td style="font-size:0.78rem;">${a.due}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;min-width:100px;">
                  <div class="progress-bar" style="flex:1;"><div class="progress-fill ${a.completion>=80?'green':a.completion>=50?'':'red'}" style="width:${a.completion}%;"></div></div>
                  <span style="font-size:0.78rem;font-weight:700;color:${a.completion>=80?'var(--brand-success)':a.completion>=50?'var(--text-primary)':'var(--brand-danger)'};">${a.completion}%</span>
                </div>
              </td>
              <td>${a.mandatory?'<span class="badge badge-red">OBRIG.</span>':'<span class="badge badge-blue">Opcional</span>'}</td>
              <td><span class="badge ${a.status==='active'?'badge-green':'badge-yellow'}">${a.status==='active'?'Ativa':'Rascunho'}</span></td>
              <td><div style="display:flex;gap:4px;">
                <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Editando...','info')">✏️</button>
                <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Notificando...','info')">🔔</button>
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
};

window.initPage_assignments = function() {
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.6s ease'; el.style.width=w; });
    });
  }, 100);
};

// ─────────────────────────────
//  SETTINGS
// ─────────────────────────────
window.renderPage_settings = function() {
  const lang = APP.lang;
  const title = {pt:'Configurações',en:'Settings',es:'Configuración',fr:'Paramètres',ar:'الإعدادات'}[lang]||'Settings';

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div><h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${title}</h2>
    <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">Configurações globais da plataforma e do tenant</p></div>

    <div style="display:grid;grid-template-columns:220px 1fr;gap:20px;">
      <!-- Settings nav -->
      <div style="display:flex;flex-direction:column;gap:4px;">
        ${['🏢 Empresa','👤 Conta','🔒 Segurança','🌍 Idioma & Região','🔔 Notificações','🎨 Aparência','📧 E-mail','🔌 Integrações','💳 Plano','📜 Auditoria'].map((item,i)=>`
          <div onclick="document.querySelectorAll('.settings-tab').forEach(e=>e.style.background='');this.style.background='rgba(0,87,255,0.1)';document.getElementById('settings-panel').innerHTML=settingsPanel(${i})"
            class="settings-tab" style="padding:9px 12px;border-radius:var(--radius-sm);cursor:pointer;font-size:0.82rem;font-weight:500;color:var(--text-secondary);transition:var(--transition);" onmouseenter="this.style.background='rgba(255,255,255,0.05)'" onmouseleave="if(!this.style.background.includes('0.1'))this.style.background=''">
            ${item}
          </div>`).join('')}
      </div>

      <!-- Panel -->
      <div id="settings-panel" class="card" style="padding:24px;">
        ${settingsPanel(0)}
      </div>
    </div>
  </div>`;
};

window.settingsPanel = function(idx) {
  const panels = [
    // 0: Empresa
    `<h3 style="margin-bottom:20px;">🏢 Configurações da Empresa</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div class="input-group"><label>Nome da Empresa</label><input class="input" value="Empresa Demo S.A." /></div>
      <div class="input-group"><label>CNPJ / Tax ID</label><input class="input" value="00.000.000/0001-00" /></div>
      <div class="input-group"><label>País Principal</label><select class="input"><option>🇧🇷 Brasil</option><option>🇺🇸 EUA</option><option>🇪🇺 Europa</option></select></div>
      <div class="input-group"><label>Fuso Horário</label><select class="input"><option>America/Sao_Paulo (UTC-3)</option><option>America/New_York (UTC-5)</option><option>Europe/London (UTC+0)</option><option>Asia/Riyadh (UTC+3)</option></select></div>
      <div class="input-group"><label>Moeda</label><select class="input"><option>BRL – Real Brasileiro</option><option>USD – Dólar</option><option>EUR – Euro</option><option>SAR – Riyal Saudita</option></select></div>
      <div class="input-group"><label>Idioma Padrão</label><select class="input"><option>🇧🇷 Português</option><option>🇺🇸 English</option><option>🇪🇸 Español</option><option>🇫🇷 Français</option><option>🇸🇦 العربية</option></select></div>
    </div>
    <div class="divider"></div>
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button class="btn btn-ghost" onclick="showToast('Alterações descartadas','info')">Cancelar</button>
      <button class="btn btn-primary" onclick="showToast('Configurações salvas!','success')">💾 Salvar</button>
    </div>`,

    // 1: Conta
    `<h3 style="margin-bottom:20px;">👤 Minha Conta</h3>
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;padding:16px;background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);border-radius:var(--radius-md);">
      <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,var(--brand-accent),var(--brand-purple));display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:700;color:#fff;">AL</div>
      <div><div style="font-weight:700;">Admin Local</div><div style="font-size:0.78rem;color:var(--text-muted);">admin@empresa.com · Super Admin</div></div>
      <button class="btn btn-secondary btn-sm" onclick="showToast('Alterando foto...','info')" style="margin-left:auto;">Alterar Foto</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div class="input-group"><label>Nome</label><input class="input" value="Admin Local" /></div>
      <div class="input-group"><label>E-mail</label><input class="input" type="email" value="admin@empresa.com" /></div>
      <div class="input-group"><label>Idioma Preferido</label><select class="input"><option>🇧🇷 Português</option><option>🇺🇸 English</option></select></div>
      <div class="input-group"><label>Fuso Horário</label><select class="input"><option>America/Sao_Paulo (UTC-3)</option></select></div>
    </div>
    <div class="divider"></div>
    <div style="display:flex;justify-content:flex-end;">
      <button class="btn btn-primary" onclick="showToast('Perfil atualizado!','success')">💾 Salvar</button>
    </div>`,

    // 2: Segurança
    `<h3 style="margin-bottom:20px;">🔒 Segurança & Autenticação</h3>
    <div style="display:flex;flex-direction:column;gap:14px;">
      ${[
        ['MFA Obrigatório','Exige autenticação multifator para todos os usuários',true],
        ['SSO / SAML','Autenticação via Microsoft, Google ou Okta',true],
        ['Bloqueio por IP','Restringir acesso por faixa de IP',false],
        ['Zero Trust','Verificar identidade em cada acesso',true],
        ['Log de Auditoria','Registrar todas as ações dos usuários',true],
        ['TLS 1.3','Criptografia em trânsito',true],
      ].map(([title,desc,enabled])=>`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px;background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);border-radius:var(--radius-md);">
          <div><div style="font-size:0.88rem;font-weight:600;">${title}</div><div style="font-size:0.72rem;color:var(--text-muted);">${desc}</div></div>
          <div onclick="this.dataset.on=this.dataset.on==='1'?'0':'1';this.style.background=this.dataset.on==='1'?'var(--brand-accent)':'rgba(255,255,255,0.1)';showToast('${title} '+( this.dataset.on==='1'?'ativado':'desativado'),'success')" data-on="${enabled?'1':'0'}" style="width:44px;height:24px;border-radius:99px;background:${enabled?'var(--brand-accent)':'rgba(255,255,255,0.1)'};cursor:pointer;transition:var(--transition);position:relative;">
            <div style="position:absolute;width:18px;height:18px;border-radius:50%;background:#fff;top:3px;${enabled?'right:3px':'left:3px'};transition:var(--transition);box-shadow:0 1px 3px rgba(0,0,0,.3);"></div>
          </div>
        </div>`).join('')}
    </div>`,
  ];
  return panels[idx] || panels[0];
};

// ─────────────────────────────
//  INTEGRATIONS
// ─────────────────────────────
window.renderPage_integrations = function() {
  const lang = APP.lang;
  const title = {pt:'Integrações',en:'Integrations',es:'Integraciones',fr:'Intégrations',ar:'التكاملات'}[lang]||'Integrations';

  const integrations = [
    { name:'Microsoft 365', desc:'Azure AD SSO, Teams notifications', icon:'🪟', status:'connected', cat:'Identity' },
    { name:'Google Workspace', desc:'Google SSO and user sync', icon:'🔷', status:'connected', cat:'Identity' },
    { name:'Okta', desc:'SAML 2.0 Identity Provider', icon:'🔵', status:'available', cat:'Identity' },
    { name:'Synthesia Enterprise', desc:'SCORM export and avatar management', icon:'🎬', status:'connected', cat:'Content' },
    { name:'Slack', desc:'Training notifications via Slack', icon:'💬', status:'available', cat:'Notifications' },
    { name:'Microsoft Teams', desc:'Training reminders in Teams', icon:'💼', status:'connected', cat:'Notifications' },
    { name:'Salesforce', desc:'User sync and compliance data', icon:'☁️', status:'available', cat:'HR Systems' },
    { name:'SAP SuccessFactors', desc:'Employee data synchronization', icon:'🏭', status:'available', cat:'HR Systems' },
    { name:'Workday', desc:'HR data integration', icon:'🔧', status:'available', cat:'HR Systems' },
    { name:'LRS (Learning Record Store)', desc:'xAPI / Tin Can statements', icon:'📡', status:'coming_soon', cat:'LRS / xAPI' },
    { name:'Webhook', desc:'Custom HTTP callbacks', icon:'🔗', status:'connected', cat:'Developers' },
    { name:'REST API', desc:'Full platform API access', icon:'⚡', status:'connected', cat:'Developers' },
  ];

  const cats = [...new Set(integrations.map(i=>i.cat))];
  const statusColor = { connected:'var(--brand-success)', available:'var(--text-muted)', coming_soon:'var(--brand-warning)' };
  const statusLabel = { connected:'Conectado', available:'Disponível', coming_soon:'Em breve' };

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div><h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${title}</h2>
      <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">Conecte sua stack corporativa à plataforma Brandvakt Academy</p></div>
      <button class="btn btn-secondary btn-sm" onclick="showToast('Abrindo documentação da API...','info')">📄 API Docs</button>
    </div>

    <!-- Stats -->
    <div style="display:flex;gap:20px;padding:14px 18px;background:rgba(0,87,255,0.06);border:1px solid rgba(0,87,255,0.15);border-radius:var(--radius-md);flex-wrap:wrap;">
      ${[['✅','5','Conectadas'],['🔌','7','Disponíveis'],['🚀','1','Em breve'],['🔑','Ativa','API Key']].map(([i,v,l])=>`
        <div style="display:flex;align-items:center;gap:8px;"><span>${i}</span><div><div style="font-size:0.9rem;font-weight:800;">${v}</div><div style="font-size:0.68rem;color:var(--text-muted);">${l}</div></div></div>
      `).join('<div style="width:1px;background:var(--bg-border);height:28px;"></div>')}
    </div>

    ${cats.map(cat=>`
      <div>
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);margin-bottom:10px;">${cat}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;">
          ${integrations.filter(i=>i.cat===cat).map(intg=>`
            <div class="card" style="padding:16px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:var(--transition);" onmouseenter="this.style.borderColor='var(--bg-border-light)'" onmouseleave="this.style.borderColor=''" onclick="showToast('${intg.name}: ${statusLabel[intg.status]}','info')">
              <div style="width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">${intg.icon}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:0.88rem;font-weight:700;">${intg.name}</div>
                <div style="font-size:0.72rem;color:var(--text-muted);">${intg.desc}</div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;flex-shrink:0;">
                <span style="font-size:0.65rem;font-weight:700;color:${statusColor[intg.status]};background:${statusColor[intg.status]}22;padding:2px 8px;border-radius:99px;border:1px solid ${statusColor[intg.status]}44;">${statusLabel[intg.status]}</span>
                ${intg.status==='connected'?`<button class="btn btn-ghost btn-sm" style="font-size:0.68rem;padding:3px 8px;" onclick="event.stopPropagation();showToast('Configurando ${intg.name}...','info')">⚙️</button>`:`<button class="btn btn-secondary btn-sm" style="font-size:0.68rem;padding:3px 8px;" onclick="event.stopPropagation();showToast('Conectando ${intg.name}...','info')">${intg.status==='coming_soon'?'Notificar':'Conectar'}</button>`}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </div>`;
};

// Stub pages that reference library's barChartSVG
function barChartSVG(data, labels) {
  if (window.barChartSVG) return window.barChartSVG(data, labels);
  const w=480,h=180,pad={left:30,right:10,top:10,bottom:28};
  const iw=w-pad.left-pad.right,ih=h-pad.top-pad.bottom;
  const maxVal=Math.max(...data.completions,...data.certs);
  const groups=labels.length,groupW=iw/groups,barW=groupW*0.28;
  const bars1=data.completions.map((v,i)=>{const bh=(v/maxVal)*ih;const x=pad.left+i*groupW+groupW*0.15;const y=pad.top+ih-bh;return`<rect x="${x}" y="${y}" width="${barW}" height="${bh}" rx="3" fill="var(--brand-accent)" opacity="0.85"/>`;}).join('');
  const bars2=data.certs.map((v,i)=>{const bh=(v/maxVal)*ih;const x=pad.left+i*groupW+groupW*0.15+barW+3;const y=pad.top+ih-bh;return`<rect x="${x}" y="${y}" width="${barW}" height="${bh}" rx="3" fill="var(--brand-teal)" opacity="0.85"/>`;}).join('');
  const xLabels=labels.map((l,i)=>{const x=pad.left+i*groupW+groupW/2;return`<text x="${x}" y="${h-6}" text-anchor="middle" fill="var(--text-muted)" font-size="10">${l}</text>`;}).join('');
  return`<svg width="100%" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">${bars1}${bars2}${xLabels}</svg>`;
}
