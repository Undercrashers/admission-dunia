// Using <img> to avoid Next Image SVG restrictions on remote placeholders

export default function Partners() {
  const logos = [
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=IIT+Bombay",
      alt: "IIT Bombay Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=AIIMS+Delhi",
      alt: "AIIMS Delhi Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=IIM+Ahmedabad",
      alt: "IIM Ahmedabad Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=BITS+Pilani",
      alt: "BITS Pilani Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=CMC+Vellore",
      alt: "CMC Vellore Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=IIM+Bangalore",
      alt: "IIM Bangalore Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=VIT+Vellore",
      alt: "VIT Vellore Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=JIPMER",
      alt: "JIPMER Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=KIIT",
      alt: "KIIT Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=Manipal+(MIT)",
      alt: "Manipal Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=NMIMS",
      alt: "NMIMS Logo",
    },
    {
      src: "https://placehold.co/200x100/FFFFFF/000000?text=Amrita",
      alt: "Amrita Logo",
    },
  ];

  return (
    <section id="top-colleges" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Our University Partners</h2>
        <p className="section-subtitle">
          We have strong ties with leading institutions in Engineering, Medical,
          and Management streams.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
          {logos.map((l, i) => (
            <div
              key={i}
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <img
                src={l.src}
                alt={l.alt}
                className="w-[200px] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#college-finder"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Explore More Colleges
          </a>
        </div>
      </div>
    </section>
  );
}
