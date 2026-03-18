import {
  Home,
  Calculator,
  Key,
  Settings,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Property Management',
    tagline: 'Stress-Free Ownership',
    description:
      'Rent collection, property concierge, lease administration, maintenance, repair works, tenant mix and screening.',
    features: [
      'Professional rent collection',
      'Comprehensive lease administration',
      'Regular maintenance & repairs',
      'Tenant screening & management',
    ],
  },
  {
    icon: Calculator,
    title: 'Valuation',
    tagline: 'Know Your True Worth',
    description:
      'Professional valuation of land, buildings, moveable assets, and biological assets.',
    features: [
      'Accurate property valuations',
      'Market analysis reports',
      'Asset valuation services',
      'Investment feasibility studies',
    ],
  },
  {
    icon: Key,
    title: 'Sales & Lettings',
    tagline: 'Smooth Transactions',
    description:
      'Asset disposal, space leasing, and comprehensive tenant screening services.',
    features: [
      'Property sales & acquisitions',
      'Residential & commercial lettings',
      'Professional tenant screening',
      'Market positioning strategy',
    ],
  },
  {
    icon: Settings,
    title: 'Facilities Management',
    tagline: 'Well-Maintained Investments',
    description:
      'Building performance efficiency, energy saving, space maximization, building safety, and cost control.',
    features: [
      'Building performance optimization',
      'Energy efficiency solutions',
      'Safety compliance management',
      'Operational cost control',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Consultancy',
    tagline: 'Expert Advice for Wise Decisions',
    description:
      'Property development feasibility studies, real estate data analytics, and financing options analysis.',
    features: [
      'Development feasibility studies',
      'Market research & analytics',
      'Investment strategy planning',
      'Financing options analysis',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We Provide The <span className="text-red-600">Best Solution</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            At KridHomes, we don't just provide real estate services — we build
            lifelong partnerships centered on our core values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 text-center md:text-left"
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <div className="text-red-600 font-semibold mb-4">
                  {service.tagline}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start justify-center gap-2 md:justify-start"
                    >
                      <svg
                        className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="./contact.html"
                  className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
