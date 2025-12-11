import { useState, useEffect, useCallback } from "react";
import { modules } from "@/data/courseData";

const STORAGE_KEY = "ufuturo-progress";

interface ProgressData {
  completedLessons: string[]; // Format: "moduleId:lessonId"
}

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data: ProgressData = JSON.parse(stored);
        setCompletedLessons(data.completedLessons || []);
      } catch {
        setCompletedLessons([]);
      }
    }
  }, []);

  // Save to localStorage when completedLessons changes
  useEffect(() => {
    const data: ProgressData = { completedLessons };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [completedLessons]);

  const getLessonKey = (moduleId: string, lessonId: string) => `${moduleId}:${lessonId}`;

  const isLessonCompleted = useCallback((moduleId: string, lessonId: string) => {
    return completedLessons.includes(getLessonKey(moduleId, lessonId));
  }, [completedLessons]);

  const toggleLessonComplete = useCallback((moduleId: string, lessonId: string) => {
    const key = getLessonKey(moduleId, lessonId);
    setCompletedLessons(prev => {
      if (prev.includes(key)) {
        return prev.filter(k => k !== key);
      } else {
        return [...prev, key];
      }
    });
  }, []);

  const markLessonComplete = useCallback((moduleId: string, lessonId: string) => {
    const key = getLessonKey(moduleId, lessonId);
    setCompletedLessons(prev => {
      if (!prev.includes(key)) {
        return [...prev, key];
      }
      return prev;
    });
  }, []);

  const getModuleProgress = useCallback((moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return { completed: 0, total: 0, percentage: 0 };

    const total = module.lessons.length;
    const completed = module.lessons.filter(lesson => 
      isLessonCompleted(moduleId, lesson.id)
    ).length;

    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }, [isLessonCompleted]);

  const getTotalProgress = useCallback(() => {
    let totalLessons = 0;
    let completedCount = 0;

    modules.forEach(module => {
      totalLessons += module.lessons.length;
      module.lessons.forEach(lesson => {
        if (isLessonCompleted(module.id, lesson.id)) {
          completedCount++;
        }
      });
    });

    return {
      completed: completedCount,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0
    };
  }, [isLessonCompleted]);

  const resetProgress = useCallback(() => {
    setCompletedLessons([]);
  }, []);

  return {
    completedLessons,
    isLessonCompleted,
    toggleLessonComplete,
    markLessonComplete,
    getModuleProgress,
    getTotalProgress,
    resetProgress
  };
};
