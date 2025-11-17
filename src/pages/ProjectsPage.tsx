import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Website Development',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Bedrijfspresentatie',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Brand Identity',
      category: 'Branding & Strategy',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Product Launch',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'SaaS Platform',
      category: 'Website Development',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Corporate Video',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight">
              Ons werk
            </h1>
            <p className="text-[#0f3460] text-xl md:text-2xl font-light">
              Projecten waar we trots op zijn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-[#e94560] text-sm font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-light text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
