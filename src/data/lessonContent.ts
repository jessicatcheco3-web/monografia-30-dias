import { modules, onboardingScreens } from './courseData';

export interface LessonNavigation {
  moduleId: string;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

export function getLessonContent(moduleId: string, lessonId: string) {
  const module = modules.find(m => m.id === moduleId);
  if (!module) return null;
  
  const lesson = module.lessons.find(l => l.id === lessonId);
  if (!lesson) return null;
  
  return {
    module,
    lesson
  };
}

export function getNextLesson(moduleId: string, lessonId: string): LessonNavigation | null {
  const currentModuleIndex = modules.findIndex(m => m.id === moduleId);
  if (currentModuleIndex === -1) return null;
  
  const currentModule = modules[currentModuleIndex];
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === lessonId);
  
  // Check if there's a next lesson in the same module
  if (currentLessonIndex < currentModule.lessons.length - 1) {
    const nextLesson = currentModule.lessons[currentLessonIndex + 1];
    return {
      moduleId: currentModule.id,
      lessonId: nextLesson.id,
      moduleTitle: currentModule.title,
      lessonTitle: nextLesson.title
    };
  }
  
  // Check if there's a next module with lessons
  for (let i = currentModuleIndex + 1; i < modules.length; i++) {
    if (modules[i].lessons.length > 0) {
      const nextModule = modules[i];
      const firstLesson = nextModule.lessons[0];
      return {
        moduleId: nextModule.id,
        lessonId: firstLesson.id,
        moduleTitle: nextModule.title,
        lessonTitle: firstLesson.title
      };
    }
  }
  
  return null;
}

export function getPreviousLesson(moduleId: string, lessonId: string): LessonNavigation | null {
  const currentModuleIndex = modules.findIndex(m => m.id === moduleId);
  if (currentModuleIndex === -1) return null;
  
  const currentModule = modules[currentModuleIndex];
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === lessonId);
  
  // Check if there's a previous lesson in the same module
  if (currentLessonIndex > 0) {
    const prevLesson = currentModule.lessons[currentLessonIndex - 1];
    return {
      moduleId: currentModule.id,
      lessonId: prevLesson.id,
      moduleTitle: currentModule.title,
      lessonTitle: prevLesson.title
    };
  }
  
  // Check if there's a previous module with lessons
  for (let i = currentModuleIndex - 1; i >= 0; i--) {
    if (modules[i].lessons.length > 0) {
      const prevModule = modules[i];
      const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
      return {
        moduleId: prevModule.id,
        lessonId: lastLesson.id,
        moduleTitle: prevModule.title,
        lessonTitle: lastLesson.title
      };
    }
  }
  
  return null;
}

export function getOnboardingScreen(id: string) {
  return onboardingScreens.find(screen => screen.id === id);
}

export function getAllLessonsCount(): number {
  return modules.reduce((total, module) => total + module.lessons.length, 0);
}

export function getModuleLessonsCount(moduleId: string): number {
  const module = modules.find(m => m.id === moduleId);
  return module ? module.lessons.length : 0;
}
