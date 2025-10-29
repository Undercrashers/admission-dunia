// Using <img> to avoid Next Image SVG restrictions on remote placeholders
import Link from "next/link";

export default function Partners() {
  const logos = [
    {
      src: "/college/IITBombay.png",
      alt: "IIT Bombay Logo",
      slug: null, // No details page yet
    },
    {
      src: "/college/aimsdelhi.png",
      alt: "AIIMS Delhi Logo",
      slug: "aiims-delhi",
    },
    {
      src: "/college/iim.jpeg",
      alt: "IIM Ahmedabad Logo",
      slug: "iim-ahmedabad",
    },
    {
      src: "/college/bits.png",
      alt: "BITS Pilani Logo",
      slug: "bits-pilani",
    },
    {
      src: "/college/cmcvellore.png",
      alt: "CMC Vellore Logo",
      slug: "cmc-vellore",
    },
    {
      src: "/college/iimbangalore.png",
      alt: "IIM Bangalore Logo",
      slug: "iim-bangalore",
    },
    {
      src: "/college/vit.png",
      alt: "VIT Vellore Logo",
      slug: "vit-vellore",
    },
    {
      src: "/college/jpimer.png",
      alt: "JIPMER Logo",
      slug: "jipmer-puducherry",
    },
    {
      src: "/college/kiit.png",
      alt: "KIIT Logo",
      slug: "kiit-bhubaneswar",
    },
    {
      src: "/college/manipal.jpeg",
      alt: "Manipal Logo",
      slug: "manipal-institute-of-technology",
    },
    {
      src: "/college/nvims.png",
      alt: "NMIMS Logo",
      slug: "nmims-mumbai",
    },
    {
      src: "/college/amrita.png",
      alt: "Amrita Logo",
      slug: "amrita-vishwa-vidyapeetham",
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
          {logos.map((l, i) => {
            const content = (
              <img
                src={l.src}
                alt={l.alt}
                className="w-[200px] h-[100px] object-contain"
              />
            );

            return l.slug ? (
              <Link
                key={i}
                href={`/colleges/${l.slug}`}
                className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {content}
              </Link>
            ) : (
              <div key={i} className="mx-auto opacity-75">
                {content}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/colleges"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Explore More Colleges
          </Link>
        </div>
      </div>
    </section>
  );
}
