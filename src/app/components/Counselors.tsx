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
    },
  ];

  return (
    <section id="counselors" className="section-padding bg-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Meet Our Expert Counselors</h2>
        <p className="section-subtitle">
          Connect with our experienced team for personalized guidance and
          support throughout your admission journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((c) => (
            <div
              key={c.email}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center md:text-left"
            >
              <div className="flex flex-col md:flex-row items-center mb-4">
                <img
                  src={`https://placehold.co/100x100/${
                    c.color
                  }/FFFFFF?text=${encodeURIComponent(c.initials)}`}
                  alt={`Counselor ${c.name}`}
                  className="w-20 h-20 rounded-full mr-0 md:mr-5 mb-4 md:mb-0 flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{c.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold">
                    {c.role}
                  </p>
                </div>
              </div>
              <div className="text-sm text-slate-600 flex-grow mb-5">
                <p className="mb-2">
                  <strong>Experience:</strong> {c.exp}
                </p>
                <p>{c.about}</p>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <a
                  href={`tel:${c.phone}`}
                  className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center justify-center bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-slate-300 transition-colors text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
