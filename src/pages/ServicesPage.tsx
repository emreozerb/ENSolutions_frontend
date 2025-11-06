import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-20 text-center tracking-tight">
            Onze diensten
          </h1>

          <div className="space-y-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Webshops die verkopen
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We ontwerpen en bouwen websites die presteren — modern, snel en resultaatgericht.
                </p>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Moderne designs afgestemd op jouw merk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Geoptimaliseerd voor conversie en gebruiksvriendelijkheid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Snelle laadtijden en mobiele optimalisatie</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Web design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Video production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Reclamevideo's met impact
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Professionele content met drones, camera's en creatieve regie.
                </p>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Van concept tot montage, volledig verzorgd</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Verhalen die mensen raken en merkvertrouwen opbouwen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Professionele apparatuur en ervaren crew</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Optimale groei voor elk bedrijf
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Wij combineren data, strategie en branding om bedrijven zichtbaar te maken.
                </p>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Strategische begeleiding voor digitale groei</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Focus op zichtbaarheid en merkidentiteit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Slimme keuzes voor online groei</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Business growth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
