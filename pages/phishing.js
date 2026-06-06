// ══════════════════════════════════════════════════════════════
//  🎣 PHISHING AWARENESS & SIMULATION PLATFORM
//  Brandvakt Academy — Enterprise Module
// ══════════════════════════════════════════════════════════════

// ── CSS Injection ─────────────────────────────────────────────
(function injectPhishingCSS() {
  if (document.getElementById('phishing-css')) return;
  const s = document.createElement('style');
  s.id = 'phishing-css';
  s.textContent = `
    /* ── Phishing Module Design System ── */
    :root {
      --ph-bg:       #0a0a0f;
      --ph-card:     #12121a;
      --ph-card2:    #1a1a26;
      --ph-border:   rgba(255,255,255,0.07);
      --ph-teal:     #00d4ff;
      --ph-purple:   #7c3aed;
      --ph-red:      #ef4444;
      --ph-green:    #22c55e;
      --ph-amber:    #f59e0b;
      --ph-muted:    #6b7280;
      --ph-text:     #f1f5f9;
      --ph-text2:    #94a3b8;
    }

    #phishing-module { font-family: inherit; color: var(--ph-text); }

    /* ── Tab Bar ── */
    .ph-tabs {
      display: flex; gap: 4px;
      background: var(--ph-card); border: 1px solid var(--ph-border);
      border-radius: 14px; padding: 5px; margin-bottom: 24px;
      overflow-x: auto;
    }
    .ph-tab {
      display: flex; align-items: center; gap: 7px;
      padding: 9px 18px; border-radius: 10px;
      font-size: 0.84rem; font-weight: 600; cursor: pointer;
      color: var(--ph-text2); background: transparent; border: none;
      white-space: nowrap; transition: all 0.2s;
    }
    .ph-tab:hover { color: var(--ph-text); background: rgba(255,255,255,0.04); }
    .ph-tab.active {
      color: #fff; background: var(--ph-teal);
      box-shadow: 0 4px 16px rgba(0,212,255,0.25);
    }

    /* ── KPI Cards ── */
    .ph-kpi-grid {
      display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      gap: 16px; margin-bottom: 24px;
    }
    .ph-kpi {
      background: var(--ph-card); border: 1px solid var(--ph-border);
      border-radius: 16px; padding: 20px; position: relative; overflow: hidden;
      transition: all 0.25s;
    }
    .ph-kpi:hover { border-color: rgba(255,255,255,0.14); transform: translateY(-2px); }
    .ph-kpi-icon {
      width: 40px; height: 40px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; margin-bottom: 14px;
    }
    .ph-kpi-val { font-size: 1.9rem; font-weight: 800; letter-spacing: -0.04em; line-height: 1; }
    .ph-kpi-label { font-size: 0.75rem; color: var(--ph-text2); margin-top: 5px; text-transform: uppercase; letter-spacing: 0.08em; }
    .ph-kpi-trend { font-size: 0.72rem; margin-top: 6px; display: flex; align-items: center; gap: 4px; }

    /* ── Charts ── */
    .ph-charts-grid {
      display: grid; grid-template-columns: 1fr 380px;
      gap: 16px; margin-bottom: 24px;
    }
    .ph-chart-card {
      background: var(--ph-card); border: 1px solid var(--ph-border);
      border-radius: 16px; padding: 22px;
      /* No transition — prevents ResizeObserver from firing on hover */
      transition: none !important;
    }
    .ph-chart-title { font-size: 0.88rem; font-weight: 700; margin-bottom: 16px; color: var(--ph-text2); text-transform: uppercase; letter-spacing: 0.06em; }

    /* Canvas wrapper: fixed height + contain:strict locks chart position */
    .ph-canvas-wrap {
      position: relative;
      height: 200px;
      overflow: hidden;
      /* CSS containment: nothing inside affects outside layout */
      contain: layout style;
      /* Hardware-accelerate: avoids layout reflow triggering ResizeObserver */
      transform: translateZ(0);
      will-change: auto;
    }
    .ph-canvas-wrap canvas {
      position: absolute !important;
      top: 0 !important; left: 0 !important;
      width: 100% !important; height: 100% !important;
    }

    /* ── Table ── */
    .ph-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
    .ph-table th {
      text-align: left; padding: 10px 14px;
      font-size: 0.70rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--ph-muted);
      border-bottom: 1px solid var(--ph-border);
    }
    .ph-table td { padding: 13px 14px; border-bottom: 1px solid rgba(255,255,255,0.03); vertical-align: middle; }
    .ph-table tr:last-child td { border-bottom: none; }
    .ph-table tr:hover td { background: rgba(255,255,255,0.02); }

    /* ── Badges ── */
    .ph-badge {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 3px 10px; border-radius: 99px;
      font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    }
    .ph-badge-active   { background: rgba(0,212,255,0.12);  color: var(--ph-teal); }
    .ph-badge-done     { background: rgba(34,197,94,0.12);  color: var(--ph-green); }
    .ph-badge-draft    { background: rgba(107,114,128,0.15); color: var(--ph-muted); }
    .ph-badge-risk-low { background: rgba(34,197,94,0.12);  color: var(--ph-green); }
    .ph-badge-risk-med { background: rgba(245,158,11,0.12); color: var(--ph-amber); }
    .ph-badge-risk-hi  { background: rgba(239,68,68,0.12);  color: var(--ph-red); }

    /* ── Difficulty badges ── */
    .ph-diff-easy { background: rgba(34,197,94,0.12);  color: var(--ph-green); padding: 2px 8px; border-radius: 6px; font-size: 0.68rem; font-weight: 700; }
    .ph-diff-med  { background: rgba(245,158,11,0.12); color: var(--ph-amber); padding: 2px 8px; border-radius: 6px; font-size: 0.68rem; font-weight: 700; }
    .ph-diff-hard { background: rgba(239,68,68,0.12);  color: var(--ph-red);   padding: 2px 8px; border-radius: 6px; font-size: 0.68rem; font-weight: 700; }

    /* ── Buttons ── */
    .ph-btn {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 10px 20px; border-radius: 10px; border: none;
      font-size: 0.84rem; font-weight: 600; cursor: pointer;
      transition: all 0.2s; font-family: inherit;
    }
    .ph-btn-primary { background: var(--ph-teal); color: #000; box-shadow: 0 4px 16px rgba(0,212,255,0.25); }
    .ph-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(0,212,255,0.35); }
    .ph-btn-ghost { background: rgba(255,255,255,0.06); color: var(--ph-text2); border: 1px solid var(--ph-border); }
    .ph-btn-ghost:hover { background: rgba(255,255,255,0.10); color: var(--ph-text); }
    .ph-btn-danger { background: rgba(239,68,68,0.15); color: var(--ph-red); border: 1px solid rgba(239,68,68,0.25); }
    .ph-btn-sm { padding: 6px 14px; font-size: 0.76rem; border-radius: 8px; }

    /* ── Modal ── */
    .ph-modal-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.75);
      backdrop-filter: blur(6px); z-index: 9000;
      display: flex; align-items: center; justify-content: center; padding: 20px;
    }
    .ph-modal {
      background: #14141e; border: 1px solid rgba(255,255,255,0.10);
      border-radius: 20px; padding: 32px; width: 100%; max-width: 680px;
      max-height: 88vh; overflow-y: auto;
      box-shadow: 0 24px 80px rgba(0,0,0,0.6);
      animation: phModalIn 0.25s ease;
    }
    .ph-modal-lg { max-width: 880px; }
    .ph-modal-xl { max-width: 1000px; }
    @keyframes phModalIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .ph-modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .ph-modal-title { font-size: 1.1rem; font-weight: 800; }
    .ph-modal-close { background: none; border: none; color: var(--ph-muted); font-size: 1.3rem; cursor: pointer; transition: color 0.15s; }
    .ph-modal-close:hover { color: var(--ph-text); }

    /* ── Stepper ── */
    .ph-stepper { display: flex; gap: 0; margin-bottom: 28px; }
    .ph-step { flex: 1; display: flex; align-items: center; gap: 10px; }
    .ph-step-num {
      width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem; font-weight: 700;
      border: 1px solid rgba(255,255,255,0.15); color: var(--ph-muted);
      transition: all 0.25s;
    }
    .ph-step.active .ph-step-num { background: var(--ph-teal); border-color: var(--ph-teal); color: #000; }
    .ph-step.done .ph-step-num   { background: var(--ph-green); border-color: var(--ph-green); color: #000; }
    .ph-step-label { font-size: 0.78rem; color: var(--ph-muted); }
    .ph-step.active .ph-step-label { color: var(--ph-text); font-weight: 600; }
    .ph-step-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); margin: 0 8px; }

    /* ── Input ── */
    .ph-input-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
    .ph-label { font-size: 0.72rem; font-weight: 700; color: var(--ph-text2); text-transform: uppercase; letter-spacing: 0.07em; }
    .ph-input, .ph-select, .ph-textarea {
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.10);
      border-radius: 10px; padding: 11px 14px; color: var(--ph-text);
      font-size: 0.88rem; font-family: inherit; outline: none;
      transition: border-color 0.2s, box-shadow 0.2s; width: 100%;
    }
    .ph-input::placeholder, .ph-textarea::placeholder { color: var(--ph-muted); }
    .ph-input:focus, .ph-select:focus, .ph-textarea:focus {
      border-color: var(--ph-teal); box-shadow: 0 0 0 3px rgba(0,212,255,0.10);
    }
    .ph-textarea { resize: vertical; min-height: 80px; }
    .ph-select option { background: #1a1a26; }

    /* ── Grid ── */
    .ph-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .ph-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }

    /* ── Template Card ── */
    .ph-template-card {
      background: var(--ph-card); border: 1px solid var(--ph-border);
      border-radius: 16px; overflow: hidden; cursor: pointer;
      transition: all 0.22s;
    }
    .ph-template-card:hover { border-color: rgba(0,212,255,0.35); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
    .ph-template-card.selected { border-color: var(--ph-teal); box-shadow: 0 0 0 2px rgba(0,212,255,0.25); }
    .ph-email-preview {
      background: #0d1117; padding: 14px; font-size: 0.72rem; line-height: 1.6;
      border-bottom: 1px solid var(--ph-border); height: 110px; overflow: hidden;
      position: relative;
    }
    .ph-email-preview::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 40px;
      background: linear-gradient(transparent, #0d1117);
    }
    .ph-email-sender { color: #60a5fa; font-weight: 600; }
    .ph-email-subject { color: #f8f8f2; font-weight: 700; margin: 4px 0; }
    .ph-email-body { color: #94a3b8; }
    .ph-template-info { padding: 14px; }
    .ph-template-name { font-weight: 700; font-size: 0.88rem; margin-bottom: 8px; }
    .ph-template-meta { display: flex; gap: 7px; flex-wrap: wrap; }

    /* ── Filter Chips ── */
    .ph-filter-chips { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 20px; }
    .ph-chip {
      padding: 6px 14px; border-radius: 99px; font-size: 0.76rem; font-weight: 600;
      border: 1px solid rgba(255,255,255,0.10); background: transparent; color: var(--ph-text2);
      cursor: pointer; transition: all 0.15s;
    }
    .ph-chip:hover { border-color: rgba(255,255,255,0.22); color: var(--ph-text); }
    .ph-chip.active { background: rgba(0,212,255,0.12); border-color: rgba(0,212,255,0.35); color: var(--ph-teal); }

    /* ── Campaign Card ── */
    .ph-campaign-card {
      background: var(--ph-card); border: 1px solid var(--ph-border);
      border-radius: 16px; padding: 20px; margin-bottom: 12px;
      transition: all 0.22s; cursor: pointer;
    }
    .ph-campaign-card:hover { border-color: rgba(255,255,255,0.12); }
    .ph-campaign-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .ph-campaign-meta { display: flex; gap: 20px; margin-top: 14px; font-size: 0.82rem; color: var(--ph-text2); }
    .ph-campaign-metric { display: flex; flex-direction: column; gap: 2px; }
    .ph-campaign-metric-val { font-size: 1.1rem; font-weight: 800; color: var(--ph-text); }
    .ph-progress-bar { height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; margin-top: 12px; }
    .ph-progress-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg, var(--ph-teal), var(--ph-purple)); transition: width 0.6s ease; }

    /* ── Alvos Layout ── */
    .ph-alvos-grid { display: grid; grid-template-columns: 280px 1fr; gap: 16px; }
    .ph-group-list { background: var(--ph-card); border: 1px solid var(--ph-border); border-radius: 16px; padding: 16px; }
    .ph-group-item {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 12px; border-radius: 10px; cursor: pointer;
      transition: all 0.15s; margin-bottom: 4px;
    }
    .ph-group-item:hover { background: rgba(255,255,255,0.04); }
    .ph-group-item.active { background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.20); }
    .ph-group-icon { font-size: 1.1rem; }
    .ph-group-name { font-size: 0.85rem; font-weight: 600; flex: 1; }
    .ph-group-count { font-size: 0.72rem; color: var(--ph-muted); }

    /* ── Funnel ── */
    .ph-funnel { display: flex; flex-direction: column; gap: 10px; }
    .ph-funnel-step { display: flex; align-items: center; gap: 14px; }
    .ph-funnel-bar-wrap { flex: 1; height: 36px; background: rgba(255,255,255,0.04); border-radius: 8px; overflow: hidden; position: relative; }
    .ph-funnel-bar { height: 100%; border-radius: 8px; display: flex; align-items: center; padding-left: 12px; font-size: 0.78rem; font-weight: 700; transition: width 1s ease; }
    .ph-funnel-label { width: 100px; font-size: 0.78rem; color: var(--ph-text2); text-align: right; flex-shrink: 0; }
    .ph-funnel-pct { font-size: 0.82rem; font-weight: 700; width: 52px; text-align: right; flex-shrink: 0; }

    /* ── Human Risk Score ── */
    .ph-risk-gauge {
      width: 90px; height: 90px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; font-weight: 800; font-size: 1.3rem;
      border: 3px solid; flex-shrink: 0;
    }
    .ph-risk-low  { border-color: var(--ph-green); color: var(--ph-green); }
    .ph-risk-med  { border-color: var(--ph-amber); color: var(--ph-amber); }
    .ph-risk-high { border-color: var(--ph-red);   color: var(--ph-red);   }

    /* ── Section header ── */
    .ph-section-header {
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px; margin-bottom: 20px;
    }
    .ph-section-title { font-size: 1.1rem; font-weight: 800; letter-spacing: -0.02em; }

    /* ── Toggle ── */
    .ph-toggle-wrap { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
    .ph-toggle {
      position: relative; width: 42px; height: 24px;
      background: rgba(255,255,255,0.08); border-radius: 99px; cursor: pointer;
      transition: background 0.2s; border: none;
    }
    .ph-toggle.on { background: var(--ph-teal); }
    .ph-toggle::after {
      content: ''; position: absolute; left: 3px; top: 3px;
      width: 18px; height: 18px; background: white; border-radius: 50%;
      transition: transform 0.2s;
    }
    .ph-toggle.on::after { transform: translateX(18px); }
    .ph-toggle-label { font-size: 0.84rem; color: var(--ph-text2); cursor: pointer; }

    /* ── Responsive ── */
    @media (max-width: 1100px) {
      .ph-charts-grid { grid-template-columns: 1fr; }
      .ph-grid-3 { grid-template-columns: repeat(2,1fr); }
      .ph-alvos-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .ph-grid-2, .ph-grid-3 { grid-template-columns: 1fr; }
    }

    /* ── Awareness Landing ── */
    .ph-awareness-page {
      position: fixed; inset: 0; z-index: 9999; background: #1a0a00;
      display: flex; align-items: center; justify-content: center; padding: 20px;
      animation: phModalIn 0.4s ease;
    }
    .ph-awareness-card {
      background: linear-gradient(135deg,#1f1000,#2d1600);
      border: 2px solid #f59e0b; border-radius: 24px;
      padding: 48px; max-width: 560px; text-align: center;
      box-shadow: 0 0 80px rgba(245,158,11,0.2);
    }
    .ph-awareness-icon { font-size: 4rem; margin-bottom: 16px; }
    .ph-awareness-title { font-size: 1.6rem; font-weight: 900; color: #f59e0b; margin-bottom: 12px; }
    .ph-awareness-sub { font-size: 0.95rem; color: #fcd34d; margin-bottom: 28px; line-height: 1.6; }
    .ph-awareness-flags { text-align: left; background: rgba(0,0,0,0.3); border-radius: 12px; padding: 18px; margin-bottom: 24px; }
    .ph-awareness-flag { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.88rem; color: #fde68a; }
    .ph-awareness-flag:last-child { margin-bottom: 0; }
  `;
  document.head.appendChild(s);
})();

// ── Mock Data ─────────────────────────────────────────────────
const PHISHING_MOCK = {
  campanhas: [
    { id:1, nome:'Q1 2025 — Teste de Credenciais', status:'Concluída', template:'Redefinição de Senha Urgente', enviados:342, abertos:287, cliques:94, submeteu:31, reportou:48, data_inicio:'2025-01-15', data_fim:'2025-01-22', grupo:'Todos os Usuários' },
    { id:2, nome:'Fevereiro — CEO Fraud', status:'Concluída', template:'CEO Request — Urgente', enviados:89, abertos:71, cliques:12, submeteu:4, reportou:28, data_inicio:'2025-02-10', data_fim:'2025-02-17', grupo:'Diretoria' },
    { id:3, nome:'Março — Benefícios RH', status:'Ativa', template:'Aviso de RH — Revisão de benefícios', enviados:214, abertos:198, cliques:67, submeteu:19, reportou:22, data_inicio:'2025-03-01', data_fim:'2025-03-08', grupo:'RH' },
    { id:4, nome:'Abril — SharePoint Urgente', status:'Rascunho', template:'Documento compartilhado no SharePoint', enviados:0, abertos:0, cliques:0, submeteu:0, reportou:0, data_inicio:'2025-04-01', data_fim:'2025-04-08', grupo:'TI & Tecnologia' },
  ],
  templates: [
    { id:1, nome:'Redefinição de Senha Urgente', cat:'TI', diff:'Fácil', sender:'TI Corporativo', email:'ti@suporte-corp.com', assunto:'⚠️ Sua senha expira em 24h — Ação necessária', corpo:'Prezado colaborador,\n\nIdentificamos que sua senha corporativa expirará nas próximas 24 horas.\n\nPara evitar bloqueio imediato, clique no link abaixo e redefina sua senha agora:\n\n[REDEFINIR SENHA AGORA]\n\nAtenciosamente,\nEquipe de TI Corporativo', iocs:['Domínio do remetente diferente do oficial','Urgência artificial com prazo de 24h','Link genérico sem HTTPS corporativo','Ausência de assinatura personalizada'] },
    { id:2, nome:'Sua conta será suspensa', cat:'Credenciais', diff:'Médio', sender:'Segurança Microsoft', email:'security@microsoft-alerts.com', assunto:'Atividade suspeita detectada na sua conta', corpo:'Detectamos um acesso incomum à sua conta Microsoft 365.\n\nPor segurança, sua conta será temporariamente suspensa em 2 horas.\n\nVerifique sua identidade agora para evitar interrupção:\n\n[VERIFICAR MINHA CONTA]\n\nMicrosoft Security Team', iocs:['Domínio "@microsoft-alerts.com" não é da Microsoft','Prazo artificial de 2 horas','Ameaça de suspensão para forçar ação rápida','URL de verificação não aponta para microsoft.com'] },
    { id:3, nome:'Você ganhou um voucher', cat:'Prêmio', diff:'Fácil', sender:'RH - Benefícios Corp', email:'rh-beneficios@empresa-group.net', assunto:'🎁 Parabéns! Voucher R$500 disponível para você', corpo:'Querido colaborador,\n\nComo parte do nosso programa de reconhecimento Q1 2025, você foi selecionado para receber um voucher de R$500!\n\nPara resgatar seu prêmio, acesse o portal de benefícios:\n\n[RESGATAR VOUCHER AGORA]\n\nOBS: Oferta válida por 48 horas apenas.', iocs:['Domínio diferente do RH oficial da empresa','Valor alto para criar senso de urgência','Prazo de 48h para pressionar decisão rápida','Link não aponta para portal oficial de benefícios'] },
    { id:4, nome:'Documento compartilhado no SharePoint', cat:'TI', diff:'Médio', sender:'OneDrive Notifications', email:'no-reply@sharepointnotif.com', assunto:'João compartilhou "Planilha Orçamento 2025.xlsx" com você', corpo:'João Silva compartilhou um arquivo com você no SharePoint.\n\nPlanilha Orçamento 2025.xlsx\nModificado: hoje às 09:23\n\nClicar para abrir:\n[ABRIR DOCUMENTO]\n\nEsta mensagem foi enviada automaticamente pelo Microsoft SharePoint.', iocs:['Domínio "@sharepointnotif.com" não é da Microsoft','Notificação sem identidade visual oficial do SharePoint','Link não contém "sharepoint.com" no domínio','Ausência de detalhes do tenant corporativo'] },
    { id:5, nome:'Atualização de dados bancários', cat:'Financeiro', diff:'Difícil', sender:'Financeiro - Folha de Pagamento', email:'folha@financeiro.empresa-corp.com.br', assunto:'Confirmação necessária — Dados bancários', corpo:'Prezado colaborador,\n\nPara garantir o correto processamento da folha de pagamento de março/2025, solicitamos a confirmação dos seus dados bancários cadastrados.\n\nEm razão de migração do sistema Folha v3 para v4, é necessária nova confirmação:\n\n[CONFIRMAR DADOS BANCÁRIOS]\n\nPrazo: até 17/03/2025 às 18h.\n\nGerência de Folha de Pagamento', iocs:['Subdomínio longo para parecer legítimo','Argumento técnico de migração de sistema','Dados bancários são raramente solicitados por e-mail','Prazo específico para criar urgência'] },
    { id:6, nome:'Aviso de RH — Revisão de benefícios', cat:'RH', diff:'Médio', sender:'Recursos Humanos', email:'rh@empresa-beneficios.com.br', assunto:'[AÇÃO REQUERIDA] Revisão obrigatória do seu plano de saúde', corpo:'Prezado(a) colaborador(a),\n\nO período de revisão anual dos planos de saúde corporativos está aberto.\n\nÉ OBRIGATÓRIO que todos os colaboradores revisem e confirmem suas escolhas até 31/03/2025. Não fazê-lo resultará na manutenção do plano atual sem alterações.\n\nAcesse o portal de RH:\n[REVISAR MEU PLANO DE SAÚDE]\n\nDepartamento de Recursos Humanos', iocs:['Domínio diferente do RH corporativo','Ameaça velada de consequências por não agir','Prazo fixo para pressionar','Link não aponta para portal corporativo oficial'] },
    { id:7, nome:'CEO Request — Urgente', cat:'Fraude CEO', diff:'Difícil', sender:'Roberto Almeida - CEO', email:'r.almeida@empresa-corp.io', assunto:'Confidencial — Preciso da sua ajuda', corpo:'Olá,\n\nEstou em reunião com conselho de acionistas e preciso processar urgentemente uma transferência para fechamento de aquisição estratégica.\n\nO valor é de R$42.000. Preciso que você processe ainda hoje, é confidencial por enquanto.\n\nVocê pode me ajudar? Me responda neste e-mail assim que possível.\n\nRoberto\nCEO | Empresa Corp', iocs:['Endereço de e-mail diferente do domínio corporativo oficial','Pedido de transferência direta por e-mail nunca é legítimo','Confidencialidade usada para evitar verificação','Urgência extrema para inibir checagem'] },
    { id:8, nome:'Notificação de pacote não entregue', cat:'Urgência', diff:'Fácil', sender:'Correios - Notificação', email:'notificacao@correios-rastreio.net', assunto:'Seu pacote não pôde ser entregue — Taxa pendente', corpo:'Caro destinatário,\n\nTentamos entregar seu pacote #BR123456789BR mas não foi possível completar a entrega.\n\nPara reagendar a entrega, é necessário pagar uma taxa administrativa de R$12,90.\n\nPague agora e receba em até 3 dias úteis:\n[PAGAR TAXA E REAGENDAR]\n\nCorreios - Serviço de Rastreamento', iocs:['Domínio "@correios-rastreio.net" não é dos Correios oficiais','Correios nunca cobram taxas por e-mail','Número de rastreamento genérico','Link de pagamento em domínio suspeito'] },
  ],
  grupos: [
    { id:'all',     nome:'Todos os Usuários', icon:'🏢', count:342 },
    { id:'dir',     nome:'Diretoria',         icon:'💼', count:12  },
    { id:'ti',      nome:'TI & Tecnologia',   icon:'💻', count:48  },
    { id:'fin',     nome:'Financeiro',         icon:'💰', count:67  },
    { id:'com',     nome:'Comercial',          icon:'📞', count:89  },
    { id:'rh',      nome:'RH',                icon:'👤', count:34  },
    { id:'mkt',     nome:'Marketing',          icon:'📣', count:42  },
    { id:'juridico',nome:'Jurídico',           icon:'⚖️', count:18  },
  ],
  usuarios: [
    { id:1, nome:'Ana Lima',        email:'ana.lima@empresa.com',      dept:'Financeiro', cargo:'Analista Sr.',    riskScore:78, campanhas:4, cliques:3, reportou:1, grupo:'fin' },
    { id:2, nome:'Carlos Souza',    email:'carlos.s@empresa.com',      dept:'Comercial',  cargo:'Executivo',       riskScore:55, campanhas:4, cliques:2, reportou:2, grupo:'com' },
    { id:3, nome:'Mariana Teles',   email:'m.teles@empresa.com',       dept:'RH',         cargo:'Gerente RH',      riskScore:23, campanhas:3, cliques:0, reportou:3, grupo:'rh' },
    { id:4, nome:'Rafael Neto',     email:'rafael.n@empresa.com',      dept:'TI',         cargo:'DevOps',          riskScore:12, campanhas:4, cliques:0, reportou:4, grupo:'ti' },
    { id:5, nome:'Fernanda Dias',   email:'f.dias@empresa.com',        dept:'Diretoria',  cargo:'Diretora Fin.',   riskScore:91, campanhas:4, cliques:4, reportou:0, grupo:'dir' },
    { id:6, nome:'Pedro Costa',     email:'p.costa@empresa.com',       dept:'Marketing',  cargo:'Designer',        riskScore:44, campanhas:3, cliques:1, reportou:1, grupo:'mkt' },
    { id:7, nome:'Juliana Rocha',   email:'j.rocha@empresa.com',       dept:'Jurídico',   cargo:'Advogada',        riskScore:18, campanhas:2, cliques:0, reportou:2, grupo:'juridico' },
    { id:8, nome:'Marcos Oliveira', email:'m.oliveira@empresa.com',    dept:'Comercial',  cargo:'Gerente Vendas',  riskScore:67, campanhas:4, cliques:3, reportou:1, grupo:'com' },
    { id:9, nome:'Beatriz Alves',   email:'b.alves@empresa.com',       dept:'Financeiro', cargo:'Controller',      riskScore:82, campanhas:4, cliques:4, reportou:0, grupo:'fin' },
    { id:10,nome:'Lucas Ferreira',  email:'l.ferreira@empresa.com',    dept:'TI',         cargo:'Analista TI',     riskScore:9,  campanhas:4, cliques:0, reportou:4, grupo:'ti' },
    { id:11,nome:'Camila Santos',   email:'c.santos@empresa.com',      dept:'Marketing',  cargo:'Head Marketing',  riskScore:38, campanhas:3, cliques:1, reportou:2, grupo:'mkt' },
    { id:12,nome:'Diego Martins',   email:'d.martins@empresa.com',     dept:'Diretoria',  cargo:'CEO',             riskScore:73, campanhas:3, cliques:2, reportou:0, grupo:'dir' },
  ],
  historico_mensal: [
    { mes:'Out/24', clique:42, reporte:18 },
    { mes:'Nov/24', clique:38, reporte:22 },
    { mes:'Dez/24', clique:35, reporte:28 },
    { mes:'Jan/25', clique:27, reporte:35 },
    { mes:'Fev/25', clique:13, reporte:31 },
    { mes:'Mar/25', clique:31, reporte:10 },
  ],
};

// ── State ─────────────────────────────────────────────────────
let PH = {
  tab: 'dashboard',
  selectedGroup: 'all',
  selectedTemplate: null,
  campaignStep: 1,
  newCampaign: {},
  filterCat: 'all',
  filterStatus: 'all',
  charts: {},
  toggles: { immediate: true, awareness: true, notifyAdmin: false },
  editingCampaign: null,
};

// ── Risk Score Calculator ─────────────────────────────────────
function calcRisk({ campanhas, cliques, reportou, treinamentos = 0 }) {
  if (!campanhas) return 0;
  const base = (cliques / campanhas) * 100;
  const bonusReporte = (reportou / campanhas) * 20;
  const bonusTreinamento = treinamentos * 5;
  return Math.min(100, Math.max(0, Math.round(base - bonusReporte - bonusTreinamento)));
}

function riskColor(score) {
  if (score <= 30) return 'var(--ph-green)';
  if (score <= 60) return 'var(--ph-amber)';
  return 'var(--ph-red)';
}
function riskLabel(score) {
  if (score <= 30) return 'Baixo Risco';
  if (score <= 60) return 'Risco Moderado';
  return 'Alto Risco';
}
function riskBadgeClass(score) {
  if (score <= 30) return 'ph-badge-risk-low';
  if (score <= 60) return 'ph-badge-risk-med';
  return 'ph-badge-risk-hi';
}
function diffBadge(diff) {
  if (diff === 'Fácil')  return `<span class="ph-diff-easy">🟢 Fácil</span>`;
  if (diff === 'Médio')  return `<span class="ph-diff-med">🟡 Médio</span>`;
  return `<span class="ph-diff-hard">🔴 Difícil</span>`;
}
function statusBadge(st) {
  const m = { 'Ativa':'ph-badge-active', 'Concluída':'ph-badge-done', 'Rascunho':'ph-badge-draft' };
  return `<span class="ph-badge ${m[st]||'ph-badge-draft'}">${st}</span>`;
}

// Company risk = weighted avg
function companyRisk() {
  const scores = PHISHING_MOCK.usuarios.map(u => u.riskScore);
  return Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
}

// ── Base campaign data (original reference — never mutate this) ──
const _PH_BASE_CAMPANHAS = JSON.parse(JSON.stringify(PHISHING_MOCK.campanhas));
const _PH_BASE_HISTORICO  = JSON.parse(JSON.stringify(PHISHING_MOCK.historico_mensal));

// Per-tenant campaign pool (persists mutations within session)
const _PH_POOLS = {};

function phGetActiveTenantId() {
  if (typeof APP !== 'undefined' && APP.tenants) {
    const t = APP.tenants.find(t => t.active);
    return t ? t.id : 1;
  }
  return 1;
}

function phScaleCampanhas(tenantId, tenantUsers) {
  const actual   = tenantUsers.length || 1;
  const baseMax  = Math.max(..._PH_BASE_CAMPANHAS.map(c => c.enviados), 1);
  const ratio    = actual / 342; // base dataset was designed for 342 users

  return _PH_BASE_CAMPANHAS.map(c => {
    if (c.enviados === 0) return { ...c }; // draft — no scaling
    const env  = Math.max(1, Math.round(c.enviados * ratio));
    const abr  = Math.min(env, Math.round(c.abertos  / Math.max(c.enviados,1) * env));
    const clic = Math.min(abr, Math.round(c.cliques  / Math.max(c.enviados,1) * env));
    const subm = Math.min(clic, Math.round(c.submeteu / Math.max(c.enviados,1) * env));
    const rep  = Math.min(env - clic, Math.round(c.reportou / Math.max(c.enviados,1) * env));
    return { ...c, enviados: env, abertos: abr, cliques: Math.max(0,clic), submeteu: Math.max(0,subm), reportou: Math.max(0,rep) };
  });
}

function phScaleHistorico(tenantUsers) {
  const ratio = (tenantUsers.length || 1) / 342;
  return _PH_BASE_HISTORICO.map(h => ({
    mes:     h.mes,
    clique:  Math.max(1, Math.round(h.clique  * ratio)),
    reporte: Math.max(0, Math.round(h.reporte * ratio)),
  }));
}

// ── Rebuild usuarios + grupos from active tenant (single source of truth) ──
function phRebuildFromTenant() {
  if (typeof getActiveTenantUsers !== 'function') return;
  const tenantUsers = getActiveTenantUsers();
  if (!tenantUsers || !tenantUsers.length) return;

  // ── Scale campaigns to active tenant's actual user count ──
  const tid = phGetActiveTenantId();
  if (!_PH_POOLS[tid]) {
    // First time for this tenant — build scaled copy from base
    _PH_POOLS[tid] = phScaleCampanhas(tid, tenantUsers);
  }
  PHISHING_MOCK.campanhas = _PH_POOLS[tid].map(c => ({ ...c }));
  PHISHING_MOCK.historico_mensal = phScaleHistorico(tenantUsers);

  // helper: dept → stable group id
  function deptToId(dept) {
    return (dept || 'outros').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g,'')
      .replace(/\s+/g,'_').replace(/[^a-z0-9_]/g,'');
  }

  const deptIconMap = {
    'Diretoria':'💼','TI':'💻','Financeiro':'💰','Comercial':'📞',
    'RH':'👤','Marketing':'📣','Jurídico':'⚖️','Operações':'⚙️',
    'TI & Tecnologia':'💻','Juridico':'⚖️',
  };

  // Build usuario list
  PHISHING_MOCK.usuarios = tenantUsers.map((u, i) => {
    let riskScore, campanhas, cliques, reportou;

    if (u.isDemo && typeof DEMO_STATE !== 'undefined') {
      const ds = DEMO_STATE;
      riskScore = (typeof ds.getRiskScore === 'function') ? ds.getRiskScore() : 50;
      campanhas = (ds.phishing||[]).length;
      cliques   = (ds.phishing||[]).filter(p=>p.action==='clicked').length;
      reportou  = (ds.phishing||[]).filter(p=>p.action==='reported').length;
    } else {
      const rBase = u.risk==='high' ? 72 : u.risk==='med' ? 44 : 14;
      riskScore = Math.min(99, rBase + Math.round((100-(u.completion||70))*0.15));
      campanhas = 3 + (i % 2);
      cliques   = u.risk==='high' ? 3 : u.risk==='med' ? 1 : 0;
      reportou  = u.risk==='low'  ? 2 : u.risk==='med' ? 1 : 0;
    }

    const emailFallback = (u.name||'user').toLowerCase().replace(/\s+/g,'.') + '@empresa.com';
    return {
      id:        u.id,
      nome:      u.name  || 'Usuário',
      email:     u.email || emailFallback,
      dept:      u.dept  || 'Outros',
      cargo:     u.role  || u.dept || '',
      riskScore,
      campanhas,
      cliques,
      reportou,
      grupo:     deptToId(u.dept),
      isDemo:    u.isDemo || false,
    };
  });

  // Build grupos from real departments
  const deptCount = {};
  PHISHING_MOCK.usuarios.forEach(u => {
    deptCount[u.dept] = (deptCount[u.dept]||0) + 1;
  });

  PHISHING_MOCK.grupos = [
    { id:'all', nome:'Todos os Usuários', icon:'🏢', count: PHISHING_MOCK.usuarios.length },
    ...Object.keys(deptCount).sort().map(dept => ({
      id:    deptToId(dept),
      nome:  dept,
      icon:  deptIconMap[dept] || '👥',
      count: deptCount[dept],
    })),
  ];
}

// legacy alias
function phInjectDemoUser() { phRebuildFromTenant(); }

// ── Main Render ────────────────────────────────────────────────
window.renderPage_phishing = function () {
  phRebuildFromTenant();
  (function injectPhishingCSS() {
    if (document.getElementById('phishing-css')) return;
    // CSS already injected at top of file
  })();

  const avgClick = Math.round(PHISHING_MOCK.campanhas.filter(c=>c.status!=='Rascunho').reduce((s,c)=>s+(c.cliques/Math.max(c.enviados,1)*100),0) / Math.max(PHISHING_MOCK.campanhas.filter(c=>c.status!=='Rascunho').length,1));
  const avgReport = Math.round(PHISHING_MOCK.campanhas.filter(c=>c.status!=='Rascunho').reduce((s,c)=>s+(c.reportou/Math.max(c.enviados,1)*100),0) / Math.max(PHISHING_MOCK.campanhas.filter(c=>c.status!=='Rascunho').length,1));
  const cRisk = companyRisk();

  return `
<div id="phishing-module">

  <!-- Tabs -->
  <div class="ph-tabs">
    ${[
      ['dashboard','📊 Dashboard'],
      ['campanhas','📧 Campanhas'],
      ['templates','🎯 Templates'],
      ['alvos','👥 Alvos'],
      ['relatorios','📋 Relatórios'],
    ].map(([k,l])=>`<button class="ph-tab${PH.tab===k?' active':''}" data-tab="${k}" onclick="phTab('${k}')">${l}</button>`).join('')}
  </div>

  <!-- Tab panels -->
  <div id="ph-panel-dashboard"  style="display:${PH.tab==='dashboard' ?'block':'none'}">${renderPhDashboard(avgClick,avgReport,cRisk)}</div>
  <div id="ph-panel-campanhas"  style="display:${PH.tab==='campanhas' ?'block':'none'}">${renderPhCampanhas()}</div>
  <div id="ph-panel-templates"  style="display:${PH.tab==='templates' ?'block':'none'}">${renderPhTemplates()}</div>
  <div id="ph-panel-alvos"      style="display:${PH.tab==='alvos'     ?'block':'none'}">${renderPhAlvos()}</div>
  <div id="ph-panel-relatorios" style="display:${PH.tab==='relatorios'?'block':'none'}">${renderPhRelatorios()}</div>

  <!-- Modals container -->
  <div id="ph-modals"></div>
</div>`;
};

window.initPage_phishing = function () {
  document.addEventListener('keydown', phEscHandler);
  // Double requestAnimationFrame ensures DOM is fully painted before chart init
  function tryCharts() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (PH.tab === 'dashboard') initPhDashboardCharts();
      if (PH.tab === 'relatorios') initPhReportCharts();
    }));
  }
  if (!window.Chart) {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    s.onload = tryCharts;
    document.head.appendChild(s);
  } else {
    tryCharts();
  }
};

function phEscHandler(e) { if (e.key === 'Escape') phCloseModal(); }

window.phTab = function(tab) {
  PH.tab = tab;
  document.querySelectorAll('.ph-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('[id^="ph-panel-"]').forEach(p => p.style.display = 'none');
  const panel = document.getElementById('ph-panel-' + tab);
  if (panel) {
    panel.style.display = 'block';
    panel.innerHTML = {
      dashboard:  () => renderPhDashboard(...getKPIs()),
      campanhas:  renderPhCampanhas,
      templates:  renderPhTemplates,
      alvos:      renderPhAlvos,
      relatorios: renderPhRelatorios,
    }[tab]();
    panel.style.opacity = '0';
    requestAnimationFrame(() => { panel.style.transition = 'opacity 0.25s'; panel.style.opacity = '1'; });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (tab === 'dashboard')  initPhDashboardCharts();
      if (tab === 'relatorios') initPhReportCharts();
    }));
  }
};

function getKPIs() {
  const active = PHISHING_MOCK.campanhas.filter(c=>c.status!=='Rascunho');
  const avgClick  = Math.round(active.reduce((s,c)=>s+(c.cliques/Math.max(c.enviados,1)*100),0)/Math.max(active.length,1));
  const avgReport = Math.round(active.reduce((s,c)=>s+(c.reportou/Math.max(c.enviados,1)*100),0)/Math.max(active.length,1));
  return [avgClick, avgReport, companyRisk()];
}

// ── DASHBOARD ─────────────────────────────────────────────────
function renderPhDashboard(avgClick, avgReport, cRisk) {
  const total = PHISHING_MOCK.campanhas.length;
  const cColor = riskColor(cRisk);
  const cLabel = riskLabel(cRisk);

  return `
  <!-- KPI Grid -->
  <div class="ph-kpi-grid">
    <div class="ph-kpi">
      <div class="ph-kpi-icon" style="background:rgba(0,212,255,0.12)">📧</div>
      <div class="ph-kpi-val" style="color:var(--ph-teal)">${total}</div>
      <div class="ph-kpi-label">Total de Campanhas</div>
      <div class="ph-kpi-trend" style="color:var(--ph-green)">↑ +2 este trimestre</div>
    </div>
    <div class="ph-kpi">
      <div class="ph-kpi-icon" style="background:rgba(239,68,68,0.12)">🎯</div>
      <div class="ph-kpi-val" style="color:var(--ph-red)">${avgClick}%</div>
      <div class="ph-kpi-label">Taxa de Clique Média</div>
      <div class="ph-kpi-trend" style="color:var(--ph-green)">↓ -8% vs. trimestre anterior</div>
    </div>
    <div class="ph-kpi">
      <div class="ph-kpi-icon" style="background:rgba(34,197,94,0.12)">🚩</div>
      <div class="ph-kpi-val" style="color:var(--ph-green)">${avgReport}%</div>
      <div class="ph-kpi-label">Taxa de Reporte</div>
      <div class="ph-kpi-trend" style="color:var(--ph-green)">↑ +12% vs. trimestre anterior</div>
    </div>
    <div class="ph-kpi">
      <div class="ph-kpi-icon" style="background:rgba(245,158,11,0.12)">🛡</div>
      <div class="ph-kpi-val" style="color:${cColor}">${cRisk}</div>
      <div class="ph-kpi-label">Human Risk Score</div>
      <div class="ph-kpi-trend" style="color:${cColor}">${cLabel} · ↓ -6 vs. Q4</div>
    </div>
  </div>

  <!-- Charts -->
  <div class="ph-charts-grid">
    <div class="ph-chart-card">
      <div class="ph-chart-title">📈 Tendência de Cliques vs. Reportes — 6 Meses</div>
      <!-- Fixed wrapper prevents ResizeObserver from shifting canvas on hover -->
      <div class="ph-canvas-wrap">
        <canvas id="ph-chart-line"></canvas>
      </div>
    </div>
    <div class="ph-chart-card">
      <div class="ph-chart-title">🍩 Distribuição de Engajamento</div>
      <div class="ph-canvas-wrap">
        <canvas id="ph-chart-donut"></canvas>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;font-size:0.76rem;">
        ${[['#3f3f46','Não Abriu'],['#00d4ff','Abriu'],['#ef4444','Clicou'],['#22c55e','Reportou']].map(([c,l])=>`<span style="display:flex;align-items:center;gap:6px;color:#94a3b8"><span style="width:10px;height:10px;border-radius:50%;background:${c};display:inline-block"></span>${l}</span>`).join('')}
      </div>
    </div>
  </div>

  <!-- Recent Campaigns Table -->
  <div class="ph-chart-card">
    <div class="ph-section-header" style="margin-bottom:16px">
      <div class="ph-chart-title" style="margin:0">📋 Campanhas Recentes</div>
      <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phTab('campanhas')">Ver todas →</button>
    </div>
    <div style="overflow-x:auto">
    <table class="ph-table">
      <thead><tr>
        <th>Nome</th><th>Status</th><th>Enviados</th><th>Cliques</th><th>Reportes</th><th>Data</th><th>Ações</th>
      </tr></thead>
      <tbody>
      ${PHISHING_MOCK.campanhas.map(c=>{
        const cp = c.enviados>0 ? Math.round(c.cliques/c.enviados*100) : 0;
        const rp = c.enviados>0 ? Math.round(c.reportou/c.enviados*100) : 0;
        return `<tr>
          <td style="font-weight:600">${c.nome}</td>
          <td>${statusBadge(c.status)}</td>
          <td>${c.enviados.toLocaleString()}</td>
          <td><span style="color:var(--ph-red);font-weight:700">${cp}%</span></td>
          <td><span style="color:var(--ph-green);font-weight:700">${rp}%</span></td>
          <td style="color:var(--ph-muted);font-size:0.78rem">${c.data_inicio}</td>
          <td>
            <div style="display:flex;gap:5px">
              <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phViewCampaign(${c.id})">Ver</button>
              <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phDuplicateCampaign(${c.id})">Duplicar</button>
            </div>
          </td>
        </tr>`;
      }).join('')}
      </tbody>
    </table>
    </div>
  </div>`;
}

function initPhDashboardCharts() {
  if (!window.Chart) return;

  // Destroy old instances
  ['line','donut'].forEach(k => { if (PH.charts[k]) { try { PH.charts[k].destroy(); } catch(e){} PH.charts[k] = null; } });

  const lineCtx  = document.getElementById('ph-chart-line');
  const donutCtx = document.getElementById('ph-chart-donut');
  if (!lineCtx || !donutCtx) return;

  /* Canvas dimensions handled by .ph-canvas-wrap CSS (position:absolute) */
  Chart.defaults.color = '#94a3b8';

  PH.charts.line = new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: PHISHING_MOCK.historico_mensal.map(h => h.mes),
      datasets: [
        {
          label: 'Taxa de Clique (%)',
          data:  PHISHING_MOCK.historico_mensal.map(h => h.clique),
          borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.10)',
          tension: 0.4, fill: true,
          pointRadius: 5, pointHoverRadius: 5,      /* no growth on hover */
          pointBackgroundColor: '#ef4444', borderWidth: 2,
        },
        {
          label: 'Taxa de Reporte (%)',
          data:  PHISHING_MOCK.historico_mensal.map(h => h.reporte),
          borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.10)',
          tension: 0.4, fill: true,
          pointRadius: 5, pointHoverRadius: 5,      /* no growth on hover */
          pointBackgroundColor: '#22c55e', borderWidth: 2,
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 600 },
      /* Prevent re-animation when container resizes on hover */
      transitions: { resize: { animation: { duration: 0 } } },
      plugins: {
        legend: { labels: { color: '#94a3b8', boxWidth: 12, font: { size: 12 } } },
        tooltip: { animation: false },   /* instant tooltip — no morph */
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280', callback: v => v + '%' }, min: 0, max: 55 }
      }
    }
  });
  // Force repaint after creation
  requestAnimationFrame(() => { if (PH.charts.line) PH.charts.line.resize(); });

  // Aggregate donut data
  const total = PHISHING_MOCK.campanhas.reduce((s, c) => ({
    enviados: s.enviados + c.enviados,
    abertos:  s.abertos  + c.abertos,
    cliques:  s.cliques  + c.cliques,
    reportou: s.reportou + c.reportou
  }), { enviados: 0, abertos: 0, cliques: 0, reportou: 0 });
  const naoAbriu = Math.max(0, total.enviados - total.abertos);

  PH.charts.donut = new Chart(donutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Não Abriu', 'Abriu', 'Clicou', 'Reportou'],
      datasets: [{
        data: [naoAbriu, Math.max(0, total.abertos - total.cliques), total.cliques, total.reportou],
        backgroundColor: ['#3f3f46', '#00d4ff', '#ef4444', '#22c55e'],
        borderWidth: 0,
        hoverOffset: 0,     /* no segment expansion on hover */
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 600 },
      transitions: { resize: { animation: { duration: 0 } } },
      plugins: {
        legend: { display: false },
        tooltip: {
          animation: false,
          callbacks: { label: ctx => `${ctx.label}: ${ctx.raw.toLocaleString()} (${total.enviados > 0 ? Math.round(ctx.raw / total.enviados * 100) : 0}%)` }
        }
      },
      cutout: '68%'
    }
  });
  requestAnimationFrame(() => { if (PH.charts.donut) PH.charts.donut.resize(); });
}

// ── CAMPANHAS ─────────────────────────────────────────────────
function renderPhCampanhas() {
  return `
  <div class="ph-section-header">
    <div>
      <div class="ph-section-title">📧 Campanhas de Phishing</div>
      <div style="font-size:0.82rem;color:var(--ph-muted);margin-top:3px">${PHISHING_MOCK.campanhas.length} campanhas · ${PHISHING_MOCK.campanhas.filter(c=>c.status==='Ativa').length} ativas</div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <button class="ph-btn ph-btn-ghost" style="border-color:rgba(139,92,246,0.4);color:#a78bfa;background:rgba(139,92,246,0.08);" onclick="phAiGenerateCampaign()">
        🤖 Conscientização IA
      </button>
      <button class="ph-btn ph-btn-ghost" style="border-color:rgba(239,68,68,0.4);color:#f87171;background:rgba(239,68,68,0.07);" onclick="phAiSimulateGenerate()">
        🎯 Simulação de Phishing IA
      </button>
      <button class="ph-btn ph-btn-primary" onclick="phOpenNewCampaign()">
        🚀 Nova Campanha
      </button>
    </div>
  </div>

  <!-- Filter chips -->
  <div class="ph-filter-chips">
    ${['Todas','Ativa','Concluída','Rascunho'].map((f,i)=>`<button class="ph-chip${i===0?' active':''}" onclick="phFilterCampaigns('${f}',this)">${f}</button>`).join('')}
  </div>

  <!-- Campaign list -->
  <div id="ph-campaign-list">
    ${PHISHING_MOCK.campanhas.map(c=>renderCampaignCard(c)).join('')}
  </div>`;
}

function renderCampaignCard(c) {
  const pct = c.enviados>0 ? Math.round(c.cliques/c.enviados*100) : 0;
  const rpt = c.enviados>0 ? Math.round(c.reportou/c.enviados*100) : 0;
  const prog = c.enviados>0 ? Math.round(c.abertos/c.enviados*100) : 0;
  return `
  <div class="ph-campaign-card" id="ph-camp-${c.id}">
    <div class="ph-campaign-header">
      <div>
        <div style="font-size:1rem;font-weight:800;margin-bottom:4px">${c.nome}</div>
        <div style="font-size:0.78rem;color:var(--ph-muted)">Template: ${c.template} · Grupo: ${c.grupo}</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        ${statusBadge(c.status)}
        <div style="display:flex;gap:6px">
          <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phViewCampaign(${c.id})">📊 Detalhes</button>
          <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phDuplicateCampaign(${c.id})">📋 Duplicar</button>
          ${c.status!=='Ativa'?'':'<button class="ph-btn ph-btn-danger ph-btn-sm" onclick="phArchiveCampaign('+c.id+')">Arquivar</button>'}
        </div>
      </div>
    </div>
    <div class="ph-campaign-meta">
      <div class="ph-campaign-metric">
        <div class="ph-campaign-metric-val">${c.enviados.toLocaleString()}</div>
        <div>Enviados</div>
      </div>
      <div class="ph-campaign-metric">
        <div class="ph-campaign-metric-val" style="color:var(--ph-teal)">${c.abertos.toLocaleString()}</div>
        <div>Abriram</div>
      </div>
      <div class="ph-campaign-metric">
        <div class="ph-campaign-metric-val" style="color:var(--ph-red)">${pct}%</div>
        <div>Clicaram</div>
      </div>
      <div class="ph-campaign-metric">
        <div class="ph-campaign-metric-val" style="color:var(--ph-green)">${rpt}%</div>
        <div>Reportaram</div>
      </div>
      <div class="ph-campaign-metric">
        <div class="ph-campaign-metric-val">${c.data_inicio}</div>
        <div>Início</div>
      </div>
    </div>
    ${c.enviados>0?`<div class="ph-progress-bar"><div class="ph-progress-fill" style="width:${prog}%"></div></div>`:``}
  </div>`;
}

window.phFilterCampaigns = function(filter, btn) {
  document.querySelectorAll('.ph-filter-chips .ph-chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const list = document.getElementById('ph-campaign-list');
  const items = filter === 'Todas' ? PHISHING_MOCK.campanhas : PHISHING_MOCK.campanhas.filter(c=>c.status===filter);
  list.innerHTML = items.length ? items.map(c=>renderCampaignCard(c)).join('') : `<div style="text-align:center;padding:40px;color:var(--ph-muted)">Nenhuma campanha com este filtro.</div>`;
};

window.phViewCampaign = function(id) {
  const c = PHISHING_MOCK.campanhas.find(x=>x.id===id);
  if (!c) return;
  const total = c.enviados;
  const funil = [
    { label:'Enviados',     val:c.enviados,  color:'#00d4ff' },
    { label:'Abriram',      val:c.abertos,   color:'#7c3aed' },
    { label:'Clicaram',     val:c.cliques,   color:'#ef4444' },
    { label:'Submeteram',   val:c.submeteu,  color:'#f59e0b' },
    { label:'Reportaram',   val:c.reportou,  color:'#22c55e' },
  ];
  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">📊 ${c.nome}</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px">
      ${statusBadge(c.status)}
      <span style="font-size:0.78rem;color:var(--ph-muted)">${c.data_inicio} → ${c.data_fim}</span>
      <span style="font-size:0.78rem;color:var(--ph-muted)">Template: ${c.template}</span>
    </div>
    <div class="ph-chart-title">Funil de Engajamento</div>
    <div class="ph-funnel" style="margin-bottom:24px">
      ${funil.map(f=>{
        const w = total>0?Math.round(f.val/total*100):0;
        return `<div class="ph-funnel-step">
          <div class="ph-funnel-label">${f.label}</div>
          <div class="ph-funnel-bar-wrap">
            <div class="ph-funnel-bar" style="width:${w}%;background:${f.color}20;border-left:3px solid ${f.color};color:${f.color}">
              ${f.val.toLocaleString()}
            </div>
          </div>
          <div class="ph-funnel-pct" style="color:${f.color}">${w}%</div>
        </div>`;
      }).join('')}
    </div>
    ${typeof DEMO_STATE !== 'undefined' ? `
    <div style="border-top:1px solid rgba(255,255,255,0.08);margin-top:4px;padding-top:16px;margin-bottom:16px;">
      <div style="font-size:0.7rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.09em;margin-bottom:10px;">🎭 Simular como Admin Local</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="ph-btn ph-btn-ghost ph-btn-sm" style="border-color:#ef4444;color:#ef4444;flex:1;min-width:120px;"
          onclick="DEMO_STATE.simulatePhishing(${id},'${c.nome}','clicked');phInjectDemoUser();showToast&&showToast('⚠️ Admin Local clicou no link!','error');phCloseModal();">
          🎣 Simular Clique
        </button>
        <button class="ph-btn ph-btn-ghost ph-btn-sm" style="border-color:#22c55e;color:#22c55e;flex:1;min-width:120px;"
          onclick="DEMO_STATE.simulatePhishing(${id},'${c.nome}','reported');phInjectDemoUser();showToast&&showToast('🛡 Admin Local reportou o phishing!','success');phCloseModal();">
          🛡 Simular Reporte
        </button>
      </div>
    </div>` : ''}
    <div style="display:flex;gap:10px">
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phCloseModal()">Fechar</button>
      <button class="ph-btn ph-btn-primary" style="flex:1" onclick="phDuplicateCampaign(${id});phCloseModal()">Duplicar Campanha</button>
    </div>
  `);
};

// Save current campaigns back to the active tenant's pool
function phSaveTenantPool() {
  const tid = phGetActiveTenantId();
  _PH_POOLS[tid] = PHISHING_MOCK.campanhas.map(c => ({ ...c }));
}

window.phDuplicateCampaign = function(id) {
  const c = PHISHING_MOCK.campanhas.find(x=>x.id===id);
  if (!c) return;
  const dup = {...c, id: Date.now(), nome: c.nome+' (Cópia)', status:'Rascunho', enviados:0, abertos:0, cliques:0, submeteu:0, reportou:0 };
  PHISHING_MOCK.campanhas.push(dup);
  phSaveTenantPool();
  if (PH.tab === 'campanhas') phTab('campanhas');
  showToast && showToast('Campanha duplicada como rascunho!','success');
};

window.phArchiveCampaign = function(id) {
  const c = PHISHING_MOCK.campanhas.find(x=>x.id===id);
  if (c) c.status = 'Concluída';
  phSaveTenantPool();
  if (PH.tab === 'campanhas') phTab('campanhas');
  showToast && showToast('Campanha arquivada.','info');
};

// ── NOVA CAMPANHA — 4 step modal ───────────────────────────────
window.phOpenNewCampaign = function() {
  PH.newCampaign = { step:1, nome:'', desc:'', dataInicio:'', dataFim:'', senderName:'', senderEmail:'', template:null, grupo:'all', toggleImmediate:true, toggleAwareness:true, toggleNotify:false };
  phRenderCampaignStep(1);
};

function phRenderCampaignStep(step) {
  PH.newCampaign.step = step;
  const steps = ['Configuração','Template','Alvos','Revisão'];
  const stepperHTML = `
    <div class="ph-stepper">
      ${steps.map((l,i)=>`
        <div class="ph-step ${step===i+1?'active':step>i+1?'done':''}">
          <div class="ph-step-num">${step>i+1?'✓':i+1}</div>
          <div class="ph-step-label">${l}</div>
        </div>
        ${i<steps.length-1?`<div class="ph-step-line"></div>`:''}
      `).join('')}
    </div>`;

  let body = '';
  if (step===1) {
    body = `
      <div class="ph-grid-2">
        <div class="ph-input-group" style="grid-column:1/-1">
          <label class="ph-label">Nome da Campanha *</label>
          <input class="ph-input" id="ph-nc-nome" placeholder="Ex: Q2 2025 — Teste Geral" value="${PH.newCampaign.nome}">
        </div>
        <div class="ph-input-group" style="grid-column:1/-1">
          <label class="ph-label">Objetivo / Descrição</label>
          <textarea class="ph-textarea" id="ph-nc-desc" placeholder="Descreva o objetivo desta campanha...">${PH.newCampaign.desc}</textarea>
        </div>
        <div class="ph-input-group">
          <label class="ph-label">Data de Início</label>
          <input class="ph-input" type="date" id="ph-nc-inicio" value="${PH.newCampaign.dataInicio}">
        </div>
        <div class="ph-input-group">
          <label class="ph-label">Data de Fim</label>
          <input class="ph-input" type="date" id="ph-nc-fim" value="${PH.newCampaign.dataFim}">
        </div>
        <div class="ph-input-group">
          <label class="ph-label">Nome do Remetente</label>
          <input class="ph-input" id="ph-nc-sname" placeholder="Ex: TI Corporativo" value="${PH.newCampaign.senderName}">
        </div>
        <div class="ph-input-group">
          <label class="ph-label">E-mail do Remetente</label>
          <input class="ph-input" id="ph-nc-semail" placeholder="Ex: ti@suporte-corp.com" value="${PH.newCampaign.senderEmail}">
        </div>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px">
        <button class="ph-btn ph-btn-primary" onclick="phNCStep1Next()">Próximo →</button>
      </div>`;
  } else if (step===2) {
    body = `
      <div class="ph-filter-chips" style="margin-bottom:16px">
        ${['Todos','TI','Credenciais','Prêmio','Financeiro','RH','Fraude CEO','Urgência'].map((f,i)=>`<button class="ph-chip${i===0?' active':''}" onclick="phNCFilterTemplates('${f}',this)">${f}</button>`).join('')}
      </div>
      <div id="ph-nc-template-grid" class="ph-grid-3" style="max-height:360px;overflow-y:auto">
        ${PHISHING_MOCK.templates.map(t=>phMiniTemplateCard(t)).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:16px">
        <button class="ph-btn ph-btn-ghost" onclick="phRenderCampaignStep(1)">← Voltar</button>
        <button class="ph-btn ph-btn-primary" onclick="phNCStep2Next()">Próximo →</button>
      </div>`;
  } else if (step===3) {
    const grupo = PHISHING_MOCK.grupos.find(g=>g.id===PH.newCampaign.grupo)||PHISHING_MOCK.grupos[0];
    body = `
      <div class="ph-input-group">
        <label class="ph-label">Selecionar Grupo de Alvos</label>
        <select class="ph-select" id="ph-nc-grupo" onchange="phNCSelectGroup(this.value)">
          ${PHISHING_MOCK.grupos.map(g=>`<option value="${g.id}" ${g.id===PH.newCampaign.grupo?'selected':''}>${g.icon} ${g.nome} (${g.count})</option>`).join('')}
        </select>
      </div>
      <div id="ph-nc-group-preview" style="margin-top:12px">
        ${phNCGroupPreview(grupo)}
      </div>
      <div style="margin-top:16px;padding:14px;background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.15);border-radius:12px;font-size:0.82rem;color:var(--ph-teal)">
        📌 <strong>${grupo.count} destinatários</strong> selecionados do grupo "${grupo.nome}"
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:16px">
        <button class="ph-btn ph-btn-ghost" onclick="phRenderCampaignStep(2)">← Voltar</button>
        <button class="ph-btn ph-btn-primary" onclick="phRenderCampaignStep(4)">Próximo →</button>
      </div>`;
  } else if (step===4) {
    const t = PHISHING_MOCK.templates.find(x=>x.id===PH.newCampaign.template);
    const g = PHISHING_MOCK.grupos.find(x=>x.id===PH.newCampaign.grupo)||PHISHING_MOCK.grupos[0];
    body = `
      <div style="background:var(--ph-card2);border-radius:14px;padding:20px;margin-bottom:20px">
        <div style="font-size:0.82rem;color:var(--ph-muted);margin-bottom:14px;text-transform:uppercase;letter-spacing:0.06em">Resumo da Campanha</div>
        ${[
          ['Nome', PH.newCampaign.nome||'(sem nome)'],
          ['Template', t?t.nome:'(não selecionado)'],
          ['Grupo', g.icon+' '+g.nome],
          ['Destinatários', g.count.toLocaleString()+' usuários'],
          ['Período', (PH.newCampaign.dataInicio||'—')+' → '+(PH.newCampaign.dataFim||'—')],
          ['Remetente', (PH.newCampaign.senderName||'(não definido)')+' <'+(PH.newCampaign.senderEmail||'—')+'>'],
        ].map(([k,v])=>`<div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid var(--ph-border)"><span style="width:120px;font-size:0.75rem;color:var(--ph-muted)">${k}</span><span style="font-weight:600;font-size:0.88rem">${v}</span></div>`).join('')}
      </div>
      <div style="background:var(--ph-card2);border-radius:14px;padding:20px;margin-bottom:20px">
        <div style="font-size:0.82rem;color:var(--ph-muted);margin-bottom:14px;text-transform:uppercase;letter-spacing:0.06em">Opções</div>
        <div class="ph-toggle-wrap"><button class="ph-toggle${PH.newCampaign.toggleImmediate?' on':''}" onclick="this.classList.toggle('on');PH.newCampaign.toggleImmediate=this.classList.contains('on')"></button><span class="ph-toggle-label">Enviar imediatamente ao lançar</span></div>
        <div class="ph-toggle-wrap"><button class="ph-toggle${PH.newCampaign.toggleAwareness?' on':''}" onclick="this.classList.toggle('on');PH.newCampaign.toggleAwareness=this.classList.contains('on')"></button><span class="ph-toggle-label">Habilitar landing page de conscientização</span></div>
        <div class="ph-toggle-wrap"><button class="ph-toggle${PH.newCampaign.toggleNotify?' on':''}" onclick="this.classList.toggle('on');PH.newCampaign.toggleNotify=this.classList.contains('on')"></button><span class="ph-toggle-label">Notificar admin ao primeiro clique</span></div>
      </div>
      <div style="display:flex;justify-content:space-between">
        <button class="ph-btn ph-btn-ghost" onclick="phRenderCampaignStep(3)">← Voltar</button>
        <button class="ph-btn ph-btn-primary" onclick="phLaunchCampaign()">🚀 Lançar Campanha</button>
      </div>`;
  }

  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">Nova Campanha de Phishing</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    ${stepperHTML}
    ${body}
  `, 'ph-modal ph-modal-lg');
}

window.phNCStep1Next = function() {
  PH.newCampaign.nome       = document.getElementById('ph-nc-nome')?.value||'';
  PH.newCampaign.desc       = document.getElementById('ph-nc-desc')?.value||'';
  PH.newCampaign.dataInicio = document.getElementById('ph-nc-inicio')?.value||'';
  PH.newCampaign.dataFim    = document.getElementById('ph-nc-fim')?.value||'';
  PH.newCampaign.senderName = document.getElementById('ph-nc-sname')?.value||'';
  PH.newCampaign.senderEmail= document.getElementById('ph-nc-semail')?.value||'';
  if (!PH.newCampaign.nome) { alert('Informe o nome da campanha.'); return; }
  phRenderCampaignStep(2);
};

window.phNCStep2Next = function() {
  if (!PH.newCampaign.template) { alert('Selecione um template.'); return; }
  phRenderCampaignStep(3);
};

window.phNCSelectTemplate = function(id) {
  PH.newCampaign.template = id;
  document.querySelectorAll('.ph-template-card').forEach(c=>{
    c.classList.toggle('selected', parseInt(c.dataset.tid)===id);
  });
};

window.phNCFilterTemplates = function(cat, btn) {
  document.querySelectorAll('.ph-filter-chips .ph-chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('ph-nc-template-grid');
  const items = cat==='Todos' ? PHISHING_MOCK.templates : PHISHING_MOCK.templates.filter(t=>t.cat===cat);
  grid.innerHTML = items.map(t=>phMiniTemplateCard(t)).join('');
};

window.phNCSelectGroup = function(id) {
  PH.newCampaign.grupo = id;
  const g = PHISHING_MOCK.grupos.find(x=>x.id===id)||PHISHING_MOCK.grupos[0];
  document.getElementById('ph-nc-group-preview').innerHTML = phNCGroupPreview(g);
};

function phMiniTemplateCard(t) {
  return `
  <div class="ph-template-card" data-tid="${t.id}" onclick="phNCSelectTemplate(${t.id})"
    style="${PH.newCampaign.template===t.id?'border-color:var(--ph-teal);box-shadow:0 0 0 2px rgba(0,212,255,0.25)':''}">
    <div class="ph-email-preview">
      <div class="ph-email-sender">De: ${t.sender} &lt;${t.email}&gt;</div>
      <div class="ph-email-subject">${t.assunto}</div>
      <div class="ph-email-body">${t.corpo.substring(0,100)}...</div>
    </div>
    <div class="ph-template-info">
      <div class="ph-template-name">${t.nome}</div>
      <div class="ph-template-meta">
        <span class="ph-badge ph-badge-draft" style="font-size:0.62rem">${t.cat}</span>
        ${diffBadge(t.diff)}
      </div>
    </div>
  </div>`;
}

function phNCGroupPreview(g) {
  const users = PHISHING_MOCK.usuarios.filter(u=>g.id==='all'||u.grupo===g.id).slice(0,5);
  return `
    <table class="ph-table">
      <thead><tr><th>Nome</th><th>E-mail</th><th>Departamento</th></tr></thead>
      <tbody>
        ${users.map(u=>`<tr><td style="font-weight:600">${u.nome}</td><td style="color:var(--ph-muted)">${u.email}</td><td>${u.dept}</td></tr>`).join('')}
        ${g.count>5?`<tr><td colspan="3" style="color:var(--ph-muted);font-size:0.78rem;text-align:center">+ ${g.count-5} outros usuários</td></tr>`:''}
      </tbody>
    </table>`;
}

window.phLaunchCampaign = function() {
  const g = PHISHING_MOCK.grupos.find(x=>x.id===PH.newCampaign.grupo)||PHISHING_MOCK.grupos[0];
  const t = PHISHING_MOCK.templates.find(x=>x.id===PH.newCampaign.template)||PHISHING_MOCK.templates[0];
  const newCamp = {
    id: Date.now(), nome: PH.newCampaign.nome||'Nova Campanha',
    status: 'Ativa', template: t?t.nome:'N/A',
    enviados: g.count, abertos: Math.floor(g.count*0.82),
    cliques: Math.floor(g.count*0.15), submeteu: Math.floor(g.count*0.05),
    reportou: Math.floor(g.count*0.12),
    data_inicio: PH.newCampaign.dataInicio||new Date().toISOString().split('T')[0],
    data_fim: PH.newCampaign.dataFim||'', grupo: g.nome
  };
  PHISHING_MOCK.campanhas.unshift(newCamp);
  phSaveTenantPool();
  phCloseModal();
  PH.tab = 'campanhas';
  phTab('campanhas');
  showToast && showToast('🚀 Campanha lançada com sucesso!','success');
};

// ── TEMPLATES ─────────────────────────────────────────────────
function renderPhTemplates() {
  return `
  <div class="ph-section-header">
    <div>
      <div class="ph-section-title">🎯 Biblioteca de Templates</div>
      <div style="font-size:0.82rem;color:var(--ph-muted);margin-top:3px">${PHISHING_MOCK.templates.length} templates disponíveis</div>
    </div>
    <button class="ph-btn ph-btn-primary" onclick="phOpenCreateTemplate()">+ Criar Template</button>
  </div>
  <div class="ph-filter-chips">
    ${['Todos','TI','Credenciais','Prêmio','Financeiro','RH','Fraude CEO','Urgência'].map((f,i)=>`<button class="ph-chip${i===0?' active':''}" onclick="phFilterTemplates('${f}',this)">${f}</button>`).join('')}
  </div>
  <div id="ph-template-grid" class="ph-grid-3">
    ${PHISHING_MOCK.templates.map(t=>renderTemplateCard(t)).join('')}
  </div>`;
}

function renderTemplateCard(t) {
  return `
  <div class="ph-template-card">
    <div class="ph-email-preview">
      <div class="ph-email-sender">De: ${t.sender} &lt;${t.email}&gt;</div>
      <div class="ph-email-subject">${t.assunto}</div>
      <div class="ph-email-body">${t.corpo.substring(0,120)}...</div>
    </div>
    <div class="ph-template-info">
      <div class="ph-template-name">${t.nome}</div>
      <div class="ph-template-meta" style="margin-bottom:12px">
        <span class="ph-badge ph-badge-active" style="font-size:0.62rem;background:rgba(124,58,237,0.12);color:#a78bfa">${t.cat}</span>
        ${diffBadge(t.diff)}
      </div>
      <div style="display:flex;gap:7px">
        <button class="ph-btn ph-btn-ghost ph-btn-sm" style="flex:1" onclick="phPreviewTemplate(${t.id})">👁 Prévia</button>
        <button class="ph-btn ph-btn-primary ph-btn-sm" style="flex:1" onclick="phUseTemplate(${t.id})">Usar</button>
      </div>
    </div>
  </div>`;
}

window.phFilterTemplates = function(cat, btn) {
  document.querySelectorAll('.ph-filter-chips .ph-chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('ph-template-grid');
  const items = cat==='Todos' ? PHISHING_MOCK.templates : PHISHING_MOCK.templates.filter(t=>t.cat===cat);
  grid.innerHTML = items.length ? items.map(t=>renderTemplateCard(t)).join('') : `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--ph-muted)">Nenhum template nesta categoria.</div>`;
};

window.phPreviewTemplate = function(id) {
  const t = PHISHING_MOCK.templates.find(x=>x.id===id);
  if (!t) return;
  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">Pré-visualização — ${t.nome}</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 280px;gap:16px">
      <!-- Email simulation -->
      <div style="background:#0d1117;border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden">
        <div style="background:#161b22;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.08);font-size:0.75rem;color:#8b949e">
          <div style="color:#58a6ff;font-weight:700">De: ${t.sender} &lt;${t.email}&gt;</div>
          <div style="margin-top:4px">Para: colaborador@suaempresa.com</div>
          <div style="margin-top:4px;color:#f8f8f2;font-weight:700">Assunto: ${t.assunto}</div>
        </div>
        <div style="padding:20px;font-size:0.88rem;line-height:1.75;color:#c9d1d9;white-space:pre-wrap">${t.corpo}</div>
        <div style="padding:12px 20px;border-top:1px solid rgba(255,255,255,0.08)">
          <div style="display:inline-block;background:#1f6feb;color:#fff;padding:10px 20px;border-radius:6px;font-size:0.84rem;font-weight:600;cursor:not-allowed;opacity:0.8">🔗 [Link Phishing Simulado]</div>
        </div>
      </div>
      <!-- IoC panel -->
      <div>
        <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--ph-red);margin-bottom:12px">🚩 Red Flags Identificados</div>
        ${t.iocs.map((ioc,i)=>`
          <div style="display:flex;gap:10px;padding:10px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:8px;margin-bottom:8px">
            <span style="color:var(--ph-red);font-weight:700;flex-shrink:0">${i+1}</span>
            <span style="font-size:0.80rem;color:#fca5a5">${ioc}</span>
          </div>`).join('')}
        ${diffBadge(t.diff)}
        <div style="margin-top:12px;font-size:0.75rem;color:var(--ph-muted)">Categoria: ${t.cat}</div>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phCloseModal()">Fechar</button>
      <button class="ph-btn ph-btn-primary" style="flex:1" onclick="phUseTemplate(${id});phCloseModal()">Usar este Template</button>
    </div>
  `, 'ph-modal ph-modal-xl');
};

window.phUseTemplate = function(id) {
  PH.newCampaign.template = id;
  phCloseModal();
  phOpenNewCampaign();
  setTimeout(()=>phRenderCampaignStep(2),100);
};

window.phOpenCreateTemplate = function() {
  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">+ Criar Template</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    <div class="ph-grid-2">
      <div class="ph-input-group" style="grid-column:1/-1">
        <label class="ph-label">Nome do Template *</label>
        <input class="ph-input" id="ph-nt-nome" placeholder="Ex: Alerta de Segurança Corporativa">
      </div>
      <div class="ph-input-group">
        <label class="ph-label">Categoria</label>
        <select class="ph-select" id="ph-nt-cat">
          ${['TI','Credenciais','Prêmio','Financeiro','RH','Fraude CEO','Urgência'].map(c=>`<option>${c}</option>`).join('')}
        </select>
      </div>
      <div class="ph-input-group">
        <label class="ph-label">Dificuldade</label>
        <select class="ph-select" id="ph-nt-diff">
          <option>Fácil</option><option>Médio</option><option>Difícil</option>
        </select>
      </div>
      <div class="ph-input-group">
        <label class="ph-label">Nome do Remetente</label>
        <input class="ph-input" id="ph-nt-sname" placeholder="Ex: TI Corporativo">
      </div>
      <div class="ph-input-group">
        <label class="ph-label">E-mail do Remetente</label>
        <input class="ph-input" id="ph-nt-semail" placeholder="Ex: ti@suporte-corp.com">
      </div>
      <div class="ph-input-group" style="grid-column:1/-1">
        <label class="ph-label">Assunto do E-mail</label>
        <input class="ph-input" id="ph-nt-assunto" placeholder="Linha de assunto do e-mail phishing">
      </div>
      <div class="ph-input-group" style="grid-column:1/-1">
        <label class="ph-label">Corpo do E-mail</label>
        <textarea class="ph-textarea" id="ph-nt-corpo" style="min-height:140px" placeholder="Conteúdo do e-mail de phishing simulado..."></textarea>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phCloseModal()">Cancelar</button>
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phSaveTemplate('draft')">Salvar Rascunho</button>
      <button class="ph-btn ph-btn-primary" style="flex:1" onclick="phSaveTemplate('publish')">Publicar Template</button>
    </div>
  `, 'ph-modal ph-modal-lg');
};

window.phSaveTemplate = function(mode) {
  const nome = document.getElementById('ph-nt-nome')?.value;
  if (!nome) { alert('Informe o nome do template.'); return; }
  PHISHING_MOCK.templates.push({
    id: Date.now(),
    nome, cat: document.getElementById('ph-nt-cat')?.value||'TI',
    diff: document.getElementById('ph-nt-diff')?.value||'Médio',
    sender: document.getElementById('ph-nt-sname')?.value||'TI',
    email: document.getElementById('ph-nt-semail')?.value||'ti@empresa.com',
    assunto: document.getElementById('ph-nt-assunto')?.value||'',
    corpo: document.getElementById('ph-nt-corpo')?.value||'',
    iocs: ['Template criado manualmente — adicione os red flags ao editar']
  });
  phCloseModal();
  phTab('templates');
  showToast && showToast(mode==='draft'?'Template salvo como rascunho.':'Template publicado!','success');
};

// ── ALVOS ─────────────────────────────────────────────────────
function renderPhAlvos() {
  const grupo = PHISHING_MOCK.grupos.find(g=>g.id===PH.selectedGroup)||PHISHING_MOCK.grupos[0];
  const users = PHISHING_MOCK.usuarios.filter(u=>grupo.id==='all'||u.grupo===grupo.id);
  return `
  <div class="ph-section-header">
    <div class="ph-section-title">👥 Gestão de Alvos</div>
    <div style="display:flex;gap:8px">
      <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phOpenAddUser()">+ Usuário</button>
      <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phOpenNewGroup()">+ Grupo</button>
      <button class="ph-btn ph-btn-primary ph-btn-sm" onclick="phExportUsers()">⬇ Exportar</button>
    </div>
  </div>
  <div class="ph-alvos-grid">
    <!-- Groups -->
    <div class="ph-group-list">
      <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ph-muted);margin-bottom:12px;padding:0 4px">Grupos</div>
      ${PHISHING_MOCK.grupos.map(g=>`
        <div class="ph-group-item${g.id===PH.selectedGroup?' active':''}" onclick="phSelectGroup('${g.id}')">
          <span class="ph-group-icon">${g.icon}</span>
          <span class="ph-group-name">${g.nome}</span>
          <span class="ph-group-count">${g.count}</span>
        </div>`).join('')}
    </div>
    <!-- Users -->
    <div class="ph-chart-card" style="padding:0;overflow:hidden">
      <div style="padding:16px 20px;border-bottom:1px solid var(--ph-border);display:flex;align-items:center;justify-content:space-between">
        <div>
          <span style="font-weight:700">${grupo.icon} ${grupo.nome}</span>
          <span style="color:var(--ph-muted);font-size:0.78rem;margin-left:8px">${users.length} usuários</span>
        </div>
        <input class="ph-input" id="ph-user-search" placeholder="Buscar usuário..." style="width:200px;padding:7px 12px" oninput="phSearchUsers(this.value,'${grupo.id}')">
      </div>
      <div style="overflow-x:auto">
      <table class="ph-table" id="ph-users-table">
        <thead><tr>
          <th>Nome</th><th>E-mail</th><th>Departamento</th><th>Risk Score</th><th>Campanhas</th><th>Cliques</th><th>Reportes</th>
        </tr></thead>
        <tbody>
          ${users.map(u=>phUserRow(u)).join('')}
        </tbody>
      </table>
      </div>
    </div>
  </div>`;
}

function phUserRow(u) {
  const rc = riskColor(u.riskScore);
  return `<tr>
    <td style="font-weight:600">${u.nome}</td>
    <td style="color:var(--ph-muted);font-size:0.78rem">${u.email}</td>
    <td>${u.dept}</td>
    <td>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:32px;height:32px;border-radius:50%;border:2px solid ${rc};display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:800;color:${rc}">${u.riskScore}</div>
        <span class="ph-badge ${riskBadgeClass(u.riskScore)}" style="font-size:0.62rem">${riskLabel(u.riskScore)}</span>
      </div>
    </td>
    <td>${u.campanhas}</td>
    <td style="color:var(--ph-red);font-weight:700">${u.cliques}</td>
    <td style="color:var(--ph-green);font-weight:700">${u.reportou}</td>
  </tr>`;
}

window.phSelectGroup = function(id) {
  PH.selectedGroup = id;
  phTab('alvos');
};

window.phSearchUsers = function(q, gid) {
  const grupo = PHISHING_MOCK.grupos.find(g=>g.id===gid)||PHISHING_MOCK.grupos[0];
  const users = PHISHING_MOCK.usuarios.filter(u=>(grupo.id==='all'||u.grupo===grupo.id) && (u.nome.toLowerCase().includes(q.toLowerCase())||u.email.toLowerCase().includes(q.toLowerCase())));
  const tbody = document.querySelector('#ph-users-table tbody');
  if (tbody) tbody.innerHTML = users.map(u=>phUserRow(u)).join('');
};

window.phOpenAddUser = function() {
  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">+ Adicionar Usuário</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    <div class="ph-grid-2">
      <div class="ph-input-group"><label class="ph-label">Nome Completo *</label><input class="ph-input" id="ph-au-nome" placeholder="João Silva"></div>
      <div class="ph-input-group"><label class="ph-label">E-mail Corporativo *</label><input class="ph-input" id="ph-au-email" type="email" placeholder="joao@empresa.com"></div>
      <div class="ph-input-group"><label class="ph-label">Departamento</label>
        <select class="ph-select" id="ph-au-dept">
          ${PHISHING_MOCK.grupos.filter(g=>g.id!=='all').map(g=>`<option>${g.nome}</option>`).join('')}
        </select>
      </div>
      <div class="ph-input-group"><label class="ph-label">Cargo</label><input class="ph-input" id="ph-au-cargo" placeholder="Ex: Analista Sr."></div>
      <div class="ph-input-group" style="grid-column:1/-1"><label class="ph-label">Grupo(s)</label>
        <select class="ph-select" id="ph-au-grupo">
          ${PHISHING_MOCK.grupos.filter(g=>g.id!=='all').map(g=>`<option value="${g.id}">${g.icon} ${g.nome}</option>`).join('')}
        </select>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phCloseModal()">Cancelar</button>
      <button class="ph-btn ph-btn-primary" style="flex:1" onclick="phSaveUser()">Adicionar Usuário</button>
    </div>
  `);
};

window.phSaveUser = function() {
  const nome = document.getElementById('ph-au-nome')?.value;
  const email = document.getElementById('ph-au-email')?.value;
  if (!nome||!email) { alert('Nome e e-mail são obrigatórios.'); return; }
  const grupo = document.getElementById('ph-au-grupo')?.value||'all';
  const dept = document.getElementById('ph-au-dept')?.value||'TI';
  PHISHING_MOCK.usuarios.push({ id:Date.now(), nome, email, dept, cargo:document.getElementById('ph-au-cargo')?.value||'', riskScore:0, campanhas:0, cliques:0, reportou:0, grupo });
  const g = PHISHING_MOCK.grupos.find(x=>x.id===grupo);
  if (g) g.count++;
  PHISHING_MOCK.grupos[0].count++;
  phCloseModal();
  phTab('alvos');
  showToast && showToast('Usuário adicionado com sucesso!','success');
};

window.phOpenNewGroup = function() {
  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">+ Novo Grupo</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    <div class="ph-input-group"><label class="ph-label">Nome do Grupo *</label><input class="ph-input" id="ph-ng-nome" placeholder="Ex: Financeiro SP"></div>
    <div class="ph-input-group"><label class="ph-label">Departamento</label>
      <select class="ph-select" id="ph-ng-dept">
        ${['Financeiro','TI','Comercial','RH','Marketing','Diretoria','Jurídico','Operações'].map(d=>`<option>${d}</option>`).join('')}
      </select>
    </div>
    <div class="ph-input-group"><label class="ph-label">Descrição</label><textarea class="ph-textarea" id="ph-ng-desc" placeholder="Descreva o grupo..."></textarea></div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phCloseModal()">Cancelar</button>
      <button class="ph-btn ph-btn-primary" style="flex:1" onclick="phSaveGroup()">Criar Grupo</button>
    </div>
  `);
};

window.phSaveGroup = function() {
  const nome = document.getElementById('ph-ng-nome')?.value;
  if (!nome) { alert('Informe o nome do grupo.'); return; }
  const icons = {'Financeiro':'💰','TI':'💻','Comercial':'📞','RH':'👤','Marketing':'📣','Diretoria':'💼','Jurídico':'⚖️','Operações':'⚙️'};
  const dept = document.getElementById('ph-ng-dept')?.value||'TI';
  PHISHING_MOCK.grupos.push({ id:'grp'+Date.now(), nome, icon: icons[dept]||'👥', count:0 });
  phCloseModal();
  phTab('alvos');
  showToast && showToast('Grupo criado!','success');
};

window.phExportUsers = function() {
  showToast && showToast('Exportando CSV…','info');
  setTimeout(()=>showToast && showToast('CSV exportado com sucesso!','success'),1500);
};

// ── RELATÓRIOS ────────────────────────────────────────────────
function renderPhRelatorios() {
  const c = PHISHING_MOCK.campanhas[0];

  // Build dept stats from real users
  const deptAgg = {};
  PHISHING_MOCK.usuarios.forEach(u => {
    const d = u.dept || 'Outros';
    if (!deptAgg[d]) deptAgg[d] = { name:d, members:0, totalCliques:0, totalReportes:0, totalCamps:0, totalRisk:0 };
    deptAgg[d].members++;
    deptAgg[d].totalCliques   += u.cliques;
    deptAgg[d].totalReportes  += u.reportou;
    deptAgg[d].totalCamps     += u.campanhas;
    deptAgg[d].totalRisk      += u.riskScore;
  });
  const depts = Object.values(deptAgg).map(d => ({
    name:    d.name,
    members: d.members,
    clique:  d.totalCamps>0 ? Math.round(d.totalCliques/d.totalCamps*100) : 0,
    reporte: d.totalCamps>0 ? Math.round(d.totalReportes/d.totalCamps*100) : 0,
    risk:    d.members>0    ? Math.round(d.totalRisk/d.members) : 0,
  }));

  const topRisk = [...PHISHING_MOCK.usuarios].sort((a,b)=>b.riskScore-a.riskScore).slice(0,10);

  return `
  <!-- Filters -->
  <div style="background:var(--ph-card);border:1px solid var(--ph-border);border-radius:14px;padding:18px;margin-bottom:20px">
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end">
      <div class="ph-input-group" style="margin:0;flex:1;min-width:180px">
        <label class="ph-label">Campanha</label>
        <select class="ph-select" id="ph-r-camp">
          <option>Todas as campanhas</option>
          ${PHISHING_MOCK.campanhas.map(c=>`<option>${c.nome}</option>`).join('')}
        </select>
      </div>
      <div class="ph-input-group" style="margin:0;flex:1;min-width:150px">
        <label class="ph-label">Período</label>
        <input class="ph-input" type="date" id="ph-r-from">
      </div>
      <div class="ph-input-group" style="margin:0;flex:1;min-width:150px">
        <label class="ph-label">&nbsp;</label>
        <input class="ph-input" type="date" id="ph-r-to">
      </div>
      <div class="ph-input-group" style="margin:0;flex:1;min-width:160px">
        <label class="ph-label">Departamento</label>
        <select class="ph-select">
          <option>Todos</option>
          ${PHISHING_MOCK.grupos.filter(g=>g.id!=='all').map(g=>`<option>${g.nome}</option>`).join('')}
        </select>
      </div>
      <button class="ph-btn ph-btn-primary" onclick="phApplyReportFilters()">Aplicar Filtros</button>
    </div>
  </div>

  <!-- Export buttons -->
  <div style="display:flex;gap:10px;margin-bottom:20px">
    <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phExportPDF()">📄 Exportar PDF</button>
    <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phExportCSV()">📊 Exportar CSV</button>
    <button class="ph-btn ph-btn-ghost ph-btn-sm" onclick="phEmailReport()">📧 Enviar por E-mail</button>
  </div>

  <!-- Funnel -->
  <div class="ph-chart-card" style="margin-bottom:16px">
    <div class="ph-chart-title">📊 Funil de Engajamento — Acumulado</div>
    <div class="ph-funnel" style="margin-top:8px">
      ${(()=>{
        const tot = PHISHING_MOCK.campanhas.reduce((s,c)=>({env:s.env+c.enviados,ab:s.ab+c.abertos,cl:s.cl+c.cliques,sb:s.sb+c.submeteu,rp:s.rp+c.reportou}),{env:0,ab:0,cl:0,sb:0,rp:0});
        return [
          ['Enviados',    tot.env,  '#00d4ff', 100],
          ['Abriram',     tot.ab,   '#7c3aed', Math.round(tot.ab/tot.env*100)],
          ['Clicaram',    tot.cl,   '#ef4444', Math.round(tot.cl/tot.env*100)],
          ['Submeteram',  tot.sb,   '#f59e0b', Math.round(tot.sb/tot.env*100)],
          ['Reportaram',  tot.rp,   '#22c55e', Math.round(tot.rp/tot.env*100)],
        ].map(([label,val,color,pct])=>`
          <div class="ph-funnel-step">
            <div class="ph-funnel-label">${label}</div>
            <div class="ph-funnel-bar-wrap">
              <div class="ph-funnel-bar" style="width:${pct}%;background:${color}18;border-left:3px solid ${color};color:${color}">
                ${val.toLocaleString()}
              </div>
            </div>
            <div class="ph-funnel-pct" style="color:${color}">${pct}%</div>
          </div>`).join('');
      })()}
    </div>
  </div>

  <div class="ph-charts-grid">
    <!-- Department ranking -->
    <div class="ph-chart-card">
      <div class="ph-chart-title">🏢 Ranking de Departamentos por Risco</div>
      <table class="ph-table">
        <thead><tr>
          <th>Departamento</th><th>Membros</th><th>Clique%</th><th>Reporte%</th><th>Risk</th>
        </tr></thead>
        <tbody>
          ${depts.sort((a,b)=>b.risk-a.risk).map(d=>`<tr>
            <td style="font-weight:600">${d.name}</td>
            <td>${d.members}</td>
            <td>
              <div style="display:flex;align-items:center;gap:8px">
                <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;min-width:60px"><div style="width:${d.clique}%;height:100%;background:var(--ph-red);border-radius:2px"></div></div>
                <span style="color:var(--ph-red);font-weight:700;font-size:0.80rem">${d.clique}%</span>
              </div>
            </td>
            <td>
              <div style="display:flex;align-items:center;gap:8px">
                <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;min-width:60px"><div style="width:${d.reporte}%;height:100%;background:var(--ph-green);border-radius:2px"></div></div>
                <span style="color:var(--ph-green);font-weight:700;font-size:0.80rem">${d.reporte}%</span>
              </div>
            </td>
            <td><span class="ph-badge ${riskBadgeClass(d.risk)}">${d.risk}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <!-- Timeline chart -->
    <div class="ph-chart-card">
      <div class="ph-chart-title">⏱ Linha do Tempo de Cliques</div>
      <div class="ph-canvas-wrap" style="height:220px">
        <canvas id="ph-chart-timeline"></canvas>
      </div>
    </div>
  </div>

  <!-- Top 10 risk users -->
  <div class="ph-chart-card" style="margin-top:16px">
    <div class="ph-chart-title">🔴 Top 10 Usuários de Maior Risco</div>
    <div style="overflow-x:auto">
    <table class="ph-table">
      <thead><tr>
        <th>Usuário</th><th>Departamento</th><th>Campanhas</th><th>Cliques</th><th>Reportes</th><th>Risk Score</th>
      </tr></thead>
      <tbody>
        ${topRisk.map((u,i)=>`<tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:26px;height:26px;border-radius:50%;background:rgba(239,68,68,0.15);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:800;color:var(--ph-red)">${i+1}</div>
              <div>
                <div style="font-weight:600">${u.nome}</div>
                <div style="font-size:0.72rem;color:var(--ph-muted)">${u.email}</div>
              </div>
            </div>
          </td>
          <td>${u.dept}</td>
          <td>${u.campanhas}</td>
          <td style="color:var(--ph-red);font-weight:700">${u.cliques}</td>
          <td style="color:var(--ph-green);font-weight:700">${u.reportou}</td>
          <td>
            <div style="display:flex;align-items:center;gap:8px">
              <div style="font-size:1rem;font-weight:800;color:${riskColor(u.riskScore)}">${u.riskScore}</div>
              <span class="ph-badge ${riskBadgeClass(u.riskScore)}" style="font-size:0.60rem">${riskLabel(u.riskScore)}</span>
            </div>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>`;
}

function initPhReportCharts() {
  if (!window.Chart) return;
  if (PH.charts.timeline) { try { PH.charts.timeline.destroy(); } catch(e){} PH.charts.timeline = null; }
  const ctx = document.getElementById('ph-chart-timeline');
  if (!ctx) return;
  /* Canvas dimensions handled by .ph-canvas-wrap CSS */
  PH.charts.timeline = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['08h','09h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h'],
      datasets: [{
        label: 'Cliques por Hora',
        data:  [2,8,18,24,12,6,22,19,14,8,3,1],
        backgroundColor: 'rgba(239,68,68,0.65)',
        borderColor: '#ef4444', borderWidth: 1, borderRadius: 5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 600 },
      transitions: { resize: { animation: { duration: 0 } } },
      plugins: { legend: { display: false }, tooltip: { animation: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280' } }
      }
    }
  });
  requestAnimationFrame(() => { if (PH.charts.timeline) PH.charts.timeline.resize(); });
}

window.phApplyReportFilters = function() {
  const campSel  = document.getElementById('ph-r-camp')?.value || '';
  const fromDate = document.getElementById('ph-r-from')?.value || '';
  const toDate   = document.getElementById('ph-r-to')?.value   || '';
  let filtered = PHISHING_MOCK.campanhas;
  if (campSel && campSel !== 'Todas as campanhas') {
    filtered = filtered.filter(c => c.nome === campSel);
  }
  const count = filtered.length;
  const clicks = filtered.reduce((s,c) => s + (c.cliques||0), 0);
  const sent   = filtered.reduce((s,c) => s + (c.enviados||0), 0);
  const rate   = sent ? Math.round(clicks/sent*100) : 0;
  showToast&&showToast(`✅ Filtros aplicados: ${count} campanha(s) · ${sent} envios · ${rate}% cliques`, 'success');
};

window.phExportPDF = function() {
  showToast&&showToast('Gerando relatório PDF…','info');
  setTimeout(()=>showToast&&showToast('Relatório PDF gerado!','success'),2000);
};
window.phExportCSV = function() {
  const camps = PHISHING_MOCK.campanhas;
  if (!camps || !camps.length) { showToast&&showToast('Nenhuma campanha para exportar','error'); return; }
  const header = ['Campanha','Template','Status','Enviados','Cliques','Taxa Clique (%)','Reportou','Taxa Reporte (%)','Período'];
  const rows = camps.map(c => [
    c.nome, c.template || '', c.status,
    c.enviados, c.cliques,
    Math.round((c.cliques / Math.max(c.enviados,1)) * 100),
    c.reportou,
    Math.round((c.reportou / Math.max(c.enviados,1)) * 100),
    c.periodo || ''
  ].map(v => `"${String(v||'').replace(/"/g,'""')}"`).join(','));
  const csv = [header.join(','), ...rows].join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `phishing_campanhas_${new Date().toISOString().slice(0,10)}.csv`;
  a.click(); URL.revokeObjectURL(url);
  showToast&&showToast(`✅ ${camps.length} campanhas exportadas com sucesso!`, 'success');
};
window.phEmailReport = function() {
  phShowModal(`
    <div class="ph-modal-header">
      <span class="ph-modal-title">📧 Enviar Relatório por E-mail</span>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>
    <div class="ph-input-group"><label class="ph-label">Destinatários</label><input class="ph-input" placeholder="email@empresa.com, email2@empresa.com"></div>
    <div class="ph-input-group"><label class="ph-label">Assunto</label><input class="ph-input" value="Relatório de Phishing — Brandvakt Academy"></div>
    <div class="ph-input-group"><label class="ph-label">Mensagem</label><textarea class="ph-textarea">Segue o relatório consolidado de phishing awareness.</textarea></div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="ph-btn ph-btn-ghost" style="flex:1" onclick="phCloseModal()">Cancelar</button>
      <button class="ph-btn ph-btn-primary" style="flex:1" onclick="phCloseModal();showToast&&showToast('E-mail enviado!','success')">Enviar</button>
    </div>
  `);
};

// ── LANDING PAGE DE CONSCIENTIZAÇÃO ───────────────────────────
window.phShowAwareness = function(templateId) {
  const t = PHISHING_MOCK.templates.find(x=>x.id===templateId)||PHISHING_MOCK.templates[0];
  const el = document.createElement('div');
  el.className = 'ph-awareness-page';
  el.id = 'ph-awareness-overlay';
  el.innerHTML = `
    <div class="ph-awareness-card">
      <div class="ph-awareness-icon">⚠️</div>
      <div class="ph-awareness-title">ATENÇÃO — SIMULAÇÃO DE PHISHING</div>
      <div class="ph-awareness-sub">
        Você acabou de clicar em um link de phishing simulado<br>
        pela sua empresa como parte do programa de treinamento.
      </div>
      <div class="ph-awareness-flags">
        <div style="font-size:0.80rem;font-weight:700;color:#f59e0b;margin-bottom:10px">O que você deveria ter percebido:</div>
        ${t.iocs.map(ioc=>`<div class="ph-awareness-flag">⚠️ ${ioc}</div>`).join('')}
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
        <button class="ph-btn" style="background:#f59e0b;color:#000;font-weight:700" onclick="alert('Módulo de conscientização em preparação!')">▶ Ver Módulo de Conscientização</button>
        <button class="ph-btn ph-btn-ghost" style="border-color:rgba(245,158,11,0.4)" onclick="document.getElementById('ph-awareness-overlay').remove();showToast&&showToast('Reportado com sucesso! +5 pts.','success')">✓ Entendi — Marcar como Reportado</button>
      </div>
    </div>`;
  document.body.appendChild(el);
};

// ══════════════════════════════════════════════════════════════
//  🤖 AI CAMPAIGN GENERATOR
// ══════════════════════════════════════════════════════════════

let _phAiCampaign = null;

// ── Step 1: Loading animation ─────────────────────────────────
window.phAiGenerateCampaign = function() {
  const steps = [
    { pct: 15, msg: '🔍 Carregando perfil de Human Risk da empresa ativa...' },
    { pct: 30, msg: '📊 Analisando scores de risco por usuário e departamento...' },
    { pct: 48, msg: '🎯 Identificando comportamentos de risco predominantes...' },
    { pct: 64, msg: '✉️ Selecionando template e público-alvo ideais...' },
    { pct: 80, msg: '🧠 Gerando campanha personalizada com IA (Claude Sonnet)...' },
    { pct: 95, msg: '📋 Definindo KPIs, cronograma e mensagens-chave...' },
    { pct: 100, msg: '✅ Campanha gerada com sucesso!' },
  ];

  if (!document.getElementById('ph-ai-spin-css')) {
    const s = document.createElement('style');
    s.id = 'ph-ai-spin-css';
    s.textContent = `
      @keyframes phAiSpin  { to { transform:rotate(360deg); } }
      @keyframes phAiPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.88)} }
      @keyframes phAiDot   { 0%,80%,100%{transform:scale(0);opacity:0} 40%{transform:scale(1);opacity:1} }
      @keyframes phAiFade  { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
      .ph-ai-spinner{width:56px;height:56px;border-radius:50%;border:3px solid rgba(139,92,246,.18);border-top-color:#8b5cf6;animation:phAiSpin .9s linear infinite;}
      .ph-ai-dot{width:7px;height:7px;border-radius:50%;background:#8b5cf6;display:inline-block;animation:phAiDot 1.4s ease-in-out infinite;}
      .ph-ai-dot:nth-child(2){animation-delay:.16s}.ph-ai-dot:nth-child(3){animation-delay:.32s}
      .ph-ai-log-row{animation:phAiFade .3s ease;}
    `;
    document.head.appendChild(s);
  }

  phShowModal(`
    <div style="text-align:center;padding:14px 0 10px;">
      <div style="position:relative;width:80px;height:80px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
        <div class="ph-ai-spinner" style="position:absolute;inset:0;"></div>
        <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#6366f1);display:flex;align-items:center;justify-content:center;font-size:1.5rem;animation:phAiPulse 2s ease-in-out infinite;">🤖</div>
      </div>
      <div style="font-weight:800;font-size:1.08rem;margin-bottom:6px;">Gerando sua campanha com IA</div>
      <div style="font-size:0.80rem;color:#6b7280;margin-bottom:8px;">Isso pode levar alguns instantes.</div>
      <div style="margin-bottom:20px;display:flex;justify-content:center;gap:6px;">
        <div class="ph-ai-dot"></div><div class="ph-ai-dot"></div><div class="ph-ai-dot"></div>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:6px;overflow:hidden;margin-bottom:6px;">
        <div id="ph-ai-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#8b5cf6,#00d4ff);border-radius:99px;transition:width .55s ease;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:18px;">
        <div id="ph-ai-msg" style="font-size:0.74rem;color:#94a3b8;text-align:left;flex:1;">Iniciando análise...</div>
        <div id="ph-ai-pct" style="font-size:0.74rem;font-weight:700;color:#8b5cf6;margin-left:10px;">0%</div>
      </div>
      <div id="ph-ai-log" style="text-align:left;display:flex;flex-direction:column;gap:5px;max-height:150px;overflow:hidden;"></div>
      <div style="margin-top:16px;padding:10px 14px;background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.15);border-radius:9px;font-size:0.72rem;color:#94a3b8;line-height:1.55;">
        🧠 A IA analisa scores de risco, comportamentos, departamentos e histórico de incidentes para criar uma campanha de conscientização totalmente personalizada.
      </div>
    </div>
  `);

  let i = 0;
  function tick() {
    const bar = document.getElementById('ph-ai-bar');
    const msg = document.getElementById('ph-ai-msg');
    const pct = document.getElementById('ph-ai-pct');
    const log = document.getElementById('ph-ai-log');
    if (i > 0) {
      const prev = steps[i-1];
      const isFinal = i === steps.length;
      if (log) {
        const row = document.createElement('div');
        row.className = 'ph-ai-log-row';
        row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:5px 10px;border-radius:7px;background:rgba(255,255,255,.03);font-size:0.72rem;';
        row.innerHTML = isFinal
          ? `<span style="color:#22c55e;flex-shrink:0;">✅</span><span style="color:#22c55e;font-weight:600;">${prev.msg}</span>`
          : `<span style="color:#8b5cf6;flex-shrink:0;">✓</span><span style="color:#94a3b8;">${prev.msg}</span>`;
        log.appendChild(row);
        log.scrollTop = log.scrollHeight;
      }
    }
    if (i >= steps.length) { _phAiCampaign = phAiBuildCampaign(); phAiShowReview(); return; }
    const s = steps[i++];
    if (bar) bar.style.width = s.pct + '%';
    if (pct) pct.textContent = s.pct + '%';
    if (msg) msg.textContent = s.msg;
    setTimeout(tick, 350);
  }
  setTimeout(tick, 200);
};

// ── Step 2: Build campaign data from live HRM + tenant ────────
function phAiBuildCampaign() {
  const tenantUsers = (typeof getActiveTenantUsers === 'function') ? getActiveTenantUsers() : [];
  const tenant = (typeof APP !== 'undefined' && APP.tenants)
    ? (APP.tenants.find(t => t.active) || {}).name || 'Empresa'
    : 'Empresa';
  const total = tenantUsers.length || 1;

  // ── 1. HRM enrichment (tenant-validated by email) ──────────
  const hrmByEmail = {};
  if (typeof HRM_DATA !== 'undefined' && Array.isArray(HRM_DATA.users)) {
    const emails = new Set(tenantUsers.map(u => (u.email||'').toLowerCase()));
    HRM_DATA.users.forEach(h => { const e=(h.email||'').toLowerCase(); if(emails.has(e)) hrmByEmail[e]=h; });
  }
  const riskMap = { high:75, med:45, low:18 };
  const enriched = tenantUsers.map(u => {
    const h = hrmByEmail[(u.email||'').toLowerCase()];
    const score    = h ? (h.score    ?? riskMap[u.risk] ?? 35) : (u.riskScore ?? u.score ?? riskMap[u.risk] ?? 35);
    const phScore  = h ? (h.phishing ?? 50) : (u.risk==='high'?72:u.risk==='med'?40:18);
    const trScore  = h ? (h.training ?? 50) : (u.risk==='high'?35:u.risk==='med'?55:80);
    const pwScore  = h ? (h.password ?? 50) : (u.risk==='high'?40:u.risk==='med'?60:85);
    return { ...u, score, phScore, trScore, pwScore, dept: u.dept||u.department||'Geral' };
  });

  // ── 2. Aggregate stats ──────────────────────────────────────
  const highRisk    = enriched.filter(u => u.score > 60);
  const medRisk     = enriched.filter(u => u.score > 30 && u.score <= 60);
  const lowRisk     = enriched.filter(u => u.score <= 30);
  const avgScore    = Math.round(enriched.reduce((s,u) => s+u.score,   0) / total);
  const avgPhScore  = Math.round(enriched.reduce((s,u) => s+u.phScore, 0) / total);
  const avgTrScore  = Math.round(enriched.reduce((s,u) => s+u.trScore, 0) / total);
  const avgPwScore  = Math.round(enriched.reduce((s,u) => s+u.pwScore, 0) / total);

  // ── 3. Phishing campaign history (clicks) ──────────────────
  const camps = (typeof PHISHING_MOCK !== 'undefined' && PHISHING_MOCK.campanhas) ? PHISHING_MOCK.campanhas : [];
  const concluded = camps.filter(c => c.status === 'Concluída');
  const totalSent   = concluded.reduce((s,c) => s+(c.enviados||0), 0);
  const totalClicks = concluded.reduce((s,c) => s+(c.cliques||0), 0);
  const totalReport = concluded.reduce((s,c) => s+(c.reportou||0), 0);
  const clickRate   = totalSent > 0 ? Math.round(totalClicks/totalSent*100) : avgPhScore;
  const reportRate  = totalSent > 0 ? Math.round(totalReport/totalSent*100) : 12;
  const campCount   = concluded.length;

  // Dept risk map
  const deptMap = {};
  enriched.forEach(u => {
    if (!deptMap[u.dept]) deptMap[u.dept] = { score:0, count:0, phScore:0 };
    deptMap[u.dept].score   += u.score;
    deptMap[u.dept].phScore += u.phScore;
    deptMap[u.dept].count++;
  });
  const topDepts = Object.entries(deptMap)
    .map(([n,v]) => ({ name:n, avg: Math.round(v.score/v.count), phAvg: Math.round(v.phScore/v.count) }))
    .sort((a,b) => b.avg-a.avg).slice(0,3);
  const topDeptStr = topDepts.map(d=>d.name).join(' · ');

  const riskLevel = avgScore > 60 ? 'Crítico' : avgScore > 40 ? 'Elevado' : 'Moderado';
  const riskColor = avgScore > 60 ? '#ef4444' : avgScore > 40 ? '#f59e0b' : '#22c55e';

  const today = new Date();
  const fmt = d => d.toLocaleDateString('pt-BR');
  const addDays = n => { const d=new Date(today); d.setDate(d.getDate()+n); return fmt(d); };

  const campName = `${today.toLocaleDateString('pt-BR',{month:'long'}).replace(/^\w/,c=>c.toUpperCase())} — Conscientização ${riskLevel}`;
  const grupo = highRisk.length > 0 ? topDeptStr || 'Todos os Usuários' : 'Todos os Usuários';

  // ── 4. Library catalog ─────────────────────────────────────
  const catalog = [
    { id:1,  title:'Phishing & Engenharia Social', category:'Cybersecurity', duration:'45 min', level:'Essencial',     icon:'🎣',  status:'published', mandatory:true  },
    { id:2,  title:'Senhas Seguras e MFA',          category:'Cybersecurity', duration:'30 min', level:'Essencial',     icon:'🔑',  status:'published', mandatory:true  },
    { id:3,  title:'Home Office Seguro',            category:'Cybersecurity', duration:'40 min', level:'Intermediário', icon:'🏠',  status:'published', mandatory:false },
    { id:4,  title:'Uso Seguro de IA Generativa',  category:'IA',            duration:'35 min', level:'Intermediário', icon:'🤖',  status:'published', mandatory:false },
    { id:5,  title:'Cloud Security Awareness',     category:'Cybersecurity', duration:'50 min', level:'Avançado',      icon:'☁️', status:'published', mandatory:false },
    { id:6,  title:'Resposta a Incidentes',        category:'Cybersecurity', duration:'60 min', level:'Avançado',      icon:'🚨',  status:'draft',     mandatory:false },
    { id:7,  title:'LGPD na Prática',              category:'Privacidade',   duration:'60 min', level:'Essencial',     icon:'🔒',  status:'published', mandatory:true  },
    { id:10, title:'Anticorrupção e Antissuborno', category:'Compliance',    duration:'50 min', level:'Essencial',     icon:'🚫',  status:'published', mandatory:true  },
    { id:11, title:'Canal de Denúncias',           category:'Compliance',    duration:'25 min', level:'Essencial',     icon:'📢',  status:'published', mandatory:true  },
    { id:12, title:'Assédio Moral e Sexual',       category:'Compliance',    duration:'40 min', level:'Essencial',     icon:'🤝',  status:'published', mandatory:true  },
  ];

  // ── 5. Training recommendations — integrated HRM + Phishing ─
  // Each recommendation carries: indicator source, trigger value, rationale
  const rec = [];

  // [A] Phishing & Engenharia Social — sempre, reforçado por clickRate alto
  const phClick_trigger = clickRate > 20 ? `Taxa de clique em phishing de ${clickRate}% (acima do limiar de 20%)` : `Indicador base de conscientização`;
  const phHRM_trigger   = `Score de Phishing HRM médio: ${avgPhScore}/100`;
  rec.push({
    ...catalog.find(c=>c.id===1),
    prioridade: clickRate > 20 || avgPhScore > 55 ? '🔴 Obrigatório' : '🟡 Recomendado',
    grupo: 'Todos os usuários',
    prazo: addDays(14),
    indicadores: [
      { fonte:'📧 Cliques em Phishing', valor: `${clickRate}%`, status: clickRate>20?'crítico':clickRate>10?'atenção':'ok' },
      { fonte:'🧠 Score HRM — Phishing', valor: `${avgPhScore}/100`, status: avgPhScore>60?'crítico':avgPhScore>40?'atenção':'ok' },
    ],
    raciocinio: `${phClick_trigger}. ${phHRM_trigger}. Treinamento de reconhecimento de phishing é a contramedida direta para esses dois indicadores.`,
  });

  // [B] Senhas Seguras e MFA — se pwScore baixo ou clickRate alto (credenciais em risco)
  if (avgPwScore < 70 || clickRate > 15) {
    rec.push({
      ...catalog.find(c=>c.id===2),
      prioridade: avgPwScore < 50 || clickRate > 25 ? '🔴 Obrigatório' : '🟡 Recomendado',
      grupo: 'Todos os usuários',
      prazo: addDays(21),
      indicadores: [
        { fonte:'🔑 Score HRM — Senhas/MFA', valor: `${avgPwScore}/100`, status: avgPwScore<50?'crítico':avgPwScore<70?'atenção':'ok' },
        { fonte:'📧 Cliques em Phishing', valor: `${clickRate}%`, status: clickRate>25?'crítico':clickRate>15?'atenção':'ok' },
      ],
      raciocinio: `Score de gestão de senhas de ${avgPwScore}/100 indica vulnerabilidade a credential stuffing. Uma taxa de clique de ${clickRate}% significa que usuários que clicam em links falsos provavelmente também inserem credenciais nessas páginas.`,
    });
  }

  // [C] Resposta a Incidentes — se grupo de alto risco expressivo
  if (highRisk.length > 0 && highRisk.length/total >= 0.15) {
    rec.push({
      ...catalog.find(c=>c.id===6),
      prioridade: highRisk.length/total >= 0.3 ? '🔴 Obrigatório' : '🟡 Recomendado',
      grupo: topDeptStr || 'Usuários de Alto Risco',
      prazo: addDays(30),
      indicadores: [
        { fonte:'🧠 Score HRM — Alto Risco', valor: `${highRisk.length} usuários (${Math.round(highRisk.length/total*100)}%)`, status: highRisk.length/total>=0.3?'crítico':'atenção' },
        { fonte:'📢 Taxa de Reporte', valor: `${reportRate}%`, status: reportRate<20?'crítico':reportRate<35?'atenção':'ok' },
      ],
      raciocinio: `${highRisk.length} usuários (${Math.round(highRisk.length/total*100)}% do total) estão no grupo de alto risco. Uma taxa de reporte de apenas ${reportRate}% indica que a maioria não sabe como reagir a um incidente real — o treinamento de resposta é essencial.`,
    });
  }

  // [D] Home Office Seguro — se score HRM geral elevado (superfície ampliada)
  if (avgScore > 35) {
    rec.push({
      ...catalog.find(c=>c.id===3),
      prioridade: '🟡 Recomendado',
      grupo: 'Todos os usuários',
      prazo: addDays(35),
      indicadores: [
        { fonte:'🧠 Score HRM Médio', valor: `${avgScore}/100`, status: avgScore>60?'crítico':avgScore>40?'atenção':'ok' },
        { fonte:'📧 Campanhas Anteriores', valor: `${campCount} campanha(s) concluída(s)`, status: campCount===0?'atenção':'ok' },
      ],
      raciocinio: `Score HRM médio de ${avgScore}/100 indica hábitos de segurança inconsistentes. Colaboradores em home office operam fora do perímetro corporativo — roteadores domésticos, Wi-Fi compartilhado e dispositivos pessoais ampliam a superfície de ataque.`,
    });
  }

  // [E] LGPD — se RH/Jurídico/Financeiro nos top depts
  if (topDepts.some(d=>/(rh|jur|legal|financ|human)/i.test(d.name))) {
    rec.push({
      ...catalog.find(c=>c.id===7),
      prioridade: '🟡 Recomendado',
      grupo: topDepts.filter(d=>/(rh|jur|legal|financ|human)/i.test(d.name)).map(d=>d.name).join(' · ') || topDeptStr,
      prazo: addDays(45),
      indicadores: [
        { fonte:'🏢 Departamentos Prioritários', valor: topDeptStr, status:'atenção' },
        { fonte:'🧠 Score HRM — Depts RH/Jurídico', valor: `Média ${topDepts[0]?.avg||avgScore}/100`, status: (topDepts[0]?.avg||avgScore)>50?'atenção':'ok' },
      ],
      raciocinio: `Departamentos de ${topDeptStr} lidam com dados pessoais sensíveis e têm obrigações diretas sob a LGPD (Lei 13.709/2018). O nível de risco elevado nesses departamentos indica que colaboradores podem não conhecer suas obrigações legais de proteção de dados.`,
    });
  }

  // ── 6. Content gaps ────────────────────────────────────────
  const lacunas = [];
  if (clickRate > 25 || avgPhScore > 65)
    lacunas.push({ icon:'🎭', titulo:'CEO Fraud & BEC Awareness', categoria:'Cybersecurity', nivel:'Avançado', duracao:'40 min',
      motivo:`Taxa de clique de ${clickRate}% e score de phishing de ${avgPhScore}/100 indicam vulnerabilidade a ataques avançados. Business Email Compromise (BEC) é o vetor de maior prejuízo financeiro e não possui treinamento dedicado na biblioteca.`, urgencia:'🔴 Alta' });
  if (avgScore > 35)
    lacunas.push({ icon:'📱', titulo:'Segurança em Dispositivos Móveis', categoria:'Cybersecurity', nivel:'Intermediário', duracao:'30 min',
      motivo:`Colaboradores acessam e-mail e sistemas corporativos por smartphones. Com score HRM de ${avgScore}/100, dispositivos móveis sem política MDM representam vetor de ataque não coberto pelos treinamentos disponíveis.`, urgencia:'🟡 Média' });
  if (topDepts.some(d=>/(ti|dev|tech|infra)/i.test(d.name)))
    lacunas.push({ icon:'💻', titulo:'Segurança no Desenvolvimento (DevSecOps)', categoria:'Cybersecurity', nivel:'Avançado', duracao:'90 min',
      motivo:`Departamento de TI identificado como grupo de alta prioridade. Ausência de treinamento técnico de segurança no desenvolvimento expõe sistemas internos a vulnerabilidades introduzidas no código.`, urgencia:'🟡 Média' });
  lacunas.push({ icon:'🧠', titulo:'Psicologia da Segurança — Vieses Cognitivos', categoria:'Behavioral Security', nivel:'Intermediário', duracao:'35 min',
    motivo:`Uma taxa de clique de ${clickRate}% confirma que usuários cedem a gatilhos psicológicos (urgência, autoridade, medo). Treinamento comportamental sobre vieses cognitivos não existe na biblioteca atual e seria complementar a todos os outros módulos.`, urgencia:'🟢 Baixa' });

  // ── 7. KPIs integrated ─────────────────────────────────────
  const kpis = [
    { label:'Conclusão dos treinamentos',  icon:'📚', meta:'>90%',  baseline:'—',           fonte:'Meta de capacitação' },
    { label:'Taxa de clique em phishing',  icon:'📧', meta:'<10%',  baseline:`${clickRate}%`, fonte:'Histórico de campanhas' },
    { label:'Taxa de reporte de ameaças',  icon:'📢', meta:'>40%',  baseline:`${reportRate}%`,fonte:'Histórico de campanhas' },
    { label:'Score HRM médio',             icon:'🧠', meta:`<${Math.round(avgScore*0.75)}/100`, baseline:`${avgScore}/100`, fonte:'Human Risk Module' },
    { label:'Score Phishing HRM',          icon:'🎣', meta:`<${Math.round(avgPhScore*0.7)}/100`,baseline:`${avgPhScore}/100`,fonte:'Human Risk Module' },
  ];

  return {
    id: Date.now(),
    tenant, generatedAt: fmt(today) + ' às ' + today.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
    orgRisk: { avgScore, avgPhScore, avgTrScore, avgPwScore, highRisk: highRisk.length, medRisk: medRisk.length, lowRisk: lowRisk.length, total },
    phishing: { campCount, clickRate, reportRate, totalSent, totalClicks },
    topDepts, topDeptStr, riskLevel, riskColor, enriched,
    nome: campName, grupo, status:'Rascunho',
    inicio: addDays(3), fim: addDays(45),
    enviados:0, abertos:0, cliques:0, reportou:0,
    treinamentosRecomendados: rec,
    lacunas,
    kpis,
    cronograma: [
      { fase:'Preparação',                  periodo: fmt(today)+' – '+addDays(2),   desc:'Confirmação dos grupos-alvo e atribuição dos treinamentos na plataforma.' },
      { fase:'Treinamentos Obrigatórios',   periodo: addDays(3)+' – '+addDays(14),  desc:'Módulos marcados como Obrigatório devem ser concluídos neste período.' },
      { fase:'Treinamentos Recomendados',   periodo: addDays(10)+' – '+addDays(35), desc:'Módulos complementares disponibilizados com prazo flexível.' },
      { fase:'Monitoramento & Suporte',     periodo: addDays(3)+' – '+addDays(42),  desc:'Acompanhamento de taxa de conclusão — gestores notificados para usuários atrasados.' },
      { fase:'Relatório de Efetividade',    periodo: addDays(45),                   desc:'Medição do impacto no Score HRM e taxa de clique pós-treinamento.' },
    ],
  };
}

// ── Step 3: Review modal ──────────────────────────────────────
function phAiShowReview() {
  const c = _phAiCampaign;
  if (!c) return;

  // Helper: indicator status color
  const stColor = s => s==='crítico'?'#ef4444':s==='atenção'?'#f59e0b':'#22c55e';
  const stLabel = s => s==='crítico'?'Crítico':s==='atenção'?'Atenção':'OK';

  phShowModal(`
    <div class="ph-modal-header">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#6366f1);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">🤖</div>
        <div>
          <div style="font-size:1.0rem;font-weight:800;">${c.nome}</div>
          <div style="font-size:0.72rem;color:#6b7280;">Gerado em ${c.generatedAt} · ${c.tenant} · Plano de Treinamento — Rascunho para revisão</div>
        </div>
      </div>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>

    <!-- ═══ ZONA A: DADOS ANALISADOS ═══ -->
    <div style="background:rgba(139,92,246,.05);border:1px solid rgba(139,92,246,.20);border-radius:14px;padding:16px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
        <div style="width:28px;height:28px;border-radius:8px;background:rgba(139,92,246,.15);display:flex;align-items:center;justify-content:center;font-size:0.9rem;">📊</div>
        <div>
          <div style="font-size:0.76rem;font-weight:800;color:#8b5cf6;text-transform:uppercase;letter-spacing:.08em;">Dados Analisados pela IA</div>
          <div style="font-size:0.68rem;color:#6b7280;margin-top:1px;">A IA cruzou dois conjuntos de dados para gerar este plano de treinamento</div>
        </div>
      </div>

      <!-- Two data sources side by side -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">

        <!-- Source 1: Phishing History -->
        <div style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.18);border-radius:11px;padding:12px;">
          <div style="font-size:0.68rem;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">📧 Histórico de Phishing</div>
          <div style="display:flex;flex-direction:column;gap:5px;">
            ${[
              ['Campanhas concluídas', c.phishing.campCount+' campanha(s)', c.phishing.campCount===0?'atenção':'ok'],
              ['Taxa de clique', c.phishing.clickRate+'%', c.phishing.clickRate>20?'crítico':c.phishing.clickRate>10?'atenção':'ok'],
              ['Taxa de reporte', c.phishing.reportRate+'%', c.phishing.reportRate<20?'crítico':c.phishing.reportRate<35?'atenção':'ok'],
            ].map(([l,v,s])=>`
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.72rem;">
                <span style="color:#94a3b8;">${l}</span>
                <span style="padding:2px 8px;border-radius:99px;background:${stColor(s)}18;color:${stColor(s)};font-weight:700;">${v}</span>
              </div>`).join('')}
          </div>
        </div>

        <!-- Source 2: HRM Scores -->
        <div style="background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.18);border-radius:11px;padding:12px;">
          <div style="font-size:0.68rem;font-weight:800;color:#8b5cf6;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">🧠 Human Risk (HRM)</div>
          <div style="display:flex;flex-direction:column;gap:5px;">
            ${[
              ['Score geral médio',  c.orgRisk.avgScore+'/100',   c.orgRisk.avgScore>60?'crítico':c.orgRisk.avgScore>40?'atenção':'ok'],
              ['Score phishing',     c.orgRisk.avgPhScore+'/100', c.orgRisk.avgPhScore>60?'crítico':c.orgRisk.avgPhScore>40?'atenção':'ok'],
              ['Score senhas/MFA',   c.orgRisk.avgPwScore+'/100', c.orgRisk.avgPwScore<50?'crítico':c.orgRisk.avgPwScore<70?'atenção':'ok'],
            ].map(([l,v,s])=>`
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.72rem;">
                <span style="color:#94a3b8;">${l}</span>
                <span style="padding:2px 8px;border-radius:99px;background:${stColor(s)}18;color:${stColor(s)};font-weight:700;">${v}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Summary row -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;">
        ${[
          ['Nível de Risco', c.riskLevel, c.riskColor],
          ['Alto Risco',     c.orgRisk.highRisk+' usuários', '#ef4444'],
          ['Risco Moderado', c.orgRisk.medRisk+' usuários',  '#f59e0b'],
          ['Baixo Risco',    c.orgRisk.lowRisk+' usuários',  '#22c55e'],
          ['Total',          c.orgRisk.total+' usuários',    '#00d4ff'],
        ].map(([l,v,col])=>`
          <div style="padding:8px 4px;background:rgba(255,255,255,.03);border-radius:8px;">
            <div style="font-size:0.88rem;font-weight:900;color:${col};">${v}</div>
            <div style="font-size:0.59rem;color:#6b7280;margin-top:2px;">${l}</div>
          </div>`).join('')}
      </div>
      ${c.topDeptStr ? `<div style="margin-top:10px;font-size:0.71rem;color:#6b7280;">🏢 Departamentos com maior exposição: <strong style="color:#f1f5f9;">${c.topDeptStr}</strong></div>` : ''}
    </div>

    <!-- ═══ ZONA B: PLANO DE TREINAMENTO ═══ -->
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
      <div style="width:28px;height:28px;border-radius:8px;background:rgba(0,212,255,.12);display:flex;align-items:center;justify-content:center;font-size:0.9rem;">📚</div>
      <div>
        <div style="font-size:0.76rem;font-weight:800;color:#00d4ff;text-transform:uppercase;letter-spacing:.08em;">Plano de Treinamento Recomendado</div>
        <div style="font-size:0.68rem;color:#6b7280;margin-top:1px;">${c.treinamentosRecomendados.length} treinamento(s) da biblioteca selecionados pela IA · Apenas capacitação, sem simulações</div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
      ${c.treinamentosRecomendados.map((t,i)=>`
        <div style="border:1px solid rgba(255,255,255,.08);border-radius:13px;overflow:hidden;">
          <!-- Training header -->
          <div style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:rgba(255,255,255,.03);">
            <div style="width:36px;height:36px;border-radius:10px;background:rgba(0,212,255,.10);border:1px solid rgba(0,212,255,.18);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">${t.icon}</div>
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                <span style="font-weight:800;font-size:0.84rem;">${t.title}</span>
                <span style="padding:2px 8px;border-radius:99px;font-size:0.63rem;font-weight:700;${t.prioridade.includes('Obrig')?'background:rgba(239,68,68,.14);color:#ef4444;':'background:rgba(245,158,11,.14);color:#f59e0b;'}">${t.prioridade}</span>
                <span style="padding:2px 7px;border-radius:99px;background:rgba(34,197,94,.10);color:#22c55e;font-size:0.63rem;font-weight:700;">✅ Na Biblioteca</span>
              </div>
              <div style="font-size:0.68rem;color:#6b7280;margin-top:2px;">${t.category} · ${t.level} · ${t.duration} · 👥 ${t.grupo} · 📅 Prazo: ${t.prazo}</div>
            </div>
          </div>
          <!-- Why this training -->
          <div style="padding:10px 14px;background:rgba(139,92,246,.04);border-top:1px solid rgba(255,255,255,.05);">
            <div style="font-size:0.64rem;font-weight:800;color:#8b5cf6;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">🧠 Por que a IA recomendou este treinamento</div>
            <!-- Indicators that triggered this -->
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
              ${t.indicadores.map(ind=>`
                <div style="display:flex;align-items:center;gap:4px;padding:3px 8px;border-radius:99px;background:${stColor(ind.status)}10;border:1px solid ${stColor(ind.status)}30;">
                  <span style="font-size:0.65rem;color:#94a3b8;">${ind.fonte}:</span>
                  <span style="font-size:0.70rem;font-weight:800;color:${stColor(ind.status)};">${ind.valor}</span>
                  <span style="font-size:0.60rem;color:${stColor(ind.status)};opacity:.8;">[${stLabel(ind.status)}]</span>
                </div>`).join('')}
            </div>
            <div style="font-size:0.72rem;color:#94a3b8;line-height:1.5;">${t.raciocinio}</div>
          </div>
        </div>`).join('')}
    </div>

    <!-- ═══ KPIs ═══ -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">📈 Metas de Efetividade</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:7px;margin-bottom:16px;">
      ${c.kpis.map(k=>`
        <div style="padding:10px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;">
          <div style="font-size:0.64rem;color:#6b7280;margin-bottom:4px;">${k.icon} ${k.label}</div>
          ${k.baseline!=='—'?`<div style="font-size:0.72rem;color:#6b7280;text-decoration:line-through;margin-bottom:2px;">${k.baseline}</div>`:''}
          <div style="font-size:0.95rem;font-weight:800;color:#22c55e;">→ ${k.meta}</div>
          <div style="font-size:0.60rem;color:#6b7280;margin-top:3px;opacity:.7;">${k.fonte}</div>
        </div>`).join('')}
    </div>

    <!-- ═══ Cronograma ═══ -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">🗓 Cronograma Sugerido</div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:16px;">
      ${c.cronograma.map((f,i)=>`
        <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:9px;">
          <div style="width:5px;height:5px;border-radius:50%;background:#8b5cf6;margin-top:6px;flex-shrink:0;"></div>
          <div>
            <div style="font-size:0.76rem;font-weight:700;">${f.fase} <span style="font-weight:400;color:#6b7280;font-size:0.70rem;">· ${f.periodo}</span></div>
            <div style="font-size:0.70rem;color:#94a3b8;margin-top:2px;">${f.desc}</div>
          </div>
        </div>`).join('')}
    </div>

    <!-- ═══ ZONA C: LACUNAS ═══ -->
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
      <div style="width:28px;height:28px;border-radius:8px;background:rgba(245,158,11,.12);display:flex;align-items:center;justify-content:center;font-size:0.9rem;">⚠️</div>
      <div>
        <div style="font-size:0.76rem;font-weight:800;color:#f59e0b;text-transform:uppercase;letter-spacing:.08em;">Lacunas de Conteúdo Identificadas</div>
        <div style="font-size:0.68rem;color:#6b7280;margin-top:1px;">Treinamentos que a IA recomenda criar na biblioteca para cobrir riscos não endereçados</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:18px;">
      ${c.lacunas.map(g=>`
        <div style="display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;padding:11px 14px;background:rgba(245,158,11,.04);border:1px dashed rgba(245,158,11,.22);border-radius:11px;">
          <div style="width:34px;height:34px;border-radius:9px;background:rgba(245,158,11,.10);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">${g.icon}</div>
          <div>
            <div style="font-weight:700;font-size:0.80rem;">${g.titulo} <span style="font-size:0.66rem;color:#6b7280;font-weight:400;">· ${g.categoria} · ${g.nivel} · ${g.duracao}</span></div>
            <div style="font-size:0.70rem;color:#94a3b8;margin-top:3px;line-height:1.45;">${g.motivo}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
            <span style="padding:2px 8px;border-radius:99px;font-size:0.62rem;font-weight:700;${g.urgencia.includes('Alta')?'background:rgba(239,68,68,.12);color:#ef4444;':g.urgencia.includes('Média')?'background:rgba(245,158,11,.12);color:#f59e0b;':'background:rgba(34,197,94,.12);color:#22c55e;'}">${g.urgencia}</span>
            <span style="padding:2px 7px;border-radius:99px;background:rgba(255,255,255,.05);color:#6b7280;font-size:0.60rem;white-space:nowrap;">❌ Não disponível</span>
          </div>
        </div>`).join('')}
      <div style="padding:8px 12px;background:rgba(245,158,11,.04);border-radius:9px;font-size:0.71rem;color:#f59e0b;">
        💡 Esses treinamentos podem ser cadastrados na <strong>Biblioteca</strong> para enriquecer futuras campanhas de conscientização.
      </div>
    </div>

    <!-- Warning -->
    <div style="padding:10px 14px;background:rgba(139,92,246,.05);border:1px solid rgba(139,92,246,.18);border-radius:9px;font-size:0.72rem;color:#8b5cf6;margin-bottom:18px;">
      📚 Este plano recomenda <strong>exclusivamente treinamentos de capacitação</strong>. Não inclui simulações de phishing. Para criar uma simulação, use o botão <strong>"🎯 Simulação de Phishing IA"</strong>. Ao atribuir, os treinamentos serão automaticamente criados na lista de Atribuições.
    </div>

    <!-- Actions -->
    <div style="display:flex;gap:10px;">
      <button class="ph-btn ph-btn-ghost" style="flex:1;min-width:120px;" onclick="phCloseModal()">✕ Descartar</button>
      <button class="ph-btn ph-btn-ghost" style="flex:1;min-width:120px;" onclick="phAiRegenerateCampaign()">🔄 Regerar</button>
      <button class="ph-btn" style="flex:1;min-width:160px;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;box-shadow:0 4px 16px rgba(139,92,246,.35);" onclick="phAiApproveCampaign()">✅ Aprovar</button>
      <button class="ph-btn" style="flex:2;min-width:160px;background:linear-gradient(135deg,#059669,#10b981);color:#fff;box-shadow:0 4px 16px rgba(16,185,129,.35);" onclick="phAiConfirmAssign()">📋 Atribuir</button>
    </div>
  `, 'ph-modal ph-modal-lg');
}


window.phAiRegenerateCampaign = function() {
  phCloseModal();
  setTimeout(() => phAiGenerateCampaign(), 100);
};

// ── Confirm assign modal ──────────────────────────────────────
window.phAiConfirmAssign = function() {
  const c = _phAiCampaign;
  if (!c) return;

  phShowModal(`
    <div class="ph-modal-header">
      <div style="font-weight:800;font-size:1.0rem;">📋 Confirmar Atribuição da Campanha</div>
      <button class="ph-modal-close" onclick="phCloseModal();phAiShowReview()">✕</button>
    </div>

    <div style="padding:14px;background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.20);border-radius:12px;margin-bottom:16px;">
      <div style="font-size:0.72rem;font-weight:800;color:#10b981;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">As seguintes ações serão executadas automaticamente:</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${[
          ['✅ Aprovar', 'A campanha será aprovada e registrada no sistema.'],
          ['🚀 Publicar', 'A campanha será publicada e marcada como Ativa.'],
          ['👥 Atribuir ao Público-Alvo', `A campanha será enviada a <strong style="color:#f1f5f9;">${c.orgRisk.total} usuário(s)</strong> — ${c.grupo}.`],
          ['📚 Criar Atribuições', `<strong style="color:#00d4ff;">${c.treinamentosRecomendados?.length||0} treinamento(s)</strong> da biblioteca serão automaticamente adicionados à lista de <strong>Atribuições</strong>.`],
        ].map(([titulo,desc])=>`
          <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 10px;background:rgba(255,255,255,.03);border-radius:8px;">
            <span style="font-size:0.82rem;flex-shrink:0;">${titulo.split(' ')[0]}</span>
            <div><span style="font-weight:700;font-size:0.80rem;">${titulo.slice(titulo.indexOf(' ')+1)}</span> — <span style="font-size:0.78rem;color:#94a3b8;">${desc}</span></div>
          </div>`).join('')}
      </div>
    </div>

    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:0.78rem;">
      <div style="font-weight:700;margin-bottom:6px;">📝 Resumo da Campanha</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;color:#94a3b8;">
        <div><span style="color:#6b7280;">Nome: </span><strong style="color:#f1f5f9;">${c.nome}</strong></div>
        <div><span style="color:#6b7280;">Template: </span><strong style="color:#f1f5f9;">${c.template}</strong></div>
        <div><span style="color:#6b7280;">Público: </span><strong style="color:#f1f5f9;">${c.orgRisk.total} usuários</strong></div>
        <div><span style="color:#6b7280;">Período: </span><strong style="color:#f1f5f9;">${c.inicio} – ${c.fim}</strong></div>
      </div>
    </div>

    <div style="padding:8px 12px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.15);border-radius:9px;font-size:0.72rem;color:#f59e0b;margin-bottom:16px;">
      ⚠️ Ao confirmar, a campanha será ativada imediatamente e os destinatários receberão o e-mail simulado conforme o cronograma definido.
    </div>

    <div style="display:flex;gap:10px;">
      <button class="ph-btn ph-btn-ghost" style="flex:1;" onclick="phCloseModal();phAiShowReview()">← Voltar</button>
      <button class="ph-btn" style="flex:2;background:linear-gradient(135deg,#059669,#10b981);color:#fff;box-shadow:0 4px 16px rgba(16,185,129,.35);" onclick="phAiExecuteAssign()">📋 Confirmar e Atribuir Agora</button>
    </div>
  `);
};

// ── Execute assign: approve + publish (Ativa) + assign + ASSIGN_DATA ────
window.phAiExecuteAssign = function() {
  const c = _phAiCampaign;
  if (!c) return;

  // Validate
  if (!c.nome || !c.template || !c.grupo) {
    showToast && showToast('❌ Campanha incompleta. Regere e tente novamente.', 'error');
    return;
  }

  const now = new Date();
  const adminName = (typeof DEMO_STATE !== 'undefined') ? (DEMO_STATE.name || 'Admin Local') : 'Admin Local';

  // 1. Create phishing campaign as Ativa
  const newCamp = {
    id: c.id, nome: c.nome, template: c.template, grupo: c.grupo,
    status: 'Ativa', inicio: c.inicio,
    enviados: c.orgRisk.total, abertos: 0, cliques: 0, reportou: 0,
    aiGenerated: true,
    assignedAt: now.toLocaleString('pt-BR'),
  };
  PHISHING_MOCK.campanhas.unshift(newCamp);

  // 2. Create assignments in ASSIGN_DATA for each recommended library training
  if (typeof ASSIGN_DATA !== 'undefined' && Array.isArray(c.treinamentosRecomendados)) {
    const maxId = ASSIGN_DATA.assignments.reduce((m,a)=>Math.max(m,+a.id||0), 0);
    c.treinamentosRecomendados.forEach((t, i) => {
      // Parse due date (dd/mm/yyyy) → yyyy-mm-dd
      let dueStr = '';
      if (t.prazo) {
        const parts = t.prazo.split('/');
        dueStr = parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : t.prazo;
      }
      const priority = t.prioridade.includes('Obrig') ? 'Alta' : 'Média';
      const newAssign = {
        id: maxId + i + 1,
        course: t.title,
        target: t.grupo || c.grupo,
        targetType: t.grupo === 'Todos os usuários' ? 'global' : 'group',
        due: dueStr,
        completion: 0,
        status: 'ativa',
        mandatory: t.mandatory || t.prioridade.includes('Obrig'),
        enviados: c.orgRisk.total,
        concluidos: 0,
        pendentes: c.orgRisk.total,
        atrasados: 0,
        created: now.toISOString().slice(0,10),
        priority,
        category: t.category || 'Cybersecurity',
        notify: true,
        aiGenerated: true,
        campanha: c.nome,
      };
      ASSIGN_DATA.assignments.unshift(newAssign);
    });
  }

  // 3. Audit log
  if (!window._phAuditLog) window._phAuditLog = [];
  window._phAuditLog.unshift({
    ts: now.toLocaleString('pt-BR'),
    action: 'CAMPAIGN_ASSIGN',
    detail: `Campanha "${c.nome}" aprovada, publicada e atribuída a ${c.orgRisk.total} usuário(s) — ${c.grupo}. ${c.treinamentosRecomendados?.length||0} treinamento(s) adicionados às Atribuições.`,
    user: adminName,
  });

  // 4. Close + refresh
  phCloseModal();
  if (typeof phTab === 'function') phTab('campanhas');
  _phAiCampaign = null;

  // 5. Staged toasts
  const nAssign = c.treinamentosRecomendados?.length || 0;
  showToast && showToast('✅ Campanha aprovada e publicada como Ativa!', 'success');
  setTimeout(() => showToast && showToast(`📧 Atribuída a ${newCamp.enviados} destinatário(s) — ${newCamp.grupo}!`, 'success'), 900);
  setTimeout(() => showToast && showToast(`📚 ${nAssign} treinamento(s) adicionados às Atribuições automaticamente.`, 'info'), 1800);
};

window.phAiApproveCampaign = function() {
  const c = _phAiCampaign;
  if (!c) return;
  // Add to campaign list
  const newCamp = {
    id: c.id, nome: c.nome, template: c.template, grupo: c.grupo,
    status: 'Rascunho', inicio: c.inicio,
    enviados: 0, abertos: 0, cliques: 0, reportou: 0,
    aiGenerated: true,
  };
  PHISHING_MOCK.campanhas.unshift(newCamp);
  phCloseModal();
  // Re-render campaigns tab
  if (typeof phTab === 'function') phTab('campanhas');
  else if (typeof renderPage_phishing === 'function') renderPage_phishing();
  showToast && showToast('✅ Campanha gerada pela IA adicionada como Rascunho!', 'success');
  _phAiCampaign = null;
};

// ══════════════════════════════════════════════════════════════
//  🎯 AI PHISHING SIMULATION GENERATOR
// ══════════════════════════════════════════════════════════════

let _phAiSim = null; // simulation data

// ── Loading animation ──────────────────────────────────────────
window.phAiSimulateGenerate = function() {
  const steps = [
    { pct:14, msg:'🔍 Carregando perfil de Human Risk da empresa ativa...' },
    { pct:28, msg:'📊 Analisando scores por usuário, departamento e função...' },
    { pct:42, msg:'🕵️ Avaliando histórico de incidentes e comportamentos de risco...' },
    { pct:56, msg:'🎭 Selecionando temas de engenharia social por nível de maturidade...' },
    { pct:70, msg:'✉️ Gerando variantes de campanha para cada grupo de risco...' },
    { pct:85, msg:'🧠 Calibrando dificuldade e KPIs com IA (Claude Sonnet)...' },
    { pct:100, msg:'✅ Simulação gerada com sucesso!' },
  ];

  // Reuse spinner CSS from phAiGenerateCampaign (already injected)
  if (!document.getElementById('ph-ai-spin-css')) {
    const s = document.createElement('style');
    s.id = 'ph-ai-spin-css';
    s.textContent = `
      @keyframes phAiSpin  { to { transform:rotate(360deg); } }
      @keyframes phAiPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.88)} }
      @keyframes phAiDot   { 0%,80%,100%{transform:scale(0);opacity:0} 40%{transform:scale(1);opacity:1} }
      @keyframes phAiFade  { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
      .ph-ai-spinner{width:56px;height:56px;border-radius:50%;border:3px solid rgba(239,68,68,.18);border-top-color:#ef4444;animation:phAiSpin .9s linear infinite;}
      .ph-ai-dot{width:7px;height:7px;border-radius:50%;background:#ef4444;display:inline-block;animation:phAiDot 1.4s ease-in-out infinite;}
      .ph-ai-dot:nth-child(2){animation-delay:.16s}.ph-ai-dot:nth-child(3){animation-delay:.32s}
      .ph-ai-log-row{animation:phAiFade .3s ease;}
    `;
    document.head.appendChild(s);
  }

  phShowModal(`
    <div style="text-align:center;padding:14px 0 10px;">
      <div style="position:relative;width:80px;height:80px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
        <div class="ph-ai-spinner" style="position:absolute;inset:0;border-top-color:#ef4444;border-color:rgba(239,68,68,.18);"></div>
        <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#dc2626,#ef4444);display:flex;align-items:center;justify-content:center;font-size:1.5rem;animation:phAiPulse 2s ease-in-out infinite;">🎯</div>
      </div>
      <div style="font-weight:800;font-size:1.08rem;margin-bottom:6px;">Gerando simulação de phishing com IA</div>
      <div style="font-size:0.80rem;color:#6b7280;margin-bottom:8px;">Analisando perfis de risco e criando variantes personalizadas…</div>
      <div style="margin-bottom:20px;display:flex;justify-content:center;gap:6px;">
        <div class="ph-ai-dot" style="background:#ef4444;"></div>
        <div class="ph-ai-dot" style="background:#ef4444;"></div>
        <div class="ph-ai-dot" style="background:#ef4444;"></div>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:6px;overflow:hidden;margin-bottom:6px;">
        <div id="ph-sim-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#dc2626,#f59e0b);border-radius:99px;transition:width .55s ease;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:18px;">
        <div id="ph-sim-msg" style="font-size:0.74rem;color:#94a3b8;text-align:left;flex:1;">Iniciando…</div>
        <div id="ph-sim-pct" style="font-size:0.74rem;font-weight:700;color:#ef4444;margin-left:10px;">0%</div>
      </div>
      <div id="ph-sim-log" style="text-align:left;display:flex;flex-direction:column;gap:5px;max-height:150px;overflow:hidden;"></div>
      <div style="margin-top:16px;padding:10px 14px;background:rgba(239,68,68,.05);border:1px solid rgba(239,68,68,.15);border-radius:9px;font-size:0.72rem;color:#94a3b8;line-height:1.55;">
        🎭 A IA gera variantes adaptadas ao nível de maturidade de cada grupo — dificuldade crescente, temas reais de engenharia social e plano de treinamento pós-campanha.
      </div>
    </div>
  `);

  let i = 0;
  function tick() {
    const bar = document.getElementById('ph-sim-bar');
    const msg = document.getElementById('ph-sim-msg');
    const pct = document.getElementById('ph-sim-pct');
    const log = document.getElementById('ph-sim-log');
    if (i > 0) {
      const prev = steps[i-1]; const isFinal = i === steps.length;
      if (log) {
        const row = document.createElement('div'); row.className = 'ph-ai-log-row';
        row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:5px 10px;border-radius:7px;background:rgba(255,255,255,.03);font-size:0.72rem;';
        row.innerHTML = isFinal
          ? `<span style="color:#22c55e;flex-shrink:0;">✅</span><span style="color:#22c55e;font-weight:600;">${prev.msg}</span>`
          : `<span style="color:#ef4444;flex-shrink:0;">✓</span><span style="color:#94a3b8;">${prev.msg}</span>`;
        log.appendChild(row); log.scrollTop = log.scrollHeight;
      }
    }
    if (i >= steps.length) { _phAiSim = phAiSimBuild(); phAiSimReview(); return; }
    const s = steps[i++];
    if (bar) bar.style.width = s.pct+'%';
    if (pct) pct.textContent = s.pct+'%';
    if (msg) msg.textContent = s.msg;
    setTimeout(tick, 380);
  }
  setTimeout(tick, 200);
};

// ── Build simulation data ──────────────────────────────────────
function phAiSimBuild() {
  // Active tenant users (single source of truth)
  const tenantUsers = (typeof getActiveTenantUsers==='function') ? getActiveTenantUsers() : [];
  const tenant = (typeof APP!=='undefined'&&APP.tenants) ? (APP.tenants.find(t=>t.active)||{}).name||'Empresa' : 'Empresa';
  const total = tenantUsers.length || 1;

  // Enrich with HRM (tenant-validated)
  const hrmByEmail = {};
  if (typeof HRM_DATA!=='undefined' && Array.isArray(HRM_DATA.users)) {
    const emails = new Set(tenantUsers.map(u=>(u.email||'').toLowerCase()));
    HRM_DATA.users.forEach(h=>{ const e=(h.email||'').toLowerCase(); if(emails.has(e)) hrmByEmail[e]=h; });
  }
  const rMap={high:75,med:45,low:18};
  const enriched = tenantUsers.map(u=>{
    const h=hrmByEmail[(u.email||'').toLowerCase()];
    const score = h?(h.score??rMap[u.risk]??35):(u.riskScore??u.score??rMap[u.risk]??35);
    const phPrev = h?(h.phishing??50):(u.risk==='high'?72:u.risk==='med'?40:18);
    const dept = u.dept||u.department||'Geral';
    return {...u, score, phPrev, dept};
  });

  const highGroup = enriched.filter(u=>u.score>60);
  const medGroup  = enriched.filter(u=>u.score>30&&u.score<=60);
  const lowGroup  = enriched.filter(u=>u.score<=30);
  const avgScore  = Math.round(enriched.reduce((s,u)=>s+u.score,0)/total);

  // Dept risk map
  const deptMap={};
  enriched.forEach(u=>{
    if(!deptMap[u.dept]) deptMap[u.dept]={score:0,n:0};
    deptMap[u.dept].score+=u.score; deptMap[u.dept].n++;
  });
  const topDepts = Object.entries(deptMap).map(([d,v])=>({name:d,avg:Math.round(v.score/v.n)})).sort((a,b)=>b.avg-a.avg).slice(0,3);

  // Previous campaigns stats
  const prevCamps = (typeof PHISHING_MOCK!=='undefined' && PHISHING_MOCK.campanhas) ? PHISHING_MOCK.campanhas.filter(c=>c.status==='Concluída') : [];
  const prevClickAvg = prevCamps.length ? Math.round(prevCamps.reduce((s,c)=>s+(c.enviados>0?c.cliques/c.enviados*100:0),0)/prevCamps.length) : 25;

  const today = new Date();
  const fmt = d=>d.toLocaleDateString('pt-BR');
  const addD = n=>{const d=new Date(today);d.setDate(d.getDate()+n);return fmt(d);};

  // Social engineering themes by difficulty
  const themes = {
    critico: {
      nome:'Spear Phishing — Alerta de Segurança Executivo',
      assunto:`[URGENTE] Atividade suspeita detectada na sua conta — Ação requerida`,
      remetente:`seguranca-ti@${tenant.toLowerCase().replace(/\s/g,'-')}-alerts.com`,
      preview:`Detectamos um acesso não autorizado à sua conta corporativa a partir de um IP desconhecido (Rússia). Clique aqui para verificar e bloquear o acesso imediatamente.`,
      iocs:['Domínio diferente do corporativo oficial','Urgência artificial para induzir clique rápido','Link com redirecionamento encurtado','Solicitação de verificação de credenciais'],
      landing:'Página falsa de login corporativo com captura de credenciais',
      dificuldade:'🔴 CRÍTICA',
      corDif:'#ef4444',
      tema:'CEO Fraud / Credential Harvesting',
    },
    alto: {
      nome:'BEC — Solicitação Financeira Urgente',
      assunto:`Aprovação de transferência necessária — ${today.toLocaleDateString('pt-BR')}`,
      remetente:`ceo@${tenant.toLowerCase().replace(/\s/g,'-')}-group.com`,
      preview:`Preciso que você processe uma transferência confidencial com urgência. Entre em contato pelo meu número particular pois estou em reunião e não posso atender pelo corporativo.`,
      iocs:['Domínio externo simulando executivo','Pedido de sigilo e urgência','Desvio do canal oficial de comunicação','Ausência de assinatura corporativa padrão'],
      landing:'Formulário de coleta de dados bancários',
      dificuldade:'🟠 ALTA',
      corDif:'#f97316',
      tema:'Business Email Compromise (BEC)',
    },
    medio: {
      nome:'Atualização de Benefícios de RH',
      assunto:`Ação necessária: Atualize seus dados para receber os benefícios de ${today.toLocaleDateString('pt-BR',{month:'long'})}`,
      remetente:`rh-beneficios@empresa-portal.net`,
      preview:`O prazo para atualização dos seus dados de benefícios encerra hoje. Acesse o portal e confirme suas informações para evitar a suspensão dos benefícios.`,
      iocs:['Domínio não corporativo (.net genérico)','Prazo artificial e ameaça de perda de benefício','Link para portal externo desconhecido','Ausência de contato telefônico para dúvidas'],
      landing:'Portal falso de RH com coleta de dados pessoais',
      dificuldade:'🟡 MÉDIA',
      corDif:'#f59e0b',
      tema:'HR Benefits Fraud',
    },
    basico: {
      nome:'Verificação de Senha — Expiração em 24h',
      assunto:`⚠️ Sua senha expira em 24 horas — Renovar agora`,
      remetente:`ti-suporte@helpdesk-empresa.com`,
      preview:`Sua senha corporativa expirará em 24 horas. Para evitar o bloqueio da sua conta, clique no botão abaixo e crie uma nova senha agora.`,
      iocs:['Domínio diferente do suporte de TI oficial','Botão "Renovar Senha" com URL suspeita','Ausência de número de ticket de suporte','Não menciona o nome do usuário'],
      landing:'Formulário falso de redefinição de senha',
      dificuldade:'🟢 BÁSICA',
      corDif:'#22c55e',
      tema:'Password Phishing',
    },
  };

  // Assign themes based on risk level
  const v1theme = avgScore>60 ? themes.critico : themes.alto;
  const v2theme = themes.medio;
  const v3theme = themes.basico;

  // Expected click rates based on previous history + risk level
  const v1ClickExp = Math.min(55, Math.round(prevClickAvg * 1.3 + (highGroup.length/total)*20));
  const v2ClickExp = Math.min(40, Math.round(prevClickAvg * 0.9));
  const v3ClickExp = Math.min(25, Math.round(prevClickAvg * 0.5));

  return {
    id: Date.now(), tenant, total, avgScore, prevClickAvg,
    topDepts, highGroup, medGroup, lowGroup,
    generatedAt: fmt(today)+' às '+today.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
    nome: `Simulação IA — ${today.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`,
    objetivo: `Avaliar a maturidade de segurança de ${total} colaboradores de ${tenant} através de simulações graduadas por nível de risco, identificar vulnerabilidades comportamentais e acionar planos de treinamento personalizados para cada grupo.`,
    periodo: { inicio: addD(3), fim: addD(21) },
    variantes: [
      {
        n:1, nome: 'Variante A — Alto Risco',
        grupo: highGroup.length>0 ? topDepts.map(d=>d.name).join(' · ') : 'Usuários de Alto Risco',
        usuarios: highGroup.length || Math.max(1, Math.round(total*0.27)),
        ...v1theme,
        clickExpected: v1ClickExp,
        reportExpected: Math.max(5, Math.round(v1ClickExp*0.2)),
        treinamento:'Módulo avançado: Spear Phishing & CEO Fraud — duração 6h — obrigatório em 7 dias',
      },
      {
        n:2, nome: 'Variante B — Risco Moderado',
        grupo: medGroup.length>0 ? 'Usuários de Risco Moderado' : 'Grupo Intermediário',
        usuarios: medGroup.length || Math.max(1, Math.round(total*0.36)),
        ...v2theme,
        clickExpected: v2ClickExp,
        reportExpected: Math.max(10, Math.round(v2ClickExp*0.35)),
        treinamento:'Módulo intermediário: Reconhecimento de Phishing — duração 4h — recomendado em 14 dias',
      },
      {
        n:3, nome: 'Variante C — Baixo Risco',
        grupo: lowGroup.length>0 ? 'Usuários de Baixo Risco' : 'Grupo Avançado',
        usuarios: lowGroup.length || Math.max(1, Math.round(total*0.37)),
        ...v3theme,
        clickExpected: v3ClickExp,
        reportExpected: Math.max(20, Math.round((100-v3ClickExp)*0.6)),
        treinamento:'Módulo de reforço: Boas Práticas — duração 2h — opcional em 30 dias',
      },
    ],
    kpis: [
      { label:'Taxa de clique geral', meta:'<15%', baseline: prevClickAvg+'%', icon:'🎯' },
      { label:'Taxa de reporte', meta:'>40%', baseline:'—', icon:'📢' },
      { label:'Usuários que completaram treinamento pós-sim.', meta:'100%', baseline:'—', icon:'📚' },
      { label:'Redução do score HRM médio', meta:'<'+(Math.round(avgScore*0.7))+'/100', baseline:avgScore+'/100', icon:'📉' },
      { label:'Maturidade de segurança (próx. simulação)', meta:'▲ +15pts', baseline:'—', icon:'📈' },
    ],
    treinamentoPoscamp: [
      { gatilho:'Clicou no link simulado', acao:`Acesso imediato ao módulo "${v1theme.tema}" com conteúdo contextualizado ao e-mail recebido.`, prioridade:'🔴 Obrigatório — 48h' },
      { gatilho:'Abriu o e-mail mas não clicou', acao:'Módulo de reforço sobre identificação de IoCs — reconhecimento de sinais de alerta no corpo do e-mail.', prioridade:'🟡 Recomendado — 7 dias' },
      { gatilho:'Reportou o e-mail', acao:'Reconhecimento positivo + pontos no ranking de segurança + badge "Sentinela de Segurança".', prioridade:'🟢 Positivo — imediato' },
      { gatilho:'Não abriu o e-mail', acao:'Nenhuma ação obrigatória — manutenção no próximo ciclo de simulação em 90 dias.', prioridade:'⚪ Neutro' },
    ],
    cronograma: [
      { fase:'Configuração', periodo: fmt(today)+' – '+addD(2), desc:'Segmentação de grupos, personalização de templates e validação de conteúdo.' },
      { fase:'Variante A (Alto Risco)', periodo: addD(3)+' – '+addD(7), desc:`Disparo para ${(highGroup.length||Math.round(total*0.27))} usuários de alto risco — tema: ${v1theme.tema}.` },
      { fase:'Variante B (Moderado)', periodo: addD(7)+' – '+addD(14), desc:`Disparo para ${(medGroup.length||Math.round(total*0.36))} usuários de risco moderado — tema: ${v2theme.tema}.` },
      { fase:'Variante C (Baixo Risco)', periodo: addD(14)+' – '+addD(18), desc:`Disparo para ${(lowGroup.length||Math.round(total*0.37))} usuários de baixo risco — tema: ${v3theme.tema}.` },
      { fase:'Treinamento Pós-Simulação', periodo: addD(3)+' – '+addD(21), desc:'Módulos acionados automaticamente conforme resultado de cada usuário.' },
      { fase:'Relatório Final', periodo: addD(21), desc:'Análise consolidada por variante, departamento e evolução HRM.' },
    ],
    temas: [
      { icon:'🎭', nome:'Spear Phishing', desc:'Ataque direcionado com dados pessoais do alvo para aumentar credibilidade.' },
      { icon:'💼', nome:'Business Email Compromise', desc:'Falsificação de executivos para solicitar transferências ou dados confidenciais.' },
      { icon:'🔑', nome:'Credential Harvesting', desc:'Páginas falsas de login para captura de usuário e senha corporativa.' },
      { icon:'📦', nome:'Malware via Anexo', desc:'E-mails com anexos maliciosos disfarçados de documentos legítimos.' },
      { icon:'☁️', nome:'Cloud Account Takeover', desc:'Simulação de notificações de OneDrive/Google Drive para captura de credenciais.' },
      { icon:'💰', nome:'Invoice Fraud', desc:'Faturas falsas urgentes direcionadas ao time financeiro.' },
    ],
  };
}

// ── Review modal ───────────────────────────────────────────────
function phAiSimReview() {
  const s = _phAiSim;
  if (!s) return;
  const riskColor = s.avgScore>60?'#ef4444':s.avgScore>40?'#f59e0b':'#22c55e';
  const riskLabel = s.avgScore>60?'Crítico':s.avgScore>40?'Elevado':'Moderado';

  phShowModal(`
    <div class="ph-modal-header">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#dc2626,#ef4444);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">🎯</div>
        <div>
          <div style="font-size:1.0rem;font-weight:800;">${s.nome}</div>
          <div style="font-size:0.72rem;color:#6b7280;">Gerado em ${s.generatedAt} · ${s.tenant} · ${s.variantes.length} variantes · Fins de treinamento</div>
        </div>
      </div>
      <button class="ph-modal-close" onclick="phCloseModal()">✕</button>
    </div>

    <!-- HRM Diagnostic -->
    <div style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.18);border-radius:12px;padding:14px 16px;margin-bottom:16px;">
      <div style="font-size:0.68rem;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;">📊 Diagnóstico Human Risk — Base da Análise IA</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;text-align:center;margin-bottom:10px;">
        ${[
          ['Score HRM Médio', s.avgScore+'/100', riskColor],
          ['Nível', riskLabel, riskColor],
          ['Alto Risco', s.highGroup.length+' usuários', '#ef4444'],
          ['Moderado', s.medGroup.length+' usuários', '#f59e0b'],
          ['Baixo Risco', s.lowGroup.length+' usuários', '#22c55e'],
        ].map(([l,v,c])=>`
          <div style="padding:10px 4px;background:rgba(255,255,255,.03);border-radius:9px;">
            <div style="font-size:1.0rem;font-weight:900;color:${c};">${v}</div>
            <div style="font-size:0.60rem;color:#6b7280;margin-top:3px;">${l}</div>
          </div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.72rem;">
        <div style="padding:7px 10px;background:rgba(255,255,255,.03);border-radius:8px;"><span style="color:#6b7280;">Campanhas anteriores: </span><strong>${(typeof PHISHING_MOCK!=='undefined'?PHISHING_MOCK.campanhas.filter(c=>c.status==='Concluída').length:0)} concluídas</strong></div>
        <div style="padding:7px 10px;background:rgba(255,255,255,.03);border-radius:8px;"><span style="color:#6b7280;">Taxa clique histórica: </span><strong style="color:#f59e0b;">${s.prevClickAvg}%</strong></div>
        <div style="padding:7px 10px;background:rgba(255,255,255,.03);border-radius:8px;"><span style="color:#6b7280;">Total usuários: </span><strong>${s.total}</strong></div>
        <div style="padding:7px 10px;background:rgba(255,255,255,.03);border-radius:8px;"><span style="color:#6b7280;">Depts prioritários: </span><strong>${s.topDepts.map(d=>d.name).join(' · ')||'—'}</strong></div>
      </div>
    </div>

    <!-- Objective -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">🎯 Objetivo da Simulação</div>
    <div style="padding:10px 14px;background:rgba(239,68,68,.04);border:1px solid rgba(239,68,68,.10);border-radius:9px;font-size:0.80rem;color:#94a3b8;line-height:1.6;margin-bottom:16px;">${s.objetivo}</div>

    <!-- 3 Variants -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;">📧 Variantes da Campanha — Por Nível de Risco</div>
    <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">
      ${s.variantes.map(v=>`
        <div style="border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;">
          <!-- Variant header -->
          <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:rgba(${v.corDif==='#ef4444'?'239,68,68':v.corDif==='#f97316'?'249,115,22':v.corDif==='#f59e0b'?'245,158,11':'34,197,94'},.08);border-bottom:1px solid rgba(255,255,255,.06);">
            <span style="padding:3px 10px;border-radius:99px;background:${v.corDif}18;color:${v.corDif};font-size:0.72rem;font-weight:800;">${v.dificuldade}</span>
            <span style="font-weight:800;font-size:0.90rem;flex:1;">${v.nome}</span>
            <span style="font-size:0.70rem;color:#6b7280;cursor:pointer;padding:3px 8px;border-radius:99px;transition:background .2s;" onmouseover="this.style.background='rgba(239,68,68,.12)'" onmouseout="this.style.background=''" onclick="phAiSimShowUsers(${v.n-1})">👥 <span style="text-decoration:underline;text-decoration-style:dotted;">${v.usuarios} usuários</span> · ${v.grupo}</span>
          </div>
          <div style="padding:12px 14px;">
            <!-- Theme + Email preview -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;font-size:0.74rem;">
              <div style="padding:8px 10px;background:rgba(255,255,255,.03);border-radius:8px;">
                <div style="font-size:0.64rem;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">🎭 Tema</div>
                <div style="font-weight:700;">${v.tema}</div>
              </div>
              <div style="padding:8px 10px;background:rgba(255,255,255,.03);border-radius:8px;">
                <div style="font-size:0.64rem;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">🌐 Landing Page</div>
                <div style="color:#94a3b8;">${v.landing}</div>
              </div>
            </div>
            <!-- Simulated email -->
            <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:10px 12px;margin-bottom:10px;font-size:0.74rem;">
              <div style="display:flex;gap:6px;margin-bottom:5px;flex-wrap:wrap;">
                <span style="color:#6b7280;">De: </span><span style="color:#f59e0b;font-family:monospace;">${v.remetente}</span>
              </div>
              <div style="display:flex;gap:6px;margin-bottom:8px;">
                <span style="color:#6b7280;">Assunto: </span><strong>${v.assunto}</strong>
              </div>
              <div style="color:#94a3b8;line-height:1.55;border-top:1px solid rgba(255,255,255,.05);padding-top:8px;">${v.preview}</div>
            </div>
            <!-- IoCs -->
            <div style="margin-bottom:10px;">
              <div style="font-size:0.66rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">⚠️ Indicadores de Comprometimento (IoCs)</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
                ${v.iocs.map(ioc=>`<div style="display:flex;gap:6px;padding:5px 8px;background:rgba(245,158,11,.05);border-radius:7px;font-size:0.71rem;color:#94a3b8;"><span style="color:#f59e0b;flex-shrink:0;">⚠</span>${ioc}</div>`).join('')}
              </div>
            </div>
            <!-- Expected metrics -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:8px;text-align:center;">
              <div style="padding:8px;background:rgba(255,255,255,.03);border-radius:8px;">
                <div style="font-size:1.0rem;font-weight:800;color:${v.corDif};">${v.clickExpected}%</div>
                <div style="font-size:0.62rem;color:#6b7280;margin-top:2px;">Clique esperado</div>
              </div>
              <div style="padding:8px;background:rgba(255,255,255,.03);border-radius:8px;">
                <div style="font-size:1.0rem;font-weight:800;color:#22c55e;">${v.reportExpected}%</div>
                <div style="font-size:0.62rem;color:#6b7280;margin-top:2px;">Reporte esperado</div>
              </div>
              <div style="padding:8px;background:rgba(0,212,255,.07);border-radius:8px;cursor:pointer;border:1px solid rgba(0,212,255,.20);transition:background .2s;" onclick="phAiSimShowUsers(${v.n-1})" onmouseover="this.style.background='rgba(0,212,255,.15)'" onmouseout="this.style.background='rgba(0,212,255,.07)'">
                <div style="font-size:1.0rem;font-weight:800;color:#00d4ff;">${v.usuarios}</div>
                <div style="font-size:0.62rem;color:#6b7280;margin-top:2px;">👁 Ver usuários</div>
              </div>
            </div>
            <!-- Post-campaign training -->
            <div style="padding:7px 10px;background:rgba(0,212,255,.04);border:1px solid rgba(0,212,255,.10);border-radius:8px;font-size:0.71rem;color:#94a3b8;">
              <span style="color:#00d4ff;font-weight:700;">📚 Treinamento pós-simulação: </span>${v.treinamento}
            </div>
          </div>
        </div>`).join('')}
    </div>

    <!-- Social Engineering Themes -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">🎭 Temas de Engenharia Social Identificados</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">
      ${s.temas.map(t=>`
        <div style="padding:10px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:9px;">
          <div style="font-size:1.1rem;margin-bottom:5px;">${t.icon}</div>
          <div style="font-weight:700;font-size:0.78rem;margin-bottom:3px;">${t.nome}</div>
          <div style="font-size:0.70rem;color:#94a3b8;line-height:1.4;">${t.desc}</div>
        </div>`).join('')}
    </div>

    <!-- KPIs -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">📈 Indicadores de Desempenho (KPIs)</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px;margin-bottom:16px;">
      ${s.kpis.map(k=>`
        <div style="padding:10px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:9px;">
          <div style="font-size:0.68rem;color:#6b7280;margin-bottom:5px;">${k.icon} ${k.label}</div>
          <div style="display:flex;align-items:baseline;gap:8px;">
            ${k.baseline!=='—'?`<span style="font-size:0.76rem;color:#6b7280;text-decoration:line-through;">${k.baseline}</span>`:''}
            <span style="font-size:0.95rem;font-weight:800;color:#22c55e;">→ ${k.meta}</span>
          </div>
        </div>`).join('')}
    </div>

    <!-- Post-campaign training plan -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">📚 Plano de Treinamento Pós-Campanha</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px;">
      ${s.treinamentoPoscamp.map(tp=>`
        <div style="display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:start;padding:10px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:9px;font-size:0.76rem;">
          <div style="color:#6b7280;white-space:nowrap;">Se: <strong style="color:#f1f5f9;">${tp.gatilho}</strong></div>
          <div style="color:#94a3b8;">${tp.acao}</div>
          <div style="white-space:nowrap;font-size:0.70rem;">${tp.prioridade}</div>
        </div>`).join('')}
    </div>

    <!-- Timeline -->
    <div style="font-size:0.68rem;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">🗓 Cronograma da Simulação</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:18px;">
      ${s.cronograma.map(f=>`
        <div style="display:flex;gap:12px;align-items:flex-start;padding:9px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:9px;">
          <div style="width:6px;height:6px;border-radius:50%;background:#ef4444;margin-top:5px;flex-shrink:0;"></div>
          <div>
            <div style="font-size:0.78rem;font-weight:700;">${f.fase} <span style="font-weight:400;color:#6b7280;font-size:0.72rem;">· ${f.periodo}</span></div>
            <div style="font-size:0.72rem;color:#94a3b8;margin-top:2px;">${f.desc}</div>
          </div>
        </div>`).join('')}
    </div>

    <!-- Disclaimer -->
    <div style="padding:10px 14px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.15);border-radius:9px;font-size:0.72rem;color:#f59e0b;margin-bottom:18px;">
      ⚠️ Esta simulação é exclusivamente para fins de treinamento e conscientização em segurança. Nenhum dado real é coletado. Revise antes de publicar.
    </div>

    <!-- Actions -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button class="ph-btn ph-btn-ghost" style="flex:1;min-width:120px;" onclick="phCloseModal()">✕ Descartar</button>
      <button class="ph-btn ph-btn-ghost" style="flex:1;min-width:120px;" onclick="phAiSimRegenerate()">🔄 Regerar</button>
      <button class="ph-btn" style="flex:1;min-width:160px;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;box-shadow:0 4px 16px rgba(139,92,246,.35);" onclick="phAiSimApprove()">✅ Aprovar</button>
      <button class="ph-btn" style="flex:2;min-width:180px;background:linear-gradient(135deg,#059669,#10b981);color:#fff;box-shadow:0 4px 16px rgba(16,185,129,.35);" onclick="phAiSimConfirmAssign()">📋 Atribuir Simulação</button>
    </div>
  `, 'ph-modal ph-modal-xl');
}

window.phAiSimRegenerate = function() { phCloseModal(); setTimeout(()=>phAiSimulateGenerate(), 100); };

window.phAiSimShowUsers = function(idx) {
  const s = _phAiSim; if (!s) return;
  const v = s.variantes[idx]; if (!v) return;

  // Determine which enriched user list to show
  const all = (typeof getActiveTenantUsers==='function') ? getActiveTenantUsers() : [];
  const hrmByEmail = {};
  if (typeof HRM_DATA!=='undefined' && Array.isArray(HRM_DATA.users)) {
    const emails = new Set(all.map(u=>(u.email||'').toLowerCase()));
    HRM_DATA.users.forEach(h=>{ const e=(h.email||'').toLowerCase(); if(emails.has(e)) hrmByEmail[e]=h; });
  }
  const rMap={high:75,med:45,low:18};
  const enriched = all.map(u=>{
    const h=hrmByEmail[(u.email||'').toLowerCase()];
    const score=h?(h.score??rMap[u.risk]??35):(u.riskScore??u.score??rMap[u.risk]??35);
    return {...u, score, dept:u.dept||u.department||'Geral'};
  });

  let users;
  if (idx===0)      users = enriched.filter(u=>u.score>60);
  else if (idx===1) users = enriched.filter(u=>u.score>30&&u.score<=60);
  else              users = enriched.filter(u=>u.score<=30);

  // Fallback: if group is empty, show all
  if (!users.length) users = enriched;

  const riskBadge = score => score>60
    ? `<span style="padding:2px 7px;border-radius:99px;background:rgba(239,68,68,.15);color:#ef4444;font-size:0.63rem;font-weight:700;">Alto</span>`
    : score>30
    ? `<span style="padding:2px 7px;border-radius:99px;background:rgba(245,158,11,.15);color:#f59e0b;font-size:0.63rem;font-weight:700;">Médio</span>`
    : `<span style="padding:2px 7px;border-radius:99px;background:rgba(34,197,94,.15);color:#22c55e;font-size:0.63rem;font-weight:700;">Baixo</span>`;

  const initials = u => {
    const p=(u.name||u.nome||'?').split(' ');
    return (p[0][0]+(p[1]?p[1][0]:'')).toUpperCase();
  };

  const avatarColor = score => score>60?'#ef4444':score>30?'#f97316':'#22c55e';

  phShowModal(`
    <div class="ph-modal-header">
      <div style="display:flex;align-items:center;gap:10px;">
        <button onclick="phCloseModal();phAiSimReview()" style="background:rgba(255,255,255,.06);border:none;color:#94a3b8;width:30px;height:30px;border-radius:8px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;">←</button>
        <div>
          <div style="font-weight:800;font-size:0.95rem;">👥 ${v.nome}</div>
          <div style="font-size:0.70rem;color:#6b7280;">${users.length} usuário(s) · ${v.grupo} · ${v.dificuldade}</div>
        </div>
      </div>
      <button class="ph-modal-close" onclick="phCloseModal();phAiSimReview()">✕</button>
    </div>

    <div style="display:flex;flex-direction:column;gap:6px;max-height:480px;overflow-y:auto;padding-right:4px;">
      ${users.length===0 ? `<div style="text-align:center;padding:40px;color:#6b7280;">Nenhum usuário encontrado neste grupo.</div>` :
        users.map((u,i)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:10px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px;">
            <div style="width:36px;height:36px;border-radius:50%;background:${avatarColor(u.score)};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.80rem;color:#fff;flex-shrink:0;">${initials(u)}</div>
            <div style="flex:1;min-width:0;">
              <div style="font-weight:700;font-size:0.83rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.name||u.nome||'—'}</div>
              <div style="font-size:0.70rem;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.email||'—'} · ${u.dept}</div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
              ${riskBadge(u.score)}
              <div style="font-size:0.68rem;color:#6b7280;margin-top:3px;">Score: <strong style="color:#f1f5f9;">${u.score}</strong></div>
            </div>
          </div>`).join('')}
    </div>

    <div style="margin-top:14px;display:flex;justify-content:center;">
      <button class="ph-btn ph-btn-ghost" onclick="phCloseModal();phAiSimReview()">← Voltar para a simulação</button>
    </div>
  `);
};

window.phAiSimApprove = function() {
  const s = _phAiSim; if(!s) return;
  s.variantes.forEach((v,i)=>{
    PHISHING_MOCK.campanhas.unshift({
      id: s.id+i, nome: `${s.nome} — ${v.nome}`,
      template: v.tema, grupo: v.grupo,
      status:'Rascunho', inicio: s.periodo.inicio,
      enviados:0, abertos:0, cliques:0, reportou:0, aiGenerated:true,
    });
  });
  phCloseModal();
  if(typeof phTab==='function') phTab('campanhas');
  showToast&&showToast(`✅ ${s.variantes.length} variantes aprovadas como Rascunho!`,'success');
  _phAiSim=null;
};

window.phAiSimConfirmAssign = function() {
  const s = _phAiSim; if(!s) return;
  phShowModal(`
    <div class="ph-modal-header">
      <div style="font-weight:800;font-size:1.0rem;">📋 Confirmar Atribuição da Simulação</div>
      <button class="ph-modal-close" onclick="phCloseModal();phAiSimReview()">✕</button>
    </div>
    <div style="padding:14px;background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.20);border-radius:12px;margin-bottom:16px;">
      <div style="font-size:0.72rem;font-weight:800;color:#10b981;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">Ações automáticas:</div>
      ${[
        ['✅','Aprovar','As 3 variantes serão aprovadas e registradas.'],
        ['🚀','Publicar','Todas as variantes serão marcadas como Ativas.'],
        ['👥','Atribuir por Grupo','Cada variante será enviada ao seu grupo de risco correspondente.'],
      ].map(([ic,t,d])=>`
        <div style="display:flex;gap:10px;padding:8px 10px;background:rgba(255,255,255,.03);border-radius:8px;margin-bottom:6px;font-size:0.78rem;">
          <span>${ic}</span><div><strong>${t}</strong> — <span style="color:#94a3b8;">${d}</span></div>
        </div>`).join('')}
    </div>
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px;margin-bottom:14px;font-size:0.78rem;">
      ${s.variantes.map(v=>`<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);"><span style="color:#94a3b8;">${v.nome}</span><strong>${v.usuarios} usuários — ${v.grupo}</strong></div>`).join('')}
      <div style="display:flex;justify-content:space-between;padding:6px 0 0;font-weight:700;"><span>Total</span><span style="color:#00d4ff;">${s.total} usuários</span></div>
    </div>
    <div style="padding:8px 12px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.15);border-radius:9px;font-size:0.72rem;color:#f59e0b;margin-bottom:16px;">
      ⚠️ Os usuários receberão os e-mails de simulação conforme o cronograma definido. Fins exclusivamente educacionais.
    </div>
    <div style="display:flex;gap:10px;">
      <button class="ph-btn ph-btn-ghost" style="flex:1;" onclick="phCloseModal();phAiSimReview()">← Voltar</button>
      <button class="ph-btn" style="flex:2;background:linear-gradient(135deg,#059669,#10b981);color:#fff;" onclick="phAiSimExecuteAssign()">📋 Confirmar e Atribuir</button>
    </div>
  `);
};

window.phAiSimExecuteAssign = function() {
  const s = _phAiSim; if(!s) return;
  // Create all 3 variants as Ativa
  s.variantes.forEach((v,i)=>{
    PHISHING_MOCK.campanhas.unshift({
      id: s.id+i, nome: `${s.nome} — ${v.nome}`,
      template: v.tema, grupo: v.grupo,
      status:'Ativa', inicio: s.periodo.inicio,
      enviados: v.usuarios, abertos:0, cliques:0, reportou:0, aiGenerated:true,
      assignedAt: new Date().toLocaleString('pt-BR'),
    });
  });
  // Audit log
  if(!window._phAuditLog) window._phAuditLog=[];
  window._phAuditLog.unshift({
    ts: new Date().toLocaleString('pt-BR'), action:'SIM_ASSIGN',
    detail:`Simulação "${s.nome}" — ${s.variantes.length} variantes aprovadas, publicadas e atribuídas a ${s.total} usuário(s).`,
    user:(typeof DEMO_STATE!=='undefined')?(DEMO_STATE.name||'Admin Local'):'Admin Local',
  });
  phCloseModal();
  if(typeof phTab==='function') phTab('campanhas');
  _phAiSim=null;
  showToast&&showToast('✅ Simulação aprovada e publicada!','success');
  setTimeout(()=>showToast&&showToast(`🎯 ${s.variantes.length} variantes atribuídas a ${s.total} usuário(s)!`,'success'),900);
  setTimeout(()=>showToast&&showToast('📋 Atribuição registrada no histórico do sistema.','info'),1800);
};

// ── MODAL HELPERS ─────────────────────────────────────────────
function phShowModal(html, cls = 'ph-modal') {
  phCloseModal();
  const overlay = document.createElement('div');
  overlay.className = 'ph-modal-overlay';
  overlay.id = 'ph-modal-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) phCloseModal(); });
  const modal = document.createElement('div');
  modal.className = cls;
  modal.innerHTML = html;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

window.phCloseModal = function() {
  const el = document.getElementById('ph-modal-overlay');
  if (el) el.remove();
};
