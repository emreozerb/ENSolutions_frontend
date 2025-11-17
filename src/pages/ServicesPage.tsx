import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ServicesPage() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            Onze diensten
          </h1>
          <p className="text-xl text-[#61677A] leading-relaxed">
            Vijf manieren waarop we jouw bedrijf naar een hoger niveau tillen. Kies de dienst die bij jou past, of combineer ze voor een complete aanpak.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group p-8 rounded-3xl bg-[#FFF6E0] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-semibold text-[#272829] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#61677A] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
                <span className="inline-block text-[#272829] font-light group-hover:translate-x-2 transition-transform duration-300">
                  Meer informatie →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
