import { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import type { LabGuide } from '../types';

const SAMPLE_GUIDES: LabGuide[] = [
  {
    id: '1',
    title: 'Introdución a la química',
    grade: 9,
    subject: 'Química',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Experimentos de física',
    grade: 10,
    subject: 'Física',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'Biología y seguridad en el laboratorio',
    grade: 9,
    subject: 'Biología',
    downloadUrl: '#'
  }
];

export default function Guides() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | ''>('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const filteredGuides = SAMPLE_GUIDES.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || guide.grade === selectedGrade;
    const matchesSubject = !selectedSubject || guide.subject === selectedSubject;
    return matchesSearch && matchesGrade && matchesSubject;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Guías de Laboratorio
          </h2>
        </div>
      </div>

      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-[#ffd103] focus:border-[#ffd103] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#ffd103] focus:border-[#ffd103] sm:text-sm rounded-md"
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value ? Number(e.target.value) : '')}
          >
            <option value="">Todos los grados</option>
            {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
              <option key={grade} value={grade}>
                Grado {grade}
              </option>
            ))}
          </select>

          <select
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#ffd103] focus:border-[#ffd103] sm:text-sm rounded-md"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Todas las opciones</option>
            <option value="Chemistry">Química</option>
            <option value="Physics">Física</option>
            <option value="Biology">Biología</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{guide.title}</h3>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Filter className="flex-shrink-0 mr-1.5 h-4 w-4" />
                Grado {guide.grade} - {guide.subject}
              </div>
              <div className="mt-4">
                <a
                  href={guide.downloadUrl}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-[#ffd103] hover:bg-[#e6bc03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd103]"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Descargar guía
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}