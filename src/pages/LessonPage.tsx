import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Home, 
  CheckCircle2,
  FileText,
  Sparkles,
  Copy,
  Check,
  BookOpen
} from "lucide-react";
import { useState } from "react";
import { modules } from "@/data/courseData";
import { getLessonContent, getNextLesson, getPreviousLesson } from "@/data/lessonContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const lessonData = moduleId && lessonId ? getLessonContent(moduleId, lessonId) : null;
  const nextLesson = moduleId && lessonId ? getNextLesson(moduleId, lessonId) : null;
  const prevLesson = moduleId && lessonId ? getPreviousLesson(moduleId, lessonId) : null;

  if (!lessonData) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">Aula não encontrada</h1>
        <Link to="/">
          <Button>Voltar ao Início</Button>
        </Link>
      </div>
    );
  }

  const { module, lesson } = lessonData;
  const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);

  const copyPrompt = (prompt: string, index: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(String(index));
    toast.success("Prompt copiado para a área de transferência!");
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const toggleCheckItem = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-4">
        <Link to={`/modulo/${moduleId}`}>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft size={16} />
            Voltar ao Módulo
          </Button>
        </Link>
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home size={16} />
            Início
          </Button>
        </Link>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Início</Link>
        <span>/</span>
        <Link to={`/modulo/${moduleId}`} className="hover:text-primary">
          Módulo {module.number}: {module.title}
        </Link>
        <span>/</span>
        <span className="text-foreground">Aula {lessonIndex + 1}</span>
      </div>

      {/* Lesson Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{module.icon}</span>
          <Badge variant="secondary">
            Módulo {module.number} • Aula {lessonIndex + 1}
          </Badge>
        </div>
        
        <h1 className="font-display text-3xl font-bold text-foreground">
          {lesson.title}
        </h1>
        
        <p className="text-lg text-muted-foreground">
          {lesson.shortDescription}
        </p>
        
        <div className="flex flex-wrap items-center gap-3">
          {lesson.pdfSections.length > 0 && (
            <Badge variant="outline">
              <FileText size={12} className="mr-1" />
              PDF Disponível
            </Badge>
          )}
          {lesson.checklist.length > 0 && (
            <Badge variant="outline">
              <CheckCircle2 size={12} className="mr-1" />
              Checklist
            </Badge>
          )}
          {lesson.iaPrompts.length > 0 && (
            <Badge variant="outline">
              <Sparkles size={12} className="mr-1" />
              Prompts IA
            </Badge>
          )}
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="text-primary" size={20} />
            Conteúdo da Aula
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
              {lesson.lessonBody}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise */}
      {lesson.exercise && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="text-primary" size={20} />
              Exercício Prático
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-line text-foreground">
              {lesson.exercise}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Checklist */}
      {lesson.checklist.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="text-primary" size={20} />
              Checklist da Aula
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lesson.checklist.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => toggleCheckItem(item)}
                >
                  <Checkbox 
                    checked={checkedItems[item] || false}
                    onCheckedChange={() => toggleCheckItem(item)}
                  />
                  <span className={`text-sm ${checkedItems[item] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Prompts */}
      {lesson.iaPrompts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary" size={20} />
              Prompts para IA
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Clique para copiar e use com ChatGPT, Claude ou outra IA
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lesson.iaPrompts.map((prompt, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/50 rounded-lg border border-border"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-medium text-foreground">Prompt {index + 1}</h4>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="shrink-0"
                      onClick={() => copyPrompt(prompt, index)}
                    >
                      {copiedPrompt === String(index) ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono bg-background p-3 rounded border">
                    {prompt}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t">
        {prevLesson ? (
          <Link to={`/modulo/${prevLesson.moduleId}/aula/${prevLesson.lessonId}`}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft size={16} />
              Aula Anterior
            </Button>
          </Link>
        ) : (
          <div />
        )}

        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <Home size={16} />
            Início
          </Button>
        </Link>

        {nextLesson ? (
          <Link to={`/modulo/${nextLesson.moduleId}/aula/${nextLesson.lessonId}`}>
            <Button className="gap-2">
              Próxima Aula
              <ArrowRight size={16} />
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button className="gap-2">
              Concluir Módulo
              <CheckCircle2 size={16} />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
