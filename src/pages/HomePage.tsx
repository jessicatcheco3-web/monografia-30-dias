import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  ArrowRight,
  Download,
  Calendar
} from "lucide-react";
import { modules } from "@/data/courseData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function HomePage() {
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 lg:p-12">
        <div className="relative z-10">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Bem-vindo ao UFUTURO Licenciado
          </h1>
          <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl">
            Complete a sua monografia em 30 dias com orientação passo a passo, 
            modelos editáveis e apoio de Inteligência Artificial.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/modulo/modulo-1">
              <Button size="lg" variant="secondary" className="gap-2">
                Começar Agora
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/informacoes">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <BookOpen className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{modules.length}</p>
                <p className="text-sm text-muted-foreground">Módulos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Trophy className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalLessons}</p>
                <p className="text-sm text-muted-foreground">Aulas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Clock className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">30</p>
                <p className="text-sm text-muted-foreground">Dias</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Download className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Modelos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Módulos do Curso</h2>
          <Link to="/cronograma" className="text-primary hover:underline text-sm flex items-center gap-1">
            <Calendar size={16} />
            Ver cronograma
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link key={module.id} to={`/modulo/${module.id}`}>
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{module.icon}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {module.lessons.length} aulas
                    </span>
                  </div>
                  <CardTitle className="mt-4">
                    <span className="text-primary font-medium text-sm">Módulo {module.number}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium text-foreground">0%</span>
                  </div>
                  <Progress value={0} className="mt-2 h-2" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/recursos">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <Download className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Recursos e Downloads</h3>
                  <p className="text-muted-foreground text-sm">
                    Modelos, templates, checklists e prompts prontos para usar
                  </p>
                </div>
                <ArrowRight className="text-muted-foreground ml-auto" />
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/cronograma">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-xl">
                  <Calendar className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Cronograma de Estudos</h3>
                  <p className="text-muted-foreground text-sm">
                    Planos de 30 dias e 7 dias para concluir sua monografia
                  </p>
                </div>
                <ArrowRight className="text-muted-foreground ml-auto" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
