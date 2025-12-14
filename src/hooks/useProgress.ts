import { useState, useEffect, useCallback } from "react";
import { modules } from "@/data/courseData";
import { apiGetProgress, apiSaveProgress } from "@/api/client";
import { useAuth } from "@/auth/AuthContext";

const STORAGE_KEY = "ufuturo-progress";

interface ProgressData {
  completedLessons: string[]; // Format: "moduleId:lessonId"
}

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();

  // Carregar progresso do servidor
  const loadProgress = useCallback(async () => {
    if (!auth.isAuthenticated) {
      // Fallback para localStorage quando não autenticado
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const data: ProgressData = JSON.parse(stored);
          setCompletedLessons(data.completedLessons || []);
        } catch {
          setCompletedLessons([]);
        }
      }
      setIsLoading(false);
      return;
    }

    try {
      const response = await apiGetProgress();
      if (response.success && response.data) {
        setCompletedLessons(response.data.completedLessons);
        // Sincronizar com localStorage para acesso offline
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          completedLessons: response.data.completedLessons
        }));
      }
    } catch {
      // Em caso de erro, usar localStorage como fallback
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const data: ProgressData = JSON.parse(stored);
          setCompletedLessons(data.completedLessons || []);
        } catch {
          setCompletedLessons([]);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, [auth.isAuthenticated]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  const getLessonKey = (moduleId: string, lessonId: string) => `${moduleId}:${lessonId}`;

  const isLessonCompleted = useCallback((moduleId: string, lessonId: string) => {
    return completedLessons.includes(getLessonKey(moduleId, lessonId));
  }, [completedLessons]);

  const toggleLessonComplete = useCallback(async (moduleId: string, lessonId: string) => {
    const key = getLessonKey(moduleId, lessonId);
    const isCompleted = completedLessons.includes(key);
    const newCompleted = !isCompleted;

    // Actualizar estado local imediatamente
    setCompletedLessons(prev => {
      const newList = isCompleted
        ? prev.filter(k => k !== key)
        : [...prev, key];
      
      // Guardar em localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ completedLessons: newList }));
      return newList;
    });

    // Sincronizar com servidor se autenticado
    if (auth.isAuthenticated) {
      try {
        await apiSaveProgress(moduleId, lessonId, newCompleted);
      } catch {
        // Em caso de erro, o progresso está guardado localmente
        console.error('Erro ao sincronizar progresso com o servidor');
      }
    }
  }, [completedLessons, auth.isAuthenticated]);

  const markLessonComplete = useCallback(async (moduleId: string, lessonId: string) => {
    const key = getLessonKey(moduleId, lessonId);
    
    if (completedLessons.includes(key)) {
      return; // Já está completa
    }

    // Actualizar estado local
    setCompletedLessons(prev => {
      const newList = [...prev, key];
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ completedLessons: newList }));
      return newList;
    });

    // Sincronizar com servidor se autenticado
    if (auth.isAuthenticated) {
      try {
        await apiSaveProgress(moduleId, lessonId, true);
      } catch {
        console.error('Erro ao sincronizar progresso com o servidor');
      }
    }
  }, [completedLessons, auth.isAuthenticated]);

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
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    completedLessons,
    isLessonCompleted,
    toggleLessonComplete,
    markLessonComplete,
    getModuleProgress,
    getTotalProgress,
    resetProgress,
    isLoading
  };
};
