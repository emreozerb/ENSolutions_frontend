import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-[#61677A] hover:text-[#1a1a2e] mb-8 inline-block font-semibold transition-colors duration-300">
            ← Terug naar Diensten
          </Link>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <img src="/socialmedia.jpg" alt="Social Media" className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            <img src="/idea.jpg" alt="Creative Ideas" className="w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            📱 Sociaal Media Beheer
          </h1>
          <p className="text-xl text-[#0f3460] leading-relaxed mb-20 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Slimme social media strategie en content die je doelgroep bereikt. We bouwen aan een groeiende community die jouw merk liefde geeft.
          </p>

          <div className="space-y-20">
            {/* What we offer */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Wat we bieden
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Content Planning</h3>
                  <p className="text-[#0f3460]">
                    Strategische content kalender gekoppeld aan jouw doelstellingen en seizoenen.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Content Creation</h3>
                  <p className="text-[#0f3460]">
                    Professionele foto's, video's en teksten optimaal voor elk platform.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Community Management</h3>
                  <p className="text-[#0f3460]">
                    Actieve interactie met je volgers voor een sterke community.
                  </p>
                </div>
                <div className="p-6 bg-white border-2 border-[#61677A]/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">Analytics & Reporting</h3>
                  <p className="text-[#0f3460]">
                    Maandelijks rapport met inzichten en aanbevelingen voor verbetering.
                  </p>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Platforms waar we op actief zijn
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-[#0f3460]">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Instagram</h3>
                  <p>Visueel storytelling en community building</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Facebook</h3>
                  <p>Community engagement en advertenties</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">TikTok</h3>
                  <p>Grappige, trends-gerichte video content</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">LinkedIn</h3>
                  <p>Professioneel content en thought leadership</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">YouTube</h3>
                  <p>Video's, tutorials en long-form content</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Pinterest</h3>
                  <p>Visual discovery en traffic naar website</p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8">
                Ons aanpak
              </h2>
              <ol className="space-y-6 text-[#0f3460]">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">1</span>
                  <span><strong className="text-[#1a1a2e]">Audit</strong> — Analyse van je huidige social presence</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">2</span>
                  <span><strong className="text-[#1a1a2e]">Strategie</strong> — Duidelijke doelstellingen en KPI's vastleggen</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">3</span>
                  <span><strong className="text-[#1a1a2e]">Planning</strong> — Content kalender voor 3 maanden</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">4</span>
                  <span><strong className="text-[#1a1a2e]">Creatie</strong> — Inhoud aanmaken en posten</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#61677A] to-[#1a1a2e] text-white flex items-center justify-center font-bold shadow-md">5</span>
                  <span><strong className="text-[#1a1a2e]">Optimalisatie</strong> — Analyseren en verbeteren</span>
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
