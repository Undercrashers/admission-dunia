export default function Testimonials() {
  const items = [
    {
      quote:
        "The counselors at Admission Dunia were incredibly supportive. They helped me get into my dream university, and I couldn't be more grateful!",
      name: "Anjali S.",
      sub: "Admitted to University of Toronto",
      color: "3B82F6",
      letter: "A",
    },
    {
      quote:
        "From shortlisting colleges to visa interviews, the team handled everything professionally. Highly recommended for anyone aspiring to study abroad.",
      name: "Rohan M.",
      sub: "Admitted to University of California",
      color: "10B981",
      letter: "R",
    },
    {
      quote:
        "A fantastic experience! Their structured approach and attention to detail made the complex application process feel simple and manageable.",
      name: "Priya K.",
      sub: "Admitted to London School of Economics",
      color: "8B5CF6",
      letter: "P",
    },
  ];
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Hear from students who achieved their dreams with our guidance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-slate-600 mb-6 italic">{t.quote}</p>
              <div className="flex items-center">
                <img
                  src={`https://placehold.co/50x50/${t.color}/FFFFFF?text=${t.letter}`}
                  alt={`Student ${t.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-slate-800">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
