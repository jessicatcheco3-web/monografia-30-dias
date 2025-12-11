import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Home, 
  CheckCircle2, 
  Circle, 
  TrendingUp,
  Trophy,
  Target
} from "lucide-react";
import { modules } from "@/data/courseData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/hooks/useProgress";
import ProgressRing from "@/components/dashboard/ProgressRing";

export default function EvolucaoPage() {
  const { getTotalProgress, getModuleProgress, isLessonCompleted } = useProgress();
  const totalProgress = getTotalProgress();

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

      {/* Page Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-primary-foreground" size={32} />
            <Badge variant="secondary">Acompanhamento</Badge>
          </div>
          <h1 className="font-display text-3xl font-bold text-primary-foreground mb-2">
            Evolução no Curso
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Acompanhe o seu progresso ao longo dos módulos e aulas
          </p>
        </div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Overall Progress Card */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="text-primary" size={24} />
            Progresso Total
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <ProgressRing 
                progress={totalProgress.percentage} 
                size={140} 
                strokeWidth={12}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-4xl font-bold text-foreground mb-2">
                {totalProgress.percentage}%
              </div>
              <p className="text-muted-foreground mb-4">
                {totalProgress.completed} de {totalProgress.total} aulas concluídas
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {totalProgress.percentage === 100 ? (
                  <Badge className="bg-green-500">
                    <Trophy size={12} className="mr-1" />
                    Curso Completo!
                  </Badge>
                ) : totalProgress.percentage >= 75 ? (
                  <Badge className="bg-green-500/80">Quase lá! Continue assim!</Badge>
                ) : totalProgress.percentage >= 50 ? (
                  <Badge className="bg-yellow-500">Metade do caminho!</Badge>
                ) : totalProgress.percentage >= 25 ? (
                  <Badge className="bg-blue-500">Bom progresso!</Badge>
                ) : (
                  <Badge variant="secondary">Continue estudando!</Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modules Progress */}
      <div>
        <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Target className="text-primary" size={20} />
          Progresso por Módulo
        </h2>
        
        <div className="space-y-4">
          {modules.map((module) => {
            const moduleProgress = getModuleProgress(module.id);
            const isCompleted = moduleProgress.percentage === 100;
            
            return (
              <Card 
                key={module.id} 
                className={`transition-all ${isCompleted ? 'border-green-500/50 bg-green-500/5' : ''}`}
              >
                <CardContent className="py-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {module.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Módulo {module.number}</p>
                          <h3 className="font-semibold text-foreground">
                            {module.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {moduleProgress.percentage}%
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {moduleProgress.completed}/{moduleProgress.total} aulas
                          </p>
                        </div>
                      </div>
                      
                      <Progress 
                        value={moduleProgress.percentage} 
                        className={`h-2 ${isCompleted ? 'bg-green-500/20' : ''}`} 
                      />
                      
                      {/* Lessons List */}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {module.lessons.map((lesson, index) => {
                          const lessonCompleted = isLessonCompleted(module.id, lesson.id);
                          return (
                            <Link 
                              key={lesson.id}
                              to={`/modulo/${module.id}/aula/${lesson.id}`}
                              className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors hover:bg-muted/50 ${
                                lessonCompleted ? 'text-green-600' : 'text-muted-foreground'
                              }`}
                            >
                              {lessonCompleted ? (
                                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                              ) : (
                                <Circle size={16} className="flex-shrink-0" />
                              )}
                              <span className={`truncate ${lessonCompleted ? 'line-through' : ''}`}>
                                {index + 1}. {lesson.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="py-8 text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            {totalProgress.percentage === 100 
              ? "Parabéns! Você completou o curso!" 
              : "Continue a sua jornada!"}
          </h3>
          <p className="text-muted-foreground mb-4">
            {totalProgress.percentage === 100 
              ? "Você está pronto para defender a sua monografia com excelência."
              : "Cada aula concluída te aproxima mais do sucesso na sua monografia."}
          </p>
          {totalProgress.percentage < 100 && (
            <Link to="/modulo/modulo-1">
              <Button size="lg" className="gap-2">
                Continuar Estudando
                <TrendingUp size={18} />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
