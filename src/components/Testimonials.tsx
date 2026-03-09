import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ms. S. Kawilila',
    role: 'Luanshya Town Clerk',
    rating: 5,
    text: 'Working with KridHomes has been a refreshing experience. Their professionalism, timely communication, and genuine care for clients set them apart in the Real Estate industry.',
  },
  {
    name: 'Dr. Mugala',
    role: 'Client',
    rating: 4,
    text: 'KridHomes are outstanding. Speedy response and work is evident. Not to mention the high quality of their products. Will definitely call on them again.',
  },
  {
    name: 'Mr. & Mrs. Dowuona',
    role: 'Landlords',
    rating: 5,
    text: 'KridHomes has been proven to be professional, and reliable in their provision of property management services. We have had a great business relationship with them for close to 5 years now.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Don't just take our word for it. Here's what our valued clients have
            to say about working with KridHomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-red-100" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-red-600 text-sm font-semibold">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="./contact.html"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Become Our Next Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
