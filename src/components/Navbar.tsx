import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Conocenos', href: '#conocenos' },
    { name: 'Apoyanos', href: '#apoyanos' },
    {
      name: 'Eventos',
      href: '#eventos',
      dropdown: [
        'Bingo Solidario',
        '12 horas de amor',
        'Relevo por la vida',
        'Cena de los angeles'
      ]
    },
    {
      name: 'Proyectos',
      href: '#proyectos',
      dropdown: [
        'A toda Madre',
        'Pintando Vida',
        'Tapitas de Esperanza',
        'Un millón de amigos'
      ]
    },
    {
      name: 'Productos',
      href: '#productos',
      dropdown: [
        'Chocolates',
        'Frutas Deshidratadas',
        'Fundas de Caramelos'
      ]
    },
    { name: 'Donaciones', href: '#donaciones' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">ASONIC</h1>
              <p className="text-xs text-gray-600 -mt-1">Asociación de Padres de Niños con Cáncer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
              >
                {item.name === 'Donaciones' ? (
                  <a
                    href={item.href}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg mx-2"
                  >
                    <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />}
                  </a>
                )}
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;