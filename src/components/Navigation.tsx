import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../lib/Logo.png';
import brandWordmark from '../lib/nav bar kridhomes name picture.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: './index.html' },
    { name: 'About', href: './about.html' },
    { name: 'Services', href: './services.html' },
    { name: 'Team', href: './team.html' },
    { name: 'Contact', href: './contact.html' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full max-w-full overflow-x-clip bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="./index.html"
            className="flex min-w-0 flex-1 items-center space-x-2 sm:space-x-3"
            aria-label="Go to home page"
          >
            <img
              src={logo}
              alt="KridHomes logo"
              className="h-12 sm:h-14 md:h-20 w-auto shrink-0"
            />
            <img
              src={brandWordmark}
              alt="KridHomes wordmark"
              className="h-6 sm:h-7 md:h-10 w-auto max-w-[140px] sm:max-w-[220px] object-contain"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="./contact.html"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-gray-800 ml-3 shrink-0 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-800 hover:text-red-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="./contact.html"
              className="block text-center bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
