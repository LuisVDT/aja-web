import { useState, useEffect } from 'react';
import logoLight from '../assets/aja-icon-small.png';
import logoDark from '../assets/aja-icon-small-black.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave para anclas
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setMobileOpen(false); // cerrar menú móvil al navegar
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-transparent navbar-fixed' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo + título */}
        <div
          id="navbar-title"
          className={`text-2xl font-bold flex items-center ${
            isScrolled ? 'text-white' : 'text-black'
          }`}
        >
          <img
            src={isScrolled ? logoLight : logoDark}
            alt="Logo"
            className="size-24 mx-6"
          />
          AJA Asesores Juridicos Asociados
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex space-x-8">
          {['#inicio', '#servicios', '#nosotros', '#contacto'].map((href) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              className={`nav-link transition-colors cursor-pointer hover:text-blue-600 ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
            >
              {href.replace('#', '').toUpperCase()}
            </a>
          ))}
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg mb-20">
          <div className="px-6 py-4 space-y-4">
            {['#inicio', '#servicios', '#nosotros', '#contacto'].map((href) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleSmoothScroll(e, href)}
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {href.replace('#', '').toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
