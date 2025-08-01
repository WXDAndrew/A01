import React from 'react';
import { 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Share2, 
  Mail,
  Send,
  ThumbsUp,
  Linkedin,
  MessageSquare,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const socialNetworks = [
    { name: 'Facebook', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Pinterest', icon: Share2, color: 'hover:text-red-600' },
    { name: 'Email', icon: Mail, color: 'hover:text-gray-600' },
    { name: 'Telegram', icon: Send, color: 'hover:text-blue-500' },
    { name: 'Me gusta', icon: ThumbsUp, color: 'hover:text-green-600' },
    { name: 'Buffer', icon: Share2, color: 'hover:text-indigo-600' },
    { name: 'Twitter', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-blue-700' },
    { name: 'Gmail', icon: Mail, color: 'hover:text-red-500' },
    { name: 'Skype', icon: Phone, color: 'hover:text-blue-500' },
    { name: 'Reddit', icon: Share2, color: 'hover:text-orange-600' },
    { name: 'VK', icon: Share2, color: 'hover:text-blue-800' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'hover:text-green-500' },
    { name: 'Tumblr', icon: Share2, color: 'hover:text-indigo-800' },
    { name: 'Messenger', icon: MessageSquare, color: 'hover:text-blue-600' },
  ];

  const mainSocials = [
    { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
    { name: 'Twitter', icon: Twitter, color: 'text-blue-400' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Logo y descripción */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">ASONIC</h3>
                <p className="text-gray-300 text-sm">Asociación de Padres de Niños con Cáncer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Brindando esperanza y apoyo integral a las familias de niños con cáncer 
              desde 1998. Un hogar lejos de casa cuando más lo necesitan.
            </p>
          </div>

          {/* Redes sociales principales y compartir */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">Síguenos</h4>
            
            {/* Redes principales */}
            <div className="flex justify-center space-x-6 mb-8">
              {mainSocials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`${social.color} hover:scale-110 transition-all duration-300 p-3 bg-gray-800 rounded-full shadow-lg`}
                >
                  <social.icon size={24} />
                </a>
              ))}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 p-3 bg-gray-800 rounded-full shadow-lg">
                  <Share2 size={24} />
                </button>
                
                {/* Dropdown de compartir */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-50">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-5 gap-3 w-80 hover:opacity-100 hover:pointer-events-auto">
                    {socialNetworks.map((network) => (
                      <a
                        key={network.name}
                        href="#"
                        className={`text-gray-600 ${network.color} p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 flex flex-col items-center hover:scale-105`}
                        title={network.name}
                      >
                        <network.icon size={16} />
                        <span className="text-xs mt-1 text-center leading-tight">{network.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-6 flex items-center justify-center lg:justify-start">
              <MapPin className="w-5 h-5 mr-2" />
              Ubicación
            </h4>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
              <div className="aspect-video bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">
                    Mapa de Google Maps
                  </p>
                  <p className="text-gray-500 text-xs">
                    (Se integrará posteriormente)
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-300">
                <p className="mb-2">📍 Quito, Ecuador</p>
                <p className="mb-2">📞 +593 2 XXX-XXXX</p>
                <p>📧 info@asonic.org.ec</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ASONIC - Asociación de Padres de Niños con Cáncer. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Fundación sin fines de lucro • Ecuador • Registro XXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;