import React, { useEffect, useState } from 'react';
import { Users, Home, Heart, Award, Target, Eye, Star, Info } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

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

  const thoughtBubbles = [
    {
      id: 'quienes-somos',
      title: '¿Quiénes Somos?',
      icon: Users,
      position: { top: '10%', left: '20%' },
      colors: {
        bg: 'from-blue-500 to-cyan-500',
        border: 'border-blue-400',
        text: 'text-blue-600',
        sectionBg: 'from-blue-50 via-cyan-50 to-blue-100'
      },
      content: {
        title: 'Quiénes Somos',
        description: 'ASONIC es una organización sin fines de lucro fundada en 1998 por padres de familia que vivieron la experiencia del cáncer infantil. Somos una gran familia unida por el amor y la esperanza, trabajando incansablemente para que ningún niño enfrente esta batalla solo.',
        image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'que-hacemos',
      title: '¿Qué Hacemos?',
      icon: Heart,
      position: { top: '25%', right: '15%' },
      colors: {
        bg: 'from-pink-500 to-rose-500',
        border: 'border-pink-400',
        text: 'text-pink-600',
        sectionBg: 'from-pink-50 via-rose-50 to-pink-100'
      },
      content: {
        title: 'Qué Hacemos',
        description: 'Brindamos apoyo integral a las familias de niños con cáncer: hogar de paso gratuito, apoyo emocional, acompañamiento médico, actividades recreativas y programas de reinserción social. Cada servicio está diseñado con amor y profesionalismo.',
        image: 'https://images.pexels.com/photos/6995312/pexels-photo-6995312.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'mision',
      title: 'Misión',
      icon: Target,
      position: { top: '60%', right: '25%' },
      colors: {
        bg: 'from-emerald-500 to-teal-500',
        border: 'border-emerald-400',
        text: 'text-emerald-600',
        sectionBg: 'from-emerald-50 via-teal-50 to-emerald-100'
      },
      content: {
        title: 'Nuestra Misión',
        description: 'Brindar apoyo integral a las familias de niños diagnosticados con cáncer, proporcionando un hogar de paso gratuito, apoyo emocional y recursos necesarios durante el proceso de tratamiento, promoviendo la esperanza y mejorando su calidad de vida.',
        image: 'https://images.pexels.com/photos/6995320/pexels-photo-6995320.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'vision',
      title: 'Visión',
      icon: Eye,
      position: { bottom: '20%', left: '25%' },
      colors: {
        bg: 'from-purple-500 to-violet-500',
        border: 'border-purple-400',
        text: 'text-purple-600',
        sectionBg: 'from-purple-50 via-violet-50 to-purple-100'
      },
      content: {
        title: 'Nuestra Visión',
        description: 'Ser la organización líder en Ecuador en el apoyo integral a familias de niños con cáncer, reconocida por nuestro compromiso, transparencia y impacto positivo en la vida de nuestros beneficiarios, contribuyendo a un futuro donde ningún niño enfrente el cáncer sin apoyo.',
        image: 'https://images.pexels.com/photos/6995325/pexels-photo-6995325.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'valores',
      title: 'Valores',
      icon: Star,
      position: { top: '45%', left: '10%' },
      colors: {
        bg: 'from-amber-500 to-orange-500',
        border: 'border-amber-400',
        text: 'text-amber-600',
        sectionBg: 'from-amber-50 via-orange-50 to-amber-100'
      },
      content: {
        title: 'Nuestros Valores',
        description: 'Amor incondicional, solidaridad, transparencia, respeto, compromiso y esperanza. Estos valores guían cada una de nuestras acciones y nos permiten crear un ambiente de confianza y calidez para todas las familias que llegan a nosotros.',
        image: 'https://images.pexels.com/photos/6995330/pexels-photo-6995330.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'general',
      title: 'En General',
      icon: Info,
      position: { bottom: '15%', right: '40%' },
      colors: {
        bg: 'from-indigo-500 to-blue-500',
        border: 'border-indigo-400',
        text: 'text-indigo-600',
        sectionBg: 'from-indigo-50 via-blue-50 to-indigo-100'
      },
      content: {
        title: 'ASONIC en General',
        description: 'Con más de 25 años de experiencia, hemos apoyado a más de 1000 familias. Contamos con un equipo multidisciplinario de profesionales y voluntarios comprometidos. Nuestras instalaciones incluyen dormitorios, cocina, áreas de recreación y espacios de apoyo psicológico.',
        image: 'https://images.pexels.com/photos/6995335/pexels-photo-6995335.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    }
  ];

  const selectedBubble = thoughtBubbles.find(b => b.id === selectedTopic);
  const sectionBgClass = selectedBubble 
    ? `bg-gradient-to-br ${selectedBubble.colors.sectionBg}` 
    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50';

  return (
    <section id="conocenos" className={`py-20 overflow-hidden transition-all duration-1000 ${sectionBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Conócenos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre quiénes somos, qué hacemos y cómo trabajamos para brindar esperanza a las familias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sección interactiva con niño y burbujas */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative w-96 h-96 mx-auto">
              {/* Niño en el centro (sin animación bounce) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl">👶</span>
                    <p className="text-xs text-gray-600 mt-1">Niño PNG</p>
                  </div>
                </div>
              </div>

              {/* Burbujas de pensamiento organizadas alrededor */}
              {thoughtBubbles.map((bubble, index) => (
                <button
                  key={bubble.id}
                  onClick={() => setSelectedTopic(selectedTopic === bubble.id ? null : bubble.id)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 ${
                    selectedTopic === bubble.id ? 'scale-110 z-10' : 'hover:z-10'
                  }`}
                  style={{ 
                    ...bubble.position,
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'fadeInScale 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <div className={`relative bg-white rounded-2xl p-4 shadow-xl border-2 transition-all duration-300 ${
                    selectedTopic === bubble.id 
                      ? `${bubble.colors.border} bg-gradient-to-br from-white to-gray-50` 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}>
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`p-2 rounded-full transition-colors duration-300 ${
                        selectedTopic === bubble.id 
                          ? `bg-gradient-to-r ${bubble.colors.bg} text-white` 
                          : `bg-gray-100 ${bubble.colors.text}`
                      }`}>
                        <bubble.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 text-center leading-tight">
                        {bubble.title}
                      </span>
                    </div>
                    
                    {/* Cola de la burbuja */}
                    <div className={`absolute w-4 h-4 transform rotate-45 ${
                      selectedTopic === bubble.id 
                        ? `bg-gradient-to-br from-white to-gray-50 border-r-2 border-b-2 ${bubble.colors.border}` 
                        : 'bg-white border-r-2 border-b-2 border-gray-200'
                    }`} 
                    style={{
                      bottom: '-8px',
                      left: '50%',
                      marginLeft: '-8px'
                    }}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Panel de contenido */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {selectedTopic ? (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-500 animate-fadeInUp">
                {(() => {
                  const topic = thoughtBubbles.find(b => b.id === selectedTopic);
                  return topic ? (
                    <>
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-br ${topic.colors.bg} p-3 rounded-2xl mr-4 shadow-lg`}>
                          <topic.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {topic.content.title}
                        </h3>
                      </div>
                      
                      <div className="mb-6">
                        <img 
                          src={topic.content.image} 
                          alt={topic.content.title}
                          className="w-full h-48 object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {topic.content.description}
                      </p>
                      
                      <div className="mt-6 flex justify-center">
                        <div className={`bg-gradient-to-r ${topic.colors.bg} bg-opacity-10 px-6 py-3 rounded-full`}>
                          <span className={`${topic.colors.text} font-semibold`}>
                            ¡Conoce más sobre nosotros!
                          </span>
                        </div>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 text-center shadow-xl">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¡Haz clic en las burbujas!
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Selecciona cualquiera de las burbujas de pensamiento para conocer más 
                  sobre ASONIC, nuestra misión, visión y todo lo que hacemos por los niños con cáncer.
                </p>
                <div className="mt-6">
                  <span className="text-4xl">👈</span>
                </div>
              </div>
            )}
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