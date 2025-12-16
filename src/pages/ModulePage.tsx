import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Home, FileText, CheckSquare, Sparkles, Play, CheckCircle2 } from "lucide-react";
import { modules } from "@/data/courseData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/useProgress";

export default function ModulePage() {
  const { moduleId } = useParams();
  const module = modules.find(m => m.id === moduleId);
  const { isLessonCompleted, getModuleProgress } = useProgress();
  
  const progress = moduleId ? getModuleProgress(moduleId) : { completed: 0, total: 0, percentage: 0 };

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">Módulo não encontrado</h1>
        <Link to="/inicio">
          <Button>Voltar ao Início</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Link to="/inicio">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Link>
        <Link to="/inicio">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home size={16} />
            Início
          </Button>
        </Link>
      </div>

      {/* Module Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8">
        <div className="relative z-10">
          <span className="text-5xl mb-4 block">{module.icon}</span>
          <Badge variant="secondary" className="mb-3">
            Módulo {module.number}
          </Badge>
          <h1 className="font-display text-3xl font-bold text-primary-foreground mb-2">
            {module.title}
          </h1>
          <p className="text-primary-foreground/90 text-lg mb-4">
            {module.description}
          </p>
          <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1">
              <Play size={16} />
              {module.lessons.length} aulas
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} />
              {progress.completed}/{progress.total} concluídas
            </span>
          </div>
          {progress.total > 0 && (
            <div className="mt-4">
              <Progress value={progress.percentage} className="h-2 bg-primary-foreground/20" />
              <p className="text-xs text-primary-foreground/70 mt-1">{progress.percentage}% concluído</p>
            </div>
          )}
        </div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Lessons List */}
      <div>
        <h2 className="font-display text-xl font-bold text-foreground mb-4">
          Aulas deste Módulo
        </h2>
        
        {module.lessons.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Conteúdo em breve...</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {module.lessons.map((lesson, index) => {
              const lessonCompleted = isLessonCompleted(module.id, lesson.id);
              return (
              <Link key={lesson.id} to={`/modulo/${module.id}/aula/${lesson.id}`}>
                <Card className={`hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer group ${lessonCompleted ? 'border-green-500/50 bg-green-500/5' : ''}`}>
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${lessonCompleted ? 'bg-green-500/20' : 'bg-primary/10'}`}>
                        {lessonCompleted ? (
                          <CheckCircle2 className="text-green-500" size={24} />
                        ) : (
                          <span className="text-primary font-bold text-lg">{index + 1}</span>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {lesson.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {lesson.shortDescription}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          {lesson.pdfSections.length > 0 && (
                            <Badge variant="outline" className="text-xs">
                              <FileText size={12} className="mr-1" />
                              PDF
                            </Badge>
                          )}
                          {lesson.checklist.length > 0 && (
                            <Badge variant="outline" className="text-xs">
                              <CheckSquare size={12} className="mr-1" />
                              Checklist
                            </Badge>
                          )}
                          {lesson.iaPrompts.length > 0 && (
                            <Badge variant="outline" className="text-xs">
                              <Sparkles size={12} className="mr-1" />
                              Prompts
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {lessonCompleted ? 'Rever' : 'Abrir'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
            })}
          </div>
        )}
      </div>

      {/* Start Button */}
      {module.lessons.length > 0 && (
        <div className="flex justify-center">
          <Link to={`/modulo/${module.id}/aula/${module.lessons[0].id}`}>
            <Button size="lg" className="gap-2">
              Começar Módulo
              <Play size={18} />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
