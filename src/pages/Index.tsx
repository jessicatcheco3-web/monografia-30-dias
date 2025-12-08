import { useState } from "react";
import Header from "@/components/layout/Header";
import Dashboard from "@/components/dashboard/Dashboard";
import InfoTab from "@/components/info/InfoTab";
import CourseTab from "@/components/course/CourseTab";
import ResourcesTab from "@/components/resources/ResourcesTab";
import ScheduleTab from "@/components/schedule/ScheduleTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveTab} />;
      case "info":
        return <InfoTab />;
      case "course":
        return <CourseTab />;
      case "resources":
        return <ResourcesTab />;
      case "schedule":
        return <ScheduleTab />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-foreground">UFUTURO</span>
              <span className="text-muted-foreground">Licenciado</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Curso completo de elaboração de monografia para estudantes de Moçambique
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UFUTURO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
