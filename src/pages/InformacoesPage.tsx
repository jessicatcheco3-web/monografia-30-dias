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
  { name: "Modelo de Monografia (PDF)", url: "/downloads/modelo-monografia.pdf" },
  { name: "Modelo de Apresentação (PPTX)", url: "/downloads/modelo-apresentacao.pptx" },
  { name: "Slides para Defesa / Apresentação (PPTX)", url: "/downloads/slides-defesa-tcc.pptx" },
  { name: "Modelo de Resumo (PDF)", url: "/downloads/modelo-resumo.pdf" },
  { name: "Modelo de Orçamento (PDF)", url: "/downloads/modelo-orcamento.pdf" },
  { name: "Guia de Referências Bibliográficas (PDF)", url: "/downloads/guia-referencias.pdf" }
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
