import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const intro1 = useScrollAnimation();
  const intro2 = useScrollAnimation();
  const servicesTitle = useScrollAnimation();
  const service1 = useScrollAnimation();
  const service2 = useScrollAnimation();
  const service3 = useScrollAnimation();
  const service4 = useScrollAnimation();
  const benefitsTitle = useScrollAnimation();
  const benefit1 = useScrollAnimation();
  const benefit2 = useScrollAnimation();
  const benefit3 = useScrollAnimation();
  const benefit4 = useScrollAnimation();
  const workTitle = useScrollAnimation();
  const step1 = useScrollAnimation();
  const step2 = useScrollAnimation();
  const step3 = useScrollAnimation();
  const step4 = useScrollAnimation();
  const step5 = useScrollAnimation();
  const step6 = useScrollAnimation();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with background image */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/working.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Laat je bedrijf groeien met visuele impact
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 drop-shadow-md">
              Van strategie tot resultaat — wij maken jouw merk zichtbaar en onvergetelijk.
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown size={40} strokeWidth={1} className="text-white/60" />
        </div>
      </section>

      {/* Introduction Section with image */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={intro1.elementRef} className={`scroll-animate-left ${intro1.isVisible ? 'visible' : ''}`}>
              <h2 className="text-3xl md:text-5xl font-light text-[#1a1a2e] mb-8">
                Jouw partner in digitale groei
              </h2>
              <p className="text-xl text-[#0f3460] leading-relaxed">
                We helpen bedrijven om op te vallen, te groeien en te blijven hangen in het hoofd van hun doelgroep.
                Met videografie die vertelt, websites die converteren, branding die onderscheidt en reclame die werkt,
                tillen we jouw bedrijf naar een hoger niveau.
              </p>
            </div>
            <div ref={intro2.elementRef} className={`scroll-animate-right ${intro2.isVisible ? 'visible' : ''}`}>
              <img src="/office.jpg" alt="Office teamwork" className="w-full rounded-2xl shadow-2xl object-cover h-96 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 ref={servicesTitle.elementRef} className={`text-3xl md:text-5xl font-light text-[#1a1a2e] mb-16 text-center scroll-animate-up ${servicesTitle.isVisible ? 'visible' : ''}`}>
            Wat we doen
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div ref={service1.elementRef} className={`group p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-[#f8fafc] border border-[#61677A]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#61677A]/40 flex flex-col items-start relative overflow-hidden scroll-animate-up ${service1.isVisible ? 'visible' : ''}`}>
              <img src="/photo-videography.jpg" alt="Photo and Videography" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#61677A] to-[#1a1a2e] flex items-center justify-center text-white text-3xl mb-4 shadow-lg">🎥</div>
                <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-4">Videografie & Marketing</h3>
                <p className="text-[#0f3460] leading-relaxed text-lg">
                  Krachtige video's die jouw verhaal vertellen en jouw publiek raken. Van bedrijfsfilms tot social media content — visueel, boeiend en klaar om te delen.
                </p>
              </div>
            </div>
            <div ref={service2.elementRef} className={`group p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-[#f8fafc] border border-[#61677A]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#61677A]/40 flex flex-col items-start relative overflow-hidden scroll-animate-up ${service2.isVisible ? 'visible' : ''}`}>
              <img src="/webdesign.jpg" alt="Web design" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#61677A] to-[#1a1a2e] flex items-center justify-center text-white text-3xl mb-4 shadow-lg">💻</div>
                <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-4">Websites die werken</h3>
                <p className="text-[#0f3460] leading-relaxed text-lg">
                  Responsieve websites die er op elk apparaat perfect uitzien. Gebruiksvriendelijk ontworpen, intuïtief in gebruik en volledig toegankelijk voor iedereen. Snel, modern en afgestemd op jouw doelgroep.
                </p>
              </div>
            </div>
            <div ref={service3.elementRef} className={`group p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-[#f8fafc] border border-[#61677A]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#61677A]/40 flex flex-col items-start relative overflow-hidden scroll-animate-up ${service3.isVisible ? 'visible' : ''}`}>
              <img src="/branding.jpg" alt="Branding" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#61677A] to-[#1a1a2e] flex items-center justify-center text-white text-3xl mb-4 shadow-lg">🎨</div>
                <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-4">Branding die blijft plakken</h3>
                <p className="text-[#0f3460] leading-relaxed text-lg">
                  Een sterke merkidentiteit die jouw bedrijf onderscheidt. Van logo tot huisstijl — we zorgen dat je herkend en onthouden wordt.
                </p>
              </div>
            </div>
            <div ref={service4.elementRef} className={`group p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-[#f8fafc] border border-[#61677A]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#61677A]/40 flex flex-col items-start relative overflow-hidden scroll-animate-up ${service4.isVisible ? 'visible' : ''}`}>
              <img src="/socialmedia.jpg" alt="Social media" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#61677A] to-[#1a1a2e] flex items-center justify-center text-white text-3xl mb-4 shadow-lg">📢</div>
                <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-4">Reclame met resultaat</h3>
                <p className="text-[#0f3460] leading-relaxed text-lg">
                  Slimme campagnes die gezien worden. Online en offline reclame die jouw boodschap op het juiste moment bij de juiste mensen brengt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-4xl mx-auto">
          <h2 ref={benefitsTitle.elementRef} className={`text-3xl md:text-5xl font-light text-[#1a1a2e] mb-16 text-center scroll-animate-up ${benefitsTitle.isVisible ? 'visible' : ''}`}>
            Waarom met ons werken?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div ref={benefit1.elementRef} className={`flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-left ${benefit1.isVisible ? 'visible' : ''}`}>
              <span className="text-[#61677A] text-2xl flex-shrink-0">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Alles onder één dak</h3>
                <p className="text-[#0f3460]">één partner, één visie, één resultaat</p>
              </div>
            </div>
            <div ref={benefit2.elementRef} className={`flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-right ${benefit2.isVisible ? 'visible' : ''}`}>
              <span className="text-[#61677A] text-2xl flex-shrink-0">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Persoonlijke aanpak</h3>
                <p className="text-[#0f3460]">jouw doelen zijn onze missie</p>
              </div>
            </div>
            <div ref={benefit3.elementRef} className={`flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-left ${benefit3.isVisible ? 'visible' : ''}`}>
              <span className="text-[#61677A] text-2xl flex-shrink-0">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Bewezen resultaten</h3>
                <p className="text-[#0f3460]">we laten bedrijven groeien, meetbaar en zichtbaar</p>
              </div>
            </div>
            <div ref={benefit4.elementRef} className={`flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-right ${benefit4.isVisible ? 'visible' : ''}`}>
              <span className="text-[#61677A] text-2xl flex-shrink-0">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Modern en betrouwbaar</h3>
                <p className="text-[#0f3460]">met de nieuwste tools en technieken</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 ref={workTitle.elementRef} className={`text-3xl md:text-5xl font-light text-[#1a1a2e] mb-4 text-center scroll-animate-up ${workTitle.isVisible ? 'visible' : ''}`}>
            Werken met ons? Zo simpel is het
          </h2>
          <p className={`text-xl text-[#0f3460] text-center mb-20 scroll-animate-up ${workTitle.isVisible ? 'visible' : ''}`}>
            In enkele stappen naar jouw ideale oplossing
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div ref={step1.elementRef} className={`p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] shadow-md border-l-4 border-[#61677A] hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-left ${step1.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-semibold shadow-md">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Kennismaking</h3>
                  <p className="text-[#0f3460] leading-relaxed">
                    Na jouw contactaanvraag plannen we een meeting: online, bij ons op kantoor of bij jou ter plaatse. We luisteren naar jouw doelen, wensen en verwachtingen.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div ref={step2.elementRef} className={`p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] shadow-md border-l-4 border-[#61677A] hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-right ${step2.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-semibold shadow-md">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Duidelijke inventarisatie</h3>
                  <p className="text-[#0f3460] leading-relaxed">
                    We noteren alles tot in detail zodat we exact begrijpen wat jij nodig hebt.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div ref={step3.elementRef} className={`p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] shadow-md border-l-4 border-[#61677A] hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-left ${step3.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-semibold shadow-md">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Onderzoek & planning</h3>
                  <p className="text-[#0f3460] leading-relaxed">
                    Wij doen het nodige onderzoek, bekijken alle mogelijkheden en bepalen de beste strategie om jouw project succesvol te maken.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div ref={step4.elementRef} className={`p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] shadow-md border-l-4 border-[#61677A] hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-right ${step4.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-semibold shadow-md">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Strategiegesprek</h3>
                  <p className="text-[#0f3460] leading-relaxed">
                    We leggen onze aanpak aan je voor in een tweede meeting. We bespreken de richting, ideeën en planning, zodat jij precies weet wat je kunt verwachten.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div ref={step5.elementRef} className={`p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] shadow-md border-l-4 border-[#61677A] hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-left ${step5.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-semibold shadow-md">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Offerte op maat</h3>
                  <p className="text-[#0f3460] leading-relaxed">
                    Op basis van alle verzamelde informatie stellen we een duidelijke en transparante offerte op.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div ref={step6.elementRef} className={`p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] shadow-md border-l-4 border-[#61677A] hover:shadow-xl hover:scale-105 transition-all duration-300 scroll-animate-right ${step6.isVisible ? 'visible' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-semibold shadow-md">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Aan de slag</h3>
                  <p className="text-[#0f3460] leading-relaxed">
                    Na jouw akkoord starten we de uitvoering. Transparant, professioneel en volledig gericht op resultaat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactButton />
      <Footer />
    </div>
  );
}
