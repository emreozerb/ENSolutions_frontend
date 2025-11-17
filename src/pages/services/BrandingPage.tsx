import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#1a1a2e] mb-8 inline-block font-semibold transition-colors duration-300">
            ← Terug naar Diensten
          </Link>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <img src="/branding.jpg" alt="Branding" className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            <img src="/creative_thinking.jpg" alt="Creatief denken" className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            🎨 Branding
          </h1>
          <p className="text-xl text-[#0f3460] leading-relaxed mb-20 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Een sterke merkidentiteit die jouw bedrijf onderscheidt. Van logo tot huisstijl — we zorgen dat je herkend en onthouden wordt.
          </p>

          <div className="space-y-20">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Logo Design</h3>
                  <p className="text-[#0f3460]">
                    Unieke, merkwaardige logo's die jouw bedrijf visueel definiëren.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Huisstijl</h3>
                  <p className="text-[#0f3460]">
                    Complete richtlijnen voor kleuren, typografie, beelden en toon van communicatie.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Visuele Identiteit</h3>
                  <p className="text-[#0f3460]">
                    Consistent ontwerp over alle touchpoints — van business cards tot social media.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Merkpositie</h3>
                  <p className="text-[#0f3460]">
                    Duidelijk verhaal en toon die je onderscheidt van concurrenten.
                  </p>
                </div>
              </div>
            </div>

            {/* Why choose us */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Waarom voor ons kiezen?
              </h2>
              <ul className="space-y-4 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Onderzoek naar je markt, concurrenten en doelgroep</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Meerdere concepten en iteraties totdat je tevreden bent</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Alles is tijdloos en geschikt voor toekomst</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Volledige documentatie en alle bestandsformaten</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Ons creatief proces
              </h2>
              <ol className="space-y-6 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">1</span>
                  <span><strong className="text-[#1a1a2e]">Discovery</strong> — Diepgaande gesprekken over je merk en visie</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">2</span>
                  <span><strong className="text-[#1a1a2e]">Research</strong> — Analyse van markt, doelgroep en concurrenten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">3</span>
                  <span><strong className="text-[#1a1a2e]">Concept</strong> — Creatieve brainstorm en eerste concepten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">4</span>
                  <span><strong className="text-[#1a1a2e]">Design</strong> — Verfijning en uitwerking van het gekozen concept</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">5</span>
                  <span><strong className="text-[#1a1a2e]">Implementatie</strong> — Applicatie over alle merkmiddelen</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
