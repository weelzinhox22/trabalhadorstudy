import { NavBar } from '@/components/NavBar';
import { SinanInfoCard } from '@/components/SinanInfoCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const studyTopics = [
  { id: 'legislacao', name: 'Legislação' },
  { id: 'orgaos', name: 'Órgãos Responsáveis' },
  { id: 'constituicao', name: 'Constituição Federal' },
  { id: 'clt', name: 'CLT' },
  { id: 'tipos-atividades', name: 'Tipos de Atividades de Risco' },
  { id: 'sinan', name: 'SINAN' },
  { id: 'responsabilidades', name: 'Responsabilidades' },
  { id: 'lei-seguranca', name: 'Lei 6.514/77' },
  { id: 'normas', name: 'Normas Regulamentadoras' },
  { id: 'pnstt', name: 'PNSTT' },
  { id: 'programas', name: 'Programas e Comissões' },
  { id: 'fisioterapia', name: 'Fisioterapia e Saúde do Trabalhador' },
  { id: 'renast', name: 'Renast' }
];

// Componente Index original que será exportado como padrão
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-health-700 mb-6">Material de Estudo - Saúde do Trabalhador</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studyTopics.map((topic) => (
            <div 
              key={topic.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-health-600 mb-2">{topic.name}</h2>
              <p className="text-gray-600 mb-4">Informações sobre {topic.name.toLowerCase()}</p>
              
              {topic.id === 'sinan' ? (
                <Link to="/sinan">
                  <Button className="w-full bg-health-500 hover:bg-health-600">
                    Acessar Material
                  </Button>
                </Link>
              ) : (
                <Button className="w-full bg-health-500 hover:bg-health-600">
                  Acessar Material
                </Button>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link to="/quiz">
            <Button className="bg-health-600 hover:bg-health-700">
              Ir para o Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Componente SinanInfo que foi adicionado do arquivo SinanInfo.tsx
const SinanInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-health-700">SINAN - Sistema Nacional de Notificação de Agravos</h1>
            <p className="text-gray-600 mt-1">Informações importantes para profissionais de saúde</p>
          </div>
          
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Material de Estudo
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SinanInfoCard />
          
          <div className="mt-8 flex justify-center">
            <Link to="/quiz">
              <Button className="bg-health-600 hover:bg-health-700">
                Ir para o Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
export { studyTopics, SinanInfo };
