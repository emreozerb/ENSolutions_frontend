import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
    setTimeout(() => setShowTagline(true), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src="/EN solutions logo.png"
              alt="ENSolutions"
              className="w-64 md:w-96 mx-auto mb-8 filter drop-shadow-2xl"
            />

            <div className="text-gray-300 text-xl md:text-2xl font-light tracking-widest mb-16">
              Websites. Reclame. Groei.
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-500 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
              Wij bouwen merken die groeien
            </h2>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown size={40} strokeWidth={1} className="text-gray-400" />
        </div>
      </section>

      {/* About section (moved from AboutPage) */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-12 tracking-tight text-white">
              Wij zijn ENSolutions
            </h1>
            <div className="space-y-8 text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
              <p>
                Een jong, dynamisch team gespecialiseerd in digitale groei.
              </p>
              <p>
                Wij combineren strategie, design en technologie om jouw merk te versterken.
              </p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-gray-300 space-y-6">
              <h3 className="text-3xl font-light text-white mb-4">Onze missie</h3>
              <p className="text-lg leading-relaxed">
                We bouwen stap voor stap aan een sterk merk. Elke klant, groot of klein, krijgt onze volle aandacht.
              </p>
              <p className="text-lg leading-relaxed">
                Professioneel in aanpak, menselijk in contact. We werken slim met kleine teams en directe communicatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
