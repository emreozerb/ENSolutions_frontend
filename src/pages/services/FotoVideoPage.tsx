import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function FotoVideoPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#1a1a2e] mb-8 inline-block font-semibold transition-colors duration-300">
            ← Terug naar Diensten
          </Link>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <img src="/photo-videography.jpg" alt="Foto en Videografie" className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            <img src="/drone-shoot.jpg" alt="Drone fotografie" className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            🎥 Foto & Videografie
          </h1>
          <p className="text-xl text-[#0f3460] leading-relaxed mb-20 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Krachtige visuele content die jouw verhaal vertelt en jouw publiek raakt. Van bedrijfsfilms tot social media content — visueel, boeiend en klaar om te delen.
          </p>

          <div className="space-y-20">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Bedrijfsfilms</h3>
                  <p className="text-[#0f3460]">
                    Professionele video's die jouw bedrijf en waarden presenteren. Perfect voor je website, LinkedIn en presentaties.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Social Media Content</h3>
                  <p className="text-[#0f3460]">
                    Snelle, aantrekkelijke video's en foto's optimaal voor Instagram, TikTok, Facebook en YouTube.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Drone Fotografie</h3>
                  <p className="text-[#0f3460]">
                    Spectaculaire luchtfoto's en video's voor onroerend goed, events of promotie.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Event Fotografie</h3>
                  <p className="text-[#0f3460]">
                    Professionele coverage van je events, conferenties en activiteiten.
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
                  <span>Professionele apparatuur en ervaren crew</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Van concept tot montage, volledig verzorgd</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Verhalen die mensen raken en merkvertrouwen opbouwen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Snelle turnaround en flexibel planning</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Ons proces
              </h2>
              <ol className="space-y-6 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">1</span>
                  <span><strong className="text-[#1a1a2e]">Briefing</strong> — We bespreken jouw doelen, target audience en visie</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">2</span>
                  <span><strong className="text-[#1a1a2e]">Planning</strong> — Productie schema, locaties en team worden vastgesteld</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">3</span>
                  <span><strong className="text-[#1a1a2e]">Productie</strong> — Professionele opnames met onze ervaren crew</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">4</span>
                  <span><strong className="text-[#1a1a2e]">Montage</strong> — Editing, kleur correctie en sound design</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">5</span>
                  <span><strong className="text-[#1a1a2e]">Aflevering</strong> — Finaal product gereed voor distributie</span>
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
