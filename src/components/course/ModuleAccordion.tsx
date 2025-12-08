import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Module, Lesson } from "@/data/courseData";
import LessonCard from "./LessonCard";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ModuleAccordionProps {
  module: Module;
  isOpen: boolean;
  onToggle: () => void;
  onLessonToggle: (lessonId: string) => void;
}

const ModuleAccordion = ({ module, isOpen, onToggle, onLessonToggle }: ModuleAccordionProps) => {
  const completedCount = module.lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / module.lessons.length) * 100);
  const isComplete = completedCount === module.lessons.length;

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <div className="bg-card rounded-xl border border-border overflow-hidden card-hover">
        <CollapsibleTrigger className="w-full">
          <div className="p-5 flex items-center gap-4">
            {/* Module icon */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}
            >
              {module.icon}
            </div>

            {/* Module info */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Módulo {module.number}
                </span>
                {isComplete && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs">
                    <CheckCircle2 className="w-3 h-3" />
                    Concluído
                  </span>
                )}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-0.5">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{module.description}</p>

              {/* Progress bar */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-secondary/70 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground min-w-[4rem] text-right">
                  {completedCount}/{module.lessons.length} aulas
                </span>
              </div>
            </div>

            {/* Chevron */}
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="border-t border-border">
            <div className="p-4 space-y-1">
              {module.lessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  index={index}
                  onToggle={onLessonToggle}
                />
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default ModuleAccordion;
