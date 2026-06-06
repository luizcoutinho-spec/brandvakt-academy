// ══════════════════════════════════════════════════════════════
//  🧑‍💼 DEMO STATE ENGINE — Admin Local Activity Tracker
//  Tracks training completions, phishing interactions, risk score
//  All pages read from this object to show real-time user data.
// ══════════════════════════════════════════════════════════════

window.DEMO_STATE = {
  user: {
    id:      'u-demo-001',
    name:    'Admin Local DEMO',
    email:   'admin@demo-sa.com',
    dept:    'Diretoria',
    deptId:  'dir',
    company: 'DEMO SA',
    role:    'Super Admin',
    avatar:  'AL',
    country: '🇧🇷',
  },

  // Populated when quizzes are completed via the course player
  completions: [],
  // Populated when phishing sim buttons are clicked
  phishing: [],

  // ── Risk Score (0–100, lower = safer) ────────────────────────
  getRiskScore() {
    let score = 72;
    this.completions.forEach(c => { score += c.passed ? -12 : -3; });
    this.phishing.forEach(p => {
      if (p.action === 'clicked')  score += 18;
      if (p.action === 'reported') score -= 8;
    });
    return Math.max(5, Math.min(99, Math.round(score)));
  },

  getRiskMeta() {
    const s = this.getRiskScore();
    if (s <= 30) return { label:'Baixo Risco', color:'#22c55e', bg:'rgba(34,197,94,0.12)',  cls:'low'  };
    if (s <= 60) return { label:'Moderado',    color:'#f59e0b', bg:'rgba(245,158,11,0.12)', cls:'med'  };
    return             { label:'Alto Risco',   color:'#ef4444', bg:'rgba(239,68,68,0.12)',  cls:'high' };
  },

  // ── Called by course player on quiz result ────────────────────
  completeTraining(courseId, courseName, score, passed) {
    const certId = passed
      ? 'CERT-' + Math.random().toString(36).substr(2,8).toUpperCase()
      : null;
    const entry = {
      courseId:   String(courseId),
      courseName: courseName || 'Treinamento',
      score, passed, certId,
      date:    new Date().toLocaleDateString('pt-BR'),
      dateISO: new Date().toISOString().split('T')[0],
    };
    const idx = this.completions.findIndex(c => c.courseId === String(courseId));
    if (idx >= 0) this.completions[idx] = entry;
    else this.completions.push(entry);
  },

  // ── Called by phishing sim buttons ───────────────────────────
  simulatePhishing(campaignId, campaignName, action) {
    this.phishing.push({
      campaignId:   String(campaignId),
      campaignName: campaignName || 'Campanha',
      action,   // 'clicked' | 'reported'
      date:     new Date().toLocaleString('pt-BR'),
      dateISO:  new Date().toISOString(),
    });
  },

  // ── Helpers ───────────────────────────────────────────────────
  getCompletionPct() {
    // How many of the 10 known courses are passed
    const passed = this.completions.filter(c => c.passed).length;
    return Math.round((passed / 10) * 100);
  },

  getCertCount() {
    return this.completions.filter(c => c.passed && c.certId).length;
  },

  getLastActivity() {
    if (!this.completions.length && !this.phishing.length) return 'Nenhuma atividade ainda';
    const all = [
      ...this.completions.map(c => ({ date: c.dateISO, label: '✅ ' + c.courseName })),
      ...this.phishing.map(p => ({ date: p.dateISO, label: p.action === 'clicked' ? '🎣 ' + p.campaignName : '🛡 Reportou: ' + p.campaignName })),
    ].sort((a, b) => b.date.localeCompare(a.date));
    return all[0]?.label || '—';
  },

  // ── HRM user entry (live, for injection into HRM_DATA.users) ──
  asHRMUser() {
    const s = this.getRiskScore();
    const trainScore = Math.max(0, 95 - s);
    return {
      id: 999,
      name:        this.user.name,
      email:       this.user.email,
      dept:        this.user.dept,
      deptId:      this.user.deptId,
      avatar:      this.user.avatar,
      score:       s,
      phishing:    this.phishing.filter(p => p.action === 'clicked').length > 0 ? 55 : 10,
      training:    trainScore,
      password:    25,
      access:      20,
      inactivity:  0,
      certs:       this.getCertCount() > 0 ? 'valid' : 'expired',
      lastSeen:    0,
      cliques:     this.phishing.filter(p => p.action === 'clicked').length,
      campanhas:   this.phishing.length,
      reportou:    this.phishing.filter(p => p.action === 'reported').length,
      treinamentos:this.completions.filter(c => c.passed).length,
      planos:      0,
      trend:       this.completions.length > 0 ? 'up' : 'stable',
      isDemo:      true,
    };
  },
};

// ── Floating "Meu Progresso" button (shown on all pages) ──────
(function() {
  function createDemoBtn() {
    if (document.getElementById('demo-fab')) return;
    const btn = document.createElement('button');
    btn.id = 'demo-fab';
    btn.innerHTML = '👤 Meu Perfil';
    btn.style.cssText = [
      'position:fixed;bottom:24px;right:24px;z-index:8888',
      'padding:10px 18px;border-radius:99px',
      'background:linear-gradient(135deg,#00d4ff,#8b5cf6)',
      'color:#000;font-weight:700;font-size:13px',
      'border:none;cursor:pointer;font-family:inherit',
      'box-shadow:0 4px 20px rgba(0,180,216,.4)',
      'transition:all .2s',
    ].join(';');
    btn.onmouseenter = () => btn.style.transform = 'translateY(-2px)';
    btn.onmouseleave = () => btn.style.transform = '';
    btn.onclick = () => demoShowProfile();
    document.body.appendChild(btn);
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDemoBtn);
  } else {
    setTimeout(createDemoBtn, 800);
  }
})();

window.demoShowProfile = function() {
  const u = DEMO_STATE;
  const rm = u.getRiskMeta();
  const score = u.getRiskScore();
  const certs = u.getCertCount();
  const compPct = u.getCompletionPct();

  // Remove old if exists
  const old = document.getElementById('demo-profile-ov');
  if (old) { old.remove(); return; }

  const ov = document.createElement('div');
  ov.id = 'demo-profile-ov';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px';
  ov.onclick = e => { if (e.target === ov) ov.remove(); };

  const completionRows = u.completions.length
    ? u.completions.map(c => `
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;background:rgba(255,255,255,.03);margin-bottom:6px;">
          <span style="font-size:1.1rem">${c.passed ? '✅' : '❌'}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:.83rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.courseName}</div>
            <div style="font-size:.68rem;color:#6b7280">${c.date}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:.86rem;font-weight:800;color:${c.passed ? '#22c55e' : '#ef4444'}">${c.score}%</div>
            ${c.certId ? `<div style="font-size:.65rem;color:#f59e0b">${c.certId}</div>` : ''}
          </div>
        </div>`).join('')
    : '<div style="text-align:center;color:#6b7280;font-size:.84rem;padding:16px">Nenhum treinamento concluído ainda.<br><span style="font-size:.76rem">Vá à Biblioteca e realize um curso!</span></div>';

  const phishingRows = u.phishing.length
    ? u.phishing.slice(-4).reverse().map(p => `
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;background:rgba(255,255,255,.03);margin-bottom:6px;">
          <span style="font-size:1.1rem">${p.action === 'clicked' ? '🎣' : '🛡'}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:.83rem;font-weight:600">${p.campaignName}</div>
            <div style="font-size:.68rem;color:#6b7280">${p.date}</div>
          </div>
          <span style="font-size:.72rem;font-weight:700;padding:3px 9px;border-radius:99px;${p.action==='clicked'?'background:rgba(239,68,68,.12);color:#ef4444':'background:rgba(34,197,94,.12);color:#22c55e'}">
            ${p.action === 'clicked' ? 'Clicou' : 'Reportou'}
          </span>
        </div>`).join('')
    : '<div style="text-align:center;color:#6b7280;font-size:.84rem;padding:12px">Nenhuma interação de phishing ainda.<br><span style="font-size:.76rem">Vá a Ferramentas → Phishing para simular!</span></div>';

  ov.innerHTML = `
    <div style="background:#14141e;border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:0;width:100%;max-width:520px;max-height:88vh;overflow-y:auto;">
      <!-- Header -->
      <div style="padding:20px 24px 16px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:.9rem;font-weight:800;color:#000;flex-shrink:0">AL</div>
          <div>
            <div style="font-size:1rem;font-weight:800">Admin Local DEMO</div>
            <div style="font-size:.72rem;color:#6b7280">admin@demo-sa.com · Diretoria · DEMO SA</div>
          </div>
        </div>
        <button onclick="document.getElementById('demo-profile-ov').remove()"
          style="padding:5px 11px;border-radius:7px;border:1px solid rgba(255,255,255,.12);background:transparent;color:#94a3b8;cursor:pointer;font-size:12px">✕</button>
      </div>

      <!-- KPIs -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.06)">
        ${[
          ['🏆', certs, 'Certificados', '#f59e0b'],
          ['📚', u.completions.filter(c=>c.passed).length, 'Concluídos', '#22c55e'],
          ['📊', compPct+'%', 'Conclusão', '#00d4ff'],
          ['🛡', score, 'Risk Score', rm.color],
        ].map(([ic,v,l,c]) => `
          <div style="background:#14141e;padding:14px;text-align:center">
            <div style="font-size:.9rem">${ic}</div>
            <div style="font-size:1.3rem;font-weight:900;color:${c};margin:2px 0">${v}</div>
            <div style="font-size:.62rem;color:#6b7280;text-transform:uppercase;letter-spacing:.07em">${l}</div>
          </div>`).join('')}
      </div>

      <!-- Risk bar -->
      <div style="padding:16px 24px 0">
        <div style="display:flex;justify-content:space-between;font-size:.72rem;color:#6b7280;margin-bottom:5px">
          <span>Human Risk Score</span>
          <span style="font-weight:800;color:${rm.color}">${score}/100 — ${rm.label}</span>
        </div>
        <div style="height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden;margin-bottom:4px">
          <div style="height:100%;width:${score}%;background:${rm.color};border-radius:3px;transition:width .8s"></div>
        </div>
        <div style="font-size:.68rem;color:#6b7280">Score diminui com treinamentos concluídos · aumenta com cliques em phishing</div>
      </div>

      <!-- Training completions -->
      <div style="padding:16px 24px 0">
        <div style="font-size:.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px">📚 Histórico de Treinamentos (${u.completions.length})</div>
        ${completionRows}
      </div>

      <!-- Phishing -->
      <div style="padding:16px 24px 20px">
        <div style="font-size:.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px">🎣 Histórico de Phishing (${u.phishing.length})</div>
        ${phishingRows}
      </div>
    </div>`;
  document.body.appendChild(ov);
};
