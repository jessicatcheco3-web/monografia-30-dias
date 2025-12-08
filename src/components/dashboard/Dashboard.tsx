import { BookOpen, Clock, CheckCircle2, Target, ArrowRight } from "lucide-react";
import ProgressRing from "./ProgressRing";
import StatsCard from "./StatsCard";
import { modules } from "@/data/courseData";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.completed).length,
    0
  );
  const progress = Math.round((completedLessons / totalLessons) * 100);

  const nextLesson = modules
    .flatMap((m) => m.lessons.map((l) => ({ ...l, moduleName: m.title })))
    .find((l) => !l.completed);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
        <div className="relative z-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Bem-vindo ao UFUTURO Licenciado
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mb-6">
            O seu guia completo para elaboração de monografia em Moçambique. 
            Complete o curso em 30 dias e apresente um trabalho de excelência.
          </p>
          <Button 
            onClick={() => onNavigate("course")}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Continuar Aprendendo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Ring Card */}
        <div className="lg:col-span-1 bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center card-hover">
          <ProgressRing progress={progress} />
          <p className="mt-4 text-sm text-muted-foreground text-center">
            {completedLessons} de {totalLessons} aulas concluídas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <StatsCard
            title="Total de Módulos"
            value={modules.length}
            subtitle="Módulos disponíveis"
            icon={BookOpen}
            color="primary"
          />
          <StatsCard
            title="Aulas Concluídas"
            value={completedLessons}
            subtitle={`De ${totalLessons} aulas`}
            icon={CheckCircle2}
            color="success"
          />
          <StatsCard
            title="Tempo Estimado"
            value="30"
            subtitle="Dias para conclusão"
            icon={Clock}
            color="warning"
          />
          <StatsCard
            title="Próximo Objectivo"
            value="Módulo 1"
            subtitle={nextLesson?.title || "Parabéns!"}
            icon={Target}
            color="secondary"
          />
        </div>
      </div>

      {/* Quick Access Modules */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Módulos do Curso
          </h2>
          <Button variant="ghost" onClick={() => onNavigate("course")} className="text-sm">
            Ver todos
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.slice(0, 6).map((module, index) => {
            const moduleProgress = Math.round(
              (module.lessons.filter((l) => l.completed).length / module.lessons.length) * 100
            );
            return (
              <div
                key={module.id}
                className={`module-card opacity-0 animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onNavigate("course")}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Módulo {module.number}</p>
                    <h3 className="font-heading font-semibold text-foreground truncate">
                      {module.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-secondary rounded-full transition-all duration-500"
                          style={{ width: `${moduleProgress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{moduleProgress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
