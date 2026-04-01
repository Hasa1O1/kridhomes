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
    icon: Calculator,
    title: 'Valuation Services',
    tagline: 'Accurate and reliable valuation expertise',
    description:
      'Accurate and professional valuation services for informed decision-making.',
    features: [
      'Investment yield and return analysis',
      'Valuation of land, buildings, plant & machinery for various purposes',
      'Mining, Agricultural and biological asset valuation',
      'Movable asset valuation',
    ],
  },
  {
    icon: Key,
    title: 'Sales & Lettings',
    tagline: 'Professional transaction handling',
    description:
      'Efficient and professional handling of property transactions.',
    features: [
      'Market positioning and pricing strategies',
      'Tenant sourcing and screening',
      'Lease structuring and management',
      'Legal coordination for secure transactions',
    ],
  },
  {
    icon: Home,
    title: 'Property Management Services',
    tagline: 'Sustained value through active management',
    description:
      'Comprehensive management of property assets to ensure optimal performance, tenant satisfaction, and sustained value.',
    features: [
      'Rent collection and financial management',
      'Tenant relations and lease administration',
      'Routine inspections and property maintenance coordination',
      'Service charge management and budgeting',
      'Vacancy management and occupancy optimisation',
    ],
  },
  {
    icon: Settings,
    title: 'Facilities Management',
    tagline: 'Integrated asset support',
    description:
      'Integrated management of property assets to enhance efficiency, reduce costs, and support operational objectives.',
    features: [
      'Space utilisation and optimisation',
      'Energy efficiency and cost control',
      'Building services management',
      'PropTech integration and smart systems',
      'Real-time facilities support (concierge services)',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Property Consultancy',
    tagline: 'Data-driven advisory',
    description:
      'Professional, data-driven advisory backed by market research and practical experience.',
    features: [
      'Investment advisory and feasibility analysis',
      'Market research and property insights',
      'Pre-construction and development guidance',
      'Land administration and planning',
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
            Premium property solutions designed to protect, grow, and optimise
            real estate investments for our clients.
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
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {feature}
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
