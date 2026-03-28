import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-100 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Modern commercial building"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/75 to-red-50/60"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8 bg-white/65 backdrop-blur-sm rounded-3xl px-6 py-10 sm:px-10 shadow-2xl border border-white/50">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide">
              YOUR TRUSTED REAL ESTATE PARTNER
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-[0.08em]">
              KRIDHOMES
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-red-600">
              Your Property Partner
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
            We exist so that you never have to walk alone in your property
            journey. Professional real estate solutions built on trust,
            integrity, and excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="./services.html"
              className="group bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="./contact.html"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg border-2 border-gray-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
