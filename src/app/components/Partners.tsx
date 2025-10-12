// Using <img> to avoid Next Image SVG restrictions on remote placeholders

export default function Partners() {
  const logos = [
    {
      src: "/college/IITBombay.png",
      alt: "IIT Bombay Logo",
    },
    {
      src: "/college/aimsdelhi.png",
      alt: "AIIMS Delhi Logo",
    },
    {
      src: "/college/iim.jpeg",
      alt: "IIM Ahmedabad Logo",
    },
    {
      src: "/college/bits.png",
      alt: "BITS Pilani Logo",
    },
    {
      src: "/college/cmcvellore.png",
      alt: "CMC Vellore Logo",
    },
    {
      src: "/college/iimbangalore.png",
      alt: "IIM Bangalore Logo",
    },
    {
      src: "/college/vit.png",
      alt: "VIT Vellore Logo",
    },
    {
      src: "/college/jpimer.png",
      alt: "JIPMER Logo",
    },
    {
      src: "/college/kiit.png",
      alt: "KIIT Logo",
    },
    {
      src: "/college/manipal.jpeg",
      alt: "Manipal Logo",
    },
    {
      src: "/college/nvims.png",
      alt: "NMIMS Logo",
    },
    {
      src: "/college/amrita.png",
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
            href="/colleges"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Explore More Colleges
          </a>
        </div>
      </div>
    </section>
  );
}
