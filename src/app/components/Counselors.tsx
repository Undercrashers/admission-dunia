import { Phone, Mail, Award, Star } from "lucide-react";

export default function Counselors() {
  const list = [
    {
      name: "Vaid Vrath",
      role: "NEET & Medical Admissions Expert",
      exp: "20 Years",
      initials: "VV",
      color: "10B981",
      phone: "+919955035575",
      email: "vaidvrath@admissiondunia.com",
      about:
        "Expert in NEET counseling and medical admissions with 20 years of experience. Specializes in guiding students for top medical colleges across India.",
      specialties: [
        "NEET Counseling",
        "Medical Admissions",
        "AIIMS/JIPMER",
        "Government Medical Colleges",
      ],
    },
  ];

  return (
    <section
      id="counselors"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Counselor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our experienced medical admissions expert for
            personalized guidance and support throughout your NEET counseling
            journey.
          </p>
        </div>

        <div className="flex justify-center">
          {list.map((c, index) => (
            <div
              key={c.email}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 w-full max-w-md"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Header with gradient */}
              <div
                className="h-24 bg-gradient-to-r relative"
                style={{
                  background: `linear-gradient(135deg, #${c.color} 0%, #${c.color}dd 100%)`,
                }}
              >
                <div className="absolute -bottom-12 left-6">
                  <div className="relative">
                    <img
                      src={`https://placehold.co/100x100/${
                        c.color
                      }/FFFFFF?text=${encodeURIComponent(c.initials)}`}
                      alt={`Counselor ${c.name}`}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 px-6 pb-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {c.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    {c.role}
                  </p>
                  <div className="flex items-center space-x-1 mb-3">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {c.exp} Experience
                    </span>
                  </div>
                </div>

                {/* About */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {c.about}
                </p>

                {/* Specialties */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {c.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a
                    href={`tel:${c.phone}`}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Medical Journey?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our NEET expert and get personalized
            guidance for your medical college admissions
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent("openEnquiry");
              window.dispatchEvent(event);
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Free Consultation Now
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
