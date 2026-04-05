import { Award, TrendingUp, Eye, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Experienced Property Professionals',
    description:
      'A team with strong expertise in real estate investment, valuation, land management, project planning, and asset management.',
  },
  {
    icon: TrendingUp,
    title: 'Investment-Focused Approach',
    description:
      'We exist to safeguard your real estate investments by providing:',
    points: [
      'Yield analysis and return projections',
      'Payback period assessments',
      'Rental cash flow analysis',
      'Strategic asset growth insights',
    ],
  },
  {
    icon: Eye,
    title: 'Integrity & Transparency',
    description:
      'We uphold legally compliant and internationally accepted standards to protect your financial interests.',
  },
  {
    icon: Shield,
    title: 'Stress-free Management',
    description: 'Delivering:',
    points: [
      'Portfolio growth and value enhancement',
      'Well-maintained and sustainable properties',
      'Safe, secure, and functional environments',
    ],
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Construction professionals reviewing plans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 -top-8 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl border-4 border-red-600 text-center lg:left-auto lg:right-8 lg:translate-x-0">
              <div className="text-4xl font-bold text-red-600 mb-1">100%</div>
              <div className="text-gray-700 font-semibold">
                Client Satisfaction
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
                WHY CHOOSE KRIDHOMES
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-red-600">KridHomes</span>
              </h2>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 lg:flex-row lg:items-start"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                      {benefit.points && (
                        <ul className="mt-3 space-y-2 text-gray-600">
                          {benefit.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start justify-center gap-2 lg:justify-start"
                            >
                              <span className="mt-0.5 text-red-600">-</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <a
                href="./contact.html"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <div className="text-sm uppercase tracking-[0.3em] font-bold opacity-90">
              Core Values
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div className="text-2xl font-medium">Professionalism</div>
            <div className="text-2xl font-medium">Integrity</div>
            <div className="text-2xl font-medium">Innovation</div>
            <div className="text-2xl font-medium">Excellence</div>
            <div className="text-2xl font-medium">Accountability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
