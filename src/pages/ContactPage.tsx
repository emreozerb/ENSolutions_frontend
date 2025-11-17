import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
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
    <div className="min-h-screen">
      <div className="flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-[#272829] mb-8 tracking-tight">
            Klaar om te groeien?
          </h1>
          <p className="text-[#61677A] text-xl md:text-2xl font-light leading-relaxed">
            Laten we samen werken aan jouw volgende stap
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mb-16">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Naam"
              className="w-full bg-transparent border-b border-[#61677A] text-[#272829] text-lg py-4 px-0 focus:border-[#272829] outline-none transition-colors placeholder-[#61677A]"
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
              className="w-full bg-transparent border-b border-[#61677A] text-[#272829] text-lg py-4 px-0 focus:border-[#272829] outline-none transition-colors placeholder-[#61677A]"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Bericht"
              className="w-full bg-transparent border-b border-[#61677A] text-[#272829] text-lg py-4 px-0 focus:border-[#272829] outline-none transition-colors resize-none placeholder-[#61677A]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-400 text-center py-4">
              Bedankt! We antwoorden binnen 24 uur.
            </div>
          )}

          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-[#272829] text-[#FFF6E0] px-16 py-4 text-lg font-normal hover:brightness-105 transition-all duration-300 disabled:opacity-50 rounded"
            >
              {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
            </button>
          </div>
        </form>

        <div className="text-center space-y-8 text-[#61677A] border-t border-[#61677A] pt-12">
          <div>
            <p className="text-sm text-gray-400 mb-4">We antwoorden binnen 24 uur</p>
            <a
              href="mailto:ensolutionsbe@hotmail.com"
              className="text-xl hover:text-[#272829] transition-colors"
            >
              ensolutionsbe@hotmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MapPin size={20} className="text-[#61677A]" />
            <a
              href="https://maps.app.goo.gl/iymS8pvgwYjtzJss8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#61677A] hover:text-[#272829] transition-colors"
            >
              Bekijk onze locatie
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <img
            src="/EN solutions logo.png"
            alt="ENSolutions"
            className="w-48 mx-auto mb-6 opacity-80"
          />
          <p className="text-gray-500 text-sm tracking-widest">
            Websites. Reclame. Groei.
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
