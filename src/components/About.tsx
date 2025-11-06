export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-dark-900 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-thin mb-8 tracking-tight">
            Wij zijn ENSolutions
          </h2>
          <div className="space-y-8 text-gray-400 text-xl md:text-2xl font-light leading-relaxed">
            <p>
              Een jong, dynamisch team gespecialiseerd in digitale groei.
            </p>
            <p>
              Wij combineren strategie, design en technologie om jouw merk te versterken.
            </p>
          </div>
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
