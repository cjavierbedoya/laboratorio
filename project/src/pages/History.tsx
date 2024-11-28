import { Clock, Award, Users } from 'lucide-react';

export default function History() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nuestra historia
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Construyendo la excelentecia en la educación 1943
        </p>
      </div>

      <div className="mt-12">
        <img
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920"
          alt="Laboratory History"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ffd103]/20 rounded-md mb-4">
              <Clock className="h-6 w-6 text-[#ffd103]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Establecido desde 1943</h3>
            <p className="mt-2 text-gray-500">
              Fundado con la visión de proporcionar una educación científica práctica a las futuras generaciones, combinando el aprendizaje empírico con valores fundamentales que inspiran fe, curiosidad y respeto por la creación.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ffd103]/20 rounded-md mb-4">
              <Award className="h-6 w-6 text-[#ffd103]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Excelencia en Educación</h3>
            <p className="mt-2 text-gray-500">
              Contribuciones destacadas a la educación en ciencias.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ffd103]/20 rounded-md mb-4">
              <Users className="h-6 w-6 text-[#ffd103]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Comunidad en crecimiento</h3>
            <p className="mt-2 text-gray-500">
              Más de 100 estudiantes han realizado experimentos en nuestras instalaciones.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra jornada</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-[#ffd103]">
                <div className="absolute w-4 h-4 bg-[#ffd103] rounded-full -left-[9px] top-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">1943 - Fundación</h4>
                  <p className="mt-2 text-gray-600">Fundado como un modesto laboratorio de ciencias equipado con herramientas básicas.</p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#ffd103]">
                <div className="absolute w-4 h-4 bg-[#ffd103] rounded-full -left-[9px] top-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">2025 - Proyectos futuros</h4>
                  <p className="mt-2 text-gray-600">Espacios de química y física.</p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-[#ffd103]">
                <div className="absolute w-4 h-4 bg-[#ffd103] rounded-full -left-[9px] top-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">2025 - Revolución digital</h4>
                  <p className="mt-2 text-gray-600">Integrando Tecnologías.</p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-[#ffd103] rounded-full -left-[9px] top-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Actualidad</h4>
                  <p className="mt-2 text-gray-600">Estado del arte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}