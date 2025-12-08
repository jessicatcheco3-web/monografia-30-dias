import { useState } from "react";
import { modules as initialModules, Module } from "@/data/courseData";
import ModuleAccordion from "./ModuleAccordion";
import { BookOpen, Target, Award } from "lucide-react";

const CourseTab = () => {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [openModules, setOpenModules] = useState<string[]>(["modulo-1"]);

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleLesson = (lessonId: string) => {
    setModules((prev) =>
      prev.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === lessonId
            ? { ...lesson, completed: !lesson.completed }
            : lesson
        ),
      }))
    );
  };

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.completed).length,
    0
  );
  const progress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          Guia Principal
        </h1>
        <p className="text-muted-foreground">
          Siga os módulos em ordem para uma experiência de aprendizagem completa
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border border-border p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-heading font-bold text-foreground">
              {modules.length}
            </p>
            <p className="text-sm text-muted-foreground">Módulos</p>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Target className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <p className="text-2xl font-heading font-bold text-foreground">
              {completedLessons}/{totalLessons}
            </p>
            <p className="text-sm text-muted-foreground">Aulas concluídas</p>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-2xl font-heading font-bold text-foreground">
              {progress}%
            </p>
            <p className="text-sm text-muted-foreground">Progresso total</p>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {modules.map((module) => (
          <ModuleAccordion
            key={module.id}
            module={module}
            isOpen={openModules.includes(module.id)}
            onToggle={() => toggleModule(module.id)}
            onLessonToggle={toggleLesson}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseTab;
