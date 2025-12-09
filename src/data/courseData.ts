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
    description: "Construindo o corpo da sua monografia com introdução, referencial teórico, metodologia, resultados e conclusão.",
    icon: "📝",
    color: "from-emerald-500 to-green-600",
    lessons: [],
  },
  {
    id: "modulo-3",
    number: 3,
    title: "Escrita Científica",
    description: "Domine a arte da redação académica com linguagem formal e citações correctas.",
    icon: "✍️",
    color: "from-violet-500 to-purple-600",
    lessons: [],
  },
  {
    id: "modulo-4",
    number: 4,
    title: "Verificação de Plágio",
    description: "Garanta a originalidade do seu trabalho com ferramentas e técnicas antiplágio.",
    icon: "🔍",
    color: "from-rose-500 to-red-600",
    lessons: [],
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
