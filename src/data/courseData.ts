// ============= TYPES =============

export type PDFSection = {
  heading: string;
  body: string;
};

export interface Lesson {
  id: string;
  title: string;
  shortDescription: string;
  lessonBody: string;
  videoScript: string;
  pdfTitle: string;
  pdfSections: PDFSection[];
  iaPrompts: string[];
  exercise: string;
  checklist: string[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface OnboardingScreen {
  id: string;
  title: string;
  body: string;
  videoScript: string;
  pdfTitle: string;
  pdfSections: PDFSection[];
}

// ============= ONBOARDING =============

export const onboardingScreens: OnboardingScreen[] = [
  {
    id: "onb01",
    title: "Bem-vindo ao UFUTURO Licenciado",
    body: `Bem-vindo ao UFUTURO Licenciado.

Este curso foi criado para ajudar estudantes de Moçambique a planearem, escreverem e finalizarem a sua monografia em até 30 dias, mantendo sempre a originalidade e o rigor académico.

Ao longo do percurso, vais encontrar:
• Vídeo-aulas explicativas;
• PDFs de apoio com exemplos universais;
• Modelos de inspiração para estruturas e formatação;
• Prompts para utilizar a inteligência artificial de forma ética;
• Exercícios práticos e checklists para acompanhar o teu progresso.

Clica em continuar para conhecer como o curso funciona e como podes adaptar o plano à tua realidade.`,
    videoScript: `Olá, estudante. Seja bem-vindo ao UFUTURO Licenciado.

Este curso foi pensado para te acompanhar passo a passo na construção da tua monografia, desde a escolha do tema até à formatação final para entrega. Aqui vais encontrar explicações claras, materiais de apoio e estratégias para usares a inteligência artificial de forma ética e responsável.

O objetivo é simplificar o caminho, sem atalhos perigosos e sem plágio. Fica tranquilo: não precisas saber tudo agora. Vamos construir juntos, uma etapa de cada vez.

Quando estiveres pronto, avança para a próxima tela e conhece como o curso está organizado.`,
    pdfTitle: "UFUTURO Licenciado – Boas-vindas",
    pdfSections: [
      {
        heading: "Sobre o Curso",
        body: `O UFUTURO Licenciado é um programa prático de 30 dias para ajudar estudantes a elaborar uma monografia completa, ética e alinhada às exigências académicas. O foco é tornar o processo mais claro e menos assustador, sem perder a qualidade científica do trabalho.`,
      },
      {
        heading: "O que Vais Encontrar",
        body: `No curso, terás acesso a vídeo-aulas, PDFs explicativos, modelos de inspiração, prompts para utilizar IA com segurança e um painel para acompanhar o progresso. Tudo foi organizado em módulos que seguem a mesma lógica de um trabalho científico real.`,
      },
      {
        heading: "Como Tirar o Máximo Proveito",
        body: `Reserva blocos de tempo fixos para estudar, utiliza os checklists para acompanhar as tarefas concluídas e guarda os PDFs em pastas organizadas. Sempre que possível, aplica imediatamente na tua monografia o que aprenderes em cada aula.`,
      },
    ],
  },
  {
    id: "onb02",
    title: "Como Funciona o Curso",
    body: `O curso está dividido em módulos que acompanham a ordem natural da construção de uma monografia:

• Primeiros Passos – planeamento, tema, problema, objetivos, justificativa e pesquisa de materiais;
• Elementos Textuais – organização dos capítulos e escrita das partes principais;
• Escrita Científica na Prática – técnicas de redação académica;
• Plágio e Originalidade – uso responsável da IA e verificação de plágio;
• Finalização e Entrega – resumo, orçamento quando for necessário, referências e ajustes finais.

Podes seguir o plano completo de 30 dias ou utilizar o modo intensivo de 7 dias, reunindo mais de uma etapa no mesmo dia.`,
    videoScript: `Neste curso, cada módulo acompanha uma etapa real da construção de uma monografia.

Primeiro, vamos organizar a tua ideia: tema, problema, objetivos, justificativa e materiais de pesquisa. Depois, entramos na estrutura dos capítulos, na escrita científica propriamente dita e, mais à frente, tratamos de plágio, resumo, orçamento e referências.

Podes seguir o plano de 30 dias, com tarefas mais distribuídas, ou o modo intensivo de 7 dias, concentrando mais atividades em menos tempo. A decisão é tua. O importante é avançares com consistência e consciência do que estás a fazer em cada etapa.`,
    pdfTitle: "Como Funciona o Curso – Mapa Geral",
    pdfSections: [
      {
        heading: "Módulos do Curso",
        body: `O curso está dividido em cinco grandes áreas de conteúdo e uma área para avaliações dos estudantes. Cada módulo contém aulas com vídeo, PDF e um modelo de inspiração indicado pela autora.`,
      },
      {
        heading: "Plano de 30 Dias vs Plano de 7 Dias",
        body: `No plano de 30 dias, sugerimos tarefas menores por dia, com foco na leitura, organização e escrita gradual. No plano de 7 dias, as mesmas tarefas são agrupadas, exigindo mais tempo diário. Ambos podem ser adaptados à tua rotina, desde que mantenhas uma ordem lógica de execução.`,
      },
    ],
  },
  {
    id: "onb03",
    title: "Uso de IA com Ética",
    body: `A inteligência artificial pode facilitar a compreensão de textos, ajudar a organizar ideias e sugerir estruturas, mas não deve substituir o teu pensamento nem a tua responsabilidade académica.

Neste curso, vais aprender a:

• Utilizar IA para resumir textos e gerar variações de redação;
• Reescrever parágrafos com mais clareza, sem copiar;
• Criar prompts que respeitem a tua autoria;
• Verificar plágio antes de entregar o trabalho.

O objetivo é que a IA seja uma ferramenta de apoio, não uma fonte de cópia.`,
    videoScript: `A IA é uma grande aliada, mas precisa de limites claros.

Neste curso, vais utilizar a inteligência artificial para resumir textos, reorganizar ideias e melhorar a clareza da escrita, mas sempre com revisão crítica. Também vais aprender a verificar plágio e a garantir que o texto final represente a tua própria voz.

Sempre que usares IA, pergunta-te: eu conseguiria explicar este conteúdo com as minhas próprias palavras? Se a resposta for não, ainda é cedo para colocar o trecho no teu trabalho. Vamos cuidar da tua credibilidade académica.`,
    pdfTitle: "Uso de IA com Ética",
    pdfSections: [
      {
        heading: "Boas Práticas",
        body: `• Usa IA para esclarecer dúvidas, não para entregar o texto pronto;
• Confirma autores, datas e referências em fontes reais;
• Reescreve respostas com a tua própria forma de pensar;
• Verifica plágio antes de entregar o documento final.`,
      },
      {
        heading: "O que Evitar",
        body: `• Copiar e colar textos gerados por IA sem revisão;
• Inventar autores ou referências;
• Pedir que a IA escreva a monografia inteira;
• Utilizar o mesmo texto que outros estudantes usam.`,
      },
    ],
  },
  {
    id: "onb04",
    title: "Ferramentas do Curso",
    body: `Durante o curso, vais trabalhar com:

• Vídeo-aulas curtas para orientar o estudo;
• PDFs com explicações e exemplos universais;
• Espaços para anexar modelos de inspiração;
• Prompts para usar IA com segurança;
• Um painel para deixares a tua avaliação sobre o curso.

Explora cada recurso com calma e utiliza-os como suporte para construir um trabalho sólido e bem estruturado.`,
    videoScript: `Para facilitar o teu percurso, organizámos o curso em diferentes tipos de recursos.

As vídeo-aulas servem para te introduzir ao tema, os PDFs aprofundam os conceitos e os modelos de inspiração mostram possibilidades de estrutura. Terás ainda prompts para trabalhar com IA e um espaço para deixar o teu feedback.

Tudo está aqui para tornar o processo mais leve e transparente. Aproveita cada ferramenta e adapta à realidade da tua instituição e do teu curso.`,
    pdfTitle: "Ferramentas do Curso",
    pdfSections: [
      {
        heading: "Vídeo-aulas",
        body: `As vídeo-aulas apresentam os conceitos principais de cada etapa, com exemplos e orientações práticas, sempre com foco na aplicação imediata na tua monografia.`,
      },
      {
        heading: "PDFs de Apoio",
        body: `Cada aula possui um PDF com explicações detalhadas, passos práticos, exemplos e um exercício. Estes documentos servem como material de consulta rápida durante a escrita.`,
      },
      {
        heading: "Modelos de Inspiração",
        body: `Os modelos servem apenas como referência de estrutura e formatação. O conteúdo textual deve ser sempre produzido por ti, com base nas leituras e na realidade do teu tema de pesquisa.`,
      },
    ],
  },
];

// ============= MODULES =============

export const modules: Module[] = [
  {
    id: "modulo-1",
    number: 1,
    title: "Primeiros Passos",
    description: "Neste módulo, o estudante organiza a base do trabalho: modelos de referência, escolha do tema, problema de pesquisa, hipóteses, objetivos, justificativa e primeiras fontes de estudo. É a fase de planeamento que evita retrabalho no futuro.",
    icon: "🚀",
    color: "from-amber-500 to-orange-500",
    lessons: [
      {
        id: "pp01",
        title: "Modelos de TCC para Baixar",
        shortDescription: "Compreender como utilizar modelos apenas como referência de estrutura, sem copiar conteúdo.",
        lessonBody: `Modelos de trabalhos académicos podem ser muito úteis para visualizar a estrutura de um projeto ou de uma monografia pronta. No entanto, é fundamental entender que eles são apenas referências de organização e formatação.

Nesta aula, o foco é aprender:
• O que observar em um bom modelo;
• O que nunca deve ser copiado;
• Como adaptar uma estrutura à realidade da tua instituição.

Sempre que analisares um modelo, observa:
1. Como o trabalho está organizado em capítulos;
2. Como são apresentados problema, objetivos, justificativa e metodologia;
3. Como o texto é formatado (títulos, subtítulos, espaçamento, margens).

Utiliza os modelos para te inspirares na forma, mas produz sempre o teu próprio conteúdo.`,
        videoScript: `Olá, estudante. Nesta primeira aula de Primeiros Passos, vamos falar sobre modelos de TCC.

Modelos são ótimos para enxergar a estrutura de um trabalho académico: onde entra a introdução, como aparecem os objetivos, como os capítulos são divididos. Mas é importante lembrar que o texto de outra pessoa não pode ser simplesmente copiado.

O que queremos é que uses os modelos para observar formatação, organização de capítulos e forma de apresentação, e depois construas a tua própria versão, adequada ao teu tema e às normas da tua instituição. Vê os modelos como inspiração, não como atalho.`,
        pdfTitle: "Aula PP01 – Como Usar Modelos de TCC",
        pdfSections: [
          {
            heading: "Para que Servem os Modelos",
            body: `Os modelos ajudam a visualizar como um trabalho completo é organizado. Eles oferecem uma visão prática da sequência de elementos textuais e facilitam a compreensão do que será exigido na tua monografia.`,
          },
          {
            heading: "O que Observar",
            body: `• Estrutura dos capítulos;
• Forma de apresentar problema, objetivos e justificativa;
• Distribuição de tabelas e figuras, quando houver;
• Formatação de títulos, subtítulos e citações.`,
          },
          {
            heading: "Cuidados Necessários",
            body: `Nunca copies textos dos modelos. Adapta apenas a estrutura e, se necessário, a forma de apresentar seções. O conteúdo deve ser sempre fruto da tua pesquisa e da tua escrita.`,
          },
        ],
        iaPrompts: [
          "Explique, em tópicos, quais elementos costumam compor uma monografia na área de [tua área], considerando a realidade de Moçambique.",
          "Liste boas práticas para analisar modelos de TCC sem copiar o conteúdo, apenas observando estrutura e formatação.",
          "Sugira uma lista de perguntas que eu, como estudante, devo fazer ao analisar um modelo de monografia."
        ],
        exercise: `Escolhe um modelo de monografia que tenhas acesso. Em seguida, responde por escrito:

1. Quais são os capítulos principais do modelo?
2. Como o autor apresenta o problema de pesquisa?
3. O que achaste mais claro na organização do modelo?
4. O que farias diferente no teu próprio trabalho?

Guarda as respostas no teu caderno de projeto.`,
        checklist: [
          "Analisei pelo menos um modelo de TCC.",
          "Identifiquei os principais capítulos do modelo.",
          "Entendi que não posso copiar o texto do modelo.",
          "Registei o que quero aproveitar apenas em termos de estrutura."
        ],
      },
      {
        id: "pp02",
        title: "Por onde começar? Projeto de TCC",
        shortDescription: "Compreender o que é o projeto de TCC e como ele guia toda a monografia.",
        lessonBody: `O projeto de TCC é o documento que planeia a tua pesquisa antes de a colocares em prática. Ele apresenta o que vais estudar, por que esse tema é importante, o que pretendes alcançar e como pretendes realizar o estudo.

Em geral, um projeto de TCC inclui:
• Tema e delimitação;
• Problema de pesquisa;
• Objetivo geral e objetivos específicos;
• Justificativa;
• Metodologia;
• Cronograma e, em alguns casos, orçamento.

Pensar bem o projeto é garantir menos dúvidas na hora da escrita da monografia. É como desenhar um mapa antes de iniciar uma viagem.`,
        videoScript: `Nesta aula, vamos responder à pergunta: por onde começar o TCC?

A resposta é: pelo projeto. O projeto é o planeamento da tua pesquisa. Nele, vais decidir qual é o tema, qual é o problema que queres investigar, quais são os objetivos, por que essa pesquisa é importante e como pretendes realizá-la.

Quando o projeto está bem definido, a monografia torna-se muito mais simples, porque deixas de escrever às cegas. Vais seguir um plano já organizado. Vamos, então, aprender a estruturar esse projeto com clareza.`,
        pdfTitle: "Aula PP02 – Por onde Começar? Projeto de TCC",
        pdfSections: [
          {
            heading: "Função do Projeto de TCC",
            body: `O projeto serve como guia para todas as etapas seguintes. Ele alinha as expectativas entre estudante, orientador e instituição, mostrando o que será estudado e de que forma.`,
          },
          {
            heading: "Componentes Básicos",
            body: `• Tema e delimitação;
• Problema de pesquisa;
• Objetivos geral e específicos;
• Justificativa;
• Metodologia;
• Cronograma;
• Orçamento, quando solicitado.`,
          },
          {
            heading: "Vantagens de um Projeto Bem Feito",
            body: `Um projeto claro evita retrabalho, facilita a escrita da introdução e da metodologia e ajuda o estudante a manter o foco durante a coleta e análise de dados.`,
          },
        ],
        iaPrompts: [
          "Ajude-me a listar, em tópicos, os componentes principais de um projeto de TCC na área de [tua área].",
          "Sugira perguntas que posso responder para definir melhor o meu projeto de TCC.",
          "Com base no seguinte tema [descreve o teu tema], sugira uma estrutura de tópicos para o meu projeto de TCC."
        ],
        exercise: `Em uma folha ou documento, rascunha o teu projeto respondendo de forma simples:

1. Qual é o tema geral do teu TCC?
2. Qual é a realidade ou contexto em que esse tema se insere?
3. Por que consideras este tema importante?

Não te preocupes em escrever perfeito nesta etapa. O objetivo é tirar as ideias da cabeça e colocá-las no papel.`,
        checklist: [
          "Entendi a função do projeto de TCC.",
          "Listei um tema geral para o meu TCC.",
          "Registei um rascunho sobre o contexto do meu tema.",
          "Tenho clareza de que o projeto será o meu mapa para a monografia."
        ],
      },
      {
        id: "pp03",
        title: "Por onde começar? Monografia",
        shortDescription: "Perceber a diferença entre projeto e monografia e visualizar a estrutura final do trabalho.",
        lessonBody: `A monografia é o resultado final da tua pesquisa, apresentada em forma de texto académico estruturado. Enquanto o projeto é o planeamento, a monografia é a execução concluída.

Em geral, a monografia inclui:
• Elementos pré-textuais (capa, folha de rosto, resumo, sumário);
• Elementos textuais (introdução, desenvolvimento, conclusão);
• Elementos pós-textuais (referências, anexos, apêndices, quando houver).

Ao começares a monografia, é útil ter em mãos:
• O projeto aprovado;
• Um modelo de estrutura exigida pela tua instituição;
• As principais fontes já selecionadas.

Nesta aula, o objetivo é que visualizes como o projeto se transforma em capítulo e como cada parte do trabalho se conecta.`,
        videoScript: `Agora que já sabes o que é o projeto, precisamos olhar para o produto final: a monografia.

Enquanto o projeto descreve o que pretendes fazer, a monografia é o resultado do que já fizeste. Ela apresenta a introdução, o desenvolvimento com os capítulos teóricos e metodológicos, os resultados, a discussão e as considerações finais, além das referências.

O importante aqui é perceber que muitos elementos do projeto migram para a monografia com ajustes: o problema, os objetivos, a justificativa e a metodologia reaparecem com maior maturidade. Nesta aula, vamos ligar esses pontos para que consigas enxergar o todo.`,
        pdfTitle: "Aula PP03 – Da Ideia à Monografia",
        pdfSections: [
          {
            heading: "Projeto x Monografia",
            body: `O projeto descreve o que será feito; a monografia apresenta o que foi feito. Ambos estão ligados, mas cumprem funções distintas no percurso académico.`,
          },
          {
            heading: "Elementos da Monografia",
            body: `• Pré-textuais: capa, folha de rosto, resumo, sumário;
• Textuais: introdução, capítulos de desenvolvimento, considerações finais;
• Pós-textuais: referências, anexos, apêndices.`,
          },
          {
            heading: "Ligação entre Projeto e Monografia",
            body: `Problema, objetivos, justificativa e metodologia nascem no projeto e retornam mais desenvolvidos na monografia, mantendo a coerência do trabalho.`,
          },
        ],
        iaPrompts: [
          "Explique, de forma resumida, a diferença entre projeto de TCC e monografia.",
          "Com base no meu tema [descreve o teu tema], sugira um esboço de capítulos para a monografia.",
          "Liste os elementos pré-textuais, textuais e pós-textuais que uma monografia normalmente possui."
        ],
        exercise: `Desenha um quadro em duas colunas:

Na coluna 1, escreve: Projeto.  
Na coluna 2, escreve: Monografia.

Depois, preenche cada coluna com o que pertence a cada tipo de documento. Ao final, marca com uma cor os elementos que aparecem nos dois (problema, objetivos, justificativa, metodologia).`,
        checklist: [
          "Consigo explicar a diferença entre projeto e monografia.",
          "Tenho uma noção da estrutura final da monografia.",
          "Percebo que o projeto alimenta diretamente a monografia.",
          "Já comecei a imaginar os possíveis capítulos do meu trabalho."
        ],
      },
      {
        id: "pp04",
        title: "Cronograma da Aprovação – TCC em até 30 dias",
        shortDescription: "Organizar um plano realista de 30 dias, com opção de modo intensivo de 7 dias.",
        lessonBody: `Um cronograma realista é essencial para que o estudante avance sem se perder no processo. Nesta aula, vamos organizar as tarefas principais de escrita e revisão em um plano de 30 dias, com alternativa de modo intensivo de 7 dias.

Plano de 30 dias (exemplo simplificado):
• Dias 1–5: tema, problema, objetivos, justificativa;
• Dias 6–10: pesquisa de materiais e organização das fontes;
• Dias 11–15: escrita da introdução e estrutura do referencial teórico;
• Dias 16–20: escrita do referencial teórico;
• Dias 21–24: metodologia e resultados esperados (ou resultados, se o estudo já estiver concluído);
• Dias 25–27: considerações finais;
• Dias 28–30: revisão geral, verificação de plágio e formatação.

Plano de 7 dias:
• Dia 1: tema, problema, objetivos e justificativa;
• Dia 2: levantamento das principais fontes;
• Dia 3: introdução e estrutura de capítulos;
• Dia 4: escrita do referencial teórico;
• Dia 5: metodologia e resultados esperados ou parciais;
• Dia 6: considerações finais;
• Dia 7: revisão, verificação de plágio e formatação.

O cronograma pode e deve ser adaptado à tua realidade, desde que respeite a ordem lógica das etapas.`,
        videoScript: `Nesta aula, vamos transformar o teu TCC num plano com datas.

Um dos maiores motivos de ansiedade é não saber o que fazer em cada momento. Por isso, organizámos um exemplo de cronograma de 30 dias e um de 7 dias intensivos. Eles mostram, de forma simples, quando trabalhar no tema, no problema, nos objetivos, na justificativa, no referencial teórico, na metodologia e na revisão final.

Não precisas seguir à risca, mas é importante definires, por escrito, em quais dias vais tratar de cada parte. Quanto mais claro for o teu plano, menores serão as hipóteses de deixares tudo para a última hora.`,
        pdfTitle: "Aula PP04 – Cronograma da Aprovação",
        pdfSections: [
          {
            heading: "Exemplo de Cronograma de 30 Dias",
            body: `Apresenta a distribuição sugerida das tarefas ao longo de 30 dias, priorizando primeiro o planeamento, depois a escrita e, por fim, a revisão e a formatação.`,
          },
          {
            heading: "Exemplo de Cronograma de 7 Dias",
            body: `Mostra um plano intensivo para estudantes que já possuem leituras feitas e precisam organizar e escrever o trabalho em um curto espaço de tempo.`,
          },
          {
            heading: "Dicas para Ajustar o Teu Cronograma",
            body: `Marca os dias em que tens mais disponibilidade, identifica os momentos em que podes escrever com mais concentração e ajusta o plano de acordo com a rotina da tua instituição.`,
          },
        ],
        iaPrompts: [
          "Com base no seguinte conjunto de dias livres [descreve os dias e horários], sugira um cronograma de 30 dias para o meu TCC.",
          "Transforme o seguinte plano de tarefas em uma tabela de cronograma semanal.",
          "Sugira lembretes diários curtos para me manter focado no TCC durante 30 dias."
        ],
        exercise: `Cria o teu próprio cronograma em formato de tabela ou lista, indicando:

• Que tarefa farás em cada dia;
• Quanto tempo pretendes dedicar;
• Que metas queres cumprir até ao final de cada semana.

Guarda este cronograma num local visível, como a parede do quarto ou a capa do caderno do TCC.`,
        checklist: [
          "Defini um cronograma de 30 ou 7 dias.",
          "Distribuí as tarefas de forma realista.",
          "Tenho clareza sobre o que preciso fazer nos próximos dias.",
          "Assumi um compromisso com o meu plano de estudo e escrita."
        ],
      },
      {
        id: "pp05",
        title: "Escolhendo o Tema Ideal",
        shortDescription: "Aprender a escolher um tema relevante, viável e alinhado à realidade do estudante.",
        lessonBody: `A escolha do tema é uma das decisões mais importantes do TCC. Um tema bem definido aumenta a motivação e facilita a produção do texto.

Um bom tema deve ser:
• Relevante – tem importância para a área de estudo ou para a sociedade;
• Viável – pode ser investigado com os recursos e o tempo disponíveis;
• Claro – pode ser explicado em poucas frases;
• Delimitado – não é amplo demais.

É útil começar com uma área de interesse geral (por exemplo, educação, finanças, saúde, tecnologia) e ir afunilando até chegar a uma pergunta mais específica.`,
        videoScript: `Escolher o tema certo pode transformar a tua experiência com o TCC.

O tema ideal é aquele que une interesse pessoal, relevância para a área e viabilidade. Não precisas escolher algo grandioso; o importante é que seja possível investigar e escrever com profundidade.

Nesta aula, vou convidar-te a listar temas que fazem sentido para a tua formação e, depois, a aplicar alguns critérios simples para chegar ao tema final. Lembra-te: um bom TCC não é o mais complicado, é o que está bem definido e bem executado.`,
        pdfTitle: "Aula PP05 – Escolhendo o Tema Ideal",
        pdfSections: [
          {
            heading: "Critérios para Escolha do Tema",
            body: `Verifica se o tema te interessa, se existem fontes disponíveis sobre o assunto, se tens condições de recolher dados e se o recorte é adequado ao nível do teu curso.`,
          },
          {
            heading: "Do Interesse Geral ao Tema Delimitado",
            body: `Começa por uma área ampla e vai reduzindo o foco. Por exemplo: Educação → Ensino básico → Desempenho em matemática → Estratégias de reforço escolar em determinada realidade.`,
          },
          {
            heading: "Evitar Temas Excessivamente Amplos",
            body: `Temas muito gerais tornam-se difíceis de aprofundar. Delimitar o campo de estudo é fundamental para que o trabalho tenha coerência e conclusão possível.`,
          },
        ],
        iaPrompts: [
          "Com base na minha área de formação [inserir área], sugira cinco possíveis temas de TCC, explicando em uma frase cada um.",
          "Ajude-me a delimitar o seguinte tema geral [escreve o tema] em versões mais específicas e viáveis.",
          "Liste perguntas de investigação relacionadas a este tema [escreve o tema], que possam ser exploradas num TCC."
        ],
        exercise: `Lista três possíveis temas para o teu TCC. Em seguida, para cada um deles, responde:

1. Por que este tema te interessa?
2. Que tipo de fontes imaginas encontrar?
3. Quais dificuldades prevês?

Escolhe o tema que mais equilibra interesse, viabilidade e relevância.`,
        checklist: [
          "Listei pelo menos três temas possíveis.",
          "Avaliei interesse, relevância e viabilidade de cada tema.",
          "Escolhi um tema principal para desenvolver o TCC.",
          "Registei o tema escolhido no meu caderno de projeto."
        ],
      },
      {
        id: "pp06",
        title: "Definindo o Problema de Pesquisa",
        shortDescription: "Transformar o tema em uma pergunta clara que guiará todo o estudo.",
        lessonBody: `O problema de pesquisa é a pergunta central que o teu TCC pretende responder. Ele deve ser formulado de forma clara, específica e coerente com a realidade escolhida.

Normalmente, um problema de pesquisa é apresentado em forma de pergunta, tal como:
• Como determinado fenómeno ocorre em certo contexto?
• De que forma uma prática influencia determinado resultado?
• Qual é a relação entre dois factores?

Um problema muito vago impede a definição de objetivos e de metodologia. Já um problema muito estreito pode limitar demasiado o estudo. O equilíbrio é o que buscamos.`,
        videoScript: `Depois de escolher o tema, precisamos transformá-lo em um problema de pesquisa.

O problema de pesquisa é a pergunta que o teu TCC quer responder. Não é qualquer pergunta: ela precisa ser investigável, contextualizada e ligada à área de formação.

Nesta aula, vamos praticar a passagem de um tema geral para uma pergunta específica. Quando conseguires formular um bom problema, metade do caminho conceptual do teu TCC estará feito.`,
        pdfTitle: "Aula PP06 – Problema de Pesquisa",
        pdfSections: [
          {
            heading: "Função do Problema",
            body: `O problema orienta a escolha dos objetivos, da metodologia e das análises. Ele é o centro lógico do TCC, apoiando a construção de todo o texto.`,
          },
          {
            heading: "Características de um Bom Problema",
            body: `• É apresentado de forma clara e compreensível;
• Refere-se a uma realidade específica;
• Pode ser respondido com base em dados ou literatura;
• Está alinhado à formação do estudante.`,
          },
          {
            heading: "Do Tema à Pergunta",
            body: `Para transformar o tema em problema, identifica o que ainda não se sabe ou o que precisa ser compreendido naquela realidade. Em seguida, formula uma pergunta objectiva e direta.`,
          },
        ],
        iaPrompts: [
          "A partir deste tema [insere o tema], sugira três possíveis problemas de pesquisa em forma de pergunta.",
          "Analise o seguinte problema de pesquisa [insere o problema] e sugira ajustes para deixá-lo mais claro e específico.",
          "Explique, de forma simples, se o problema de pesquisa a seguir é investigável com métodos académicos: [insere o problema]."
        ],
        exercise: `Usando o tema que escolheste na aula anterior, escreve três versões de problema de pesquisa em forma de pergunta. Depois, escolhe a que consideras mais clara e viável e regista como problema oficial do teu TCC.`,
        checklist: [
          "Transformei o meu tema em diferentes perguntas.",
          "Escolhi um problema de pesquisa claro e específico.",
          "Verifiquei se o problema é investigável na minha realidade.",
          "Registei o problema oficial no meu caderno de projeto."
        ],
      },
      {
        id: "pp07",
        title: "Elaborando as Hipóteses",
        shortDescription: "Construir possíveis respostas para o problema, quando a área exigir hipóteses.",
        lessonBody: `Em alguns cursos e áreas, é necessário formular hipóteses. As hipóteses são respostas provisórias ao problema de pesquisa, que serão confirmadas ou rejeitadas com base nos dados ou na literatura.

Uma hipótese bem formulada:
• Está ligada diretamente ao problema;
• Apresenta uma relação possível entre variáveis ou factores;
• Pode ser testada ou analisada.

Nem todo TCC exige hipóteses. Quando for o caso, elas devem ser redigidas de forma objetiva, evitando opiniões vagas ou juízos de valor.`,
        videoScript: `Nem todos os TCCs precisam de hipóteses, mas, quando são exigidas, elas merecem atenção.

As hipóteses funcionam como respostas provisórias ao problema. São afirmações que só poderão ser confirmadas ou ajustadas depois da análise dos dados ou da literatura.

Nesta aula, vamos ver como formular hipóteses simples, ligadas diretamente ao problema, e como evitar frases genéricas ou cheias de opiniões. O objetivo é criar hipóteses que façam sentido e possam ser avaliadas ao longo do trabalho.`,
        pdfTitle: "Aula PP07 – Hipóteses de Pesquisa",
        pdfSections: [
          {
            heading: "Quando Utilizar Hipóteses",
            body: `As hipóteses costumam ser utilizadas em pesquisas que comparam grupos, analisam relações entre variáveis ou testam efeitos de determinada intervenção.`,
          },
          {
            heading: "Características de Boas Hipóteses",
            body: `• Ligadas ao problema;
• Específicas e claras;
• Possíveis de analisar com a metodologia prevista;
• Redigidas em forma afirmativa.`,
          },
          {
            heading: "Exemplos Genéricos",
            body: `Utiliza exemplos neutros, como: "Espera-se que estudantes que participam de actividades de reforço escolar apresentem melhor desempenho em matemática do que aqueles que não participam."`,
          },
        ],
        iaPrompts: [
          "A partir deste problema de pesquisa [insere o problema], sugira três hipóteses possíveis.",
          "Analise a seguinte hipótese [insere a hipótese] e indique se está clara e ligada ao problema.",
          "Sugira uma forma de transformar esta hipótese ampla em algo mais específico: [insere a hipótese]."
        ],
        exercise: `Caso o teu curso exija hipóteses, escreve de duas a três hipóteses relacionadas ao teu problema de pesquisa. Se não for obrigatório, regista apenas quais resultados imaginas encontrar, em forma de expectativas.`,
        checklist: [
          "Verifiquei se o meu curso exige hipóteses.",
          "Entendi a função das hipóteses, quando são necessárias.",
          "Elaborei hipóteses ligadas ao meu problema de pesquisa ou registei expectativas de resultados.",
          "Evitei hipóteses vagas ou com juízos de valor."
        ],
      },
      {
        id: "pp08",
        title: "Estabelecendo Objetivos Claros",
        shortDescription: "Definir o que o estudo pretende alcançar de forma geral e específica.",
        lessonBody: `Os objetivos indicam o que o teu trabalho pretende alcançar. O objetivo geral resume a intenção principal da pesquisa. Os objetivos específicos desdobram o geral em passos menores.

Exemplo genérico:
• Objetivo geral: analisar determinada realidade ou fenómeno.
• Objetivos específicos: identificar, descrever, comparar, verificar, entre outros.

É importante utilizar verbos de ação adequados à pesquisa académica e evitar verbos vagos, como "entender" ou "estudar", sem complemento claro.`,
        videoScript: `Com o problema definido, precisamos agora estabelecer os objetivos.

O objetivo geral indica o que a tua pesquisa pretende fazer em termos amplos. Os objetivos específicos detalham esse caminho, mostrando as etapas que irás cumprir para responder ao problema.

Nesta aula, vamos trabalhar com verbos de ação típicos da linguagem académica e construir um conjunto de objetivos coerente, que conversa diretamente com o problema de pesquisa e com a metodologia.`,
        pdfTitle: "Aula PP08 – Objetivos Geral e Específicos",
        pdfSections: [
          {
            heading: "Função dos Objetivos",
            body: `Os objetivos orientam a coleta de dados, a análise e a forma como os resultados serão apresentados. Eles mantêm o foco do trabalho e ajudam a avaliar se a pesquisa foi bem-sucedida.`,
          },
          {
            heading: "Objetivo Geral",
            body: `É a intenção principal do estudo. Costuma ser apresentado com verbos como: analisar, investigar, compreender de forma ampla, examinar.`,
          },
          {
            heading: "Objetivos Específicos",
            body: `Desdobram o objetivo geral em ações concretas, com verbos como: identificar, descrever, comparar, verificar, caracterizar, discutir.`,
          },
        ],
        iaPrompts: [
          "Com base neste problema de pesquisa [insere o problema], sugira um objetivo geral e três objetivos específicos.",
          "Avalie os seguintes objetivos e diga se estão claros e coerentes com o problema: [insere objetivos].",
          "Sugira uma lista de verbos de ação adequados para objetivos específicos na área de [tua área]."
        ],
        exercise: `Escreve um objetivo geral para o teu TCC e, em seguida, de três a cinco objetivos específicos que desdobrem a intenção principal em perguntas ou ações mais concretas.

Depois, verifica se todos se relacionam diretamente ao problema de pesquisa.`,
        checklist: [
          "Escrevi um objetivo geral claro e alinhado ao problema.",
          "Defini três a cinco objetivos específicos realistas.",
          "Usei verbos de ação adequados à linguagem académica.",
          "Verifiquei a coerência entre problema, objetivo geral e objetivos específicos."
        ],
      },
      {
        id: "pp09",
        title: "Construindo uma Justificativa Forte",
        shortDescription: "Argumentar por que o tema e o estudo são importantes e merecem ser realizados.",
        lessonBody: `A justificativa apresenta os motivos pelos quais o estudo é relevante. Ela costuma abordar:

• Relevância social – por que este tema é importante para a sociedade ou comunidade envolvida;
• Relevância académica – de que forma o trabalho contribui para a área de estudo;
• Relevância prática – como os resultados poderão ser úteis na prática profissional.

Uma boa justificativa não repete apenas o problema e os objetivos, mas mostra o impacto que a pesquisa pode ter.`,
        videoScript: `Agora é hora de responder à pergunta: por que este TCC é importante?

A justificativa é o espaço onde explicas as razões que sustentam a escolha do tema e a realização do estudo. Ela pode apontar a importância social, académica e prática do trabalho.

Nesta aula, vamos organizar um roteiro simples para escrever uma justificativa consistente, que mostre ao leitor que o teu TCC tem sentido e valor, para além de uma exigência formal da instituição.`,
        pdfTitle: "Aula PP09 – Justificativa da Pesquisa",
        pdfSections: [
          {
            heading: "Relevância Social",
            body: `Explica como o trabalho pode contribuir para compreender ou melhorar alguma realidade vivida por pessoas, grupos ou instituições.`,
          },
          {
            heading: "Relevância Académica",
            body: `Mostra como o estudo dialoga com a área de formação, preenchendo lacunas, aprofundando conceitos ou trazendo novas perspectivas.`,
          },
          {
            heading: "Relevância Prática",
            body: `Indica possíveis aplicações dos resultados, seja em políticas, práticas profissionais, processos internos de empresas ou outras situações concretas.`,
          },
        ],
        iaPrompts: [
          "Com base no meu tema [insere o tema], ajude-me a listar argumentos para a relevância social, académica e prática da pesquisa.",
          "Transforme a seguinte lista de ideias numa justificativa coesa para um projeto de TCC: [insere ideias].",
          "Sugira frases de abertura para uma justificativa de TCC na área de [tua área]."
        ],
        exercise: `Escreve um primeiro rascunho da tua justificativa, com um parágrafo para cada tipo de relevância: social, académica e prática.

Não te preocupes em deixar o texto perfeito agora; o objetivo é colocar os argumentos principais no papel.`,
        checklist: [
          "Refleti sobre a importância do meu tema para a sociedade.",
          "Identifiquei a relevância do estudo para a área académica.",
          "Pensei em possíveis aplicações práticas dos resultados.",
          "Escrevi um rascunho da justificativa do meu TCC."
        ],
      },
      {
        id: "pp10",
        title: "Pesquisando Materiais",
        shortDescription: "Aprender a localizar, selecionar e organizar fontes confiáveis para o TCC.",
        lessonBody: `A qualidade das fontes utilizadas influencia diretamente a qualidade da monografia. Por isso, é essencial aprender a pesquisar materiais de forma criteriosa.

Fontes recomendadas:
• Livros e capítulos de livros de referência na área;
• Artigos científicos em revistas académicas;
• Teses e dissertações em repositórios de universidades;
• Documentos oficiais e relatórios de instituições reconhecidas.

Sempre verifica:
• Autor e credenciais;
• Ano de publicação;
• Se o conteúdo é relevante para o teu problema de pesquisa;
• Se o texto é realmente científico ou apenas opinativo.`,
        videoScript: `Uma boa monografia começa por boas leituras.

Nesta aula, vamos ver onde encontrar materiais confiáveis, como livros, artigos, teses e documentos oficiais. Também vamos discutir como avaliar se uma fonte é adequada ao teu TCC e como evitar apoiar o trabalho apenas em textos superficiais.

Com uma base sólida de leituras, escrever o referencial teórico torna-se muito mais simples. Vamos organizar juntos as tuas primeiras fontes.`,
        pdfTitle: "Aula PP10 – Pesquisa de Materiais",
        pdfSections: [
          {
            heading: "Onde Pesquisar",
            body: `Procura repositórios de universidades, bases abertas de artigos científicos, bibliotecas físicas e digitais, além de sites institucionais confiáveis.`,
          },
          {
            heading: "Critérios de Seleção",
            body: `Analisa a credibilidade do autor, a atualidade do texto, a relação com o teu problema de pesquisa e o tipo de publicação. Dá preferência a textos científicos revisados por pares.`,
          },
          {
            heading: "Organização das Fontes",
            body: `Regista as referências principais logo no início, anotando autor, título, ano, local de publicação e página, quando for o caso. Isso facilita a construção das referências bibliográficas mais tarde.`,
          },
        ],
        iaPrompts: [
          "Sugira palavras-chave para pesquisar sobre o tema [insere tema] em bases académicas.",
          "Explique como posso organizar as referências encontradas em uma tabela simples para uso no meu TCC.",
          "Dê exemplos de perguntas que posso fazer ao ler um artigo para avaliar se ele é relevante para o meu problema de pesquisa."
        ],
        exercise: `Escolhe pelo menos cinco fontes iniciais relacionadas ao teu tema. Para cada uma, regista:

• Autor;
• Título;
• Ano;
• Tipo de publicação (livro, artigo, relatório, etc.);
• Principais ideias que podem contribuir para o teu TCC.

Guarda esta lista para utilizá-la na construção do referencial teórico.`,
        checklist: [
          "Acessei pelo menos uma base de dados ou repositório académico.",
          "Selecionei cinco ou mais fontes relevantes.",
          "Registei as informações essenciais de cada fonte.",
          "Comecei a formar a base do meu referencial teórico."
        ],
      },
    ],
  },
  {
    id: "modulo-2",
    number: 2,
    title: "Elementos Textuais",
    description: "Neste módulo, o estudante aprende a estrutura interna da monografia: introdução, capítulos do referencial teórico, metodologia, resultados, discussão e considerações finais. O foco é compreender o papel de cada parte e saber o que escrever em cada uma delas.",
    icon: "📝",
    color: "from-emerald-500 to-green-600",
    lessons: [
      {
        id: "et01",
        title: "O que são Elementos Textuais",
        shortDescription: "Compreender a divisão básica da monografia em introdução, desenvolvimento e considerações finais.",
        lessonBody: `Os elementos textuais correspondem ao "miolo" da monografia: a parte em que o estudante apresenta o problema, as bases teóricas, a metodologia, os resultados, as discussões e as considerações finais.

De forma geral, os elementos textuais são organizados em:
• Introdução;
• Desenvolvimento (capítulos teóricos e metodológicos, apresentação dos resultados e discussões);
• Considerações finais.

Antes de escrever, é importante ter uma visão clara desta estrutura. Assim, cada parte cumpre uma função específica e o texto flui com mais lógica.`,
        videoScript: `Nesta aula, vamos olhar para a estrutura interna da monografia: os elementos textuais.

É aqui que a pesquisa realmente aparece em texto: começamos pela introdução, seguimos pelos capítulos de desenvolvimento, apresentamos os resultados, comentamos as discussões e fechamos com as considerações finais. Quando compreendes a função de cada parte, fica muito mais fácil decidir o que escrever e em que ordem.

O objetivo desta aula é dar-te uma visão panorâmica da estrutura, para que possas organizar as tuas ideias com segurança.`,
        pdfTitle: "Aula ET01 – Elementos Textuais da Monografia",
        pdfSections: [
          { heading: "Visão Geral", body: `Os elementos textuais concentram o conteúdo principal da pesquisa. Neles, o estudante apresenta o contexto do problema, fundamenta teoricamente o estudo, descreve a metodologia, apresenta e discute resultados e encerra com as considerações finais.` },
          { heading: "Partes Principais", body: `• Introdução – apresenta o tema, o problema, os objetivos e a justificativa;
• Desenvolvimento – reúne referencial teórico, metodologia, resultados e discussões;
• Considerações finais – retomam objetivos, sintetizam resultados e apontam limites e possibilidades.` },
        ],
        iaPrompts: [
          "Explique, de forma resumida, a diferença entre elementos pré-textuais, textuais e pós-textuais de uma monografia.",
          "Liste, em tópicos, as partes que normalmente compõem os elementos textuais de um TCC.",
          "Sugira uma ordem lógica para apresentar introdução, capítulos teóricos, metodologia, resultados, discussões e considerações finais."
        ],
        exercise: `Desenha um esquema simples em forma de lista ou quadro, indicando:

• Introdução – o que pretendes colocar;
• Desenvolvimento – possíveis capítulos;
• Considerações finais – o que imaginas concluir.

Guarda esse esquema como mapa inicial dos elementos textuais do teu trabalho.`,
        checklist: [
          "Entendi o que são elementos textuais.",
          "Compreendi a divisão em introdução, desenvolvimento e considerações finais.",
          "Organizei um rascunho de esquema para os elementos textuais do meu TCC."
        ],
      },
      {
        id: "et02",
        title: "Introdução Nota 10",
        shortDescription: "Aprender a estruturar uma introdução clara, completa e ligada ao projeto.",
        lessonBody: `A introdução é o cartão de visita da monografia. Ela apresenta ao leitor o tema, o contexto, o problema, os objetivos, a justificativa e, de forma sintética, a metodologia.

Um roteiro útil de introdução inclui:
• Apresentação do tema e do contexto;
• Formulação do problema de pesquisa;
• Indicação dos objetivos;
• Comentários sobre a relevância do estudo;
• Breve descrição da metodologia e da estrutura do trabalho.

A introdução deve ser escrita com clareza, evitando detalhes excessivos que serão aprofundados nos capítulos seguintes.`,
        videoScript: `Nesta aula, vamos aprender a escrever uma introdução que realmente apresenta o teu trabalho com clareza.

A ideia é seguir um roteiro simples: começar pelo contexto e pelo tema, depois apresentar o problema de pesquisa, indicar os objetivos, justificar a importância do estudo e, por fim, explicar de forma breve como o trabalho está organizado.

Quando respeitamos essa sequência, o leitor entende rapidamente o que será tratado e qual a lógica da monografia. Vamos montar esse roteiro juntos.`,
        pdfTitle: "Aula ET02 – Como Elaborar a Introdução",
        pdfSections: [
          { heading: "Função da Introdução", body: `A introdução situa o leitor, apresentando o tema, o problema, os objetivos, a importância do estudo e a forma geral como o trabalho está organizado.` },
          { heading: "Roteiro Sugerido", body: `1. Apresentar o tema e o contexto;
2. Indicar o problema de pesquisa;
3. Apresentar o objetivo geral e os específicos;
4. Apontar a relevância;
5. Explicar de forma breve a metodologia e a estrutura dos capítulos.` },
          { heading: "Dicas de Escrita", body: `Mantém a introdução coesa, evita repetir linhas inteiras da justificativa ou do referencial teórico e utiliza transições suaves entre os parágrafos.` },
        ],
        iaPrompts: [
          "Com base no seguinte tema e problema [insere tema e problema], sugira um esboço de parágrafos para a introdução da monografia.",
          "Revisa o texto de introdução abaixo, apontando onde posso melhorar a clareza e a sequência lógica: [cola a tua introdução].",
          "Sugira frases de ligação entre parágrafos para uma introdução de TCC."
        ],
        exercise: `Com o teu tema, problema e objetivos já definidos, escreve um rascunho de introdução seguindo o roteiro:

1. Contexto e tema;
2. Problema de pesquisa;
3. Objetivos;
4. Relevância;
5. Estrutura do trabalho.

Depois, lê em voz alta para verificar se a sequência faz sentido.`,
        checklist: [
          "Escrevi um rascunho de introdução para o meu TCC.",
          "Incluí tema, problema, objetivos, relevância e estrutura do trabalho.",
          "Verifiquei se a introdução está coerente com o projeto."
        ],
      },
      {
        id: "et03",
        title: "Referencial Teórico",
        shortDescription: "Entender a função do referencial teórico e como organizar autores e conceitos.",
        lessonBody: `O referencial teórico é a parte em que o estudante apresenta as principais teorias, conceitos e estudos relacionados ao tema. Ele mostra que o trabalho está apoiado em conhecimento já produzido.

Um bom referencial teórico:
• Apresenta conceitos relevantes;
• Dialoga com diferentes autores;
• Evita longas cópias e preferências pessoais exageradas;
• Mantém ligação constante com o problema de pesquisa.

Mais do que resumir textos, o estudante precisa relacionar ideias, comparar abordagens e destacar o que é mais importante para o seu tema.`,
        videoScript: `Nesta aula, vamos falar sobre o referencial teórico, a base de conhecimento que sustenta o teu TCC.

O objetivo aqui não é apenas resumir livros ou artigos, mas mostrar que conheces a discussão teórica sobre o teu tema, relacionando autores e ideias. Vais aprender a selecionar conceitos, organizar subtópicos e apresentar o conteúdo com as tuas próprias palavras.

Um bom referencial teórico fortalece toda a tua argumentação e mostra maturidade académica.`,
        pdfTitle: "Aula ET03 – Referencial Teórico",
        pdfSections: [
          { heading: "Função", body: `O referencial teórico sustenta a análise do problema, apresentando conceitos, categorias e discussões já produzidas sobre o tema, em diálogo com diferentes autores.` },
          { heading: "Escolha de Autores", body: `Selecciona autores que sejam relevantes, atualizados e reconhecidos na área. Procura diferentes perspectivas, evitando depender apenas de uma fonte.` },
          { heading: "Forma de Escrita", body: `Apresenta as ideias com as tuas palavras, citando correctamente as fontes. Usa citações diretas apenas quando necessário e evita parágrafos extensos de transcrição.` },
        ],
        iaPrompts: [
          "Sugira uma organização em subtópicos para o referencial teórico com base neste tema: [insere tema].",
          "Ajude-me a reescrever este parágrafo do referencial teórico para ficar mais claro, mantendo a ideia principal e a citação: [cola o parágrafo].",
          "Liste perguntas que eu possa usar ao ler um artigo para decidir se ele entra ou não no meu referencial teórico."
        ],
        exercise: `Escolhe duas ou três fontes já selecionadas sobre o teu tema e escreve um parágrafo de referencial teórico, com pelo menos uma citação, utilizando as tuas próprias palavras.

Marca as partes em que estás a interpretar e as partes que correspondem diretamente às ideias do autor.`,
        checklist: [
          "Entendi a função do referencial teórico.",
          "Identifiquei autores importantes para o meu tema.",
          "Produzi ao menos um parágrafo de referencial teórico com citação adequada."
        ],
      },
      {
        id: "et04",
        title: "Definindo os Capítulos do Referencial Teórico",
        shortDescription: "Organizar o referencial teórico em tópicos e subtópicos coerentes.",
        lessonBody: `Depois de selecionar as principais leituras, é necessário decidir como organizar o referencial teórico em capítulos e subtópicos.

Uma estratégia é:
• Começar com conceitos mais gerais;
• Em seguida, apresentar teorias específicas;
• Por fim, aproximar a discussão do contexto do teu problema.

Cada capítulo ou seção deve ter um foco claro, evitando misturar temas em excesso no mesmo espaço.`,
        videoScript: `Se tens vários textos sobre o teu tema, talvez te sintas perdido sobre onde cada ideia deve entrar. É aqui que a organização dos capítulos do referencial teórico se torna fundamental.

Nesta aula, vamos aprender a transformar a lista de leituras em uma estrutura de subtítulos. Vamos partir dos conceitos mais amplos e avançar para aspectos mais específicos, até chegar na realidade do teu problema de pesquisa.

Uma boa organização facilita tanto a escrita quanto a leitura.`,
        pdfTitle: "Aula ET04 – Organização dos Capítulos do Referencial",
        pdfSections: [
          { heading: "Estratégias de Organização", body: `Organiza os tópicos do referencial teórico de forma lógica: do geral para o específico, por temas, por abordagens teóricas ou por blocos relacionados ao problema.` },
          { heading: "Rascunho de Estrutura", body: `Elabora um índice provisório com capítulos e subtópicos. Este rascunho pode ser ajustado conforme novas leituras forem sendo incorporadas.` },
        ],
        iaPrompts: [
          "Com base nesta lista de conceitos e autores [insere lista], sugira uma possível estrutura de capítulos para o meu referencial teórico.",
          "Reorganize os tópicos a seguir em uma ordem lógica do geral para o específico: [lista de tópicos].",
          "Sugira títulos de subtópicos claros para o referencial teórico na área de [tua área]."
        ],
        exercise: `Cria um índice provisório do teu referencial teórico, com pelo menos dois capítulos principais e dois ou três subtópicos em cada um.

Verifica se a ordem faz sentido e se cada parte contribui para entender o problema de pesquisa.`,
        checklist: [
          "Listei os principais temas e conceitos do meu referencial teórico.",
          "Organizei estes temas em capítulos e subtópicos.",
          "Tenho um índice provisório para o referencial teórico."
        ],
      },
      {
        id: "et05",
        title: "Metodologia – Parte 1",
        shortDescription: "Entender os componentes básicos da metodologia de pesquisa.",
        lessonBody: `A metodologia descreve como a pesquisa será ou foi realizada. Ela explica o tipo de estudo, a abordagem, o público ou documentos analisados, os instrumentos utilizados e a forma de tratamento dos dados.

Elementos comuns da metodologia:
• Abordagem (qualitativa, quantitativa ou mista);
• Tipo de pesquisa (exploratória, descritiva, explicativa, estudo de caso, entre outros);
• Participantes ou fontes de dados;
• Instrumentos de recolha (questionários, entrevistas, análise documental, etc.);
• Procedimentos de análise.

A metodologia precisa ser coerente com o problema e com os objetivos.`,
        videoScript: `Nesta aula, vamos compreender a estrutura básica da metodologia.

A pergunta central é: como pretendes responder ao teu problema de pesquisa? A metodologia é a parte em que explicas a abordagem, o tipo de estudo, quem ou o que será analisado, que instrumentos serão utilizados e como os dados serão tratados.

Com uma metodologia clara, o leitor consegue entender os caminhos que seguiste e avaliar a consistência do teu trabalho.`,
        pdfTitle: "Aula ET05 – Fundamentos de Metodologia",
        pdfSections: [
          { heading: "Papel da Metodologia", body: `A metodologia mostra o caminho da pesquisa. Ela deve ser suficientemente clara para que outro investigador entenda como o estudo foi conduzido.` },
          { heading: "Componentes Comuns", body: `Abordagem, tipo de pesquisa, participantes ou fontes de dados, instrumentos e procedimentos de recolha e análise.` },
        ],
        iaPrompts: [
          "Explique de forma simples a diferença entre abordagem qualitativa e quantitativa.",
          "Com base neste problema e objetivos [insere texto], sugira um tipo de pesquisa e uma abordagem adequados.",
          "Ajude-me a descrever, em um parágrafo, quem serão os participantes ou as fontes de dados do meu estudo."
        ],
        exercise: `Com base no teu problema e nos teus objetivos, escreve um parágrafo indicando:

• A abordagem da tua pesquisa;
• O tipo de estudo;
• Quem ou o que será analisado.

Este será o início da tua secção de metodologia.`,
        checklist: [
          "Entendi o papel da metodologia no TCC.",
          "Defini uma abordagem e um tipo de estudo compatíveis com o meu problema.",
          "Rascunhei a descrição dos participantes ou fontes de dados."
        ],
      },
      {
        id: "et06",
        title: "Metodologia Simplificada",
        shortDescription: "Adequar a metodologia a trabalhos com menor complexidade, mantendo clareza.",
        lessonBody: `Em muitos cursos de graduação, a metodologia não precisa ser extremamente complexa. O importante é que seja clara, coerente com o problema e possível de executar.

Uma metodologia simplificada pode:
• Focar em análise documental;
• Utilizar um estudo de caso único;
• Basear-se em revisão de literatura;
• Descrever procedimentos de forma objetiva, sem jargões excessivos.

Em vez de decorar termos, o estudante deve preocupar-se em explicar o que fez ou fará, de maneira compreensível.`,
        videoScript: `Nem toda monografia exige uma metodologia muito extensa. Em vários casos, uma descrição clara e direta do que foi feito é o suficiente.

Nesta aula, vamos ver como adaptar a metodologia ao nível do teu curso, utilizando linguagem simples e explicando, sem complicação, como os dados serão recolhidos e analisados.

O mais importante é que a metodologia combine com o problema, os objetivos e os recursos que realmente tens à disposição.`,
        pdfTitle: "Aula ET06 – Metodologia Simplificada",
        pdfSections: [
          { heading: "Quando Simplificar", body: `É possível simplificar a metodologia quando o estudo tem escopo limitado, utiliza poucas fontes ou concentra-se em revisão de literatura ou estudo de caso.` },
          { heading: "Clareza Acima de Jargões", body: `Mais importante do que termos complexos é explicar com precisão o que será feito, em que ordem e com que materiais ou participantes.` },
        ],
        iaPrompts: [
          "Transforme o seguinte texto metodológico rebuscado em uma versão mais simples e clara: [cola o texto].",
          "Sugira uma metodologia simplificada para um TCC baseado apenas em revisão de literatura na área de [tua área].",
          "Explique, em linguagem acessível, o que é um estudo de caso."
        ],
        exercise: `Revê o parágrafo de metodologia que escreveste na aula anterior e tenta simplificá-lo, removendo palavras desnecessárias e deixando o texto mais directo, sem perder a informação essencial.`,
        checklist: [
          "Percebi que posso escrever metodologia em linguagem simples.",
          "Ajustei o meu texto metodológico para ficar mais claro.",
          "Tenho uma versão da metodologia compatível com o nível do meu TCC."
        ],
      },
      {
        id: "et07",
        title: "Resultados",
        shortDescription: "Aprender a apresentar dados ou achados de forma organizada.",
        lessonBody: `A secção de resultados apresenta o que foi encontrado na pesquisa. Dependendo do tipo de estudo, os resultados podem aparecer em tabelas, gráficos, quadros ou descrições textuais.

Características importantes:
• Organização lógica;
• Linguagem objetiva;
• Separação entre descrição de resultados e interpretação (que virá na discussão).

Mesmo em trabalhos baseados em revisão de literatura, é possível apresentar resultados, como sínteses de autores, categorias encontradas ou tendências identificadas.`,
        videoScript: `Chegou o momento de mostrar o que a tua pesquisa encontrou.

Na secção de resultados, deves apresentar os dados ou achados de forma organizada e clara. Não é o lugar de interpretar profundamente; essa parte fica para a discussão. Aqui, o foco é mostrar, com honestidade, o que apareceu quando aplicaste a metodologia.

Vamos ver formas simples de apresentar resultados, tanto em estudos empíricos quanto em revisões de literatura.`,
        pdfTitle: "Aula ET07 – Apresentação de Resultados",
        pdfSections: [
          { heading: "Função da Secção de Resultados", body: `Esta secção mostra de forma objetiva o que foi encontrado na pesquisa, permitindo que o leitor acompanhe as informações antes de ler as interpretações.` },
          { heading: "Formas de Apresentação", body: `Resultados podem ser apresentados por meio de tabelas, gráficos, quadros ou texto corrido, desde que haja organização e clareza.` },
        ],
        iaPrompts: [
          "Sugira maneiras de apresentar, em texto, resultados obtidos por meio de entrevistas qualitativas.",
          "Ajude-me a transformar uma lista de dados num parágrafo coerente de resultados: [cola a lista].",
          "Explique como descrever resultados de uma revisão de literatura, sem copiar os autores."
        ],
        exercise: `Descreve, de forma simulada, um conjunto de resultados que poderias encontrar na tua pesquisa, mesmo que os dados ainda não estejam recolhidos. O objetivo é treinar a forma de apresentação.`,
        checklist: [
          "Entendi a diferença entre apresentar resultados e interpretá-los.",
          "Conheço formas de organizar os dados encontrados.",
          "Simulei a escrita de resultados no contexto do meu TCC."
        ],
      },
      {
        id: "et08",
        title: "Resultados Esperados para Projeto",
        shortDescription: "Escrever resultados esperados em projetos que ainda não foram executados.",
        lessonBody: `Em projetos de TCC que ainda não foram executados, muitas instituições solicitam a indicação de "resultados esperados". Não se trata de inventar dados, mas de indicar o que se pretende alcançar com a pesquisa.

Os resultados esperados podem mencionar:
• Possíveis contribuições para a compreensão de um fenómeno;
• Melhorias esperadas em determinado contexto;
• Informações que se espera obter.

Devem ser redigidos no futuro ou em tom de expectativa, deixando claro que o estudo ainda será realizado.`,
        videoScript: `Se estás na fase de projeto e ainda não aplicaste a pesquisa, provavelmente a tua instituição pede resultados esperados.

Nesta aula, vamos ver como escrever esses resultados sem fingir que o estudo já foi realizado. O foco é descrever que tipo de informação, compreensão ou mudança se espera alcançar ao final da pesquisa.

É uma forma de mostrar o potencial do trabalho, mantendo a honestidade académica.`,
        pdfTitle: "Aula ET08 – Resultados Esperados",
        pdfSections: [
          { heading: "Objetivo dos Resultados Esperados", body: `Mostrar que o projeto tem potencial para gerar conhecimento útil, deixando claro que ainda se trata de uma previsão e não de dados já obtidos.` },
          { heading: "Forma de Redação", body: `Utiliza expressões que indiquem expectativa, como: "espera-se", "pretende-se", "estima-se que", evitando apresentar resultados como se já fossem reais.` },
        ],
        iaPrompts: [
          "Com base nos meus objetivos [insere objetivos], sugira resultados esperados para o projeto de TCC.",
          "Reescreva os seguintes resultados esperados para deixar claro que se tratam de previsões: [cola o texto].",
          "Sugira frases de transição para introduzir resultados esperados em um projeto académico."
        ],
        exercise: `Escreve de três a cinco resultados esperados para o teu projeto, considerando o problema e os objetivos definidos. Verifica se está claro que se trata de expectativas.`,
        checklist: [
          "Entendi a diferença entre resultados esperados e resultados obtidos.",
          "Escrevi resultados esperados alinhados aos meus objetivos.",
          "Evitei apresentar resultados como se já fossem comprovados."
        ],
      },
      {
        id: "et09",
        title: "Discussões",
        shortDescription: "Aprender a interpretar resultados à luz do referencial teórico.",
        lessonBody: `A secção de discussões é o espaço para interpretar os resultados, relacionando-os com o referencial teórico e com o problema de pesquisa. Aqui, o estudante comenta o significado dos achados.

Passos sugeridos:
• Retomar um resultado específico;
• Relacionar com conceitos ou autores;
• Analisar convergências e divergências;
• Indicar implicações ou hipóteses explicativas.

A discussão não é apenas repetição do resultado nem repetição do referencial teórico; é um diálogo entre ambos.`,
        videoScript: `Chegou a parte em que a tua voz aparece com mais força: a discussão.

Nesta aula, vamos ver como pegar um resultado, conectá-lo com o que os autores dizem e tirar conclusões intermédias. O segredo é alternar entre o que foi encontrado e o que já se sabe na literatura, mostrando convergências, diferenças e possíveis explicações.

É nesta secção que mostras maturidade analítica e compreensão do tema.`,
        pdfTitle: "Aula ET09 – Discussão dos Resultados",
        pdfSections: [
          { heading: "Função da Discussão", body: `A discussão interpreta os resultados, relacionando-os com o referencial teórico e com o problema de pesquisa, apontando significados e implicações.` },
          { heading: "Estratégia de Escrita", body: `Para cada resultado importante, retoma-o em poucas frases, relaciona com pelo menos um autor e apresenta a tua análise crítica sobre o que isso significa.` },
        ],
        iaPrompts: [
          "Sugira uma estrutura de parágrafo para discutir um resultado específico em um TCC.",
          "Ajude-me a relacionar o seguinte resultado com um conceito teórico: [descreve resultado e conceito].",
          "Explique como posso evitar repetir o referencial teórico na secção de discussões."
        ],
        exercise: `Escolhe um resultado hipotético do teu estudo e escreve um parágrafo de discussão, relacionando-o a pelo menos um conceito ou autor do teu referencial teórico.`,
        checklist: [
          "Entendi que discussão é diferente de resultado e de teoria isolada.",
          "Treinei a escrita de um parágrafo de discussão.",
          "Comecei a pensar na forma de interpretar os possíveis achados do meu trabalho."
        ],
      },
      {
        id: "et10",
        title: "Considerações Finais",
        shortDescription: "Concluir o trabalho retomando objetivos, síntese dos resultados e contribuições.",
        lessonBody: `As considerações finais encerram a monografia. Elas retomam o problema e os objetivos, apresentam uma síntese dos principais resultados e apontam limitações e possibilidades futuras.

Não se trata de introduzir novos dados, mas de:
• Confirmar se os objetivos foram alcançados;
• Destacar as principais contribuições do estudo;
• Comentar limitações;
• Sugerir pesquisas futuras.

O tom deve ser de fechamento, mostrando ao leitor que o percurso foi cumprido.`,
        videoScript: `Na última parte da monografia, as considerações finais, é hora de fechar a história da tua pesquisa.

Nesta aula, vamos ver como retomar o problema, verificar se os objetivos foram atingidos, sintetizar os resultados mais importantes e apontar limitações e sugestões para estudos futuros. Não vamos trazer dados novos, mas sim organizar o que já foi apresentado, de forma clara e honesta.

É o momento de mostrar que a trajetória teve sentido.`,
        pdfTitle: "Aula ET10 – Considerações Finais",
        pdfSections: [
          { heading: "Função das Considerações Finais", body: `Esta secção encerra o trabalho, respondendo ao problema de pesquisa, indicando o cumprimento dos objetivos e sintetizando as principais contribuições do estudo.` },
          { heading: "Elementos Importantes", body: `• Retomada do problema e dos objetivos;
• Síntese dos resultados mais relevantes;
• Comentário sobre limitações;
• Sugestão de desdobramentos ou pesquisas futuras.` },
        ],
        iaPrompts: [
          "Com base no meu problema e objetivos [insere texto], sugira um esboço de parágrafo para as considerações finais.",
          "Ajude-me a transformar a lista de resultados abaixo numa síntese para as considerações finais: [lista de resultados].",
          "Sugira formas de apresentar limitações do estudo sem enfraquecer o trabalho."
        ],
        exercise: `Escreve um rascunho de considerações finais, mesmo que a tua pesquisa ainda não esteja concluída, simulando:

• Como responderias ao problema;
• Quais resultados destacarias;
• Que limitações apontarias.

Este exercício ajudará a visualizar o caminho completo.`,
        checklist: [
          "Entendi a função das considerações finais.",
          "Sei que não devo apresentar dados novos nesta secção.",
          "Simulei uma versão inicial de considerações finais para o meu TCC."
        ],
      },
    ],
  },
  {
    id: "modulo-3",
    number: 3,
    title: "Escrita Científica na Prática",
    description: "Neste módulo, o foco é a redação académica: como construir parágrafos, usar conectores, escrever com objectividade, utilizar IA para apoiar a escrita e fazer citações correctamente.",
    icon: "✍️",
    color: "from-violet-500 to-purple-600",
    lessons: [
      {
        id: "ec01",
        title: "Fundamentos da Escrita Científica",
        shortDescription: "Entender as características da linguagem científica e académica.",
        lessonBody: `A escrita científica utiliza uma linguagem clara, objetiva e precisa. O foco é comunicar ideias de forma compreensível, evitando exageros, opiniões sem fundamento e informalidades.

Características importantes:
• Clareza – frases bem construídas;
• Objectividade – evitar rodeios;
• Coerência – ideias ligadas logicamente;
• Impessoalidade – foco no fenómeno estudado, não em opiniões pessoais.

Aprender estes fundamentos ajuda o estudante a redigir todos os capítulos da monografia com mais segurança.`,
        videoScript: `Nesta aula, vamos ver o que torna um texto realmente académico.

A escrita científica precisa ser clara, objetiva e coerente. Não significa escrever difícil, mas sim escrever de forma organizada, evitando expressões demasiado informais e opiniões sem apoio em dados ou autores.

Compreender estas características será o ponto de partida para melhorar a tua redação em toda a monografia.`,
        pdfTitle: "Aula EC01 – Fundamentos da Escrita Científica",
        pdfSections: [
          { heading: "Características Principais", body: `Clareza, objectividade, coerência, coesão e impessoalidade são pilares da escrita científica. O texto deve facilitar a compreensão do leitor.` },
          { heading: "Linguagem Adequada", body: `Evita gírias, expressões muito informais e frases muito longas. Prefere construções simples, desde que corretas e completas.` },
        ],
        iaPrompts: [
          "Reescreva o parágrafo a seguir em uma linguagem mais académica e objetiva: [cola o parágrafo].",
          "Liste erros comuns na escrita científica de estudantes de graduação.",
          "Sugira boas práticas para revisar um texto académico antes de entregar."
        ],
        exercise: `Escolhe um parágrafo que já tenhas escrito para o teu TCC e reescreve-o seguindo os princípios de clareza, objectividade e coerência. Compara as versões.`,
        checklist: [
          "Sei identificar características da escrita científica.",
          "Revisitei um parágrafo meu e melhorei a redação.",
          "Estou mais atento à linguagem utilizada na monografia."
        ],
      },
      {
        id: "ec02",
        title: "Escrevendo os Primeiros Parágrafos",
        shortDescription: "Aprender a iniciar a escrita, construindo parágrafos claros e bem estruturados.",
        lessonBody: `Começar a escrever é, muitas vezes, a parte mais difícil do TCC. Um bom parágrafo académico costuma ter:

• Uma ideia central (frase temática);
• Desenvolvimento com explicações, exemplos ou dados;
• Uma frase de conclusão ou ligação com o próximo parágrafo.

É melhor escrever parágrafos simples e bem organizados do que tentar, de início, criar textos longos e complexos.`,
        videoScript: `Se estás a travar na hora de começar a escrever, esta aula é para ti.

Vamos aprender a construir parágrafos académicos com uma estrutura simples: uma ideia principal, um desenvolvimento que explica ou exemplifica e uma frase de encerramento ou ligação.

Quando dominas este formato, escrever a introdução, o referencial teórico e a discussão torna-se muito mais acessível.`,
        pdfTitle: "Aula EC02 – Primeiros Parágrafos da Monografia",
        pdfSections: [
          { heading: "Estrutura de Parágrafo", body: `Todo parágrafo deve girar em torno de uma ideia central. As frases seguintes desenvolvem essa ideia, oferecem exemplos ou explicações e preparam a transição para o parágrafo seguinte.` },
          { heading: "Dicas para Começar", body: `Não esperes pela frase perfeita. Escreve uma versão inicial, mesmo que simples, e melhora com revisões. O importante é colocar a ideia no papel.` },
        ],
        iaPrompts: [
          "Ajude-me a transformar esta lista de ideias em um parágrafo coeso: [cola a lista].",
          "Sugira frases de abertura para um parágrafo sobre a importância do meu tema: [insere tema].",
          "Reescreva o parágrafo a seguir, mantendo a mesma ideia, mas melhorando a coesão: [cola o parágrafo]."
        ],
        exercise: `Escreve três parágrafos sobre o teu tema:

1. Um parágrafo de contextualização geral;
2. Um parágrafo relacionando o tema à realidade local;
3. Um parágrafo apontando um problema ou desafio ligado ao tema.

Guarda estes parágrafos para aproveitá-los na introdução ou no referencial teórico.`,
        checklist: [
          "Compreendi a estrutura básica de um parágrafo académico.",
          "Escrevi três parágrafos ligados ao meu tema.",
          "Sinto-me mais confortável para iniciar a escrita da monografia."
        ],
      },
      {
        id: "ec03",
        title: "Escrita do Referencial Teórico com IA",
        shortDescription: "Usar IA como apoio na redação do referencial teórico, mantendo originalidade.",
        lessonBody: `A IA pode ajudar a organizar ideias e sugerir formas de explicar conceitos, mas o estudante continua responsável por ler as fontes e construir o texto com base em autores reais.

Boas práticas:
• Primeiro ler os textos científicos;
• Depois, usar IA para resumir ou reorganizar ideias;
• Reescrever com as próprias palavras;
• Conferir citações e referências;
• Verificar plágio antes de incorporar o texto final.

A IA não substitui a leitura nem o pensamento crítico, mas pode apoiar na clareza da redação.`,
        videoScript: `Aqui vamos trabalhar a combinação entre leituras reais e apoio da IA na escrita do referencial teórico.

A ordem recomendada é: ler os autores, fazer anotações, pedir à IA ajuda para organizar ideias ou melhorar a redação, reescrever com a tua voz e citar correctamente as fontes. Em seguida, verificar se não existe plágio.

Desta forma, manténs a autoria do texto e usas a tecnologia como ferramenta, e não como atalho.`,
        pdfTitle: "Aula EC03 – Referencial Teórico com Apoio de IA",
        pdfSections: [
          { heading: "Sequência Recomendada", body: `1. Ler os autores originais;
2. Anotar as ideias principais;
3. Utilizar IA para apoiar na organização ou reescrita;
4. Reescrever o texto com a tua voz;
5. Verificar plágio e ajustar o que for necessário.` },
          { heading: "Cuidados Essenciais", body: `Nunca deixes que a IA "invente" autores ou obras. Confere sempre os dados nas fontes reais. Não copies blocos de texto da IA sem reescrever e verificar originalidade.` },
        ],
        iaPrompts: [
          "Com base nestas anotações de leitura [cola as anotações], ajude-me a montar um parágrafo de referencial teórico.",
          "Sugira diferentes formas de explicar o conceito a seguir, mantendo o sentido mas com redações alternativas: [insere conceito].",
          "Liste perguntas que posso fazer à IA para organizar as ideias do meu referencial, sem pedir texto pronto."
        ],
        exercise: `Escolhe um conceito central do teu referencial teórico. Lê pelo menos uma fonte sobre ele, faz anotações e depois utiliza a IA para te ajudar a organizar um parágrafo. Em seguida, reescreve o parágrafo com a tua própria forma de expressão.`,
        checklist: [
          "Utilizei IA para apoiar, e não para substituir, a minha leitura.",
          "Reescrevi o texto em vez de copiar diretamente as respostas da IA.",
          "Estou atento à necessidade de verificar plágio antes de incorporar o texto final."
        ],
      },
      {
        id: "ec04",
        title: "Como Fazer Citação",
        shortDescription: "Aprender a usar citações diretas e indiretas, indicando corretamente as fontes.",
        lessonBody: `Citações mostram de onde vêm as ideias e permitem que o leitor localize as fontes utilizadas. Existem dois tipos principais:

• Citação direta – reprodução literal de parte do texto do autor, com indicação de autor, ano e página;
• Citação indireta – reescrita da ideia com as tuas palavras, mantendo a referência ao autor e ao ano.

Em ambos os casos, é essencial indicar claramente a autoria, seguindo o padrão de citação adotado pela tua instituição.`,
        videoScript: `Nesta aula, vamos aprender a citar autores, tanto de forma direta quanto indireta.

A citação direta ocorre quando reproduzimos exatamente as palavras do autor, entre aspas ou em recuo, sempre com indicação de página. A citação indireta ocorre quando explicamos a ideia com as nossas próprias palavras, mas mantendo o crédito ao autor.

Usar citações correctamente fortalece o teu trabalho e respeita a autoria intelectual.`,
        pdfTitle: "Aula EC04 – Citações em Trabalhos Académicos",
        pdfSections: [
          { heading: "Citação Direta", body: `Reprodução literal de parte de um texto, com indicação de autor, ano e página. Deve ser usada com moderação, apenas quando as palavras do autor forem realmente necessárias.` },
          { heading: "Citação Indireta", body: `Reprodução da ideia com as tuas próprias palavras, mencionando autor e ano. Ajuda a integrar o pensamento dos autores ao teu próprio texto, sem cópia.` },
        ],
        iaPrompts: [
          "Transforme a seguinte citação direta em citação indireta, mantendo o sentido: [cola a citação].",
          "Sugira formas de introduzir citações no texto académico, com frases de ligação adequadas.",
          "Explique a diferença entre citação direta longa e citação direta curta, de forma simples."
        ],
        exercise: `Seleciona um pequeno trecho de um livro ou artigo que tenhas lido e:

1. Escreve uma citação direta correta, com autor, ano e página;
2. Em seguida, escreve uma citação indireta da mesma ideia, com as tuas palavras.

Compara os dois formatos.`,
        checklist: [
          "Sei a diferença entre citação direta e indireta.",
          "Pratiquei ambos os tipos de citação.",
          "Estou mais seguro para indicar as fontes no meu texto."
        ],
      },
    ],
  },
  {
    id: "modulo-4",
    number: 4,
    title: "Plágio e Originalidade",
    description: "Neste módulo, o estudante aprende a identificar plágio, a humanizar textos gerados por IA e a utilizar ferramentas de verificação de originalidade de forma consciente.",
    icon: "🔍",
    color: "from-rose-500 to-red-600",
    lessons: [
      {
        id: "po01",
        title: "Identificando Textos Gerados com IA",
        shortDescription: "Entender características típicas de textos gerados por IA e como avaliá-los criticamente.",
        lessonBody: `Textos gerados por IA tendem a ter algumas características em comum, como estrutura muito organizada, uso repetitivo de certas expressões e ausência de detalhes específicos da realidade local.

Ferramentas como Smodin e GPTZero podem indicar probabilidades de um texto ter sido produzido por IA, mas não são perfeitas. O estudante deve usá-las como apoio, não como prova absoluta.

O mais importante é desenvolver senso crítico para analisar se o texto reflete a tua voz, o teu contexto e as fontes reais da pesquisa.`,
        videoScript: `Nesta aula, vamos falar sobre textos gerados por IA e como reconhecê-los.

Ferramentas especializadas podem apontar que um texto parece ter sido produzido por inteligência artificial, mas nenhuma delas é infalível. Por isso, é essencial que tu mesmo avalies se o texto carrega a tua voz, o teu contexto e as tuas leituras.

Vamos aprender a usar essas ferramentas com cuidado e, principalmente, a construir autenticidade no teu TCC.`,
        pdfTitle: "Aula PO01 – Textos Gerados por IA",
        pdfSections: [
          { heading: "Sinais Comuns", body: `Textos demasiado genéricos, sem referências específicas, com frases muito padronizadas e pouco vínculo com a realidade do estudo podem indicar forte dependência de IA.` },
          { heading: "Uso de Ferramentas", body: `Ferramentas de detecção de IA devem ser usadas como apoio. Os resultados precisam ser interpretados com prudência, sem conclusões automáticas.` },
        ],
        iaPrompts: [
          "Explique, de forma simples, por que ferramentas de detecção de IA não são 100% confiáveis.",
          "Sugira uma lista de verificações que posso fazer para saber se um texto representa realmente a minha voz.",
          "Ajude-me a adaptar este parágrafo genérico para a realidade específica do meu tema: [cola o parágrafo]."
        ],
        exercise: `Escolhe um parágrafo que consideres genérico demais. Reescreve-o acrescentando detalhes do teu contexto, do teu problema de pesquisa e das tuas leituras reais.`,
        checklist: [
          "Entendi limitações das ferramentas de detecção de IA.",
          "Identifiquei características de textos excessivamente genéricos.",
          "Reescrevi pelo menos um parágrafo para o aproximar da minha realidade."
        ],
      },
      {
        id: "po02",
        title: "Humanizando Textos Gerados por IA",
        shortDescription: "Transformar um rascunho gerado por IA em texto com a voz do estudante.",
        lessonBody: `Humanizar um texto gerado por IA não significa enganar sistemas, mas sim reescrever, ajustar e enriquecer o conteúdo com a tua perspectiva, contexto e leituras reais.

Passos úteis:
• Ler o texto gerado com espírito crítico;
• Verificar o que está de acordo com a tua pesquisa;
• Acrescentar exemplos, contextos e referências que conheces;
• Mudar a forma de expressão para se aproximar do teu estilo;
• Cortar o que for desnecessário ou incorreto.

Ao final, o texto deve refletir a tua compreensão, não apenas a resposta da ferramenta.`,
        videoScript: `Se já pediste à IA um rascunho de texto, esta aula vai ajudar-te a transformá-lo num conteúdo realmente teu.

Vamos ver como revisar, cortar, acrescentar exemplos, adaptar a linguagem e introduzir as tuas fontes, até que o texto deixe de parecer artificial e passe a refletir a tua voz acadêmica.

O objetivo é que uses a IA como ponto de partida, e não como ponto final da escrita.`,
        pdfTitle: "Aula PO02 – Humanização de Textos com Apoio de IA",
        pdfSections: [
          { heading: "Revisão Crítica", body: `Analisa o texto gerado, identifica exageros, repetições, ideias genéricas e partes que não dialogam com a tua realidade ou com o teu problema de pesquisa.` },
          { heading: "Enriquecimento com Experiência e Fontes Reais", body: `Acrescenta dados, exemplos, observações e referências que realmente consultaste, tornando o texto mais concreto e pessoal.` },
        ],
        iaPrompts: [
          "Mostre formas de adaptar um texto genérico de IA para a realidade de Moçambique, mantendo a ideia principal.",
          "Sugira um roteiro para eu revisar um texto gerado por IA antes de usar no meu TCC.",
          "Ajude-me a identificar partes problemáticas no seguinte texto: [cola o texto]."
        ],
        exercise: `Escolhe um texto curto produzido por IA. Com base na aula, marca em cores diferentes:

• O que podes manter;
• O que precisas adaptar;
• O que deves apagar.

Depois, reescreve o texto com a tua voz e as tuas fontes.`,
        checklist: [
          "Revi um texto gerado por IA com postura crítica.",
          "Adaptei e reescrevi o conteúdo para aproximar da minha voz.",
          "Percebi que a IA deve ser apenas ponto de partida, não texto final."
        ],
      },
      {
        id: "po03",
        title: "Entendendo o Plágio",
        shortDescription: "Compreender o que é plágio, por que é um problema e como evitá-lo.",
        lessonBody: `Plágio é o uso de ideias ou textos de outra pessoa sem o devido reconhecimento. Pode ocorrer por cópia direta sem citação, por paráfrases muito próximas do original ou por utilização de trabalhos alheios com o próprio nome.

Consequências do plágio podem incluir:
• Perda de credibilidade académica;
• Reprovação do trabalho;
• Sanções institucionais, dependendo do regulamento.

Evitar o plágio implica citar corretamente, reescrever com as próprias palavras e verificar a originalidade do texto antes da entrega.`,
        videoScript: `Nesta aula, vamos tratar de um tema sensível e essencial: o plágio.

Plágio não é apenas copiar "ctrl+c, ctrl+v". Ele também aparece quando usamos as ideias de outras pessoas sem citar, quando paráfrases ficam demasiado parecidas com o original ou quando recorremos a trabalhos prontos.

O objetivo é que compreendas por que o plágio é tão grave e como podes evitá-lo, usando boas práticas de citação e revisão.`,
        pdfTitle: "Aula PO03 – O que é Plágio e Como Evitar",
        pdfSections: [
          { heading: "Formas Comuns de Plágio", body: `Cópia literal sem citação, adaptação mínima de texto alheio, utilização de trabalhos prontos, omissão de autores em ideias centrais, entre outras práticas.` },
          { heading: "Boas Práticas Anti-Plágio", body: `Ler e compreender antes de escrever; utilizar citações diretas e indiretas corretamente; registar fontes ao longo do processo; usar ferramentas de verificação antes da entrega.` },
        ],
        iaPrompts: [
          "Explique, com exemplos simples, as diferenças entre plagiar e citar corretamente.",
          "Sugira uma lista de atitudes que um estudante deve adoptar para manter a integridade académica.",
          "Ajude-me a analisar se o seguinte parágrafo pode ser considerado plágio: [cola o parágrafo]."
        ],
        exercise: `Escreve, com as tuas palavras, uma pequena declaração de compromisso com a integridade académica, indicando o que farás para evitar plágio no teu TCC.`,
        checklist: [
          "Compreendi o conceito de plágio.",
          "Reconheço a importância da integridade académica.",
          "Assumi um compromisso pessoal de evitar plágio no meu TCC."
        ],
      },
    ],
  },
  {
    id: "modulo-5",
    number: 5,
    title: "Finalização e Entrega",
    description: "Últimos passos para formatação, revisão e preparação para a defesa.",
    icon: "🎓",
    color: "from-cyan-500 to-teal-600",
    lessons: [],
  },
];

// ============= RESOURCES =============

export const resources = [
  {
    id: "template-projeto",
    title: "Modelo de Projecto de Pesquisa",
    description: "Template completo seguindo normas moçambicanas",
    type: "document",
    format: "DOCX",
  },
  {
    id: "template-monografia",
    title: "Modelo de Monografia Completa",
    description: "Estrutura completa com todos os elementos",
    type: "document",
    format: "DOCX",
  },
  {
    id: "template-justificativa",
    title: "Modelo de Justificativa",
    description: "Exemplos e estrutura para justificativa",
    type: "document",
    format: "DOCX",
  },
  {
    id: "template-objectivos",
    title: "Modelo de Objectivos",
    description: "Fórmulas para objectivos gerais e específicos",
    type: "document",
    format: "DOCX",
  },
  {
    id: "template-metodologia",
    title: "Modelo de Metodologia",
    description: "Tipos de métodos e abordagens",
    type: "document",
    format: "DOCX",
  },
  {
    id: "template-referencial",
    title: "Modelo de Referencial Teórico",
    description: "Estrutura para organização teórica",
    type: "document",
    format: "DOCX",
  },
  {
    id: "template-slides",
    title: "Modelo de Apresentação",
    description: "Slides para defesa da monografia",
    type: "presentation",
    format: "PPTX",
  },
  {
    id: "checklist-30dias",
    title: "Checklist de 30 Dias",
    description: "Cronograma detalhado para 30 dias",
    type: "checklist",
    format: "PDF",
  },
  {
    id: "checklist-7dias",
    title: "Checklist de 7 Dias (Acelerado)",
    description: "Modo intensivo para finalização rápida",
    type: "checklist",
    format: "PDF",
  },
  {
    id: "prompt-pack",
    title: "Prompt Pack Completo",
    description: "Todos os prompts para usar com IA",
    type: "prompts",
    format: "PDF",
  },
];

// ============= SCHEDULES =============

export const schedule30Days = [
  { day: "1-5", task: "Tema, problema, objetivos, justificativa" },
  { day: "6-10", task: "Pesquisa de materiais e organização das fontes" },
  { day: "11-15", task: "Escrita da introdução e estrutura do referencial teórico" },
  { day: "16-20", task: "Escrita do referencial teórico" },
  { day: "21-24", task: "Metodologia e resultados esperados" },
  { day: "25-27", task: "Considerações finais" },
  { day: "28-30", task: "Revisão geral, verificação de plágio e formatação" },
];

export const schedule7Days = [
  { day: "1", task: "Tema, problema, objetivos e justificativa" },
  { day: "2", task: "Levantamento das principais fontes" },
  { day: "3", task: "Introdução e estrutura de capítulos" },
  { day: "4", task: "Escrita do referencial teórico" },
  { day: "5", task: "Metodologia e resultados esperados ou parciais" },
  { day: "6", task: "Considerações finais" },
  { day: "7", task: "Revisão, verificação de plágio e formatação" },
];
