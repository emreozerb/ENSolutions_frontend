import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-light text-[#272829] mb-6 leading-tight">
              Laat je bedrijf groeien met visuele impact
            </h1>
            <p className="text-xl md:text-2xl text-[#61677A] font-light mb-8">
              Van strategie tot resultaat — wij maken jouw merk zichtbaar en onvergetelijk.
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown size={40} strokeWidth={1} className="text-gray-400" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#272829] mb-8">
            Jouw partner in digitale groei
          </h2>
          <p className="text-xl text-[#61677A] leading-relaxed">
            We helpen bedrijven om op te vallen, te groeien en te blijven hangen in het hoofd van hun doelgroep. 
            Met videografie die vertelt, websites die converteren, branding die onderscheidt en reclame die werkt, 
            tillen we jouw bedrijf naar een hoger niveau.
          </p>
        </div>
      </section>

      {/* Services Section */}
  <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-[#272829] mb-16 text-center">
            Wat we doen
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group p-8 rounded-3xl shadow-xl bg-[#FFF6E0] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-[#272829] mb-4 flex items-center">🎥 <span className="ml-2 text-[#61677A]">Videografie & Marketing</span></h3>
              <p className="text-[#61677A] leading-relaxed text-lg">
                Krachtige video's die jouw verhaal vertellen en jouw publiek raken. Van bedrijfsfilms tot social media content — visueel, boeiend en klaar om te delen.
              </p>
            </div>
            <div className="group p-8 rounded-3xl shadow-xl bg-[#FFF6E0] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-[#272829] mb-4 flex items-center">💻 <span className="ml-2 text-[#61677A]">Websites die werken</span></h3>
              <p className="text-[#61677A] leading-relaxed text-lg">
                Responsieve websites die er op elk apparaat perfect uitzien. Gebruiksvriendelijk ontworpen, intuïtief in gebruik en volledig toegankelijk voor iedereen. Snel, modern en afgestemd op jouw doelgroep.
              </p>
            </div>
            <div className="group p-8 rounded-3xl shadow-xl bg-[#FFF6E0] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-[#272829] mb-4 flex items-center">🎨 <span className="ml-2 text-[#61677A]">Branding die blijft plakken</span></h3>
              <p className="text-[#61677A] leading-relaxed text-lg">
                Een sterke merkidentiteit die jouw bedrijf onderscheidt. Van logo tot huisstijl — we zorgen dat je herkend en onthouden wordt.
              </p>
            </div>
            <div className="group p-8 rounded-3xl shadow-xl bg-[#FFF6E0] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-[#272829] mb-4 flex items-center">📢 <span className="ml-2 text-[#61677A]">Reclame met resultaat</span></h3>
              <p className="text-[#61677A] leading-relaxed text-lg">
                Slimme campagnes die gezien worden. Online en offline reclame die jouw boodschap op het juiste moment bij de juiste mensen brengt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-[#272829] mb-16 text-center">
            Waarom met ons werken?
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <span className="text-green-400 text-2xl">✔</span>
              <div>
                <h3 className="text-xl font-light text-[#272829] mb-2">Alles onder één dak</h3>
                <p className="text-[#61677A]">één partner, één visie, één resultaat</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-400 text-2xl">✔</span>
              <div>
                <h3 className="text-xl font-light text-[#272829] mb-2">Persoonlijke aanpak</h3>
                <p className="text-[#61677A]">jouw doelen zijn onze missie</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-400 text-2xl">✔</span>
              <div>
                <h3 className="text-xl font-light text-[#272829] mb-2">Bewezen resultaten</h3>
                <p className="text-[#61677A]">we laten bedrijven groeien, meetbaar en zichtbaar</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-400 text-2xl">✔</span>
              <div>
                <h3 className="text-xl font-light text-[#272829] mb-2">Modern en betrouwbaar</h3>
                <p className="text-[#61677A]">met de nieuwste tools en technieken</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 px-6 bg-[#FFF6E0]/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-[#272829] mb-4 text-center">
            Werken met ons? Zo simpel is het
          </h2>
          <p className="text-xl text-[#61677A] text-center mb-16">
            In enkele stappen naar jouw ideale oplossing
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#272829]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#272829] mb-2">Kennismaking</h3>
                  <p className="text-[#61677A] leading-relaxed">
                    Na jouw contactaanvraag plannen we een meeting: online, bij ons op kantoor of bij jou ter plaatse. We luisteren naar jouw doelen, wensen en verwachtingen.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#272829]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#272829] mb-2">Duidelijke inventarisatie</h3>
                  <p className="text-[#61677A] leading-relaxed">
                    We noteren alles tot in detail zodat we exact begrijpen wat jij nodig hebt.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#272829]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-semibold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#272829] mb-2">Onderzoek & planning</h3>
                  <p className="text-[#61677A] leading-relaxed">
                    Wij doen het nodige onderzoek, bekijken alle mogelijkheden en bepalen de beste strategie om jouw project succesvol te maken.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#272829]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-semibold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#272829] mb-2">Strategiegesprek</h3>
                  <p className="text-[#61677A] leading-relaxed">
                    We leggen onze aanpak aan je voor in een tweede meeting. We bespreken de richting, ideeën en planning, zodat jij precies weet wat je kunt verwachten.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#272829]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-semibold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#272829] mb-2">Offerte op maat</h3>
                  <p className="text-[#61677A] leading-relaxed">
                    Op basis van alle verzamelde informatie stellen we een duidelijke en transparante offerte op.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#272829]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-semibold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#272829] mb-2">Aan de slag</h3>
                  <p className="text-[#61677A] leading-relaxed">
                    Na jouw akkoord starten we de uitvoering. Transparant, professioneel en volledig gericht op resultaat.
                  </p>
                </div>
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
