import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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
    <div className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-2xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-8 text-center">
          Neem contact op – vrijblijvend
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Naam"
              className="w-full bg-transparent border-b-2 border-[#94a3b8] text-[#1a1a2e] text-lg py-3 px-0 focus:border-[#61677A] outline-none transition-colors placeholder-[#94a3b8]"
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
              className="w-full bg-transparent border-b-2 border-[#94a3b8] text-[#1a1a2e] text-lg py-3 px-0 focus:border-[#61677A] outline-none transition-colors placeholder-[#94a3b8]"
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
              className="w-full bg-transparent border-b-2 border-[#94a3b8] text-[#1a1a2e] text-lg py-3 px-0 focus:border-[#61677A] outline-none transition-colors resize-none placeholder-[#94a3b8]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-[#61677A] text-center py-3 font-semibold">
              Bedankt! We antwoorden binnen 24 uur.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-600 text-center py-3 font-semibold">
              Er is iets misgegaan. Probeer het opnieuw of stuur een email naar ensolutionsbe@hotmail.com
            </div>
          )}

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-gradient-to-r from-[#61677A] to-[#1a1a2e] text-white px-12 py-3 text-base font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 rounded-lg"
            >
              {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
