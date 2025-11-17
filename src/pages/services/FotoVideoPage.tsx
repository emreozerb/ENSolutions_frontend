import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function FotoVideoPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#272829] mb-8 inline-block">
            ← Terug naar Diensten
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            🎥 Foto & Videografie
          </h1>
          <p className="text-xl text-[#61677A] leading-relaxed mb-16">
            Krachtige visuele content die jouw verhaal vertelt en jouw publiek raakt. Van bedrijfsfilms tot social media content — visueel, boeiend en klaar om te delen.
          </p>

          <div className="space-y-16">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Bedrijfsfilms</h3>
                  <p className="text-[#61677A]">
                    Professionele video's die jouw bedrijf en waarden presenteren. Perfect voor je website, LinkedIn en presentaties.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Social Media Content</h3>
                  <p className="text-[#61677A]">
                    Snelle, aantrekkelijke video's en foto's optimaal voor Instagram, TikTok, Facebook en YouTube.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Drone Fotografie</h3>
                  <p className="text-[#61677A]">
                    Spectaculaire luchtfoto's en video's voor onroerend goed, events of promotie.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Event Fotografie</h3>
                  <p className="text-[#61677A]">
                    Professionele coverage van je events, conferenties en activiteiten.
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
                  <span>Professionele apparatuur en ervaren crew</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Van concept tot montage, volledig verzorgd</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Verhalen die mensen raken en merkvertrouwen opbouwen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Snelle turnaround en flexibel planning</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Ons proces
              </h2>
              <ol className="space-y-6 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">1</span>
                  <span><strong className="text-[#272829]">Briefing</strong> — We bespreken jouw doelen, target audience en visie</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">2</span>
                  <span><strong className="text-[#272829]">Planning</strong> — Productie schema, locaties en team worden vastgesteld</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">3</span>
                  <span><strong className="text-[#272829]">Productie</strong> — Professionele opnames met onze ervaren crew</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">4</span>
                  <span><strong className="text-[#272829]">Montage</strong> — Editing, kleur correctie en sound design</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">5</span>
                  <span><strong className="text-[#272829]">Aflevering</strong> — Finaal product gereed voor distributie</span>
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
