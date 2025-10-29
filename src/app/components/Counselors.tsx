import { Phone, Mail, Award, Star } from "lucide-react";

export default function Counselors() {
  const list = [
    {
      name: "Rajesh Kumar",
      role: "Engineering Admissions Expert",
      exp: "12+ Years",
      initials: "RK",
      color: "3B82F6",
      phone: "+919876543210",
      email: "rajesh.k@admissiondunia.com",
      about:
        "Specializes in IIT, NIT, and BITS admissions. Has helped over 500 students secure seats in top engineering colleges.",
      specialties: ["IIT/NIT", "JEE Counseling", "Private Colleges"],
    },
    {
      name: "Sunita Patel",
      role: "Medical Admissions Lead",
      exp: "15+ Years",
      initials: "SP",
      color: "10B981",
      phone: "+919876543211",
      email: "sunita.p@admissiondunia.com",
      about:
        "Expert in NEET counseling and admissions for AIIMS, JIPMER, and other top medical colleges across India.",
      specialties: ["NEET Guidance", "AIIMS/JIPMER", "Medical Colleges"],
    },
    {
      name: "Amit Varma",
      role: "Management & MBA Specialist",
      exp: "10 Years",
      initials: "AV",
      color: "8B5CF6",
      phone: "+919876543212",
      email: "amit.v@admissiondunia.com",
      about:
        "IIM Alumnus specializing in CAT, GMAT, and applications for top B-Schools including IIMs and FMS.",
      specialties: ["CAT/GMAT", "IIM Applications", "B-Schools"],
    },
    {
      name: "Priya Desai",
      role: "Overseas Education Consultant",
      exp: "8+ Years",
      initials: "PD",
      color: "F59E0B",
      phone: "+919876543213",
      email: "priya.d@admissiondunia.com",
      about:
        "Guides students for admissions in the USA, Canada, UK, and Australia. Expertise in SOPs and visa processes.",
      specialties: ["Study Abroad", "SOP/Visa", "US/UK/Canada"],
    },
    {
      name: "Vikram Mehra",
      role: "Private Universities Head",
      exp: "11 Years",
      initials: "VM",
      color: "EF4444",
      phone: "+919876543214",
      email: "vikram.m@admissiondunia.com",
      about:
        "In-depth knowledge of admission processes for VIT, Manipal, SRM, KIIT, and other top private institutions.",
      specialties: ["VIT/Manipal", "SRM/KIIT", "Private Universities"],
    },
    {
      name: "Aisha Iyer",
      role: "Profile Building & BBA Expert",
      exp: "7 Years",
      initials: "AI",
      color: "6366F1",
      phone: "+919876543215",
      email: "aisha.i@admissiondunia.com",
      about:
        "Focuses on helping students build a strong profile for top BBA and integrated programs right from high school.",
      specialties: ["BBA Programs", "Profile Building", "IPM/IPMAT"],
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
            Meet Our Expert Counselors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our experienced team for personalized guidance and
            support throughout your admission journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((c, index) => (
            <div
              key={c.email}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
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
            Ready to Start Your Journey?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and get personalized
            guidance for your college admissions
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
