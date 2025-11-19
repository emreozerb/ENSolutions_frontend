import { Link } from 'react-router-dom';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ServicesPage() {
  const service1 = useScrollAnimation();
  const service2 = useScrollAnimation();
  const service3 = useScrollAnimation();
  const service4 = useScrollAnimation();
  const service5 = useScrollAnimation();

  const services = [
    {
      id: 'foto-videografie',
      title: '🎥 Foto & Videografie',
      shortDesc: 'Krachtige visuele content die jouw verhaal vertelt en jouw publiek raakt.',
      link: '/services/foto-videografie'
    },
    {
      id: 'webdesign',
      title: '💻 Webdesign',
      shortDesc: 'Responsieve websites die er perfect uitzien en converteren op elk apparaat.',
      link: '/services/webdesign'
    },
    {
      id: 'branding',
      title: '🎨 Branding',
      shortDesc: 'Sterke merkidentiteit van logo tot huisstijl die jou onderscheidt.',
      link: '/services/branding'
    },
    {
      id: 'sociaal-media',
      title: '📱 Sociaal Media Beheer',
      shortDesc: 'Slimme social media strategie en content die je doelgroep bereikt.',
      link: '/services/sociaal-media'
    },
    {
      id: 'all-in-one',
      title: '⭐ All-In-One',
      shortDesc: 'Alles onder één dak: strategie, design, video en marketing gecombineerd.',
      link: '/services/all-in-one'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            Onze diensten
          </h1>
          <p className="text-xl text-[#0f3460] leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Vijf manieren waarop we jouw bedrijf naar een hoger niveau tillen. Kies de dienst die bij jou past, of combineer ze voor een complete aanpak.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const animations = [service1, service2, service3, service4, service5];
              const animation = animations[index];
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  ref={animation.elementRef}
                  className={`group p-8 rounded-3xl bg-white border-2 border-[#61677A]/20 shadow-lg hover:shadow-2xl hover:border-[#61677A]/50 transition-all duration-300 hover:-translate-y-3 hover:scale-105 scroll-animate-up ${animation.isVisible ? 'visible' : ''}`}
                >
                  <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#0f3460] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  <span className="inline-block text-[#61677A] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Meer informatie →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactButton />
      <Footer />
    </div>
  );
}
