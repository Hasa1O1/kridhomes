import { Award, TrendingUp, Shield, Eye, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Trusted professionals who know the Zambian market.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Investments',
    description: 'Reliable valuations and strategies to grow your wealth.',
  },
  {
    icon: Shield,
    title: 'Hassle-Free Management',
    description: 'We handle the stress, you enjoy the returns.',
  },
  {
    icon: Eye,
    title: 'Integrity & Transparency',
    description: 'Clear processes, no hidden surprises.',
  },
  {
    icon: Heart,
    title: 'Peace of Mind',
    description: 'Your property, in safe and capable hands.',
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
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border-4 border-red-600">
              <div className="text-4xl font-bold text-red-600 mb-1">100%</div>
              <div className="text-gray-700 font-semibold">
                Client Satisfaction
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                What's In It <span className="text-red-600">For You?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                What are the benefits of this partnership? Here's what you gain
                when you work with KridHomes.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
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
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                Core Values
              </div>
              <div className="text-2xl font-bold">Professionalism</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                Core Values
              </div>
              <div className="text-2xl font-bold">Integrity</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                Core Values
              </div>
              <div className="text-2xl font-bold">Innovation</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                Core Values
              </div>
              <div className="text-2xl font-bold">Excellence</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider mb-2 opacity-90">
                Core Values
              </div>
              <div className="text-2xl font-bold">Accountability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
