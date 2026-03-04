import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message:
          'Thank you for contacting us! We will get back to you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Ready to start your property journey? Get in touch with us today
            and let's discuss how we can help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+260978571130"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Phone</div>
                    <div className="font-semibold text-gray-900">
                      +260-978-571-130
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:Info@kridhomes.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-semibold text-gray-900">
                      Info@kridhomes.com
                    </div>
                  </div>
                </a>

                <a
                  href="http://www.kridhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Website</div>
                    <div className="font-semibold text-gray-900">
                      www.kridhomes.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold text-gray-900">
                      Kitwe, Zambia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: 'facebook', label: 'Facebook' },
                  { icon: 'instagram', label: 'Instagram' },
                  { icon: 'linkedin', label: 'LinkedIn' },
                  { icon: 'whatsapp', label: 'WhatsApp' },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href="#"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    <div className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  placeholder="+260..."
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Property Management">
                    Property Management
                  </option>
                  <option value="Valuation">Valuation</option>
                  <option value="Sales & Lettings">Sales & Lettings</option>
                  <option value="Facilities Management">
                    Facilities Management
                  </option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your property needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
