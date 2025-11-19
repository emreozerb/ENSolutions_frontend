import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-8 tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            Klaar om te groeien?
          </h1>
          <p className="text-[#0f3460] text-xl md:text-2xl font-light leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            Laten we samen werken aan jouw volgende stap
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Naam"
              className="w-full bg-transparent border-b-2 border-[#94a3b8] text-[#1a1a2e] text-lg py-4 px-0 focus:border-[#61677A] outline-none transition-colors placeholder-[#94a3b8]"
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
              className="w-full bg-transparent border-b-2 border-[#94a3b8] text-[#1a1a2e] text-lg py-4 px-0 focus:border-[#61677A] outline-none transition-colors placeholder-[#94a3b8]"
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
              className="w-full bg-transparent border-b-2 border-[#94a3b8] text-[#1a1a2e] text-lg py-4 px-0 focus:border-[#61677A] outline-none transition-colors resize-none placeholder-[#94a3b8]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-[#61677A] text-center py-4 font-semibold">
              Bedankt! We antwoorden binnen 24 uur.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-600 text-center py-4 font-semibold">
              Er is iets misgegaan. Probeer het opnieuw of stuur een email naar ensolutionsbe@hotmail.com
            </div>
          )}

          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-gradient-to-r from-[#61677A] to-[#1a1a2e] text-white px-16 py-4 text-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 rounded-lg"
            >
              {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
            </button>
          </div>
        </form>

        <div className="text-center space-y-8 text-[#0f3460] border-t-2 border-[#61677A]/30 pt-12">
          <div>
            <p className="text-sm text-[#94a3b8] mb-4">We antwoorden binnen 24 uur</p>
            <a
              href="mailto:ensolutionsbe@hotmail.com"
              className="text-xl hover:text-[#61677A] transition-colors font-semibold"
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
              className="text-[#0f3460] hover:text-[#61677A] transition-colors"
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
          <p className="text-[#94a3b8] text-sm tracking-widest">
            Websites. Reclame. Groei.
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
