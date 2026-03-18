import { Award, GraduationCap, Briefcase } from 'lucide-react';
import ceoPicture from '../lib/ceo-photo.jpg';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            OUR TEAM
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Professional</span> Team
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Our team is headed by a licensed professional with close to two
            decades of experience in the real estate industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0 text-center md:text-left">
              <div className="md:col-span-2 bg-gradient-to-br from-red-600 to-red-700 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-48 h-48 mx-auto bg-white rounded-full overflow-hidden mb-6 border-4 border-white/30">
                    <img
                      src={ceoPicture}
                      alt="Mr. Chiyulo Mukonda"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Mr. Chiyulo Mukonda
                  </h3>
                  <div className="text-red-100 font-semibold">
                    Founder & CEO
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Leadership Excellence
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Licensed professional under the Zambia Institute of Estate
                      Agency (ZIEA) and the Zambia Institute of Valuation
                      Surveyors (ZIVS). With close to two decades of experience
                      in the real estate industry, bringing unmatched expertise
                      in property management, valuation, and consultancy.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          Education
                        </div>
                        <div className="text-gray-600 text-sm">
                          BSc. Real Estate
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          Certifications
                        </div>
                        <div className="text-gray-600 text-sm">
                          MZIVS | MZIEA | Registered Valuation Surveyor
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          Expertise
                        </div>
                        <div className="text-gray-600 text-sm">
                          Property Management, Valuation, Consultancy
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed italic">
                      "Under his leadership, KridHomes delivers innovative,
                      reliable, and client-focused real estate solutions,
                      ensuring every property transaction is handled with
                      integrity, professionalism, and trust."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
