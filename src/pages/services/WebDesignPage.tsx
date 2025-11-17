import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#1a1a2e] mb-8 inline-block font-semibold">
            ← Terug naar Diensten
          </Link>

          <div className="mb-12">
            <img src="/webdesign.jpg" alt="Webdesign" className="w-full h-80 object-cover rounded-3xl shadow-2xl" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight">
            💻 Webdesign
          </h1>
          <p className="text-xl text-[#0f3460] leading-relaxed mb-16">
            Responsieve websites die er op elk apparaat perfect uitzien. Gebruiksvriendelijk ontworpen, intuïtief in gebruik en volledig toegankelijk voor iedereen. Snel, modern en afgestemd op jouw doelgroep.
          </p>

          <div className="space-y-16">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Bedrijfssites</h3>
                  <p className="text-[#0f3460]">
                    Moderne websites die jouw bedrijf professioneel presenteren en vertrouwen opbouwen.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Webshops</h3>
                  <p className="text-[#0f3460]">
                    E-commerce platforms geoptimaliseerd voor conversie en eenvoudige beheer.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Landing Pages</h3>
                  <p className="text-[#0f3460]">
                    Gerichte pagina's die leiden tot conversies en duidelijke call-to-actions bevatten.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">CMS Websites</h3>
                  <p className="text-[#0f3460]">
                    Gemakkelijk zelf onderhoudbare websites zonder technische kennis nodig.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Onze specialiteiten
              </h2>
              <ul className="space-y-4 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Responsive design — perfect op desktop, tablet en mobiel</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>SEO optimalisatie — beter ranken in zoekmachines</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Snelle laadtijden — gebruikers houden ervan</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Analytics integratie — inzicht in je bezoekers</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#61677A] font-bold mt-1 text-xl">✓</span>
                  <span>Veiligheid — HTTPS en regelmatige back-ups</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Ons werkproces
              </h2>
              <ol className="space-y-6 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">1</span>
                  <span><strong className="text-[#1a1a2e]">Ontwerp</strong> — Wireframes en mockups voor jouw goedkeuring</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">2</span>
                  <span><strong className="text-[#1a1a2e]">Ontwikkeling</strong> — Code schrijven en testen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">3</span>
                  <span><strong className="text-[#1a1a2e]">Testen</strong> — Alles wordt uitgebreid getest op alle apparaten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">4</span>
                  <span><strong className="text-[#1a1a2e]">Optimalisatie</strong> — SEO, performance en security checks</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">5</span>
                  <span><strong className="text-[#1a1a2e]">Launch</strong> — Live gaan en training voor je team</span>
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
