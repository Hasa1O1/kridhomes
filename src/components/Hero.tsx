import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide">
              YOUR TRUSTED REAL ESTATE PARTNER
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Your Property,
            <br />
            <span className="text-red-600">In Safe Hands</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
            We exist so that you never have to walk alone in your property
            journey. Professional real estate solutions built on trust,
            integrity, and excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="/services.html#services"
              className="group bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/contact.html#contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg border-2 border-gray-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">2023</div>
              <div className="text-gray-600 mt-1">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">100+</div>
              <div className="text-gray-600 mt-1">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">100%</div>
              <div className="text-gray-600 mt-1">Licensed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
