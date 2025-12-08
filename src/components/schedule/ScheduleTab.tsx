import { useState } from "react";
import { Calendar, Zap, Clock, CheckCircle2 } from "lucide-react";
import { schedule30Days, schedule7Days } from "@/data/courseData";
import { Button } from "@/components/ui/button";

const ScheduleTab = () => {
  const [activeSchedule, setActiveSchedule] = useState<"30" | "7">("30");

  const currentSchedule = activeSchedule === "30" ? schedule30Days : schedule7Days;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          Cronograma de Estudo
        </h1>
        <p className="text-muted-foreground">
          Escolha o plano que melhor se adapta ao seu tempo disponível
        </p>
      </div>

      {/* Schedule Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex bg-muted p-1 rounded-xl">
          <Button
            variant="ghost"
            onClick={() => setActiveSchedule("30")}
            className={`rounded-lg px-6 py-3 transition-all ${
              activeSchedule === "30"
                ? "bg-card text-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            30 Dias
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveSchedule("7")}
            className={`rounded-lg px-6 py-3 transition-all ${
              activeSchedule === "7"
                ? "bg-card text-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Zap className="w-4 h-4 mr-2" />
            7 Dias (Acelerado)
          </Button>
        </div>
      </div>

      {/* Schedule Info Card */}
      <div
        className={`rounded-xl p-6 ${
          activeSchedule === "30"
            ? "bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
            : "bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20"
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-xl ${
              activeSchedule === "30" ? "bg-primary/20" : "bg-secondary/20"
            }`}
          >
            {activeSchedule === "30" ? (
              <Clock className="w-6 h-6 text-primary" />
            ) : (
              <Zap className="w-6 h-6 text-secondary" />
            )}
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {activeSchedule === "30" ? "Plano Normal - 30 Dias" : "Plano Acelerado - 7 Dias"}
            </h3>
            <p className="text-muted-foreground mt-1">
              {activeSchedule === "30"
                ? "Ideal para quem deseja aprender com calma e profundidade. Dedique 1-2 horas por dia."
                : "Para quem tem urgência. Requer dedicação intensiva de 4-6 horas diárias."}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{currentSchedule.length}</strong> etapas
              </span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  {activeSchedule === "30" ? "1-2h" : "4-6h"}
                </strong>{" "}
                por dia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-4">
          {currentSchedule.map((item, index) => (
            <div
              key={index}
              className="relative pl-14 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 w-5 h-5 rounded-full border-2 ${
                  activeSchedule === "30"
                    ? "bg-primary/20 border-primary"
                    : "bg-secondary/20 border-secondary"
                } -translate-x-1/2`}
              >
                <div
                  className={`absolute inset-1 rounded-full ${
                    activeSchedule === "30" ? "bg-primary" : "bg-secondary"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="bg-card rounded-xl border border-border p-5 card-hover">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeSchedule === "30"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {activeSchedule === "30" ? `Dias ${item.day}` : `Dia ${item.day}`}
                  </span>
                </div>
                <p className="text-foreground font-medium">{item.task}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Completion */}
        <div className="relative pl-14 mt-4">
          <div className="absolute left-4 w-5 h-5 rounded-full bg-success -translate-x-1/2 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-success-foreground" />
          </div>
          <div className="bg-success/10 rounded-xl border border-success/20 p-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-heading font-semibold text-success">
                  Monografia Concluída!
                </p>
                <p className="text-sm text-muted-foreground">
                  Parabéns! Está pronto para a defesa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-muted/50 rounded-xl p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
          💡 Dicas para Cumprir o Cronograma
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">1</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Defina horários fixos</strong> para estudar 
              todos os dias, preferencialmente no mesmo período.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">2</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Elimine distracções</strong> durante o 
              tempo de estudo. Desligue notificações.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">3</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Use os modelos</strong> disponíveis para 
              acelerar a escrita e manter o padrão.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">4</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Marque as aulas</strong> como concluídas 
              para acompanhar o seu progresso real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTab;
