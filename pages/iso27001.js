// ══════════════════════════════════════════════════════════════
//  🛡 ISO 27001:2022 CONTROL MAPPING ENGINE
//  Brandvakt Academy Enterprise Platform
// ══════════════════════════════════════════════════════════════

function injectISO27001CSS() {
  if (document.getElementById('iso-css')) return;
  const s = document.createElement('style');
  s.id = 'iso-css';
  s.textContent = `
    .iso-wrap      { display:grid; grid-template-columns:290px 1fr; gap:16px; align-items:start; min-height:560px; }
    .iso-sidebar   { background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:16px; overflow:hidden; display:flex; flex-direction:column; height:600px; }
    .iso-sidebar-hd{ padding:14px 14px 10px; border-bottom:1px solid rgba(255,255,255,0.06); flex-shrink:0; }
    .iso-list      { overflow-y:auto; flex:1; }
    .iso-list::-webkit-scrollbar { width:4px; } .iso-list::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.10); border-radius:4px; }

    .iso-domain-hd { padding:8px 14px 6px; font-size:0.65rem; font-weight:800; color:#6b7280; text-transform:uppercase; letter-spacing:0.10em; background:rgba(255,255,255,0.02); border-bottom:1px solid rgba(255,255,255,0.04); position:sticky; top:0; z-index:1; }
    .iso-item      { display:flex; align-items:center; gap:8px; padding:9px 14px; cursor:pointer; transition:background 0.15s; border-bottom:1px solid rgba(255,255,255,0.03); }
    .iso-item:hover{ background:rgba(255,255,255,0.04); }
    .iso-item.active{ background:rgba(0,212,255,0.10); border-right:3px solid #00d4ff; }
    .iso-item-code { font-size:0.68rem; font-weight:800; color:#6b7280; min-width:38px; flex-shrink:0; }
    .iso-item-title{ font-size:0.78rem; font-weight:500; color:#d1d5db; flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .iso-dot       { width:8px; height:8px; border-radius:50%; flex-shrink:0; }

    .iso-main      { background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:24px; min-height:600px; }
    .iso-section   { font-size:0.68rem; font-weight:800; color:#6b7280; text-transform:uppercase; letter-spacing:0.10em; padding-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.06); margin-bottom:14px; margin-top:20px; }
    .iso-section:first-child { margin-top:0; }

    .iso-training-row { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:10px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); margin-bottom:8px; transition:all 0.18s; }
    .iso-training-row:hover{ background:rgba(255,255,255,0.04); }

    .iso-evidence-row { display:flex; align-items:center; gap:10px; padding:9px 12px; border-radius:8px; border-bottom:1px solid rgba(255,255,255,0.04); font-size:0.78rem; }
    .iso-evidence-row:hover { background:rgba(255,255,255,0.02); }

    .iso-prog { height:5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }
    .iso-prog-fill { height:100%; border-radius:3px; transition:width 0.8s ease; }

    .iso-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:99px; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; white-space:nowrap; }

    .iso-btn { display:inline-flex; align-items:center; gap:6px; padding:8px 15px; border-radius:9px; border:none; font-size:0.80rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:inherit; }
    .iso-btn-primary { background:#00d4ff; color:#000; }
    .iso-btn-primary:hover { opacity:0.9; transform:translateY(-1px); }
    .iso-btn-ghost { background:rgba(255,255,255,0.06); color:#94a3b8; border:1px solid rgba(255,255,255,0.10); }
    .iso-btn-ghost:hover { background:rgba(255,255,255,0.10); color:#e2e8f0; }
    .iso-btn-sm { padding:5px 11px; font-size:0.72rem; border-radius:7px; }

    .iso-input { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.10); border-radius:8px; padding:8px 11px; color:#f1f5f9; font-size:0.82rem; font-family:inherit; outline:none; transition:border-color 0.2s; width:100%; box-sizing:border-box; }
    .iso-input:focus { border-color:#00d4ff; }
    .iso-input::placeholder { color:#6b7280; }
    .iso-select option { background:#1a1a26; }

    .iso-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.80); backdrop-filter:blur(6px); z-index:9000; display:flex; align-items:center; justify-content:center; padding:20px; }
    .iso-modal  { background:#14141e; border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:28px; width:100%; max-width:680px; max-height:88vh; overflow-y:auto; animation:isoIn 0.22s ease; }
    @keyframes isoIn { from{transform:scale(0.96);opacity:0} to{transform:scale(1);opacity:1} }

    .iso-kpi-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:20px; }
    .iso-kpi { background:#0d0d14; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:16px; text-align:center; }
    .iso-kpi-val { font-size:1.6rem; font-weight:900; letter-spacing:-0.04em; }
    .iso-kpi-lbl { font-size:0.68rem; color:#6b7280; margin-top:4px; text-transform:uppercase; letter-spacing:0.07em; }

    @media(max-width:900px){ .iso-wrap{grid-template-columns:1fr;} .iso-sidebar{height:300px;} }
  `;
  document.head.appendChild(s);
}
injectISO27001CSS();

// ── ISO 27001:2022 — All 93 Controls ─────────────────────────
const ISO_CONTROLS = [
  // ─── A.5 Organizational (37) ───
  { id:'A.5.1',  domain:'org', title:'Políticas de Segurança da Informação',    desc:'Definir, aprovar, publicar, comunicar e rever periodicamente políticas de segurança da informação.' },
  { id:'A.5.2',  domain:'org', title:'Funções e Responsabilidades de SI',       desc:'Definir e atribuir funções e responsabilidades de segurança da informação de acordo com as necessidades organizacionais.' },
  { id:'A.5.3',  domain:'org', title:'Segregação de Funções',                   desc:'Separar deveres e áreas de responsabilidade conflitantes para reduzir oportunidades de uso não autorizado ou acidental.' },
  { id:'A.5.4',  domain:'org', title:'Responsabilidades da Gestão',             desc:'Exigir que toda a gestão aplique a segurança da informação de acordo com as políticas e procedimentos estabelecidos.' },
  { id:'A.5.5',  domain:'org', title:'Contato com Autoridades',                 desc:'Manter contatos apropriados com autoridades relevantes (reguladores, aplicação da lei, etc.).' },
  { id:'A.5.6',  domain:'org', title:'Contato com Grupos de Interesse Especial',desc:'Manter contato com grupos de interesse especial e fóruns de segurança da informação.' },
  { id:'A.5.7',  domain:'org', title:'Inteligência de Ameaças',                 desc:'Coletar e analisar informações sobre ameaças à segurança da informação para produzir inteligência.' },
  { id:'A.5.8',  domain:'org', title:'SI na Gestão de Projetos',               desc:'Integrar a segurança da informação na gestão de projetos, desde o início até a conclusão.' },
  { id:'A.5.9',  domain:'org', title:'Inventário de Ativos',                    desc:'Identificar, inventariar e manter um inventário de informações e outros ativos associados.' },
  { id:'A.5.10', domain:'org', title:'Uso Aceitável de Ativos',                desc:'Identificar, documentar e implementar regras de uso aceitável de informações e outros ativos.' },
  { id:'A.5.11', domain:'org', title:'Devolução de Ativos',                     desc:'Garantir que colaboradores e fornecedores devolvam todos os ativos ao encerrar o contrato.' },
  { id:'A.5.12', domain:'org', title:'Classificação da Informação',             desc:'Classificar informações de acordo com as necessidades de segurança, baseado em confidencialidade, integridade e disponibilidade.' },
  { id:'A.5.13', domain:'org', title:'Rotulagem da Informação',                 desc:'Desenvolver e implementar procedimentos para rotulagem da informação de acordo com o esquema de classificação.' },
  { id:'A.5.14', domain:'org', title:'Transferência de Informações',            desc:'Manter regras, procedimentos e acordos para proteção da transferência de informações internamente e com terceiros.' },
  { id:'A.5.15', domain:'org', title:'Controle de Acesso',                      desc:'Estabelecer e implementar regras de controle de acesso baseadas nos requisitos de negócio e segurança.' },
  { id:'A.5.16', domain:'org', title:'Gestão de Identidade',                    desc:'Gerenciar o ciclo de vida completo das identidades para autenticar e autorizar usuários, sistemas e serviços.' },
  { id:'A.5.17', domain:'org', title:'Informação de Autenticação',              desc:'Controlar a alocação e gestão de informações de autenticação, incluindo políticas de senha.' },
  { id:'A.5.18', domain:'org', title:'Direitos de Acesso',                      desc:'Provisionar, revisar, modificar e remover direitos de acesso de acordo com a política de controle de acesso.' },
  { id:'A.5.19', domain:'org', title:'SI nas Relações com Fornecedores',       desc:'Identificar e implementar controles para gerir riscos de segurança da informação com fornecedores.' },
  { id:'A.5.20', domain:'org', title:'SI nos Acordos com Fornecedores',        desc:'Estabelecer requisitos de segurança da informação nos acordos com cada fornecedor.' },
  { id:'A.5.21', domain:'org', title:'SI na Cadeia de Suprimentos de TIC',    desc:'Definir e implementar processos para gerir riscos de SI associados à cadeia de suprimentos de TIC.' },
  { id:'A.5.22', domain:'org', title:'Monitoramento de Serviços de Fornecedores', desc:'Monitorar, revisar e auditar regularmente a entrega de serviços de fornecedores.' },
  { id:'A.5.23', domain:'org', title:'SI no Uso de Serviços de Nuvem',        desc:'Especificar e gerir os controles de SI para uso de serviços de computação em nuvem.' },
  { id:'A.5.24', domain:'org', title:'Planejamento de Gestão de Incidentes',   desc:'Planejar e preparar a capacidade de gerir eficazmente os incidentes de segurança da informação.' },
  { id:'A.5.25', domain:'org', title:'Avaliação de Eventos de Segurança',      desc:'Avaliar eventos de segurança e determinar se devem ser classificados como incidentes.' },
  { id:'A.5.26', domain:'org', title:'Resposta a Incidentes de Segurança',     desc:'Responder a incidentes de segurança da informação de acordo com os procedimentos documentados.' },
  { id:'A.5.27', domain:'org', title:'Aprendendo com Incidentes',              desc:'Usar conhecimento adquirido de incidentes para reduzir a probabilidade ou impacto de incidentes futuros.' },
  { id:'A.5.28', domain:'org', title:'Coleta de Evidências',                   desc:'Identificar, coletar, adquirir e preservar evidências relacionadas a eventos de segurança da informação.' },
  { id:'A.5.29', domain:'org', title:'SI durante Interrupção',                 desc:'Planejar manutenção da SI em nível adequado durante interrupções.' },
  { id:'A.5.30', domain:'org', title:'Prontidão de TIC para Continuidade',     desc:'Planejar, implementar, manter e testar prontidão de TIC para garantir disponibilidade de informações e ativos.' },
  { id:'A.5.31', domain:'org', title:'Requisitos Legais e Contratuais',        desc:'Identificar, documentar e manter atualizados requisitos legais, estatutários, regulatórios e contratuais.' },
  { id:'A.5.32', domain:'org', title:'Direitos de Propriedade Intelectual',    desc:'Implementar procedimentos para proteção dos direitos de propriedade intelectual.' },
  { id:'A.5.33', domain:'org', title:'Proteção de Registros',                  desc:'Proteger registros contra perda, destruição, falsificação, acesso não autorizado e divulgação não autorizada.' },
  { id:'A.5.34', domain:'org', title:'Privacidade e Proteção de PII',          desc:'Identificar e atender requisitos relativos à preservação de privacidade e proteção de dados pessoais (LGPD/GDPR).' },
  { id:'A.5.35', domain:'org', title:'Revisão Independente de SI',             desc:'Revisar independentemente a abordagem da organização para gestão da segurança da informação.' },
  { id:'A.5.36', domain:'org', title:'Conformidade com Políticas de SI',       desc:'Revisar regularmente a conformidade do processamento de informações com as políticas e normas de segurança.' },
  { id:'A.5.37', domain:'org', title:'Procedimentos Operacionais Documentados',desc:'Documentar, manter disponível e atualizar procedimentos para atividades de processamento de informações.' },

  // ─── A.6 People (8) ───
  { id:'A.6.1',  domain:'people', title:'Triagem',                            desc:'Realizar verificações de antecedentes de candidatos a cargos, fornecedores ou usuários.' },
  { id:'A.6.2',  domain:'people', title:'Termos e Condições de Emprego',      desc:'Incluir cláusulas de segurança da informação nos contratos de trabalho e de prestação de serviços.' },
  { id:'A.6.3',  domain:'people', title:'Conscientização, Educação e Treinamento em SI', desc:'Garantir que colaboradores recebam conscientização, educação e treinamento em SI adequados às suas funções. PILAR CENTRAL DO PROGRAMA BRANDVAKT.' },
  { id:'A.6.4',  domain:'people', title:'Processo Disciplinar',               desc:'Formalizar e comunicar o processo disciplinar para colaboradores que violem a política de SI.' },
  { id:'A.6.5',  domain:'people', title:'Responsabilidades após Encerramento', desc:'Definir e cumprir responsabilidades de SI que continuam após o encerramento ou mudança de vínculo.' },
  { id:'A.6.6',  domain:'people', title:'Acordos de Confidencialidade',       desc:'Exigir assinatura de acordos de confidencialidade/NDA de colaboradores e partes externas.' },
  { id:'A.6.7',  domain:'people', title:'Trabalho Remoto',                    desc:'Implementar controles de segurança para proteger informações acessadas, processadas ou armazenadas fora da organização.' },
  { id:'A.6.8',  domain:'people', title:'Reporte de Eventos de SI',           desc:'Fornecer mecanismos para que colaboradores reportem eventos e incidentes de SI observados.' },

  // ─── A.7 Physical (14) ───
  { id:'A.7.1',  domain:'physical', title:'Perímetros de Segurança Física',   desc:'Definir e usar perímetros de segurança para proteger áreas que contêm informações e ativos críticos.' },
  { id:'A.7.2',  domain:'physical', title:'Entrada Física',                   desc:'Proteger áreas seguras com controles de entrada apropriados para garantir acesso apenas a pessoal autorizado.' },
  { id:'A.7.3',  domain:'physical', title:'Segurança de Escritórios e Salas', desc:'Projetar e aplicar segurança física a escritórios, salas e instalações.' },
  { id:'A.7.4',  domain:'physical', title:'Monitoramento de Segurança Física',desc:'Monitorar continuamente as instalações para detectar acessos físicos não autorizados.' },
  { id:'A.7.5',  domain:'physical', title:'Proteção contra Ameaças Físicas',  desc:'Projetar e implementar proteção contra desastres naturais, ataques maliciosos e acidentes físicos.' },
  { id:'A.7.6',  domain:'physical', title:'Trabalho em Áreas Seguras',        desc:'Projetar e aplicar medidas de segurança para trabalho em áreas seguras.' },
  { id:'A.7.7',  domain:'physical', title:'Mesa e Tela Limpas',               desc:'Definir e aplicar regras de mesa limpa (papéis, mídias) e tela limpa (estações de trabalho).' },
  { id:'A.7.8',  domain:'physical', title:'Localização e Proteção de Equipamentos', desc:'Posicionar e proteger equipamentos de forma a reduzir riscos de ameaças físicas e ambientais.' },
  { id:'A.7.9',  domain:'physical', title:'Segurança de Ativos Fora das Instalações', desc:'Proteger ativos fora das instalações contra riscos adicionais de operações externas.' },
  { id:'A.7.10', domain:'physical', title:'Mídia de Armazenamento',           desc:'Gerenciar mídias de armazenamento ao longo de seu ciclo de vida: aquisição, uso, transporte e descarte.' },
  { id:'A.7.11', domain:'physical', title:'Utilidades de Suporte',            desc:'Proteger equipamentos contra falhas de energia e outras interrupções causadas por falhas em utilidades de suporte.' },
  { id:'A.7.12', domain:'physical', title:'Segurança de Cabeamento',         desc:'Proteger cabos de energia e telecomunicações contra interceptação, interferência ou danos.' },
  { id:'A.7.13', domain:'physical', title:'Manutenção de Equipamentos',       desc:'Manter equipamentos corretamente para garantir disponibilidade contínua e integridade.' },
  { id:'A.7.14', domain:'physical', title:'Descarte Seguro ou Reutilização',  desc:'Verificar que itens de equipamento contendo mídia de armazenamento foram verificados para garantir que dados foram removidos antes do descarte.' },

  // ─── A.8 Technological (34) ───
  { id:'A.8.1',  domain:'tech', title:'Dispositivos de Endpoint do Usuário',  desc:'Proteger informações armazenadas, processadas ou acessíveis por dispositivos de endpoint do usuário.' },
  { id:'A.8.2',  domain:'tech', title:'Direitos de Acesso Privilegiado',      desc:'Restringir e gerenciar direitos de acesso privilegiado.' },
  { id:'A.8.3',  domain:'tech', title:'Restrição de Acesso a Informações',    desc:'Restringir o acesso a informações e outros ativos de acordo com a política de controle de acesso.' },
  { id:'A.8.4',  domain:'tech', title:'Acesso ao Código-fonte',               desc:'Gerenciar o acesso de leitura e escrita ao código-fonte e ferramentas de desenvolvimento.' },
  { id:'A.8.5',  domain:'tech', title:'Autenticação Segura',                  desc:'Implementar tecnologias e procedimentos de autenticação segura com base em restrições de acesso à informação.' },
  { id:'A.8.6',  domain:'tech', title:'Gestão de Capacidade',                 desc:'Monitorar e ajustar uso de recursos, além de projetar necessidades de capacidade futura.' },
  { id:'A.8.7',  domain:'tech', title:'Proteção contra Malware',              desc:'Implementar controles de detecção, prevenção e recuperação de malware combinados com conscientização do usuário.' },
  { id:'A.8.8',  domain:'tech', title:'Gestão de Vulnerabilidades Técnicas', desc:'Obter informações sobre vulnerabilidades técnicas de sistemas e tomar ações apropriadas.' },
  { id:'A.8.9',  domain:'tech', title:'Gestão de Configuração',               desc:'Estabelecer, documentar, implementar, monitorar e revisar configurações de hardware, software, serviços e redes.' },
  { id:'A.8.10', domain:'tech', title:'Exclusão de Informações',              desc:'Excluir informações quando não mais necessárias para cumprir a finalidade e requisitos legais.' },
  { id:'A.8.11', domain:'tech', title:'Mascaramento de Dados',                desc:'Mascarar dados pessoais e outras informações sensíveis de acordo com a política de controle de acesso.' },
  { id:'A.8.12', domain:'tech', title:'Prevenção de Vazamento de Dados',      desc:'Aplicar medidas para detectar e prevenir divulgação e extração não autorizadas de informações.' },
  { id:'A.8.13', domain:'tech', title:'Backup de Informações',                desc:'Manter e testar regularmente cópias de backup de informações, software e sistemas.' },
  { id:'A.8.14', domain:'tech', title:'Redundância de Instalações',           desc:'Implementar redundância suficiente de instalações de processamento de informações para atender requisitos de disponibilidade.' },
  { id:'A.8.15', domain:'tech', title:'Registro (Logging)',                   desc:'Produzir, armazenar, proteger e analisar logs de atividades, exceções, falhas e eventos de SI.' },
  { id:'A.8.16', domain:'tech', title:'Monitoramento de Atividades',          desc:'Monitorar redes, sistemas e aplicações para detectar comportamentos anômalos e tomar ações apropriadas.' },
  { id:'A.8.17', domain:'tech', title:'Sincronização de Relógio',             desc:'Sincronizar relógios de sistemas de processamento de informações com fontes de tempo aprovadas.' },
  { id:'A.8.18', domain:'tech', title:'Uso de Programas Utilitários Privilegiados', desc:'Restringir e controlar rigorosamente o uso de programas utilitários capazes de sobrepor controles.' },
  { id:'A.8.19', domain:'tech', title:'Instalação de Software',               desc:'Implementar procedimentos para gerenciar com segurança a instalação de software em sistemas operacionais.' },
  { id:'A.8.20', domain:'tech', title:'Segurança de Redes',                   desc:'Proteger redes e dispositivos de rede de ameaças para proteger informações em sistemas e aplicações.' },
  { id:'A.8.21', domain:'tech', title:'Segurança de Serviços de Rede',        desc:'Identificar e implementar mecanismos de segurança, níveis de serviço e requisitos de todos os serviços de rede.' },
  { id:'A.8.22', domain:'tech', title:'Segregação de Redes',                  desc:'Segregar grupos de serviços, usuários e sistemas de informações em redes separadas.' },
  { id:'A.8.23', domain:'tech', title:'Filtragem Web',                        desc:'Gerenciar acesso a sites externos para reduzir exposição a conteúdo malicioso.' },
  { id:'A.8.24', domain:'tech', title:'Uso de Criptografia',                  desc:'Definir e implementar regras para uso efetivo e adequado de criptografia, incluindo gestão de chaves.' },
  { id:'A.8.25', domain:'tech', title:'Ciclo de Vida de Desenvolvimento Seguro', desc:'Estabelecer regras para o desenvolvimento seguro de software e sistemas, aplicando ao longo do SDLC.' },
  { id:'A.8.26', domain:'tech', title:'Requisitos de Segurança de Aplicações',desc:'Identificar, especificar e aprovar requisitos de SI ao desenvolver ou adquirir aplicações.' },
  { id:'A.8.27', domain:'tech', title:'Arquitetura e Engenharia de Sistemas Seguros', desc:'Estabelecer, documentar e aplicar princípios de segurança na engenharia de sistemas de informação.' },
  { id:'A.8.28', domain:'tech', title:'Codificação Segura',                   desc:'Aplicar princípios de codificação segura ao desenvolvimento de software.' },
  { id:'A.8.29', domain:'tech', title:'Testes de Segurança no Desenvolvimento',desc:'Definir e implementar processos de testes de segurança no ciclo de desenvolvimento.' },
  { id:'A.8.30', domain:'tech', title:'Desenvolvimento Terceirizado',         desc:'Direcionar, monitorar e revisar atividades relacionadas ao desenvolvimento de sistemas terceirizado.' },
  { id:'A.8.31', domain:'tech', title:'Separação de Ambientes',               desc:'Separar ambientes de desenvolvimento, teste e produção para reduzir riscos de acesso não autorizado.' },
  { id:'A.8.32', domain:'tech', title:'Gestão de Mudanças',                   desc:'Submeter mudanças em instalações e sistemas de processamento de informações a procedimentos formais de gestão de mudanças.' },
  { id:'A.8.33', domain:'tech', title:'Informações de Teste',                 desc:'Selecionar, proteger e gerir adequadamente as informações de teste.' },
  { id:'A.8.34', domain:'tech', title:'Proteção durante Testes de Auditoria', desc:'Planejar e acordar testes de auditoria e outras atividades que envolvem avaliação de sistemas operacionais.' },
];

// ── Mock status data ──────────────────────────────────────────
const ISO_STATUS = {
  // covered (green) — 35 controls
  'A.5.1':true,'A.5.2':true,'A.5.3':true,'A.5.4':true,'A.5.5':true,
  'A.5.8':true,'A.5.9':true,'A.5.10':true,'A.5.12':true,'A.5.13':true,
  'A.5.15':true,'A.5.16':true,'A.5.17':true,'A.5.19':true,'A.5.31':true,
  'A.5.32':true,'A.5.33':true,'A.5.34':true,'A.6.1':true,'A.6.2':true,
  'A.6.3':true,'A.6.6':true,'A.6.7':true,'A.6.8':true,'A.7.1':true,
  'A.7.7':true,'A.8.1':true,'A.8.2':true,'A.8.5':true,'A.8.7':true,
  'A.8.12':true,'A.8.13':true,'A.8.20':true,'A.8.24':true,'A.8.15':true,
};
const ISO_PARTIAL = {
  // partial (yellow) — 30 controls
  'A.5.6':true,'A.5.7':true,'A.5.11':true,'A.5.14':true,'A.5.18':true,
  'A.5.20':true,'A.5.21':true,'A.5.22':true,'A.5.24':true,'A.5.25':true,
  'A.5.26':true,'A.5.29':true,'A.5.35':true,'A.5.36':true,'A.5.37':true,
  'A.6.4':true,'A.6.5':true,'A.7.2':true,'A.7.4':true,'A.7.8':true,
  'A.7.10':true,'A.8.3':true,'A.8.6':true,'A.8.8':true,'A.8.9':true,
  'A.8.16':true,'A.8.19':true,'A.8.21':true,'A.8.22':true,'A.8.32':true,
};

function isoStatus(id) {
  if (ISO_STATUS[id])  return 'covered';
  if (ISO_PARTIAL[id]) return 'partial';
  return 'uncovered';
}
function isoCompletion(id) {
  if (ISO_STATUS[id])  return Math.floor(80 + Math.random()*20);
  if (ISO_PARTIAL[id]) return Math.floor(30 + Math.random()*49);
  return 0;
}
const _isoComp = {}; // cache completions
ISO_CONTROLS.forEach(c => { _isoComp[c.id] = isoCompletion(c.id); });

// ── Mock linked trainings ─────────────────────────────────────
const ISO_TRAININGS = {
  'A.6.3':  [{ id:'t1', name:'Cybersecurity Essentials', rate:94, cov:'full'  }, { id:'t2', name:'Phishing & Engenharia Social', rate:88, cov:'partial' }],
  'A.5.34': [{ id:'t3', name:'LGPD na Prática', rate:91, cov:'full' }, { id:'t4', name:'GDPR Fundamentos', rate:85, cov:'partial' }],
  'A.5.1':  [{ id:'t5', name:'Código de Ética Empresarial', rate:99, cov:'full' }],
  'A.8.7':  [{ id:'t6', name:'Proteção contra Malware', rate:87, cov:'full' }, { id:'t1', name:'Cybersecurity Essentials', rate:94, cov:'partial' }],
  'A.6.7':  [{ id:'t7', name:'Home Office Seguro', rate:88, cov:'full' }],
  'A.8.5':  [{ id:'t8', name:'Senhas Seguras e MFA', rate:96, cov:'full' }],
  'A.5.7':  [{ id:'t9', name:'Threat Intelligence Awareness', rate:52, cov:'partial' }],
  'A.6.8':  [{ id:'t2', name:'Phishing & Engenharia Social', rate:88, cov:'full' }, { id:'t10', name:'Resposta a Incidentes', rate:65, cov:'partial' }],
};

// ── Mock evidence ─────────────────────────────────────────────
const ISO_EVIDENCE_MOCK = [
  { user:'Ana Lima',        dept:'RH',         training:'LGPD na Prática',          date:'03/06/2025', score:'9.2', cert:'C-001' },
  { user:'Rafael Neto',     dept:'TI',         training:'Cybersecurity Essentials',  date:'01/06/2025', score:'8.7', cert:'C-002' },
  { user:'Juliana Rocha',   dept:'Jurídico',   training:'LGPD na Prática',          date:'30/05/2025', score:'9.6', cert:'C-003' },
  { user:'Beatriz Alves',   dept:'Financeiro', training:'Código de Ética',           date:'28/05/2025', score:'8.1', cert:'C-004' },
  { user:'Marcos Oliveira', dept:'Comercial',  training:'Phishing & Eng. Social',   date:'25/05/2025', score:'7.8', cert:'C-005' },
  { user:'Carla Mendes',    dept:'Operações',  training:'LGPD na Prática',          date:'22/05/2025', score:'8.4', cert:'C-006' },
];

// ── State ─────────────────────────────────────────────────────
let ISO = {
  selected: 'A.6.3',
  search: '',
  filterDomain: 'all',
  filterStatus: 'all',
};

const ISO_DOMAIN_LABELS = {
  org:      { label:'A.5 Organizational Controls', emoji:'🏢', count:37 },
  people:   { label:'A.6 People Controls',         emoji:'👥', count:8  },
  physical: { label:'A.7 Physical Controls',       emoji:'🏭', count:14 },
  tech:     { label:'A.8 Technological Controls',  emoji:'💻', count:34 },
};

const ISO_STATUS_COLORS = {
  covered:   { color:'#22c55e', bg:'rgba(34,197,94,0.12)',  label:'Coberto'    },
  partial:   { color:'#f59e0b', bg:'rgba(245,158,11,0.10)', label:'Parcial'    },
  uncovered: { color:'#ef4444', bg:'rgba(239,68,68,0.10)',  label:'Descoberto' },
};

// ── Computations ──────────────────────────────────────────────
function isoCoveredCount()   { return ISO_CONTROLS.filter(c=>isoStatus(c.id)==='covered').length; }
function isoPartialCount()   { return ISO_CONTROLS.filter(c=>isoStatus(c.id)==='partial').length; }
function isoUncoveredCount() { return ISO_CONTROLS.filter(c=>isoStatus(c.id)==='uncovered').length; }
function isoCoveragePercent(){ return Math.round((isoCoveredCount()/ISO_CONTROLS.length)*100); }

// ══════════════════════════════════════════════════════════════
//  MAIN RENDER
// ══════════════════════════════════════════════════════════════
window.renderPage_iso27001 = function() {
  injectISO27001CSS();
  const covered   = isoCoveredCount();
  const partial   = isoPartialCount();
  const uncovered = isoUncoveredCount();
  const pct       = isoCoveragePercent();

  return `
<div id="iso-module">
  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:18px;">
    <div>
      <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;">🛡 Compliance ISO 27001:2022</h2>
      <p style="color:#6b7280;font-size:0.84rem;margin-top:3px;">Mapeamento de controles · evidências para auditoria · 93 controles (Annex A)</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="iso-btn iso-btn-ghost" onclick="isoOpenAuditExport()">📤 Exportar Auditoria</button>
      <button class="iso-btn iso-btn-primary" onclick="isoOpenLinkTraining(ISO.selected||'A.6.3')">+ Vincular Treinamento</button>
    </div>
  </div>

  <!-- KPI cards -->
  <div class="iso-kpi-grid">
    <div class="iso-kpi">
      <div class="iso-kpi-val" style="color:#94a3b8;">93</div>
      <div class="iso-kpi-lbl">Total de Controles</div>
    </div>
    <div class="iso-kpi">
      <div class="iso-kpi-val" style="color:#22c55e;">${covered}</div>
      <div class="iso-kpi-lbl">🟢 Cobertos</div>
    </div>
    <div class="iso-kpi">
      <div class="iso-kpi-val" style="color:#f59e0b;">${partial}</div>
      <div class="iso-kpi-lbl">🟡 Parciais</div>
    </div>
    <div class="iso-kpi">
      <div class="iso-kpi-val" style="color:#ef4444;">${uncovered}</div>
      <div class="iso-kpi-lbl">🔴 Descobertos</div>
    </div>
  </div>

  <!-- Overall progress -->
  <div style="margin-bottom:18px;">
    <div style="display:flex;justify-content:space-between;font-size:0.78rem;color:#94a3b8;margin-bottom:6px;">
      <span>Cobertura geral dos controles ISO 27001:2022</span>
      <span style="font-weight:800;color:#00d4ff;">${pct}%</span>
    </div>
    <div style="height:8px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;display:flex;">
      <div style="width:${Math.round(covered/93*100)}%;background:#22c55e;transition:width 0.8s;"></div>
      <div style="width:${Math.round(partial/93*100)}%;background:#f59e0b;transition:width 0.8s;"></div>
    </div>
    <div style="display:flex;gap:16px;margin-top:6px;font-size:0.68rem;color:#6b7280;">
      <span>🟢 ${covered} cobertos (${Math.round(covered/93*100)}%)</span>
      <span>🟡 ${partial} parciais (${Math.round(partial/93*100)}%)</span>
      <span>🔴 ${uncovered} descobertos (${Math.round(uncovered/93*100)}%)</span>
    </div>
  </div>

  <!-- Two-column layout -->
  <div class="iso-wrap">
    <!-- Left: control list -->
    <div class="iso-sidebar">
      <!-- Search + filter -->
      <div class="iso-sidebar-hd">
        <input class="iso-input" placeholder="🔍 Buscar por código ou título..." oninput="ISO.search=this.value;isoRefreshList()" style="margin-bottom:7px;">
        <div style="display:flex;gap:6px;">
          <select class="iso-input iso-select" style="font-size:0.75rem;padding:5px 8px;" onchange="ISO.filterDomain=this.value;isoRefreshList()">
            <option value="all">Todos os domínios</option>
            <option value="org">A.5 Organizational</option>
            <option value="people">A.6 People</option>
            <option value="physical">A.7 Physical</option>
            <option value="tech">A.8 Technological</option>
          </select>
          <select class="iso-input iso-select" style="font-size:0.75rem;padding:5px 8px;" onchange="ISO.filterStatus=this.value;isoRefreshList()">
            <option value="all">Todos</option>
            <option value="covered">🟢 Coberto</option>
            <option value="partial">🟡 Parcial</option>
            <option value="uncovered">🔴 Descoberto</option>
          </select>
        </div>
      </div>
      <div class="iso-list" id="iso-control-list">
        ${isoRenderList()}
      </div>
    </div>

    <!-- Right: control detail -->
    <div class="iso-main" id="iso-detail">
      ${isoRenderDetail(ISO.selected || 'A.6.3')}
    </div>
  </div>
  <div id="iso-modal-area"></div>
</div>`;
};

window.initPage_iso27001 = function() {
  setTimeout(() => {
    document.querySelectorAll('.iso-prog-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { el.style.transition='width 0.8s ease'; el.style.width=w; });
    });
  }, 80);
};

// ── Control List ──────────────────────────────────────────────
function isoRenderList() {
  const domains = ['org','people','physical','tech'];
  let html = '';
  domains.forEach(domain => {
    if (ISO.filterDomain !== 'all' && ISO.filterDomain !== domain) return;
    const controls = ISO_CONTROLS.filter(c => {
      if (c.domain !== domain) return false;
      if (ISO.filterStatus !== 'all' && isoStatus(c.id) !== ISO.filterStatus) return false;
      if (ISO.search) {
        const q = ISO.search.toLowerCase();
        if (!c.id.toLowerCase().includes(q) && !c.title.toLowerCase().includes(q)) return false;
      }
      return true;
    });
    if (!controls.length) return;
    const dl = ISO_DOMAIN_LABELS[domain];
    html += `<div class="iso-domain-hd">${dl.emoji} ${dl.label} <span style="color:#4b5563;">(${controls.length})</span></div>`;
    controls.forEach(c => {
      const st = isoStatus(c.id);
      const sc = ISO_STATUS_COLORS[st];
      html += `
        <div class="iso-item${ISO.selected===c.id?' active':''}" onclick="isoSelectControl('${c.id}')">
          <div class="iso-dot" style="background:${sc.color};box-shadow:0 0 5px ${sc.color}66;"></div>
          <span class="iso-item-code">${c.id}</span>
          <span class="iso-item-title">${c.title}</span>
        </div>`;
    });
  });
  return html || '<div style="padding:20px;text-align:center;color:#6b7280;font-size:0.82rem;">Nenhum controle encontrado.</div>';
}

window.isoRefreshList = function() {
  const el = document.getElementById('iso-control-list');
  if (el) el.innerHTML = isoRenderList();
};

window.isoSelectControl = function(id) {
  ISO.selected = id;
  const detail = document.getElementById('iso-detail');
  if (detail) {
    detail.style.opacity = '0';
    setTimeout(() => {
      detail.innerHTML = isoRenderDetail(id);
      detail.style.transition = 'opacity 0.2s';
      detail.style.opacity = '1';
      detail.querySelectorAll('.iso-prog-fill').forEach(el => {
        const w = el.style.width; el.style.width='0';
        requestAnimationFrame(()=>{ el.style.transition='width 0.8s ease'; el.style.width=w; });
      });
    }, 120);
  }
  // Update active state in list
  document.querySelectorAll('.iso-item').forEach(el => el.classList.remove('active'));
  const el = document.querySelector(`.iso-item[onclick*="'${id}'"]`);
  if (el) el.classList.add('active');
};

// ── Control Detail ────────────────────────────────────────────
function isoRenderDetail(id) {
  const ctrl = ISO_CONTROLS.find(c => c.id === id);
  if (!ctrl) return '<div style="padding:40px;text-align:center;color:#6b7280;">Selecione um controle na lista.</div>';

  const st    = isoStatus(id);
  const sc    = ISO_STATUS_COLORS[st];
  const comp  = _isoComp[id];
  const dl    = ISO_DOMAIN_LABELS[ctrl.domain];
  const trains= ISO_TRAININGS[id] || [];
  const evids = ISO_EVIDENCE_MOCK.slice(0, trains.length ? 4 : 0);

  return `
  <!-- Control header -->
  <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:20px;">
    <div style="flex:1;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;flex-wrap:wrap;">
        <span style="font-size:0.70rem;font-weight:800;color:#6b7280;background:rgba(255,255,255,0.04);padding:3px 10px;border-radius:6px;">${dl.emoji} ${dl.label.split(' ').slice(0,2).join(' ')}</span>
        <span style="font-size:1.1rem;font-weight:900;color:#94a3b8;">${ctrl.id}</span>
        <span class="iso-badge" style="background:${sc.bg};color:${sc.color};">● ${sc.label}</span>
      </div>
      <h3 style="font-size:1.05rem;font-weight:800;margin-bottom:8px;">${ctrl.title}</h3>
      <p style="font-size:0.82rem;color:#94a3b8;line-height:1.6;">${ctrl.desc}</p>
    </div>
    <div style="text-align:center;padding:14px 18px;border-radius:12px;background:${sc.bg};border:1px solid ${sc.color}30;flex-shrink:0;">
      <div style="font-size:1.6rem;font-weight:900;color:${sc.color};">${comp}%</div>
      <div style="font-size:0.66rem;color:#6b7280;margin-top:2px;">conclusão</div>
    </div>
  </div>

  <!-- Progress -->
  <div style="margin-bottom:20px;">
    <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:#6b7280;margin-bottom:5px;">
      <span>Taxa de conclusão dos usuários ativos</span>
      <span style="font-weight:700;color:${sc.color};">${comp}% de 340 usuários</span>
    </div>
    <div class="iso-prog"><div class="iso-prog-fill" style="width:${comp}%;background:${sc.color};"></div></div>
  </div>

  <!-- Linked trainings -->
  <div class="iso-section">📚 Treinamentos Vinculados (${trains.length})</div>
  ${trains.length ? trains.map(t=>`
    <div class="iso-training-row">
      <div style="width:36px;height:36px;border-radius:9px;background:rgba(0,212,255,0.10);display:flex;align-items:center;justify-content:center;font-size:1.0rem;flex-shrink:0;">📚</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.86rem;">${t.name}</div>
        <div style="font-size:0.70rem;color:#6b7280;margin-top:2px;">Cobertura: <span style="color:${t.cov==='full'?'#22c55e':'#f59e0b'};font-weight:700;">${t.cov==='full'?'Completa':'Parcial'}</span></div>
      </div>
      <div style="min-width:60px;text-align:right;">
        <div style="font-size:0.86rem;font-weight:800;color:${t.rate>=80?'#22c55e':'#f59e0b'};">${t.rate}%</div>
        <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;margin-top:4px;"><div style="height:100%;width:${t.rate}%;background:${t.rate>=80?'#22c55e':'#f59e0b'};border-radius:2px;"></div></div>
      </div>
      <button class="iso-btn iso-btn-ghost iso-btn-sm" onclick="event.stopPropagation();showToast&&showToast('Desvincular ${t.name}?','info')">🗑</button>
    </div>`).join('')
    : `<div style="padding:16px;text-align:center;border-radius:10px;border:2px dashed rgba(255,255,255,0.08);">
        <div style="font-size:0.84rem;color:#6b7280;margin-bottom:10px;">Nenhum treinamento vinculado a este controle.</div>
        <button class="iso-btn iso-btn-primary iso-btn-sm" onclick="isoOpenLinkTraining('${id}')">+ Vincular Treinamento</button>
       </div>`}

  ${trains.length ? `<button class="iso-btn iso-btn-ghost iso-btn-sm" style="margin-top:8px;" onclick="isoOpenLinkTraining('${id}')">+ Vincular outro treinamento</button>` : ''}

  <!-- Evidence -->
  <div class="iso-section" style="margin-top:22px;">📄 Evidências de Conclusão (${evids.length})</div>
  ${evids.length ? `
  <div style="border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;margin-bottom:10px;">
    <div style="display:grid;grid-template-columns:1fr 100px 130px 60px 80px;gap:8px;padding:9px 12px;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#6b7280;">
      <span>Usuário</span><span>Dept.</span><span>Treinamento</span><span>Nota</span><span>Certificado</span>
    </div>
    ${evids.map(e=>`
    <div class="iso-evidence-row" style="display:grid;grid-template-columns:1fr 100px 130px 60px 80px;gap:8px;">
      <div>
        <div style="font-weight:600;">${e.user}</div>
        <div style="font-size:0.68rem;color:#6b7280;">${e.date}</div>
      </div>
      <span style="color:#94a3b8;font-size:0.76rem;align-self:center;">${e.dept}</span>
      <span style="color:#94a3b8;font-size:0.74rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-self:center;">${e.training}</span>
      <span style="font-weight:700;color:${parseFloat(e.score)>=7?'#22c55e':'#f59e0b'};align-self:center;">${e.score}</span>
      <span style="align-self:center;">
        <button class="iso-btn iso-btn-ghost iso-btn-sm" onclick="showToast&&showToast('Abrindo certificado ${e.cert}','info')" style="font-size:0.68rem;padding:3px 8px;">${e.cert} 🏆</button>
      </span>
    </div>`).join('')}
  </div>
  <button class="iso-btn iso-btn-ghost iso-btn-sm" onclick="isoExportEvidence('${id}')">📤 Exportar evidências deste controle</button>
  ` : `<div style="padding:16px;text-align:center;border-radius:10px;background:rgba(255,255,255,0.02);color:#6b7280;font-size:0.80rem;">
    Nenhuma evidência ainda. Conclua treinamentos vinculados para gerar evidências.
  </div>`}`;
}

// ══════════════════════════════════════════════════════════════
//  MODALS
// ══════════════════════════════════════════════════════════════
window.isoOpenLinkTraining = function(controlId) {
  const ctrl = ISO_CONTROLS.find(c => c.id === controlId);
  const library = [
    'Cybersecurity Essentials','Phishing & Engenharia Social','LGPD na Prática',
    'GDPR Fundamentos','Código de Ética Empresarial','Senhas Seguras e MFA',
    'Home Office Seguro','Anticorrupção & Antissuborno','Resposta a Incidentes',
    'Gestão de Riscos (ISO 31000)','Cloud Security Awareness','CEO Fraud Awareness',
    'Proteção contra Malware','Threat Intelligence Awareness','Zero Trust Essentials',
  ];
  isoShowModal(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <div>
        <div style="font-size:1.0rem;font-weight:800;">🔗 Vincular Treinamento</div>
        <div style="font-size:0.74rem;color:#6b7280;margin-top:2px;">Controle: ${controlId} — ${ctrl?.title||''}</div>
      </div>
      <button class="iso-btn iso-btn-ghost iso-btn-sm" onclick="isoCloseModal()">✕</button>
    </div>
    <input class="iso-input" placeholder="🔍 Buscar na biblioteca..." style="margin-bottom:12px;" oninput="isoFilterLibrary(this.value)">
    <div style="margin-bottom:12px;">
      <label style="font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;display:block;margin-bottom:6px;">Nível de cobertura</label>
      <div style="display:flex;gap:8px;">
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.82rem;">
          <input type="radio" name="iso-cov" value="full" checked style="accent-color:#00d4ff;"> Completa (cobre totalmente o controle)
        </label>
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.82rem;">
          <input type="radio" name="iso-cov" value="partial"> Parcial
        </label>
      </div>
    </div>
    <div id="iso-lib-list" style="display:flex;flex-direction:column;gap:6px;max-height:280px;overflow-y:auto;">
      ${library.map((t,i)=>`
        <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
          <input type="checkbox" value="${t}" style="accent-color:#00d4ff;width:15px;height:15px;flex-shrink:0;">
          <span style="font-size:0.83rem;">📚 ${t}</span>
        </label>`).join('')}
    </div>
    <div style="display:flex;gap:10px;margin-top:16px;">
      <button class="iso-btn iso-btn-ghost" style="flex:1;" onclick="isoCloseModal()">Cancelar</button>
      <button class="iso-btn iso-btn-primary" style="flex:1;" onclick="isoSaveLinkTraining('${controlId}')">🔗 Vincular Selecionados</button>
    </div>
  `);
};

window.isoFilterLibrary = function(q) {
  document.querySelectorAll('#iso-lib-list label').forEach(el => {
    const match = el.textContent.toLowerCase().includes(q.toLowerCase());
    el.style.display = match ? '' : 'none';
  });
};

window.isoSaveLinkTraining = function(controlId) {
  const checked = [...document.querySelectorAll('#iso-lib-list input[type=checkbox]:checked')];
  if (!checked.length) { showToast&&showToast('Selecione ao menos um treinamento','error'); return; }
  const cov = document.querySelector('input[name="iso-cov"]:checked')?.value || 'full';
  checked.forEach(cb => {
    const name = cb.value;
    if (!ISO_TRAININGS[controlId]) ISO_TRAININGS[controlId] = [];
    if (!ISO_TRAININGS[controlId].find(t=>t.name===name)) {
      ISO_TRAININGS[controlId].push({ id:'t'+Date.now(), name, rate: Math.floor(50+Math.random()*50), cov });
    }
    // Update status
    if (!ISO_STATUS[controlId] && !ISO_PARTIAL[controlId]) ISO_PARTIAL[controlId] = true;
  });
  isoCloseModal();
  isoSelectControl(controlId);
  showToast&&showToast(`✅ ${checked.length} treinamento(s) vinculado(s) ao controle ${controlId}`, 'success');
};

window.isoOpenAuditExport = function() {
  isoShowModal(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <div>
        <div style="font-size:1.0rem;font-weight:800;">📤 Exportar Evidências para Auditoria</div>
        <div style="font-size:0.74rem;color:#6b7280;margin-top:2px;">ISO 27001:2022 — Empresa Demo S.A.</div>
      </div>
      <button class="iso-btn iso-btn-ghost iso-btn-sm" onclick="isoCloseModal()">✕</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
      <div><label style="display:block;font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px;">Data Início</label>
        <input type="date" class="iso-input" value="2025-01-01"></div>
      <div><label style="display:block;font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px;">Data Fim</label>
        <input type="date" class="iso-input" value="2025-06-05"></div>
    </div>
    <div style="margin-bottom:12px;">
      <label style="display:block;font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px;">Controles</label>
      <select class="iso-input iso-select">
        <option>Todos os controles (93)</option>
        <option>Apenas cobertos (35)</option>
        <option>Seleção manual...</option>
      </select>
    </div>
    <div style="margin-bottom:12px;">
      <label style="display:block;font-size:0.70rem;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px;">Departamentos</label>
      <select class="iso-input iso-select">
        <option>Todos os departamentos</option>
        <option>RH</option><option>TI</option><option>Jurídico</option>
        <option>Financeiro</option><option>Comercial</option><option>Operações</option>
      </select>
    </div>
    <!-- Preview -->
    <div style="border:1px solid rgba(255,255,255,0.07);border-radius:10px;overflow:hidden;margin-bottom:14px;">
      <div style="padding:10px 14px;background:rgba(255,255,255,0.02);border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.72rem;font-weight:700;color:#6b7280;">Preview — 6 evidências encontradas</div>
      ${ISO_EVIDENCE_MOCK.map(e=>`
        <div style="display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid rgba(255,255,255,0.04);font-size:0.76rem;">
          <span style="color:#94a3b8;min-width:90px;">${e.user}</span>
          <span style="color:#6b7280;min-width:90px;">${e.training.substring(0,18)}...</span>
          <span style="color:#6b7280;min-width:80px;">${e.date}</span>
          <span style="font-weight:700;color:#22c55e;">${e.score}</span>
          <span style="margin-left:auto;color:#8b5cf6;font-size:0.68rem;">${e.cert}</span>
        </div>`).join('')}
    </div>
    <!-- Integrity note -->
    <div style="padding:10px 12px;border-radius:8px;background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.15);font-size:0.72rem;color:#94a3b8;margin-bottom:14px;">
      🔒 O relatório incluirá hash de integridade SHA-256, nome da empresa, CNPJ, período e data de geração — conforme requisitos de auditoria ISO 27001.
    </div>
    <div style="display:flex;gap:10px;">
      <button class="iso-btn iso-btn-ghost" style="flex:1;" onclick="isoCloseModal()">Cancelar</button>
      <button class="iso-btn iso-btn-ghost" style="flex:1;" onclick="isoExportCSV()">📊 Exportar CSV</button>
      <button class="iso-btn iso-btn-primary" style="flex:1;" onclick="isoExportPDF()">📄 Exportar PDF</button>
    </div>
  `);
};

window.isoExportEvidence = function(controlId) {
  const ctrl = ISO_CONTROLS.find(c=>c.id===controlId);
  showToast&&showToast(`Exportando evidências do controle ${controlId}...`, 'info');
  setTimeout(()=>showToast&&showToast('✅ CSV exportado: evidências_'+controlId+'.csv', 'success'), 1200);
};

window.isoExportCSV = function() {
  isoCloseModal();
  showToast&&showToast('Gerando CSV de auditoria...', 'info');
  setTimeout(()=>showToast&&showToast('✅ CSV exportado: iso27001_evidencias_2025.csv', 'success'), 1000);
};

window.isoExportPDF = function() {
  isoCloseModal();
  showToast&&showToast('Gerando relatório PDF de auditoria...', 'info');
  setTimeout(()=>showToast&&showToast('✅ PDF exportado: ISO27001_Auditoria_2025_hash:a8f2b4.pdf', 'success'), 2000);
};

function isoShowModal(html) {
  isoCloseModal();
  const ov = document.createElement('div'); ov.className='iso-overlay'; ov.id='iso-overlay';
  ov.addEventListener('click', e => { if(e.target===ov) isoCloseModal(); });
  const m = document.createElement('div'); m.className='iso-modal'; m.innerHTML=html;
  ov.appendChild(m); document.body.appendChild(ov);
}
window.isoCloseModal = function() { const el=document.getElementById('iso-overlay'); if(el) el.remove(); };
document.addEventListener('keydown', e => { if(e.key==='Escape') isoCloseModal(); });
window.ISO_CONTROLS=ISO_CONTROLS;window.ISO_STATUS=ISO_STATUS;window.ISO_PARTIAL=ISO_PARTIAL;
