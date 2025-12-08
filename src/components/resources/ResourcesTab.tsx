import { Download, FileText, Presentation, ListChecks, Sparkles, Search } from "lucide-react";
import { resources } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const iconMap: Record<string, React.ReactNode> = {
  document: <FileText className="w-5 h-5" />,
  presentation: <Presentation className="w-5 h-5" />,
  checklist: <ListChecks className="w-5 h-5" />,
  prompts: <Sparkles className="w-5 h-5" />,
};

const colorMap: Record<string, string> = {
  document: "bg-primary/10 text-primary",
  presentation: "bg-info/10 text-info",
  checklist: "bg-success/10 text-success",
  prompts: "bg-secondary/10 text-secondary",
};

const ResourcesTab = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (resourceTitle: string) => {
    toast.success(`A preparar download: ${resourceTitle}`, {
      description: "O seu ficheiro será baixado em breve.",
    });
  };

  const categorizedResources = {
    documents: filteredResources.filter((r) => r.type === "document"),
    presentations: filteredResources.filter((r) => r.type === "presentation"),
    checklists: filteredResources.filter((r) => r.type === "checklist"),
    prompts: filteredResources.filter((r) => r.type === "prompts"),
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          Recursos e Materiais
        </h1>
        <p className="text-muted-foreground">
          Modelos editáveis, checklists e prompts para auxiliar na sua monografia
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Pesquisar recursos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Documents Section */}
      {categorizedResources.documents.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Modelos de Documentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorizedResources.documents.map((resource) => (
              <div
                key={resource.id}
                className="bg-card rounded-xl border border-border p-5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorMap[resource.type]}`}>
                    {iconMap[resource.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-muted text-muted-foreground">
                        {resource.format}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(resource.title)}
                        className="text-primary hover:text-primary"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Presentations Section */}
      {categorizedResources.presentations.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Presentation className="w-5 h-5 text-info" />
            Apresentações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorizedResources.presentations.map((resource) => (
              <div
                key={resource.id}
                className="bg-card rounded-xl border border-border p-5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorMap[resource.type]}`}>
                    {iconMap[resource.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-muted text-muted-foreground">
                        {resource.format}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(resource.title)}
                        className="text-info hover:text-info"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Checklists Section */}
      {categorizedResources.checklists.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-success" />
            Checklists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorizedResources.checklists.map((resource) => (
              <div
                key={resource.id}
                className="bg-card rounded-xl border border-border p-5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorMap[resource.type]}`}>
                    {iconMap[resource.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-muted text-muted-foreground">
                        {resource.format}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(resource.title)}
                        className="text-success hover:text-success"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prompts Section */}
      {categorizedResources.prompts.length > 0 && (
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            Pack de Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorizedResources.prompts.map((resource) => (
              <div
                key={resource.id}
                className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20 p-5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorMap[resource.type]}`}>
                    {iconMap[resource.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-muted text-muted-foreground">
                        {resource.format}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(resource.title)}
                        className="text-secondary hover:text-secondary"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum recurso encontrado para "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default ResourcesTab;
