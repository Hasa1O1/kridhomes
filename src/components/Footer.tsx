export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl font-bold">
                <span className="text-white">K</span>
                <span className="text-red-600">H</span>
              </div>
              <div className="text-sm font-semibold tracking-wider">
                <span className="text-red-600">KRID</span>{' '}
                <span className="text-white">HOMES</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted real estate partner in Zambia. We provide peace of
              mind in property dealings through professional, reliable, and
              client-focused solutions.
            </p>
            <div className="space-y-2 text-gray-400">
              <div>Phone: +260-978-571-130</div>
              <div>Email: Info@kridhomes.com</div>
              <div>Website: www.kridhomes.com</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="./index.html"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./about.html"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="./services.html"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="./team.html"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="./contact.html"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Property Management</li>
              <li className="text-gray-400">Valuation</li>
              <li className="text-gray-400">Sales & Lettings</li>
              <li className="text-gray-400">Facilities Management</li>
              <li className="text-gray-400">Consultancy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} KridHomes. All rights reserved. |
            Professionalism | Integrity | Innovation | Excellence |
            Accountability
          </p>
        </div>
      </div>
    </footer>
  );
}
