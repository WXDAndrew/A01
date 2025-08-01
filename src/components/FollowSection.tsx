import React, { useEffect, useState } from 'react';
import { Facebook } from 'lucide-react';

const FollowSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('follow-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="follow-section" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.pexels.com/photos/6995312/pexels-photo-6995312.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center bg-fixed"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sigue 
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              {' '}Nuestros Pasos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompáñanos en cada momento de esperanza y alegría que compartimos con los niños y sus familias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Espacio para imagen del niño */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 h-96 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">👶</span>
                </div>
                <p className="text-gray-700 font-medium">
                  Espacio reservado para imagen del niño
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Imagen PNG a subir posteriormente)
                </p>
              </div>
            </div>
          </div>

          {/* Espacio para publicación de Facebook */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 h-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">ASONIC Ecuador</h3>
                  <p className="text-sm text-gray-500">Publicación de Facebook</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Facebook className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">
                    Espacio reservado para
                  </p>
                  <p className="text-gray-700 font-medium">
                    publicación de Facebook
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Se integrará posteriormente)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div 
            className="relative rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.8)), url('https://images.pexels.com/photos/6995320/pexels-photo-6995320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`
            }}
          >
            <div className="absolute inset-0 bg-cover bg-center"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Cada sonrisa cuenta una historia de esperanza
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Conoce las historias de valentía y fortaleza de nuestros pequeños guerreros 
              y sus familias en nuestras redes sociales
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Seguir en Facebook
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowSection;