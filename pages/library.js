// ══════════════════════════════════════════════════════════════
//  PAGE: BIBLIOTECA DE TREINAMENTOS
// ══════════════════════════════════════════════════════════════

window.renderPage_library = function () {
  const lang = APP.lang;
  const L = libLabels[lang] || libLabels.pt;

  return `
  <div style="display:flex;flex-direction:column;gap:22px;">

    <!-- Header -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary btn-sm" onclick="navTo('scorm',null)">📦 ${L.btn_scorm}</button>
        <button class="btn btn-primary btn-sm" onclick="showModal('modal-new-course')">+ ${L.btn_add}</button>
      </div>
    </div>

    <!-- Search + Filters -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
      <div style="flex:1;min-width:220px;max-width:380px;display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.04);border:1px solid var(--bg-border-light);border-radius:var(--radius-md);padding:8px 14px;">
        <span style="color:var(--text-muted);">🔍</span>
        <input id="lib-search" type="text" placeholder="${L.search_ph}" oninput="filterLibrary()"
          style="background:transparent;border:none;outline:none;color:var(--text-primary);font-size:0.84rem;font-family:inherit;flex:1;" />
      </div>
      <select id="lib-filter-cat" onchange="filterLibrary()" style="min-width:160px;">
        <option value="">${L.all_cats}</option>
        <option value="cybersecurity">🛡 Cybersecurity</option>
        <option value="compliance">📋 Compliance</option>
        <option value="privacidade">🔒 Privacidade</option>
        <option value="etica">⚖️ Ética Empresarial</option>
        <option value="governanca">🏢 Governança</option>
        <option value="ia">🤖 Inteligência Artificial</option>
      </select>
      <select id="lib-filter-lang" onchange="filterLibrary()" style="min-width:140px;">
        <option value="">${L.all_langs}</option>
        <option value="pt">🇧🇷 Português</option>
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ar">🇸🇦 العربية</option>
      </select>
      <select id="lib-filter-status" onchange="filterLibrary()" style="min-width:130px;">
        <option value="">${L.all_status}</option>
        <option value="published">${L.status_published}</option>
        <option value="draft">${L.status_draft}</option>
        <option value="archived">${L.status_archived}</option>
      </select>
    </div>

    <!-- Category chips -->
    <div id="lib-chips" style="display:flex;gap:8px;flex-wrap:wrap;">
      <span class="chip active" onclick="filterChip(this,'')">${L.chip_all}</span>
      <span class="chip" onclick="filterChip(this,'cybersecurity')">🛡 Cybersecurity</span>
      <span class="chip" onclick="filterChip(this,'compliance')">📋 Compliance</span>
      <span class="chip" onclick="filterChip(this,'privacidade')">🔒 Privacidade</span>
      <span class="chip" onclick="filterChip(this,'etica')">⚖️ Ética</span>
      <span class="chip" onclick="filterChip(this,'governanca')">🏢 Governança</span>
      <span class="chip" onclick="filterChip(this,'ia')">🤖 IA</span>
    </div>

    <!-- Stats strip -->
    <div style="display:flex;gap:20px;padding:14px 18px;background:rgba(0,87,255,0.06);border:1px solid rgba(0,87,255,0.15);border-radius:var(--radius-md);flex-wrap:wrap;">
      ${[
        ['📚', '48', L.stat_total],
        ['✅', '42', L.stat_published],
        ['🌐', '127', L.stat_versions],
        ['📦', 'SCORM 1.2 + 2004', L.stat_scorm],
        ['🌍', '5', L.stat_langs],
      ].map(([icon, val, label]) => `
        <div style="display:flex;align-items:center;gap:8px;">
          <span>${icon}</span>
          <div>
            <div style="font-size:0.9rem;font-weight:800;">${val}</div>
            <div style="font-size:0.68rem;color:var(--text-muted);">${label}</div>
          </div>
        </div>
      `).join('<div style="width:1px;background:var(--bg-border);height:28px;"></div>')}
    </div>

    <!-- Course Grid -->
    <div id="lib-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">
      ${COURSES.map(c => courseCard(c, L)).join('')}
    </div>

  </div>

  <!-- Modal: SCORM Upload / New Course -->
  <div class="modal-overlay hidden" id="modal-new-course" onclick="closeModalOutside(event,'modal-new-course')">
    <div class="modal modal-lg">
      <div class="modal-header">
        <h3 class="modal-title">📦 ${L.modal_title}</h3>
        <span class="modal-close" onclick="hideModal('modal-new-course')">✕</span>
      </div>

      <!-- Steps -->
      <div class="steps" style="margin-bottom:24px;">
        <div class="step active" id="step-ind-1">
          <div class="step-num">1</div>
          <div class="step-label">${L.step1}</div>
        </div>
        <div class="step-line"></div>
        <div class="step" id="step-ind-2">
          <div class="step-num">2</div>
          <div class="step-label">${L.step2}</div>
        </div>
        <div class="step-line"></div>
        <div class="step" id="step-ind-3">
          <div class="step-num">3</div>
          <div class="step-label">${L.step3}</div>
        </div>
      </div>

      <div id="modal-step-1">
        <!-- Drop zone -->
        <div id="scorm-dropzone"
          ondragover="event.preventDefault();this.style.borderColor='var(--brand-accent)'"
          ondragleave="this.style.borderColor=''"
          ondrop="handleScormDrop(event)"
          onclick="document.getElementById('scorm-file-input').click()"
          style="border:2px dashed var(--bg-border-light);border-radius:var(--radius-lg);padding:40px;text-align:center;cursor:pointer;transition:var(--transition);margin-bottom:20px;">
          <div style="font-size:2.5rem;margin-bottom:12px;">📦</div>
          <div style="font-size:0.95rem;font-weight:600;margin-bottom:6px;">${L.drop_title}</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">${L.drop_sub}</div>
          <input type="file" id="scorm-file-input" accept=".zip" class="hidden" onchange="handleScormFile(this)" />
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div class="input-group">
            <label>${L.field_title}</label>
            <input class="input" type="text" id="new-course-title" placeholder="${L.field_title_ph}" />
          </div>
          <div class="input-group">
            <label>${L.field_cat}</label>
            <select class="input" id="new-course-cat">
              <option value="">-- ${L.all_cats} --</option>
              <option value="cybersecurity">🛡 Cybersecurity</option>
              <option value="compliance">📋 Compliance</option>
              <option value="privacidade">🔒 Privacidade</option>
              <option value="etica">⚖️ Ética Empresarial</option>
              <option value="governanca">🏢 Governança</option>
            </select>
          </div>
          <div class="input-group">
            <label>${L.field_lang}</label>
            <select class="input" id="new-course-lang">
              <option value="pt">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="ar">🇸🇦 العربية</option>
            </select>
          </div>
          <div class="input-group">
            <label>SCORM Version</label>
            <select class="input" id="new-course-scorm">
              <option value="1.2">SCORM 1.2</option>
              <option value="2004">SCORM 2004</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="hideModal('modal-new-course')">${L.btn_cancel}</button>
          <button class="btn btn-primary" onclick="scormStep2()">${L.btn_next} →</button>
        </div>
      </div>

      <div id="modal-step-2" class="hidden">
        <div style="background:rgba(0,214,143,0.08);border:1px solid rgba(0,214,143,0.2);border-radius:var(--radius-md);padding:16px;display:flex;align-items:center;gap:12px;margin-bottom:20px;">
          <span style="font-size:1.4rem;">✅</span>
          <div>
            <div style="font-weight:700;color:var(--brand-success);">${L.scorm_valid}</div>
            <div style="font-size:0.78rem;color:var(--text-muted);">SCORM 1.2 · manifest.xml detectado · 14 SCOs</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div class="input-group">
            <label>${L.field_country}</label>
            <select class="input" id="new-course-country">
              <option value="all">🌍 ${L.all_countries}</option>
              <option value="br">🇧🇷 Brasil</option>
              <option value="us">🇺🇸 EUA</option>
              <option value="eu">🇪🇺 Europa</option>
              <option value="mx">🇲🇽 México</option>
              <option value="sa">🇸🇦 Arábia Saudita</option>
            </select>
          </div>
          <div class="input-group">
            <label>${L.field_pass}</label>
            <input class="input" type="number" value="70" min="0" max="100" />
          </div>
          <div class="input-group">
            <label>${L.field_duration}</label>
            <input class="input" type="text" placeholder="30 min" />
          </div>
          <div class="input-group">
            <label>${L.field_cert}</label>
            <select class="input">
              <option>✅ ${L.cert_yes}</option>
              <option>❌ ${L.cert_no}</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="scormStep1()">${L.btn_back}</button>
          <button class="btn btn-primary" onclick="scormStep3()">${L.btn_publish} 🚀</button>
        </div>
      </div>

      <div id="modal-step-3" class="hidden">
        <div style="text-align:center;padding:30px 0;">
          <div style="font-size:3rem;margin-bottom:16px;">🎉</div>
          <h3 style="font-size:1.2rem;margin-bottom:8px;">${L.published_title}</h3>
          <p style="color:var(--text-secondary);font-size:0.84rem;">${L.published_sub}</p>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:24px;">
            <button class="btn btn-secondary" onclick="hideModal('modal-new-course')">${L.btn_close}</button>
            <button class="btn btn-primary" onclick="hideModal('modal-new-course');navTo('assignments',null)">${L.btn_assign_now}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal: Course Detail -->
  <div class="modal-overlay hidden" id="modal-course-detail" onclick="closeModalOutside(event,'modal-course-detail')">
    <div class="modal modal-lg" id="modal-course-detail-body">
    </div>
  </div>`;
};

// ─────────────────────────────
// COURSE DATA
// ─────────────────────────────
const COURSES = [
  // CYBERSECURITY
  { id: 1, title: 'Phishing & Engenharia Social', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en','es','fr','ar'], scorm: '1.2', duration: '45 min', completions: 312, rate: 94, status: 'published', level: 'Essencial', mandatory: true, version: '2.1', icon: '🎣', desc: 'Identifique e evite ataques de phishing e técnicas de engenharia social no ambiente corporativo.' },
  { id: 2, title: 'Senhas Seguras e MFA', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en','es'], scorm: '1.2', duration: '30 min', completions: 251, rate: 96, status: 'published', level: 'Essencial', mandatory: true, version: '1.3', icon: '🔑', desc: 'Criação de senhas fortes, gestão de credenciais e autenticação multifator.' },
  { id: 3, title: 'Home Office Seguro', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en'], scorm: '2004', duration: '40 min', completions: 228, rate: 88, status: 'published', level: 'Intermediário', mandatory: false, version: '1.0', icon: '🏠', desc: 'Boas práticas de segurança para trabalho remoto, VPN e Wi-Fi doméstico.' },
  { id: 4, title: 'Uso Seguro de IA Generativa', category: 'ia', catLabel: 'IA', langs: ['pt','en','es','fr'], scorm: '2004', duration: '35 min', completions: 145, rate: 91, status: 'published', level: 'Intermediário', mandatory: false, version: '1.1', icon: '🤖', desc: 'Como utilizar ferramentas de IA generativa com segurança, privacidade e responsabilidade.' },
  { id: 5, title: 'Cloud Security Awareness', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en'], scorm: '1.2', duration: '50 min', completions: 178, rate: 85, status: 'published', level: 'Avançado', mandatory: false, version: '1.0', icon: '☁️', desc: 'Segurança em ambientes cloud: responsabilidades, controles e boas práticas.' },
  { id: 6, title: 'Resposta a Incidentes', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en','es'], scorm: '2004', duration: '60 min', completions: 112, rate: 82, status: 'draft', level: 'Avançado', mandatory: false, version: '0.9', icon: '🚨', desc: 'Como identificar, reportar e escalonar incidentes de segurança.' },

  // COMPLIANCE
  { id: 7, title: 'LGPD na Prática', category: 'privacidade', catLabel: 'Privacidade', langs: ['pt'], scorm: '1.2', duration: '60 min', completions: 287, rate: 91, status: 'published', level: 'Essencial', mandatory: true, version: '3.0', icon: '🔒', desc: 'Lei Geral de Proteção de Dados: princípios, direitos dos titulares e obrigações corporativas.' },
  { id: 8, title: 'GDPR Fundamentos', category: 'privacidade', catLabel: 'Privacidade', langs: ['en','fr','es','ar'], scorm: '1.2', duration: '55 min', completions: 198, rate: 89, status: 'published', level: 'Essencial', mandatory: true, version: '2.2', icon: '🇪🇺', desc: 'General Data Protection Regulation: compliance requirements and employee obligations.' },
  { id: 9, title: 'Código de Ética Empresarial', category: 'etica', catLabel: 'Ética', langs: ['pt','en','es','fr','ar'], scorm: '1.2', duration: '45 min', completions: 274, rate: 89, status: 'published', level: 'Essencial', mandatory: true, version: '2.0', icon: '⚖️', desc: 'Fundamentos de conduta ética, tomada de decisão e responsabilidade corporativa.' },
  { id: 10, title: 'Anticorrupção e Antissuborno', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en','es'], scorm: '1.2', duration: '50 min', completions: 203, rate: 93, status: 'published', level: 'Essencial', mandatory: true, version: '1.5', icon: '🚫', desc: 'Lei Anticorrupção, FCPA, UK Bribery Act: prevenção e conformidade.' },
  { id: 11, title: 'Canal de Denúncias', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en','es','fr'], scorm: '1.2', duration: '25 min', completions: 189, rate: 95, status: 'published', level: 'Essencial', mandatory: true, version: '1.2', icon: '📢', desc: 'Como usar o canal de denúncias, proteção ao denunciante e não retaliação.' },
  { id: 12, title: 'Assédio Moral e Sexual', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en','es','fr','ar'], scorm: '2004', duration: '40 min', completions: 265, rate: 92, status: 'published', level: 'Essencial', mandatory: true, version: '2.1', icon: '🤝', desc: 'Identificação, prevenção e reporte de situações de assédio no ambiente de trabalho.' },
  { id: 13, title: 'Lavagem de Dinheiro (AML)', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en'], scorm: '1.2', duration: '55 min', completions: 134, rate: 87, status: 'published', level: 'Intermediário', mandatory: false, version: '1.0', icon: '💸', desc: 'Identificação de sinais de alerta e prevenção à lavagem de dinheiro.' },
  { id: 14, title: 'ESG e Sustentabilidade', category: 'governanca', catLabel: 'Governança', langs: ['pt','en','es'], scorm: '1.2', duration: '35 min', completions: 98, rate: 88, status: 'draft', level: 'Intermediário', mandatory: false, version: '0.8', icon: '🌱', desc: 'Responsabilidade ambiental, social e governança: papel do colaborador.' },
];

function courseCard(c, L) {
  const statusColor = c.status === 'published' ? 'var(--brand-success)' : c.status === 'draft' ? 'var(--brand-warning)' : 'var(--text-muted)';
  const statusLabel = c.status === 'published' ? L.status_published : c.status === 'draft' ? L.status_draft : L.status_archived;
  const langFlags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷', ar: '🇸🇦' };
  const catColor = {
    cybersecurity: 'badge-blue', privacidade: 'badge-purple', compliance: 'badge-green',
    etica: 'badge-yellow', governanca: 'badge-teal', ia: 'badge-blue',
  }[c.category] || 'badge-blue';

  return `
  <div class="card" style="padding:0;overflow:hidden;cursor:pointer;transition:var(--transition);" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform=''" onclick="openCourseDetail(${c.id})">
    <!-- Card Header -->
    <div style="padding:18px 18px 12px;background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border-bottom:1px solid var(--bg-border);display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.8rem;line-height:1;">${c.icon}</span>
        <div style="min-width:0;">
          <div style="font-size:0.88rem;font-weight:700;line-height:1.3;margin-bottom:4px;">${c.title}</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;">
            <span class="badge ${catColor}" style="font-size:0.6rem;">${c.catLabel}</span>
            ${c.mandatory ? `<span class="badge badge-red" style="font-size:0.6rem;">OBRIG.</span>` : ''}
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">
        <span style="font-size:0.65rem;font-weight:700;color:${statusColor};background:${statusColor}22;padding:2px 8px;border-radius:99px;border:1px solid ${statusColor}44;">${statusLabel}</span>
        <span style="font-size:0.65rem;color:var(--text-muted);">v${c.version}</span>
      </div>
    </div>

    <!-- Card Body -->
    <div style="padding:14px 18px;display:flex;flex-direction:column;gap:12px;">
      <p style="font-size:0.78rem;color:var(--text-muted);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${c.desc}</p>

      <!-- Completion -->
      <div>
        <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
          <span style="font-size:0.72rem;color:var(--text-muted);">${L.stat_completion}</span>
          <span style="font-size:0.78rem;font-weight:700;color:${c.rate>=90?'var(--brand-success)':c.rate>=70?'var(--text-primary)':'var(--brand-danger)'};">${c.rate}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill ${c.rate>=90?'green':c.rate>=70?'':'red'}" style="width:${c.rate}%;"></div>
        </div>
      </div>

      <!-- Meta -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:0.72rem;color:var(--text-muted);">⏱ ${c.duration}</span>
          <span style="font-size:0.72rem;color:var(--text-muted);">📦 SCORM ${c.scorm}</span>
          <span style="font-size:0.72rem;color:var(--text-muted);">✅ ${c.completions}</span>
        </div>
        <div style="display:flex;gap:2px;">${c.langs.map(l => `<span style="font-size:0.9rem;" title="${l}">${langFlags[l]||'🌐'}</span>`).join('')}</div>
      </div>
    </div>

    <!-- Card Footer -->
    <div style="padding:10px 18px;border-top:1px solid var(--bg-border);display:flex;gap:6px;justify-content:flex-end;">
      <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();showToast('Editando ${c.title}','info')">✏️</button>
      <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();showToast('Gerenciando versões','info')">📋</button>
      <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();showToast('Atribuindo treinamento','info')">${L.btn_assign_card}</button>
    </div>
  </div>`;
}

function openCourseDetail(id) {
  const c = COURSES.find(x => x.id === id);
  if (!c) return;
  const langFlags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷', ar: '🇸🇦' };
  document.getElementById('modal-course-detail-body').innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${c.icon} ${c.title}</h3>
      <span class="modal-close" onclick="hideModal('modal-course-detail')">✕</span>
    </div>
    <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:20px;">${c.desc}</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
      ${[
        ['Categoria', c.catLabel],['Duração', c.duration],
        ['SCORM', `SCORM ${c.scorm}`],['Versão', `v${c.version}`],
        ['Conclusões', c.completions],['Taxa', `${c.rate}%`],
        ['Nível', c.level],['Obrigatório', c.mandatory?'Sim':'Não'],
      ].map(([k,v]) => `<div style="background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);border-radius:var(--radius-sm);padding:10px 14px;">
        <div style="font-size:0.68rem;color:var(--text-muted);margin-bottom:3px;">${k}</div>
        <div style="font-size:0.88rem;font-weight:600;">${v}</div>
      </div>`).join('')}
    </div>
    <div style="margin-bottom:20px;">
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:8px;">Idiomas disponíveis</div>
      <div style="display:flex;gap:6px;">${c.langs.map(l => `<span style="display:flex;align-items:center;gap:4px;padding:4px 10px;border-radius:99px;border:1px solid var(--bg-border);font-size:0.75rem;">${langFlags[l]} ${l.toUpperCase()}</span>`).join('')}</div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="hideModal('modal-course-detail')">Fechar</button>
      <button class="btn btn-secondary" onclick="showToast('Baixando SCORM...','info')">⬇ Download SCORM</button>
      <button class="btn btn-primary" onclick="hideModal('modal-course-detail');showToast('Atribuindo treinamento','info')">Atribuir Treinamento</button>
    </div>`;
  showModal('modal-course-detail');
}

// ─────────────────────────────
// FILTERS
// ─────────────────────────────
window.filterChip = function(el, cat) {
  document.querySelectorAll('#lib-chips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('lib-filter-cat').value = cat;
  filterLibrary();
};

window.filterLibrary = function() {
  const search = (document.getElementById('lib-search')?.value || '').toLowerCase();
  const cat    = document.getElementById('lib-filter-cat')?.value || '';
  const lang   = document.getElementById('lib-filter-lang')?.value || '';
  const status = document.getElementById('lib-filter-status')?.value || '';
  const L = libLabels[APP.lang] || libLabels.pt;

  const filtered = COURSES.filter(c => {
    if (search && !c.title.toLowerCase().includes(search) && !c.desc.toLowerCase().includes(search)) return false;
    if (cat && c.category !== cat) return false;
    if (lang && !c.langs.includes(lang)) return false;
    if (status && c.status !== status) return false;
    return true;
  });

  const grid = document.getElementById('lib-grid');
  if (!grid) return;
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-icon">📭</div><div class="empty-title">Nenhum treinamento encontrado</div><div class="empty-sub">Tente ajustar os filtros.</div></div>`;
    return;
  }
  grid.innerHTML = filtered.map(c => courseCard(c, L)).join('');
  // Re-animate progress bars
  setTimeout(() => {
    grid.querySelectorAll('.progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.6s ease'; el.style.width = w; });
    });
  }, 50);
};

// ─────────────────────────────
// SCORM UPLOAD STEPS
// ─────────────────────────────
window.handleScormDrop = function(e) {
  e.preventDefault();
  document.getElementById('scorm-dropzone').style.borderColor = 'var(--brand-success)';
  document.getElementById('scorm-dropzone').innerHTML = `<div style="font-size:1.5rem;margin-bottom:8px;">✅</div><div style="font-weight:600;color:var(--brand-success);">Arquivo detectado</div><div style="font-size:0.78rem;color:var(--text-muted);">course_phishing_v2.zip · 14.2 MB</div>`;
};
window.handleScormFile = function(input) {
  if (input.files[0]) {
    document.getElementById('scorm-dropzone').innerHTML = `<div style="font-size:1.5rem;margin-bottom:8px;">✅</div><div style="font-weight:600;color:var(--brand-success);">Arquivo carregado</div><div style="font-size:0.78rem;color:var(--text-muted);">${input.files[0].name}</div>`;
  }
};
window.scormStep2 = function() {
  document.getElementById('modal-step-1').classList.add('hidden');
  document.getElementById('modal-step-2').classList.remove('hidden');
  document.getElementById('step-ind-1').classList.remove('active'); document.getElementById('step-ind-1').classList.add('done');
  document.getElementById('step-ind-2').classList.add('active');
};
window.scormStep1 = function() {
  document.getElementById('modal-step-2').classList.add('hidden');
  document.getElementById('modal-step-1').classList.remove('hidden');
  document.getElementById('step-ind-2').classList.remove('active');
  document.getElementById('step-ind-1').classList.remove('done'); document.getElementById('step-ind-1').classList.add('active');
};
window.scormStep3 = function() {
  document.getElementById('modal-step-2').classList.add('hidden');
  document.getElementById('modal-step-3').classList.remove('hidden');
  document.getElementById('step-ind-2').classList.remove('active'); document.getElementById('step-ind-2').classList.add('done');
  document.getElementById('step-ind-3').classList.add('active'); document.getElementById('step-ind-3').classList.add('done');
  showToast('Treinamento publicado com sucesso! 🎉', 'success');
};

// ─────────────────────────────
// I18N LABELS
// ─────────────────────────────
const libLabels = {
  pt: {
    title: 'Biblioteca de Treinamentos', sub: 'Conteúdos SCORM prontos para distribuição',
    btn_scorm: 'Upload SCORM', btn_add: 'Novo Treinamento',
    search_ph: 'Buscar treinamentos...', all_cats: 'Todas as categorias',
    all_langs: 'Todos os idiomas', all_status: 'Todos os status',
    all_countries: 'Todos os países',
    status_published: 'Publicado', status_draft: 'Rascunho', status_archived: 'Arquivado',
    chip_all: 'Todos',
    stat_total: 'Treinamentos', stat_published: 'Publicados', stat_versions: 'Versões linguísticas',
    stat_scorm: 'Compatibilidade', stat_langs: 'Idiomas nativos',
    stat_completion: 'Taxa de conclusão',
    modal_title: 'Publicar Treinamento SCORM',
    step1: 'Upload', step2: 'Configurar', step3: 'Publicar',
    drop_title: 'Arraste o pacote SCORM aqui', drop_sub: 'Suporte SCORM 1.2 e SCORM 2004 · .zip',
    field_title: 'Nome do Treinamento', field_title_ph: 'Ex: Phishing Awareness',
    field_cat: 'Categoria', field_lang: 'Idioma',
    field_country: 'País / Região', field_pass: 'Nota de Aprovação (%)',
    field_duration: 'Duração estimada', field_cert: 'Emitir Certificado',
    cert_yes: 'Sim, emitir certificado', cert_no: 'Não emitir',
    btn_cancel: 'Cancelar', btn_next: 'Próximo', btn_back: '← Voltar', btn_publish: 'Publicar',
    btn_close: 'Fechar', btn_assign_now: 'Atribuir Agora',
    scorm_valid: 'Pacote SCORM validado com sucesso',
    published_title: 'Treinamento Publicado!', published_sub: 'O treinamento já está disponível na biblioteca e pode ser atribuído.',
    btn_assign_card: 'Atribuir',
  },
  en: {
    title: 'Training Library', sub: 'SCORM content ready for distribution',
    btn_scorm: 'SCORM Upload', btn_add: 'New Training',
    search_ph: 'Search trainings...', all_cats: 'All categories',
    all_langs: 'All languages', all_status: 'All statuses',
    all_countries: 'All countries',
    status_published: 'Published', status_draft: 'Draft', status_archived: 'Archived',
    chip_all: 'All',
    stat_total: 'Trainings', stat_published: 'Published', stat_versions: 'Language versions',
    stat_scorm: 'Compatibility', stat_langs: 'Native languages',
    stat_completion: 'Completion rate',
    modal_title: 'Publish SCORM Training',
    step1: 'Upload', step2: 'Configure', step3: 'Publish',
    drop_title: 'Drag your SCORM package here', drop_sub: 'Supports SCORM 1.2 and 2004 · .zip',
    field_title: 'Training Name', field_title_ph: 'e.g. Phishing Awareness',
    field_cat: 'Category', field_lang: 'Language',
    field_country: 'Country / Region', field_pass: 'Pass Score (%)',
    field_duration: 'Estimated Duration', field_cert: 'Issue Certificate',
    cert_yes: 'Yes, issue certificate', cert_no: 'Do not issue',
    btn_cancel: 'Cancel', btn_next: 'Next', btn_back: '← Back', btn_publish: 'Publish',
    btn_close: 'Close', btn_assign_now: 'Assign Now',
    scorm_valid: 'SCORM package validated successfully',
    published_title: 'Training Published!', published_sub: 'The training is now available in the library and can be assigned.',
    btn_assign_card: 'Assign',
  },
  es: { title:'Biblioteca de Formaciones',sub:'Contenidos SCORM listos para distribución',btn_scorm:'Subir SCORM',btn_add:'Nueva Formación',search_ph:'Buscar formaciones...',all_cats:'Todas las categorías',all_langs:'Todos los idiomas',all_status:'Todos los estados',all_countries:'Todos los países',status_published:'Publicado',status_draft:'Borrador',status_archived:'Archivado',chip_all:'Todos',stat_total:'Formaciones',stat_published:'Publicados',stat_versions:'Versiones lingüísticas',stat_scorm:'Compatibilidad',stat_langs:'Idiomas nativos',stat_completion:'Tasa de finalización',modal_title:'Publicar Formación SCORM',step1:'Subir',step2:'Configurar',step3:'Publicar',drop_title:'Arrastra el paquete SCORM aquí',drop_sub:'Compatible con SCORM 1.2 y 2004 · .zip',field_title:'Nombre de la Formación',field_title_ph:'Ej: Phishing Awareness',field_cat:'Categoría',field_lang:'Idioma',field_country:'País / Región',field_pass:'Nota de Aprobación (%)',field_duration:'Duración estimada',field_cert:'Emitir Certificado',cert_yes:'Sí, emitir certificado',cert_no:'No emitir',btn_cancel:'Cancelar',btn_next:'Siguiente',btn_back:'← Volver',btn_publish:'Publicar',btn_close:'Cerrar',btn_assign_now:'Asignar Ahora',scorm_valid:'Paquete SCORM validado con éxito',published_title:'¡Formación Publicada!',published_sub:'La formación ya está disponible y puede asignarse.',btn_assign_card:'Asignar' },
  fr: { title:'Bibliothèque de Formations',sub:'Contenus SCORM prêts pour la distribution',btn_scorm:'Upload SCORM',btn_add:'Nouvelle Formation',search_ph:'Rechercher des formations...',all_cats:'Toutes les catégories',all_langs:'Toutes les langues',all_status:'Tous les statuts',all_countries:'Tous les pays',status_published:'Publié',status_draft:'Brouillon',status_archived:'Archivé',chip_all:'Tous',stat_total:'Formations',stat_published:'Publiées',stat_versions:'Versions linguistiques',stat_scorm:'Compatibilité',stat_langs:'Langues natives',stat_completion:'Taux de complétion',modal_title:'Publier une Formation SCORM',step1:'Upload',step2:'Configurer',step3:'Publier',drop_title:'Faites glisser le package SCORM ici',drop_sub:'Compatible SCORM 1.2 et 2004 · .zip',field_title:'Nom de la Formation',field_title_ph:'Ex: Phishing Awareness',field_cat:'Catégorie',field_lang:'Langue',field_country:'Pays / Région',field_pass:'Score de Réussite (%)',field_duration:'Durée estimée',field_cert:'Émettre un Certificat',cert_yes:'Oui, émettre un certificat',cert_no:'Ne pas émettre',btn_cancel:'Annuler',btn_next:'Suivant',btn_back:'← Retour',btn_publish:'Publier',btn_close:'Fermer',btn_assign_now:'Attribuer Maintenant',scorm_valid:'Package SCORM validé avec succès',published_title:'Formation Publiée !',published_sub:'La formation est disponible dans la bibliothèque.',btn_assign_card:'Attribuer' },
  ar: { title:'مكتبة التدريبات',sub:'محتوى SCORM جاهز للتوزيع',btn_scorm:'رفع SCORM',btn_add:'تدريب جديد',search_ph:'ابحث عن تدريبات...',all_cats:'جميع الفئات',all_langs:'جميع اللغات',all_status:'جميع الحالات',all_countries:'جميع الدول',status_published:'منشور',status_draft:'مسودة',status_archived:'مؤرشف',chip_all:'الكل',stat_total:'تدريبات',stat_published:'منشور',stat_versions:'إصدارات لغوية',stat_scorm:'التوافق',stat_langs:'اللغات الأصلية',stat_completion:'معدل الإتمام',modal_title:'نشر تدريب SCORM',step1:'رفع',step2:'إعداد',step3:'نشر',drop_title:'اسحب حزمة SCORM هنا',drop_sub:'يدعم SCORM 1.2 و 2004 · .zip',field_title:'اسم التدريب',field_title_ph:'مثال: التوعية بالتصيد',field_cat:'الفئة',field_lang:'اللغة',field_country:'الدولة / المنطقة',field_pass:'درجة الاجتياز (%)',field_duration:'المدة المقدرة',field_cert:'إصدار شهادة',cert_yes:'نعم، إصدار شهادة',cert_no:'لا تصدر',btn_cancel:'إلغاء',btn_next:'التالي',btn_back:'← رجوع',btn_publish:'نشر',btn_close:'إغلاق',btn_assign_now:'تعيين الآن',scorm_valid:'تم التحقق من حزمة SCORM بنجاح',published_title:'تم نشر التدريب!',published_sub:'التدريب متاح الآن في المكتبة.',btn_assign_card:'تعيين' },
};

window.initPage_library = function () {
  setTimeout(() => {
    document.querySelectorAll('#lib-grid .progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.6s ease'; el.style.width = w; });
    });
  }, 100);
};
