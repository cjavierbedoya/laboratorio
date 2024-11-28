import { Calendar, Award, ClipboardList } from 'lucide-react';

export default function ScienceFair() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Feria de las Ciencias 2025
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Descubre, innova y comparte tu pasión por la ciencia
        </p>
      </div>

      <div className="mt-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Información General
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Detalles importantes sobre la Feria de las Ciencias 2025
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Fecha del evento</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  15-17 de Mayo, 2025
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Lugar</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Auditorio Principal y Laboratorios
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Participantes</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Estudiantes de 6° a 11° grado
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-[#ffd103]" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">Fechas Importantes</h3>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Inscripciones</h4>
                  <p className="text-sm text-gray-500">1 de Febrero - 30 de Marzo, 2025</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Entrega de propuestas</h4>
                  <p className="text-sm text-gray-500">15 de Abril, 2025</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Presentación final</h4>
                  <p className="text-sm text-gray-500">15-17 de Mayo, 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-[#ffd103]" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">Categorías</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">• Innovación Tecnológica</li>
                <li className="text-sm text-gray-500">• Ciencias Naturales</li>
                <li className="text-sm text-gray-500">• Ciencias de la Tierra</li>
                <li className="text-sm text-gray-500">• Química y Materiales</li>
                <li className="text-sm text-gray-500">• Física y Matemáticas</li>
                <li className="text-sm text-gray-500">• Biología y Salud</li>
              </ul>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <ClipboardList className="h-8 w-8 text-[#ffd103]" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">Requisitos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">• Proyecto original e innovador</li>
                <li className="text-sm text-gray-500">• Metodología científica clara</li>
                <li className="text-sm text-gray-500">• Documentación completa</li>
                <li className="text-sm text-gray-500">• Presentación visual</li>
                <li className="text-sm text-gray-500">• Trabajo en equipo (2-4 estudiantes)</li>
                <li className="text-sm text-gray-500">• Asesor docente asignado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}