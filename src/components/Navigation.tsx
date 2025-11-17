import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Diensten' },
    { path: '/projects', label: 'Werk' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#272829] py-6 shadow-lg' 
          : 'bg-[#272829] py-12'
      }`}
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="ENSolutions home">
          <img
            src="/Logo_Dark.png"
            alt="ENSolutions"
            className={`transition-all duration-700 ${
              isScrolled
                ? 'h-20 md:h-28'
                : 'h-32 md:h-44'
            } object-contain mr-4`}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg md:text-xl font-light transition-all duration-300 tracking-[0.12em] uppercase relative group ${
                location.pathname === item.path ? 'text-[#FFF6E0]' : 'text-[#61677A] hover:text-[#FFF6E0]'
              }`}
              style={{
                textShadow: location.pathname === item.path ? '0 0 10px rgba(255, 246, 224, 0.25)' : 'none',
              }}
            >
              {item.label}
              <span 
                className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full opacity-50' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-30'
                }`}
              />
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#FFF6E0] hover:text-[#D8D9DA] transition-colors duration-300 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={44} strokeWidth={1} /> : <Menu size={44} strokeWidth={1} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-[#272829] border-t"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="container mx-auto px-8 py-12 flex flex-col space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-light text-left tracking-[0.12em] uppercase text-lg md:text-xl transition-all duration-300 ${
                  location.pathname === item.path ? 'text-[#FFF6E0]' : 'text-[#61677A] hover:text-[#FFF6E0]'
                }`}
                style={{
                  textShadow: location.pathname === item.path ? '0 0 10px rgba(255, 246, 224, 0.25)' : 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}