import { useState } from 'react';
import { Search, Monitor, BookOpen } from 'lucide-react';

interface VirtualLab {
  id: string;
  title: string;
  grade: number;
  subject: string;
  description: string;
  url: string;
}

const SAMPLE_LABS: VirtualLab[] = [
  {
    id: '1',
    title: 'Simulación de Reacciones Químicas',
    grade: 10,
    subject: 'Química',
    description: 'Experimenta con diferentes reacciones químicas en un entorno virtual seguro.',
    url: '#'
  },
  {
    id: '2',
    title: 'Física Mecánica Virtual',
    grade: 11,
    subject: 'Física',
    description: 'Simula experimentos de física mecánica y observa las leyes del movimiento.',
    url: '#'
  },
  {
    id: '3',
    title: 'Laboratorio Virtual de Biología Celular',
    grade: 9,
    subject: 'Biología',
    description: 'Explora la estructura y función de las células en 3D.',
    url: '#'
  }
];

export default function VirtualLabs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | ''>('');

  const filteredLabs = SAMPLE_LABS.filter(lab => {
    const matchesSearch = lab.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || lab.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Laboratorios Virtuales
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Explora y aprende con nuestras simulaciones interactivas
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-[#ffd103] focus:border-[#ffd103] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Buscar laboratorios virtuales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <select
          className="block w-full md:w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#ffd103] focus:border-[#ffd103] sm:text-sm rounded-md"
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value ? Number(e.target.value) : '')}
        >
          <option value="">Todos los grados</option>
          {[6, 7, 8, 9, 10, 11].map((grade) => (
            <option key={grade} value={grade}>
              Grado {grade}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLabs.map((lab) => (
          <div key={lab.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-[#ffd103]" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">{lab.title}</h3>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <BookOpen className="flex-shrink-0 mr-1.5 h-4 w-4" />
                Grado {lab.grade} - {lab.subject}
              </div>
              <p className="text-gray-600 mb-4">{lab.description}</p>
              <a
                href={lab.url}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-[#ffd103] hover:bg-[#e6bc03]"
              >
                Acceder al laboratorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}