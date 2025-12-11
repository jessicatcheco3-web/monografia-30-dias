import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/auth/AuthContext";
import { PrivateRoute } from "@/components/PrivateRoute";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import InformacoesPage from "./pages/InformacoesPage";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";
import RecursosPage from "./pages/RecursosPage";
import CronogramaPage from "./pages/CronogramaPage";
import EvolucaoPage from "./pages/EvolucaoPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Rota pública */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Rotas protegidas */}
            <Route path="/" element={
              <PrivateRoute>
                <MainLayout><HomePage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="/informacoes" element={
              <PrivateRoute>
                <MainLayout><InformacoesPage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="/modulo/:moduleId" element={
              <PrivateRoute>
                <MainLayout><ModulePage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="/modulo/:moduleId/aula/:lessonId" element={
              <PrivateRoute>
                <MainLayout><LessonPage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="/recursos" element={
              <PrivateRoute>
                <MainLayout><RecursosPage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="/cronograma" element={
              <PrivateRoute>
                <MainLayout><CronogramaPage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="/evolucao" element={
              <PrivateRoute>
                <MainLayout><EvolucaoPage /></MainLayout>
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
