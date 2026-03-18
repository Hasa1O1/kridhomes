import { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';

const socials = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DRboyaY8u/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/kridhomes?igsh=MTZwZzg2aWwwbmViYg==',
  },
];

const whatsappNumber = '260978571130';
const emailAddress = 'Info@kridhomes.com';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const buildMessage = () =>
    [
      'Hello KridHomes,',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage())}`;
    window.location.href = whatsappUrl;
  };

  const handleEmailRedirect = () => {
    if (!formRef.current?.reportValidity()) {
      return;
    }

    const subject = `KridHomes Inquiry - ${formData.service}`;
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
    window.location.href = mailtoUrl;
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
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+260978571130"
                  className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group sm:flex-row sm:text-left"
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
                  className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group sm:flex-row sm:text-left"
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
                  className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group sm:flex-row sm:text-left"
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

                <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-xl sm:flex-row sm:text-left">
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
              <div className="flex justify-center gap-4 lg:justify-start">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    <Icon className="w-6 h-6" />
                  </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleWhatsAppSubmit}
              className="space-y-4"
            >
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
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <>
                  Send via WhatsApp
                  <MessageCircle size={20} />
                </>
              </button>

              <button
                type="button"
                onClick={handleEmailRedirect}
                className="w-full bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Send via Email
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
