import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function WebDesignPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#272829] mb-8 inline-block">
            ← Terug naar Diensten
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            💻 Webdesign
          </h1>
          <p className="text-xl text-[#61677A] leading-relaxed mb-16">
            Responsieve websites die er op elk apparaat perfect uitzien. Gebruiksvriendelijk ontworpen, intuïtief in gebruik en volledig toegankelijk voor iedereen. Snel, modern en afgestemd op jouw doelgroep.
          </p>

          <div className="space-y-16">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Bedrijfssites</h3>
                  <p className="text-[#61677A]">
                    Moderne websites die jouw bedrijf professioneel presenteren en vertrouwen opbouwen.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Webshops</h3>
                  <p className="text-[#61677A]">
                    E-commerce platforms geoptimaliseerd voor conversie en eenvoudige beheer.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Landing Pages</h3>
                  <p className="text-[#61677A]">
                    Gerichte pagina's die leiden tot conversies en duidelijke call-to-actions bevatten.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">CMS Websites</h3>
                  <p className="text-[#61677A]">
                    Gemakkelijk zelf onderhoudbare websites zonder technische kennis nodig.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-[#FFF6E0]/20 p-8 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Onze specialiteiten
              </h2>
              <ul className="space-y-4 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Responsive design — perfect op desktop, tablet en mobiel</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>SEO optimalisatie — beter ranken in zoekmachines</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Snelle laadtijden — gebruikers houden ervan</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Analytics integratie — inzicht in je bezoekers</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-[#272829] font-bold mt-1">✓</span>
                  <span>Veiligheid — HTTPS en regelmatige back-ups</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Ons werkproces
              </h2>
              <ol className="space-y-6 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">1</span>
                  <span><strong className="text-[#272829]">Ontwerp</strong> — Wireframes en mockups voor jouw goedkeuring</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">2</span>
                  <span><strong className="text-[#272829]">Ontwikkeling</strong> — Code schrijven en testen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">3</span>
                  <span><strong className="text-[#272829]">Testen</strong> — Alles wordt uitgebreid getest op alle apparaten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">4</span>
                  <span><strong className="text-[#272829]">Optimalisatie</strong> — SEO, performance en security checks</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">5</span>
                  <span><strong className="text-[#272829]">Launch</strong> — Live gaan en training voor je team</span>
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
