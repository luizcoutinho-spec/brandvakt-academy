// ══════════════════════════════════════════════════════════════
//  PAGE: CERTIFICADOS + HUMAN RISK MANAGEMENT
// ══════════════════════════════════════════════════════════════

window.renderPage_certificates = function() {
  const L = certL[APP.lang] || certL.pt;

  const certs = [
    { id:'BVA-2024-001204', user:'Ana Oliveira',    course:'Phishing & Engenharia Social', dept:'RH',       date:'2024-11-15', expires:'2025-11-15', lang:'pt', score:98, status:'valid',   country:'🇧🇷' },
    { id:'BVA-2024-001203', user:'Sarah Johnson',   course:'GDPR Fundamentals',           dept:'Jurídico', date:'2024-11-14', expires:'2025-11-14', lang:'en', score:100,status:'valid',   country:'🇺🇸' },
    { id:'BVA-2024-001202', user:'Marie Dupont',    course:'Código de Ética',             dept:'Comercial',date:'2024-11-13', expires:'2025-11-13', lang:'fr', score:92, status:'valid',   country:'🇫🇷' },
    { id:'BVA-2024-001201', user:'Carlos Mendes',   course:'Senhas Seguras e MFA',        dept:'TI',       date:'2024-11-12', expires:'2025-11-12', lang:'pt', score:88, status:'valid',   country:'🇧🇷' },
    { id:'BVA-2024-001180', user:'Catalina Ruiz',   course:'Anticorrupção',               dept:'RH',       date:'2024-10-30', expires:'2025-10-30', lang:'es', score:95, status:'valid',   country:'🇪🇸' },
    { id:'BVA-2024-001120', user:'Claire Martin',   course:'LGPD na Prática',             dept:'Jurídico', date:'2024-09-15', expires:'2024-12-15', lang:'fr', score:97, status:'expiring',country:'🇫🇷' },
    { id:'BVA-2024-001050', user:'João Silva',      course:'Home Office Seguro',          dept:'TI',       date:'2024-08-10', expires:'2024-11-10', lang:'pt', score:75, status:'expired', country:'🇧🇷' },
    { id:'BVA-2024-001204b',user:'Ahmed Al-Rashid', course:'Code of Ethics',              dept:'Operações',date:'2024-11-10', expires:'2025-11-10', lang: score:82, status:'valid',   country:'🇸🇦' },
  ];

  const statusColor  = { valid:'var(--brand-success)', expiring:'var(--brand-warning)', expired:'var(--brand-danger)' };
  const statusLabel  = { valid:L.status_valid, expiring:L.status_expiring, expired:L.status_expired };
  const langFlags    = { pt:'🇧🇷', en:'🇺🇸', es:'🇪🇸', fr:'🇫🇷' };

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <!-- Header -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary btn-sm" onclick="showToast('Exportando relatório...','info')">⬇ ${L.btn_export}</button>
        <button class="btn btn-primary btn-sm" onclick="showModal('modal-cert-preview')">🔍 ${L.btn_validate}</button>
      </div>
    </div>

    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:12px;" class="stagger">
      ${[
        { icon:'🏆', val:'1.204', label:L.kpi_total,    color:'var(--brand-accent)' },
        { icon:'✅', val:'1.158', label:L.kpi_valid,    color:'var(--brand-success)' },
        { icon:'⚠️', val:'23',   label:L.kpi_expiring, color:'var(--brand-warning)' },
        { icon:'❌', val:'23',   label:L.kpi_expired,  color:'var(--brand-danger)' },
        { icon:'🌍', val:'5',    label:L.kpi_langs,    color:'var(--brand-teal)' },
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

    <!-- Certificate Table -->
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:16px 20px;border-bottom:1px solid var(--bg-border);display:flex;align-items:center;gap:10px;">
        <h4 style="flex:1;">${L.table_title}</h4>
        <input type="text" placeholder="${L.search_ph}" style="background:rgba(255,255,255,0.04);border:1px solid var(--bg-border-light);border-radius:var(--radius-md);padding:7px 12px;color:var(--text-primary);font-size:0.82rem;font-family:inherit;outline:none;width:220px;" />
        <select style="min-width:130px;"><option>${L.all_status}</option><option>${L.status_valid}</option><option>${L.status_expiring}</option><option>${L.status_expired}</option></select>
      </div>
      <div class="table-wrap" style="border:none;border-radius:0;">
        <table>
          <thead>
            <tr>
              <th>${L.col_id}</th>
              <th>${L.col_user}</th>
              <th>${L.col_course}</th>
              <th>${L.col_lang}</th>
              <th>${L.col_score}</th>
              <th>${L.col_date}</th>
              <th>${L.col_expires}</th>
              <th>${L.col_status}</th>
              <th>${L.col_actions}</th>
            </tr>
          </thead>
          <tbody>
            ${certs.map(c => `
              <tr>
                <td><span class="font-mono" style="font-size:0.72rem;color:var(--text-muted);">${c.id}</span></td>
                <td>
                  <div style="display:flex;align-items:center;gap:6px;">
                    <span>${c.country}</span>
                    <div>
                      <div style="font-weight:600;font-size:0.84rem;">${c.user}</div>
                      <div style="font-size:0.68rem;color:var(--text-muted);">${c.dept}</div>
                    </div>
                  </div>
                </td>
                <td style="font-size:0.82rem;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.course}</td>
                <td><span style="font-size:1.1rem;">${langFlags[c.lang]}</span></td>
                <td><span style="font-weight:700;color:${c.score>=90?'var(--brand-success)':'var(--text-primary)'};">${c.score}</span></td>
                <td style="font-size:0.78rem;color:var(--text-muted);">${c.date}</td>
                <td style="font-size:0.78rem;color:${statusColor[c.status]};">${c.expires}</td>
                <td><span style="font-size:0.7rem;font-weight:700;color:${statusColor[c.status]};background:${statusColor[c.status]}22;padding:3px 9px;border-radius:99px;border:1px solid ${statusColor[c.status]}44;">${statusLabel[c.status]}</span></td>
                <td>
                  <div style="display:flex;gap:4px;">
                    <button class="btn btn-ghost btn-sm btn-icon" onclick="openCertPreview('${c.id}','${c.user}','${c.course}','${c.lang}')" title="${L.btn_view}">👁</button>
                    <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Baixando certificado...','info')" title="${L.btn_download}">⬇</button>
                    <button class="btn btn-ghost btn-sm btn-icon" onclick="showToast('Link copiado!','success')" title="${L.btn_share}">🔗</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Certificate Preview Modal -->
  <div class="modal-overlay hidden" id="modal-cert-preview" onclick="closeModalOutside(event,'modal-cert-preview')">
    <div class="modal modal-lg" id="cert-preview-content">
      ${certPreviewHTML('BVA-2024-001204','Ana Oliveira','Phishing & Engenharia Social','pt', L)}
    </div>
  </div>`;
};

function openCertPreview(id, user, course, lang) {
  const L = certL[APP.lang] || certL.pt;
  document.getElementById('cert-preview-content').innerHTML = certPreviewHTML(id, user, course, lang, L);
  showModal('modal-cert-preview');
}
window.openCertPreview = openCertPreview;

function certPreviewHTML(id, user, course, lang, L) {
  const langFlags = { pt:'🇧🇷', en:'🇺🇸', es:'🇪🇸', fr:'🇫🇷' };
  const isRTL = false; // Arabic removed
  return `
  <div class="modal-header">
    <h3 class="modal-title">🏆 ${(L||certL.pt).btn_view} Certificado</h3>
    <span class="modal-close" onclick="hideModal('modal-cert-preview')">✕</span>
  </div>
  <!-- Certificate Visual -->
  <div style="background:linear-gradient(135deg,#060E1E 0%,#0D1B35 50%,#060E1E 100%);border:1px solid rgba(0,87,255,0.3);border-radius:var(--radius-lg);padding:32px;text-align:center;position:relative;overflow:hidden;margin-bottom:20px;" dir="${isRTL?'rtl':'ltr'}">
    <!-- Decorative -->
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 0%,rgba(0,87,255,0.1),transparent);pointer-events:none;"></div>
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--brand-accent),var(--brand-accent2),transparent);"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--brand-accent),var(--brand-accent2),transparent);"></div>

    <!-- Brand -->
    <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:20px;">
      <div style="width:40px;height:40px;background:linear-gradient(135deg,var(--brand-accent),var(--brand-accent2));border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(0,87,255,0.4);">
        <svg width="22" height="22" viewBox="0 0 26 26" fill="none"><path d="M13 2L22 7V19L13 24L4 19V7L13 2Z" stroke="white" stroke-width="1.5" fill="none"/><path d="M13 8L17 10.5V15.5L13 18L9 15.5V10.5L13 8Z" fill="white" opacity="0.9"/></svg>
      </div>
      <div style="text-align:left;">
        <div style="font-size:1rem;font-weight:800;">Brandvakt Academy</div>
        <div style="font-size:0.6rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.1em;">Enterprise Training Platform</div>
      </div>
      <span style="font-size:1.5rem;margin-left:8px;">${langFlags[lang]||'🌐'}</span>
    </div>

    <div style="font-size:0.72rem;color:var(--brand-accent);text-transform:uppercase;letter-spacing:.15em;margin-bottom:8px;">Certificado de Conclusão</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:16px;">Certifica que</div>
    <div style="font-size:1.8rem;font-weight:900;letter-spacing:-0.02em;background:linear-gradient(135deg,#fff,#8AB4FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:12px;">${user}</div>
    <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:8px;">concluiu com êxito o treinamento</div>
    <div style="font-size:1.1rem;font-weight:700;color:var(--text-primary);margin-bottom:20px;padding:0 20px;">«${course}»</div>

    <!-- Score badge -->
    <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,214,143,0.12);border:1px solid rgba(0,214,143,0.3);border-radius:99px;padding:6px 18px;margin-bottom:20px;">
      <span style="font-size:0.8rem;color:var(--brand-success);font-weight:700;">✅ Aprovado · Score: 98/100</span>
    </div>

    <!-- QR + Details -->
    <div style="display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;margin-bottom:16px;">
      <!-- QR Code (generated SVG pattern) -->
      <div style="background:rgba(255,255,255,0.05);border:1px solid var(--bg-border-light);border-radius:var(--radius-md);padding:10px;">
        ${qrCodeSVG()}
      </div>
      <div style="text-align:left;">
        <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;">ID do Certificado</div>
        <div class="font-mono" style="font-size:0.8rem;color:var(--brand-accent);margin-bottom:8px;">${id}</div>
        <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;">Emitido em: <span style="color:var(--text-primary);">15/11/2024</span></div>
        <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;">Válido até: <span style="color:var(--text-primary);">15/11/2025</span></div>
        <div style="font-size:0.7rem;color:var(--text-muted);">Assinatura Digital: <span style="color:var(--brand-success);">✅ Verificada</span></div>
      </div>
    </div>

    <div style="font-size:0.62rem;color:var(--text-muted);">Verifique a autenticidade em academy.brandvakt.com/verify · ${id}</div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;">
    <button class="btn btn-ghost" onclick="hideModal('modal-cert-preview')">Fechar</button>
    <button class="btn btn-secondary" onclick="showToast('Link copiado!','success')">🔗 Compartilhar</button>
    <button class="btn btn-primary" onclick="showToast('Baixando PDF...','info')">⬇ Baixar PDF</button>
  </div>`;
}

function qrCodeSVG() {
  // Stylized QR code pattern (decorative)
  const cells = [];
  const size = 7;
  const pattern = [
    [1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1],
  ];
  const extra = [[0,3],[0,4],[1,3],[2,4],[3,0],[3,4],[4,1],[4,2],[4,3],[5,2],[5,4],[6,2],[6,4]];
  const grid = Array.from({length:size}, (_, r) => Array.from({length:size}, (__, c) => (pattern[r]?.[c] || 0)));
  extra.forEach(([r,c]) => { if (grid[r]) grid[r][c] = 1; });

  const cell = 8;
  const rects = grid.flatMap((row, r) =>
    row.map((v, c) => v ? `<rect x="${c*cell}" y="${r*cell}" width="${cell-1}" height="${cell-1}" rx="1" fill="rgba(0,87,255,0.9)"/>` : '')
  ).join('');
  return `<svg width="${size*cell}" height="${size*cell}" viewBox="0 0 ${size*cell} ${size*cell}">${rects}</svg>`;
}

const certL = {
  pt:{ title:'Certificados Digitais', sub:'Emitidos automaticamente ao concluir treinamentos', btn_export:'Exportar', btn_validate:'Validar Certificado', kpi_total:'Total Emitidos', kpi_valid:'Válidos', kpi_expiring:'Vencendo em 30 dias', kpi_expired:'Expirados', kpi_langs:'Idiomas', table_title:'Histórico de Certificados', search_ph:'Buscar certificado ou usuário...', all_status:'Todos', status_valid:'Válido', status_expiring:'Vencendo', status_expired:'Expirado', col_id:'ID', col_user:'Usuário', col_course:'Treinamento', col_lang:'Idioma', col_score:'Nota', col_date:'Emitido', col_expires:'Validade', col_status:'Status', col_actions:'Ações', btn_view:'Visualizar', btn_download:'Baixar', btn_share:'Compartilhar' },
  en:{ title:'Digital Certificates', sub:'Automatically issued upon completing trainings', btn_export:'Export', btn_validate:'Validate Certificate', kpi_total:'Total Issued', kpi_valid:'Valid', kpi_expiring:'Expiring in 30 days', kpi_expired:'Expired', kpi_langs:'Languages', table_title:'Certificate History', search_ph:'Search certificate or user...', all_status:'All', status_valid:'Valid', status_expiring:'Expiring', status_expired:'Expired', col_id:'ID', col_user:'User', col_course:'Training', col_lang:'Language', col_score:'Score', col_date:'Issued', col_expires:'Expiry', col_status:'Status', col_actions:'Actions', btn_view:'View', btn_download:'Download', btn_share:'Share' },
  es:{ title:'Certificados Digitales', sub:'Emitidos automáticamente al completar formaciones', btn_export:'Exportar', btn_validate:'Validar Certificado', kpi_total:'Total Emitidos', kpi_valid:'Válidos', kpi_expiring:'Vencen en 30 días', kpi_expired:'Expirados', kpi_langs:'Idiomas', table_title:'Historial de Certificados', search_ph:'Buscar certificado o usuario...', all_status:'Todos', status_valid:'Válido', status_expiring:'Por vencer', status_expired:'Expirado', col_id:'ID', col_user:'Usuario', col_course:'Formación', col_lang:'Idioma', col_score:'Nota', col_date:'Emitido', col_expires:'Validez', col_status:'Estado', col_actions:'Acciones', btn_view:'Ver', btn_download:'Descargar', btn_share:'Compartir' },
  fr:{ title:'Certificats Numériques', sub:'Émis automatiquement après les formations', btn_export:'Exporter', btn_validate:'Valider Certificat', kpi_total:'Total Émis', kpi_valid:'Valides', kpi_expiring:'Expirent dans 30 jours', kpi_expired:'Expirés', kpi_langs:'Langues', table_title:'Historique des Certificats', search_ph:'Rechercher certificat ou utilisateur...', all_status:'Tous', status_valid:'Valide', status_expiring:'Expirant', status_expired:'Expiré', col_id:'ID', col_user:'Utilisateur', col_course:'Formation', col_lang:'Langue', col_score:'Note', col_date:'Émis', col_expires:'Expiration', col_status:'Statut', col_actions:'Actions', btn_view:'Voir', btn_download:'Télécharger', btn_share:'Partager' },
};

// ══════════════════════════════════════════════════════════════
//  PAGE: HUMAN RISK MANAGEMENT
// ══════════════════════════════════════════════════════════════
window.renderPage_risk = function() {
  const L = riskL[APP.lang] || riskL.pt;

  const riskUsers = [
    { name:'Ahmed Al-Rashid', dept:'Operações',  score:28, factors:['Baixo engajamento','Treinamentos pendentes','Phishing simulado falhou'], trend:'down',  country:'🇸🇦' },
    { name:'Pedro Almeida',   dept:'Financeiro', score:34, factors:['Certificados expirados','Acesso não autorizado (tentativa)'], trend:'down',  country:'🇧🇷' },
    { name:'João Silva',      dept:'TI',         score:41, factors:['Inativo há 30 dias','Senha fraca detectada'], trend:'stable', country:'🇧🇷' },
    { name:'Lucas Ferrari',   dept:'Financeiro', score:55, factors:['Atrasos em treinamentos obrigatórios'], trend:'up',    country:'🇧🇷' },
  ];

  const deptRisk = [
    { dept:'RH',         score:88, risk:'low',  icon:'👥' },
    { dept:'Jurídico',   score:91, risk:'low',  icon:'⚖️' },
    { dept:'TI',         score:76, risk:'low',  icon:'💻' },
    { dept:'Financeiro', score:62, risk:'med',  icon:'💰' },
    { dept:'Comercial',  score:58, risk:'med',  icon:'📈' },
    { dept:'Operações',  score:41, risk:'high', icon:'⚙️' },
  ];

  const riskColor = s => s >= 70 ? 'var(--brand-success)' : s >= 50 ? 'var(--brand-warning)' : 'var(--brand-danger)';
  const riskLabel = s => s >= 70 ? L.risk_low : s >= 50 ? L.risk_med : L.risk_high;

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="showToast('Gerando relatório de risco...','info')">📊 ${L.btn_report}</button>
    </div>

    <!-- Score geral -->
    <div style="display:grid;grid-template-columns:280px 1fr;gap:18px;align-items:start;" class="stagger">
      <div class="card card-glow" style="padding:24px;text-align:center;">
        <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;">${L.org_score}</div>
        ${scoreRingSVG(65, 'var(--brand-warning)', 120, 10)}
        <div style="margin-top:16px;">
          <div style="font-size:0.88rem;font-weight:700;color:var(--brand-warning);">${L.risk_med}</div>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:4px;">▲ +4pts ${L.vs_month}</div>
        </div>
        <div class="divider"></div>
        <div style="display:flex;flex-direction:column;gap:8px;text-align:left;">
          ${[
            [L.risk_low,  '62%', 'var(--brand-success)', 62],
            [L.risk_med,  '24%', 'var(--brand-warning)', 24],
            [L.risk_high, '14%', 'var(--brand-danger)',  14],
          ].map(([label, pct, color, w]) => `
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
                <span style="font-size:0.72rem;color:${color};font-weight:600;">${label}</span>
                <span style="font-size:0.72rem;color:var(--text-muted);">${pct}</span>
              </div>
              <div class="progress-bar"><div style="height:100%;width:${w}%;background:${color};border-radius:99px;"></div></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Dept Risk -->
      <div class="card" style="padding:22px;">
        <h3 style="margin-bottom:16px;">${L.dept_risk}</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${deptRisk.map(d => `
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:1.1rem;width:24px;text-align:center;">${d.icon}</span>
              <span style="font-size:0.84rem;font-weight:600;min-width:90px;">${d.dept}</span>
              <div class="progress-bar" style="flex:1;">
                <div style="height:100%;width:${d.score}%;background:${riskColor(d.score)};border-radius:99px;transition:width .7s ease;"></div>
              </div>
              <span style="font-size:0.82rem;font-weight:700;min-width:36px;text-align:right;color:${riskColor(d.score)};">${d.score}</span>
              <span class="badge ${d.risk==='low'?'badge-green':d.risk==='med'?'badge-yellow':'badge-red'}" style="min-width:70px;justify-content:center;">${riskLabel(d.score)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- High Risk Users -->
    <div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <h3 style="display:flex;align-items:center;gap:8px;">🔴 ${L.high_risk_users}</h3>
        <button class="btn btn-secondary btn-sm" onclick="showToast('Notificando gestores...','info')">🔔 ${L.btn_notify_mgrs}</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${riskUsers.map(u => `
          <div style="padding:16px;border-radius:var(--radius-md);background:rgba(255,59,92,0.05);border:1px solid rgba(255,59,92,0.15);display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap;">
            <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,59,92,0.2);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">${u.country}</div>
            <div style="flex:1;min-width:200px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                <span style="font-weight:700;">${u.name}</span>
                <span class="badge badge-red" style="font-size:0.6rem;">${u.dept}</span>
                <span style="font-size:0.8rem;">${u.trend==='down'?'📉':u.trend==='up'?'📈':'➡️'}</span>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                ${u.factors.map(f => `<span style="font-size:0.7rem;padding:2px 8px;border-radius:99px;background:rgba(255,59,92,0.1);color:var(--brand-danger);">${f}</span>`).join('')}
              </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0;">
              <div style="font-size:1.4rem;font-weight:900;color:var(--brand-danger);">${u.score}<span style="font-size:0.7rem;color:var(--text-muted)">/100</span></div>
              <div style="display:flex;gap:5px;">
                <button class="btn btn-sm btn-ghost" onclick="showToast('Plano de treinamento criado','info')">📋 ${L.btn_plan}</button>
                <button class="btn btn-sm btn-danger" onclick="showToast('Gestor notificado','success')">🔔</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Risk Factors -->
    <div class="card" style="padding:22px;">
      <h3 style="margin-bottom:16px;">${L.factors_title}</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">
        ${[
          { icon:'🎣', factor:L.factor_phishing,  count:47, pct:14, color:'var(--brand-danger)' },
          { icon:'⏰', factor:L.factor_overdue,   count:89, pct:26, color:'var(--brand-warning)' },
          { icon:'🔑', factor:L.factor_password,  count:23, pct:7,  color:'var(--brand-warning)' },
          { icon:'💤', factor:L.factor_inactive,  count:28, pct:8,  color:'var(--text-muted)' },
          { icon:'📜', factor:L.factor_expired,   count:23, pct:7,  color:'var(--brand-danger)' },
          { icon:'🖥', factor:L.factor_unauth,    count:8,  pct:2,  color:'var(--brand-danger)' },
        ].map(f => `
          <div style="padding:14px;border-radius:var(--radius-md);background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span>${f.icon}</span>
              <span style="font-size:0.78rem;color:var(--text-secondary);flex:1;">${f.factor}</span>
              <span style="font-size:0.9rem;font-weight:800;color:${f.color};">${f.count}</span>
            </div>
            <div class="progress-bar">
              <div style="height:100%;width:${f.pct}%;background:${f.color};border-radius:99px;"></div>
            </div>
            <div style="font-size:0.68rem;color:var(--text-muted);margin-top:4px;">${f.pct}% dos usuários</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;
};

window.initPage_risk = function() {
  setTimeout(() => {
    document.querySelectorAll('.progress-fill, [style*="border-radius:99px"]').forEach(el => {
      if (el.style.width && el.style.width !== '0px') {
        const w = el.style.width; el.style.width = '0';
        requestAnimationFrame(() => { el.style.transition='width .7s ease'; el.style.width=w; });
      }
    });
  }, 100);
};

const riskL = {
  pt:{ title:'Human Risk Management', sub:'Monitoramento do risco humano na organização', btn_report:'Relatório de Risco', org_score:'Human Risk Score Organizacional', vs_month:'vs mês anterior', dept_risk:'Risco por Departamento', high_risk_users:'Usuários de Alto Risco', btn_notify_mgrs:'Notificar Gestores', btn_plan:'Plano de Ação', risk_low:'Baixo Risco', risk_med:'Risco Médio', risk_high:'Alto Risco', factors_title:'Fatores de Risco', factor_phishing:'Falhou em simulação phishing', factor_overdue:'Treinamentos em atraso', factor_password:'Senhas fracas detectadas', factor_inactive:'Inatividade prolongada', factor_expired:'Certificados expirados', factor_unauth:'Tentativas de acesso não autorizado' },
  en:{ title:'Human Risk Management', sub:'Monitoring human risk across the organization', btn_report:'Risk Report', org_score:'Organizational Human Risk Score', vs_month:'vs previous month', dept_risk:'Risk by Department', high_risk_users:'High Risk Users', btn_notify_mgrs:'Notify Managers', btn_plan:'Action Plan', risk_low:'Low Risk', risk_med:'Medium Risk', risk_high:'High Risk', factors_title:'Risk Factors', factor_phishing:'Failed phishing simulation', factor_overdue:'Overdue trainings', factor_password:'Weak passwords detected', factor_inactive:'Prolonged inactivity', factor_expired:'Expired certificates', factor_unauth:'Unauthorized access attempts' },
  es:{ title:'Human Risk Management', sub:'Monitorización del riesgo humano en la organización', btn_report:'Informe de Riesgo', org_score:'Score de Riesgo Humano Organizacional', vs_month:'vs mes anterior', dept_risk:'Riesgo por Departamento', high_risk_users:'Usuarios de Alto Riesgo', btn_notify_mgrs:'Notificar Gestores', btn_plan:'Plan de Acción', risk_low:'Bajo Riesgo', risk_med:'Riesgo Medio', risk_high:'Alto Riesgo', factors_title:'Factores de Riesgo', factor_phishing:'Falló simulación de phishing', factor_overdue:'Formaciones atrasadas', factor_password:'Contraseñas débiles detectadas', factor_inactive:'Inactividad prolongada', factor_expired:'Certificados expirados', factor_unauth:'Intentos de acceso no autorizado' },
  fr:{ title:'Human Risk Management', sub:'Surveillance du risque humain dans l\'organisation', btn_report:'Rapport de Risque', org_score:'Score de Risque Humain Organisationnel', vs_month:'vs mois précédent', dept_risk:'Risque par Département', high_risk_users:'Utilisateurs à Haut Risque', btn_notify_mgrs:'Notifier les Gestionnaires', btn_plan:"Plan d'Action", risk_low:'Faible Risque', risk_med:'Risque Moyen', risk_high:'Risque Élevé', factors_title:'Facteurs de Risque', factor_phishing:'Échec simulation phishing', factor_overdue:'Formations en retard', factor_password:'Mots de passe faibles détectés', factor_inactive:'Inactivité prolongée', factor_expired:'Certificats expirés', factor_unauth:"Tentatives d'accès non autorisé" },
};
