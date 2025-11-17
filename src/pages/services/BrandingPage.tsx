import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function BrandingPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#272829] mb-8 inline-block">
            ← Terug naar Diensten
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            🎨 Branding
          </h1>
          <p className="text-xl text-[#61677A] leading-relaxed mb-16">
            Een sterke merkidentiteit die jouw bedrijf onderscheidt. Van logo tot huisstijl — we zorgen dat je herkend en onthouden wordt.
          </p>

          <div className="space-y-16">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Logo Design</h3>
                  <p className="text-[#61677A]">
                    Unieke, merkwaardige logo's die jouw bedrijf visueel definiëren.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Huisstijl</h3>
                  <p className="text-[#61677A]">
                    Complete richtlijnen voor kleuren, typografie, beelden en toon van communicatie.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Visuele Identiteit</h3>
                  <p className="text-[#61677A]">
                    Consistent ontwerp over alle touchpoints — van business cards tot social media.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Merkpositie</h3>
                  <p className="text-[#61677A]">
                    Duidelijk verhaal en toon die je onderscheidt van concurrenten.
                  </p>
                </div>
              </div>
            </div>

            {/* Why choose us */}
            <div className="bg-[#FFF6E0]/20 p-8 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Waarom voor ons kiezen?
              </h2>
              <ul className="space-y-4 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Onderzoek naar je markt, concurrenten en doelgroep</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Meerdere concepten en iteraties totdat je tevreden bent</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Alles is tijdloos en geschikt voor toekomst</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Volledige documentatie en alle bestandsformaten</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Ons creatief proces
              </h2>
              <ol className="space-y-6 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">1</span>
                  <span><strong className="text-[#272829]">Discovery</strong> — Diepgaande gesprekken over je merk en visie</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">2</span>
                  <span><strong className="text-[#272829]">Research</strong> — Analyse van markt, doelgroep en concurrenten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">3</span>
                  <span><strong className="text-[#272829]">Concept</strong> — Creatieve brainstorm en eerste concepten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">4</span>
                  <span><strong className="text-[#272829]">Design</strong> — Verfijning en uitwerking van het gekozen concept</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">5</span>
                  <span><strong className="text-[#272829]">Implementatie</strong> — Applicatie over alle merkmiddelen</span>
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
