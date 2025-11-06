export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Bedrijfspresentatie',
      image: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Product Launch',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-dark-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-thin text-white mb-8 tracking-tight">
            Ons werk
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-light">
            Projecten waar we trots op zijn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-3xl font-light text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">
            Neem contact op – vrijblijvend
          </p>
        </div>
      </div>
    </section>
  );
}
