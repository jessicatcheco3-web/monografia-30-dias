import { useState } from "react";
import { 
  HelpCircle, 
  Navigation, 
  MessageCircle, 
  Clock, 
  Shield, 
  Lightbulb,
  BookOpen,
  Download,
  Bot,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InfoTab = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          Informações Gerais
        </h1>
        <p className="text-muted-foreground">
          Tudo o que precisa saber para aproveitar ao máximo o UFUTURO Licenciado
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Suporte ao Aluno */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Suporte ao Aluno
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="como-funciona" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                  Como funciona o suporte
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                O nosso suporte está disponível para esclarecer dúvidas sobre o conteúdo do curso, 
                uso da plataforma e orientações gerais sobre a monografia. Utilize o chat ou 
                envie as suas questões por email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="enviar-duvidas" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                  Como enviar dúvidas
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Pode enviar dúvidas através do formulário de contacto na plataforma, 
                ou directamente para o email de suporte. Descreva a sua dúvida de forma 
                clara e inclua o módulo ou aula a que se refere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tempo-resposta" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  Tempo de resposta
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                O tempo médio de resposta é de 24 a 48 horas em dias úteis. 
                Questões urgentes sobre prazos académicos são priorizadas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="regras-ia" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-muted-foreground" />
                  Regras de utilização da IA
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Use a IA como ferramenta de apoio, nunca como substituto do seu raciocínio</li>
                  <li>Sempre revise e reescreva o conteúdo gerado</li>
                  <li>Nunca copie textos directamente - parafrasei e adapte</li>
                  <li>Verifique todas as informações e citações</li>
                  <li>Mantenha a sua voz e estilo de escrita</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="evitar-plagio" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  Como evitar plágio
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Cite sempre as fontes originais</li>
                  <li>Use aspas para citações directas</li>
                  <li>Parafrasei com as suas próprias palavras</li>
                  <li>Verifique com ferramentas antiplágio antes da entrega</li>
                  <li>Mantenha um índice das suas fontes desde o início</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ferramentas" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-muted-foreground" />
                  Ferramentas gratuitas recomendadas
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    <span><strong>Zotero</strong> - Gestão de referências</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    <span><strong>Quetext</strong> - Verificação de plágio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    <span><strong>Google Scholar</strong> - Pesquisa académica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    <span><strong>Grammarly</strong> - Revisão ortográfica</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Guia de Navegação */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Navigation className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Guia de Navegação
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="como-usar" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  Como usar o aplicativo
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Comece pela aba "Início" para ver o seu progresso geral</li>
                  <li>Aceda ao "Guia Principal" para seguir as aulas em ordem</li>
                  <li>Baixe os modelos na secção "Recursos"</li>
                  <li>Siga o cronograma de 30 ou 7 dias</li>
                  <li>Complete os checklists de cada módulo</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="caminho-estudo" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  Caminho sugerido de estudo
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Modo Normal (30 dias):</p>
                    <p>Ideal para quem quer aprofundar cada etapa com calma. 
                    Dedique 1-2 horas por dia ao curso.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Modo Acelerado (7 dias):</p>
                    <p>Para quem tem pouco tempo. Requer dedicação intensiva 
                    de 4-6 horas diárias.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="baixar-materiais" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-muted-foreground" />
                  Como baixar os materiais
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Aceda à aba "Recursos" para encontrar todos os modelos editáveis 
                disponíveis. Clique no botão de download para guardar os ficheiros 
                no seu dispositivo. Os formatos disponíveis são DOCX, PPTX e PDF.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usar-modelos" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  Como usar os modelos
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <ol className="list-decimal list-inside space-y-1">
                  <li>Baixe o modelo desejado</li>
                  <li>Abra no Microsoft Word ou Google Docs</li>
                  <li>Substitua os textos de exemplo pelo seu conteúdo</li>
                  <li>Mantenha a formatação original</li>
                  <li>Ajuste conforme as normas da sua instituição</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usar-ia" className="border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-muted-foreground" />
                  Como utilizar a IA com segurança
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p><strong>Usos recomendados:</strong></p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Gerar ideias e brainstorming</li>
                    <li>Melhorar a estrutura de parágrafos</li>
                    <li>Verificar coerência textual</li>
                    <li>Sugerir sinónimos e melhorias</li>
                  </ul>
                  <p><strong>Nunca use para:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Copiar textos inteiros sem reescrita</li>
                    <li>Gerar citações ou referências (podem ser falsas)</li>
                    <li>Substituir a sua análise crítica</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-border p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
          💡 Dicas Rápidas para o Sucesso
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4">
            <p className="font-medium text-foreground mb-1">Consistência</p>
            <p className="text-sm text-muted-foreground">
              Dedique pelo menos 1 hora por dia ao curso. Pequenos passos consistentes 
              levam a grandes resultados.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="font-medium text-foreground mb-1">Organização</p>
            <p className="text-sm text-muted-foreground">
              Crie pastas organizadas para guardar as suas pesquisas, referências 
              e versões do trabalho.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="font-medium text-foreground mb-1">Revisão</p>
            <p className="text-sm text-muted-foreground">
              Nunca entregue sem revisar. Peça a colegas para lerem o seu trabalho 
              antes da submissão final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
