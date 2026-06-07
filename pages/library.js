// ══════════════════════════════════════════════════════════════
//  PAGE: BIBLIOTECA DE TREINAMENTOS
// ══════════════════════════════════════════════════════════════

// ── Inline Course Player v2 — fully embedded, zero iframe ──────────

const COURSE_COMPLETIONS = {};
const COURSE_FILES = { 1: true, 2: true, 3: true, 10: true };

// Media assets per course (video by lang + PDF)
var COURSE_MEDIA = {
  1: {
    video: {
      pt: 'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Mastering.Phishing.Social.Engineering_.PT.mp4'
    }
  },
  3: {
    video: {
      pt:   'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Proteja.Seu.Home.Office_.PT.mp4',
      br:   'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Proteja.Seu.Home.Office_.BR.mp4',
      en:   'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Cybersecurity.for.Remote.Work.mp4',
      fr:   'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Scurit.numrique.en.tltravail.mp4',
      es:   'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Ciberseguridad.en.el.home.office.mp4'
    },
    pdf: 'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Home_Office_Seguro_Cybersecurity_Curso.pdf'
  },
  2: {
    video: {
      pt: 'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Senhas.fortes.e.MFA.-.PT.mp4'
    }
  },
  10: {
    video: {
      pt: 'https://github.com/luizcoutinho-spec/brandvakt-academy/releases/download/v1.0-media/Anticorrupo.e.Antissuborno_.Conceitos.Essenciais.em.3.Minutos.mp4'
    }
  }
};

(function(){
  if(document.getElementById('cp-css')) return;
  var s=document.createElement('style'); s.id='cp-css';
  s.textContent="#cp-ov{position:fixed;inset:0;z-index:9999;background:#060e1e;display:flex;flex-direction:column;animation:cpFd .22s ease;}@keyframes cpFd{from{opacity:0}to{opacity:1}}#cp-tb{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0;}.cp-brd{display:flex;align-items:center;gap:10px;}.cp-lg{width:30px;height:30px;border-radius:8px;background:linear-gradient(135deg,#00B4D8,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:900;color:#000;}.cp-nm{font-size:.92rem;font-weight:700;color:#f0f4ff;}.cp-mt{font-size:.78rem;color:#6b7280;margin-top:1px;}.cp-cls{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#94a3b8;font-size:.78rem;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit;}.cp-cls:hover{background:rgba(239,68,68,.12);color:#ef4444;border-color:rgba(239,68,68,.25);}#cp-bd{flex:1;overflow-y:auto;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(ellipse at 50% 40%,rgba(0,180,216,.05) 0%,transparent 60%),#060e1e;}#cp-pl{background:#0C1F3F;border-radius:16px;width:100%;max-width:760px;box-shadow:0 24px 64px rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.08);}.cp-pb{display:flex;align-items:center;gap:6px;padding:12px 20px;background:rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.06);}.cp-ps{flex:1;height:3px;border-radius:2px;background:rgba(255,255,255,.12);transition:background .4s;}.cp-ps.done{background:#00B4D8;}.cp-ps.active{background:#fff;}.cp-pl2{font-size:12px;color:rgba(255,255,255,.35);min-width:70px;text-align:right;}.cp-tw{padding:0 20px;background:rgba(0,0,0,.15);}.cp-tr{display:flex;align-items:center;gap:10px;padding:7px 0 3px;}.cp-tt{flex:1;height:3px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden;}.cp-tf{height:100%;background:linear-gradient(90deg,#00B4D8,#8b5cf6);border-radius:2px;transition:width 1s linear;}.cp-tc{font-size:14px;font-weight:700;color:#00B4D8;min-width:36px;text-align:right;}.cp-to{font-size:10px;color:rgba(255,255,255,.25);min-width:36px;}.cp-tn{display:flex;justify-content:space-between;font-size:9px;color:rgba(255,255,255,.22);padding-bottom:6px;}.cp-sl{min-height:310px;display:flex;flex-direction:column;padding:22px 28px 14px;}.cp-tg{font-size:11.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#00B4D8;margin-bottom:8px;display:flex;align-items:center;gap:6px;}.cp-tg::before{content:\"\";display:inline-block;width:14px;height:2px;background:#00B4D8;border-radius:1px;}.cp-ti{font-size:24px;font-weight:700;color:#fff;line-height:1.25;margin-bottom:5px;}.cp-ti span{color:#00B4D8;}.cp-du{display:inline-flex;align-items:center;gap:5px;font-size:13px;color:rgba(255,255,255,.35);margin-bottom:11px;}.cp-dd{width:4px;height:4px;border-radius:50%;background:#00B4D8;}.cp-by{font-size:16px;color:rgba(255,255,255,.72);line-height:1.65;flex:1;}.cp-by p{margin-bottom:8px;}.cp-by strong{color:#fff;}.cp-vs{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:14px;margin:10px 0;}.cp-vr{display:flex;gap:10px;flex-wrap:wrap;}.cp-vc{flex:1;min-width:100px;background:rgba(0,180,216,.08);border:1px solid rgba(0,180,216,.18);border-radius:9px;padding:10px 8px;text-align:center;transition:transform .2s;}.cp-vc:hover{transform:translateY(-2px);}.cp-vc .ic{font-size:22px;margin-bottom:4px;display:block;}.cp-vc .lb{font-size:12px;color:rgba(255,255,255,.5);line-height:1.3;}.cp-vc .vl{font-size:14px;font-weight:600;color:#fff;margin-top:3px;}.cp-ul{list-style:none;}.cp-ul li{display:flex;align-items:flex-start;gap:9px;font-size:15px;color:rgba(255,255,255,.78);margin-bottom:8px;line-height:1.45;}.ci{width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:9.5px;margin-top:1px;}.ci-g{background:rgba(39,174,96,.2);color:#27AE60;}.ci-b{background:rgba(226,75,74,.2);color:#E24B4A;}.ci-i{background:rgba(0,180,216,.2);color:#00B4D8;}.cp-sr{display:flex;align-items:center;gap:8px;margin-bottom:7px;}.cp-sl2{font-size:13.5px;color:rgba(255,255,255,.55);width:155px;flex-shrink:0;}.cp-sb{flex:1;height:5px;border-radius:3px;background:rgba(255,255,255,.08);}.cp-sf{height:100%;border-radius:3px;transition:width 1.2s ease;}.cp-st{font-size:12px;color:rgba(255,255,255,.4);width:90px;text-align:right;}.cp-fc{display:flex;gap:8px;margin-top:10px;}.cp-fa{flex:1;border-radius:10px;padding:10px 8px;text-align:center;transition:transform .2s;}.cp-fa:hover{transform:translateY(-2px);}.fk{background:rgba(0,180,216,.10);border:1px solid rgba(0,180,216,.25);}.fh{background:rgba(240,165,0,.10);border:1px solid rgba(240,165,0,.25);}.fa{background:rgba(39,174,96,.10);border:1px solid rgba(39,174,96,.25);}.cp-fa .fi{font-size:22px;margin-bottom:5px;display:block;}.cp-fa .ft{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:3px;}.fk .ft{color:#00B4D8;}.fh .ft{color:#F0A500;}.fa .ft{color:#27AE60;}.cp-fa .fd{font-size:12px;color:rgba(255,255,255,.5);line-height:1.4;}.cp-qq{font-size:17px;font-weight:600;color:#fff;margin-bottom:13px;line-height:1.4;}.cp-qc{font-size:12.5px;color:rgba(255,255,255,.35);margin-bottom:5px;}.cp-qop{display:flex;flex-direction:column;gap:7px;}.cp-qo{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:9px;padding:12px 16px;font-size:15px;color:rgba(255,255,255,.78);cursor:pointer;transition:all .2s;text-align:left;font-family:inherit;}.cp-qo:hover{background:rgba(0,180,216,.10);border-color:rgba(0,180,216,.35);}.cp-qo.correct{background:rgba(39,174,96,.14);border-color:#27AE60;color:#fff;pointer-events:none;}.cp-qo.wrong{background:rgba(226,75,74,.14);border-color:#E24B4A;color:#fff;pointer-events:none;}.cp-qo.disabled{pointer-events:none;}.cp-qfb{margin-top:9px;font-size:14px;padding:9px 13px;border-radius:9px;line-height:1.5;}.qfb-ok{background:rgba(39,174,96,.10);color:#6ee7a0;border:1px solid rgba(39,174,96,.18);}.qfb-no{background:rgba(226,75,74,.10);color:#f9a8a7;border:1px solid rgba(226,75,74,.18);}.cp-rw{text-align:center;padding:12px 0 8px;}.cp-sc{font-size:68px;font-weight:800;line-height:1;letter-spacing:-.04em;}.cp-sc.pass{color:#27AE60;text-shadow:0 0 40px rgba(39,174,96,.4);}.cp-sc.fail{color:#E24B4A;}.cp-scl{font-size:16px;color:rgba(255,255,255,.55);margin:6px 0 14px;}.cp-cert{display:inline-flex;align-items:center;gap:8px;background:rgba(0,180,216,.08);border:1px solid rgba(0,180,216,.25);border-radius:9px;padding:12px 18px;font-size:15px;color:#00B4D8;font-weight:500;margin-bottom:10px;}.cp-ct{display:flex;align-items:center;justify-content:space-between;padding:11px 20px;background:rgba(0,0,0,.20);border-top:1px solid rgba(255,255,255,.06);}.cpb{font-size:14.5px;font-weight:600;padding:8px 18px;border-radius:8px;cursor:pointer;border:none;transition:all .2s;font-family:inherit;}.cpb-p{background:linear-gradient(135deg,#00B4D8,#0099bb);color:#0C1F3F;box-shadow:0 4px 14px rgba(0,180,216,.25);}.cpb-p:hover{background:linear-gradient(135deg,#00c8f0,#00B4D8);transform:translateY(-1px);}.cpb-g{background:transparent;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.12);}.cpb-g:hover{background:rgba(255,255,255,.06);color:#fff;}.cpb:disabled{opacity:.25;cursor:not-allowed;transform:none;box-shadow:none;}.cp-si{font-size:12.5px;color:rgba(255,255,255,.25);}.cp-ft{text-align:center;padding:9px;font-size:11px;color:rgba(255,255,255,.14);letter-spacing:.10em;}.cp-iso{display:inline-flex;align-items:center;gap:4px;background:rgba(0,180,216,.08);border:1px solid rgba(0,180,216,.15);border-radius:5px;padding:2px 8px;font-size:11px;color:rgba(0,180,216,.7);margin-left:6px;}.cp-bn{position:fixed;top:68px;left:50%;transform:translateX(-50%);border-radius:10px;padding:10px 20px;font-size:.84rem;font-weight:700;z-index:10001;animation:cpSl .35s ease;display:flex;align-items:center;gap:8px;white-space:nowrap;}.cpbn-p{background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.30);color:#22c55e;}.cpbn-f{background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.30);color:#f59e0b;}@keyframes cpSl{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}";
  document.head.appendChild(s);
})();

(function(){
  if(document.getElementById('cp-tab-css')) return;
  var s=document.createElement('style'); s.id='cp-tab-css';
  s.textContent=[
    '#cp-ov{flex-direction:column!important;}',
    '#cp-tabs{display:flex;gap:0;padding:0 10px;background:rgba(0,0,0,.30);border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0;}',
    '.cp-tab{flex:1;padding:11px 6px;background:transparent;border:none;border-bottom:2px solid transparent;color:rgba(255,255,255,.36);font-size:12.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;white-space:nowrap;}',
    '.cp-tab:hover{color:rgba(255,255,255,.7);}',
    '.cp-tab.active{color:#00B4D8;border-bottom-color:#00B4D8;}',
    '#cp-bd{flex:1;overflow:hidden;display:flex;flex-direction:column;}',
    '#cp-video-panel{flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;padding:24px 20px;gap:16px;background:#060e1e;}',
    '#cp-video-panel video{width:100%;max-width:800px;border-radius:12px;background:#000;box-shadow:0 8px 40px rgba(0,0,0,.8);}',
    '#cp-video-meta{width:100%;max-width:800px;}',
    '.cp-vlang{padding:5px 14px;border-radius:99px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.42);background:transparent;font-family:inherit;transition:all .2s;}',
    '.cp-vlang:hover{border-color:rgba(0,180,216,.5);color:#00B4D8;}',
    '.cp-vlang.active{background:rgba(0,180,216,.14);border-color:#00B4D8;color:#00B4D8;}',
    '#cp-pl{flex:1;overflow-y:auto;background:#0C1F3F;border-radius:0;box-shadow:none;border:none;max-width:100%;width:100%;}',
    '#cp-material-panel{flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;gap:20px;background:#060e1e;}',
    '.cp-pdf-card{width:100%;max-width:480px;background:#0C1F3F;border:1px solid rgba(255,255,255,.10);border-radius:16px;padding:32px;text-align:center;}',
  ].join('');
  document.head.appendChild(s);
})();

var CP_SLIDES=[
  {tag:'Introdução',title:'Senhas Seguras &<br><span>Autenticação Multifator</span>',dur:'0:15',sec:15,start:0,
   body:'<p>A <strong>primeira linha de defesa</strong> da empresa começa com você — em cada login, todos os dias.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🎯</span><div class="lb">5 módulos</div><div class="vl">Objetivos claros</div></div><div class="cp-vc"><span class="ic">⏱</span><div class="lb">Duração</div><div class="vl">5 minutos</div></div><div class="cp-vc"><span class="ic">📋</span><div class="lb">Quiz final</div><div class="vl">5 questões</div></div><div class="cp-vc"><span class="ic">🏅</span><div class="lb">Certificado</div><div class="vl">ISO 27001</div></div></div>'},
  {tag:'Módulo 1 — Por que importa',title:'Senhas Fracas São a<br><span>Porta de Entrada</span>',dur:'0:55',sec:55,start:15,
   body:'<p><strong>+80% das violações</strong> envolvem credenciais comprometidas. Três vetores:</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🎣</span><div class="lb">Phishing</div><div class="vl">E-mail falso captura sua senha</div></div><div class="cp-vc"><span class="ic">💧</span><div class="lb">Vazamento</div><div class="vl">Senha pessoal = risco corporativo</div></div><div class="cp-vc"><span class="ic">🤖</span><div class="lb">Força bruta</div><div class="vl">Milhares de tentativas/segundo</div></div></div>'},
  {tag:'Módulo 2 — Crie senhas fortes',title:'Difícil de Adivinhar,<br><span>Fácil de Lembrar</span>',dur:'1:00',sec:60,start:70,
   body:'<p>Use <strong>frases-senha</strong>. "Café&amp;Piano#2024!" é simples para você e impossível para um atacante:</p>',
   vis:'<div class="cp-vs"><div class="cp-sr"><span class="cp-sl2">senha123</span><div class="cp-sb"><div class="cp-sf" style="width:3%;background:#E24B4A"></div></div><span class="cp-st">&lt;1 segundo</span></div><div class="cp-sr"><span class="cp-sl2">Jo@o1985</span><div class="cp-sb"><div class="cp-sf" style="width:20%;background:#F0A500"></div></div><span class="cp-st">~2 horas</span></div><div class="cp-sr"><span class="cp-sl2">Café&amp;Piano#2024!</span><div class="cp-sb"><div class="cp-sf" style="width:85%;background:#27AE60"></div></div><span class="cp-st">+300 anos</span></div></div><ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Mínimo <strong>12 caracteres</strong> — maiúsculas, minúsculas, números e símbolos</span></li><li><span class="ci ci-b">✗</span><span>Nunca reutilize a mesma senha em sistemas diferentes</span></li></ul>'},
  {tag:'Módulo 3 — Gerenciamento',title:'Uma Senha Mestre<br><span>Protege Todas as Outras</span>',dur:'0:50',sec:50,start:130,
   body:'<p>Use um <strong>gerenciador aprovado</strong> (1Password, Bitwarden, Keeper). O que <strong>jamais</strong> fazer:</p>',
   vis:'<ul class="cp-ul"><li><span class="ci ci-b">✗</span><span>Anotar em papel ou post-it visível no escritório</span></li><li><span class="ci ci-b">✗</span><span>Compartilhar por WhatsApp, e-mail ou chat</span></li><li><span class="ci ci-b">✗</span><span>Manter a senha padrão — altere <strong>imediatamente</strong> no primeiro acesso</span></li><li><span class="ci ci-g">✓</span><span>Gere senhas únicas e complexas para cada conta</span></li></ul>'},
  {tag:'Módulo 4 — O que é MFA',title:'MFA: A Segunda<br><span>Chave da Fechadura</span>',dur:'0:55',sec:55,start:180,
   body:'<p>MFA bloqueia <strong style="color:#00B4D8">+99%</strong> dos ataques, mesmo com senha roubada. Três fatores:</p>',
   vis:'<div class="cp-fc"><div class="cp-fa fk"><span class="fi">🧠</span><div class="ft">Você sabe</div><div class="fd">Senha ou PIN</div></div><div class="cp-fa fh"><span class="fi">📱</span><div class="ft">Você possui</div><div class="fd">Celular, token</div></div><div class="cp-fa fa"><span class="fi">👆</span><div class="ft">Você é</div><div class="fd">Digital, face, íris</div></div></div><p style="margin-top:10px;font-size:11.5px;color:rgba(255,255,255,.5);">A combinação de dois ou mais fatores torna o acesso praticamente inviolável.</p>'},
  {tag:'Módulo 5 — Boas práticas MFA',title:'Aprove com<br><span>Consciência</span>',dur:'0:45',sec:45,start:235,
   body:'<p>Só aprove MFA se <strong>você iniciou o login</strong>. Regras essenciais:</p>',
   vis:'<ul class="cp-ul"><li><span class="ci ci-b">✗</span><span><strong>MFA Fatigue:</strong> muitas notificações = ataque. Negue e avise a TI.</span></li><li><span class="ci ci-g">✓</span><span>Prefira <strong>app autenticador</strong> ao SMS</span></li><li><span class="ci ci-b">✗</span><span>Nunca compartilhe códigos — nem com a TI</span></li></ul>'},
  {tag:'Encerramento',title:'Segurança é<br><span>Responsabilidade de Todos</span>',dur:'0:20',sec:20,start:280,
   body:'<p>Quatro hábitos que fazem toda a diferença:</p>',
   vis:'<ul class="cp-ul"><li><span class="ci ci-i">✓</span><span>Senhas <strong>únicas e fortes</strong> para cada conta</span></li><li><span class="ci ci-i">✓</span><span>Gerenciador de senhas <strong>aprovado</strong></span></li><li><span class="ci ci-i">✓</span><span>MFA ativado <strong>sempre</strong> que disponível</span></li><li><span class="ci ci-i">✓</span><span>MFA não solicitado → <strong>negar + avisar a TI</strong></span></li></ul>'}
];

var CP_QUIZ=[
  {q:'Qual é um exemplo de senha FORTE?',opts:['joao1985','123456senha','Café&Piano#Azul2024!','nomeempresa'],ans:2,fb:'Correto! Mais de 12 caracteres combinando maiúsculas, minúsculas, números e símbolos.'},
  {q:'Você recebe notificação de MFA sem ter iniciado login. O que fazer?',opts:['Aprovar para limpar','Ignorar','Negar e comunicar à TI imediatamente','Aguardar mais notificações'],ans:2,fb:'Correto! Notificação não solicitada indica tentativa de acesso. Negar imediatamente e reportar à TI.'},
  {q:'Qual prática é INCORRETA no gerenciamento de senhas?',opts:['Usar gerenciador corporativo','Criar senhas únicas por sistema','Anotar senha em post-it no monitor','Alterar senha padrão no primeiro acesso'],ans:2,fb:'Correto! Anotar senhas visíveis expõe credenciais a qualquer pessoa no seu espaço.'},
  {q:'O que é MFA Fatigue?',opts:['Esquecimento da senha','Falha no autenticador','Ataque com muitas notificações esperando aprovação','Expiração do token'],ans:2,fb:'Correto! Defesa: nunca aprovar sem ter iniciado o login — e reportar à TI.'},
  {q:'Qual fator é "algo que você é"?',opts:['Sua senha','Código SMS','Token físico','Impressão digital ou reconhecimento facial'],ans:3,fb:'Correto! Biometria é o fator mais difícil de replicar.'}
];

var MFA_SLIDES=CP_SLIDES;
var MFA_QUIZ=CP_QUIZ;

var HO_SLIDES=[
  {tag:'Abertura',title:'Home Office<br><span>Seguro & Cybersecurity</span>',dur:'1:00',sec:60,start:0,
   body:'<p>A sua casa agora faz parte da <strong>infraestrutura de segurança</strong> da empresa. Neste treinamento você aprende a proteger o ambiente remoto contra as ameaças mais comuns.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">📚</span><div class="lb">8 módulos</div><div class="vl">Conteúdo</div></div><div class="cp-vc"><span class="ic">⏱</span><div class="lb">Duração</div><div class="vl">10 minutos</div></div><div class="cp-vc"><span class="ic">📋</span><div class="lb">Quiz final</div><div class="vl">10 questões</div></div><div class="cp-vc"><span class="ic">🏅</span><div class="lb">Certificado</div><div class="vl">ISO 27001</div></div></div>'},
  {tag:'Módulo 01',title:'Fundamentos do<br><span>Risco Digital</span>',dur:'1:10',sec:70,start:60,
   body:'<p>No home office a <strong>proteção institucional é reduzida</strong> e a responsabilidade migra para cada colaborador. Conheça os principais vetores:</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🎣</span><div class="lb">Phishing</div><div class="vl">Alto risco</div></div><div class="cp-vc"><span class="ic">📡</span><div class="lb">Wi-Fi vulnerável</div><div class="vl">Alto risco</div></div><div class="cp-vc"><span class="ic">🔑</span><div class="lb">Credenciais</div><div class="vl">Alto risco</div></div></div><ul class="cp-ul"><li><span class="ci ci-b">✗</span><span>Nunca reutilize senhas entre sistemas diferentes</span></li><li><span class="ci ci-b">✗</span><span>Evite sistemas corporativos em redes públicas</span></li><li><span class="ci ci-g">✓</span><span>Separe contas pessoais e profissionais</span></li></ul>'},
  {tag:'Módulo 02',title:'Engenharia<br><span>Social</span>',dur:'1:10',sec:70,start:130,
   body:'<p>Engenharia social usa <strong>manipulação psicológica</strong> para induzir ações inseguras — não requer conhecimento técnico. Os 4 gatilhos explorados:</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">⏱</span><div class="lb">Urgência</div><div class="vl">"Conta bloqueada em 24h"</div></div><div class="cp-vc"><span class="ic">👔</span><div class="lb">Autoridade</div><div class="vl">Fingir ser TI/banco</div></div><div class="cp-vc"><span class="ic">⚠️</span><div class="lb">Medo</div><div class="vl">"Atividade suspeita"</div></div><div class="cp-vc"><span class="ic">🎁</span><div class="lb">Recompensa</div><div class="vl">"Você foi selecionado"</div></div></div><ul class="cp-ul"><li><span class="ci ci-i">→</span><span><strong>Regra:</strong> pressão emocional + ação imediata = suspeita máxima. Pare, respire, verifique.</span></li></ul>'},
  {tag:'Módulo 03',title:'Segurança do<br><span>Wi-Fi</span>',dur:'1:10',sec:70,start:200,
   body:'<p>Seu roteador é a <strong>porta de entrada</strong> da rede doméstica. Um roteador comprometido permite interceptação de todo o tráfego corporativo.</p>',
   vis:'<div class="cp-vs"><div class="cp-sr"><span class="cp-sl2">WEP / WPS</span><div class="cp-sb"><div class="cp-sf" style="width:5%;background:#E24B4A"></div></div><span class="cp-st">Inseguro</span></div><div class="cp-sr"><span class="cp-sl2">WPA (antigo)</span><div class="cp-sb"><div class="cp-sf" style="width:40%;background:#F0A500"></div></div><span class="cp-st">Fraco</span></div><div class="cp-sr"><span class="cp-sl2">WPA2 / WPA3</span><div class="cp-sb"><div class="cp-sf" style="width:92%;background:#27AE60"></div></div><span class="cp-st">Recomendado</span></div></div><ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Use <strong>WPA2 ou WPA3</strong> — prefira WPA3 quando disponível</span></li><li><span class="ci ci-b">✗</span><span>Desative WPS — possui falhas estruturais documentadas</span></li><li><span class="ci ci-g">✓</span><span>Crie rede guest para visitantes e dispositivos IoT</span></li></ul>'},
  {tag:'Módulo 04',title:'Senhas &<br><span>Identidade Digital</span>',dur:'1:10',sec:70,start:270,
   body:'<p>Credenciais comprometidas são o vetor de entrada mais comum. <strong>Senha reutilizada + sem MFA</strong> = vulnerabilidade crítica.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">✗</span><div class="lb" style="color:#E24B4A">Fraca</div><div class="vl">8 chars simples<br>&lt;1 segundo</div></div><div class="cp-vc"><span class="ic">✓</span><div class="lb" style="color:#27AE60">Forte</div><div class="vl">14+ chars únicos<br>+300 anos</div></div><div class="cp-vc"><span class="ic">📱</span><div class="lb" style="color:#00B4D8">MFA</div><div class="vl">Bloqueia +99%<br>dos ataques</div></div></div><ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Use gerenciador de senhas: Bitwarden, 1Password, KeePass</span></li><li><span class="ci ci-g">✓</span><span>Prefira <strong>app autenticador</strong> ao SMS para MFA</span></li><li><span class="ci ci-b">✗</span><span>Nunca compartilhe senhas ou códigos MFA</span></li></ul>'},
  {tag:'Módulo 05',title:'Cloud &<br><span>Compartilhamento</span>',dur:'1:10',sec:70,start:340,
   body:'<p>Muitos vazamentos ocorrem por <strong>permissões mal configuradas</strong> — não por invasão técnica. Cada link compartilhado pode expor dados indefinidamente.</p>',
   vis:'<div class="cp-vs"><div class="cp-sr"><span class="cp-sl2">Qualquer pessoa</span><div class="cp-sb"><div class="cp-sf" style="width:5%;background:#E24B4A"></div></div><span class="cp-st">Nunca usar</span></div><div class="cp-sr"><span class="cp-sl2">E-mail específico</span><div class="cp-sb"><div class="cp-sf" style="width:75%;background:#27AE60"></div></div><span class="cp-st">Padrão</span></div><div class="cp-sr"><span class="cp-sl2">Domínio interno</span><div class="cp-sb"><div class="cp-sf" style="width:95%;background:#00B4D8"></div></div><span class="cp-st">Ideal</span></div></div><ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Compartilhe diretamente para o <strong>e-mail específico</strong> de quem precisa</span></li><li><span class="ci ci-b">✗</span><span>Nunca salve dados corporativos em contas de armazenamento pessoais</span></li></ul>'},
  {tag:'Módulo 06',title:'Dispositivos &<br><span>Proteção Local</span>',dur:'1:10',sec:70,start:410,
   body:'<p>Seu computador pode ser a principal porta de entrada para ataques. Reduza a superfície de exposição com medidas simples:</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🦠</span><div class="lb">Malware</div><div class="vl">Antivírus ativo</div></div><div class="cp-vc"><span class="ic">🔒</span><div class="lb">Ransomware</div><div class="vl">Backup 3-2-1</div></div><div class="cp-vc"><span class="ic">⌨️</span><div class="lb">Keylogger</div><div class="vl">Fontes oficiais</div></div></div><ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Mantenha SO e apps <strong>sempre atualizados</strong></span></li><li><span class="ci ci-g">✓</span><span>Bloqueio automático de tela: <strong>5 minutos</strong> de inatividade</span></li><li><span class="ci ci-g">✓</span><span>Backup regra <strong>3-2-1</strong>: 3 cópias, 2 mídias, 1 offsite</span></li></ul>'},
  {tag:'Módulo 07',title:'Resposta a<br><span>Incidentes</span>',dur:'1:10',sec:70,start:480,
   body:'<p>O que determina o tamanho do impacto é a <strong>velocidade e qualidade da resposta</strong>. Reconheça os sinais de alerta:</p>',
   vis:'<ul class="cp-ul"><li><span class="ci ci-b">!</span><span><strong>Logins de localização desconhecida</strong> → urgência imediata</span></li><li><span class="ci ci-b">!</span><span><strong>E-mails enviados sem sua autorização</strong> → conta comprometida</span></li><li><span class="ci ci-b">!</span><span><strong>Arquivos criptografados/renomeados</strong> → ransomware ativo</span></li></ul><ul class="cp-ul"><li><span class="ci ci-g">1</span><span>Altere senhas das contas críticas imediatamente</span></li><li><span class="ci ci-g">2</span><span>Desconecte da internet — isola o dispositivo</span></li><li><span class="ci ci-g">3</span><span>Comunique o time de TI — não tente resolver sozinho</span></li></ul>'},
  {tag:'Módulo 08',title:'Cultura de<br><span>Segurança</span>',dur:'1:10',sec:70,start:550,
   body:'<p>Segurança digital não é uma ferramenta — é um <strong>comportamento construído por decisões diárias</strong>. Checklist final:</p>',
   vis:'<ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Wi-Fi protegido com WPA2/WPA3 e roteador atualizado</span></li><li><span class="ci ci-g">✓</span><span>MFA ativado em todas as contas críticas</span></li><li><span class="ci ci-g">✓</span><span>Gerenciador de senhas em uso</span></li><li><span class="ci ci-g">✓</span><span>SO e aplicativos atualizados, antivírus ativo</span></li><li><span class="ci ci-g">✓</span><span>Compartilhamento com permissões controladas</span></li><li><span class="ci ci-g">✓</span><span>Backup ativo e protocolo de incidentes conhecido</span></li></ul>'}
];

var HO_QUIZ=[
  {q:'Qual é o principal fator de vulnerabilidade no home office?',opts:['Ausência de antivírus','Comportamento humano e decisões cotidianas','Falta de firewall doméstico','Uso de dispositivos pessoais'],ans:1,fb:'Correto! O comportamento humano é o principal vetor — ações simples do dia a dia determinam a maior parte dos riscos.'},
  {q:'O que caracteriza um ataque de engenharia social?',opts:['Exploração de falhas no SO','Manipulação psicológica para induzir ações inseguras','Quebra de criptografia WPA2','Acesso físico ao roteador'],ans:1,fb:'Correto! Engenharia social ataca pessoas, não sistemas, usando gatilhos como urgência, autoridade e medo.'},
  {q:'Ao receber e-mail urgente pedindo clique em link para evitar bloqueio, o que fazer?',opts:['Clicar rapidamente para evitar o bloqueio','Verificar remetente, analisar link e confirmar por outro canal','Encaminhar para colegas avaliarem','Responder pedindo mais informações'],ans:1,fb:'Correto! Verificar o remetente, inspecionar o link e confirmar por canal independente é o protocolo correto contra phishing.'},
  {q:'Qual protocolo Wi-Fi deve ser utilizado para maior segurança?',opts:['WEP, por ser amplamente suportado','WPS, para facilitar conexão','WPA2 ou WPA3, priorizando WPA3','Redes abertas com VPN ativa'],ans:2,fb:'Correto! WPA2 e WPA3 são os padrões seguros — WPA3 é preferível quando disponível.'},
  {q:'Por que o WPS deve ser desativado no roteador?',opts:['Consome energia e reduz velocidade','Possui vulnerabilidades estruturais documentadas','Impede conexão de dispositivos móveis','É incompatível com WPA3'],ans:1,fb:'Correto! O WPS possui falhas estruturais documentadas que permitem ataques de força bruta ao PIN.'},
  {q:'Qual é a melhor prática para gerenciamento de senhas?',opts:['Mesma senha forte em todos os sistemas','Senhas em planilha protegida','Gerenciador de senhas com senhas únicas e longas','Senhas baseadas em dados pessoais'],ans:2,fb:'Correto! Gerenciador de senhas com senhas únicas por serviço elimina o risco de vazamentos em cadeia.'},
  {q:'Ao compartilhar documento corporativo no Google Drive, qual é a configuração mais segura?',opts:['"Qualquer pessoa com o link"','Compartilhar para o e-mail específico de quem precisa','Publicar na internet para acesso fácil','Enviar como anexo de e-mail'],ans:1,fb:'Correto! Compartilhamento direcionado a e-mails específicos garante que apenas pessoas autorizadas acessem.'},
  {q:'Qual sinal indica comprometimento de segurança com resposta imediata?',opts:['Newsletter não reconhecida','Internet mais lenta no final do dia','E-mails enviados da sua conta sem autorização','Atualização automática do SO'],ans:2,fb:'Correto! E-mails enviados sem autorização indicam conta comprometida — exige troca imediata de senha e reporte à TI.'},
  {q:'Qual é o primeiro passo ao suspeitar que sua conta foi comprometida?',opts:['Desligar o computador e aguardar','Alterar imediatamente as senhas das contas afetadas','Continuar trabalhando normalmente','Verificar e-mails enviados antes de agir'],ans:1,fb:'Correto! Alterar senhas imediatamente é a ação prioritária para limitar o acesso do invasor.'},
  {q:'O que diferencia as organizações mais protegidas digitalmente?',opts:['Softwares de segurança mais caros','Equipes de TI maiores','Pessoas conscientes que internalizaram segurança como comportamento','Proibição do trabalho remoto'],ans:2,fb:'Correto! Consciência e comportamento são o diferencial — tecnologia sem cultura de segurança é insuficiente.'}
];


// ── Anticorrupção e Antissuborno ─────────────────────────────
var AC_SLIDES=[
  {tag:'Abertura',title:'Anticorrupção &<br><span>Antissuborno</span>',dur:'0:30',sec:30,start:0,
   body:'<p>Corrupção e suborno são riscos reais para qualquer organização. Neste treinamento você aprende a <strong>identificar, prevenir e reportar</strong> situações de risco — alinhado à <strong>Lei Anticorrupção Brasileira, FCPA e UK Bribery Act</strong>.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">📚</span><div class="lb">6 módulos</div><div class="vl">Conteúdo</div></div><div class="cp-vc"><span class="ic">⏱</span><div class="lb">Duração</div><div class="vl">50 minutos</div></div><div class="cp-vc"><span class="ic">📋</span><div class="lb">Quiz final</div><div class="vl">5 questões</div></div><div class="cp-vc"><span class="ic">🏅</span><div class="lb">Certificado</div><div class="vl">Compliance</div></div></div>'},
  {tag:'Módulo 01',title:'Corrupção &<br><span>Suborno — Conceitos</span>',dur:'0:40',sec:40,start:30,
   body:'<p><strong>Corrupção</strong> é o abuso de poder confiado para obtenção de vantagem indevida. <strong>Suborno</strong> é a oferta, promessa ou aceitação de vantagem para influenciar uma decisão.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🏛️</span><div class="lb">Corrupção Pública</div><div class="vl">Envolve agente público</div></div><div class="cp-vc"><span class="ic">🏢</span><div class="lb">Corrupção Privada</div><div class="vl">Entre empresas</div></div><div class="cp-vc"><span class="ic">🔗</span><div class="lb">Sistêmica</div><div class="vl">Prática disseminada</div></div></div><ul class="cp-ul"><li><span class="ci ci-b">✗</span><span>Fraudes em licitações, favorecimento de fornecedores, nepotismo</span></li><li><span class="ci ci-i">→</span><span><strong>Suborno:</strong> ofertante + receptor + vantagem indevida + intenção de influenciar</span></li></ul>'},
  {tag:'Módulo 02',title:'Legislação<br><span>Anticorrupção</span>',dur:'0:45',sec:45,start:70,
   body:'<p>A conformidade é obrigatória: empresas respondem <strong>objetivamente</strong> por atos de corrupção praticados em seu nome, mesmo sem provar culpa.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🇧🇷</span><div class="lb">Lei 12.846/2013</div><div class="vl">Responsabilidade objetiva · Leniência</div></div><div class="cp-vc"><span class="ic">🇺🇸</span><div class="lb">FCPA</div><div class="vl">Alcance extraterritorial · Registros</div></div><div class="cp-vc"><span class="ic">🇬🇧</span><div class="lb">UK Bribery Act</div><div class="vl">Responsabilidade corporativa</div></div></div><ul class="cp-ul"><li><span class="ci ci-b">!</span><span><strong>Sanções:</strong> multa de até 20% do faturamento bruto, suspensão e dissolução compulsória</span></li><li><span class="ci ci-g">✓</span><span>Programa de integridade robusto reduz penalidades e demonstra boa-fé</span></li></ul>'},
  {tag:'Módulo 03',title:'Sinais de Alerta<br><span>(Red Flags)</span>',dur:'0:45',sec:45,start:115,
   body:'<p>Reconhecer <strong>red flags</strong> antes de tomar decisões é a primeira linha de defesa contra envolvimento em esquemas corruptos.</p>',
   vis:'<div class="cp-vs"><div class="cp-sr"><span class="cp-sl2">Empresa recém-criada</span><div class="cp-sb"><div class="cp-sf" style="width:90%;background:#E24B4A"></div></div><span class="cp-st">Alto risco</span></div><div class="cp-sr"><span class="cp-sl2">Comissões excessivas</span><div class="cp-sb"><div class="cp-sf" style="width:85%;background:#E24B4A"></div></div><span class="cp-st">Alto risco</span></div><div class="cp-sr"><span class="cp-sl2">Pagamento em espécie</span><div class="cp-sb"><div class="cp-sf" style="width:95%;background:#E24B4A"></div></div><span class="cp-st">Crítico</span></div><div class="cp-sr"><span class="cp-sl2">Conta em paraíso fiscal</span><div class="cp-sb"><div class="cp-sf" style="width:92%;background:#E24B4A"></div></div><span class="cp-st">Crítico</span></div></div><ul class="cp-ul"><li><span class="ci ci-b">!</span><span>Agente público solicitando favor pessoal ou presente → reportar imediatamente</span></li></ul>'},
  {tag:'Módulo 04',title:'Presentes &<br><span>Hospitalidades</span>',dur:'0:35',sec:35,start:160,
   body:'<p>Brindes e entretenimento corporativo fazem parte dos negócios — mas exigem critérios claros para não configurar suborno.</p>',
   vis:'<div class="cp-fc"><div class="cp-fa fa"><span class="fi">✅</span><div class="ft">Permitido</div><div class="fd">Brindes institucionais · Eventos corporativos legítimos</div></div><div class="cp-fa fh"><span class="fi">⚠️</span><div class="ft">Avaliar</div><div class="fd">Valor · Frequência · Transparência · Finalidade</div></div><div class="cp-fa fk"><span class="fi">🚫</span><div class="ft">Proibido</div><div class="fd">Influência indevida · Pagamentos ocultos · Favores pessoais</div></div></div><ul class="cp-ul"><li><span class="ci ci-i">→</span><span><strong>Dúvida?</strong> Pergunte-se: "Ficaria confortável se isso fosse publicado?"</span></li></ul>'},
  {tag:'Módulo 05',title:'Due Diligence &<br><span>Canal de Denúncias</span>',dur:'0:40',sec:40,start:195,
   body:'<p>Avaliar <strong>terceiros antes de contratar</strong> e garantir que irregularidades possam ser reportadas com segurança são pilares do programa de integridade.</p>',
   vis:'<div class="cp-vr"><div class="cp-vc"><span class="ic">🔍</span><div class="lb">Due Diligence</div><div class="vl">Fornecedores · Consultores · Parceiros</div></div><div class="cp-vc"><span class="ic">📢</span><div class="lb">Canal de Denúncia</div><div class="vl">Confidencial · Independente · Sem retaliação</div></div><div class="cp-vc"><span class="ic">🔄</span><div class="lb">ISO 37001</div><div class="vl">Sistema de Gestão Antissuborno</div></div></div><ul class="cp-ul"><li><span class="ci ci-g">✓</span><span>Você pode denunciar anonimamente — sua identidade será protegida</span></li><li><span class="ci ci-g">✓</span><span>Toda denúncia é registrada, triada e investigada de forma independente</span></li></ul>'},
  {tag:'Encerramento',title:'Sua Parte na<br><span>Cultura de Integridade</span>',dur:'0:25',sec:25,start:235,
   body:'<p>Conformidade não é apenas uma obrigação legal — é o compromisso com a <strong>reputação, sustentabilidade e valores</strong> da organização.</p>',
   vis:'<ul class="cp-ul"><li><span class="ci ci-i">✓</span><span>Reconheça <strong>red flags</strong> antes de tomar decisões</span></li><li><span class="ci ci-i">✓</span><span>Nunca ofereça, aceite ou tolere vantagens indevidas</span></li><li><span class="ci ci-i">✓</span><span>Use o <strong>canal de denúncias</strong> sem medo de retaliação</span></li><li><span class="ci ci-i">✓</span><span>Aplique <strong>due diligence</strong> em todos os parceiros de negócios</span></li></ul>'}
];

var AC_QUIZ=[
  {q:'O que caracteriza o suborno segundo a legislação internacional?',opts:['Qualquer presente a um cliente','Oferta, promessa ou aceitação de vantagem indevida para influenciar decisão','Doação institucional com nota fiscal','Desconto comercial fora da tabela de preços'],ans:1,fb:'Correto! Suborno envolve vantagem indevida com a intenção de influenciar uma decisão — independentemente do valor ou forma.'},
  {q:'A Lei Anticorrupção Brasileira (12.846/2013) prevê a responsabilização da empresa:',opts:['Apenas se houver comprovação de dolo da diretoria','Objetivamente, independentemente de culpa individual','Somente quando o dano superar R$ 1 milhão','Apenas para contratos com o governo federal'],ans:1,fb:'Correto! A responsabilidade objetiva significa que a empresa responde pelo ato praticado em seu nome, sem necessidade de provar culpa.'},
  {q:'Qual destas situações é um red flag que exige atenção imediata?',opts:['Fornecedor com 10 anos de mercado solicitando proposta formal','Consultor que promete "abrir portas no governo" por comissão de 30%','Parceiro que apresenta referências de outros clientes corporativos','Empresa que solicita contrato padrão com cláusula anticorrupção'],ans:1,fb:'Correto! Comissões excessivas vinculadas a relações governamentais são um red flag clássico de BEC e suborno.'},
  {q:'Quanto aos presentes e hospitalidades corporativas, é CORRETO afirmar:',opts:['Qualquer presente de fornecedor é proibido sem exceção','Presentes institucionais de baixo valor são permitidos se transparentes e sem intenção de influência','Viagens internacionais pagas por fornecedor são sempre aceitáveis','Apenas o recebimento é proibido — oferecer é permitido'],ans:1,fb:'Correto! O critério fundamental é: valor, frequência, transparência e ausência de intenção de influenciar uma decisão.'},
  {q:'O canal de denúncias de uma organização deve garantir:',opts:['Identificação obrigatória do denunciante para investigação','Confidencialidade, independência e proteção contra retaliação','Resposta pública sobre o resultado da investigação','Acesso restrito a colaboradores com mais de 2 anos de empresa'],ans:1,fb:'Correto! Confidencialidade, independência e não retaliação são requisitos fundamentais para um canal de denúncias efetivo.'}
];

var CP_TOT=300;
var _cp={cur:0,qi:0,qs:0,qa:false,mode:'slides',tmr:null,elapsed:0,tid:null};
function _cpT(s){var m=Math.floor(s/60),sc=s%60;return m+(sc<10?':0':':')+sc;}
function _cpTS(){clearInterval(_cp.tmr);_cp.tmr=null;}
function _cpTA(){_cpTS();var sl=CP_SLIDES[_cp.cur];_cp.elapsed=sl.start;_cpTU();_cp.tmr=setInterval(function(){_cp.elapsed++;if(_cp.elapsed>=CP_TOT)_cpTS();_cpTU();},1000);}
function _cpTU(){var p=Math.min(100,Math.round(_cp.elapsed/CP_TOT*100));var f=document.getElementById('cp-tf');if(f)f.style.width=p+'%';var c=document.getElementById('cp-tc');if(c)c.textContent=_cpT(Math.max(0,CP_TOT-_cp.elapsed));}
function _cpProg(){var pb=document.getElementById('cp-pb');if(!pb)return;var h='';for(var i=0;i<CP_SLIDES.length;i++)h+='<div class="cp-ps '+(i<_cp.cur?'done':i===_cp.cur&&_cp.mode==='slides'?'active':'')+'"></div>';var l=_cp.mode==='slides'?'Slide '+(_cp.cur+1)+'/'+CP_SLIDES.length:_cp.mode==='quiz'?'Quiz '+(_cp.qi+1)+'/'+CP_QUIZ.length:'Resultado';pb.innerHTML=h+'<span class="cp-pl2">'+l+'</span>';var si=document.getElementById('cp-si');if(si)si.textContent=_cp.mode==='slides'?(_cp.cur+1)+' de '+CP_SLIDES.length:_cp.mode==='quiz'?'Pergunta '+(_cp.qi+1)+' de 5':'';}
function _cpSlide(){var s=CP_SLIDES[_cp.cur];var a=document.getElementById('cp-sa');if(!a)return;a.innerHTML='<div class="cp-tg">'+s.tag+'</div><div class="cp-ti">'+s.title+'</div><div class="cp-du"><span class="cp-dd"></span>'+s.dur+' neste módulo</div><div class="cp-by">'+s.body+'<div class="cp-vs">'+s.vis+'</div></div>';var bk=document.getElementById('cp-bk');if(bk)bk.disabled=(_cp.cur===0);var nx=document.getElementById('cp-nx');if(nx){nx.textContent=_cp.cur===CP_SLIDES.length-1?'Iniciar Quiz →':'Continuar →';nx.disabled=false;nx.style.display='';}; _cpTA();}
function _cpQuiz(){_cpTS();_cp.qa=false;var q=CP_QUIZ[_cp.qi];var a=document.getElementById('cp-sa');if(!a)return;var opts='';for(var i=0;i<q.opts.length;i++)opts+='<button class="cp-qo" onclick="_cpAns('+i+')"><strong>'+String.fromCharCode(65+i)+')</strong> '+q.opts[i]+'</button>';a.innerHTML='<div class="cp-tg">Quiz Final</div><div class="cp-qc">Pergunta '+(_cp.qi+1)+' de '+CP_QUIZ.length+'</div><div class="cp-qq">'+q.q+'</div><div class="cp-qop">'+opts+'</div><div id="cp-fb"></div>';var bk=document.getElementById('cp-bk');if(bk)bk.disabled=true;var nx=document.getElementById('cp-nx');if(nx){nx.textContent='Próxima →';nx.disabled=true;};var tf=document.getElementById('cp-tf');if(tf)tf.style.width='100%';var tc=document.getElementById('cp-tc');if(tc)tc.textContent='0:00';}
window._cpAns=function(i){if(_cp.qa)return;_cp.qa=true;var q=CP_QUIZ[_cp.qi];var ok=(i===q.ans);if(ok)_cp.qs++;var opts=document.querySelectorAll('.cp-qo');for(var j=0;j<opts.length;j++){opts[j].classList.add('disabled');if(j===q.ans)opts[j].classList.add('correct');else if(j===i)opts[j].classList.add('wrong');}var fb=document.getElementById('cp-fb');if(fb)fb.innerHTML='<div class="cp-qfb '+(ok?'qfb-ok':'qfb-no')+'">'+(ok?'✅':'❌')+' '+q.fb+'</div>';var nx=document.getElementById('cp-nx');if(nx)nx.disabled=false;};
function _cpResult(){_cpTS();var pct=Math.round(_cp.qs/CP_QUIZ.length*100);var pass=(pct>=80);var date=new Date().toLocaleDateString('pt-BR');COURSE_COMPLETIONS[_cp.tid]={score:pct,passed:pass,date:date};if(typeof DEMO_STATE!=='undefined')DEMO_STATE.completeTraining(_cp.tid,_cp.title,pct,pass);var a=document.getElementById('cp-sa');if(!a)return;var html='<div class="cp-tg">Resultado Final</div><div class="cp-rw"><div class="cp-sc '+(pass?'pass':'fail')+'">'+pct+'%</div><div class="cp-scl">'+_cp.qs+' de '+CP_QUIZ.length+' respostas corretas</div>';if(pass){var ctrl=(_cp.tid===10)?'Lei 12.846/2013 · FCPA · UK Bribery Act · <strong style="color:#00B4D8">ISO 37001</strong>':'Controles ISO 27001:2022: <strong style="color:#00B4D8">A.5.17 · A.8.5</strong>';html+='<div class="cp-cert">🏅 Aprovado — nota mínima atingida (80%)</div><p style="font-size:11.5px;color:rgba(255,255,255,.45);margin-bottom:10px;">Certificado emitido por <strong style="color:#00B4D8">Brandvakt Academy</strong> · '+date+'<br>'+ctrl+'</p>';}else{html+='<div style="background:rgba(226,75,74,.10);border:1px solid rgba(226,75,74,.22);border-radius:9px;padding:10px 14px;font-size:12.5px;color:#f9a8a7;margin-bottom:12px;">Você precisa de 4 acertos. Revise os módulos e tente novamente.</div>';}html+='<button class="cpb cpb-g" onclick="_cpRestart()" style="margin-top:6px;">↺ Refazer</button></div>';a.innerHTML=html;var bk=document.getElementById('cp-bk');if(bk)bk.disabled=true;var nx=document.getElementById('cp-nx');if(nx){nx.disabled=true;nx.style.display='none';};var bn=document.createElement('div');bn.className='cp-bn '+(pass?'cpbn-p':'cpbn-f');bn.textContent=pass?'🏅 Aprovado! Nota: '+pct+'% — Certificado emitido':'📋 Nota: '+pct+'% — Tente novamente (mín. 80%)';document.body.appendChild(bn);setTimeout(function(){bn.style.opacity='0';bn.style.transition='opacity .5s';setTimeout(function(){if(bn.parentNode)bn.parentNode.removeChild(bn);},500);},5000);if(pass&&typeof showToast==='function')showToast('🏅 Parabéns! Certificado emitido!','success');}
window._cpNav=function(dir){if(_cp.mode==='slides'){if(dir===1){if(_cp.cur<CP_SLIDES.length-1){_cp.cur++;_cpSlide();}else{_cp.mode='quiz';_cp.qi=0;_cp.qs=0;_cpQuiz();}}else{if(_cp.cur>0){_cp.cur--;_cpSlide();}}}else if(_cp.mode==='quiz'&&dir===1){if(_cp.qi<CP_QUIZ.length-1){_cp.qi++;_cpQuiz();}else{_cp.mode='result';_cpResult();}}_cpProg();};
window._cpRestart=function(){_cpTS();_cp={cur:0,qi:0,qs:0,qa:false,mode:'slides',tmr:null,elapsed:0,tid:_cp.tid};var nx=document.getElementById('cp-nx');if(nx)nx.style.display='';_cpTU();_cpSlide();_cpProg();};

window.launchCourse=function(tid,title){
  if(!COURSE_FILES[tid]){if(typeof showToast==='function')showToast('Curso em produção — disponível em breve','info');return;}
  closeCoursePlayer();
  if(tid===3){CP_SLIDES=HO_SLIDES;CP_QUIZ=HO_QUIZ;CP_TOT=600;}
  else if(tid===10){CP_SLIDES=AC_SLIDES;CP_QUIZ=AC_QUIZ;CP_TOT=260;}
  else{CP_SLIDES=MFA_SLIDES;CP_QUIZ=MFA_QUIZ;CP_TOT=300;}
  _cp={cur:0,qi:0,qs:0,qa:false,mode:'slides',tmr:null,elapsed:0,tid:tid,tab:'video',title:title};
  var comp=COURSE_COMPLETIONS[tid];
  var badge=comp?('<span style="color:'+(comp.passed?'#22c55e':'#f59e0b')+';font-weight:700;">'+(comp.passed?'✅ Aprovado':'⚠️ Reprovado')+' — '+comp.score+'%</span>'):'<span style="color:#6b7280;">Não concluído</span>';
  var hasVideo=!!(COURSE_MEDIA[tid]&&COURSE_MEDIA[tid].video);
  var hasPdf=!!(COURSE_MEDIA[tid]&&COURSE_MEDIA[tid].pdf);
  var syslang=(typeof APP!=='undefined'&&APP.lang)||'pt';
  var vm=hasVideo?COURSE_MEDIA[tid].video:{};
  var videoSrc=vm[syslang]||vm['pt']||vm[Object.keys(vm)[0]]||'';
  var activeLang=vm[syslang]?syslang:(vm['pt']?'pt':Object.keys(vm)[0]||'pt');
  var videoLangs=hasVideo?Object.keys(vm):[];
  var langLabels={pt:'🇵🇹 PT',br:'🇧🇷 BR',en:'🇺🇸 EN',fr:'🇫🇷 FR',es:'🇪🇸 ES'};
  var tabs='<div id="cp-tabs">'+(hasVideo?'<button class="cp-tab active" id="cp-tab-video" onclick="_cpTab(\'video\')">🎬 Vídeo</button>':'')+
    '<button class="cp-tab'+(hasVideo?'':' active')+'" id="cp-tab-content" onclick="_cpTab(\'content\')">📖 Conteúdo</button>'+
    '<button class="cp-tab" id="cp-tab-quiz" onclick="_cpTab(\'quiz\')">✅ Quiz</button>'+
    (hasPdf?'<button class="cp-tab" id="cp-tab-material" onclick="_cpTab(\'material\')">📄 Material</button>':'')+
  '</div>';
  var videoPanel='<div id="cp-video-panel" style="flex:1;overflow-y:auto;display:'+(hasVideo?'flex':'none')+';flex-direction:column;align-items:center;justify-content:flex-start;padding:18px 20px;gap:14px;background:#060e1e;">'+(hasVideo?
    '<video id="cp-video-el" controls preload="metadata" style="width:100%;max-width:780px;border-radius:10px;background:#000;box-shadow:0 8px 32px rgba(0,0,0,.7)"><source src="'+videoSrc+'" type="video/mp4">Seu navegador não suporta HTML5 video.</video>'+
    '<div style="width:100%;max-width:780px;"><div style="font-size:11px;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">Idioma do vídeo</div>'+
    '<div id="cp-video-langbar" style="display:flex;gap:8px;flex-wrap:wrap;">'+
      videoLangs.map(function(lc){return '<button class="cp-vlang'+(lc===activeLang?' active':'')+'" onclick="_cpVideoLang(\''+lc+'\')">'+(langLabels[lc]||lc.toUpperCase())+'</button>';}).join('')+
    '</div></div>'
  :'')+'</div>';
  var pdfUrl=hasPdf?COURSE_MEDIA[tid].pdf:'';
  var materialPanel='<div id="cp-material-panel" style="flex:1;overflow-y:auto;display:none;flex-direction:column;align-items:center;justify-content:center;padding:32px 20px;gap:20px;background:#060e1e;">'+(hasPdf?
    '<div style="width:100%;max-width:480px;background:#0C1F3F;border:1px solid rgba(255,255,255,.10);border-radius:16px;padding:28px 32px;text-align:center;">'+
    '<div style="font-size:3rem;margin-bottom:16px;">📄</div>'+
    '<div style="font-size:1rem;font-weight:800;margin-bottom:6px;">Material de Apoio</div>'+
    '<div style="font-size:13px;color:rgba(255,255,255,.45);margin-bottom:24px;line-height:1.6;">Faça o download do material completo do curso em PDF para consulta offline.</div>'+
    '<a href="'+pdfUrl+'" target="_blank" download style="display:inline-flex;align-items:center;gap:8px;background:#00B4D8;color:#000;padding:12px 28px;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;">⬇ Baixar PDF</a>'+
    '</div>'
  :'<div style="color:rgba(255,255,255,.3);font-size:14px;">Material não disponível.</div>')+'</div>';
  var contentPanel='<div id="cp-pl" style="display:none;width:100%;max-width:760px;margin:20px auto;background:#0C1F3F;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.08);"><div id="cp-pb" class="cp-pb"></div><div class="cp-tw"><div class="cp-tr"><span class="cp-to">0:00</span><div class="cp-tt"><div class="cp-tf" id="cp-tf" style="width:0%"></div></div><span class="cp-tc" id="cp-tc">10:00</span></div><div class="cp-tn"><span>Início</span><span>2:00</span><span>4:00</span><span>6:00</span><span>8:00</span><span>10:00</span></div></div><div class="cp-sl" id="cp-sa"></div><div class="cp-ct"><button class="cpb cpb-g" id="cp-bk" onclick="_cpNav(-1)">← Voltar</button><span class="cp-si" id="cp-si"></span><button class="cpb cpb-p" id="cp-nx" onclick="_cpNav(1)">Continuar →</button></div><div class="cp-ft">BRANDVAKT ACADEMY · SEGURANÇA DA INFORMAÇÃO <span class="cp-iso">🛡 ISO 27001:2022</span></div></div>';
  var ov=document.createElement('div');ov.id='cp-ov';
  ov.innerHTML='<div id="cp-tb"><div class="cp-brd"><div class="cp-lg">B</div><div><div class="cp-nm">'+title+'</div><div class="cp-mt">Brandvakt Academy · ISO 27001:2022 · '+badge+'</div></div></div><div style="display:flex;align-items:center;gap:12px;"><span style="font-size:.70rem;color:#6b7280;"><kbd style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:2px 7px;font-size:.68rem;">Esc</kbd> para fechar</span><button class="cp-cls" onclick="closeCoursePlayer()">✕ Fechar</button></div></div>'+tabs+'<div id="cp-bd" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;background:#060e1e;">'+videoPanel+contentPanel+materialPanel+'</div>';
  document.body.appendChild(ov);
  if(!hasVideo){_cp.tab='content';var vt=document.getElementById('cp-tab-content');if(vt)vt.classList.add('active');_cpSlide();_cpProg();}
  document.addEventListener('keydown',window._cpEsc=function(e){if(e.key==='Escape')closeCoursePlayer();});
};


window._cpTab=function(tab){
  _cp.tab=tab;
  document.querySelectorAll('.cp-tab').forEach(function(b){b.classList.remove('active');});
  var btn=document.getElementById('cp-tab-'+tab);if(btn)btn.classList.add('active');
  var vp=document.getElementById('cp-video-panel');
  var pl=document.getElementById('cp-pl');
  var mp=document.getElementById('cp-material-panel');
  var vid=document.getElementById('cp-video-el');
  if(vp)vp.style.display=tab==='video'?'flex':'none';
  if(mp)mp.style.display=tab==='material'?'flex':'none';
  if(pl)pl.style.display=(tab==='content'||tab==='quiz')?'':'none';
  if(tab!=='video'&&vid){vid.pause();}
  if(tab==='content'){_cp.mode='slides';_cp.cur=0;_cpSlide();_cpProg();}
  if(tab==='quiz'){_cpTS();_cp.mode='quiz';_cp.qi=0;_cp.qs=0;_cpQuiz();_cpProg();}
};

window._cpVideoLang=function(lc){
  var tid=_cp.tid;
  if(!COURSE_MEDIA[tid]||!COURSE_MEDIA[tid].video)return;
  var src=COURSE_MEDIA[tid].video[lc];if(!src)return;
  var vid=document.getElementById('cp-video-el');if(!vid)return;
  var t=vid.currentTime;
  vid.src=src;vid.load();vid.currentTime=t;
  document.querySelectorAll('.cp-vlang').forEach(function(b){b.classList.toggle('active',b.textContent.trim().toLowerCase().includes(lc));});
  // Update active style properly
  document.querySelectorAll('.cp-vlang').forEach(function(b){b.classList.remove('active');});
  var btns=document.querySelectorAll('.cp-vlang');
  var labels={pt:'pt',br:'br',en:'en',fr:'fr',es:'es'};
  btns.forEach(function(b){if(b.onclick&&b.getAttribute('onclick').includes("'"+lc+"'"))b.classList.add('active');});
};

window.closeCoursePlayer=function(){
  var ov=document.getElementById('cp-ov');if(ov){ov.style.opacity='0';ov.style.transition='opacity .2s';setTimeout(function(){if(ov.parentNode)ov.parentNode.removeChild(ov);},200);}_cpTS();if(window._cpEsc){document.removeEventListener('keydown',window._cpEsc);window._cpEsc=null;}
};

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
      <div style="display:flex;gap:8px;"></div>
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
        <option value="pending">⏳ Aguardando criação</option>
      </select>
    </div>

    <!-- Category chips -->
    <div id="lib-chips" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
      <span class="chip active" onclick="filterChip(this,'')">${L.chip_all}</span>
      <span class="chip" onclick="filterChip(this,'cybersecurity')">🛡 Cybersecurity</span>
      <span class="chip" onclick="filterChip(this,'compliance')">📋 Compliance</span>
      <span class="chip" onclick="filterChip(this,'privacidade')">🔒 Privacidade</span>
      <span class="chip" onclick="filterChip(this,'etica')">⚖️ Ética</span>
      <span class="chip" onclick="filterChip(this,'governanca')">🏢 Governança</span>
      <span class="chip" onclick="filterChip(this,'ia')">🤖 IA</span>
      <span class="chip lib-chip-pending" onclick="filterChip(this,'__pending__')"
        style="background:rgba(239,68,68,0.10);border-color:rgba(239,68,68,0.35);color:#ef4444;display:inline-flex;">
        ⏳ Aguardando criação/publicação
        <span style="margin-left:5px;font-size:0.60rem;font-weight:800;background:rgba(239,68,68,0.20);padding:1px 6px;border-radius:99px;">${(window.LIBRARY_PENDING_COURSES||[]).length}</span>
      </span>
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

    <!-- Course Grid — also used for pending view when chip is active -->
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

// ── Red card for AI-identified courses not yet in the library ──
function pendingCourseCard(p, L, idx) {
  const catMap = {
    'Cybersecurity':'🛡','Compliance':'📋','Privacidade':'🔒',
    'Ética':'⚖️','Governança':'🏢','IA':'🤖','Behavioral Security':'🧠',
  };
  const icon = catMap[p.categoria] || '📚';
  const urgColor = p.urgencia?.includes('Alta') || p.urgencia?.includes('Crítica') ? '#ef4444' : '#f59e0b';
  return `
  <div class="card" id="lib-pending-card-${idx}" style="padding:0;overflow:hidden;border:2px dashed rgba(239,68,68,0.42);background:rgba(239,68,68,0.03);transition:all 0.22s;">
    <!-- Status banner -->
    <div style="background:rgba(239,68,68,0.10);border-bottom:1px dashed rgba(239,68,68,0.25);padding:8px 16px;display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:7px;">
        <span style="font-size:0.85rem;">⏳</span>
        <span style="font-size:0.62rem;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.08em;">Aguardando criação/publicação</span>
      </div>
      <span style="font-size:0.62rem;color:#6b7280;">${p.addedAt||''}</span>
    </div>
    <!-- Header -->
    <div style="padding:16px 18px 10px;display:flex;align-items:flex-start;gap:12px;">
      <span style="font-size:1.8rem;line-height:1;opacity:0.55;flex-shrink:0;">${icon}</span>
      <div style="flex:1;min-width:0;">
        <div style="font-size:0.90rem;font-weight:800;line-height:1.3;margin-bottom:6px;color:#fca5a5;">${p.titulo}</div>
        <div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center;">
          <span style="font-size:0.60rem;font-weight:700;padding:2px 9px;border-radius:99px;background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.28);">${p.categoria}</span>
          <span style="font-size:0.60rem;font-weight:700;color:${urgColor};background:${urgColor}18;padding:2px 9px;border-radius:99px;border:1px solid ${urgColor}35;">${p.urgencia}</span>
        </div>
      </div>
    </div>
    <!-- Body -->
    <div style="padding:0 18px 16px;display:flex;flex-direction:column;gap:10px;">
      ${p.descricao ? `<p style="font-size:0.78rem;color:#94a3b8;line-height:1.55;margin:0;">${p.descricao}</p>` : ''}
      <div style="display:flex;align-items:center;gap:6px;font-size:0.70rem;color:#6b7280;">
        <span>${p.suggested ? '👤' : '📋'}</span>
        <span>${p.suggested
          ? `Sugerido por: <strong style="color:#a78bfa;">${p.suggestedBy||'Usuário'}</strong>`
          : `Identificado por: <strong style="color:#f59e0b;">${p.campanha||'IA'}</strong>`
        }</span>
      </div>
      <div style="padding:9px 12px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:8px;font-size:0.72rem;color:#fca5a5;line-height:1.55;">
        ${p.suggested
          ? 'Este curso foi sugerido por um usuário e aguarda análise e criação pela equipe de treinamento.'
          : 'Este curso foi recomendado pela IA e ainda não está na biblioteca. Quando publicado, as atribuições pendentes serão ativadas automaticamente.'
        }
      </div>
    </div>
    <!-- Footer — only delete button -->
    <div style="padding:10px 18px 14px;border-top:1px dashed rgba(239,68,68,0.18);display:flex;justify-content:flex-end;">
      <button class="btn btn-sm" onclick="libDeletePending(${idx})"
        style="display:flex;align-items:center;gap:6px;background:rgba(239,68,68,0.10);color:#ef4444;border:1px solid rgba(239,68,68,0.28);font-weight:700;font-size:0.76rem;padding:6px 14px;border-radius:8px;cursor:pointer;transition:all 0.18s;"
        onmouseenter="this.style.background='rgba(239,68,68,0.20)'" onmouseleave="this.style.background='rgba(239,68,68,0.10)'">
        🗑 Excluir Curso
      </button>
    </div>
  </div>`;
}

// Delete a pending course by index, re-render and sync chip badge
window.libDeletePending = function(idx) {
  if (!window.LIBRARY_PENDING_COURSES) return;
  const curso = window.LIBRARY_PENDING_COURSES[idx];
  if (!curso) return;
  window.LIBRARY_PENDING_COURSES.splice(idx, 1);

  const n = window.LIBRARY_PENDING_COURSES.length;
  // Update chip badge (chip is always visible)
  const chip = document.querySelector('#lib-chips .lib-chip-pending');
  if (chip) {
    const badge = chip.querySelector('span');
    if (badge) badge.textContent = n;
    if (n === 0) {
      // No more pending — switch back to "Todos" view but keep chip visible
      _libPendingActive = false;
      chip.classList.remove('active');
      chip.style.background = 'rgba(239,68,68,0.10)';
      chip.style.borderColor = 'rgba(239,68,68,0.35)';
      chip.style.color = '#ef4444';
      const allChip = document.querySelector('#lib-chips .chip');
      if (allChip) allChip.classList.add('active');
    }
  }
  // Re-render the grid
  filterLibrary();
  showToast && showToast(`🗑 "${curso.titulo}" removido dos cursos pendentes.`, 'info');
};

// ── Modal: Sugerir Criação de Curso ───────────────────────────
window.libOpenSuggestModal = function() {
  const userName = (typeof DEMO_STATE !== 'undefined' && DEMO_STATE.name) ? DEMO_STATE.name : 'Admin Local';
  const today = new Date().toISOString().slice(0, 10);

  // Build modal using showModal if available, else inline overlay
  const html = `
    <div id="lib-suggest-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;" onclick="if(event.target===this)libCloseSuggestModal()">
      <div style="background:#1a1f2e;border:1px solid rgba(139,92,246,0.35);border-radius:16px;width:100%;max-width:480px;padding:0;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,0.5);">
        <!-- Header -->
        <div style="padding:20px 24px 16px;border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:1.05rem;font-weight:800;color:#f1f5f9;">✨ Sugerir Criação de Curso</div>
            <div style="font-size:0.74rem;color:#6b7280;margin-top:3px;">O curso será adicionado à lista de pendentes para análise</div>
          </div>
          <button onclick="libCloseSuggestModal()" style="background:none;border:none;color:#6b7280;font-size:1.3rem;cursor:pointer;line-height:1;padding:4px;">✕</button>
        </div>
        <!-- Body -->
        <div style="padding:24px;">
          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:0.76rem;font-weight:700;color:#94a3b8;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Nome do curso *</label>
            <input id="lib-suggest-name" type="text" placeholder="Ex: Segurança em IA Generativa" maxlength="100"
              style="width:100%;box-sizing:border-box;background:#0f1219;border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:10px 14px;color:#f1f5f9;font-size:0.88rem;outline:none;transition:border-color 0.18s;"
              onfocus="this.style.borderColor='rgba(139,92,246,0.60)'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'">
          </div>
          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:0.76rem;font-weight:700;color:#94a3b8;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Categoria</label>
            <select id="lib-suggest-cat" style="width:100%;box-sizing:border-box;background:#0f1219;border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:10px 14px;color:#f1f5f9;font-size:0.88rem;outline:none;">
              <option value="Cybersecurity">🛡 Cybersecurity</option>
              <option value="Compliance">📋 Compliance</option>
              <option value="Privacidade">🔒 Privacidade</option>
              <option value="Ética">⚖️ Ética</option>
              <option value="Governança">🏢 Governança</option>
              <option value="IA">🤖 IA</option>
              <option value="Behavioral Security">🧠 Behavioral Security</option>
            </select>
          </div>
          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:0.76rem;font-weight:700;color:#94a3b8;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Urgência</label>
            <select id="lib-suggest-urgencia" style="width:100%;box-sizing:border-box;background:#0f1219;border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:10px 14px;color:#f1f5f9;font-size:0.88rem;outline:none;">
              <option value="Baixa">Baixa</option>
              <option value="Média" selected>Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:0.76rem;font-weight:700;color:#94a3b8;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;">Justificativa (opcional)</label>
            <textarea id="lib-suggest-desc" placeholder="Descreva brevemente por que este curso é necessário..." rows="3" maxlength="300"
              style="width:100%;box-sizing:border-box;background:#0f1219;border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:10px 14px;color:#f1f5f9;font-size:0.84rem;outline:none;resize:vertical;font-family:inherit;transition:border-color 0.18s;"
              onfocus="this.style.borderColor='rgba(139,92,246,0.60)'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"></textarea>
          </div>
          <!-- Info row: who + when -->
          <div style="display:flex;gap:10px;margin-bottom:20px;">
            <div style="flex:1;padding:10px 14px;background:rgba(139,92,246,0.07);border:1px solid rgba(139,92,246,0.20);border-radius:8px;">
              <div style="font-size:0.62rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Sugerido por</div>
              <div style="font-size:0.84rem;font-weight:700;color:#a78bfa;">${userName}</div>
            </div>
            <div style="flex:1;padding:10px 14px;background:rgba(139,92,246,0.07);border:1px solid rgba(139,92,246,0.20);border-radius:8px;">
              <div style="font-size:0.62rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Data</div>
              <div style="font-size:0.84rem;font-weight:700;color:#a78bfa;">${today}</div>
            </div>
          </div>
          <!-- Actions -->
          <div style="display:flex;gap:10px;">
            <button onclick="libCloseSuggestModal()" style="flex:1;padding:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);border-radius:8px;color:#94a3b8;font-weight:700;font-size:0.84rem;cursor:pointer;">Cancelar</button>
            <button onclick="libSubmitSuggest('${userName}','${today}')" style="flex:2;padding:10px;background:linear-gradient(135deg,rgba(139,92,246,0.80),rgba(109,40,217,0.90));border:none;border-radius:8px;color:#fff;font-weight:800;font-size:0.84rem;cursor:pointer;box-shadow:0 4px 16px rgba(139,92,246,0.30);">✨ Enviar Sugestão</button>
          </div>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
  setTimeout(() => { const el = document.getElementById('lib-suggest-name'); if(el) el.focus(); }, 80);
};

window.libCloseSuggestModal = function() {
  const el = document.getElementById('lib-suggest-overlay');
  if (el) el.remove();
};

window.libSubmitSuggest = function(userName, today) {
  const nome = (document.getElementById('lib-suggest-name')?.value || '').trim();
  if (!nome) {
    const inp = document.getElementById('lib-suggest-name');
    if (inp) { inp.style.borderColor='#ef4444'; inp.focus(); }
    showToast && showToast('❌ Informe o nome do curso.', 'error');
    return;
  }
  const cat      = document.getElementById('lib-suggest-cat')?.value      || 'Cybersecurity';
  const urgencia = document.getElementById('lib-suggest-urgencia')?.value  || 'Média';
  const desc     = (document.getElementById('lib-suggest-desc')?.value     || '').trim();

  if (!window.LIBRARY_PENDING_COURSES) window.LIBRARY_PENDING_COURSES = [];
  window.LIBRARY_PENDING_COURSES.unshift({
    titulo:      nome,
    categoria:   cat,
    urgencia:    urgencia,
    descricao:   desc || `Curso sugerido por ${userName}.`,
    campanha:    null,
    addedAt:     today,
    suggested:   true,
    suggestedBy: userName,
  });

  // Update chip badge
  const chip  = document.querySelector('#lib-chips .lib-chip-pending');
  const badge = chip?.querySelector('span');
  if (badge) badge.textContent = window.LIBRARY_PENDING_COURSES.length;

  libCloseSuggestModal();

  // Navigate to pending chip view
  const pendingChip = document.querySelector('#lib-chips .lib-chip-pending');
  if (pendingChip && typeof filterChip === 'function') filterChip(pendingChip, '__pending__');
  else if (typeof filterLibrary === 'function') filterLibrary();

  showToast && showToast(`✨ Sugestão "${nome}" adicionada aos cursos pendentes!`, 'success');
};

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
    <div style="padding:10px 18px;border-top:1px solid var(--bg-border);display:flex;gap:6px;justify-content:flex-end;align-items:center;">
      ${COURSE_FILES[c.id] ? `
        <button class="btn btn-sm" onclick="event.stopPropagation();launchCourse(${c.id},'${c.title.replace(/'/g,"\\'")}') " style="background:${COURSE_COMPLETIONS[c.id]?.passed?'rgba(34,197,94,0.15)':'rgba(0,180,216,0.15)'};color:${COURSE_COMPLETIONS[c.id]?.passed?'#22c55e':'#00B4D8'};border:1px solid ${COURSE_COMPLETIONS[c.id]?.passed?'rgba(34,197,94,0.30)':'rgba(0,180,216,0.25)'};font-weight:700;" title="Iniciar curso interativo">
          ${COURSE_COMPLETIONS[c.id]?.passed ? '✅ Revisar' : '▶ Iniciar'}
        </button>` : ''}
      <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();showToast('Editando ${c.title}','info')">✏️</button>
      <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();showToast('Gerenciando versões','info')">📋</button>
      <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();navTo('assignments',document.querySelector('[data-page=assignments]'));setTimeout(()=>asOpenNewPrefilled&&asOpenNewPrefilled('${c.title.replace(/'/g,"\\'")}','Todos os usuários',${c.mandatory}),220)">${L.btn_assign_card}</button>
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
      <button class="btn btn-primary" onclick="hideModal('modal-course-detail');navTo('assignments',document.querySelector('[data-page=assignments]'));setTimeout(()=>asOpenNewPrefilled&&asOpenNewPrefilled(c.title,'Todos os usuários',c.mandatory),220)">Atribuir Treinamento</button>
    </div>`;
  showModal('modal-course-detail');
}

// ─────────────────────────────
// FILTERS
// ─────────────────────────────
// Track whether the pending chip is active
let _libPendingActive = false;

window.filterChip = function(el, cat) {
  document.querySelectorAll('#lib-chips .chip').forEach(c => {
    c.classList.remove('active');
    // restore default style for red chip when deactivated
    if (c.classList.contains('lib-chip-pending')) {
      c.style.background = 'rgba(239,68,68,0.10)';
      c.style.borderColor = 'rgba(239,68,68,0.35)';
      c.style.color = '#ef4444';
    }
  });
  el.classList.add('active');
  // Style the red chip when active
  if (el.classList.contains('lib-chip-pending')) {
    el.style.background = 'rgba(239,68,68,0.25)';
    el.style.borderColor = 'rgba(239,68,68,0.60)';
    el.style.color = '#fca5a5';
  }
  _libPendingActive = (cat === '__pending__');
  // sync dropdown (clear it for pending mode)
  const catSelect = document.getElementById('lib-filter-cat');
  if (catSelect) catSelect.value = _libPendingActive ? '' : cat;
  filterLibrary();
};

window.filterLibrary = function() {
  const search = (document.getElementById('lib-search')?.value || '').toLowerCase();
  const lang   = document.getElementById('lib-filter-lang')?.value || '';
  const status = document.getElementById('lib-filter-status')?.value || '';
  const cat    = _libPendingActive ? '' : (document.getElementById('lib-filter-cat')?.value || '');
  const L = libLabels[APP.lang] || libLabels.pt;
  const grid = document.getElementById('lib-grid');
  if (!grid) return;

  // ── PENDING MODE: show only pending cards ──────────────────────
  if (_libPendingActive) {
    const pending = (window.LIBRARY_PENDING_COURSES || []).filter(p => {
      if (search && !p.titulo.toLowerCase().includes(search)) return false;
      return true;
    });

    if (!pending.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:48px 20px;">
          <div style="font-size:2.5rem;margin-bottom:12px;">✅</div>
          <div style="font-size:1.0rem;font-weight:700;color:#f1f5f9;margin-bottom:6px;">Nenhum curso pendente</div>
          <div style="font-size:0.82rem;color:#6b7280;">Todos os cursos recomendados pela IA já estão na biblioteca.</div>
        </div>`;
      return;
    }

    // Pending section header inside the grid (full-width)
    grid.innerHTML = `
      <div style="grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;background:rgba(239,68,68,0.05);border:1px dashed rgba(239,68,68,0.30);border-radius:14px;margin-bottom:4px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:4px;height:28px;background:linear-gradient(180deg,#ef4444,#b91c1c);border-radius:2px;flex-shrink:0;"></div>
          <div>
            <div style="font-size:0.95rem;font-weight:800;letter-spacing:-0.015em;color:#fca5a5;">Cursos Pendentes de Criação</div>
            <div style="font-size:0.72rem;color:#6b7280;margin-top:2px;">Identificados pela IA ou sugeridos por usuários — aguardando cadastro na biblioteca</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:0.68rem;font-weight:700;padding:3px 12px;border-radius:99px;background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.30);">${pending.length} pendente(s)</span>
          <button onclick="libOpenSuggestModal()" style="display:flex;align-items:center;gap:6px;background:rgba(139,92,246,0.12);color:#a78bfa;border:1px solid rgba(139,92,246,0.35);font-weight:700;font-size:0.76rem;padding:7px 14px;border-radius:8px;cursor:pointer;transition:all 0.18s;white-space:nowrap;"
            onmouseenter="this.style.background='rgba(139,92,246,0.22)'" onmouseleave="this.style.background='rgba(139,92,246,0.12)'">
            ✨ Sugerir Criação de Curso
          </button>
        </div>
      </div>
      ${pending.length ? pending.map((p,i) => pendingCourseCard(p, L, i)).join('') : `
        <div style="grid-column:1/-1;text-align:center;padding:40px 20px;">
          <div style="font-size:2.2rem;margin-bottom:10px;">📭</div>
          <div style="font-size:0.92rem;font-weight:700;color:#f1f5f9;margin-bottom:5px;">Nenhum curso pendente</div>
          <div style="font-size:0.78rem;color:#6b7280;">Use o botão acima para sugerir um novo curso.</div>
        </div>`}`;
    return;
  }

  // ── NORMAL MODE: show regular courses ─────────────────────────
  const filtered = COURSES.filter(c => {
    if (search && !c.title.toLowerCase().includes(search) && !c.desc.toLowerCase().includes(search)) return false;
    if (cat && c.category !== cat) return false;
    if (lang && !c.langs.includes(lang)) return false;
    if (status && c.status !== status) return false;
    return true;
  });

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
