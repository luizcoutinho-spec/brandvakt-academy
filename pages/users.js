// ══════════════════════════════════════════════════════════════
//  PAGE: GESTÃO DE USUÁRIOS
// ══════════════════════════════════════════════════════════════

// Module-level cache so filterUsers can access without re-render
let _usersAll = [];
let _usersL   = {};
let _usersRiskColors = {};
let _usersRiskLabels = {};

window.renderPage_users = function () {
  const L = usersL[APP.lang] || usersL.pt;
  _usersL = L;

  const users = [
    // ── Admin Local DEMO (injected from DEMO_STATE) ──────────────
    (function() {
      if (typeof DEMO_STATE === 'undefined') return null;
      const u = DEMO_STATE;
      const rm = u.getRiskMeta();
      return {
        id: 999,
        name: u.user.name,
        email: u.user.email,
        dept: u.user.dept,
        company: u.user.company,
        role: u.user.role,
        status: 'active',
        risk: rm.cls === 'low' ? 'low' : rm.cls === 'med' ? 'med' : 'high',
        completion: u.getCompletionPct(),
        certs: u.getCertCount(),
        lastLogin: 'Agora',
        avatar: u.user.avatar,
        country: u.user.country,
        isDemo: true,
      };
    })(),
    { id:1, name:'Ana Oliveira',    email:'ana.oliveira@empresa.com',    dept:'RH',         role:'Admin',       status:'active', risk:'low',  completion:98, certs:8, lastLogin:'Hoje',        avatar:'AO', country:'🇧🇷' },
    { id:2, name:'Carlos Mendes',   email:'carlos.mendes@empresa.com',   dept:'TI',         role:'Manager',     status:'active', risk:'low',  completion:92, certs:6, lastLogin:'Ontem',       avatar:'CM', country:'🇧🇷' },
    { id:3, name:'Sarah Johnson',   email:'sarah.johnson@empresa.com',   dept:'Jurídico',   role:'User',        status:'active', risk:'low',  completion:100,certs:9, lastLogin:'Hoje',        avatar:'SJ', country:'🇺🇸' },
    { id:4, name:'Lucas Ferrari',   email:'lucas.ferrari@empresa.com',   dept:'Financeiro', role:'User',        status:'active', risk:'med',  completion:74, certs:4, lastLogin:'3 dias',      avatar:'LF', country:'🇧🇷' },
    { id:5, name:'Marie Dupont',    email:'marie.dupont@empresa.com',    dept:'Comercial',  role:'User',        status:'active', risk:'low',  completion:87, certs:5, lastLogin:'Hoje',        avatar:'MD', country:'🇫🇷' },
    { id:6, name:'Ahmed Al-Rashid', email:'ahmed.alrashid@empresa.com',  dept:'Operações',  role:'User',        status:'active', risk:'high', completion:42, certs:1, lastLogin:'7 dias',      avatar:'AA', country:'🇸🇦' },
    { id:7, name:'João Silva',      email:'joao.silva@empresa.com',      dept:'TI',         role:'User',        status:'inactive',risk:'med', completion:58, certs:2, lastLogin:'30 dias',     avatar:'JS', country:'🇧🇷' },
    { id:8, name:'Catalina Ruiz',   email:'catalina.ruiz@empresa.com',   dept:'RH',         role:'Manager',     status:'active', risk:'low',  completion:95, certs:7, lastLogin:'Hoje',        avatar:'CR', country:'🇪🇸' },
    { id:9, name:'Pedro Almeida',   email:'pedro.almeida@empresa.com',   dept:'Financeiro', role:'User',        status:'active', risk:'high', completion:38, certs:1, lastLogin:'14 dias',     avatar:'PA', country:'🇧🇷' },
    { id:10,name:'Claire Martin',   email:'claire.martin@empresa.com',   dept:'Jurídico',   role:'Compliance',  status:'active', risk:'low',  completion:99, certs:10,lastLogin:'Hoje',       avatar:'CM', country:'🇫🇷' },
  ];

  const deptStats = {
    'Diretoria': 12, 'RH': 46, 'TI': 68, 'Jurídico': 22, 'Financeiro': 38, 'Comercial': 55, 'Operações': 31,
  };

  const riskColors = { low: 'var(--brand-success)', med: 'var(--brand-warning)', high: 'var(--brand-danger)' };
  const riskLabels = { low: L.risk_low, med: L.risk_med, high: L.risk_high };

  // Save to module cache for filterUsers
  _usersAll = users.filter(Boolean);
  _usersRiskColors = riskColors;
  _usersRiskLabels = riskLabels;

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">

    <!-- Header -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="showToast('Importando via CSV...','info')">⬆ ${L.btn_import}</button>
        <button class="btn btn-secondary btn-sm" onclick="showToast('Exportando lista...','info')">⬇ ${L.btn_export}</button>
        <button class="btn btn-primary btn-sm" onclick="showModal('modal-new-user')">+ ${L.btn_add}</button>
      </div>
    </div>

    <!-- KPI strip -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;" class="stagger">
      ${[
        { icon:'👥', val:'340', label:L.kpi_total,   color:'var(--brand-accent)' },
        { icon:'🟢', val:'312', label:L.kpi_active,  color:'var(--brand-success)' },
        { icon:'💤', val:'28',  label:L.kpi_inactive,color:'var(--brand-warning)' },
        { icon:'🔴', val:'12',  label:L.kpi_risk,    color:'var(--brand-danger)' },
        { icon:'🏆', val:'89%', label:L.kpi_avg_comp,color:'var(--brand-teal)' },
      ].map(k => `
        <div class="card" style="padding:14px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:1.3rem;">${k.icon}</span>
          <div>
            <div style="font-size:1.2rem;font-weight:800;color:${k.color};">${k.val}</div>
            <div style="font-size:0.68rem;color:var(--text-muted);">${k.label}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Filters + Search -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
      <div style="flex:1;min-width:200px;max-width:360px;display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.04);border:1px solid var(--bg-border-light);border-radius:var(--radius-md);padding:8px 14px;">
        <span style="color:var(--text-muted);">🔍</span>
        <input type="text" placeholder="${L.search_ph}" id="user-search" oninput="filterUsers()"
          style="background:transparent;border:none;outline:none;color:var(--text-primary);font-size:0.84rem;font-family:inherit;flex:1;" />
      </div>
      <select id="user-dept" onchange="filterUsers()">
        <option value="">${L.all_depts}</option>
        ${Object.keys(deptStats).map(d => `<option value="${d}">${d} (${deptStats[d]})</option>`).join('')}
      </select>
      <select id="user-status" onchange="filterUsers()">
        <option value="">${L.all_status}</option>
        <option value="active">${L.status_active}</option>
        <option value="inactive">${L.status_inactive}</option>
      </select>
      <select id="user-risk" onchange="filterUsers()">
        <option value="">${L.all_risk}</option>
        <option value="low">${L.risk_low}</option>
        <option value="med">${L.risk_med}</option>
        <option value="high">${L.risk_high}</option>
      </select>
    </div>

    <!-- Users Table -->
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--bg-border);">
        <h4>${L.table_title} <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;" id="user-count">(${users.length} de 340)</span></h4>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-ghost btn-sm" onclick="showToast('Notificando usuários selecionados','info')">🔔 ${L.btn_notify}</button>
          <button class="btn btn-ghost btn-sm" onclick="showToast('Atribuindo treinamentos','info')">📋 ${L.btn_bulk_assign}</button>
        </div>
      </div>
      <div class="table-wrap" style="border:none;border-radius:0;">
        <table id="users-table">
          <thead>
            <tr>
              <th><input type="checkbox" accent-color="var(--brand-accent)" /></th>
              <th>${L.col_user}</th>
              <th>${L.col_dept}</th>
              <th>${L.col_role}</th>
              <th>${L.col_completion}</th>
              <th>${L.col_certs}</th>
              <th>${L.col_risk}</th>
              <th>${L.col_last_login}</th>
              <th>${L.col_actions}</th>
            </tr>
          </thead>
          <tbody id="users-tbody">
            ${users.filter(Boolean).map(u => userRow(u, L, riskColors, riskLabels)).join('')}
          </tbody>
        </table>
      </div>
      <div style="padding:14px 20px;border-top:1px solid var(--bg-border);display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:0.78rem;color:var(--text-muted);">${L.showing} 1-10 ${L.of} 340</span>
        <div style="display:flex;gap:4px;">
          ${['←','1','2','3','...','34','→'].map((p,i) => `<button class="btn btn-sm ${p==='1'?'btn-primary':'btn-ghost'}" style="min-width:32px;" onclick="showToast('Página ${p}','info')">${p}</button>`).join('')}
        </div>
      </div>
    </div>

  </div>

  <!-- Modal: New User -->
  <div class="modal-overlay hidden" id="modal-new-user" onclick="closeModalOutside(event,'modal-new-user')">
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">👤 ${L.modal_title}</h3>
        <span class="modal-close" onclick="hideModal('modal-new-user')">✕</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="input-group"><label>${L.field_name}</label><input class="input" type="text" placeholder="Nome completo" /></div>
          <div class="input-group"><label>${L.field_email}</label><input class="input" type="email" placeholder="email@empresa.com" /></div>
          <div class="input-group"><label>${L.field_dept}</label>
            <select class="input">
              ${Object.keys(deptStats).map(d => `<option>${d}</option>`).join('')}
            </select>
          </div>
          <div class="input-group"><label>${L.field_role}</label>
            <select class="input">
              <option>User</option><option>Manager</option><option>Compliance</option><option>Admin</option>
            </select>
          </div>
          <div class="input-group"><label>${L.field_lang}</label>
            <select class="input">
              <option value="pt">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
          </div>
          <div class="input-group"><label>${L.field_country}</label>
            <select class="input">
              <option>🇧🇷 Brasil</option><option>🇺🇸 EUA</option><option>🇪🇺 Europa</option><option>🇸🇦 Oriente Médio</option>
            </select>
          </div>
        </div>
        <label class="checkbox-group">
          <input type="checkbox" checked />
          <span style="font-size:0.82rem;">${L.send_invite}</span>
        </label>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="hideModal('modal-new-user')">${L.btn_cancel}</button>
        <button class="btn btn-primary" onclick="hideModal('modal-new-user');showToast('Usuário criado e convite enviado!','success')">${L.btn_create}</button>
      </div>
    </div>
  </div>`;
};

function userRow(u, L, riskColors, riskLabels) {
  const statusColor = u.status === 'active' ? 'var(--brand-success)' : 'var(--text-muted)';
  const avatarBg = u.isDemo
    ? 'linear-gradient(135deg,#00d4ff,#8b5cf6)'
    : 'linear-gradient(135deg,var(--brand-accent),var(--brand-purple))';
  const avatarColor = u.isDemo ? '#000' : '#fff';
  return `
  <tr style="${u.isDemo ? 'background:linear-gradient(90deg,rgba(0,212,255,0.04),rgba(139,92,246,0.04));border-left:3px solid #00d4ff;' : ''}">
    <td><input type="checkbox" /></td>
    <td>
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:32px;height:32px;border-radius:50%;background:${avatarBg};display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;color:${avatarColor};flex-shrink:0;">${u.avatar}</div>
        <div>
          <div style="font-weight:600;font-size:0.84rem;">${u.name} <span style="font-size:0.8rem;">${u.country}</span>${u.isDemo ? ' <span style="font-size:0.6rem;font-weight:700;padding:1px 6px;border-radius:99px;background:linear-gradient(135deg,rgba(0,212,255,0.2),rgba(139,92,246,0.2));color:#00d4ff;border:1px solid rgba(0,212,255,0.3);">DEMO</span>' : ''}</div>
          <div style="font-size:0.72rem;color:var(--text-muted);">${u.email}${u.company ? ' · <strong style="color:#94a3b8">'+u.company+'</strong>' : ''}</div>
        </div>
      </div>
    </td>
    <td><span style="font-size:0.82rem;">${u.dept}</span></td>
    <td><span class="badge ${u.role==='Admin'?'badge-blue':u.role==='Manager'?'badge-purple':u.role==='Compliance'?'badge-teal':'badge-green'}">${u.role}</span></td>
    <td>
      <div style="display:flex;align-items:center;gap:8px;min-width:100px;">
        <div class="progress-bar" style="flex:1;">
          <div class="progress-fill ${u.completion>=90?'green':u.completion>=70?'':'red'}" style="width:${u.completion}%;"></div>
        </div>
        <span style="font-size:0.78rem;font-weight:700;color:${u.completion>=90?'var(--brand-success)':u.completion>=70?'var(--text-primary)':'var(--brand-danger)'};">${u.completion}%</span>
      </div>
    </td>
    <td><span class="badge badge-teal">🏆 ${u.certs}</span></td>
    <td>
      <span style="display:flex;align-items:center;gap:4px;font-size:0.76rem;font-weight:600;color:${riskColors[u.risk]};">
        <span style="width:6px;height:6px;border-radius:50%;background:${riskColors[u.risk]};display:inline-block;"></span>
        ${riskLabels[u.risk]}
      </span>
    </td>
    <td><span style="font-size:0.78rem;color:var(--text-muted);">${u.lastLogin}</span></td>
    <td>
      <div style="display:flex;gap:4px;">
        <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Perfil de ${u.name}','info')" title="Ver perfil">👤</button>
        <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Atribuindo treinamento','info')" title="Atribuir">📋</button>
        <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Notificando ${u.name}','info')" title="Notificar">🔔</button>
      </div>
    </td>
  </tr>`;
}

window.filterUsers = function() {
  const search = (document.getElementById('user-search')?.value || '').toLowerCase();
  const dept   = document.getElementById('user-dept')?.value   || '';
  const status = document.getElementById('user-status')?.value || '';
  const risk   = document.getElementById('user-risk')?.value   || '';

  let data = _usersAll.slice();

  if (search) data = data.filter(u =>
    u.name.toLowerCase().includes(search) ||
    u.email.toLowerCase().includes(search) ||
    (u.dept || '').toLowerCase().includes(search) ||
    (u.company || '').toLowerCase().includes(search)
  );
  if (dept)   data = data.filter(u => u.dept === dept);
  if (status) data = data.filter(u => u.status === status);
  if (risk)   data = data.filter(u => u.risk === risk);

  const tbody = document.getElementById('users-tbody');
  const count = document.getElementById('user-count');
  if (!tbody) return;

  tbody.innerHTML = data.length
    ? data.map(u => userRow(u, _usersL, _usersRiskColors, _usersRiskLabels)).join('')
    : `<tr><td colspan="9" style="text-align:center;padding:32px;color:#6b7280;">Nenhum usuário encontrado.</td></tr>`;

  if (count) count.textContent = `(${data.length} de ${_usersAll.length})`;

  // Re-animate progress bars
  setTimeout(() => {
    tbody.querySelectorAll('.progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transition = 'width .7s ease'; el.style.width = w; }));
    });
  }, 50);
};

const usersL = {
  pt: {
    title:'Gestão de Usuários', sub:'Colaboradores cadastrados na plataforma',
    btn_import:'Importar CSV', btn_export:'Exportar', btn_add:'Novo Usuário',
    kpi_total:'Total de Usuários', kpi_active:'Ativos', kpi_inactive:'Inativos', kpi_risk:'Alto Risco', kpi_avg_comp:'Conclusão Média',
    search_ph:'Buscar usuários...', all_depts:'Todos os departamentos', all_status:'Todos os status', all_risk:'Todos os riscos',
    status_active:'Ativo', status_inactive:'Inativo',
    risk_low:'Baixo', risk_med:'Médio', risk_high:'Alto',
    table_title:'Lista de Usuários', btn_notify:'Notificar', btn_bulk_assign:'Atribuir em Massa',
    col_user:'Usuário', col_dept:'Departamento', col_role:'Perfil', col_completion:'Conclusão', col_certs:'Certificados', col_risk:'Risk Level', col_last_login:'Último Acesso', col_actions:'Ações',
    showing:'Exibindo', of:'de',
    modal_title:'Novo Usuário', field_name:'Nome Completo', field_email:'E-mail Corporativo',
    field_dept:'Departamento', field_role:'Perfil de Acesso', field_lang:'Idioma Preferido', field_country:'País',
    send_invite:'Enviar convite por e-mail', btn_cancel:'Cancelar', btn_create:'Criar Usuário',
  },
  en: {
    title:'User Management', sub:'Users registered on the platform',
    btn_import:'Import CSV', btn_export:'Export', btn_add:'New User',
    kpi_total:'Total Users', kpi_active:'Active', kpi_inactive:'Inactive', kpi_risk:'High Risk', kpi_avg_comp:'Avg Completion',
    search_ph:'Search users...', all_depts:'All departments', all_status:'All statuses', all_risk:'All risks',
    status_active:'Active', status_inactive:'Inactive',
    risk_low:'Low', risk_med:'Medium', risk_high:'High',
    table_title:'User List', btn_notify:'Notify', btn_bulk_assign:'Bulk Assign',
    col_user:'User', col_dept:'Department', col_role:'Role', col_completion:'Completion', col_certs:'Certificates', col_risk:'Risk Level', col_last_login:'Last Login', col_actions:'Actions',
    showing:'Showing', of:'of',
    modal_title:'New User', field_name:'Full Name', field_email:'Corporate Email',
    field_dept:'Department', field_role:'Access Role', field_lang:'Preferred Language', field_country:'Country',
    send_invite:'Send email invitation', btn_cancel:'Cancel', btn_create:'Create User',
  },
  es:{title:'Gestión de Usuarios',sub:'Usuarios registrados en la plataforma',btn_import:'Importar CSV',btn_export:'Exportar',btn_add:'Nuevo Usuario',kpi_total:'Total Usuarios',kpi_active:'Activos',kpi_inactive:'Inactivos',kpi_risk:'Alto Riesgo',kpi_avg_comp:'Finalización Media',search_ph:'Buscar usuarios...',all_depts:'Todos los departamentos',all_status:'Todos los estados',all_risk:'Todos los riesgos',status_active:'Activo',status_inactive:'Inactivo',risk_low:'Bajo',risk_med:'Medio',risk_high:'Alto',table_title:'Lista de Usuarios',btn_notify:'Notificar',btn_bulk_assign:'Asignación Masiva',col_user:'Usuario',col_dept:'Departamento',col_role:'Perfil',col_completion:'Finalización',col_certs:'Certificados',col_risk:'Nivel de Riesgo',col_last_login:'Último Acceso',col_actions:'Acciones',showing:'Mostrando',of:'de',modal_title:'Nuevo Usuario',field_name:'Nombre Completo',field_email:'Email Corporativo',field_dept:'Departamento',field_role:'Perfil de Acceso',field_lang:'Idioma Preferido',field_country:'País',send_invite:'Enviar invitación por email',btn_cancel:'Cancelar',btn_create:'Crear Usuario'},
  fr:{title:'Gestion des Utilisateurs',sub:'Utilisateurs enregistrés sur la plateforme',btn_import:'Importer CSV',btn_export:'Exporter',btn_add:'Nouvel Utilisateur',kpi_total:'Total Utilisateurs',kpi_active:'Actifs',kpi_inactive:'Inactifs',kpi_risk:'Haut Risque',kpi_avg_comp:'Complétion Moy.',search_ph:'Rechercher des utilisateurs...',all_depts:'Tous les départements',all_status:'Tous les statuts',all_risk:'Tous les risques',status_active:'Actif',status_inactive:'Inactif',risk_low:'Faible',risk_med:'Moyen',risk_high:'Élevé',table_title:'Liste des Utilisateurs',btn_notify:'Notifier',btn_bulk_assign:'Attribution en Masse',col_user:'Utilisateur',col_dept:'Département',col_role:'Rôle',col_completion:'Complétion',col_certs:'Certificats',col_risk:'Niveau de Risque',col_last_login:'Dernière Connexion',col_actions:'Actions',showing:'Affichage',of:'sur',modal_title:'Nouvel Utilisateur',field_name:'Nom Complet',field_email:'Email Professionnel',field_dept:'Département',field_role:"Rôle d'Accès",field_lang:'Langue Préférée',field_country:'Pays',send_invite:'Envoyer une invitation par email',btn_cancel:'Annuler',btn_create:"Créer l'Utilisateur"},
};

window.initPage_users = function() {
  setTimeout(() => {
    document.querySelectorAll('#users-tbody .progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.5s ease'; el.style.width = w; });
    });
  }, 100);
};

// ══════════════════════════════════════════════════════════════
//  PAGE: DEPARTAMENTOS
// ══════════════════════════════════════════════════════════════
window.renderPage_departments = function() {
  const L = deptPageL[APP.lang] || deptPageL.pt;

  const depts = [
    { name:'RH',         icon:'👥', users:46,  completion:96, avg:9.1, certs:48,  mandatory:100, risk:'low',  trend:[70,78,85,90,93,96] },
    { name:'TI',         icon:'💻', users:68,  completion:88, avg:8.7, certs:64,  mandatory:95,  risk:'low',  trend:[60,68,74,80,84,88] },
    { name:'Jurídico',   icon:'⚖️', users:22,  completion:94, avg:9.3, certs:22,  mandatory:100, risk:'low',  trend:[72,78,84,89,91,94] },
    { name:'Financeiro', icon:'💰', users:38,  completion:81, avg:8.2, certs:38,  mandatory:88,  risk:'med',  trend:[55,60,66,72,77,81] },
    { name:'Comercial',  icon:'📈', users:55,  completion:72, avg:7.8, certs:55,  mandatory:80,  risk:'med',  trend:[45,52,58,62,68,72] },
    { name:'Operações',  icon:'⚙️', users:31,  completion:61, avg:7.1, certs:31,  mandatory:70,  risk:'high', trend:[30,38,44,50,56,61] },
  ];

  const riskColors = { low:'var(--brand-success)', med:'var(--brand-warning)', high:'var(--brand-danger)' };
  const riskLabels = { low: L.risk_low, med: L.risk_med, high: L.risk_high };

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="showModal('modal-new-dept')">+ ${L.btn_add}</button>
    </div>

    <!-- Dept Cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;" class="stagger">
      ${depts.map(d => `
        <div class="card" style="padding:20px;cursor:pointer;" onmouseenter="this.style.borderColor='var(--bg-border-light)'" onmouseleave="this.style.borderColor=''" onclick="showToast('Detalhes: ${d.name}','info')">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <div style="width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;">${d.icon}</div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:1rem;font-weight:700;">${d.name}</div>
              <div style="font-size:0.72rem;color:var(--text-muted);">${d.users} ${L.users_label}</div>
            </div>
            <span class="badge ${d.risk==='low'?'badge-green':d.risk==='med'?'badge-yellow':'badge-red'}">${riskLabels[d.risk]}</span>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px;">
            ${[
              [d.completion+'%', L.col_completion, d.completion>=90?'var(--brand-success)':d.completion>=70?'var(--text-primary)':'var(--brand-danger)'],
              [d.avg, L.col_avg, 'var(--brand-accent)'],
              [d.certs, L.col_certs, 'var(--brand-teal)'],
            ].map(([val, lbl, color]) => `
              <div style="text-align:center;padding:10px;background:rgba(255,255,255,0.02);border-radius:var(--radius-sm);">
                <div style="font-size:1rem;font-weight:800;color:${color};">${val}</div>
                <div style="font-size:0.62rem;color:var(--text-muted);">${lbl}</div>
              </div>
            `).join('')}
          </div>

          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
              <span style="font-size:0.72rem;color:var(--text-muted);">${L.mandatory_label} ${d.mandatory}%</span>
              <span style="font-size:0.72rem;color:var(--text-muted);">${L.col_completion}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill ${d.completion>=90?'green':d.completion>=70?'':'red'}" style="width:${d.completion}%;"></div>
            </div>
          </div>

          <div style="margin-top:12px;">${sparklineSVG(d.trend, riskColors[d.risk], 260, 36)}</div>
        </div>
      `).join('')}
    </div>

    <!-- Trails section -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <h3>${L.trails_title}</h3>
        <button class="btn btn-primary btn-sm" onclick="navTo('trails',null)">+ ${L.btn_new_trail}</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
        ${[
          { name:L.trail_cyber,     icon:'🛡', courses:8,  users:280, completion:84, color:'var(--brand-accent)',  mandatory:true },
          { name:L.trail_compliance,icon:'📋', courses:12, users:340, completion:91, color:'var(--brand-success)', mandatory:true },
          { name:L.trail_privacy,   icon:'🔒', courses:6,  users:195, completion:78, color:'var(--brand-purple)',  mandatory:true },
          { name:L.trail_leader,    icon:'🎯', courses:5,  users:42,  completion:65, color:'var(--brand-teal)',    mandatory:false },
        ].map(tr => `
          <div style="padding:16px;border-radius:var(--radius-md);background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);cursor:pointer;transition:var(--transition);" onmouseenter="this.style.borderColor='var(--bg-border-light)'" onmouseleave="this.style.borderColor=''" onclick="showToast('Trilha: ${tr.name}','info')">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <span style="font-size:1.4rem;">${tr.icon}</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:0.88rem;font-weight:700;">${tr.name}</div>
                <div style="font-size:0.7rem;color:var(--text-muted);">${tr.courses} módulos · ${tr.users} usuários</div>
              </div>
              ${tr.mandatory ? `<span class="badge badge-red" style="font-size:0.6rem;">OBRIG.</span>` : ''}
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${tr.completion}%;background:${tr.color};"></div></div>
            <div style="text-align:right;margin-top:4px;font-size:0.72rem;font-weight:700;color:${tr.color};">${tr.completion}%</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Modal: New Dept -->
  <div class="modal-overlay hidden" id="modal-new-dept" onclick="closeModalOutside(event,'modal-new-dept')">
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">🏢 ${L.modal_title}</h3>
        <span class="modal-close" onclick="hideModal('modal-new-dept')">✕</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div class="input-group"><label>${L.field_name}</label><input class="input" type="text" placeholder="Nome do Departamento" /></div>
        <div class="input-group"><label>${L.field_manager}</label><input class="input" type="text" placeholder="Responsável" /></div>
        <div class="input-group"><label>${L.field_country}</label><select class="input"><option>🌍 Global</option><option>🇧🇷 Brasil</option><option>🇺🇸 EUA</option></select></div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="hideModal('modal-new-dept')">${L.btn_cancel}</button>
        <button class="btn btn-primary" onclick="hideModal('modal-new-dept');showToast('Departamento criado!','success')">${L.btn_create}</button>
      </div>
    </div>
  </div>`;
};

window.initPage_departments = function() {
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.7s ease'; el.style.width=w; });
    });
  }, 100);
};

const deptPageL = {
  pt:{ title:'Departamentos & Trilhas', sub:'Estrutura organizacional e trilhas de aprendizagem', btn_add:'Novo Departamento', users_label:'usuários', risk_low:'Baixo', risk_med:'Médio', risk_high:'Alto', col_completion:'Conclusão', col_avg:'Nota Média', col_certs:'Certificados', mandatory_label:'Obrigatórios:', trails_title:'Trilhas de Aprendizagem', btn_new_trail:'Nova Trilha', trail_cyber:'Cybersecurity Essentials', trail_compliance:'Compliance & Ética', trail_privacy:'Privacidade & LGPD/GDPR', trail_leader:'Liderança Ética', modal_title:'Novo Departamento', field_name:'Nome', field_manager:'Gestor Responsável', field_country:'País/Região', btn_cancel:'Cancelar', btn_create:'Criar' },
  en:{ title:'Departments & Paths', sub:'Organizational structure and learning paths', btn_add:'New Department', users_label:'users', risk_low:'Low', risk_med:'Medium', risk_high:'High', col_completion:'Completion', col_avg:'Avg Score', col_certs:'Certificates', mandatory_label:'Mandatory:', trails_title:'Learning Paths', btn_new_trail:'New Path', trail_cyber:'Cybersecurity Essentials', trail_compliance:'Compliance & Ethics', trail_privacy:'Privacy & LGPD/GDPR', trail_leader:'Ethical Leadership', modal_title:'New Department', field_name:'Name', field_manager:'Manager', field_country:'Country/Region', btn_cancel:'Cancel', btn_create:'Create' },
  es:{ title:'Departamentos y Rutas', sub:'Estructura organizacional y rutas de aprendizaje', btn_add:'Nuevo Departamento', users_label:'usuarios', risk_low:'Bajo', risk_med:'Medio', risk_high:'Alto', col_completion:'Finalización', col_avg:'Nota Media', col_certs:'Certificados', mandatory_label:'Obligatorios:', trails_title:'Rutas de Aprendizaje', btn_new_trail:'Nueva Ruta', trail_cyber:'Cybersecurity Esencial', trail_compliance:'Cumplimiento y Ética', trail_privacy:'Privacidad y LGPD/GDPR', trail_leader:'Liderazgo Ético', modal_title:'Nuevo Departamento', field_name:'Nombre', field_manager:'Responsable', field_country:'País/Región', btn_cancel:'Cancelar', btn_create:'Crear' },
  fr:{ title:'Départements & Parcours', sub:'Structure organisationnelle et parcours d\'apprentissage', btn_add:'Nouveau Département', users_label:'utilisateurs', risk_low:'Faible', risk_med:'Moyen', risk_high:'Élevé', col_completion:'Complétion', col_avg:'Note Moy.', col_certs:'Certificats', mandatory_label:'Obligatoires:', trails_title:'Parcours d\'Apprentissage', btn_new_trail:'Nouveau Parcours', trail_cyber:'Cybersecurity Essentiels', trail_compliance:'Conformité & Éthique', trail_privacy:'Confidentialité & RGPD', trail_leader:'Leadership Éthique', modal_title:'Nouveau Département', field_name:'Nom', field_manager:'Responsable', field_country:'Pays/Région', btn_cancel:'Annuler', btn_create:'Créer' },
};

// Trails page (re-uses departments approach)
window.renderPage_trails = function() {
  return renderPage_departments();
};
window.initPage_trails = function() { initPage_departments(); };
