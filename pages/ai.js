// ══════════════════════════════════════════════════════════════
//  PAGE: IA ASSISTENTE
// ══════════════════════════════════════════════════════════════

window.renderPage_ai = function () {
  const L = aiL[APP.lang] || aiL.pt;
  const isRTL = false; // Arabic removed

  const suggestions = L.suggestions;

  return `
  <div style="display:flex;flex-direction:column;gap:22px;height:calc(100vh - var(--topbar-height) - 56px);">

    <!-- Header -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;flex-shrink:0;">
      <div>
        <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">${L.title}</h2>
        <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${L.sub}</p>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="display:flex;align-items:center;gap:6px;font-size:0.75rem;color:var(--brand-success);background:rgba(0,214,143,0.1);border:1px solid rgba(0,214,143,0.2);border-radius:99px;padding:4px 12px;">
          <span style="width:6px;height:6px;border-radius:50%;background:var(--brand-success);display:inline-block;"></span>
          ${L.status_online}
        </span>
        <select id="ai-lang-select" onchange="aiChangeLang()" style="min-width:140px;font-size:0.8rem;">
          <option value="pt" ${APP.lang==='pt'?'selected':''}>🇧🇷 Português</option>
          <option value="en" ${APP.lang==='en'?'selected':''}>🇺🇸 English</option>
          <option value="es" ${APP.lang==='es'?'selected':''}>🇪🇸 Español</option>
          <option value="fr" ${APP.lang==='fr'?'selected':''}>🇫🇷 Français</option>
        </select>
      </div>
    </div>

    <!-- Main Layout: Sidebar + Chat -->
    <div style="display:grid;grid-template-columns:260px 1fr;gap:16px;flex:1;min-height:0;">

      <!-- Left panel: capabilities + suggestions -->
      <div style="display:flex;flex-direction:column;gap:12px;overflow-y:auto;">

        <!-- AI Avatar -->
        <div class="card card-glow" style="padding:20px;text-align:center;">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--brand-accent),var(--brand-purple));margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;box-shadow:0 0 30px rgba(0,87,255,0.4);position:relative;">
            🤖
            <span style="position:absolute;bottom:2px;right:2px;width:12px;height:12px;border-radius:50%;background:var(--brand-success);border:2px solid var(--bg-card);"></span>
          </div>
          <div style="font-size:0.9rem;font-weight:700;margin-bottom:3px;">${L.ai_name}</div>
          <div style="font-size:0.72rem;color:var(--text-muted);">${L.ai_role}</div>
        </div>

        <!-- Capabilities -->
        <div class="card" style="padding:16px;">
          <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:10px;">${L.cap_title}</div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            ${L.capabilities.map(c => `
              <div style="display:flex;align-items:flex-start;gap:8px;font-size:0.78rem;color:var(--text-secondary);">
                <span style="color:var(--brand-accent);flex-shrink:0;margin-top:1px;">${c.icon}</span>
                <span>${c.label}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Suggestions -->
        <div class="card" style="padding:16px;">
          <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:10px;">${L.suggest_title}</div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            ${suggestions.map(s => `
              <button onclick="aiSendSuggestion('${s.replace(/'/g,"\\'")}',this)" style="text-align:left;background:rgba(255,255,255,0.02);border:1px solid var(--bg-border);border-radius:var(--radius-sm);padding:9px 11px;cursor:pointer;font-size:0.76rem;color:var(--text-secondary);transition:var(--transition);font-family:inherit;line-height:1.4;" onmouseenter="this.style.borderColor='var(--brand-accent)';this.style.color='var(--text-primary)'" onmouseleave="this.style.borderColor='';this.style.color='var(--text-secondary)'">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- History -->
        <div class="card" style="padding:16px;">
          <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:10px;">${L.history_title}</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${L.history.map(h => `
              <div style="font-size:0.75rem;color:var(--text-muted);padding:5px 8px;border-radius:var(--radius-sm);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:var(--transition);" onmouseenter="this.style.background='rgba(255,255,255,0.04)'" onmouseleave="this.style.background=''">
                💬 ${h}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Chat Area -->
      <div style="display:flex;flex-direction:column;background:var(--bg-card);border:1px solid var(--bg-border);border-radius:var(--radius-lg);overflow:hidden;">

        <!-- Chat messages -->
        <div id="ai-messages" style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:16px;" dir="${isRTL?'rtl':'ltr'}">

          <!-- Welcome message -->
          <div style="display:flex;gap:10px;align-items:flex-start;">
            <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--brand-accent),var(--brand-purple));display:flex;align-items:center;justify-content:center;font-size:0.9rem;flex-shrink:0;">🤖</div>
            <div style="max-width:80%;">
              <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:5px;">${L.ai_name} · ${L.now}</div>
              <div style="background:rgba(0,87,255,0.08);border:1px solid rgba(0,87,255,0.15);border-radius:0 var(--radius-md) var(--radius-md) var(--radius-md);padding:14px 16px;font-size:0.84rem;line-height:1.6;">
                ${L.welcome_msg}
              </div>
              <!-- Suggestion chips below message -->
              <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;">
                ${L.quick_chips.map(c => `<button class="chip" onclick="aiSendSuggestion('${c.replace(/'/g,"\\'")}',this)" style="font-size:0.7rem;">${c}</button>`).join('')}
              </div>
            </div>
          </div>

        </div>

        <!-- Typing indicator (hidden) -->
        <div id="ai-typing" class="hidden" style="padding:0 20px 10px;display:flex;gap:10px;align-items:center;">
          <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--brand-accent),var(--brand-purple));display:flex;align-items:center;justify-content:center;font-size:0.9rem;flex-shrink:0;">🤖</div>
          <div style="background:rgba(0,87,255,0.08);border:1px solid rgba(0,87,255,0.15);border-radius:0 var(--radius-md) var(--radius-md) var(--radius-md);padding:12px 16px;">
            <div style="display:flex;gap:4px;align-items:center;">
              <span style="width:6px;height:6px;border-radius:50%;background:var(--brand-accent);animation:typingDot .8s ease-in-out infinite;"></span>
              <span style="width:6px;height:6px;border-radius:50%;background:var(--brand-accent);animation:typingDot .8s ease-in-out .15s infinite;"></span>
              <span style="width:6px;height:6px;border-radius:50%;background:var(--brand-accent);animation:typingDot .8s ease-in-out .3s infinite;"></span>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div style="padding:16px;border-top:1px solid var(--bg-border);display:flex;gap:10px;align-items:flex-end;" dir="${isRTL?'rtl':'ltr'}">
          <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid var(--bg-border-light);border-radius:var(--radius-md);padding:10px 14px;display:flex;align-items:flex-end;gap:8px;transition:var(--transition);" onfocus="this.style.borderColor='var(--brand-accent)'" id="ai-input-wrap">
            <textarea id="ai-input" rows="1"
              placeholder="${L.input_ph}"
              onkeydown="aiHandleKey(event)"
              oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'"
              style="flex:1;background:transparent;border:none;outline:none;color:var(--text-primary);font-size:0.85rem;font-family:inherit;resize:none;line-height:1.5;max-height:120px;overflow-y:auto;direction:${isRTL?'rtl':'ltr'};"
            ></textarea>
            <button onclick="aiSend()" style="width:34px;height:34px;border-radius:var(--radius-sm);background:var(--brand-accent);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.9rem;flex-shrink:0;transition:var(--transition);" onmouseenter="this.style.background='#1a6aff'" onmouseleave="this.style.background='var(--brand-accent)'">
              ${isRTL ? '←' : '→'}
            </button>
          </div>
        </div>
        <div style="padding:0 16px 10px;font-size:0.65rem;color:var(--text-muted);text-align:center;">${L.disclaimer}</div>
      </div>
    </div>
  </div>

  <style>
  @keyframes typingDot {
    0%, 80%, 100% { transform: scale(1); opacity:.4; }
    40% { transform: scale(1.3); opacity:1; }
  }
  </style>`;
};

// ─────────────────────────────────────────────
// AI RESPONSES (per language)
// ─────────────────────────────────────────────
const AI_RESPONSES = {
  pt: {
    default: [
      'Analisando os dados da plataforma... Com base no histórico de treinamentos, recomendo priorizar os colaboradores do departamento de **Operações**, que apresenta o menor índice de conclusão (61%) e o maior risco humano.',
      'Identifico uma lacuna importante em **Cloud Security** e **Resposta a Incidentes** — apenas 42% dos colaboradores concluíram esses módulos. Sugiro uma trilha de reforço com prazo de 30 dias.',
      'O **Compliance Score** da organização está em 91%, porém o departamento Financeiro apresenta atraso nos módulos de **AML** e **Conflito de Interesses**. Recomendo atribuição urgente.',
      'Com base nos padrões de engajamento, os melhores horários para notificações de treinamento são **terças e quartas-feiras entre 9h-11h** — taxa de abertura 34% maior nesses períodos.',
      'Detectei **12 usuários com Human Risk Score abaixo de 40**. Recomendo um plano de treinamento individualizado com acompanhamento semanal pelos gestores diretos.',
      'Para atender à **LGPD e ao GDPR** simultaneamente, os colaboradores que acessam dados de titulares europeus devem completar tanto o módulo LGPD quanto o GDPR Fundamentals. Posso gerar uma lista de quem ainda está pendente.',
      'O certificado de **Ana Oliveira** no treinamento "Phishing & Engenharia Social" expira em 15/11/2025. Recomendo configurar notificação automática 60 dias antes do vencimento.',
      'Analisando os resultados das simulações de phishing: **23% dos colaboradores clicaram no link malicioso** — acima da média do setor (17%). Recomendo reforço imediato do módulo "Engenharia Social".',
    ],
    phishing: 'Com base nos dados de simulação de phishing da plataforma, identifiquei que **23% dos colaboradores clicaram em links maliciosos** no último trimestre. Os departamentos mais vulneráveis são **Operações (41%)** e **Comercial (29%)**.\n\nRecomendo:\n1. **Atribuição imediata** do módulo "Phishing & Engenharia Social" para esses departamentos\n2. **Simulação adicional** em 30 dias para medir evolução\n3. **Coaching individual** para os 12 usuários que falharam mais de 2 vezes',
    lgpd: 'A análise de conformidade com **LGPD** indica score de **91%** — excelente! Porém há **18 colaboradores** que ainda não completaram o módulo obrigatório. Posso gerar um relatório detalhado e iniciar a notificação automática para esses usuários.',
    report: 'Gerando relatório executivo consolidado...\n\n📊 **Resumo do Período (Nov/2024)**\n- Treinamentos concluídos: **2.847** (+234 vs mês anterior)\n- Certificados emitidos: **1.204**\n- Compliance Score: **91%** ↑\n- Human Risk Score: **65%** ↑ (+4pts)\n- Departamento destaque: **RH (96% conclusão)**\n- Atenção necessária: **Operações (61% conclusão)**',
    trilha: 'Criei uma **Trilha de Aprendizagem Personalizada** com base no perfil de risco:\n\n🛡 **Módulo 1:** Phishing & Engenharia Social (45 min) — Prioridade ALTA\n🔑 **Módulo 2:** Senhas Seguras e MFA (30 min)\n🏠 **Módulo 3:** Home Office Seguro (40 min)\n📋 **Módulo 4:** Código de Ética (45 min)\n\nPrazo sugerido: **30 dias** · Modo: Sequencial obrigatório',
  },
  en: {
    default: [
      'Analyzing platform data... Based on training history, I recommend prioritizing employees from the **Operations** department, which shows the lowest completion rate (61%) and highest human risk.',
      'I identify a significant gap in **Cloud Security** and **Incident Response** — only 42% of employees have completed these modules. I suggest a reinforcement path with a 30-day deadline.',
      'The organization\'s **Compliance Score** is at 91%, however the Finance department has delays in **AML** and **Conflict of Interest** modules. Urgent assignment is recommended.',
      'Based on engagement patterns, the best times for training notifications are **Tuesdays and Wednesdays between 9-11am** — 34% higher open rate during these periods.',
    ],
    phishing: 'Based on phishing simulation data, I identified that **23% of employees clicked on malicious links** last quarter. The most vulnerable departments are **Operations (41%)** and **Sales (29%)**.\n\nRecommendations:\n1. **Immediate assignment** of "Phishing & Social Engineering" module\n2. **Additional simulation** in 30 days to measure progress\n3. **Individual coaching** for the 12 users who failed more than twice',
    lgpd: '**GDPR compliance** analysis shows a score of **91%** — excellent! However, **18 employees** have not yet completed the mandatory module. I can generate a detailed report and start automatic notifications for these users.',
    report: 'Generating consolidated executive report...\n\n📊 **Period Summary (Nov/2024)**\n- Completed trainings: **2,847** (+234 vs previous month)\n- Certificates issued: **1,204**\n- Compliance Score: **91%** ↑\n- Human Risk Score: **65%** ↑ (+4pts)',
    trilha: 'I created a **Personalized Learning Path** based on risk profile:\n\n🛡 **Module 1:** Phishing & Social Engineering (45 min) — HIGH Priority\n🔑 **Module 2:** Secure Passwords and MFA (30 min)\n🏠 **Module 3:** Secure Remote Work (40 min)\n📋 **Module 4:** Code of Ethics (45 min)\n\nSuggested deadline: **30 days** · Mode: Mandatory sequential',
  },
  es: { default:['Analizando los datos de la plataforma... Basándome en el historial de formaciones, recomiendo priorizar a los empleados del departamento de **Operaciones**, que presenta el índice de finalización más bajo (61%).'], phishing:'Basándome en datos de simulación de phishing, identifiqué que **el 23% de los empleados hizo clic en enlaces maliciosos** el último trimestre.', lgpd:'El análisis de cumplimiento **LGPD/GDPR** muestra una puntuación del **91%**. Sin embargo, **18 empleados** aún no han completado el módulo obligatorio.', report:'Generando informe ejecutivo consolidado...\n\n📊 **Resumen del Período**\n- Formaciones completadas: **2.847**\n- Certificados emitidos: **1.204**', trilha:'Creé una **Ruta de Aprendizaje Personalizada** basada en el perfil de riesgo:\n\n🛡 **Módulo 1:** Phishing y Ingeniería Social\n🔑 **Módulo 2:** Contraseñas Seguras y MFA\n📋 **Módulo 3:** Código de Ética' },
  fr: { default:['Analyse des données de la plateforme... Sur la base de l\'historique des formations, je recommande de prioriser les employés du département **Opérations**, qui présente le taux de complétion le plus bas (61%).'], phishing:'Sur la base des données de simulation de phishing, j\'ai identifié que **23% des employés ont cliqué sur des liens malveillants** au dernier trimestre.', lgpd:'L\'analyse de conformité **LGPD/GDPR** indique un score de **91%**. Cependant, **18 employés** n\'ont pas encore terminé le module obligatoire.', report:'Génération du rapport exécutif consolidé...\n\n📊 **Résumé de la Période**\n- Formations terminées: **2 847**\n- Certificats émis: **1 204**', trilha:'J\'ai créé un **Parcours d\'Apprentissage Personnalisé** basé sur le profil de risque:\n\n🛡 **Module 1:** Phishing et Ingénierie Sociale\n🔑 **Module 2:** Mots de Passe et MFA\n📋 **Module 3:** Code d\'Éthique' },
  ar: { default:['تحليل بيانات المنصة... بناءً على سجل التدريبات، أوصي بإعطاء الأولوية لموظفي قسم **العمليات**، الذي يسجل أدنى معدل إتمام (61%) وأعلى مستوى من المخاطر البشرية.'], phishing:'بناءً على بيانات محاكاة التصيد الاحتيالي، وجدت أن **23% من الموظفين نقروا على روابط ضارة** في الربع الأخير. الأقسام الأكثر عرضة للخطر: **العمليات (41%)** و**المبيعات (29%)**.', lgpd:'يُظهر تحليل الامتثال **LGPD/GDPR** درجة **91%**. ومع ذلك، لم يكمل **18 موظفًا** الوحدة الإلزامية بعد.', report:'جاري إنشاء التقرير التنفيذي الموحد...\n\n📊 **ملخص الفترة**\n- التدريبات المكتملة: **2,847**\n- الشهادات الصادرة: **1,204**', trilha:'قمت بإنشاء **مسار تعلم مخصص** بناءً على ملف المخاطر:\n\n🛡 **الوحدة 1:** التصيد والهندسة الاجتماعية\n🔑 **الوحدة 2:** كلمات المرور والمصادقة الثنائية\n📋 **الوحدة 3:** قواعد الأخلاقيات' },
};

function getAIResponse(msg, lang) {
  const responses = AI_RESPONSES[lang] || AI_RESPONSES.pt;
  const lower = msg.toLowerCase();
  if (lower.includes('phish') || lower.includes('simulaç') || lower.includes('simulation')) return responses.phishing;
  if (lower.includes('lgpd') || lower.includes('gdpr') || lower.includes('privac') || lower.includes('privacy')) return responses.lgpd;
  if (lower.includes('relatório') || lower.includes('report') || lower.includes('informe') || lower.includes('rapport') || lower.includes('تقرير')) return responses.report;
  if (lower.includes('trilha') || lower.includes('path') || lower.includes('ruta') || lower.includes('parcours') || lower.includes('مسار')) return responses.trilha;
  const arr = responses.default;
  return arr[Math.floor(Math.random() * arr.length)];
}

function markdownToHTML(md) {
  return md
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p style="margin-top:8px;">')
    .replace(/\n(\d+)\.\s/g, '<br>$1. ')
    .replace(/\n/g, '<br>');
}

window.aiSend = function() {
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  input.style.height = 'auto';
  _aiAppendMessage(msg, 'user');
  _aiShowTyping();
  const lang = APP.lang;
  setTimeout(() => {
    _aiHideTyping();
    _aiAppendMessage(getAIResponse(msg, lang), 'ai');
  }, 1200 + Math.random() * 800);
};

window.aiSendSuggestion = function(msg) {
  const input = document.getElementById('ai-input');
  if (input) input.value = msg;
  setTimeout(() => aiSend(), 100);
};

window.aiHandleKey = function(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); aiSend(); }
};

window.aiChangeLang = function() {
  const sel = document.getElementById('ai-lang-select');
  if (sel) showToast('Idioma da IA alterado para ' + sel.value.toUpperCase(), 'info');
};

function _aiAppendMessage(text, role) {
  const container = document.getElementById('ai-messages');
  if (!container) return;
  
  const isUser = role === 'user';
  const L = aiL[APP.lang] || aiL.pt;
  const div = document.createElement('div');
  div.style.cssText = `display:flex;gap:10px;align-items:flex-start;${isUser?'flex-direction:row-reverse;':''};animation:fadeIn .3s ease;`;
  div.innerHTML = isUser
    ? `<div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--brand-accent),var(--brand-purple));display:flex;align-items:center;justify-content:center;font-size:0.78rem;font-weight:700;color:#fff;flex-shrink:0;">AL</div>
       <div style="max-width:75%;">
         <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:5px;text-align:right;">${L.you} · ${L.now}</div>
         <div style="background:var(--brand-accent);border-radius:var(--radius-md) 0 var(--radius-md) var(--radius-md);padding:12px 16px;font-size:0.84rem;line-height:1.6;">${text}</div>
       </div>`
    : `<div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--brand-accent),var(--brand-purple));display:flex;align-items:center;justify-content:center;font-size:0.9rem;flex-shrink:0;">🤖</div>
       <div style="max-width:80%;">
         <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:5px;">${L.ai_name} · ${L.now}</div>
         <div style="background:rgba(0,87,255,0.08);border:1px solid rgba(0,87,255,0.15);border-radius:0 var(--radius-md) var(--radius-md) var(--radius-md);padding:14px 16px;font-size:0.84rem;line-height:1.7;">
           <p style="margin:0;">${markdownToHTML(text)}</p>
         </div>
         <div style="display:flex;gap:6px;margin-top:8px;">
           <button class="btn btn-ghost btn-sm" style="font-size:0.68rem;" onclick="showToast('Copiado!','success')">📋</button>
           <button class="btn btn-ghost btn-sm" style="font-size:0.68rem;" onclick="showToast('Feedback registrado','success')">👍</button>
           <button class="btn btn-ghost btn-sm" style="font-size:0.68rem;" onclick="showToast('Feedback registrado','success')">👎</button>
         </div>
       </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function _aiShowTyping() {
  const el = document.getElementById('ai-typing');
  if (el) el.classList.remove('hidden');
  const c = document.getElementById('ai-messages');
  if (c) c.scrollTop = c.scrollHeight;
}
function _aiHideTyping() {
  const el = document.getElementById('ai-typing');
  if (el) el.classList.add('hidden');
}

const aiL = {
  pt: {
    title:'IA Assistente', sub:'Inteligência artificial especializada em treinamento corporativo',
    status_online:'Online · GPT-4o', ai_name:'Brandvakt AI', ai_role:'Compliance & Training Intelligence',
    you: 'Você', now: 'agora',
    cap_title:'Capacidades',
    capabilities:[
      {icon:'🎯',label:'Recomendar treinamentos personalizados'},
      {icon:'🛤',label:'Criar trilhas de aprendizagem'},
      {icon:'🔍',label:'Identificar lacunas de conhecimento'},
      {icon:'📊',label:'Gerar relatórios executivos'},
      {icon:'💬',label:'Responder dúvidas de compliance'},
      {icon:'⚠️',label:'Analisar e priorizar riscos humanos'},
      {icon:'🌍',label:'Suporte em 5 idiomas'},
    ],
    suggest_title:'Sugestões',
    suggestions:[
      'Quais colaboradores precisam de treinamento urgente?',
      'Gere um relatório executivo de compliance',
      'Crie uma trilha para o departamento de TI',
      'Analise o risco de phishing na organização',
      'Quais certificados vencem em 30 dias?',
      'Recomende treinamentos para reduzir o Human Risk Score',
    ],
    history_title:'Conversas Recentes',
    history:['Análise de risco phishing','Relatório LGPD novembro','Trilha Operações'],
    quick_chips:['📊 Relatório Executivo','🛡 Risco Phishing','🎓 Nova Trilha','📜 LGPD/GDPR'],
    input_ph:'Pergunte sobre treinamentos, compliance, riscos... (Enter para enviar)',
    disclaimer:'Brandvakt AI pode cometer erros. Sempre valide informações críticas com sua equipe de compliance.',
    welcome_msg:'Olá! Sou o <strong>Brandvakt AI</strong>, seu assistente especializado em treinamento corporativo, compliance e gestão de riscos. Posso ajudá-lo a analisar dados da plataforma, recomendar treinamentos e gerar relatórios executivos. Como posso ajudar hoje?',
  },
  en: {
    title:'AI Assistant', sub:'Artificial intelligence specialized in corporate training',
    status_online:'Online · GPT-4o', ai_name:'Brandvakt AI', ai_role:'Compliance & Training Intelligence',
    you: 'You', now: 'now',
    cap_title:'Capabilities',
    capabilities:[
      {icon:'🎯',label:'Recommend personalized trainings'},
      {icon:'🛤',label:'Create learning paths'},
      {icon:'🔍',label:'Identify knowledge gaps'},
      {icon:'📊',label:'Generate executive reports'},
      {icon:'💬',label:'Answer compliance questions'},
      {icon:'⚠️',label:'Analyze and prioritize human risks'},
      {icon:'🌍',label:'Support in 5 languages'},
    ],
    suggest_title:'Suggestions',
    suggestions:[
      'Which employees need urgent training?',
      'Generate a compliance executive report',
      'Create a path for the IT department',
      'Analyze phishing risk in the organization',
      'Which certificates expire in 30 days?',
      'Recommend trainings to reduce Human Risk Score',
    ],
    history_title:'Recent Conversations',
    history:['Phishing risk analysis','GDPR November report','Operations path'],
    quick_chips:['📊 Executive Report','🛡 Phishing Risk','🎓 New Path','📜 LGPD/GDPR'],
    input_ph:'Ask about trainings, compliance, risks... (Enter to send)',
    disclaimer:'Brandvakt AI can make mistakes. Always validate critical information with your compliance team.',
    welcome_msg:'Hello! I\'m <strong>Brandvakt AI</strong>, your assistant specialized in corporate training, compliance and risk management. I can help you analyze platform data, recommend trainings and generate executive reports. How can I help today?',
  },
  es:{ title:'Asistente IA', sub:'Inteligencia artificial especializada en formación corporativa', status_online:'En línea · GPT-4o', ai_name:'Brandvakt AI', ai_role:'Compliance & Training Intelligence', you:'Tú', now:'ahora', cap_title:'Capacidades', capabilities:[{icon:'🎯',label:'Recomendar formaciones personalizadas'},{icon:'🛤',label:'Crear rutas de aprendizaje'},{icon:'🔍',label:'Identificar lagunas de conocimiento'},{icon:'📊',label:'Generar informes ejecutivos'},{icon:'💬',label:'Responder dudas de cumplimiento'},{icon:'⚠️',label:'Analizar y priorizar riesgos humanos'},{icon:'🌍',label:'Soporte en 5 idiomas'}], suggest_title:'Sugerencias', suggestions:['¿Qué empleados necesitan formación urgente?','Genera un informe ejecutivo de cumplimiento','Crea una ruta para el departamento de TI','Analiza el riesgo de phishing','¿Qué certificados vencen en 30 días?'], history_title:'Conversaciones Recientes', history:['Análisis riesgo phishing','Informe GDPR noviembre','Ruta Operaciones'], quick_chips:['📊 Informe Ejecutivo','🛡 Riesgo Phishing','🎓 Nueva Ruta','📜 LGPD/GDPR'], input_ph:'Pregunta sobre formaciones, cumplimiento, riesgos... (Enter para enviar)', disclaimer:'Brandvakt AI puede cometer errores. Valide siempre la información crítica con su equipo de cumplimiento.', welcome_msg:'¡Hola! Soy <strong>Brandvakt AI</strong>, tu asistente especializado en formación corporativa, cumplimiento y gestión de riesgos. ¿En qué puedo ayudarte hoy?' },
  fr:{ title:'Assistant IA', sub:'Intelligence artificielle spécialisée en formation corporative', status_online:'En ligne · GPT-4o', ai_name:'Brandvakt AI', ai_role:'Compliance & Training Intelligence', you:'Vous', now:'maintenant', cap_title:'Capacités', capabilities:[{icon:'🎯',label:'Recommander des formations personnalisées'},{icon:'🛤',label:"Créer des parcours d'apprentissage"},{icon:'🔍',label:'Identifier les lacunes de connaissances'},{icon:'📊',label:'Générer des rapports exécutifs'},{icon:'💬',label:'Répondre aux questions de conformité'},{icon:'⚠️',label:'Analyser les risques humains'},{icon:'🌍',label:'Support en 5 langues'}], suggest_title:'Suggestions', suggestions:['Quels employés ont besoin de formation urgente?','Générer un rapport exécutif de conformité','Créer un parcours pour le département IT','Analyser le risque de phishing','Quels certificats expirent dans 30 jours?'], history_title:'Conversations Récentes', history:['Analyse risque phishing','Rapport RGPD novembre','Parcours Opérations'], quick_chips:['📊 Rapport Exécutif','🛡 Risque Phishing','🎓 Nouveau Parcours','📜 LGPD/GDPR'], input_ph:'Posez des questions sur les formations, la conformité, les risques... (Entrée pour envoyer)', disclaimer:'Brandvakt AI peut faire des erreurs. Validez toujours les informations critiques.', welcome_msg:'Bonjour! Je suis <strong>Brandvakt AI</strong>, votre assistant spécialisé en formation corporative et conformité. Comment puis-je vous aider?' },
};

window.initPage_ai = function() {
  const input = document.getElementById('ai-input');
  if (input) setTimeout(() => input.focus(), 200);
};
