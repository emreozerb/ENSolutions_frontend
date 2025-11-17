import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#272829] mb-8 inline-block">
            ← Terug naar Diensten
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            📱 Sociaal Media Beheer
          </h1>
          <p className="text-xl text-[#61677A] leading-relaxed mb-16">
            Slimme social media strategie en content die je doelgroep bereikt. We bouwen aan een groeiende community die jouw merk liefde geeft.
          </p>

          <div className="space-y-16">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Content Planning</h3>
                  <p className="text-[#61677A]">
                    Strategische content kalender gekoppeld aan jouw doelstellingen en seizoenen.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Content Creation</h3>
                  <p className="text-[#61677A]">
                    Professionele foto's, video's en teksten optimaal voor elk platform.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Community Management</h3>
                  <p className="text-[#61677A]">
                    Actieve interactie met je volgers voor een sterke community.
                  </p>
                </div>
                <div className="p-6 bg-[#FFF6E0] rounded-2xl">
                  <h3 className="text-xl font-semibold text-[#272829] mb-4">Analytics & Reporting</h3>
                  <p className="text-[#61677A]">
                    Maandelijks rapport met inzichten en aanbevelingen voor verbetering.
                  </p>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-[#FFF6E0]/20 p-8 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Platforms waar we op actief zijn
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-[#61677A]">
                <div>
                  <h3 className="font-semibold text-[#272829] mb-2">Instagram</h3>
                  <p>Visueel storytelling en community building</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#272829] mb-2">Facebook</h3>
                  <p>Community engagement en advertenties</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#272829] mb-2">TikTok</h3>
                  <p>Grappige, trends-gerichte video content</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#272829] mb-2">LinkedIn</h3>
                  <p>Professioneel content en thought leadership</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#272829] mb-2">YouTube</h3>
                  <p>Video's, tutorials en long-form content</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#272829] mb-2">Pinterest</h3>
                  <p>Visual discovery en traffic naar website</p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#272829] mb-8">
                Ons aanpak
              </h2>
              <ol className="space-y-6 text-[#61677A]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">1</span>
                  <span><strong className="text-[#272829]">Audit</strong> — Analyse van je huidige social presence</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">2</span>
                  <span><strong className="text-[#272829]">Strategie</strong> — Duidelijke doelstellingen en KPI's vastleggen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">3</span>
                  <span><strong className="text-[#272829]">Planning</strong> — Content kalender voor 3 maanden</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">4</span>
                  <span><strong className="text-[#272829]">Creatie</strong> — Inhoud aanmaken en posten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#272829] text-[#FFF6E0] flex items-center justify-center font-bold">5</span>
                  <span><strong className="text-[#272829]">Optimalisatie</strong> — Analyseren en verbeteren</span>
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
