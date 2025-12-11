import { 
  HelpCircle, 
  MessageCircle, 
  Shield,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
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

      {/* Abordagem Integrada dos Materiais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="text-primary" size={24} />
            </div>
            Sobre os Materiais do Curso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="materiais-integrados">
            <AccordionItem value="materiais-integrados">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-muted-foreground" />
                  Por que não há modelos para download?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  Optámos por <strong>sintetizar toda a informação directamente no conteúdo das aulas</strong>, 
                  em vez de disponibilizar múltiplos PDFs e modelos para download.
                </p>
                
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-medium text-foreground mb-2">
                    💡 O nosso objectivo: que termines com sucesso!
                  </p>
                  <p className="text-sm">
                    Muitos estudantes acumulam dezenas de materiais que nunca chegam a usar. 
                    Por isso, organizámos tudo de forma prática e acessível dentro das aulas.
                  </p>
                </div>

                <p className="font-medium text-foreground">
                  O que encontras integrado em cada aula:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Conteúdo dos modelos</strong> – Toda a estrutura e exemplos que estariam em PDFs estão explicados passo a passo nas aulas</li>
                  <li><strong>Prompts prontos</strong> – Os prompts de IA para cada secção da monografia estão incluídos directamente no conteúdo relevante</li>
                  <li><strong>Checklists de monitorização</strong> – Cada módulo inclui uma checklist para acompanhares o teu desempenho e garantires que não saltas nenhuma etapa</li>
                </ul>

                <p className="text-sm italic mt-4 p-3 bg-muted rounded-lg">
                  Desta forma, tens tudo o que precisas num só lugar, sem precisar de alternar entre ficheiros. 
                  Basta seguir as aulas na ordem e a tua monografia vai ganhando forma naturalmente.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Uso Ético da IA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <AlertTriangle className="text-amber-600" size={24} />
            </div>
            Uso Ético da Inteligência Artificial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="uso-etico">
            <AccordionItem value="uso-etico">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-muted-foreground" />
                  Como usar a IA de forma responsável
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <p className="font-medium text-foreground mb-2">
                    ⚠️ NUNCA faças copy-paste directamente do ChatGPT ou outra IA!
                  </p>
                  <p className="text-sm">
                    Copiar e colar texto gerado por IA pode ser detectado como plágio e resultar 
                    na reprovação da tua monografia.
                  </p>
                </div>

                <p className="font-medium text-foreground">
                  Passos obrigatórios ao usar IA na tua escrita:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><strong>Gera o conteúdo</strong> – Usa os prompts fornecidos no curso para obter uma base inicial</li>
                  <li><strong>Lê e compreende</strong> – Certifica-te de que entendes cada frase e conceito</li>
                  <li><strong>Reescreve com as tuas palavras</strong> – Reformula completamente, mantendo o sentido</li>
                  <li><strong>Verifica a coerência</strong> – Assegura que o texto flui naturalmente e faz sentido no contexto</li>
                  <li><strong>Confirma os factos</strong> – Verifica datas, nomes, estatísticas e referências</li>
                  <li><strong>Passa pelo detector de IA</strong> – Usa ferramentas como GPTZero ou Originality.ai</li>
                  <li><strong>Humaniza o texto</strong> – Se necessário, ajusta para que pareça natural e autêntico</li>
                </ol>

                <div className="p-4 bg-muted rounded-lg mt-4">
                  <p className="font-medium text-foreground mb-2">Ferramentas recomendadas:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Detecção de IA:</strong> GPTZero, Originality.ai, Copyleaks</li>
                    <li><strong>Verificação de plágio:</strong> Turnitin, Plagiarism Detector</li>
                    <li><strong>Humanização:</strong> Undetectable AI, Quillbot (paráfrase)</li>
                  </ul>
                </div>

                <p className="text-sm italic mt-4">
                  A IA é uma ferramenta de apoio, não um substituto do teu trabalho intelectual. 
                  O objectivo é aprender e desenvolver competências, não apenas entregar um documento.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Suporte ao Estudante */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <MessageCircle className="text-accent" size={24} />
            </div>
            Suporte ao Estudante
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="suporte-whatsapp">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-muted-foreground" />
                  Como funciona o suporte
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>
                  O suporte oficial do curso UFUTURO Licenciado é prestado exclusivamente através do grupo de WhatsApp.
                </p>
                <p>
                  O estudante é adicionado ao grupo <strong>APÓS</strong> a confirmação do pagamento e <strong>ANTES</strong> de receber o acesso à plataforma.
                </p>
                <p className="font-medium text-foreground">No grupo de WhatsApp:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Podes colocar dúvidas sobre as aulas e os materiais</li>
                  <li>Recebes avisos importantes e lembretes de cronograma</li>
                  <li>Tens acompanhamento e motivação ao longo do percurso</li>
                </ul>
                <p className="mt-4 p-3 bg-muted rounded-lg text-sm">
                  Não utilizamos email ou outros canais externos para suporte académico rotineiro.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Política de Garantia e Devolução */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Shield className="text-green-600" size={24} />
            </div>
            Política de Garantia e Devolução
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="garantia">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Shield size={18} className="text-muted-foreground" />
                  Condições para devolução
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p>
                  O curso UFUTURO Licenciado oferece uma garantia baseada em compromisso e resultado.
                </p>
                <p className="font-medium text-foreground">
                  O estudante poderá solicitar a devolução do valor investido se:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Concluir 100% das aulas da plataforma</li>
                  <li>Seguir o cronograma sugerido (30 dias ou 7 dias intensivo), registando o progresso</li>
                  <li>Realizar todas as actividades práticas obrigatórias de cada módulo</li>
                  <li>Utilizar os materiais de apoio (PDFs, modelos e guias) conforme as orientações</li>
                  <li>Preencher os checklists de conclusão ao longo do curso</li>
                  <li>Comprovar, por meio do painel de progresso e dos registos na plataforma, que cumpriu todas as etapas</li>
                </ol>
                <p>
                  Se, mesmo assim, o estudante não conseguir concluir a monografia, poderá solicitar 
                  a devolução no prazo de 7 dias após a conclusão da última aula.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="como-solicitar">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <ExternalLink size={18} className="text-muted-foreground" />
                  Como solicitar a devolução
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4">
                <p className="font-medium text-foreground">Como solicitar a devolução:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Contactar a administradora através de mensagem privada no grupo de WhatsApp oficial</li>
                  <li>Explicar a situação e anexar os comprovativos de conclusão (print do progresso, checklists, etc.)</li>
                  <li>Aguardar a análise do pedido e a resposta formal</li>
                </ul>
                
                <div className="p-4 bg-destructive/10 rounded-lg mt-4">
                  <p className="font-medium text-destructive mb-2">Não serão elegíveis pedidos de devolução de:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Estudantes que não tenham concluído todas as aulas</li>
                    <li>Estudantes que não tenham seguido o cronograma ou as actividades recomendadas</li>
                    <li>Estudantes sem registos de progresso na plataforma</li>
                    <li>Estudantes que abandonaram o curso no meio, sem cumprir as etapas propostas</li>
                  </ul>
                </div>
                
                <p className="text-sm italic mt-4">
                  Esta política existe para proteger os estudantes comprometidos e garantir que o curso entregue valor real, com responsabilidade de ambas as partes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
