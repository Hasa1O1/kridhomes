export default function Clients() {
  const clients = [
    'Izwe Savings & Loans',
    'Oakberg',
    'Meraki Farms',
    'KeyHouse',
    'Prime Axis Designs',
    'Ludex Supply',
    'TEZ',
    'And More...',
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            TRUSTED BY LEADING ORGANIZATIONS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Corporate Clients</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Trusted by leading organizations across Zambia for professional
            real estate solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex items-center justify-center text-center hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            >
              <div className="text-gray-700 font-semibold">{client}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h3>
            <p className="text-gray-600">
              Fully certified and compliant with all regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              'PACRA',
              'Workers Compensation',
              'NAPSA',
              'ZIVS Member',
              'ZPPA',
            ].map((cert, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {cert}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
