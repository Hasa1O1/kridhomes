import { ArrowRight } from 'lucide-react';
import heroImage1 from '../lib/hero image 1.png';
import heroImage2 from '../lib/hero image 2.png';
import heroImage3 from '../lib/hero image 3.png';

const heroImages = [
  {
    src: heroImage1,
    alt: 'Featured property exterior view',
  },
  {
    src: heroImage2,
    alt: 'Featured property interior view',
  },
  {
    src: heroImage3,
    alt: 'Featured property architectural view',
  },
];

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
          <div className="relative overflow-hidden rounded-3xl bg-white/80 p-3 sm:p-4 shadow-inner">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

            <div className="hero-marquee flex w-max gap-4 sm:gap-6">
              {[...heroImages, ...heroImages].map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className="w-[260px] sm:w-[340px] lg:w-[380px] h-[220px] sm:h-[280px] lg:h-[320px] overflow-hidden rounded-2xl bg-gray-100 shadow-lg ring-1 ring-black/5 shrink-0"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

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
