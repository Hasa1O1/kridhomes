export default function Story() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide">
              OUR STORY
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Where We Come <span className="text-red-600">From</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Every great journey begins with a story. Ours started in Kitwe,
                when we saw families losing money to unregulated agents,
                property owners struggling to manage their investments, and
                corporates needing trustworthy partners in property dealings.
              </p>

              <p className="font-semibold text-gray-900">
                We asked ourselves: What if there was a property partner people
                could truly trust?
              </p>

              <p>
                Founded in 2023, KridHomes was born with a vision — to provide
                peace of mind in property dealings.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Licensed Professionals
                  </h3>
                  <p className="text-gray-600">
                    Certified under ZIEA & ZIVS, ensuring professionalism and
                    compliance
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Client-Centered Approach
                  </h3>
                  <p className="text-gray-600">
                    Tailored solutions designed around your specific needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Happy family with their new home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-red-600 text-white p-8 rounded-2xl shadow-xl max-w-xs text-center lg:left-auto lg:-left-8 lg:translate-x-0 lg:text-left">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-lg">
                Years of Combined Experience in Real Estate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
