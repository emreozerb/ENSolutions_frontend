import { Link } from 'react-router-dom';

export default function ContactButton() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-6">
          Geïnteresseerd?
        </h3>
        <p className="text-lg text-[#0f3460] mb-8 leading-relaxed">
          Laten we samen bespreken hoe we jouw bedrijf kunnen helpen groeien.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-[#61677A] to-[#1a1a2e] text-white px-12 py-4 text-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-lg"
        >
          Neem contact op
        </Link>
      </div>
    </div>
  );
}
