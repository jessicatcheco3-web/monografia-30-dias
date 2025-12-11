import { Link } from "react-router-dom";
import { BookOpen, Clock, Target, ArrowRight, Calendar, FileText, CheckCircle2 } from "lucide-react";
import { modules } from "@/data/courseData";
import { getAllLessonsCount } from "@/data/lessonContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import StatsCard from "./StatsCard";
import { useProgress } from "@/hooks/useProgress";

const Dashboard = () => {
  const totalLessons = getAllLessonsCount();
  const totalModules = modules.length;
  const { getTotalProgress, getModuleProgress } = useProgress();
  const totalProgress = getTotalProgress();

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
          <div className="flex flex-wrap gap-4">
            <Link to="/modulo/modulo-1">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/cronograma">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Ver Cronograma
                <Calendar className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
      </div>

      {/* Progress Section */}
      <Card className="border-primary/20">
        <CardContent className="py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Seu Progresso</h3>
                <p className="text-sm text-muted-foreground">
                  {totalProgress.completed} de {totalProgress.total} aulas concluídas
                </p>
              </div>
            </div>
            <div className="flex-1">
              <Progress value={totalProgress.percentage} className="h-3" />
            </div>
            <div className="text-2xl font-bold text-primary">
              {totalProgress.percentage}%
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total de Módulos"
          value={totalModules}
          subtitle="Módulos disponíveis"
          icon={BookOpen}
          color="primary"
        />
        <StatsCard
          title="Aulas Concluídas"
          value={totalProgress.completed}
          subtitle={`de ${totalLessons} aulas`}
          icon={CheckCircle2}
          color="success"
        />
        <StatsCard
          title="Plano Normal"
          value="30"
          subtitle="Dias para conclusão"
          icon={Clock}
          color="warning"
        />
        <StatsCard
          title="Plano Intensivo"
          value="7"
          subtitle="Dias acelerados"
          icon={Target}
          color="secondary"
        />
      </div>

      {/* Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Módulos do Curso
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module, index) => {
            const moduleProgress = getModuleProgress(module.id);
            return (
            <Link key={module.id} to={`/modulo/${module.id}`}>
              <div
                className="module-card opacity-0 animate-fade-in cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Módulo {module.number}</p>
                    <h3 className="font-heading font-semibold text-foreground">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={moduleProgress.percentage} className="h-1.5 flex-1" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {moduleProgress.completed}/{moduleProgress.total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/recursos">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <CardContent className="py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  📚
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Recursos e Modelos</h3>
                  <p className="text-muted-foreground text-sm">
                    Baixe templates, checklists e prompts
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/informacoes">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <CardContent className="py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  ℹ️
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Informações Gerais</h3>
                  <p className="text-muted-foreground text-sm">
                    Suporte, guia de navegação e dicas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
