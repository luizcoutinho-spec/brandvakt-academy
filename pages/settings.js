// ══════════════════════════════════════════════════════════════
//  ⚙️ CONFIGURAÇÕES — Complete Module (10 panels)
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectSettingsCSS() {
  if (document.getElementById('settings-full-css')) return;
  const s = document.createElement('style');
  s.id = 'settings-full-css';
  s.textContent = `
    /* ── Layout ── */
    .st-wrap   { display:grid; grid-template-columns:230px 1fr; gap:20px; align-items:start; }
    .st-nav    { display:flex; flex-direction:column; gap:3px; background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:10px; }
    .st-nav-item {
      display:flex; align-items:center; gap:10px;
      padding:10px 12px; border-radius:10px; cursor:pointer;
      font-size:0.83rem; font-weight:500; color:#94a3b8;
      transition:all 0.18s; border:none; background:transparent;
      text-align:left; font-family:inherit; width:100%;
    }
    .st-nav-item:hover  { background:rgba(255,255,255,0.05); color:#e2e8f0; }
    .st-nav-item.active { background:rgba(0,212,255,0.12); color:#00d4ff; font-weight:700; }
    .st-nav-icon { font-size:1.0rem; width:20px; text-align:center; flex-shrink:0; }
    .st-panel   { background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:28px; min-height:520px; }

    /* ── Form ── */
    .st-field   { display:flex; flex-direction:column; gap:6px; }
    .st-label   { font-size:0.70rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em; }
    .st-input, .st-select, .st-textarea {
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10);
      border-radius:9px; padding:10px 13px; color:#f1f5f9;
      font-size:0.85rem; font-family:inherit; outline:none;
      transition:border-color 0.2s; width:100%; box-sizing:border-box;
    }
    .st-input:focus, .st-select:focus, .st-textarea:focus {
      border-color:#00d4ff; box-shadow:0 0 0 3px rgba(0,212,255,0.10);
    }
    .st-input::placeholder { color:#6b7280; }
    .st-select option { background:#1a1a26; }
    .st-textarea { resize:vertical; min-height:80px; }

    /* ── Toggle ── */
    .st-toggle { position:relative; width:44px; height:24px; flex-shrink:0; }
    .st-toggle input { opacity:0; width:0; height:0; position:absolute; }
    .st-slider { position:absolute; inset:0; background:rgba(255,255,255,0.10); border-radius:24px; cursor:pointer; transition:0.3s; }
    .st-slider:before { content:''; position:absolute; width:18px; height:18px; left:3px; top:3px; background:#fff; border-radius:50%; transition:0.3s; box-shadow:0 1px 4px rgba(0,0,0,.3); }
    .st-toggle input:checked + .st-slider { background:#00d4ff; }
    .st-toggle input:checked + .st-slider:before { transform:translateX(20px); }

    /* ── Toggle row ── */
    .st-toggle-row {
      display:flex; align-items:center; justify-content:space-between;
      padding:14px 16px; border-radius:12px;
      background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07);
      transition:background 0.2s;
    }
    .st-toggle-row:hover { background:rgba(255,255,255,0.04); }
    .st-toggle-title { font-size:0.88rem; font-weight:600; }
    .st-toggle-desc  { font-size:0.72rem; color:#6b7280; margin-top:2px; }

    /* ── Section heading ── */
    .st-section-title {
      font-size:0.70rem; font-weight:700; color:#6b7280;
      text-transform:uppercase; letter-spacing:0.10em;
      padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.06);
      margin-bottom:14px; margin-top:22px;
    }
    .st-section-title:first-child { margin-top:0; }

    /* ── Buttons ── */
    .st-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 18px; border-radius:9px; border:none; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .st-btn-primary { background:#00d4ff; color:#000; box-shadow:0 4px 14px rgba(0,212,255,0.25); }
    .st-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .st-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .st-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#e2e8f0; }
    .st-btn-danger { background:rgba(239,68,68,0.12); color:#ef4444; border:1px solid rgba(239,68,68,0.20); }
    .st-btn-danger:hover { background:rgba(239,68,68,0.20); }
    .st-btn-sm { padding:6px 13px; font-size:0.76rem; border-radius:8px; }
    .st-btn-row { display:flex; justify-content:flex-end; gap:8px; padding-top:18px; margin-top:18px; border-top:1px solid rgba(255,255,255,0.06); }

    /* ── Avatar ── */
    .st-avatar { width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg,#00d4ff,#8b5cf6); display:flex; align-items:center; justify-content:center; font-size:1.4rem; font-weight:800; color:#fff; flex-shrink:0; }

    /* ── Plan card ── */
    .st-plan-card { padding:20px; border-radius:14px; border:2px solid; transition:all 0.2s; cursor:pointer; }
    .st-plan-card:hover { transform:translateY(-2px); }

    /* ── Integration row ── */
    .st-integ { display:flex; align-items:center; gap:14px; padding:14px 16px; border-radius:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); margin-bottom:8px; transition:background 0.2s; }
    .st-integ:hover { background:rgba(255,255,255,0.04); }
    .st-integ-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.3rem; flex-shrink:0; background:rgba(255,255,255,0.06); }

    /* ── Audit table ── */
    .st-audit-row { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
    .st-audit-row:last-child { border-bottom:none; }
    .st-audit-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }

    /* ── Color swatch ── */
    .st-swatch { width:32px; height:32px; border-radius:50%; cursor:pointer; border:3px solid transparent; transition:all 0.2s; }
    .st-swatch:hover { transform:scale(1.15); }
    .st-swatch.selected { border-color:#fff; box-shadow:0 0 0 2px #00d4ff; }

    /* ── Progress bar ── */
    .st-prog { height:6px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; margin-top:5px; }
    .st-prog-fill { height:100%; border-radius:3px; }

    /* ── Badge ── */
    .st-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:99px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }

    @media (max-width:768px) { .st-wrap { grid-template-columns:1fr; } .st-nav { flex-direction:row; flex-wrap:wrap; } }
  `;
  document.head.appendChild(s);
}
injectSettingsCSS();

// ── State ─────────────────────────────────────────────────────
let ST = { panel: 0 };

// ── Panel metadata ────────────────────────────────────────────
const ST_PANELS = [
  { icon:'🏢', label:'Empresa'          },
  { icon:'👤', label:'Conta'            },
  { icon:'🔒', label:'Segurança'        },
  { icon:'🌍', label:'Idioma & Região'  },
  { icon:'🔔', label:'Notificações'     },
  { icon:'🎨', label:'Aparência'        },
  { icon:'📧', label:'E-mail'           },
  { icon:'🔌', label:'Integrações'      },
  { icon:'💳', label:'Plano'            },
  { icon:'📜', label:'Auditoria'        },
];

// ══════════════════════════════════════════════════════════════
//  MAIN RENDER
// ══════════════════════════════════════════════════════════════
window.renderPage_settings = function() {
  injectSettingsCSS();
  return `
<div id="settings-module">
  <div style="margin-bottom:20px;">
    <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">⚙️ Configurações</h2>
    <p style="color:#6b7280;font-size:0.84rem;margin-top:3px;">Configurações globais da plataforma e do tenant</p>
  </div>
  <div class="st-wrap">
    <!-- Nav -->
    <nav class="st-nav">
      ${ST_PANELS.map((p,i)=>`
        <button class="st-nav-item${ST.panel===i?' active':''}" onclick="stPanel(${i})">
          <span class="st-nav-icon">${p.icon}</span>${p.label}
        </button>`).join('')}
    </nav>
    <!-- Panel -->
    <div class="st-panel" id="st-panel-body">
      ${stRenderPanel(ST.panel)}
    </div>
  </div>
</div>`;
};

window.initPage_settings = function() {};

window.stPanel = function(idx) {
  ST.panel = idx;
  document.querySelectorAll('.st-nav-item').forEach((b,i) => b.classList.toggle('active', i===idx));
  const body = document.getElementById('st-panel-body');
  if (!body) return;
  body.style.opacity = '0';
  body.innerHTML = stRenderPanel(idx);
  requestAnimationFrame(() => { body.style.transition='opacity 0.2s'; body.style.opacity='1'; });
};

function stRenderPanel(idx) {
  const panels = [
    stPanelEmpresa,
    stPanelConta,
    stPanelSeguranca,
    stPanelIdioma,
    stPanelNotificacoes,
    stPanelAparencia,
    stPanelEmail,
    stPanelIntegracoes,
    stPanelPlano,
    stPanelAuditoria,
  ];
  return (panels[idx] || panels[0])();
}

// ══════════════════════════════════════════════════════════════
//  PANEL 0 — EMPRESA
// ══════════════════════════════════════════════════════════════
function stPanelEmpresa() {
  return `
  <div class="st-section-title">🏢 Informações da Empresa</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
    <div class="st-field"><label class="st-label">Nome da Empresa</label><input class="st-input" value="Empresa Demo S.A." id="st-co-name"></div>
    <div class="st-field"><label class="st-label">CNPJ / Tax ID</label><input class="st-input" value="00.000.000/0001-00" id="st-co-cnpj"></div>
    <div class="st-field"><label class="st-label">Setor / Indústria</label>
      <select class="st-select" id="st-co-sector">
        <option>Tecnologia</option><option>Financeiro</option><option>Saúde</option>
        <option>Manufatura</option><option>Governo</option><option>Educação</option><option>Varejo</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Tamanho</label>
      <select class="st-select" id="st-co-size">
        <option>1–50 colaboradores</option><option selected>51–500 colaboradores</option>
        <option>501–5.000 colaboradores</option><option>5.000+ colaboradores</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">País Principal</label>
      <select class="st-select" id="st-co-country">
        <option>🇧🇷 Brasil</option><option>🇺🇸 EUA</option><option>🇪🇺 Europa</option>
        <option>🇲🇽 México</option><option>🇸🇦 Arábia Saudita</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Fuso Horário</label>
      <select class="st-select" id="st-co-tz">
        <option>America/Sao_Paulo (UTC-3)</option><option>America/New_York (UTC-5)</option>
        <option>Europe/London (UTC+0)</option><option>Europe/Berlin (UTC+1)</option>
        <option>Asia/Dubai (UTC+4)</option><option>Asia/Riyadh (UTC+3)</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Moeda Padrão</label>
      <select class="st-select" id="st-co-currency">
        <option>BRL – Real Brasileiro</option><option>USD – Dólar Americano</option>
        <option>EUR – Euro</option><option>SAR – Riyal Saudita</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Website</label><input class="st-input" value="https://empresa.com.br" id="st-co-web"></div>
  </div>

  <div class="st-section-title" style="margin-top:22px;">🖼 Logotipo & Identidade Visual</div>
  <div style="display:flex;align-items:center;gap:16px;padding:16px;background:rgba(255,255,255,0.02);border:2px dashed rgba(255,255,255,0.10);border-radius:12px;margin-bottom:14px;">
    <div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#00d4ff,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:1.5rem;">🛡</div>
    <div>
      <div style="font-weight:600;font-size:0.88rem;">Brandvakt Academy</div>
      <div style="font-size:0.72rem;color:#6b7280;margin-top:2px;">PNG ou SVG · 512×512px recomendado</div>
    </div>
    <button class="st-btn st-btn-ghost st-btn-sm" style="margin-left:auto;" onclick="showToast&&showToast('Upload de logo em breve','info')">📤 Alterar</button>
  </div>

  <div class="st-section-title">📍 Endereço</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
    <div class="st-field" style="grid-column:1/-1;"><label class="st-label">Rua / Logradouro</label><input class="st-input" value="Av. Paulista, 1000 — Bela Vista" id="st-co-street"></div>
    <div class="st-field"><label class="st-label">Cidade</label><input class="st-input" value="São Paulo" id="st-co-city"></div>
    <div class="st-field"><label class="st-label">Estado / UF</label><input class="st-input" value="SP" id="st-co-state"></div>
    <div class="st-field"><label class="st-label">CEP / ZIP</label><input class="st-input" value="01310-100" id="st-co-zip"></div>
    <div class="st-field"><label class="st-label">Telefone</label><input class="st-input" value="+55 11 9999-0000" id="st-co-phone"></div>
  </div>

  <div class="st-btn-row">
    <button class="st-btn st-btn-ghost" onclick="showToast&&showToast('Alterações descartadas','info')">Cancelar</button>
    <button class="st-btn st-btn-primary" onclick="showToast&&showToast('✅ Configurações da empresa salvas!','success')">💾 Salvar Empresa</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  PANEL 1 — CONTA
// ══════════════════════════════════════════════════════════════
function stPanelConta() {
  return `
  <div class="st-section-title">👤 Meu Perfil</div>
  <div style="display:flex;align-items:center;gap:16px;padding:16px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:12px;margin-bottom:20px;">
    <div class="st-avatar">AL</div>
    <div>
      <div style="font-weight:700;font-size:0.95rem;">Admin Local</div>
      <div style="font-size:0.74rem;color:#6b7280;margin-top:2px;">admin@empresa.com</div>
      <div style="margin-top:6px;"><span class="st-badge" style="background:rgba(0,212,255,0.12);color:#00d4ff;">Super Admin</span></div>
    </div>
    <button class="st-btn st-btn-ghost st-btn-sm" style="margin-left:auto;" onclick="showToast&&showToast('Upload de foto em breve','info')">📷 Alterar Foto</button>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
    <div class="st-field"><label class="st-label">Nome Completo</label><input class="st-input" value="Admin Local" id="st-ac-name"></div>
    <div class="st-field"><label class="st-label">E-mail</label><input class="st-input" type="email" value="admin@empresa.com" id="st-ac-email"></div>
    <div class="st-field"><label class="st-label">Cargo / Função</label><input class="st-input" value="Administrador de Plataforma" id="st-ac-role"></div>
    <div class="st-field"><label class="st-label">Departamento</label>
      <select class="st-select" id="st-ac-dept">
        <option>TI</option><option>RH</option><option>Compliance</option><option>Gestão</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Telefone</label><input class="st-input" value="+55 11 9999-0000" id="st-ac-phone"></div>
    <div class="st-field"><label class="st-label">Fuso Horário</label>
      <select class="st-select" id="st-ac-tz">
        <option>America/Sao_Paulo (UTC-3)</option><option>America/New_York (UTC-5)</option><option>Europe/London (UTC+0)</option>
      </select>
    </div>
  </div>

  <div class="st-section-title">🔑 Alterar Senha</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;">
    <div class="st-field"><label class="st-label">Senha Atual</label><input class="st-input" type="password" placeholder="••••••••" id="st-pw-current"></div>
    <div class="st-field"><label class="st-label">Nova Senha</label><input class="st-input" type="password" placeholder="••••••••" id="st-pw-new"></div>
    <div class="st-field"><label class="st-label">Confirmar Senha</label><input class="st-input" type="password" placeholder="••••••••" id="st-pw-confirm"></div>
  </div>
  <div style="margin-top:8px;font-size:0.72rem;color:#6b7280;">Mínimo 12 caracteres · letras maiúsculas, minúsculas, números e símbolos.</div>

  <div class="st-section-title">🖥 Sessões Ativas</div>
  ${[
    { device:'Chrome — Windows 11', ip:'189.xxx.xxx.1', when:'Agora', current:true },
    { device:'Safari — iPhone 15',  ip:'177.xxx.xxx.2', when:'há 2h', current:false },
    { device:'Firefox — macOS',     ip:'201.xxx.xxx.9', when:'há 1 dia', current:false },
  ].map(s=>`
    <div style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);margin-bottom:8px;">
      <span style="font-size:1.1rem;">${s.device.includes('Chrome')?'🌐':s.device.includes('Safari')?'📱':'🦊'}</span>
      <div style="flex:1;">
        <div style="font-size:0.84rem;font-weight:600;">${s.device}</div>
        <div style="font-size:0.70rem;color:#6b7280;">${s.ip} · ${s.when}</div>
      </div>
      ${s.current
        ? `<span class="st-badge" style="background:rgba(34,197,94,0.12);color:#22c55e;">Sessão Atual</span>`
        : `<button class="st-btn st-btn-danger st-btn-sm" onclick="showToast&&showToast('Sessão encerrada','success');this.closest('div[style]').remove()">Encerrar</button>`}
    </div>`).join('')}

  <div class="st-btn-row">
    <button class="st-btn st-btn-ghost" onclick="showToast&&showToast('Alterações descartadas','info')">Cancelar</button>
    <button class="st-btn st-btn-primary" onclick="stSaveConta()">💾 Salvar Perfil</button>
  </div>`;
}
window.stSaveConta = function() {
  const name = document.getElementById('st-ac-name')?.value;
  const np = document.getElementById('st-pw-new')?.value;
  const cp = document.getElementById('st-pw-confirm')?.value;
  if (np && np !== cp) { showToast&&showToast('As senhas não coincidem','error'); return; }
  if (np && np.length < 12) { showToast&&showToast('Senha deve ter ao menos 12 caracteres','error'); return; }
  showToast&&showToast('✅ Perfil atualizado com sucesso!','success');
};

// ══════════════════════════════════════════════════════════════
//  PANEL 2 — SEGURANÇA
// ══════════════════════════════════════════════════════════════
function stPanelSeguranca() {
  const toggles = [
    { id:'mfa',   title:'MFA Obrigatório',       desc:'Exige autenticação multifator para todos os usuários da plataforma', on:true  },
    { id:'sso',   title:'SSO / SAML 2.0',        desc:'Autenticação via Microsoft Azure AD, Google Workspace ou Okta',      on:true  },
    { id:'ip',    title:'Restrição por IP',       desc:'Permite acesso apenas de faixas de IP autorizadas',                  on:false },
    { id:'zt',    title:'Zero Trust',             desc:'Verifica identidade e contexto em cada requisição de acesso',         on:true  },
    { id:'audit', title:'Log de Auditoria',       desc:'Registra todas as ações dos administradores e usuários',              on:true  },
    { id:'tls',   title:'TLS 1.3 Obrigatório',   desc:'Força criptografia TLS 1.3 em todas as conexões',                     on:true  },
    { id:'brute', title:'Bloqueio por Força Bruta','desc':'Bloqueia conta após 5 tentativas de login incorretas',             on:true  },
    { id:'pwexp', title:'Expiração de Senha',     desc:'Força troca de senha a cada 90 dias',                                 on:false },
  ];
  return `
  <div class="st-section-title">🛡 Autenticação & Acesso</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
    ${toggles.slice(0,4).map(t=>`
      <div class="st-toggle-row">
        <div><div class="st-toggle-title">${t.title}</div><div class="st-toggle-desc">${t.desc}</div></div>
        <label class="st-toggle">
          <input type="checkbox" ${t.on?'checked':''} onchange="showToast&&showToast('${t.title} '+(this.checked?'ativado':'desativado'),'info')">
          <span class="st-slider"></span>
        </label>
      </div>`).join('')}
  </div>

  <div class="st-section-title">🔐 Políticas de Senha</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
    <div class="st-field"><label class="st-label">Comprimento Mínimo</label>
      <select class="st-select">
        <option>8 caracteres</option><option selected>12 caracteres</option><option>16 caracteres</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Expiração</label>
      <select class="st-select">
        <option>Nunca</option><option selected>90 dias</option><option>60 dias</option><option>30 dias</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Histórico de Senhas</label>
      <select class="st-select">
        <option>Não restringir</option><option selected>Últimas 5 senhas</option><option>Últimas 10 senhas</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Sessão Expira em</label>
      <select class="st-select">
        <option>1 hora</option><option selected>8 horas</option><option>24 horas</option><option>7 dias</option>
      </select>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
    ${toggles.slice(4).map(t=>`
      <div class="st-toggle-row">
        <div><div class="st-toggle-title">${t.title}</div><div class="st-toggle-desc">${t.desc}</div></div>
        <label class="st-toggle">
          <input type="checkbox" ${t.on?'checked':''} onchange="showToast&&showToast('${t.title} '+(this.checked?'ativado':'desativado'),'info')">
          <span class="st-slider"></span>
        </label>
      </div>`).join('')}
  </div>

  <div class="st-section-title">🌐 IPs Autorizados</div>
  <div class="st-field" style="margin-bottom:14px;">
    <label class="st-label">Faixas de IP (uma por linha, CIDR aceito)</label>
    <textarea class="st-textarea">189.0.0.0/8
201.0.0.0/8
177.0.0.0/8</textarea>
  </div>

  <div class="st-btn-row">
    <button class="st-btn st-btn-danger st-btn-sm" onclick="showToast&&showToast('Encerrando todas as sessões...','info')">⚠️ Encerrar Todas as Sessões</button>
    <div style="flex:1"></div>
    <button class="st-btn st-btn-ghost" onclick="showToast&&showToast('Cancelado','info')">Cancelar</button>
    <button class="st-btn st-btn-primary" onclick="showToast&&showToast('✅ Políticas de segurança salvas!','success')">💾 Salvar</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  PANEL 3 — IDIOMA & REGIÃO
// ══════════════════════════════════════════════════════════════
function stPanelIdioma() {
  const langs = [
    { code:'pt', flag:'🇧🇷', name:'Português (Brasil)', native:'Português' },
    { code:'en', flag:'🇺🇸', name:'English (US)',       native:'English'   },
    { code:'es', flag:'🇪🇸', name:'Español',            native:'Español'   },
    { code:'fr', flag:'🇫🇷', name:'Français',           native:'Français'  },
  ];
  const current = (typeof APP !== 'undefined' && APP.lang) || 'pt';
  return `
  <div class="st-section-title">🌍 Idioma da Plataforma</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:22px;">
    ${langs.map(l=>`
      <div onclick="stSetLang('${l.code}',this)" data-lang="${l.code}"
        style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:12px;border:2px solid ${current===l.code?'#00d4ff':'rgba(255,255,255,0.07)'};background:${current===l.code?'rgba(0,212,255,0.08)':'rgba(255,255,255,0.02)'};cursor:pointer;transition:all 0.2s;">
        <span style="font-size:1.6rem;">${l.flag}</span>
        <div>
          <div style="font-weight:700;font-size:0.88rem;">${l.name}</div>
          <div style="font-size:0.70rem;color:#6b7280;">${l.native}</div>
        </div>
        ${current===l.code?'<span style="margin-left:auto;color:#00d4ff;font-size:1.1rem;">✓</span>':''}
      </div>`).join('')}
  </div>

  <div class="st-section-title">📅 Formato de Data & Hora</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px;">
    <div class="st-field"><label class="st-label">Formato de Data</label>
      <select class="st-select">
        <option selected>DD/MM/AAAA</option><option>MM/DD/AAAA</option><option>AAAA-MM-DD (ISO)</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Formato de Hora</label>
      <select class="st-select">
        <option selected>24 horas (14:30)</option><option>12 horas (2:30 PM)</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Primeiro Dia da Semana</label>
      <select class="st-select">
        <option selected>Segunda-feira</option><option>Domingo</option><option>Sábado</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Separador Decimal</label>
      <select class="st-select">
        <option selected>Vírgula (1.000,00)</option><option>Ponto (1,000.00)</option>
      </select>
    </div>
  </div>

  <div class="st-section-title">🌐 Localização Regional</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
    <div class="st-field"><label class="st-label">Fuso Horário Padrão</label>
      <select class="st-select">
        <option selected>America/Sao_Paulo (UTC-3)</option>
        <option>America/New_York (UTC-5)</option>
        <option>Europe/London (UTC+0)</option>
        <option>Europe/Berlin (UTC+1)</option>
        <option>Asia/Dubai (UTC+4)</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Moeda Padrão</label>
      <select class="st-select">
        <option selected>BRL – R$ Real Brasileiro</option>
        <option>USD – $ Dólar Americano</option>
        <option>EUR – € Euro</option>
      </select>
    </div>
  </div>

  <div class="st-btn-row">
    <button class="st-btn st-btn-ghost" onclick="showToast&&showToast('Cancelado','info')">Cancelar</button>
    <button class="st-btn st-btn-primary" onclick="showToast&&showToast('✅ Preferências de idioma salvas!','success')">💾 Salvar</button>
  </div>`;
}
window.stSetLang = function(code, el) {
  // Update visual selection
  document.querySelectorAll('[data-lang]').forEach(e => {
    const active = e.dataset.lang === code;
    e.style.borderColor = active ? '#00d4ff' : 'rgba(255,255,255,0.07)';
    e.style.background  = active ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.02)';
  });
  // Apply language via global function if available
  if (typeof setLang === 'function') {
    const flagMap = { pt:'🇧🇷', en:'🇺🇸', es:'🇪🇸', fr:'🇫🇷' };
    const codeMap = { pt:'PT', en:'EN', es:'ES', fr:'FR' };
    setLang(code, flagMap[code], codeMap[code], null);
  } else if (typeof APP !== 'undefined') {
    APP.lang = code;
    showToast&&showToast('Idioma alterado!','success');
  }
};

// ══════════════════════════════════════════════════════════════
//  PANEL 4 — NOTIFICAÇÕES
// ══════════════════════════════════════════════════════════════
function stPanelNotificacoes() {
  const groups = [
    { title:'Treinamentos & Cursos', items:[
      { id:'n1', label:'Novo treinamento atribuído',       email:true,  push:true,  sms:false },
      { id:'n2', label:'Prazo de treinamento se aproxima',  email:true,  push:true,  sms:true  },
      { id:'n3', label:'Treinamento concluído (por usuário)',email:false, push:false, sms:false },
      { id:'n4', label:'Trilha de aprendizagem completa',   email:true,  push:true,  sms:false },
    ]},
    { title:'Certificados', items:[
      { id:'n5', label:'Certificado emitido',              email:true,  push:true,  sms:false },
      { id:'n6', label:'Certificado prestes a vencer',     email:true,  push:true,  sms:true  },
      { id:'n7', label:'Certificado expirado',             email:true,  push:false, sms:false },
    ]},
    { title:'Segurança & Risco', items:[
      { id:'n8',  label:'Usuário clicou em link phishing', email:true,  push:true,  sms:true  },
      { id:'n9',  label:'Risk Score crítico detectado',    email:true,  push:true,  sms:true  },
      { id:'n10', label:'Tentativa de login suspeita',     email:true,  push:true,  sms:true  },
      { id:'n11', label:'Novo relatório gerado',           email:true,  push:false, sms:false },
    ]},
    { title:'Sistema', items:[
      { id:'n12', label:'Resumo semanal de atividades',    email:true,  push:false, sms:false },
      { id:'n13', label:'Manutenção programada',           email:true,  push:true,  sms:false },
      { id:'n14', label:'Novidades e atualizações',        email:false, push:false, sms:false },
    ]},
  ];
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
    <div style="display:flex;gap:8px;">
      <button class="st-btn st-btn-ghost st-btn-sm" onclick="stToggleAllNotif(true)">Ativar Todos</button>
      <button class="st-btn st-btn-ghost st-btn-sm" onclick="stToggleAllNotif(false)">Desativar Todos</button>
    </div>
    <div style="display:flex;gap:20px;font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">
      <span style="width:46px;text-align:center;">Email</span>
      <span style="width:46px;text-align:center;">Push</span>
      <span style="width:46px;text-align:center;">SMS</span>
    </div>
  </div>

  ${groups.map(g=>`
    <div class="st-section-title">${g.title}</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px;">
      ${g.items.map(item=>`
        <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);">
          <span style="flex:1;font-size:0.83rem;">${item.label}</span>
          ${['email','push','sms'].map(ch=>`
            <div style="width:46px;display:flex;justify-content:center;">
              <label class="st-toggle">
                <input type="checkbox" class="notif-chk" ${item[ch]?'checked':''} onchange="showToast&&showToast('Preferência salva','info')">
                <span class="st-slider"></span>
              </label>
            </div>`).join('')}
        </div>`).join('')}
    </div>`).join('')}

  <div class="st-btn-row">
    <button class="st-btn st-btn-primary" onclick="showToast&&showToast('✅ Preferências de notificação salvas!','success')">💾 Salvar</button>
  </div>`;
}
window.stToggleAllNotif = function(on) {
  document.querySelectorAll('.notif-chk').forEach(c => c.checked = on);
  showToast&&showToast(on ? 'Todas as notificações ativadas' : 'Todas desativadas', 'info');
};

// ══════════════════════════════════════════════════════════════
//  PANEL 5 — APARÊNCIA
// ══════════════════════════════════════════════════════════════
function stPanelAparencia() {
  const accents = ['#00d4ff','#22c55e','#8b5cf6','#f59e0b','#ef4444','#14b8a6','#f97316','#ec4899'];
  return `
  <div class="st-section-title">🌙 Tema</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:22px;">
    ${[
      { id:'dark',  icon:'🌙', name:'Dark',   desc:'Fundo escuro (padrão)', sel:true  },
      { id:'light', icon:'☀️', name:'Light',  desc:'Fundo claro',           sel:false },
      { id:'auto',  icon:'💻', name:'Auto',   desc:'Segue o sistema',       sel:false },
    ].map(t=>`
      <div onclick="stSetTheme('${t.id}',this)" data-theme="${t.id}"
        style="padding:16px;border-radius:12px;border:2px solid ${t.sel?'#00d4ff':'rgba(255,255,255,0.08)'};background:${t.sel?'rgba(0,212,255,0.08)':'rgba(255,255,255,0.02)'};cursor:pointer;text-align:center;transition:all 0.2s;">
        <div style="font-size:1.6rem;margin-bottom:6px;">${t.icon}</div>
        <div style="font-weight:700;font-size:0.88rem;">${t.name}</div>
        <div style="font-size:0.70rem;color:#6b7280;margin-top:2px;">${t.desc}</div>
      </div>`).join('')}
  </div>

  <div class="st-section-title">🎨 Cor de Destaque</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px;">
    ${accents.map((c,i)=>`
      <div class="st-swatch${i===0?' selected':''}" style="background:${c};" onclick="stSetAccent('${c}',this)" title="${c}"></div>`).join('')}
  </div>

  <div class="st-section-title">🔤 Tipografia & Densidade</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
    <div class="st-field"><label class="st-label">Tamanho da Fonte</label>
      <select class="st-select">
        <option>Pequeno (13px)</option><option selected>Médio (15px)</option><option>Grande (17px)</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Densidade do Layout</label>
      <select class="st-select">
        <option>Compacto</option><option selected>Padrão</option><option>Espaçoso</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Família de Fonte</label>
      <select class="st-select">
        <option selected>Inter (padrão)</option><option>Manrope</option><option>DM Sans</option><option>System UI</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Raio dos Cards</label>
      <select class="st-select">
        <option>Sem bordas</option><option>Pequeno (8px)</option><option selected>Médio (16px)</option><option>Grande (24px)</option>
      </select>
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
    ${[
      { label:'Animações de transição', desc:'Fade e slide nas mudanças de página', on:true  },
      { label:'Barra lateral recolhida', desc:'Sidebar compacta por padrão',        on:false },
      { label:'Modo alto contraste',    desc:'Melhora acessibilidade visual',       on:false },
    ].map(t=>`
      <div class="st-toggle-row">
        <div><div class="st-toggle-title">${t.label}</div><div class="st-toggle-desc">${t.desc}</div></div>
        <label class="st-toggle">
          <input type="checkbox" ${t.on?'checked':''} onchange="showToast&&showToast('Preferência salva','info')">
          <span class="st-slider"></span>
        </label>
      </div>`).join('')}
  </div>

  <div class="st-btn-row">
    <button class="st-btn st-btn-ghost" onclick="showToast&&showToast('Aparência redefinida ao padrão','info')">↩ Redefinir</button>
    <button class="st-btn st-btn-primary" onclick="showToast&&showToast('✅ Aparência salva!','success')">💾 Salvar</button>
  </div>`;
}
window.stSetTheme = function(id, el) {
  document.querySelectorAll('[data-theme]').forEach(e => {
    const sel = e.dataset.theme === id;
    e.style.borderColor = sel ? '#00d4ff' : 'rgba(255,255,255,0.08)';
    e.style.background  = sel ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.02)';
  });
  showToast&&showToast('Tema: ' + id, 'info');
};
window.stSetAccent = function(color, el) {
  document.querySelectorAll('.st-swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  showToast&&showToast('Cor de destaque: ' + color, 'info');
};

// ══════════════════════════════════════════════════════════════
//  PANEL 6 — E-MAIL
// ══════════════════════════════════════════════════════════════
function stPanelEmail() {
  return `
  <div class="st-section-title">📤 Configuração SMTP</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px;">
    <div class="st-field"><label class="st-label">Servidor SMTP</label><input class="st-input" value="smtp.empresa.com.br" id="st-em-host"></div>
    <div class="st-field"><label class="st-label">Porta</label>
      <select class="st-select" id="st-em-port">
        <option>25</option><option selected>587 (TLS)</option><option>465 (SSL)</option>
      </select>
    </div>
    <div class="st-field"><label class="st-label">Usuário SMTP</label><input class="st-input" value="noreply@empresa.com.br" id="st-em-user"></div>
    <div class="st-field"><label class="st-label">Senha SMTP</label><input class="st-input" type="password" placeholder="••••••••••" id="st-em-pass"></div>
    <div class="st-field"><label class="st-label">Criptografia</label>
      <select class="st-select" id="st-em-enc">
        <option selected>TLS (STARTTLS)</option><option>SSL</option><option>Nenhuma</option>
      </select>
    </div>
    <div style="display:flex;align-items:flex-end;">
      <button class="st-btn st-btn-ghost" style="width:100%;" onclick="stTestEmail()">🧪 Testar Conexão</button>
    </div>
  </div>

  <div class="st-section-title">✉️ Identidade do Remetente</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px;">
    <div class="st-field"><label class="st-label">Nome do Remetente</label><input class="st-input" value="Brandvakt Academy" id="st-em-sname"></div>
    <div class="st-field"><label class="st-label">E-mail Remetente</label><input class="st-input" value="noreply@empresa.com.br" id="st-em-semail"></div>
    <div class="st-field"><label class="st-label">E-mail de Resposta (Reply-To)</label><input class="st-input" value="suporte@empresa.com.br" id="st-em-reply"></div>
    <div class="st-field"><label class="st-label">BCC Global (cópia oculta)</label><input class="st-input" placeholder="cco@empresa.com (opcional)" id="st-em-bcc"></div>
  </div>

  <div class="st-section-title">📋 Templates de E-mail</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">
    ${[
      { name:'Boas-vindas ao usuário',       last:'01/06/2025', status:'ativo'   },
      { name:'Atribuição de treinamento',    last:'28/05/2025', status:'ativo'   },
      { name:'Certificado emitido',          last:'15/05/2025', status:'ativo'   },
      { name:'Lembrete de prazo',            last:'10/05/2025', status:'ativo'   },
      { name:'Alerta de risco crítico',      last:'01/05/2025', status:'inativo' },
      { name:'Resumo semanal',               last:'20/04/2025', status:'ativo'   },
    ].map(t=>`
      <div style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);">
        <span style="font-size:1.0rem;">📧</span>
        <div style="flex:1;">
          <div style="font-size:0.84rem;font-weight:600;">${t.name}</div>
          <div style="font-size:0.70rem;color:#6b7280;">Atualizado em ${t.last}</div>
        </div>
        <span class="st-badge" style="background:${t.status==='ativo'?'rgba(34,197,94,0.12)':'rgba(255,255,255,0.06)'};color:${t.status==='ativo'?'#22c55e':'#6b7280'};">${t.status}</span>
        <button class="st-btn st-btn-ghost st-btn-sm" onclick="showToast&&showToast('Editor de template em breve','info')">✏️ Editar</button>
      </div>`).join('')}
  </div>

  <div class="st-section-title">🧪 Envio de Teste</div>
  <div style="display:flex;gap:10px;align-items:flex-end;margin-bottom:20px;">
    <div class="st-field" style="flex:1;"><label class="st-label">E-mail de teste</label><input class="st-input" placeholder="seu@email.com" id="st-em-test"></div>
    <button class="st-btn st-btn-primary" onclick="stSendTest()">📨 Enviar Teste</button>
  </div>

  <div class="st-btn-row">
    <button class="st-btn st-btn-ghost" onclick="showToast&&showToast('Cancelado','info')">Cancelar</button>
    <button class="st-btn st-btn-primary" onclick="showToast&&showToast('✅ Configurações de e-mail salvas!','success')">💾 Salvar</button>
  </div>`;
}
window.stTestEmail = function() {
  showToast&&showToast('Testando conexão SMTP...','info');
  setTimeout(()=>showToast&&showToast('✅ Conexão SMTP OK — TLS verificado','success'),1500);
};
window.stSendTest = function() {
  const email = document.getElementById('st-em-test')?.value;
  if (!email) { showToast&&showToast('Informe o e-mail de teste','error'); return; }
  showToast&&showToast('Enviando e-mail de teste para '+email+'...','info');
  setTimeout(()=>showToast&&showToast('✅ E-mail de teste enviado!','success'),1200);
};

// ══════════════════════════════════════════════════════════════
//  PANEL 7 — INTEGRAÇÕES
// ══════════════════════════════════════════════════════════════
function stPanelIntegracoes() {
  const integs = [
    { cat:'Identidade & SSO', items:[
      { name:'Microsoft Azure AD', icon:'🪟', desc:'SSO, MFA e sincronização de usuários', status:'connected', color:'#0078d4' },
      { name:'Google Workspace',   icon:'🔷', desc:'Google SSO e sincronização de diretório', status:'connected', color:'#4285f4' },
      { name:'Okta',               icon:'🔵', desc:'Identity Provider SAML 2.0 / OIDC', status:'available', color:'#007dc1' },
    ]},
    { cat:'Comunicação', items:[
      { name:'Microsoft Teams', icon:'💼', desc:'Notificações e lembretes de treinamento', status:'connected', color:'#6264a7' },
      { name:'Slack',           icon:'💬', desc:'Alertas de risco e conclusões via Slack', status:'available', color:'#4a154b' },
    ]},
    { cat:'Sistemas de RH', items:[
      { name:'SAP SuccessFactors', icon:'🏭', desc:'Sincronização de colaboradores e estrutura org.', status:'available', color:'#0056a2' },
      { name:'Workday',            icon:'🔧', desc:'Integração de dados de RH e folha de pagamento', status:'available', color:'#f04e37' },
      { name:'Salesforce',         icon:'☁️', desc:'Dados de usuários e compliance para CRM',        status:'available', color:'#00a1e0' },
    ]},
    { cat:'Desenvolvimento & API', items:[
      { name:'Webhook',   icon:'🔗', desc:'HTTP callbacks para eventos da plataforma', status:'connected', color:'#22c55e' },
      { name:'REST API',  icon:'🔌', desc:'API completa com autenticação OAuth 2.0',  status:'connected', color:'#8b5cf6' },
      { name:'SCIM 2.0', icon:'🔄', desc:'Provisionamento automático de usuários',    status:'available', color:'#00d4ff' },
    ]},
  ];

  return `
  ${integs.map(g=>`
    <div class="st-section-title">${g.cat}</div>
    ${g.items.map(itg=>`
      <div class="st-integ">
        <div class="st-integ-icon" style="background:${itg.color}18;border:1px solid ${itg.color}30;">${itg.icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.88rem;">${itg.name}</div>
          <div style="font-size:0.72rem;color:#6b7280;margin-top:2px;">${itg.desc}</div>
        </div>
        ${itg.status === 'connected'
          ? `<span class="st-badge" style="background:rgba(34,197,94,0.12);color:#22c55e;">● Conectado</span>
             <button class="st-btn st-btn-danger st-btn-sm" onclick="showToast&&showToast('Desconectando ${itg.name}...','info')">Desconectar</button>`
          : `<span class="st-badge" style="background:rgba(255,255,255,0.06);color:#6b7280;">Disponível</span>
             <button class="st-btn st-btn-primary st-btn-sm" onclick="showToast&&showToast('Conectando ${itg.name}...','info')">Conectar</button>`}
      </div>`).join('')}
  `).join('')}

  <div class="st-section-title">🔑 Chaves de API</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
    ${[
      { name:'Chave de Produção', key:'bv_prod_••••••••••••••••••3f9a', created:'01/01/2025', scopes:'read, write' },
      { name:'Chave de Sandbox',  key:'bv_sand_••••••••••••••••••7b2c', created:'15/03/2025', scopes:'read' },
    ].map(k=>`
      <div style="padding:14px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <span style="font-weight:700;font-size:0.85rem;">${k.name}</span>
          <div style="display:flex;gap:6px;">
            <button class="st-btn st-btn-ghost st-btn-sm" onclick="showToast&&showToast('Chave copiada!','success')">📋 Copiar</button>
            <button class="st-btn st-btn-danger st-btn-sm" onclick="showToast&&showToast('Chave revogada','info')">🗑 Revogar</button>
          </div>
        </div>
        <code style="font-size:0.78rem;color:#00d4ff;background:rgba(0,212,255,0.06);padding:4px 10px;border-radius:6px;display:block;margin-bottom:6px;">${k.key}</code>
        <div style="font-size:0.70rem;color:#6b7280;">Criada em ${k.created} · Escopos: ${k.scopes}</div>
      </div>`).join('')}
  </div>
  <button class="st-btn st-btn-ghost st-btn-sm" onclick="showToast&&showToast('Nova chave de API gerada!','success')">+ Gerar Nova Chave</button>`;
}

// ══════════════════════════════════════════════════════════════
//  PANEL 8 — PLANO
// ══════════════════════════════════════════════════════════════
function stPanelPlano() {
  const plans = [
    { id:'starter', name:'Starter',    price:'R$ 490/mês',  users:'Até 50',  color:'#6b7280', features:['Dashboard básico','5 treinamentos','Certificados simples','Suporte email'] },
    { id:'pro',     name:'Pro',        price:'R$ 1.290/mês',users:'Até 500', color:'#00d4ff', features:['Todos do Starter','Relatórios avançados','HRM & Phishing','SSO / SAML','API REST','Suporte prioritário'], current:true },
    { id:'enterprise',name:'Enterprise',price:'Sob consulta',users:'Ilimitado',color:'#8b5cf6',features:['Tudo do Pro','SLA 99.9%','Ambiente dedicado','SCIM 2.0','White-label','Gerente de Conta'] },
  ];

  return `
  <div class="st-section-title">💎 Plano Atual</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:22px;">
    ${plans.map(p=>`
      <div class="st-plan-card" style="border-color:${p.current?p.color:'rgba(255,255,255,0.08)'};background:${p.current?p.color+'0d':'rgba(255,255,255,0.01)'};">
        ${p.current?`<div style="font-size:0.65rem;font-weight:700;color:${p.color};text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">● Plano Atual</div>`:''}
        <div style="font-weight:800;font-size:1.0rem;margin-bottom:4px;">${p.name}</div>
        <div style="font-size:1.3rem;font-weight:900;color:${p.color};margin-bottom:4px;">${p.price}</div>
        <div style="font-size:0.72rem;color:#6b7280;margin-bottom:12px;">Usuários: ${p.users}</div>
        <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:14px;">
          ${p.features.map(f=>`<div style="font-size:0.76rem;color:#94a3b8;display:flex;gap:6px;"><span style="color:${p.color};">✓</span>${f}</div>`).join('')}
        </div>
        ${!p.current
          ? `<button class="st-btn st-btn-ghost" style="width:100%;justify-content:center;" onclick="showToast&&showToast('Entre em contato: comercial@brandvakt.com','info')">${p.id==='enterprise'?'Falar com Vendas':'Fazer Upgrade'}</button>`
          : `<div style="font-size:0.76rem;color:${p.color};text-align:center;font-weight:600;">Ativo ✓</div>`}
      </div>`).join('')}
  </div>

  <div class="st-section-title">📊 Uso do Plano</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px;">
    ${[
      { label:'Usuários Ativos',    used:340,  total:500,   color:'#00d4ff' },
      { label:'Treinamentos',       used:47,   total:'∞',   color:'#22c55e' },
      { label:'Armazenamento',      used:'6.4 GB', total:'20 GB', color:'#8b5cf6', pct:32 },
      { label:'API Calls / mês',    used:'12.400', total:'50.000', color:'#f59e0b', pct:24 },
    ].map(u=>{
      const pct = u.pct ?? (typeof u.used==='number' && typeof u.total==='number' ? Math.round(u.used/u.total*100) : null);
      return `<div style="padding:14px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);">
        <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:6px;">
          <span style="color:#94a3b8;">${u.label}</span>
          <span style="font-weight:700;color:${u.color};">${u.used} / ${u.total}</span>
        </div>
        ${pct!==null?`<div class="st-prog"><div class="st-prog-fill" style="width:${pct}%;background:${u.color};"></div></div>`:''}
      </div>`;
    }).join('')}
  </div>

  <div class="st-section-title">💳 Faturamento</div>
  <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:14px;">
    <div style="flex:1;min-width:200px;padding:14px 16px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);">
      <div style="font-size:0.72rem;color:#6b7280;margin-bottom:4px;">Próximo vencimento</div>
      <div style="font-weight:700;">01 de Julho, 2025</div>
      <div style="font-size:0.80rem;font-weight:800;color:#00d4ff;margin-top:4px;">R$ 1.290,00</div>
    </div>
    <div style="flex:1;min-width:200px;padding:14px 16px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);">
      <div style="font-size:0.72rem;color:#6b7280;margin-bottom:4px;">Forma de pagamento</div>
      <div style="font-weight:700;">•••• •••• •••• 4242</div>
      <div style="font-size:0.72rem;color:#6b7280;margin-top:2px;">Visa · Expira 12/2027</div>
    </div>
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <button class="st-btn st-btn-ghost st-btn-sm" onclick="showToast&&showToast('Histórico de faturas em breve','info')">📄 Ver Faturas</button>
    <button class="st-btn st-btn-ghost st-btn-sm" onclick="showToast&&showToast('Atualizar cartão em breve','info')">💳 Atualizar Cartão</button>
    <button class="st-btn st-btn-danger st-btn-sm" onclick="showToast&&showToast('Entre em contato para cancelar: suporte@brandvakt.com','info')">Cancelar Plano</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
//  PANEL 9 — AUDITORIA
// ══════════════════════════════════════════════════════════════
function stPanelAuditoria() {
  const events = [
    { type:'auth',     color:'#22c55e', icon:'🔐', user:'admin@empresa.com',    action:'Login bem-sucedido',                    ip:'189.10.x.x',  time:'Hoje 09:14' },
    { type:'config',   color:'#00d4ff', icon:'⚙️', user:'admin@empresa.com',    action:'Configurações de segurança atualizadas', ip:'189.10.x.x',  time:'Hoje 09:10' },
    { type:'user',     color:'#8b5cf6', icon:'👤', user:'admin@empresa.com',    action:'Usuário Ana Lima criado',               ip:'189.10.x.x',  time:'Hoje 08:50' },
    { type:'training', color:'#14b8a6', icon:'📚', user:'m.teles@empresa.com',  action:'Treinamento "LGPD" concluído',          ip:'201.x.x.x',   time:'Hoje 08:30' },
    { type:'cert',     color:'#f59e0b', icon:'🏆', user:'r.neto@empresa.com',   action:'Certificado Cybersecurity emitido',     ip:'177.x.x.x',   time:'Ontem 17:45' },
    { type:'alert',    color:'#ef4444', icon:'⚠️', user:'r.lima@empresa.com',   action:'Risk Score crítico — 85 pontos',        ip:'201.x.x.x',   time:'Ontem 16:20' },
    { type:'export',   color:'#00d4ff', icon:'📤', user:'admin@empresa.com',    action:'Relatório Executivo exportado (PDF)',   ip:'189.10.x.x',  time:'Ontem 15:00' },
    { type:'phishing', color:'#ef4444', icon:'📧', user:'c.mendes@empresa.com', action:'Clicou em link de phishing (Campanha Q2)', ip:'201.x.x.x', time:'Ontem 14:10' },
    { type:'auth',     color:'#f59e0b', icon:'🔒', user:'b.alves@empresa.com',  action:'Tentativa de login falhou (3/5)',       ip:'x.x.x.x',     time:'Ontem 13:00' },
    { type:'config',   color:'#00d4ff', icon:'🔌', user:'admin@empresa.com',    action:'Integração Microsoft Teams ativada',    ip:'189.10.x.x',  time:'Ontem 11:30' },
    { type:'user',     color:'#8b5cf6', icon:'🗑', user:'admin@empresa.com',    action:'Usuário desativado: j.silva@empresa',   ip:'189.10.x.x',  time:'04 Jun 09:00'},
    { type:'training', color:'#22c55e', icon:'🛤', user:'admin@empresa.com',    action:'Nova trilha "Liderança Ética" criada',  ip:'189.10.x.x',  time:'04 Jun 08:20'},
  ];

  const typeColors = { auth:'#22c55e', config:'#00d4ff', user:'#8b5cf6', training:'#14b8a6', cert:'#f59e0b', alert:'#ef4444', export:'#00d4ff', phishing:'#ef4444' };

  return `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <input class="st-input" style="max-width:240px;" placeholder="🔍 Buscar evento...">
      <select class="st-select" style="max-width:160px;">
        <option>Todos os tipos</option>
        <option>Autenticação</option><option>Configuração</option><option>Usuários</option>
        <option>Treinamentos</option><option>Alertas</option><option>Exportações</option>
      </select>
    </div>
    <div style="display:flex;gap:8px;">
      <select class="st-select" style="max-width:160px;">
        <option>Últimos 7 dias</option><option>Últimos 30 dias</option><option>Últimos 90 dias</option>
      </select>
      <button class="st-btn st-btn-ghost st-btn-sm" onclick="showToast&&showToast('Exportando log de auditoria...','info')">📤 Exportar</button>
    </div>
  </div>

  <!-- Log -->
  <div style="background:rgba(255,255,255,0.01);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;">
    <div style="display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">
      <span>Tipo</span><span>Evento</span><span>IP</span><span>Horário</span>
    </div>
    ${events.map(e=>`
      <div class="st-audit-row" style="padding:10px 16px;display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;">
        <div class="st-audit-dot" style="background:${e.color};box-shadow:0 0 6px ${e.color}66;margin:0 auto;"></div>
        <div>
          <div style="font-size:0.82rem;font-weight:600;">${e.icon} ${e.action}</div>
          <div style="font-size:0.68rem;color:#6b7280;margin-top:2px;">${e.user}</div>
        </div>
        <code style="font-size:0.68rem;color:#6b7280;">${e.ip}</code>
        <span style="font-size:0.70rem;color:#6b7280;white-space:nowrap;">${e.time}</span>
      </div>`).join('')}
  </div>

  <!-- Stats -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px;">
    ${[
      ['🔐','42','Logins',     '#22c55e'],
      ['⚙️','18','Configurações','#00d4ff'],
      ['👤','11','Usuários',   '#8b5cf6'],
      ['⚠️','7', 'Alertas',    '#ef4444'],
    ].map(([icon,val,lbl,col])=>`
      <div style="text-align:center;padding:12px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);">
        <div style="font-size:1.1rem;">${icon}</div>
        <div style="font-size:1.2rem;font-weight:900;color:${col};margin-top:4px;">${val}</div>
        <div style="font-size:0.66rem;color:#6b7280;margin-top:2px;">${lbl}</div>
      </div>`).join('')}
  </div>`;
}

window.stRenderPanel = stRenderPanel;
