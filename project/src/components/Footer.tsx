import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contáctanos</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <span>(+57)321 825 36 58</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <span>secretaria@smenor.edu.co</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Km 5 vía Las Palmas</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guides" className="text-gray-300 hover:text-white transition-colors">
                  Guías de laboratorio
                </a>
              </li>
              <li>
                <a href="/inventory" className="text-gray-300 hover:text-white transition-colors">
                  Equipos y reservas de espacios
                </a>
              </li>
              <li>
                <a href="/history" className="text-gray-300 hover:text-white transition-colors">
                  Nuestra historia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Horarios</h3>
            <div className="text-gray-300 space-y-2">
              <p>Lunes - Viernes: 6:40 AM - 2:10 PM</p>
              <p>Sábado y Domingo: Cerrado</p>
              
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Laboratorio SeMenor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}