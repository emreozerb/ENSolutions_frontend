import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function AllInOnePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#1a1a2e] mb-8 inline-block font-semibold transition-colors duration-300">
            ← Terug naar Diensten
          </Link>

          {/* Hero Images Grid */}
          <div className="mb-12 grid md:grid-cols-3 gap-6">
            <img src="/branding.jpg" alt="Branding" className="w-full h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            <img src="/webdesign.jpg" alt="Web Design" className="w-full h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            <img src="/photo-videography.jpg" alt="Videografie" className="w-full h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <img src="/socialmedia.jpg" alt="Social Media" className="w-full h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            <img src="/creative_thinking.jpg" alt="Creative Strategy" className="w-full h-64 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            ⭐ All-In-One
          </h1>
          <p className="text-xl text-[#0f3460] leading-relaxed mb-20 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Alles onder één dak: strategie, design, video en marketing gecombineerd. De perfecte keuze voor bedrijven die volledig willen transformeren.
          </p>

          <div className="space-y-20">
            {/* What's included */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Wat is inbegrepen?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">🎨 Branding</h3>
                  <ul className="text-[#0f3460] space-y-2">
                    <li>• Logo design</li>
                    <li>• Volledige huisstijl</li>
                    <li>• Brand guidelines</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">💻 Website</h3>
                  <ul className="text-[#0f3460] space-y-2">
                    <li>• Responsive design</li>
                    <li>• SEO optimalisatie</li>
                    <li>• Content management</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">🎥 Videografie</h3>
                  <ul className="text-[#0f3460] space-y-2">
                    <li>• Bedrijfsfilm</li>
                    <li>• Social media content</li>
                    <li>• Professionele fotografie</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">📱 Social Media</h3>
                  <ul className="text-[#0f3460] space-y-2">
                    <li>• Content strategie</li>
                    <li>• 3 maanden planning</li>
                    <li>• Monthly analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why All-In-One */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Waarom All-In-One?
              </h2>
              <ul className="space-y-4 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Alles is consistent en op elkaar afgestemd</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Efficiënter en sneller proces</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Beter waarde voor je geld</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Één aanspreekpunt voor alles</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Synchroon en volledig geïntegreerde aanpak</span>
                </li>
              </ul>
            </div>

            {/* The process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Het complete proces
              </h2>
              <ol className="space-y-6 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">1</span>
                  <span><strong className="text-[#1a1a2e]">Strategie sessie</strong> — We gaan diep in op jouw bedrijf, doelen en doelgroep</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">2</span>
                  <span><strong className="text-[#1a1a2e]">Brand development</strong> — Logo, kleuren, typografie en merkverhaal</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">3</span>
                  <span><strong className="text-[#1a1a2e]">Website ontwerp</strong> — Website volledig met jouw nieuwe branding</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">4</span>
                  <span><strong className="text-[#1a1a2e]">Content production</strong> — Foto's, video's en al je marketing content</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">5</span>
                  <span><strong className="text-[#1a1a2e]">Social strategie</strong> — Content kalender en eerste campagnes</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">6</span>
                  <span><strong className="text-[#1a1a2e]">Launch</strong> — Alles gaat live op hetzelfde moment</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">7</span>
                  <span><strong className="text-[#1a1a2e]">Ondersteuning</strong> — We blijven je ondersteunen en optimaliseren</span>
                </li>
              </ol>
            </div>

            {/* Best for */}
            <div className="border-2 border-[#61677A]/40 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Perfect voor...
              </h2>
              <ul className="space-y-3 text-[#0f3460]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#61677A] font-bold">✓</span>
                  <span>Startups die volledig willen starten</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#61677A] font-bold">✓</span>
                  <span>Bedrijven die een compleet rebrand willen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#61677A] font-bold">✓</span>
                  <span>Bedrijven die willen groeien en opschalen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#61677A] font-bold">✓</span>
                  <span>Organisaties die alles op één lijn willen krijgen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#61677A] font-bold">✓</span>
                  <span>Bedrijven die maximum impact willen met één investering</span>
                </li>
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
