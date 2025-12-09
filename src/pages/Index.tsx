import Header from "@/components/layout/Header";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeTab="dashboard" onTabChange={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
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
