import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update CSS variables with the current navigation height so pages don't get hidden
  useLayoutEffect(() => {
    const setNavVars = () => {
      const height = navRef.current ? navRef.current.offsetHeight : 0;
      document.documentElement.style.setProperty('--nav-height', `${height}px`);
      document.documentElement.style.setProperty('--nav-scroll-offset', `${height}px`);
    };

    setNavVars();
    window.addEventListener('resize', setNavVars);
    return () => window.removeEventListener('resize', setNavVars);
  }, [isScrolled]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Over Ons' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { path: '/services/foto-videografie', label: 'Foto & Videografie' },
    { path: '/services/webdesign', label: 'Webdesign' },
    { path: '/services/branding', label: 'Branding' },
    { path: '/services/sociaal-media', label: 'Sociaal Media Beheer' },
    { path: '/services/all-in-one', label: 'All-In-One' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-black py-6 shadow-lg'
          : 'bg-black py-12'
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Home Link */}
          <Link
            to="/"
            className={`text-lg md:text-xl font-light transition-all duration-300 tracking-[0.12em] uppercase relative group ${
              location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Home
            <span 
              className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ${
                location.pathname === '/' ? 'w-full opacity-50' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-30'
              }`}
            />
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link
              to="/services"
              className={`text-lg md:text-xl font-light transition-all duration-300 tracking-[0.12em] uppercase flex items-center gap-2 ${
                location.pathname.includes('/services') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Diensten
              <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg transition-all duration-300 z-50 ${
                isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-all border-b border-gray-700 last:border-b-0 last:rounded-b-lg"
                  onClick={() => setIsServicesDropdownOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Over Ons Link */}
          <Link
            to="/about"
            className={`text-lg md:text-xl font-light transition-all duration-300 tracking-[0.12em] uppercase relative group ${
              location.pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Over Ons
            <span
              className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ${
                location.pathname === '/about' ? 'w-full opacity-50' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-30'
              }`}
            />
          </Link>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`text-lg md:text-xl font-light transition-all duration-300 tracking-[0.12em] uppercase relative group ${
              location.pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Contact
            <span
              className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ${
                location.pathname === '/contact' ? 'w-full opacity-50' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-30'
              }`}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-300 transition-colors duration-300 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={44} strokeWidth={1} /> : <Menu size={44} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-black border-t border-gray-700"
        >
          <div className="container mx-auto px-8 py-12 flex flex-col space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-light text-left tracking-[0.12em] uppercase text-lg md:text-xl transition-all duration-300 ${
                  location.pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Services Menu */}
            <div className="border-t border-gray-700 pt-8">
              <Link
                to="/services"
                className="font-light text-left tracking-[0.12em] uppercase text-lg md:text-xl text-white block mb-6"
              >
                Diensten
              </Link>
              <div className="flex flex-col space-y-4 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="font-light text-left tracking-[0.1em] text-gray-400 hover:text-white transition-all"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
