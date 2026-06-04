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
  { id: 1, title: 'Phishing & Engenharia Social', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en','es','fr'], duration: '45 min', completions: 312, rate: 94, status: 'published', level: 'Essencial', mandatory: true, version: '2.1', icon: '🎣', desc: 'Identifique e evite ataques de phishing e técnicas de engenharia social no ambiente corporativo.' },
  { id: 2, title: 'Senhas Seguras e MFA', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en','es'], duration: '30 min', completions: 251, rate: 96, status: 'published', level: 'Essencial', mandatory: true, version: '1.3', icon: '🔑', desc: 'Criação de senhas fortes, gestão de credenciais e autenticação multifator.' },
  { id: 3, title: 'Home Office Seguro', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en'], duration: '40 min', completions: 228, rate: 88, status: 'published', level: 'Intermediário', mandatory: false, version: '1.0', icon: '🏠', desc: 'Boas práticas de segurança para trabalho remoto, VPN e Wi-Fi doméstico.' },
  { id: 4, title: 'Uso Seguro de IA Generativa', category: 'ia', catLabel: 'IA', langs: ['pt','en','es','fr'], duration: '35 min', completions: 145, rate: 91, status: 'published', level: 'Intermediário', mandatory: false, version: '1.1', icon: '🤖', desc: 'Como utilizar ferramentas de IA generativa com segurança, privacidade e responsabilidade.' },
  { id: 5, title: 'Cloud Security Awareness', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en'], duration: '50 min', completions: 178, rate: 85, status: 'published', level: 'Avançado', mandatory: false, version: '1.0', icon: '☁️', desc: 'Segurança em ambientes cloud: responsabilidades, controles e boas práticas.' },
  { id: 6, title: 'Resposta a Incidentes', category: 'cybersecurity', catLabel: 'Cybersecurity', langs: ['pt','en','es'], duration: '60 min', completions: 112, rate: 82, status: 'draft', level: 'Avançado', mandatory: false, version: '0.9', icon: '🚨', desc: 'Como identificar, reportar e escalonar incidentes de segurança.' },

  // COMPLIANCE
  { id: 7, title: 'LGPD na Prática', category: 'privacidade', catLabel: 'Privacidade', langs: ['pt'], duration: '60 min', completions: 287, rate: 91, status: 'published', level: 'Essencial', mandatory: true, version: '3.0', icon: '🔒', desc: 'Lei Geral de Proteção de Dados: princípios, direitos dos titulares e obrigações corporativas.' },
  { id: 8, title: 'GDPR Fundamentos', category: 'privacidade', catLabel: 'Privacidade', langs: ['en','fr','es'], duration: '55 min', completions: 198, rate: 89, status: 'published', level: 'Essencial', mandatory: true, version: '2.2', icon: '🇪🇺', desc: 'General Data Protection Regulation: compliance requirements and employee obligations.' },
  { id: 9, title: 'Código de Ética Empresarial', category: 'etica', catLabel: 'Ética', langs: ['pt','en','es','fr'], duration: '45 min', completions: 274, rate: 89, status: 'published', level: 'Essencial', mandatory: true, version: '2.0', icon: '⚖️', desc: 'Fundamentos de conduta ética, tomada de decisão e responsabilidade corporativa.' },
  { id: 10, title: 'Anticorrupção e Antissuborno', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en','es'], duration: '50 min', completions: 203, rate: 93, status: 'published', level: 'Essencial', mandatory: true, version: '1.5', icon: '🚫', desc: 'Lei Anticorrupção, FCPA, UK Bribery Act: prevenção e conformidade.' },
  { id: 11, title: 'Canal de Denúncias', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en','es','fr'], duration: '25 min', completions: 189, rate: 95, status: 'published', level: 'Essencial', mandatory: true, version: '1.2', icon: '📢', desc: 'Como usar o canal de denúncias, proteção ao denunciante e não retaliação.' },
  { id: 12, title: 'Assédio Moral e Sexual', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en','es','fr'], duration: '40 min', completions: 265, rate: 92, status: 'published', level: 'Essencial', mandatory: true, version: '2.1', icon: '🤝', desc: 'Identificação, prevenção e reporte de situações de assédio no ambiente de trabalho.' },
  { id: 13, title: 'Lavagem de Dinheiro (AML)', category: 'compliance', catLabel: 'Compliance', langs: ['pt','en'], duration: '55 min', completions: 134, rate: 87, status: 'published', level: 'Intermediário', mandatory: false, version: '1.0', icon: '💸', desc: 'Identificação de sinais de alerta e prevenção à lavagem de dinheiro.' },
  { id: 14, title: 'ESG e Sustentabilidade', category: 'governanca', catLabel: 'Governança', langs: ['pt','en','es'], duration: '35 min', completions: 98, rate: 88, status: 'draft', level: 'Intermediário', mandatory: false, version: '0.8', icon: '🌱', desc: 'Responsabilidade ambiental, social e governança: papel do colaborador.' },
];

function courseCard(c, L) {
  const statusColor = c.status === 'published' ? 'var(--brand-success)' : c.status === 'draft' ? 'var(--brand-warning)' : 'var(--text-muted)';
  const statusLabel = c.status === 'published' ? L.status_published : c.status === 'draft' ? L.status_draft : L.status_archived;
  const langFlags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷' };
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
  const langFlags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷' };
  document.getElementById('modal-course-detail-body').innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${c.icon} ${c.title}</h3>
      <span class="modal-close" onclick="hideModal('modal-course-detail')">✕</span>
    </div>
    <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:20px;">${c.desc}</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
      ${[
        ['Categoria', c.catLabel],['Duração', c.duration],
        ['Versão', `v${c.version}`],['Nível', c.level],
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
      <button class="btn btn-secondary" onclick="showToast('Compartilhando link...','success')">🔗 Compartilhar</button>
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
// I18N LABELS
// ─────────────────────────────
const libLabels = {
  pt: { title:'Biblioteca de Treinamentos', sub:'Conteúdos de treinamento prontos para distribuição', btn_add:'Novo Treinamento', search_ph:'Buscar treinamentos...', all_cats:'Todas as categorias', all_langs:'Todos os idiomas', all_status:'Todos os status', status_published:'Publicado', status_draft:'Rascunho', status_archived:'Arquivado', chip_all:'Todos', stat_total:'Treinamentos', stat_published:'Publicados', stat_versions:'Versões linguísticas', stat_langs:'Idiomas nativos', stat_completion:'Taxa de conclusão', btn_cancel:'Cancelar', btn_assign_card:'Atribuir' },
  en: { title:'Training Library', sub:'Training content ready for distribution', btn_add:'New Training', search_ph:'Search trainings...', all_cats:'All categories', all_langs:'All languages', all_status:'All statuses', status_published:'Published', status_draft:'Draft', status_archived:'Archived', chip_all:'All', stat_total:'Trainings', stat_published:'Published', stat_versions:'Language versions', stat_langs:'Native languages', stat_completion:'Completion rate', btn_cancel:'Cancel', btn_assign_card:'Assign' },
  es: { title:'Biblioteca de Formaciones', sub:'Contenidos de formación listos para distribución', btn_add:'Nueva Formación', search_ph:'Buscar formaciones...', all_cats:'Todas las categorías', all_langs:'Todos los idiomas', all_status:'Todos los estados', status_published:'Publicado', status_draft:'Borrador', status_archived:'Archivado', chip_all:'Todos', stat_total:'Formaciones', stat_published:'Publicados', stat_versions:'Versiones lingüísticas', stat_langs:'Idiomas nativos', stat_completion:'Tasa de finalización', btn_cancel:'Cancelar', btn_assign_card:'Asignar' },
  fr: { title:'Bibliothèque de Formations', sub:'Contenus de formation prêts pour la distribution', btn_add:'Nouvelle Formation', search_ph:'Rechercher des formations...', all_cats:'Toutes les catégories', all_langs:'Toutes les langues', all_status:'Tous les statuts', status_published:'Publié', status_draft:'Brouillon', status_archived:'Archivé', chip_all:'Tous', stat_total:'Formations', stat_published:'Publiées', stat_versions:'Versions linguistiques', stat_langs:'Langues natives', stat_completion:'Taux de complétion', btn_cancel:'Annuler', btn_assign_card:'Attribuer' },
  ar: { title:'مكتبة التدريبات', sub:'محتوى التدريب جاهز للتوزيع', btn_add:'تدريب جديد', search_ph:'ابحث عن تدريبات...', all_cats:'جميع الفئات', all_langs:'جميع اللغات', all_status:'جميع الحالات', status_published:'منشور', status_draft:'مسودة', status_archived:'مؤرشف', chip_all:'الكل', stat_total:'تدريبات', stat_published:'منشور', stat_versions:'إصدارات لغوية', stat_langs:'اللغات الأصلية', stat_completion:'معدل الإتمام', btn_cancel:'إلغاء', btn_assign_card:'تعيين' },
};

window.initPage_library = function () {
  setTimeout(() => {
    document.querySelectorAll('#lib-grid .progress-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition = 'width 0.6s ease'; el.style.width = w; });
    });
  }, 100);
};
