import { 
  HelpCircle, 
  MessageCircle, 
  Download,
  FileText,
  Shield,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const downloads = [
  { name: "Modelo de monografia (PDF)", url: "/downloads/modelo-monografia.pdf" },
  { name: "Modelo de apresentação (PowerPoint)", url: "/downloads/modelo-apresentacao.pptx" },
  { name: "Slides prontos para defesa (PPTX)", url: "/downloads/slides-defesa.pptx" },
  { name: "Modelo de resumo (PDF)", url: "/downloads/modelo-resumo.pdf" },
  { name: "Modelo de orçamento (PDF)", url: "/downloads/modelo-orcamento.pdf" },
  { name: "Guia de referências bibliográficas (PDF)", url: "/downloads/guia-referencias.pdf" }
];

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

      {/* Recursos e Downloads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Download className="text-primary" size={24} />
            </div>
            Recursos e Downloads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Nesta página encontrarás todos os materiais de apoio centralizados.
          </p>
          <div className="grid gap-3">
            {downloads.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-primary" />
                  <span className="font-medium text-foreground">{item.name}</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={item.url} download className="flex items-center gap-2">
                    <Download size={16} />
                    Baixar
                  </a>
                </Button>
              </div>
            ))}
          </div>
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
                  O suporte oficial do curso é oferecido exclusivamente no grupo de WhatsApp 
                  onde o estudante é adicionado após a confirmação do pagamento.
                </p>
                <p>
                  Não utilizamos email ou outros meios externos para suporte académico. O grupo serve para:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Esclarecer dúvidas relacionadas às aulas</li>
                  <li>Publicar avisos e actualizações do curso</li>
                  <li>Suporte motivacional e acompanhamento do progresso</li>
                </ul>
                <p className="mt-4 p-3 bg-muted rounded-lg text-sm">
                  Para manter o ambiente organizado, perguntas devem ser objectivas e relacionadas ao conteúdo da plataforma.
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
                  O curso UFUTURO Licenciado oferece uma garantia de satisfação baseada em resultados.
                </p>
                <p className="font-medium text-foreground">
                  O estudante tem direito à devolução integral do valor investido caso:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Tenha concluído 100% das aulas da plataforma</li>
                  <li>Tenha seguido o cronograma sugerido (30 dias ou 7 dias intensivo)</li>
                  <li>Tenha realizado todas as actividades práticas obrigatórias</li>
                  <li>Tenha preenchido os checklists de conclusão de cada módulo</li>
                  <li>Tenha utilizado os modelos, PDFs e orientações conforme recomendado</li>
                  <li>Comprove, através dos registos no painel de progresso, que executou cada etapa</li>
                </ol>
                <p>
                  Se, mesmo cumprindo integralmente o processo, o estudante não conseguir finalizar 
                  a sua monografia, poderá solicitar a devolução do valor no prazo de 7 dias após 
                  concluir a última aula.
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
                <p className="font-medium text-foreground">Como solicitar:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Enviar mensagem privada à administradora no WhatsApp do grupo oficial</li>
                  <li>Apresentar evidências de conclusão das aulas (sistema regista automaticamente)</li>
                  <li>Preencher o formulário de devolução enviado pelo suporte</li>
                </ul>
                
                <div className="p-4 bg-destructive/10 rounded-lg mt-4">
                  <p className="font-medium text-destructive mb-2">Não serão elegíveis:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Estudantes que não concluíram 100% das aulas</li>
                    <li>Estudantes que não utilizaram os materiais conforme orientado</li>
                    <li>Estudantes que abandonaram o cronograma ou deixaram de participar nos prazos</li>
                    <li>Casos sem registo de actividades dentro da plataforma</li>
                  </ul>
                </div>
                
                <p className="text-sm italic mt-4">
                  Esta política existe para garantir comprometimento, qualidade e resultados reais aos estudantes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
