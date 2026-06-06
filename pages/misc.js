// ══════════════════════════════════════════════════════════════
//  MISC PAGES: Reports · Assignments · Settings · Integrations
// ══════════════════════════════════════════════════════════════

// renderPage_reports is defined in reports.js — do not redefine here.
// renderPage_assignments and initPage_assignments are defined in assignments.js — do not redefine here.

// ─────────────────────────────
//  SETTINGS
// ─────────────────────────────
window.renderPage_settings = function() {
  const lang = APP.lang;
  const title = {pt:'Configurações',en:'Settings',es:'Configuración',fr:'Paramètres'}[lang]||'Settings';

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
  const title = {pt:'Integrações',en:'Integrations',es:'Integraciones',fr:'Intégrations'}[lang]||'Integrations';

  const integrations = [
    { name:'Microsoft 365', desc:'Azure AD SSO, Teams notifications', icon:'🪟', status:'connected', cat:'Identity' },
    { name:'Google Workspace', desc:'Google SSO and user sync', icon:'🔷', status:'connected', cat:'Identity' },
    { name:'Okta', desc:'SAML 2.0 Identity Provider', icon:'🔵', status:'available', cat:'Identity' },
    { name:'Synthesia Enterprise', desc:'Video production and avatar management', icon:'🎬', status:'connected', cat:'Content' },
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
