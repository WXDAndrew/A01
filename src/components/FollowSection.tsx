import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Youtube, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const FollowSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % socialPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const socialPosts = [
    {
      id: 1,
      platform: 'Facebook',
      icon: Facebook,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      author: 'ASONIC Ecuador',
      time: '2 horas',
      content: '¡Gracias a todos los que participaron en nuestro Bingo Solidario! Juntos recaudamos fondos para seguir apoyando a más familias. 💙',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 245,
      comments: 18,
      shares: 12
    },
    {
      id: 2,
      platform: 'Instagram',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      author: '@asonic_ecuador',
      time: '5 horas',
      content: 'Momentos de alegría en nuestro hogar de paso. Los niños disfrutando de actividades recreativas que les brindan esperanza. ✨ #EsperanzaParaTodos',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 189,
      comments: 24,
      shares: 8
    },
    {
      id: 3,
      platform: 'YouTube',
      icon: Youtube,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      author: 'ASONIC Ecuador',
      time: '1 día',
      content: 'Conoce la historia de María, una pequeña guerrera que nos enseña el verdadero significado de la valentía. Su sonrisa ilumina nuestros días.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 156,
      comments: 31,
      shares: 15,
      isVideo: true,
      duration: '3:24'
    },
    {
      id: 4,
      platform: 'Facebook',
      icon: Facebook,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      author: 'ASONIC Ecuador',
      time: '2 días',
      content: 'Nuestro equipo de voluntarios trabajando incansablemente para brindar el mejor cuidado. Cada gesto de amor marca la diferencia. 🤗',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 198,
      comments: 22,
      shares: 9
    },
    {
      id: 5,
      platform: 'Instagram',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      author: '@asonic_ecuador',
      time: '3 días',
      content: 'Taller de arte terapia en acción. Los niños expresan sus emociones a través del color y la creatividad. 🎨 #ArteQuesSana',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 167,
      comments: 19,
      shares: 6
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + socialPosts.length) % socialPosts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Niños en ASONIC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Síguenos en nuestras redes</h3>
                  <p className="text-lg opacity-90">Conoce las historias de esperanza</p>
              </div>
            </div>
          </div>

          {/* Slider de publicaciones sociales */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative bg-white border-2 border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              
              {/* Slider container */}
              <div className="relative h-96">
                {socialPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100' 
                        : index < currentSlide 
                          ? '-translate-x-full opacity-0' 
                          : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className="p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className={`${post.bgColor} p-3 rounded-full mr-4`}>
                          <post.icon className={`w-6 h-6 ${post.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
                          <p className="text-sm text-gray-500">{post.time} • {post.platform}</p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-700 mb-4 flex-1">{post.content}</p>
                      
                      {/* Image/Video */}
                      <div className="relative mb-4 rounded-xl overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Publicación social"
                          className="w-full h-32 object-cover"
                        />
                        {post.isVideo && (
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="bg-white bg-opacity-90 rounded-full p-3">
                              <Play className="w-6 h-6 text-gray-800" fill="currentColor" />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                              {post.duration}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                        <span>🔄 {post.shares}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {socialPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-blue-600 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action con imagen de fondo */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div 
            className="relative rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/6995335/pexels-photo-6995335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`
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
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowSection;