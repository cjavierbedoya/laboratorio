import { ArrowRight, BookOpen, TestTube2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const carouselImages = [
  {
    url: 'https://i.imgur.com/TIdEBjN.jpeg',
    alt: 'Student'
  },
  {
    url: 'https://i.imgur.com/Ah22mjJ.jpeg',
    alt: 'Laboratory'
  },
  {
    url: 'https://i.imgur.com/hZDBYuN.jpeg',
    alt: 'Students in laboratory'
  }
  ];

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center lg:text-left lg:col-span-6">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Bienvenidos a nuestro</span>
                  <span className="block text-[#ffd103]">Laboratorio Escolar</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Explora un mundo donde la ciencia y la fe convergen en el aprendizaje y el descubrimiento. Accede a guías de laboratorio, gestiona equipos y conecta el conocimiento científico con valores y reflexiones profundas a través de nuestros recursos educativos.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/guides"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-[#ffd103] hover:bg-[#e6bc03] md:py-4 md:text-lg md:px-10"
                    >
                      Conoce más
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-[400px] rounded-lg"
                  >
                    {carouselImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/guides" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <BookOpen className="h-8 w-8 text-[#ffd103]" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Guías de Laboratorio</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Accede a las guías por grado
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/inventory" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <TestTube2 className="h-8 w-8 text-[#ffd103]" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Equipos</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Busca y reserva espacios o equipos de laboratorio
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/contact" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-8 w-8 text-[#ffd103]" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Comunidad</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Conecta con docentes de diferentes áreas
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}