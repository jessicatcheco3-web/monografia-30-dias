import { CheckCircle2, Circle, Play, FileText, ListChecks, Sparkles, Clock } from "lucide-react";
import { Lesson } from "@/data/courseData";

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  onToggle: (id: string) => void;
}

const LessonCard = ({ lesson, index, onToggle }: LessonCardProps) => {
  return (
    <div
      className={`lesson-item group ${
        lesson.completed ? "bg-success/5" : ""
      }`}
      onClick={() => onToggle(lesson.id)}
    >
      {/* Status indicator */}
      <button
        className="flex-shrink-0 transition-transform group-hover:scale-110"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(lesson.id);
        }}
      >
        {lesson.completed ? (
          <CheckCircle2 className="w-6 h-6 text-success" />
        ) : (
          <Circle className="w-6 h-6 text-muted-foreground/50 group-hover:text-primary" />
        )}
      </button>

      {/* Lesson number */}
      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
        {index + 1}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className={`font-medium transition-colors ${
            lesson.completed ? "text-muted-foreground line-through" : "text-foreground"
          }`}
        >
          {lesson.title}
        </h4>
        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
          {lesson.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {lesson.duration}
          </span>
          {lesson.hasVideo && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-info/10 text-info text-xs">
              <Play className="w-3 h-3" />
              Vídeo
            </span>
          )}
          {lesson.hasTemplate && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
              <FileText className="w-3 h-3" />
              Modelo
            </span>
          )}
          {lesson.hasChecklist && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs">
              <ListChecks className="w-3 h-3" />
              Checklist
            </span>
          )}
          {lesson.hasPrompts && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs">
              <Sparkles className="w-3 h-3" />
              Prompts
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
