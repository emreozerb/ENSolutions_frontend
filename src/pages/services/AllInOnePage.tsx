import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function AllInOnePage() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#272829] mb-8 inline-block">
            ← Terug naar Diensten
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            ⭐ All-In-One
          </h1>
          <p className="text-xl text-[#61677A] leading-relaxed mb-16">
            Alles onder één dak: strategie, design, video en marketing gecombineerd. De perfecte keuze voor bedrijven die volledig willen transformeren.
          </p>

          <div className="space-y-16">
            {/* What's included */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Wat is inbegrepen?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">🎨 Branding</h3>
                  <ul className="text-[#61677A] space-y-2">
                    <li>• Logo design</li>
                    <li>• Volledige huisstijl</li>
                    <li>• Brand guidelines</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">💻 Website</h3>
                  <ul className="text-[#61677A] space-y-2">
                    <li>• Responsive design</li>
                    <li>• SEO optimalisatie</li>
                    <li>• Content management</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">🎥 Videografie</h3>
                  <ul className="text-[#61677A] space-y-2">
                    <li>• Bedrijfsfilm</li>
                    <li>• Social media content</li>
                    <li>• Professionele fotografie</li>
                  </ul>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">📱 Social Media</h3>
                  <ul className="text-[#61677A] space-y-2">
                    <li>• Content strategie</li>
                    <li>• 3 maanden planning</li>
                    <li>• Monthly analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why All-In-One */}
            <div className="bg-[#FFF6E0]/20 p-8 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Waarom All-In-One?
              </h2>
              <ul className="space-y-4 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Alles is consistent en op elkaar afgestemd</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Efficiënter en sneller proces</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Beter waarde voor je geld</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Één aanspreekpunt voor alles</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Synchroon en volledig geïntegreerde aanpak</span>
                </li>
              </ul>
            </div>

            {/* The process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Het complete proces
              </h2>
              <ol className="space-y-6 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">1</span>
                  <span><strong className="text-[#272829]">Strategie sessie</strong> — We gaan diep in op jouw bedrijf, doelen en doelgroep</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">2</span>
                  <span><strong className="text-[#272829]">Brand development</strong> — Logo, kleuren, typografie en merkverhaal</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">3</span>
                  <span><strong className="text-[#272829]">Website ontwerp</strong> — Website volledig met jouw nieuwe branding</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">4</span>
                  <span><strong className="text-[#272829]">Content production</strong> — Foto's, video's en al je marketing content</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">5</span>
                  <span><strong className="text-[#272829]">Social strategie</strong> — Content kalender en eerste campagnes</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">6</span>
                  <span><strong className="text-[#272829]">Launch</strong> — Alles gaat live op hetzelfde moment</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">7</span>
                  <span><strong className="text-[#272829]">Ondersteuning</strong> — We blijven je ondersteunen en optimaliseren</span>
                </li>
              </ol>
            </div>

            {/* Best for */}
            <div className="border-2 border-[#272829] p-8 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Perfect voor...
              </h2>
              <ul className="space-y-3 text-[#61677A]">
                <li>✓ Startups die volledig willen starten</li>
                <li>✓ Bedrijven die een compleet rebrand willen</li>
                <li>✓ Bedrijven die willen groeien en opschalen</li>
                <li>✓ Organisaties die alles op één lijn willen krijgen</li>
                <li>✓ Bedrijven die maximum impact willen met één investering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
