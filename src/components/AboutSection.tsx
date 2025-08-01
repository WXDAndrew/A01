import React, { useEffect, useState } from 'react';
import { Users, Home, Heart, Award, Target, Eye, Star, Info, ArrowRight, Play } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('mision');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('conocenos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const circularSections = [
    {
      id: 'mision',
      title: 'MISIÓN',
      icon: Target,
      angle: 0,
      color: 'from-blue-500 to-cyan-500',
      content: {
        title: 'Nuestra Misión',
        description: 'Ayudar con un hogar de paso, a los niños y a padres mientras los niños reciben el tratamiento.',
        fullDescription: 'Brindar apoyo integral a las familias de niños diagnosticados con cáncer, proporcionando un hogar de paso gratuito, apoyo emocional y recursos necesarios durante el proceso de tratamiento, promoviendo la esperanza y mejorando su calidad de vida.',
        image: 'https://images.pexels.com/photos/6995320/pexels-photo-6995320.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'vision',
      title: 'VISIÓN',
      icon: Eye,
      angle: 60,
      color: 'from-purple-500 to-pink-500',
      content: {
        title: 'Nuestra Visión',
        description: 'Ser la organización líder en Ecuador en el apoyo integral a familias de niños con cáncer.',
        fullDescription: 'Ser la organización líder en Ecuador en el apoyo integral a familias de niños con cáncer, reconocida por nuestro compromiso, transparencia y impacto positivo en la vida de nuestros beneficiarios, contribuyendo a un futuro donde ningún niño enfrente el cáncer sin apoyo.',
        image: 'https://images.pexels.com/photos/6995325/pexels-photo-6995325.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'valores',
      title: 'VALORES',
      icon: Star,
      angle: 120,
      color: 'from-orange-500 to-red-500',
      content: {
        title: 'Nuestros Valores',
        description: 'Amor incondicional, solidaridad, transparencia, respeto, compromiso y esperanza.',
        fullDescription: 'Amor incondicional, solidaridad, transparencia, respeto, compromiso y esperanza. Estos valores guían cada una de nuestras acciones y nos permiten crear un ambiente de confianza y calidez para todas las familias que llegan a nosotros.',
        image: 'https://images.pexels.com/photos/6995330/pexels-photo-6995330.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'que-hacemos',
      title: '¿QUÉ HACEMOS?',
      icon: Heart,
      angle: 180,
      color: 'from-green-500 to-teal-500',
      content: {
        title: 'Qué Hacemos',
        description: 'Brindamos apoyo integral: hogar de paso, apoyo emocional, acompañamiento médico.',
        fullDescription: 'Brindamos apoyo integral a las familias de niños con cáncer: hogar de paso gratuito, apoyo emocional, acompañamiento médico, actividades recreativas y programas de reinserción social. Cada servicio está diseñado con amor y profesionalismo.',
        image: 'https://images.pexels.com/photos/6995312/pexels-photo-6995312.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'quienes-somos',
      title: '¿QUIÉNES SOMOS?',
      icon: Users,
      angle: 240,
      color: 'from-indigo-500 to-blue-500',
      content: {
        title: 'Quiénes Somos',
        description: 'ASONIC es una organización sin fines de lucro fundada en 1998 por padres de familia.',
        fullDescription: 'ASONIC es una organización sin fines de lucro fundada en 1998 por padres de familia que vivieron la experiencia del cáncer infantil. Somos una gran familia unida por el amor y la esperanza, trabajando incansablemente para que ningún niño enfrente esta batalla solo.',
        image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'general',
      title: 'EN GENERAL',
      icon: Info,
      angle: 300,
      color: 'from-yellow-500 to-orange-500',
      content: {
        title: 'ASONIC en General',
        description: 'Con más de 25 años de experiencia, hemos apoyado a más de 1000 familias.',
        fullDescription: 'Con más de 25 años de experiencia, hemos apoyado a más de 1000 familias. Contamos con un equipo multidisciplinario de profesionales y voluntarios comprometidos. Nuestras instalaciones incluyen dormitorios, cocina, áreas de recreación y espacios de apoyo psicológico.',
        image: 'https://images.pexels.com/photos/6995335/pexels-photo-6995335.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    }
  ];

  const selectedSection = circularSections.find(s => s.id === selectedTopic);

  const getPositionFromAngle = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <section id="conocenos" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            CONÓCENOS
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descubre quiénes somos, qué hacemos y cómo trabajamos para brindar esperanza a las familias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Círculo interactivo */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative w-96 h-96 mx-auto">
              {/* Círculo central con mascota */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <span className="text-5xl">👼</span>
                    <p className="text-xs text-white mt-1 font-semibold">ASONIC</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                </div>
              </div>

              {/* Secciones circulares */}
              {circularSections.map((section, index) => {
                const position = getPositionFromAngle(section.angle, 140);
                const isSelected = selectedTopic === section.id;
                
                return (
                  <button
                    key={section.id}
                    onClick={() => setSelectedTopic(section.id)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 ${
                      isSelected ? 'scale-110 z-20' : 'hover:z-10'
                    }`}
                    style={{ 
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% - ${position.y}px)`,
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible ? 'fadeInScale 0.8s ease-out forwards' : 'none'
                    }}
                  >
                    <div className={`relative bg-white rounded-2xl p-4 shadow-xl border-2 transition-all duration-300 min-w-[120px] ${
                      isSelected 
                        ? `border-blue-400 bg-gradient-to-br from-white to-blue-50 shadow-2xl` 
                        : 'border-gray-200 hover:border-gray-400 hover:shadow-xl'
                    }`}>
                      <div className="flex flex-col items-center space-y-2">
                        <div className={`p-3 rounded-full transition-colors duration-300 ${
                          isSelected 
                            ? `bg-gradient-to-r ${section.color} text-white shadow-lg` 
                            : `bg-gray-100 text-gray-600`
                        }`}>
                          <section.icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-gray-800 text-center leading-tight">
                          {section.title}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel de contenido */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {selectedSection && (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${selectedSection.color} p-4 rounded-2xl mr-4 shadow-lg`}>
                    <selectedSection.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {selectedSection.content.title}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <img 
                    src={selectedSection.content.image} 
                    alt={selectedSection.content.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {showMoreInfo ? selectedSection.content.fullDescription : selectedSection.content.description}
                </p>
                
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => setShowMoreInfo(!showMoreInfo)}
                    className={`group bg-gradient-to-r ${selectedSection.color} hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <span>{showMoreInfo ? 'Ver menos' : 'Conoce más sobre nosotros'}</span>
                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ${showMoreInfo ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showMoreInfo && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 animate-fadeInUp">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Fundada en 1998</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>+1000 familias apoyadas</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>25+ años de experiencia</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Equipo multidisciplinario</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className={`mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Momentos que nos inspiran
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6995312/pexels-photo-6995312.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6995320/pexels-photo-6995320.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6995325/pexels-photo-6995325.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6995330/pexels-photo-6995330.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6995335/pexels-photo-6995335.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={image} 
                  alt={`Momento ASONIC ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-xs p-3 font-medium">
                    Apoyo y esperanza para las familias
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;