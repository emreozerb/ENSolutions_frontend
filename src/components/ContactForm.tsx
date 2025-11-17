import { useState } from 'react';

export default function ContactForm() {
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
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-light text-[#272829] mb-8 text-center">
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
              className="w-full bg-transparent border-b border-[#61677A] text-[#272829] text-lg py-3 px-0 focus:border-[#272829] outline-none transition-colors placeholder-[#61677A]"
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
              className="w-full bg-transparent border-b border-[#61677A] text-[#272829] text-lg py-3 px-0 focus:border-[#272829] outline-none transition-colors placeholder-[#61677A]"
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
              className="w-full bg-transparent border-b border-[#61677A] text-[#272829] text-lg py-3 px-0 focus:border-[#272829] outline-none transition-colors resize-none placeholder-[#61677A]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-400 text-center py-3">
              Bedankt! We antwoorden binnen 24 uur.
            </div>
          )}

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-[#272829] text-[#FFF6E0] px-12 py-3 text-base font-normal hover:brightness-110 transition-all duration-300 disabled:opacity-50 rounded"
            >
              {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
