import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Info, 
  BookOpen, 
  FileText,
  Calendar,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { LogOut } from "lucide-react";
import { modules } from "@/data/courseData";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/auth/AuthContext";

const menuItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Evolução no Curso", url: "/evolucao", icon: TrendingUp },
  { title: "Informações Gerais", url: "/informacoes", icon: Info },
  { title: "Recursos", url: "/recursos", icon: FileText },
  { title: "Cronograma", url: "/cronograma", icon: Calendar },
];

export function AppSidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const { isLessonCompleted } = useProgress();
  const { auth, logout } = useAuth();

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isModuleActive = (moduleId: string) => location.pathname.includes(`/modulo/${moduleId}`);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg shadow-lg lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-card border-r border-border transition-transform duration-300 overflow-hidden",
          "w-72 lg:w-80",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <div>
                <h1 className="font-display text-lg font-bold text-foreground">UFUTURO</h1>
                <p className="text-xs text-muted-foreground">Licenciado</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {/* Main menu items */}
            {menuItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive(item.url)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}

            {/* Divider */}
            <div className="py-2">
              <div className="h-px bg-border" />
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2 px-4">
                Guia Principal
              </p>
            </div>

            {/* Modules */}
            {modules.map((module) => (
              <div key={module.id}>
                <button
                  onClick={() => toggleModule(module.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    isModuleActive(module.id)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span className="text-xl">{module.icon}</span>
                  <span className="flex-1 font-medium text-sm">
                    Módulo {module.number}: {module.title}
                  </span>
                  {expandedModules.includes(module.id) ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {/* Lessons */}
                {expandedModules.includes(module.id) && (
                  <div className="ml-8 mt-1 space-y-1">
                    <Link
                      to={`/modulo/${module.id}`}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors",
                        isActive(`/modulo/${module.id}`)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <BookOpen size={14} />
                      <span>Visão Geral</span>
                    </Link>
                    {module.lessons.map((lesson, index) => {
                      const lessonCompleted = isLessonCompleted(module.id, lesson.id);
                      return (
                      <Link
                        key={lesson.id}
                        to={`/modulo/${module.id}/aula/${lesson.id}`}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors",
                          isActive(`/modulo/${module.id}/aula/${lesson.id}`)
                            ? "bg-primary text-primary-foreground"
                            : lessonCompleted
                            ? "text-green-600 hover:bg-muted"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {lessonCompleted ? (
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs flex-shrink-0">
                            {index + 1}
                          </span>
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </Link>
                    );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-3">
            {auth.user && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground truncate">
                  {auth.user.username}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  <LogOut size={16} />
                  Sair
                </button>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center">
              © 2024 UFUTURO Licenciado
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
