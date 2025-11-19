import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutPage() {
  const story = useScrollAnimation();
  const team = useScrollAnimation();
  const values = useScrollAnimation();
  const value1 = useScrollAnimation();
  const value2 = useScrollAnimation();
  const value3 = useScrollAnimation();
  const value4 = useScrollAnimation();
  const value5 = useScrollAnimation();
  const why = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            Over ons
          </h1>
          <p className="text-2xl text-gray-700 font-light leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Jong, gedreven en gebouwd op expertise
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={story.elementRef} className={`bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-20 hover:shadow-2xl transition-shadow duration-300 scroll-animate-up ${story.isVisible ? 'visible' : ''}`}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ons verhaal begon met één simpel idee: bedrijven verdienen visuele communicatie die écht werkt. Tijdens onze studies en de projecten die we ernaast uitvoerden, merkten we hoe vaak ondernemers worstelden met hun online zichtbaarheid, hun merkidentiteit of het creëren van sterke visuele content. We zagen kansen — en we besloten ze vast te grijpen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wat begon als een passie voor videografie, webdesign en branding, groeide uit tot een volledig creatief bureau dat bedrijven helpt om te groeien met impact. Dankzij onze achtergrond in IT, digitale media en marketing — aangevuld met praktijkervaring uit echte projecten — hebben we de technische kennis én de creativiteit om merken naar een hoger niveau te tillen.
            </p>
          </div>

          {/* Team Section */}
          <div ref={team.elementRef} className={`bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 rounded-2xl shadow-lg mb-20 hover:shadow-2xl transition-shadow duration-300 scroll-animate-up ${team.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Een jong en gemotiveerd team
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We zijn een team dat barst van energie, ideeën en ambitie. Jong, maar met een stevige basis: onze ervaring komt uit opleidingen, stages, opdrachten voor klanten en tal van eigen projecten waar we onze skills volledig hebben ontwikkeld.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We combineren frisse inzichten met een professionele aanpak. Geen logge processen, geen oude gewoontes — maar flexibiliteit, innovatie en een mindset die altijd vooruit wil.
            </p>
          </div>

          {/* Values Section */}
          <div ref={values.elementRef} className={`bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-20 hover:shadow-2xl transition-shadow duration-300 scroll-animate-up ${values.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
              Waar wij voor staan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Elke samenwerking rust bij ons op een aantal kernwaarden die we nooit loslaten:
            </p>

            <div className="space-y-6">
              <div ref={value1.elementRef} className={`border-l-4 border-black pl-6 hover:border-gray-600 hover:scale-105 transition-all duration-300 scroll-animate-left ${value1.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-semibold text-black mb-2">Betrouwbaarheid</h3>
                <p className="text-gray-600">We zeggen wat we doen en we doen wat we zeggen.</p>
              </div>

              <div ref={value2.elementRef} className={`border-l-4 border-black pl-6 hover:border-gray-600 hover:scale-105 transition-all duration-300 scroll-animate-right ${value2.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-semibold text-black mb-2">Transparante communicatie</h3>
                <p className="text-gray-600">Jij weet altijd waar we staan, wat we doen en waarom.</p>
              </div>

              <div ref={value3.elementRef} className={`border-l-4 border-black pl-6 hover:border-gray-600 hover:scale-105 transition-all duration-300 scroll-animate-left ${value3.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-semibold text-black mb-2">Kwaliteit boven alles</h3>
                <p className="text-gray-600">Geen half werk, geen 'goed genoeg', maar resultaat waar jij trots op kan zijn.</p>
              </div>

              <div ref={value4.elementRef} className={`border-l-4 border-black pl-6 hover:border-gray-600 hover:scale-105 transition-all duration-300 scroll-animate-right ${value4.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-semibold text-black mb-2">Creativiteit & innovatie</h3>
                <p className="text-gray-600">We zoeken altijd naar de meest originele én effectieve oplossing.</p>
              </div>

              <div ref={value5.elementRef} className={`border-l-4 border-black pl-6 hover:border-gray-600 hover:scale-105 transition-all duration-300 scroll-animate-left ${value5.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-semibold text-black mb-2">Samenwerking</h3>
                <p className="text-gray-600">We bouwen niet voor jou, maar met jou. Jouw input is goud waard.</p>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div ref={why.elementRef} className={`bg-gradient-to-br from-gray-100 to-white p-8 md:p-12 rounded-2xl shadow-lg scroll-animate-up ${why.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Waarom we dit doen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Omdat we geloven dat sterke visuele communicatie het verschil maakt voor elk bedrijf — groot of klein. En omdat we het geweldig vinden om ondernemers te helpen groeien met werk dat opvalt, raakt en blijft hangen.
            </p>
            <div className="bg-black text-white p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Ons doel?</h3>
              <p className="text-gray-300 leading-relaxed">
                Projecten creëren waar jij als klant blij van wordt, resultaten leveren die tellen en een samenwerking opbouwen die voelt als een partner, niet een leverancier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactButton />
      <Footer />
    </div>
  );
}
