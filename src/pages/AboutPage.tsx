import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
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
