import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import type { ContactForm } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contáctanos
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Tienes alguna pregunta, nos encantaria escucharte.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 focus:ring-[#ffd103] focus:border-[#ffd103] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 focus:ring-[#ffd103] focus:border-[#ffd103] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Tema
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 focus:ring-[#ffd103] focus:border-[#ffd103] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 focus:ring-[#ffd103] focus:border-[#ffd103] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-[#ffd103] hover:bg-[#e6bc03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd103]"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Información de contacto</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#ffd103] mt-1" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Whatsapp</p>
                <p className="text-sm text-gray-500">(+57) 321 825 36 58</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#ffd103] mt-1" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Correo</p>
                <p className="text-sm text-gray-500">secretaria@smenor.edu.co</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#ffd103] mt-1" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Dirección</p>
                <p className="text-sm text-gray-500">
                  Km 5 vía Las Palmas
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="Location Map"
              className="w-full h-48 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3113936049212!2d-75.55690172500958!3d6.222608193765437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299841ace9b3%3A0x302fcc1717bc64d3!2sSeminario%20Menor%20de%20Medell%C3%ADn!5e0!3m2!1ses-419!2sco!4v1732542810588!5m2!1ses-419!2sco"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}