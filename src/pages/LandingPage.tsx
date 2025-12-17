import { Link } from "react-router-dom";

const LandingPage = () => {
  const whatsappLink = "https://chat.whatsapp.com/GJ5H91Kc2wW0Gnb8YrZIHW";

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#e6edf6]" style={{
      background: `radial-gradient(1200px 700px at 10% 10%, rgba(38,208,124,.15), transparent 55%),
                   radial-gradient(900px 600px at 80% 0%, rgba(255,204,102,.10), transparent 55%),
                   #0b0f14`
    }}>
      <div className="max-w-[1080px] mx-auto px-4 py-7">
        {/* Topbar */}
        {/* Desktop Header */}
        <header className="hidden sm:flex items-center justify-between gap-3 px-4 py-3.5 border border-white/[0.08] rounded-full bg-[#111826]/65 backdrop-blur-xl">
          <div className="flex flex-col gap-0.5 font-bold tracking-wide">
            <span>UFUTURO LICENCIADO</span>
            <small className="text-[#a7b4c8] font-semibold text-sm">Curso prático • Monografia em até 30 dias</small>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              to="/login"
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-transparent text-[#e6edf6] font-extrabold border border-white/[0.08] hover:bg-white/5 transition-all whitespace-nowrap"
            >
              Já sou estudante
            </Link>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#26d07c] text-[#042012] font-extrabold border border-black/25 hover:bg-[#21b86e] active:translate-y-px transition-all whitespace-nowrap"
            >
              Entrar na Lista de Espera
            </a>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="sm:hidden border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl p-4">
          <div className="flex flex-col gap-0.5 font-bold tracking-wide mb-3">
            <span>UFUTURO LICENCIADO</span>
            <small className="text-[#a7b4c8] font-semibold text-sm">Curso prático • Monografia em até 30 dias</small>
          </div>
          <div className="flex flex-col gap-2">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#26d07c] text-[#042012] font-extrabold border border-black/25 hover:bg-[#21b86e] active:translate-y-px transition-all text-center"
            >
              Entrar na Lista de Espera
            </a>
            <Link 
              to="/login"
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-transparent text-[#e6edf6] font-extrabold border border-white/[0.08] hover:bg-white/5 transition-all text-center"
            >
              Já sou estudante
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 items-stretch">
          {/* Main Panel */}
          <div className="border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] p-6">
            <h1 className="text-[clamp(28px,3.4vw,44px)] leading-[1.15] tracking-tight font-bold mb-2.5">
              Para de adiar a tua Monografia.<br/>
              Conclui em até 30 dias com um método simples e prático.
            </h1>
            
            <p className="text-[#a7b4c8] mb-4">
              Um curso criado para estudantes em Moçambique que precisam de direcção clara, sem aulas longas:
              conteúdo resumido, checklist executável e prompts de IA prontos — com foco em originalidade.
            </p>

            <ul className="space-y-2.5 mb-4">
              {[
                "Método passo a passo: do tema à entrega, sem confusão.",
                "Checklist clara em cada etapa: sabes exactamente o que produzir.",
                "Prompts de IA prontos para aplicar sem comprometer a tua autoria.",
                "Ideal para quem trabalha, estuda e tem pouco tempo."
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start p-2.5 px-3 border border-white/[0.08] rounded-[14px] bg-black/[0.18]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#26d07c] flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2.5 flex-wrap items-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#26d07c] text-[#042012] font-extrabold border border-black/25 hover:bg-[#21b86e] active:translate-y-px transition-all"
              >
                Entrar na Lista de Espera no WhatsApp
              </a>
              <a 
                href="#conteudo"
                className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-transparent text-[#e6edf6] font-extrabold border border-white/[0.08] hover:bg-white/5 transition-all"
              >
                Ver o que vou aprender
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-4 text-[#a7b4c8] text-sm">
              <span className="border border-white/[0.08] rounded-full px-2.5 py-2 bg-black/[0.18]">✅ Conteúdo objectivo</span>
              <span className="border border-white/[0.08] rounded-full px-2.5 py-2 bg-black/[0.18]">✅ Execução guiada</span>
              <span className="border border-white/[0.08] rounded-full px-2.5 py-2 bg-black/[0.18]">✅ Originalidade e segurança</span>
            </div>

            <p className="mt-2.5 text-[#a7b4c8] text-sm">📌 Prioridade no lançamento • vagas limitadas</p>
          </div>

          {/* Side Panel */}
          <div className="border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] p-6">
            <h2 className="text-lg tracking-tight font-bold mb-2.5">Se identificas-te com isto, estás no lugar certo</h2>
            
            <ul className="space-y-2.5 mb-4">
              {[
                "Não sabes por onde começar ou como continuar a monografia.",
                "Já começaste, mas travas na introdução, referencial ou metodologia.",
                "Tens pouco tempo e precisas de um plano claro com tarefas directas.",
                "Queres usar IA com responsabilidade, sem cair em plágio."
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start p-2.5 px-3 border border-white/[0.08] rounded-[14px] bg-black/[0.18]">
                  <span className="w-[18px] h-[18px] rounded-md bg-[#26d07c]/[0.18] border border-[#26d07c]/45 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#26d07c] text-xs font-black">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/[0.08] my-4" />

            <h3 className="font-bold mb-2">A sequência do curso</h3>
            <ul className="space-y-2.5">
              {[
                { num: 1, text: "Conteúdo super resumido — só o essencial." },
                { num: 2, text: "Checklist clara — o que entregar, ponto por ponto." },
                { num: 3, text: "Prompts de IA prontos — copiar, adaptar e aplicar." }
              ].map((item) => (
                <li key={item.num} className="flex gap-2.5 items-start p-2.5 px-3 border border-white/[0.08] rounded-[14px] bg-black/[0.18]">
                  <span className="w-[18px] h-[18px] rounded-md bg-[#26d07c]/[0.18] border border-[#26d07c]/45 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#26d07c] text-xs font-black">{item.num}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results Section */}
        <section className="mt-4 border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] p-6">
          <h2 className="text-xl tracking-tight font-bold mb-2.5">No final do curso, vais ter a tua monografia estruturada e pronta para entrega</h2>
          <div className="space-y-1.5 text-[#a7b4c8]">
            <p>✅ Tema aprovado e alinhado ao teu contexto.</p>
            <p>✅ Problema de pesquisa claro e objectivos bem definidos.</p>
            <p>✅ Justificativa consistente e referencial teórico organizado.</p>
            <p>✅ Metodologia clara, resultados/discussões coerentes e documento final pronto para submissão.</p>
          </div>
          <p className="mt-4 text-[#a7b4c8]">Tudo construído por etapas, com orientação directa para executar sem bloqueio.</p>
        </section>

        {/* Course Content */}
        <section id="conteudo" className="mt-4 border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] p-6">
          <h2 className="text-xl tracking-tight font-bold mb-4">O que vais aprender (visão rápida)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <h3 className="font-bold mb-2">Primeiros Passos</h3>
              <ul className="pl-4 text-[#a7b4c8] space-y-1.5 list-disc">
                <li>Modelos para baixar</li>
                <li>Por onde começar (Projecto e Monografia)</li>
                <li>Cronograma de aprovação (30 dias)</li>
                <li>Tema, problema, hipóteses, objectivos</li>
                <li>Justificativa perfeita</li>
                <li>Pesquisa de materiais</li>
              </ul>
            </div>
            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <h3 className="font-bold mb-2">Elementos Textuais</h3>
              <ul className="pl-4 text-[#a7b4c8] space-y-1.5 list-disc">
                <li>Estrutura do trabalho académico</li>
                <li>Introdução bem construída</li>
                <li>Referencial teórico e divisão de capítulos</li>
                <li>Metodologia (explicada de forma simples)</li>
                <li>Resultados, discussões e considerações finais</li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-white/[0.08] my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <h3 className="font-bold mb-2">Escrita Científica na Prática</h3>
              <ul className="pl-4 text-[#a7b4c8] space-y-1.5 list-disc">
                <li>Fundamentos essenciais da escrita científica</li>
                <li>Primeiros parágrafos (sem enrolação)</li>
                <li>Uso correcto da IA no referencial teórico</li>
                <li>Como fazer citação correctamente</li>
              </ul>
            </div>
            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <h3 className="font-bold mb-2">Plágio e Originalidade + Finalização</h3>
              <ul className="pl-4 text-[#a7b4c8] space-y-1.5 list-disc">
                <li>Identificar textos problemáticos</li>
                <li>Humanizar e validar com segurança</li>
                <li>Verificação e prevenção de plágio</li>
                <li>Resumo, orçamento e referências bibliográficas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pacing Section */}
        <section className="mt-4 border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] p-6">
          <h2 className="text-xl tracking-tight font-bold mb-2.5">30 dias ou 7 dias — tu escolhes o ritmo</h2>
          <p className="text-[#a7b4c8] mb-4">
            O método adapta-se à tua realidade:
            podes seguir o cronograma completo (até 30 dias) ou fazer um modo intensivo (1 semana), se tiveres mais disponibilidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <p className="font-bold">Até 30 dias</p>
              <p className="text-[#a7b4c8]">Seguinte o cronograma, com consistência e clareza.</p>
            </div>
            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <p className="font-bold">1 semana (intensivo)</p>
              <p className="text-[#a7b4c8]">Foco total em executar e fechar o documento final.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mt-4 border border-white/[0.08] rounded-[18px] bg-[#111826]/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] p-6">
          <h2 className="text-xl tracking-tight font-bold mb-4">Investimento</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4 items-stretch">
            <div className="border border-[#26d07c]/35 bg-[#26d07c]/[0.08] rounded-[18px] p-4">
              {/* Scarcity Trigger */}
              <div className="bg-[#ff4d4d]/15 border border-[#ff4d4d]/40 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#ff4d4d] rounded-full animate-pulse" />
                  <span className="text-[#ff4d4d] font-bold text-sm">⚠️ APENAS 23 VAGAS RESTANTES</span>
                </div>
                <p className="text-[#a7b4c8] text-xs">O preço volta para 8.000 MT quando as vagas acabarem.</p>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-4">
                <span className="inline-flex px-2.5 py-1.5 rounded-full border border-white/[0.08] bg-black/[0.18] text-xs text-[#a7b4c8] font-extrabold">🔥 Lançamento</span>
                <span className="inline-flex px-2.5 py-1.5 rounded-full border border-[#ff4d4d]/40 bg-[#ff4d4d]/10 text-xs text-[#ff4d4d] font-extrabold animate-pulse">⏰ Oferta termina em breve</span>
              </div>

              <div className="h-px bg-white/[0.08] my-4" />

              <div className="flex flex-wrap gap-2.5 items-baseline">
                <span className="text-white/55 font-extrabold line-through">8.000 MT</span>
                <span className="text-[34px] font-black tracking-tight">3.499 MT</span>
              </div>
              
              <p className="text-[#a7b4c8] my-4">
                O valor de lançamento é exclusivo para quem está na lista de espera.
                Entra no WhatsApp para receber prioridade e informações completas do lançamento.
              </p>

              <div className="flex gap-2.5 flex-wrap">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#26d07c] text-[#042012] font-extrabold border border-black/25 hover:bg-[#21b86e] active:translate-y-px transition-all"
                >
                  Garantir lugar na Lista de Espera
                </a>
                <a 
                  href="#condicoes"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-transparent text-[#e6edf6] font-extrabold border border-white/[0.08] hover:bg-white/5 transition-all"
                >
                  Ver condições
                </a>
              </div>
            </div>

            <div className="border border-white/[0.08] rounded-[18px] bg-black/[0.18] p-4">
              <h3 className="font-bold mb-2">O que está incluído</h3>
              <ul className="space-y-2 text-[#a7b4c8] mb-4">
                <li>✅ Acesso completo ao curso</li>
                <li>✅ Checklists por etapa</li>
                <li>✅ Prompts de IA prontos para usar</li>
                <li>✅ Modelos editáveis para inspiração</li>
                <li>✅ Acesso pela plataforma</li>
              </ul>

              <div className="h-px bg-white/[0.08] my-4" />

              <h3 id="condicoes" className="font-bold mb-2">Política de devolução</h3>
              <p className="text-[#a7b4c8] text-sm">
                Caso o estudante prove que concluiu todas as etapas exigidas, seguiu o cronograma e não conseguiu finalizar a monografia,
                o valor do curso poderá ser reavaliado conforme a política interna de devolução.
              </p>
              <p className="text-[#a7b4c8] text-sm mt-2">Os detalhes completos são apresentados no momento do acesso.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-4 border border-[#ffcc66]/35 bg-[#ffcc66]/10 rounded-[18px] p-6">
          <h2 className="text-xl tracking-tight font-bold mb-2.5">Vais continuar a adiar ou vais avançar agora?</h2>
          <p className="text-[#a7b4c8] mb-4">
            Entra na lista de espera no WhatsApp e recebe prioridade no lançamento, informações completas e acesso ao preço promocional.
          </p>
          <div className="flex gap-2.5 flex-wrap mb-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#26d07c] text-[#042012] font-extrabold border border-black/25 hover:bg-[#21b86e] active:translate-y-px transition-all"
            >
              Entrar na Lista de Espera no WhatsApp
            </a>
            <a 
              href="#conteudo"
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-transparent text-[#e6edf6] font-extrabold border border-white/[0.08] hover:bg-white/5 transition-all"
            >
              Ver benefícios
            </a>
          </div>
          <p className="text-[#a7b4c8] text-sm">📌 Acesso controlado • 📌 Conteúdo objectivo • 📌 Execução guiada</p>
        </section>

        {/* Footer */}
        <footer className="mt-6 pt-4 border-t border-white/[0.08] text-white/55 text-sm flex justify-between gap-2.5 flex-wrap">
          <span>© 2025 UFUTURO LICENCIADO</span>
          <div className="flex gap-4">
            <a href="#investimento" className="text-white/75 hover:underline">Preço</a>
            <a href="#conteudo" className="text-white/75 hover:underline">Conteúdo</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/75 hover:underline">Lista de Espera (WhatsApp)</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
