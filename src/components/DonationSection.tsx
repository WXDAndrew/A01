import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const DonationSection = () => {
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

    const section = document.getElementById('donation-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="donation-section" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center bg-fixed"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-full shadow-2xl">
                <Heart className="w-12 h-12 text-white" fill="currentColor" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Cada aporte que recibimos nos permite
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                ayudar a más niños con cáncer
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tu donación se convierte en esperanza, en un hogar temporal, en una sonrisa, 
              en la oportunidad de que un niño continúe escribiendo su historia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$25</div>
                <p className="text-white">Una noche de alojamiento seguro</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$50</div>
                <p className="text-white">Alimentos para una familia por 3 días</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$100</div>
                <p className="text-white">Apoyo integral por una semana</p>
              </div>
            </div>
            
            <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span>Quiero Donar</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <p className="text-white/70 mt-6 text-sm">
              Tu donación es 100% deducible de impuestos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;