import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import InformacoesPage from "./pages/InformacoesPage";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";
import RecursosPage from "./pages/RecursosPage";
import CronogramaPage from "./pages/CronogramaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/informacoes" element={<InformacoesPage />} />
            <Route path="/modulo/:moduleId" element={<ModulePage />} />
            <Route path="/modulo/:moduleId/aula/:lessonId" element={<LessonPage />} />
            <Route path="/recursos" element={<RecursosPage />} />
            <Route path="/cronograma" element={<CronogramaPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
