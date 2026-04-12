import izweLogo from '../lib/Izwe Savings & Loans Logo.png';
import keyHouseLogo from '../lib/KeyHouse Logo.jpeg';
import ludexLogo from '../lib/Ludex Supply Logo.png';
import merakiLogo from '../lib/Meraki Farms Logo.jpeg';
import oakbergLogo from '../lib/Oakberg Logo.jpeg';
import napsaLogo from '../lib/napsa logo.png';
import pacraLogo from '../lib/pacra logo.jpg';
import primeAxisLogo from '../lib/Prime Axis Designs Logo.jpeg';
import workersCompensationLogo from '../lib/workers compansation logo.png';
import zivsLogo from '../lib/ZIVS logo.png';
import zppaLogo from '../lib/ZPPA logo.jpg';

const clients = [
  {
    name: 'Ludex Supply',
    logo: ludexLogo,
  },
  {
    name: 'KeyHouse',
    logo: keyHouseLogo,
  },
  {
    name: 'Oakberg',
    logo: oakbergLogo,
  },
  {
    name: 'Izwe Savings & Loans',
    logo: izweLogo,
  },
  {
    name: 'Prime Axis Designs',
    logo: primeAxisLogo,
  },
  {
    name: 'Meraki Farms',
    logo: merakiLogo,
  },
  {
    name: 'And More...',
  },
];

const certifications = [
  {
    name: 'PACRA',
    logo: pacraLogo,
  },
  {
    name: 'Workers Compensation',
    logo: workersCompensationLogo,
    imageClassName: 'scale-95',
  },
  {
    name: 'NAPSA',
    logo: napsaLogo,
  },
  {
    name: 'ZIVS Member',
    logo: zivsLogo,
  },
  {
    name: 'ZPPA',
    logo: zppaLogo,
    imageClassName: 'scale-90',
  },
];

export default function Clients() {
  return (
    <section className="py-24 bg-gray-50 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
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
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl p-6 min-h-[168px] flex items-center justify-center text-center hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-24 w-full object-contain"
                />
              ) : (
                <div className="text-gray-700 font-semibold">{client.name}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h3>
            <p className="text-gray-600">
              Fully certified and compliant with all regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="text-center p-4 bg-gray-50 rounded-lg min-h-[176px] flex flex-col items-center justify-center"
              >
                <div className="h-24 sm:h-28 w-full flex items-center justify-center mb-3 overflow-visible">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} logo`}
                    className={`max-h-full max-w-full object-contain ${cert.imageClassName ?? ''}`}
                  />
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
