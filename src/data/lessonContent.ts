export interface LessonContent {
  id: string;
  content: string;
  checklist?: string[];
  templates?: { title: string; description: string }[];
  prompts?: { title: string; prompt: string }[];
}

export const lessonContents: Record<string, LessonContent> = {
  "1-1": {
    id: "1-1",
    content: `
## Bem-vindo ao UFUTURO Licenciado!

Parabéns por dar o primeiro passo rumo à conclusão da sua monografia! Este curso foi desenvolvido especificamente para estudantes moçambicanos, seguindo todas as normas académicas nacionais.

### O que você vai aprender:
- Como estruturar uma monografia completa
- Técnicas de escrita académica
- Uso ético de Inteligência Artificial
- Como garantir zero plágio
- Preparação para a defesa

### O seu caminho para o sucesso:
Você pode completar este curso em **30 dias** no ritmo normal, ou em **7 dias** no modo acelerado. Escolha o que melhor se adapta à sua situação.

### Compromisso com a qualidade:
Todo o conteúdo deste curso foi desenvolvido pensando nas normas académicas moçambicanas, evitando adaptações de outros contextos que não se aplicam à nossa realidade.
    `,
    checklist: [
      "Li e compreendi a estrutura do curso",
      "Defini se vou seguir o cronograma de 30 ou 7 dias",
      "Tenho um computador ou dispositivo para acompanhar as aulas",
      "Reservei tempo diário para dedicar ao curso"
    ]
  },
  "1-2": {
    id: "1-2",
    content: `
## O que é uma Monografia em Moçambique?

A monografia é o trabalho de conclusão de curso exigido para a obtenção do grau de licenciatura nas universidades moçambicanas. É um trabalho académico que demonstra a capacidade do estudante de realizar pesquisa científica.

### Características da Monografia Moçambicana:
- **Extensão típica**: 40 a 80 páginas (sem anexos)
- **Formatação**: Normas específicas de cada instituição, geralmente baseadas em normas internacionais adaptadas
- **Estrutura**: Elementos pré-textuais, textuais e pós-textuais
- **Originalidade**: Deve ser um trabalho inédito, sem plágio

### Elementos Obrigatórios:
1. Capa e folha de rosto
2. Dedicatória e agradecimentos (opcionais)
3. Resumo em português e inglês
4. Índice/Sumário
5. Introdução
6. Referencial teórico
7. Metodologia
8. Resultados e discussão
9. Conclusão
10. Referências bibliográficas
11. Anexos (se necessário)

### Importância da Monografia:
A monografia não é apenas um requisito burocrático. É a demonstração prática de que você domina os conhecimentos da sua área e é capaz de produzir conhecimento científico.
    `,
    checklist: [
      "Compreendi a estrutura básica de uma monografia",
      "Sei a extensão esperada do trabalho",
      "Entendi a importância da originalidade",
      "Conheço os elementos obrigatórios"
    ]
  },
  "1-3": {
    id: "1-3",
    content: `
## Processo Académico Nacional

Compreender o processo académico em Moçambique é fundamental para navegar com sucesso até à conclusão da sua monografia.

### Etapas do Processo:

#### 1. Escolha do Orientador
- Geralmente atribuído pela instituição ou escolhido pelo aluno
- O orientador guia o desenvolvimento do trabalho
- Reuniões periódicas são essenciais

#### 2. Aprovação do Projecto
- Antes de iniciar a monografia, é necessário aprovar um projecto de pesquisa
- O projecto define o que será estudado e como

#### 3. Desenvolvimento da Monografia
- Escrita dos capítulos conforme o projecto aprovado
- Revisões com o orientador
- Correções e melhorias contínuas

#### 4. Entrega e Avaliação
- Entrega do documento final conforme prazos da instituição
- Análise por banca examinadora
- Possíveis correcções antes da defesa

#### 5. Defesa Oral
- Apresentação perante banca examinadora
- Arguição e perguntas
- Deliberação e nota final

### Prazos Típicos:
- **Entrega do projecto**: 1-2 meses antes da monografia
- **Desenvolvimento**: 3-6 meses
- **Defesa**: Após aprovação pela banca

### Dicas Importantes:
- Mantenha comunicação constante com o orientador
- Respeite os prazos institucionais
- Guarde cópias de segurança do seu trabalho
    `,
    checklist: [
      "Sei quem é ou será o meu orientador",
      "Conheço os prazos da minha instituição",
      "Entendi as etapas do processo até à defesa",
      "Tenho um sistema de backup para os meus ficheiros"
    ]
  },
  "1-4": {
    id: "1-4",
    content: `
## Ética, Originalidade e Antiplágio

A integridade académica é o pilar fundamental de qualquer trabalho científico. Este módulo ensina como garantir que o seu trabalho seja 100% ético e original.

### O que é Plágio?
Plágio é a utilização de ideias, textos ou trabalhos de outras pessoas sem a devida atribuição. Em Moçambique e no mundo, o plágio é considerado uma falta grave que pode resultar em:
- Reprovação do trabalho
- Anulação do grau académico
- Processos disciplinares

### Tipos de Plágio:
1. **Plágio directo**: Copiar texto sem aspas e sem citação
2. **Plágio de paráfrase**: Reescrever sem citar a fonte
3. **Autoplágio**: Reutilizar o próprio trabalho anterior sem declarar
4. **Plágio de ideias**: Usar conceitos sem atribuição

### Como Evitar o Plágio:
- Sempre cite as fontes que utiliza
- Use aspas para citações directas
- Parafraseie correctamente e cite
- Mantenha registro de todas as suas fontes
- Use ferramentas de verificação de plágio

### Uso Ético de IA:
A Inteligência Artificial pode ser uma aliada, mas deve ser usada eticamente:
- Use IA para ajudar a organizar ideias, não para escrever por si
- Sempre reescreva e adapte o conteúdo gerado
- Verifique a veracidade das informações
- Nunca apresente texto de IA como seu sem reelaboração
    `,
    checklist: [
      "Compreendi o que constitui plágio",
      "Sei identificar os diferentes tipos de plágio",
      "Entendi como citar correctamente",
      "Sei usar IA de forma ética",
      "Comprometo-me a manter a integridade académica"
    ]
  },
  "2-1": {
    id: "2-1",
    content: `
## Escolha do Tema

A escolha do tema é uma das decisões mais importantes da sua jornada académica. Um bom tema deve ser relevante, viável e do seu interesse.

### Critérios para Escolher um Bom Tema:

#### 1. Relevância
- O tema contribui para a área de conhecimento?
- Existe uma lacuna que o seu estudo pode preencher?
- Tem aplicabilidade prática em Moçambique?

#### 2. Viabilidade
- É possível concluir no prazo disponível?
- Tem acesso aos dados e recursos necessários?
- O orientador tem conhecimento na área?

#### 3. Interesse Pessoal
- O tema desperta a sua curiosidade?
- Está relacionado com os seus objectivos profissionais?
- Consegue manter motivação durante meses de trabalho?

### Exemplos de Temas por Área:

**Educação:**
- Impacto das tecnologias no ensino básico em Moçambique
- Formação de professores no ensino secundário

**Economia:**
- Empreendedorismo jovem em Maputo
- Microcrédito e desenvolvimento rural

**Direito:**
- Direitos da mulher na legislação moçambicana
- Justiça tradicional e sistema jurídico formal

**Saúde:**
- Acesso a cuidados de saúde em zonas rurais
- Prevenção de doenças tropicais

### Passos para Definir o Tema:
1. Liste 5 áreas de interesse
2. Pesquise trabalhos existentes
3. Identifique lacunas ou problemas
4. Formule 3 possíveis temas
5. Discuta com o orientador
6. Escolha o tema final
    `,
    checklist: [
      "Listei as minhas áreas de interesse",
      "Pesquisei trabalhos existentes na área",
      "Identifiquei uma lacuna ou problema",
      "Formulei possíveis temas",
      "Discuti com o orientador",
      "Defini o tema final"
    ],
    prompts: [
      {
        title: "Gerar ideias de temas",
        prompt: "Sou estudante de [SUA ÁREA] em Moçambique. Gere 5 ideias de temas para monografia que sejam relevantes para o contexto moçambicano, considerando problemas actuais e lacunas de pesquisa na área."
      },
      {
        title: "Avaliar viabilidade do tema",
        prompt: "Analise a viabilidade do seguinte tema para uma monografia de licenciatura em Moçambique: [SEU TEMA]. Considere: disponibilidade de dados, prazo de 3-6 meses, e relevância para o contexto local."
      },
      {
        title: "Refinar o tema",
        prompt: "Tenho interesse em estudar [TEMA GERAL]. Ajude-me a delimitar e especificar este tema para uma monografia de licenciatura, tornando-o mais focado e pesquisável."
      }
    ]
  },
  "2-2": {
    id: "2-2",
    content: `
## Definição do Problema e Hipótese

O problema de pesquisa é a questão central que o seu estudo pretende responder. A hipótese é a sua resposta provisória a esse problema.

### O que é um Problema de Pesquisa?
É uma pergunta clara e específica que orienta toda a investigação. Deve ser:
- Formulada como pergunta
- Clara e objectiva
- Delimitada no tempo e espaço
- Passível de investigação científica

### Fórmula para Escrever o Problema:

**Estrutura básica:**
"Qual é [a relação/o impacto/a influência] de [variável X] em [variável Y] no contexto de [delimitação]?"

**Exemplos:**
- "Qual é o impacto da formação contínua de professores na qualidade do ensino primário em Maputo?"
- "Como as práticas de microcrédito influenciam o desenvolvimento de pequenos negócios em zonas rurais de Gaza?"

### O que é uma Hipótese?
É uma afirmação provisória que será testada pela pesquisa. Pode ser:
- **Hipótese afirmativa**: "A formação contínua melhora a qualidade do ensino"
- **Hipótese negativa**: "A formação contínua não influencia a qualidade do ensino"

### Relação Problema-Hipótese:
| Problema | Hipótese |
|----------|----------|
| Pergunta | Resposta provisória |
| Define o que investigar | Define o que se espera encontrar |
| Orienta a pesquisa | Será confirmada ou refutada |

### Dicas Importantes:
- O problema deve surgir do tema escolhido
- A hipótese deve ser testável
- Ambos devem ser claros e objectivos
    `,
    checklist: [
      "Formulei o problema como pergunta",
      "O problema é claro e específico",
      "Delimitei tempo e espaço",
      "Elaborei pelo menos uma hipótese",
      "A hipótese é testável",
      "Validei com o orientador"
    ],
    templates: [
      {
        title: "Modelo de Problema de Pesquisa",
        description: "Template com estrutura e exemplos para formular o seu problema de pesquisa"
      }
    ],
    prompts: [
      {
        title: "Formular problema de pesquisa",
        prompt: "Com base no tema [SEU TEMA], ajude-me a formular um problema de pesquisa claro e específico para uma monografia de licenciatura. O problema deve ser uma pergunta investigável."
      },
      {
        title: "Criar hipóteses",
        prompt: "Para o seguinte problema de pesquisa: [SEU PROBLEMA]. Gere 2-3 hipóteses possíveis que possam ser testadas através de pesquisa científica."
      }
    ]
  },
  "2-3": {
    id: "2-3",
    content: `
## Objectivos Geral e Específicos

Os objectivos definem o que você pretende alcançar com a sua pesquisa. São o mapa que guia todo o trabalho.

### Objectivo Geral
É a meta principal da pesquisa. Responde à pergunta: "O que quero alcançar com este estudo?"

**Características:**
- Um único objectivo geral
- Amplo, mas focado no tema
- Inicia com verbo no infinitivo
- Deve ser alcançável

**Verbos comuns:**
Analisar, Avaliar, Compreender, Investigar, Estudar, Examinar

**Exemplo:**
"Analisar o impacto da formação contínua de professores na qualidade do ensino primário em Maputo entre 2020 e 2023."

### Objectivos Específicos
São as etapas necessárias para alcançar o objectivo geral. Respondem à pergunta: "Que passos preciso dar?"

**Características:**
- 3 a 5 objectivos específicos
- Mais detalhados que o geral
- Cada um aborda um aspecto
- Juntos, levam ao objectivo geral

**Verbos comuns:**
Identificar, Descrever, Comparar, Classificar, Determinar, Verificar, Relacionar

**Exemplo:**
1. "Identificar os programas de formação contínua disponíveis para professores em Maputo"
2. "Descrever as metodologias utilizadas nas formações"
3. "Avaliar a percepção dos professores sobre as formações"
4. "Comparar o desempenho de alunos antes e depois das formações"

### Relação entre Objectivos:
O objectivo geral é a soma dos específicos. Se você alcançar todos os específicos, automaticamente alcança o geral.
    `,
    checklist: [
      "Defini um objectivo geral claro",
      "O objectivo geral está alinhado com o problema",
      "Elaborei 3-5 objectivos específicos",
      "Cada específico contribui para o geral",
      "Usei verbos adequados no infinitivo",
      "Os objectivos são mensuráveis"
    ],
    templates: [
      {
        title: "Modelo de Objectivos",
        description: "Template com fórmulas e exemplos para elaborar objectivos geral e específicos"
      }
    ]
  },
  "2-4": {
    id: "2-4",
    content: `
## Justificativa

A justificativa explica POR QUE o seu estudo é importante e merece ser realizado. É a defesa da relevância da sua pesquisa.

### O que Deve Conter a Justificativa?

#### 1. Relevância Científica
- Que contribuição o estudo traz para a área?
- Que lacuna preenche no conhecimento existente?

#### 2. Relevância Social
- Que benefícios práticos pode trazer?
- Como pode melhorar a vida das pessoas?

#### 3. Relevância Pessoal/Profissional
- Por que você se interessa pelo tema?
- Como se relaciona com a sua carreira?

### Estrutura da Justificativa:

**Parágrafo 1:** Contextualização do problema
"O sector da educação em Moçambique enfrenta desafios significativos..."

**Parágrafo 2:** Lacuna existente
"Apesar da importância do tema, poucos estudos abordam..."

**Parágrafo 3:** Contribuição do estudo
"Este estudo pretende contribuir para..."

**Parágrafo 4:** Benefícios esperados
"Os resultados poderão auxiliar..."

### Exemplo de Justificativa:
"A formação de professores é um factor determinante para a qualidade da educação. Em Moçambique, onde o sistema educativo ainda enfrenta desafios significativos, compreender o impacto das formações contínuas torna-se essencial. Poucos estudos têm analisado especificamente esta relação no contexto de Maputo. Assim, esta pesquisa pretende preencher esta lacuna, fornecendo dados que possam orientar políticas públicas e práticas pedagógicas."

### Extensão Recomendada:
1 a 2 páginas, dependendo das normas da instituição.
    `,
    checklist: [
      "Apresentei a relevância científica",
      "Demonstrei a relevância social",
      "Incluí motivação pessoal/profissional",
      "Identifiquei a lacuna que o estudo preenche",
      "Descrevi os benefícios esperados",
      "A justificativa está bem estruturada"
    ],
    templates: [
      {
        title: "Modelo de Justificativa",
        description: "Template com estrutura completa e exemplos de justificativa académica"
      }
    ],
    prompts: [
      {
        title: "Elaborar justificativa",
        prompt: "Ajude-me a elaborar uma justificativa para uma monografia sobre [SEU TEMA] no contexto de Moçambique. Inclua relevância científica, social e pessoal."
      },
      {
        title: "Identificar lacunas",
        prompt: "Que lacunas de pesquisa existem sobre [SEU TEMA] em Moçambique? Identifique áreas pouco exploradas que justifiquem um novo estudo."
      }
    ]
  },
  "2-5": {
    id: "2-5",
    content: `
## Estrutura do Projecto

O projecto de pesquisa é o documento que planeia toda a sua monografia. Deve ser aprovado antes de iniciar a escrita do trabalho final.

### Elementos do Projecto de Pesquisa:

#### 1. Elementos Pré-Textuais
- Capa
- Folha de rosto
- Sumário

#### 2. Elementos Textuais

**a) Introdução**
- Contextualização do tema
- Apresentação do problema
- Justificativa breve

**b) Problema de Pesquisa**
- Formulação clara da questão

**c) Hipóteses**
- Respostas provisórias ao problema

**d) Objectivos**
- Geral e específicos

**e) Justificativa**
- Relevância do estudo

**f) Referencial Teórico**
- Principais conceitos e autores
- Estado da arte

**g) Metodologia**
- Tipo de pesquisa
- Instrumentos de colecta
- Amostra/população
- Procedimentos de análise

**h) Cronograma**
- Etapas e prazos

**i) Orçamento** (se aplicável)
- Recursos necessários

#### 3. Elementos Pós-Textuais
- Referências bibliográficas

### Formatação Padrão:
- Fonte: Times New Roman ou Arial, tamanho 12
- Espaçamento: 1,5 entre linhas
- Margens: 3cm (esquerda e superior), 2cm (direita e inferior)
- Páginas numeradas

### Extensão:
Geralmente entre 10 e 20 páginas.
    `,
    checklist: [
      "Preparei a capa e folha de rosto",
      "Escrevi a introdução do projecto",
      "Formulei o problema claramente",
      "Defini as hipóteses",
      "Elaborei objectivos geral e específicos",
      "Escrevi a justificativa",
      "Iniciei o referencial teórico",
      "Defini a metodologia",
      "Criei o cronograma",
      "Organizei as referências"
    ],
    templates: [
      {
        title: "Modelo Completo de Projecto de Pesquisa",
        description: "Template editável com todos os elementos do projecto de pesquisa seguindo normas moçambicanas"
      }
    ]
  },
  "3-1": {
    id: "3-1",
    content: `
## Introdução

A introdução é a porta de entrada do seu trabalho. Deve apresentar o tema, contextualizar o problema e preparar o leitor para o que vem a seguir.

### Estrutura da Introdução:

#### Parágrafo 1: Contextualização Ampla
Apresente o tema de forma geral, situando-o no contexto mais amplo.
"A educação é um pilar fundamental para o desenvolvimento de qualquer sociedade..."

#### Parágrafo 2: Afunilamento
Vá do geral para o específico, aproximando-se do seu tema.
"Em Moçambique, o sistema educativo tem passado por transformações significativas..."

#### Parágrafo 3: Problema e Justificativa
Apresente o problema que motivou a pesquisa.
"Apesar dos avanços, ainda persistem desafios relacionados com..."

#### Parágrafo 4: Objectivos
Apresente brevemente os objectivos do estudo.
"Este estudo tem como objectivo analisar..."

#### Parágrafo 5: Estrutura do Trabalho
Descreva como o trabalho está organizado.
"O presente trabalho está estruturado em X capítulos..."

### Dicas para uma Boa Introdução:
- Seja claro e objectivo
- Evite jargões desnecessários
- Não antecipe resultados
- Mantenha coerência com o resto do trabalho
- Revise ao final, após concluir toda a monografia

### Extensão Recomendada:
2 a 4 páginas, dependendo das normas da instituição.

### Erros Comuns a Evitar:
- Introdução muito longa ou muito curta
- Falta de contextualização
- Não apresentar os objectivos
- Antecipar conclusões
    `,
    checklist: [
      "Contextualizei o tema de forma ampla",
      "Afunilei para o tema específico",
      "Apresentei o problema",
      "Incluí a justificativa resumida",
      "Mencionei os objectivos",
      "Descrevi a estrutura do trabalho"
    ],
    templates: [
      {
        title: "Modelo de Introdução",
        description: "Template com estrutura e exemplos para elaborar a introdução da monografia"
      }
    ]
  },
  "3-2": {
    id: "3-2",
    content: `
## Referencial Teórico

O referencial teórico (ou revisão de literatura) apresenta as bases científicas do seu estudo. É onde você demonstra conhecimento sobre o que já foi pesquisado.

### Objectivos do Referencial Teórico:
1. Demonstrar conhecimento da área
2. Situar o estudo no estado da arte
3. Definir conceitos-chave
4. Identificar lacunas que seu estudo preenche
5. Fundamentar suas análises

### Como Organizar:

#### Opção 1: Por Temas/Conceitos
Organize por grandes temas relacionados ao seu estudo.
- 2.1 Conceito X
- 2.2 Conceito Y
- 2.3 Relação entre X e Y

#### Opção 2: Cronológica
Apresente a evolução do conhecimento ao longo do tempo.

#### Opção 3: Por Autores
Agrupe as contribuições de diferentes autores.

### Como Citar Correctamente:

**Citação directa curta (até 3 linhas):**
Segundo Silva (2020, p. 45), "a educação é fundamental para o desenvolvimento".

**Citação directa longa (mais de 3 linhas):**
Deve ser destacada com recuo e fonte menor.

**Citação indirecta (paráfrase):**
A importância da educação para o desenvolvimento é destacada por diversos autores (SILVA, 2020; SANTOS, 2019).

### Fontes Recomendadas:
- Artigos científicos
- Livros e capítulos de livros
- Teses e dissertações
- Documentos oficiais
- Evite: Wikipédia, blogs, fontes não verificáveis

### Extensão:
Geralmente o maior capítulo, entre 15 e 30 páginas.
    `,
    checklist: [
      "Identifiquei os principais conceitos do meu tema",
      "Pesquisei artigos e livros relevantes",
      "Organizei o capítulo de forma lógica",
      "Citei todas as fontes correctamente",
      "Demonstrei conhecimento da área",
      "Identifiquei lacunas na literatura"
    ],
    templates: [
      {
        title: "Modelo de Referencial Teórico",
        description: "Template com estrutura para organização do referencial teórico"
      }
    ],
    prompts: [
      {
        title: "Organizar fontes",
        prompt: "Tenho as seguintes fontes sobre [SEU TEMA]: [LISTE AS FONTES]. Ajude-me a organizar estas fontes em subtemas para o meu referencial teórico."
      },
      {
        title: "Parafrasear sem plágio",
        prompt: "Preciso parafrasear o seguinte texto para o meu referencial teórico, mantendo o sentido mas usando minhas próprias palavras: [TEXTO ORIGINAL]. Crie uma paráfrase académica adequada."
      },
      {
        title: "Definir conceitos",
        prompt: "Ajude-me a elaborar uma definição académica para o conceito de [CONCEITO] no contexto de uma monografia sobre [SEU TEMA], com base em autores reconhecidos."
      }
    ]
  },
  "3-3": {
    id: "3-3",
    content: `
## Metodologia

A metodologia descreve COMO você realizou a pesquisa. É o caminho que seguiu para responder ao problema de pesquisa.

### Elementos da Metodologia:

#### 1. Tipo de Pesquisa

**Quanto à abordagem:**
- Qualitativa: busca compreender fenómenos em profundidade
- Quantitativa: busca medir e quantificar dados
- Mista: combina ambas

**Quanto aos objectivos:**
- Exploratória: conhecer melhor um tema
- Descritiva: descrever características
- Explicativa: explicar causas e relações

**Quanto aos procedimentos:**
- Bibliográfica: baseada em fontes escritas
- Documental: análise de documentos
- Estudo de caso: análise de caso específico
- Pesquisa de campo: colecta directa de dados

#### 2. População e Amostra
- Quem participou da pesquisa?
- Como foram seleccionados?
- Quantos participantes?

#### 3. Instrumentos de Colecta
- Questionário
- Entrevista
- Observação
- Análise documental

#### 4. Procedimentos de Colecta
- Como os dados foram recolhidos?
- Quando e onde?

#### 5. Análise de Dados
- Como os dados foram analisados?
- Que técnicas foram usadas?

### Exemplo de Metodologia:
"Esta pesquisa caracteriza-se como descritiva com abordagem qualitativa. Foi realizado um estudo de caso na Escola Secundária X de Maputo. A amostra foi composta por 20 professores seleccionados por conveniência. Os dados foram recolhidos através de entrevistas semi-estruturadas e analisados por meio de análise de conteúdo."
    `,
    checklist: [
      "Defini o tipo de pesquisa",
      "Especifiquei a abordagem (qualitativa/quantitativa)",
      "Descrevi a população e amostra",
      "Apresentei os instrumentos de colecta",
      "Expliquei os procedimentos",
      "Descrevi como analisei os dados"
    ],
    templates: [
      {
        title: "Modelo de Metodologia",
        description: "Template completo com todos os elementos da metodologia"
      }
    ]
  },
  "3-4": {
    id: "3-4",
    content: `
## Resultados e Discussão

Este capítulo apresenta os dados recolhidos e sua análise. É onde você mostra o que descobriu e interpreta os achados.

### Estrutura do Capítulo:

#### 1. Apresentação dos Resultados
Mostre os dados de forma clara e organizada:
- Use tabelas e gráficos quando apropriado
- Organize por categorias ou temas
- Seja objectivo na descrição

#### 2. Análise dos Resultados
Interprete o que os dados significam:
- O que os números/dados indicam?
- Que padrões emergiram?
- Que respostas encontrou?

#### 3. Discussão
Relacione os resultados com a literatura:
- Os resultados confirmam ou contradizem outros estudos?
- Como se relacionam com o referencial teórico?
- Que explicações podem ser dadas?

### Dicas para Apresentar Dados:

**Dados Quantitativos:**
- Use tabelas para dados numéricos
- Gráficos para visualização
- Descreva os principais achados

**Dados Qualitativos:**
- Organize por categorias temáticas
- Use citações dos participantes
- Interprete os significados

### Exemplo de Apresentação:
"Conforme apresentado na Tabela 1, 75% dos professores entrevistados indicaram que as formações contínuas contribuíram para a melhoria da sua prática pedagógica. Este resultado corrobora os achados de Silva (2020), que também identificou..."

### Erros a Evitar:
- Apresentar dados sem análise
- Não relacionar com a literatura
- Interpretar além do que os dados mostram
- Ignorar resultados contrários às hipóteses
    `,
    checklist: [
      "Apresentei todos os dados recolhidos",
      "Organizei os resultados de forma clara",
      "Analisei o significado dos dados",
      "Relacionei com o referencial teórico",
      "Discuti os achados principais",
      "Usei tabelas/gráficos quando apropriado"
    ],
    templates: [
      {
        title: "Modelo de Resultados e Discussão",
        description: "Template com exemplos de apresentação e discussão de resultados"
      }
    ]
  },
  "3-5": {
    id: "3-5",
    content: `
## Conclusão

A conclusão encerra o trabalho, retomando os principais pontos e apresentando as considerações finais.

### Estrutura da Conclusão:

#### 1. Retomada do Objectivo
Inicie lembrando o que o estudo se propôs a fazer.
"Este estudo teve como objectivo analisar..."

#### 2. Síntese dos Principais Resultados
Resuma os principais achados sem repetir detalhes.
"Os resultados demonstraram que..."

#### 3. Resposta ao Problema
Responda directamente à questão de pesquisa.
"Em resposta ao problema formulado, pode-se afirmar que..."

#### 4. Confirmação ou Refutação das Hipóteses
Indique se as hipóteses foram confirmadas.
"A hipótese de que... foi confirmada/parcialmente confirmada/refutada..."

#### 5. Contribuições do Estudo
Destaque a importância dos achados.
"Este estudo contribui para..."

#### 6. Limitações
Reconheça as limitações da pesquisa.
"Este estudo apresentou algumas limitações, como..."

#### 7. Sugestões para Futuras Pesquisas
Indique caminhos para novos estudos.
"Sugere-se que futuras pesquisas explorem..."

### Extensão:
2 a 4 páginas.

### Dicas:
- Não apresente dados novos
- Não faça citações (geralmente)
- Seja conciso e objectivo
- Mantenha coerência com o resto do trabalho
    `,
    checklist: [
      "Retomei o objectivo do estudo",
      "Sintetizei os principais resultados",
      "Respondi ao problema de pesquisa",
      "Verifiquei as hipóteses",
      "Destaquei as contribuições",
      "Reconheci as limitações",
      "Sugeri pesquisas futuras"
    ],
    templates: [
      {
        title: "Modelo de Conclusão",
        description: "Template com estrutura completa para elaborar a conclusão"
      }
    ]
  },
  "4-1": {
    id: "4-1",
    content: `
## Como Escrever Academicamente

A escrita académica segue normas específicas que a diferenciam de outros tipos de texto. Dominar essas normas é essencial para a sua monografia.

### Características da Escrita Académica:

#### 1. Objectividade
- Evite opiniões pessoais sem fundamentação
- Use evidências para sustentar afirmações
- Prefira: "Os dados indicam..." a "Eu acho que..."

#### 2. Impessoalidade
- Evite primeira pessoa do singular (eu)
- Prefira: terceira pessoa ou primeira do plural
- Exemplo: "Verificou-se que..." ou "Analisámos..."

#### 3. Clareza
- Use frases directas e claras
- Evite ambiguidades
- Defina termos técnicos

#### 4. Formalidade
- Evite gírias e expressões coloquiais
- Use vocabulário adequado à área
- Evite contrações

### Verbos Adequados:

| Em vez de | Use |
|-----------|-----|
| Falar sobre | Abordar, Discutir |
| Mostrar | Evidenciar, Demonstrar |
| Achar | Constatar, Verificar |
| Ver | Observar, Identificar |

### Construção de Parágrafos:
1. Frase-tópico: apresenta a ideia principal
2. Desenvolvimento: explica e fundamenta
3. Conclusão: fecha o parágrafo

### Transições entre Parágrafos:
- "Além disso...", "Por outro lado...", "Em contrapartida..."
- "Neste sentido...", "Conforme mencionado..."
- "Portanto...", "Assim...", "Dessa forma..."
    `,
    checklist: [
      "Mantive objectividade no texto",
      "Evitei primeira pessoa do singular",
      "Usei vocabulário formal e adequado",
      "Estruturei bem os parágrafos",
      "Usei transições adequadas",
      "Revisei a clareza do texto"
    ]
  },
  "4-2": {
    id: "4-2",
    content: `
## Como Citar e Referenciar

Citar correctamente é fundamental para evitar plágio e dar crédito aos autores. As normas variam, mas os princípios são semelhantes.

### Tipos de Citação:

#### Citação Directa Curta (até 3 linhas)
Mantém as palavras exactas do autor, entre aspas.
> Segundo Silva (2020, p. 45), "a educação é o pilar fundamental do desenvolvimento social".

#### Citação Directa Longa (mais de 3 linhas)
Destacada do texto, com recuo de 4cm, fonte menor, sem aspas.

#### Citação Indirecta (Paráfrase)
Você reescreve a ideia com suas palavras.
> A importância da educação para o desenvolvimento é amplamente reconhecida na literatura (SILVA, 2020).

### Sistema Autor-Data (mais comum):
- No texto: (APELIDO, ano, página)
- Exemplo: (SILVA, 2020, p. 45)

### Modelos de Referências:

**Livro:**
APELIDO, Nome. Título do livro. Cidade: Editora, ano.

**Artigo de revista:**
APELIDO, Nome. Título do artigo. Nome da Revista, v. X, n. X, p. XX-XX, ano.

**Trabalho académico:**
APELIDO, Nome. Título. Ano. Dissertação/Tese - Instituição, Cidade, ano.

**Site:**
AUTOR/INSTITUIÇÃO. Título. Disponível em: URL. Acesso em: dia mês ano.

### Ferramentas Úteis:
- Google Scholar (para encontrar citações formatadas)
- Mendeley, Zotero (gestores de referências gratuitos)
    `,
    checklist: [
      "Sei diferenciar citação directa e indirecta",
      "Entendi o sistema autor-data",
      "Conheço os modelos de referências",
      "Sei formatar diferentes tipos de fonte",
      "Organizei todas as referências usadas"
    ],
    templates: [
      {
        title: "Tabela de Modelos de Referências",
        description: "Guia completo com exemplos de formatação de referências bibliográficas"
      }
    ]
  },
  "4-3": {
    id: "4-3",
    content: `
## Como Usar IA Correctamente

A Inteligência Artificial pode ser uma aliada poderosa, mas deve ser usada de forma ética para evitar plágio e manter a integridade académica.

### Usos Éticos da IA:

#### ✅ Pode Usar Para:
- Organizar ideias e estruturar textos
- Corrigir gramática e ortografia
- Parafrasear textos (sempre verificando)
- Gerar ideias iniciais para desenvolver
- Explicar conceitos complexos
- Traduzir textos

#### ❌ Não Deve:
- Copiar texto de IA directamente como seu
- Usar sem verificar informações
- Apresentar conteúdo de IA sem reelaboração
- Confiar cegamente nas respostas

### Fluxo de Trabalho Ético:

1. **Gere ideias iniciais** com IA
2. **Pesquise e verifique** as informações
3. **Reescreva** com suas próprias palavras
4. **Cite fontes reais** (não cite a IA)
5. **Verifique plágio** ao final

### Como Verificar Conteúdo de IA:
- Confirme factos em fontes confiáveis
- Verifique se as citações existem
- Passe por verificador de plágio
- Revise a coerência do texto

### Prompts Úteis para IA:
Veja a secção de prompts abaixo para exemplos práticos de como usar IA de forma produtiva e ética.
    `,
    checklist: [
      "Entendi os usos éticos da IA",
      "Sei o que não devo fazer com IA",
      "Verifico todas as informações geradas",
      "Reescrevo o conteúdo com minhas palavras",
      "Passo por verificador de plágio"
    ],
    prompts: [
      {
        title: "Organizar ideias",
        prompt: "Tenho as seguintes ideias sobre [TEMA]: [SUAS IDEIAS]. Ajude-me a organizar estas ideias numa estrutura lógica para um capítulo académico."
      },
      {
        title: "Reescrever sem plágio",
        prompt: "Preciso reescrever o seguinte texto académico com minhas próprias palavras, mantendo o sentido original. Texto: [TEXTO]. Crie uma versão parafraseada que eu possa usar como base, lembrando que ainda preciso adaptar e citar a fonte original."
      },
      {
        title: "Verificar coerência",
        prompt: "Revise o seguinte texto quanto à coerência, clareza e fluxo lógico de ideias: [SEU TEXTO]. Aponte problemas e sugira melhorias."
      },
      {
        title: "Corrigir texto",
        prompt: "Corrija o seguinte texto quanto a erros gramaticais, ortográficos e de pontuação, mantendo o estilo académico: [SEU TEXTO]"
      }
    ]
  },
  "5-1": {
    id: "5-1",
    content: `
## Ferramentas Gratuitas de Verificação de Plágio

Verificar plágio é essencial antes de entregar o seu trabalho. Existem várias ferramentas gratuitas que podem ajudar.

### Ferramentas Recomendadas:

#### 1. Plagiarism Detector (plagiarismdetector.net)
- Gratuito com limite de palavras
- Interface simples
- Resultados rápidos

#### 2. DupliChecker (duplichecker.com)
- Gratuito até 1000 palavras por verificação
- Permite múltiplas verificações
- Destaca trechos similares

#### 3. Quetext (quetext.com)
- Versão gratuita disponível
- Análise detalhada
- Interface moderna

#### 4. SmallSEOTools (smallseotools.com/plagiarism-checker)
- Gratuito e sem registo
- Bom para verificações rápidas
- Vários idiomas

#### 5. Grammarly (grammarly.com)
- Verificação de plágio na versão premium
- Também corrige gramática
- Muito completo

### Como Usar:
1. Copie o texto a verificar
2. Cole na ferramenta
3. Aguarde a análise
4. Revise os trechos sinalizados
5. Corrija se necessário

### Dicas Importantes:
- Verifique capítulo por capítulo
- Faça múltiplas verificações
- Algumas ferramentas podem dar falsos positivos
- Textos próprios citados correctamente não são plágio
    `,
    checklist: [
      "Conheço as ferramentas de verificação",
      "Sei como usar as ferramentas",
      "Verifiquei cada capítulo do trabalho",
      "Corrigi os trechos sinalizados",
      "O trabalho está abaixo do limite de similaridade"
    ]
  },
  "5-2": {
    id: "5-2",
    content: `
## Interpretando Resultados de Verificação de Plágio

Entender o que significam os resultados é tão importante quanto fazer a verificação.

### O que Significa a Percentagem?

A percentagem indica a quantidade de texto similar a outras fontes encontradas online.

| Percentagem | Interpretação |
|-------------|---------------|
| 0-10% | Excelente, trabalho muito original |
| 10-20% | Aceitável, geralmente citações |
| 20-30% | Atenção, verificar trechos |
| 30%+ | Preocupante, necessita revisão |

### Importante Entender:
- A percentagem NÃO significa necessariamente plágio
- Citações directas correctamente formatadas aparecem como "similar"
- Termos técnicos comuns podem ser sinalizados
- O contexto é fundamental

### Tipos de Similaridade:

#### Similaridade Aceitável:
- Citações directas com aspas e referência
- Referências bibliográficas
- Termos técnicos padronizados
- Textos legais ou oficiais citados

#### Similaridade Problemática:
- Texto copiado sem citação
- Paráfrases muito próximas do original
- Ideias de outros sem atribuição
- Autoplágio não declarado

### Como Analisar os Resultados:
1. Veja a percentagem geral
2. Analise cada trecho sinalizado
3. Verifique se há citação adequada
4. Avalie se precisa reescrever
5. Faça nova verificação após correcções
    `,
    checklist: [
      "Entendo o que significa a percentagem",
      "Sei diferenciar similaridade aceitável e problemática",
      "Analisei cada trecho sinalizado",
      "Verifiquei se as citações estão correctas",
      "A percentagem está dentro do limite aceitável"
    ]
  },
  "5-3": {
    id: "5-3",
    content: `
## Corrigindo Plágio com IA

Quando a verificação indica similaridade problemática, é preciso corrigir. A IA pode ajudar, mas de forma ética.

### Estratégias de Correcção:

#### 1. Parafrasear
Reescreva o texto com suas palavras, mantendo o sentido.

**Original:** "A educação é fundamental para o desenvolvimento social."
**Parafraseado:** "O desenvolvimento da sociedade depende significativamente dos processos educativos."

#### 2. Citar Correctamente
Se quiser manter o texto original, transforme em citação.
> Segundo o autor, "a educação é fundamental para o desenvolvimento social" (AUTOR, ano, p. X).

#### 3. Sintetizar
Combine informações de várias fontes em um texto próprio.

#### 4. Aprofundar
Desenvolva mais a ideia, adicionando análise própria.

### Usando IA para Corrigir:

**Prompt para parafrasear:**
"Parafraseie o seguinte texto mantendo o sentido original, mas usando palavras completamente diferentes: [TEXTO]"

**Prompt para verificar:**
"Este texto é uma paráfrase adequada do original? Compare: Original: [TEXTO 1] Paráfrase: [TEXTO 2]"

### Fluxo de Correcção:
1. Identifique o trecho problemático
2. Decida: parafrasear ou citar?
3. Use IA como auxílio (se parafrasear)
4. Revise e adapte o resultado
5. Verifique novamente o plágio
6. Adicione a citação da fonte

### Atenção:
Mesmo paráfrases precisam de citação! A fonte original deve ser referenciada.
    `,
    checklist: [
      "Identifiquei os trechos a corrigir",
      "Decidi entre parafrasear ou citar",
      "Reescrevi com minhas palavras",
      "Adicionei as citações necessárias",
      "Verifiquei novamente o plágio",
      "O trabalho está dentro dos limites"
    ],
    prompts: [
      {
        title: "Parafrasear texto",
        prompt: "Parafraseie completamente o seguinte texto académico, mantendo o sentido original mas usando vocabulário e estrutura diferentes: [TEXTO ORIGINAL]"
      },
      {
        title: "Verificar paráfrase",
        prompt: "Compare os dois textos abaixo e verifique se a paráfrase é suficientemente diferente do original para evitar plágio: Original: [TEXTO 1] Paráfrase: [TEXTO 2]"
      },
      {
        title: "Sintetizar fontes",
        prompt: "Tenho informações de várias fontes sobre [TEMA]: Fonte 1: [INFO] Fonte 2: [INFO] Ajude-me a sintetizar estas informações num parágrafo coerente com minhas próprias palavras."
      }
    ]
  },
  "6-1": {
    id: "6-1",
    content: `
## Formatação Final

A formatação adequada é essencial para a apresentação profissional do seu trabalho. Siga as normas da sua instituição.

### Configurações Padrão:

#### Papel e Margens:
- Tamanho: A4
- Margem esquerda: 3 cm
- Margem direita: 2 cm
- Margem superior: 3 cm
- Margem inferior: 2 cm

#### Fonte:
- Tipo: Times New Roman ou Arial
- Tamanho: 12 para texto, 10 para citações longas
- Cor: Preta

#### Espaçamento:
- Entre linhas: 1,5
- Entre parágrafos: espaço adicional
- Citações longas: espaço simples

#### Parágrafo:
- Alinhamento: Justificado
- Recuo: 1,25 cm na primeira linha

### Numeração de Páginas:
- Posição: Canto superior direito
- Início: Primeira página do texto (introdução)
- Elementos pré-textuais: Contados mas não numerados

### Títulos e Subtítulos:
- Capítulos: Maiúsculas, negrito, tamanho 14
- Secções: Maiúsculas e minúsculas, negrito
- Subsecções: Maiúsculas e minúsculas, negrito ou itálico

### Sumário Automático no Word:
1. Aplique estilos (Título 1, Título 2, etc.)
2. Posicione o cursor onde quer o sumário
3. Referências > Sumário > Tabela Automática
4. Actualize com F9 ao final

### Lista de Verificação de Formatação:
Verifique cada item antes da entrega final.
    `,
    checklist: [
      "Configurei as margens correctamente",
      "Usei a fonte e tamanho adequados",
      "O espaçamento está correcto",
      "A numeração de páginas está certa",
      "Os títulos seguem o padrão",
      "Criei o sumário automático",
      "Verifiquei a formatação geral"
    ],
    templates: [
      {
        title: "Modelo de Monografia Formatada",
        description: "Template Word com todas as formatações pré-configuradas"
      }
    ]
  },
  "6-2": {
    id: "6-2",
    content: `
## Preparação do Documento Final

Antes da entrega, é crucial fazer uma revisão completa para garantir que tudo está em ordem.

### Lista de Verificação Completa:

#### Elementos Pré-Textuais:
- [ ] Capa com informações correctas
- [ ] Folha de rosto
- [ ] Dedicatória (se houver)
- [ ] Agradecimentos (se houver)
- [ ] Resumo em português
- [ ] Resumo em inglês (Abstract)
- [ ] Sumário actualizado
- [ ] Lista de figuras/tabelas (se houver)
- [ ] Lista de siglas (se houver)

#### Elementos Textuais:
- [ ] Introdução completa
- [ ] Referencial teórico bem estruturado
- [ ] Metodologia clara
- [ ] Resultados e discussão
- [ ] Conclusão que responde aos objectivos

#### Elementos Pós-Textuais:
- [ ] Referências bibliográficas completas
- [ ] Apêndices (se houver)
- [ ] Anexos (se houver)

#### Revisão Geral:
- [ ] Ortografia e gramática
- [ ] Coerência textual
- [ ] Citações verificadas
- [ ] Referências formatadas
- [ ] Plágio verificado
- [ ] Páginas numeradas
- [ ] Impressão teste

### Processo de Revisão:
1. Deixe o texto "descansar" 1-2 dias
2. Leia em voz alta para detectar erros
3. Peça a alguém para revisar
4. Verifique item por item na lista
5. Faça as correcções necessárias
6. Imprima uma cópia de teste
    `,
    checklist: [
      "Todos os elementos pré-textuais estão presentes",
      "Todos os capítulos textuais estão completos",
      "Referências e anexos estão organizados",
      "Revisei ortografia e gramática",
      "Verifiquei todas as citações",
      "Plágio está dentro do limite",
      "Formatação está correcta",
      "Fiz impressão de teste"
    ],
    templates: [
      {
        title: "Checklist Final Completo",
        description: "Lista de verificação detalhada para revisão antes da entrega"
      }
    ]
  },
  "6-3": {
    id: "6-3",
    content: `
## Entrega e Defesa

Chegou o momento final! Prepare-se para entregar o trabalho e defender perante a banca.

### Preparação da Entrega:

#### Formato de Entrega:
- Verifique os requisitos da instituição
- Geralmente: versão digital (PDF) + impressas encadernadas
- Número de cópias conforme exigido

#### Documentos Necessários:
- Monografia final
- Declaração de autoria
- Outros formulários da instituição

### Preparação dos Slides:

#### Estrutura da Apresentação (15-20 slides):
1. Slide de abertura (título, autor, orientador)
2. Introdução e contextualização
3. Problema e objectivos
4. Justificativa
5. Referencial teórico (resumo)
6. Metodologia
7. Resultados principais
8. Discussão
9. Conclusões
10. Slide final (agradecimentos)

#### Dicas para os Slides:
- Pouco texto, mais tópicos
- Use gráficos e imagens quando possível
- Cores sóbrias e legíveis
- Fonte grande (mínimo 24pt)

### Preparação para a Defesa:

#### Antes da Defesa:
- Ensaie a apresentação várias vezes
- Cronometre (geralmente 15-20 minutos)
- Prepare-se para perguntas
- Revise os pontos principais do trabalho

#### Durante a Defesa:
- Vista-se formalmente
- Fale com clareza e calma
- Mantenha contacto visual
- Responda às perguntas com segurança
- Se não souber, admita honestamente

#### Perguntas Comuns:
- Por que escolheu este tema?
- Quais as principais contribuições?
- Quais as limitações do estudo?
- O que faria diferente?
    `,
    checklist: [
      "Documento final está pronto",
      "Cópias impressas estão encadernadas",
      "Slides estão preparados",
      "Ensaiei a apresentação",
      "Cronometrei o tempo",
      "Preparei-me para perguntas",
      "Roupa formal está preparada",
      "Tenho backup dos materiais"
    ],
    templates: [
      {
        title: "Modelo de Apresentação",
        description: "Template PowerPoint para defesa da monografia"
      }
    ]
  }
};

export const getLessonContent = (lessonId: string): LessonContent | undefined => {
  return lessonContents[lessonId];
};

export const getNextLesson = (currentLessonId: string, modules: any[]): { moduleId: string; lessonId: string } | null => {
  for (let i = 0; i < modules.length; i++) {
    const module = modules[i];
    for (let j = 0; j < module.lessons.length; j++) {
      if (module.lessons[j].id === currentLessonId) {
        // Check if there's a next lesson in the same module
        if (j < module.lessons.length - 1) {
          return { moduleId: module.id, lessonId: module.lessons[j + 1].id };
        }
        // Check if there's a next module
        if (i < modules.length - 1) {
          return { moduleId: modules[i + 1].id, lessonId: modules[i + 1].lessons[0].id };
        }
        return null;
      }
    }
  }
  return null;
};

export const getPreviousLesson = (currentLessonId: string, modules: any[]): { moduleId: string; lessonId: string } | null => {
  for (let i = 0; i < modules.length; i++) {
    const module = modules[i];
    for (let j = 0; j < module.lessons.length; j++) {
      if (module.lessons[j].id === currentLessonId) {
        // Check if there's a previous lesson in the same module
        if (j > 0) {
          return { moduleId: module.id, lessonId: module.lessons[j - 1].id };
        }
        // Check if there's a previous module
        if (i > 0) {
          const prevModule = modules[i - 1];
          return { moduleId: prevModule.id, lessonId: prevModule.lessons[prevModule.lessons.length - 1].id };
        }
        return null;
      }
    }
  }
  return null;
};
