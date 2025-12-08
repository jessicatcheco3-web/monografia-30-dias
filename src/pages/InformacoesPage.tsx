import { 
  HelpCircle, 
  MessageCircle, 
  Clock, 
  Shield, 
  AlertTriangle,
  Wrench,
  Map,
  Download,
  FileText,
  Bot,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InformacoesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Informações Gerais
        </h1>
        <p className="text-muted-foreground">
          Tudo o que precisa saber para aproveitar ao máximo o UFUTURO Licenciado.
        </p>
      </div>

      {/* Suporte ao Aluno */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <HelpCircle className="text-primary" size={24} />
            </div>
            Suporte ao Aluno
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="como-funciona">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-muted-foreground" />
                  Como funciona o suporte
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>
                  O suporte ao aluno está disponível para ajudar com dúvidas relacionadas ao conteúdo do curso, 
                  uso das ferramentas e orientações gerais sobre a elaboração da monografia.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Suporte via email disponível</li>
                  <li>Respostas em até 48 horas úteis</li>
                  <li>Orientações sobre conteúdo do curso</li>
                  <li>Ajuda com uso das ferramentas e modelos</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="enviar-duvidas">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-muted-foreground" />
                  Como enviar dúvidas
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>Para enviar suas dúvidas:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Identifique claramente o módulo e aula relacionados à dúvida</li>
                  <li>Descreva sua dúvida de forma clara e objectiva</li>
                  <li>Se aplicável, inclua capturas de ecrã ou exemplos</li>
                  <li>Envie através do canal de suporte designado</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tempo-resposta">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-muted-foreground" />
                  Tempo de resposta
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>
                  O tempo médio de resposta é de 24 a 48 horas úteis. Em períodos de maior volume, 
                  pode estender-se até 72 horas. Dúvidas enviadas aos fins de semana e feriados 
                  serão respondidas no próximo dia útil.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="regras-ia">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Shield size={18} className="text-muted-foreground" />
                  Regras de utilização da IA
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>A Inteligência Artificial deve ser usada de forma ética:</strong></p>
                <div className="space-y-2">
                  <p className="text-green-600 font-medium">✅ Usos permitidos:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Organizar e estruturar ideias</li>
                    <li>Corrigir gramática e ortografia</li>
                    <li>Gerar ideias iniciais para desenvolvimento</li>
                    <li>Parafrasear textos (sempre verificando e citando fonte)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-red-600 font-medium">❌ Usos proibidos:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Copiar texto de IA directamente</li>
                    <li>Apresentar conteúdo de IA como seu</li>
                    <li>Usar sem verificar a veracidade das informações</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="evitar-plagio">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={18} className="text-muted-foreground" />
                  Como evitar plágio
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Para garantir a originalidade do seu trabalho:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sempre cite as fontes que utiliza</li>
                  <li>Use aspas para citações directas</li>
                  <li>Parafraseie correctamente e cite a fonte original</li>
                  <li>Mantenha registro de todas as suas fontes</li>
                  <li>Use ferramentas de verificação de plágio</li>
                  <li>Desenvolva as ideias com suas próprias palavras</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ferramentas">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Wrench size={18} className="text-muted-foreground" />
                  Recomendações de ferramentas gratuitas
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <div className="grid gap-4">
                  <div>
                    <p className="font-medium text-foreground">Verificação de Plágio:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Plagiarism Detector</li>
                      <li>DupliChecker</li>
                      <li>SmallSEOTools</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Gestão de Referências:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Mendeley (gratuito)</li>
                      <li>Zotero (gratuito)</li>
                      <li>Google Scholar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Edição de Texto:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Microsoft Word</li>
                      <li>Google Docs (gratuito)</li>
                      <li>LibreOffice (gratuito)</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Guia de Navegação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Map className="text-accent" size={24} />
            </div>
            Guia de Navegação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="usar-app">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-muted-foreground" />
                  Explicação de como usar o aplicativo
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>O UFUTURO Licenciado está organizado em módulos sequenciais:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Menu lateral:</strong> Use para navegar entre módulos e aulas</li>
                  <li><strong>Páginas de módulo:</strong> Veja todas as aulas do módulo</li>
                  <li><strong>Páginas de aula:</strong> Conteúdo completo com checklists e materiais</li>
                  <li><strong>Botões de navegação:</strong> Use "Voltar", "Próxima Aula" e "Início"</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="caminho-estudo">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Map size={18} className="text-muted-foreground" />
                  Caminho sugerido de estudo (30 dias / 7 dias)
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground mb-2">📅 Caminho de 30 Dias</p>
                    <p className="text-sm">
                      Ideal para quem quer desenvolver a monografia com calma, 
                      aprofundando cada etapa. Recomendado para a maioria dos estudantes.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground mb-2">⚡ Caminho de 7 Dias</p>
                    <p className="text-sm">
                      Modo intensivo para quem tem prazo apertado. 
                      Exige dedicação integral e foco máximo.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="baixar-materiais">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Download size={18} className="text-muted-foreground" />
                  Como baixar os materiais
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>Para baixar os materiais disponíveis:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Acesse a secção "Recursos" no menu lateral</li>
                  <li>Navegue pelas categorias de materiais</li>
                  <li>Clique no botão "Baixar" do material desejado</li>
                  <li>O ficheiro será guardado no seu dispositivo</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usar-modelos">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-muted-foreground" />
                  Como usar os modelos disponíveis
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>Os modelos são documentos editáveis prontos para usar:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Baixe o modelo desejado</li>
                  <li>Abra no Word, Google Docs ou outro editor</li>
                  <li>Substitua os textos de exemplo pelo seu conteúdo</li>
                  <li>Mantenha a formatação já configurada</li>
                  <li>Adapte conforme as normas da sua instituição</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usar-ia-seguro">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Bot size={18} className="text-muted-foreground" />
                  Como utilizar a IA com segurança
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Passos para uso seguro de IA:</strong></p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Use os prompts prontos fornecidos no curso</li>
                  <li>Sempre verifique as informações geradas</li>
                  <li>Reescreva o conteúdo com suas palavras</li>
                  <li>Cite as fontes originais, não a IA</li>
                  <li>Passe o texto final por verificador de plágio</li>
                </ol>
                <p className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-800 dark:text-amber-200 text-sm">
                  ⚠️ Lembre-se: A IA é uma ferramenta de apoio, não um substituto para o seu trabalho intelectual.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
