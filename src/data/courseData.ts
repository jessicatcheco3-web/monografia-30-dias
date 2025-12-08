export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  hasVideo?: boolean;
  hasTemplate?: boolean;
  hasChecklist?: boolean;
  hasPrompts?: boolean;
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

export const modules: Module[] = [
  {
    id: "modulo-1",
    number: 1,
    title: "Boas-Vindas",
    description: "Introdução ao curso e orientações iniciais",
    icon: "👋",
    color: "from-blue-500 to-blue-600",
    lessons: [
      {
        id: "1-1",
        title: "Mensagem de Boas-Vindas",
        description: "Bem-vindo ao UFUTURO Licenciado! Conheça o seu caminho para o sucesso académico.",
        duration: "5 min",
        completed: false,
        hasVideo: true,
      },
      {
        id: "1-2",
        title: "O que é uma Monografia em Moçambique",
        description: "Entenda a estrutura e importância da monografia no contexto moçambicano.",
        duration: "10 min",
        completed: false,
        hasVideo: true,
      },
      {
        id: "1-3",
        title: "Processo Académico Nacional",
        description: "Como funciona o processo de defesa e aprovação nas universidades moçambicanas.",
        duration: "8 min",
        completed: false,
      },
      {
        id: "1-4",
        title: "Ética, Originalidade e Antiplágio",
        description: "Princípios fundamentais para um trabalho académico íntegro.",
        duration: "12 min",
        completed: false,
        hasChecklist: true,
      },
    ],
  },
  {
    id: "modulo-2",
    number: 2,
    title: "Primeiros Passos",
    description: "Fundamentos para iniciar a sua monografia",
    icon: "🚀",
    color: "from-amber-500 to-orange-500",
    lessons: [
      {
        id: "2-1",
        title: "Escolha do Tema",
        description: "Como escolher um tema relevante e viável para a sua área de estudo.",
        duration: "15 min",
        completed: false,
        hasPrompts: true,
        hasChecklist: true,
      },
      {
        id: "2-2",
        title: "Definição do Problema e Hipótese",
        description: "Aprenda a formular problemas científicos e hipóteses claras.",
        duration: "20 min",
        completed: false,
        hasTemplate: true,
        hasPrompts: true,
      },
      {
        id: "2-3",
        title: "Objectivos Geral e Específicos",
        description: "Como escrever objectivos claros e mensuráveis.",
        duration: "15 min",
        completed: false,
        hasTemplate: true,
      },
      {
        id: "2-4",
        title: "Justificativa",
        description: "Estruture uma justificativa convincente para o seu estudo.",
        duration: "12 min",
        completed: false,
        hasTemplate: true,
        hasPrompts: true,
      },
      {
        id: "2-5",
        title: "Estrutura do Projecto",
        description: "Modelo completo de projecto conforme normas moçambicanas.",
        duration: "25 min",
        completed: false,
        hasTemplate: true,
        hasChecklist: true,
      },
    ],
  },
  {
    id: "modulo-3",
    number: 3,
    title: "Elementos Textuais",
    description: "Construindo o corpo da sua monografia",
    icon: "📝",
    color: "from-emerald-500 to-green-600",
    lessons: [
      {
        id: "3-1",
        title: "Introdução",
        description: "Como escrever uma introdução impactante e bem estruturada.",
        duration: "18 min",
        completed: false,
        hasTemplate: true,
      },
      {
        id: "3-2",
        title: "Referencial Teórico",
        description: "Organização de fontes e construção do enquadramento teórico.",
        duration: "30 min",
        completed: false,
        hasTemplate: true,
        hasPrompts: true,
      },
      {
        id: "3-3",
        title: "Metodologia",
        description: "Tipos de métodos e como definir a abordagem do seu estudo.",
        duration: "25 min",
        completed: false,
        hasTemplate: true,
      },
      {
        id: "3-4",
        title: "Resultados e Discussão",
        description: "Apresentação e interpretação dos dados recolhidos.",
        duration: "22 min",
        completed: false,
        hasTemplate: true,
      },
      {
        id: "3-5",
        title: "Conclusão",
        description: "Como concluir retomando os objectivos e contribuições.",
        duration: "15 min",
        completed: false,
        hasTemplate: true,
      },
    ],
  },
  {
    id: "modulo-4",
    number: 4,
    title: "Escrita Científica",
    description: "Domine a arte da redação académica",
    icon: "✍️",
    color: "from-violet-500 to-purple-600",
    lessons: [
      {
        id: "4-1",
        title: "Como Escrever Academicamente",
        description: "Linguagem formal, verbos adequados e construção de parágrafos.",
        duration: "20 min",
        completed: false,
        hasChecklist: true,
      },
      {
        id: "4-2",
        title: "Como Citar e Referenciar",
        description: "Normas de citação e referências usadas em Moçambique.",
        duration: "25 min",
        completed: false,
        hasTemplate: true,
      },
      {
        id: "4-3",
        title: "Como Usar IA Correctamente",
        description: "Utilize inteligência artificial de forma ética e sem plágio.",
        duration: "18 min",
        completed: false,
        hasPrompts: true,
        hasChecklist: true,
      },
    ],
  },
  {
    id: "modulo-5",
    number: 5,
    title: "Verificando o Plágio",
    description: "Garanta a originalidade do seu trabalho",
    icon: "🔍",
    color: "from-rose-500 to-red-600",
    lessons: [
      {
        id: "5-1",
        title: "Ferramentas Gratuitas de Verificação",
        description: "Conheça as melhores ferramentas para verificar plágio.",
        duration: "12 min",
        completed: false,
        hasChecklist: true,
      },
      {
        id: "5-2",
        title: "Interpretando Resultados",
        description: "Como ler e entender a percentagem de plágio.",
        duration: "10 min",
        completed: false,
      },
      {
        id: "5-3",
        title: "Corrigindo Plágio com IA",
        description: "Técnicas éticas para reescrever e parafrasear conteúdo.",
        duration: "15 min",
        completed: false,
        hasPrompts: true,
        hasChecklist: true,
      },
    ],
  },
  {
    id: "modulo-6",
    number: 6,
    title: "Finalização e Entrega",
    description: "Últimos passos para a conclusão",
    icon: "🎓",
    color: "from-cyan-500 to-teal-600",
    lessons: [
      {
        id: "6-1",
        title: "Formatação Final",
        description: "Margens, fontes, espaçamento e sumário automático.",
        duration: "20 min",
        completed: false,
        hasTemplate: true,
        hasChecklist: true,
      },
      {
        id: "6-2",
        title: "Preparação do Documento Final",
        description: "Revisão geral e checklist de entrega.",
        duration: "15 min",
        completed: false,
        hasTemplate: true,
        hasChecklist: true,
      },
      {
        id: "6-3",
        title: "Entrega e Defesa",
        description: "Preparação de slides e dicas para a defesa oral.",
        duration: "25 min",
        completed: false,
        hasTemplate: true,
        hasVideo: true,
      },
    ],
  },
];

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

export const schedule30Days = [
  { day: "1-3", task: "Módulo 1: Boas-Vindas e Orientações" },
  { day: "4-7", task: "Módulo 2: Escolha do Tema e Primeiros Passos" },
  { day: "8-14", task: "Módulo 3: Elementos Textuais - Introdução e Referencial" },
  { day: "15-20", task: "Módulo 3: Metodologia, Resultados e Conclusão" },
  { day: "21-24", task: "Módulo 4: Escrita Científica e Citações" },
  { day: "25-27", task: "Módulo 5: Verificação de Plágio" },
  { day: "28-30", task: "Módulo 6: Formatação Final e Preparação para Defesa" },
];

export const schedule7Days = [
  { day: "1", task: "Tema, Problema, Objectivos e Estrutura" },
  { day: "2", task: "Introdução e Referencial Teórico" },
  { day: "3", task: "Metodologia" },
  { day: "4", task: "Resultados e Discussão" },
  { day: "5", task: "Conclusão e Revisão" },
  { day: "6", task: "Formatação e Verificação de Plágio" },
  { day: "7", task: "Preparação Final e Slides" },
];
