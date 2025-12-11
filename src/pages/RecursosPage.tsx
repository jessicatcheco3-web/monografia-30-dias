import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Download, 
  FileText, 
  Presentation,
  CheckSquare,
  Sparkles,
  ArrowLeft,
  Home
} from "lucide-react";
import { resources } from "@/data/courseData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const typeIcons: Record<string, any> = {
  document: FileText,
  presentation: Presentation,
  checklist: CheckSquare,
  prompts: Sparkles,
};

const typeLabels: Record<string, string> = {
  document: "Documento",
  presentation: "Apresentacão",
  checklist: "Checklist",
  prompts: "Prompts",
};

export default function RecursosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filter || resource.type === filter;
    return matchesSearch && matchesFilter;
  });

  const types = [...new Set(resources.map(r => r.type))];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Link>
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home size={16} />
            Início
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Recursos e Downloads
        </h1>
        <p className="text-muted-foreground">
          Modelos, templates, checklists e prompts prontos para usar na sua monografia.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Pesquisar recursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
          >
            Todos
          </Button>
          {types.map(type => (
            <Button
              key={type}
              variant={filter === type ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(type)}
              className="gap-1"
            >
              {typeLabels[type]}
            </Button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid gap-4">
        {filteredResources.map((resource) => {
          const Icon = typeIcons[resource.type] || FileText;
          
          return (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="secondary">
                        {typeLabels[resource.type]}
                      </Badge>
                      <Badge variant="outline">
                        {resource.format}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="gap-2 shrink-0">
                    <Download size={16} />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum recurso encontrado.</p>
        </div>
      )}
    </div>
  );
}
