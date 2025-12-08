import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Zap, 
  ArrowLeft, 
  Home,
  CheckCircle2
} from "lucide-react";
import { schedule30Days, schedule7Days } from "@/data/courseData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function CronogramaPage() {
  const [selectedSchedule, setSelectedSchedule] = useState<"30" | "7">("30");
  
  const schedule = selectedSchedule === "30" ? schedule30Days : schedule7Days;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Link>
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home size={16} />
            Início
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Cronograma de Estudos
        </h1>
        <p className="text-muted-foreground">
          Escolha o plano que melhor se adapta à sua disponibilidade e prazos.
        </p>
      </div>

      {/* Schedule Toggle */}
      <div className="flex gap-4">
        <Button
          variant={selectedSchedule === "30" ? "default" : "outline"}
          className="flex-1 h-auto py-6 flex-col gap-2"
          onClick={() => setSelectedSchedule("30")}
        >
          <Calendar size={24} />
          <span className="font-semibold">30 Dias</span>
          <span className="text-xs opacity-80">Ritmo normal</span>
        </Button>
        
        <Button
          variant={selectedSchedule === "7" ? "default" : "outline"}
          className="flex-1 h-auto py-6 flex-col gap-2"
          onClick={() => setSelectedSchedule("7")}
        >
          <Zap size={24} />
          <span className="font-semibold">7 Dias</span>
          <span className="text-xs opacity-80">Modo intensivo</span>
        </Button>
      </div>

      {/* Info Card */}
      <Card className={cn(
        "border-2",
        selectedSchedule === "30" ? "border-primary/20 bg-primary/5" : "border-accent/20 bg-accent/5"
      )}>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className={cn(
              "p-3 rounded-xl",
              selectedSchedule === "30" ? "bg-primary/10" : "bg-accent/10"
            )}>
              {selectedSchedule === "30" ? (
                <Calendar className="text-primary" size={24} />
              ) : (
                <Zap className="text-accent" size={24} />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {selectedSchedule === "30" ? "Plano de 30 Dias" : "Plano Intensivo de 7 Dias"}
              </h3>
              <p className="text-muted-foreground">
                {selectedSchedule === "30" 
                  ? "Ideal para quem quer desenvolver a monografia com calma, aprofundando cada etapa. Recomendado para a maioria dos estudantes."
                  : "Modo acelerado para quem tem prazo apertado. Exige dedicação integral e foco máximo. Prepare-se para dias intensivos de trabalho."
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div>
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Cronograma Detalhado
        </h2>
        
        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          {schedule.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6 pl-2">
              {/* Circle */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-primary">
                  {selectedSchedule === "30" ? index + 1 : item.day}
                </span>
              </div>
              
              {/* Content */}
              <Card className="flex-1">
                <CardContent className="py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="gap-1">
                      <Clock size={12} />
                      {selectedSchedule === "30" ? `Dias ${item.day}` : `Dia ${item.day}`}
                    </Badge>
                  </div>
                  <p className="text-foreground font-medium">{item.task}</p>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {/* End circle */}
          <div className="relative flex items-start gap-6 pl-2">
            <div className="relative z-10 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <CheckCircle2 className="text-white" size={16} />
            </div>
            <Card className="flex-1 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="py-4">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  🎓 Monografia Concluída!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Dicas para Manter o Ritmo</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
              <span className="text-muted-foreground">Reserve um horário fixo diário para trabalhar na monografia</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
              <span className="text-muted-foreground">Use os checklists de cada aula para acompanhar o progresso</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
              <span className="text-muted-foreground">Comunique-se regularmente com o seu orientador</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
              <span className="text-muted-foreground">Faça backups frequentes do seu trabalho</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
              <span className="text-muted-foreground">Descanse adequadamente para manter a produtividade</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Start CTA */}
      <div className="text-center">
        <Link to="/modulo/modulo-1">
          <Button size="lg" className="gap-2">
            Começar o Curso
            <Zap size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
