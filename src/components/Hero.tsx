import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
    setTimeout(() => setShowTagline(true), 2000);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img
            src="/EN solutions logo.png"
            alt="ENSolutions"
            className="w-64 md:w-96 mx-auto mb-8 filter drop-shadow-2xl"
          />

          <div className="text-gray-400 text-xl md:text-2xl font-light tracking-widest mb-16">
            Websites. Reclame. Groei.
          </div>
        </div>

        <div className={`transition-all duration-1500 delay-500 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-4">
            Wij bouwen merken die groeien
          </h2>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-white transition-all duration-300 animate-bounce z-10"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </button>
    </section>
  );
}
