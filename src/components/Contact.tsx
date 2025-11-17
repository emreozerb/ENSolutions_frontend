import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-dark-800 flex items-center justify-center py-32 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-thin text-white mb-8 tracking-tight">
            Klaar om te groeien?
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed">
            Laten we samen werken aan jouw volgende stap
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mb-20">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Naam"
              className="w-full bg-transparent border-b border-gray-700 text-white text-lg py-4 px-0 focus:border-gray-500 outline-none transition-colors placeholder-gray-600"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-700 text-white text-lg py-4 px-0 focus:border-gray-500 outline-none transition-colors placeholder-gray-600"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Bericht"
              className="w-full bg-transparent border-b border-gray-700 text-white text-lg py-4 px-0 focus:border-gray-500 outline-none transition-colors resize-none placeholder-gray-600"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-400 text-center py-4">
              Bedankt! We antwoorden binnen 24 uur.
            </div>
          )}

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-white text-dark-900 px-16 py-4 text-lg font-light hover:bg-gray-200 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Verzenden...' : 'Verstuur'}
            </button>
          </div>
        </form>

        <div className="text-center space-y-6 text-gray-400">
          <p className="text-sm">We antwoorden binnen 24 uur</p>

          <div className="pt-8 border-t border-dark-700">
            <a
              href="mailto:ensolutionsbe@hotmail.com"
              className="text-lg hover:text-white transition-colors"
            >
              ensolutionsbe@hotmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <MapPin size={20} className="text-gray-600" />
            <a
              href="https://maps.app.goo.gl/iymS8pvgwYjtzJss8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Bekijk locatie
            </a>
          </div>
        </div>

        <div className="mt-32 text-center">
          <img
            src="Logo_Dark.png"
            alt="ENSolutions"
            className="w-48 mx-auto mb-8 opacity-80"
          />
          <p className="text-gray-600 text-sm tracking-widest">
            Websites. Reclame. Groei.
          </p>
        </div>

        <footer className="mt-20 pt-12 border-t border-dark-700 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 ENSolutions. Alle rechten voorbehouden.
          </p>
        </footer>
      </div>
    </section>
  );
}
