"use client";
import { useMemo, useState } from "react";

type College = {
  name: string;
  location: string;
  stream: "Engineering" | "Medical" | "Management";
  degrees: string[];
  logo: string;
};

const COLLEGES: College[] = [
  {
    name: "NIIT",
    location: "Kurukshetra",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=NIIT",
  },
  {
    name: "BITS PILANI",
    location: "Pilani/Hyderabad/Goa",
    stream: "Engineering",
    degrees: ["B.Tech", "B.E."],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=BITS",
  },
  {
    name: "VIT",
    location: "Vellore/Chennai",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=VIT",
  },
  {
    name: "MANIPAL [MIT]",
    location: "Manipal/Bangalore",
    stream: "Engineering",
    degrees: ["B.Tech", "B.E."],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=MIT",
  },
  {
    name: "AMRITA Vishwa Vidyapeetham",
    location: "Amaravati/Amritapuri",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=AMRITA",
  },
  {
    name: "KALINGA Institute of Technology",
    location: "Bhubaneswar",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=KIIT",
  },
  {
    name: "RAMAIAH Institute of Technology",
    location: "Bangalore",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=MSRIT",
  },
  {
    name: "BPIT",
    location: "New Delhi",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=BPIT",
  },
  {
    name: "DR. AKHILESH DAS GUPTA Institute",
    location: "New Delhi",
    stream: "Engineering",
    degrees: ["B.Tech", "MBA"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=ADGITM",
  },
  {
    name: "Banasthali Vidyapith",
    location: "Rajasthan",
    stream: "Engineering",
    degrees: ["B.Tech", "B.E."],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=BV",
  },
  {
    name: "K.J Somaiya / Dr.D.Y. Patil",
    location: "Maharashtra",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "https://placehold.co/100x100/3B82F6/FFFFFF?text=KJS",
  },
  {
    name: "NMIMS",
    location: "Mumbai/Bangalore",
    stream: "Management",
    degrees: ["BBA", "MBA"],
    logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=NMIMS",
  },
  {
    name: "IIET",
    location: "Multiple",
    stream: "Management",
    degrees: ["MBA"],
    logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=IIET",
  },
  {
    name: "AIIMS Delhi",
    location: "New Delhi",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "https://placehold.co/100x100/10B981/FFFFFF?text=AIIMS",
  },
  {
    name: "CMC Vellore",
    location: "Vellore",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "https://placehold.co/100x100/10B981/FFFFFF?text=CMC",
  },
  {
    name: "JIPMER",
    location: "Puducherry",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "https://placehold.co/100x100/10B981/FFFFFF?text=JIPMER",
  },
  {
    name: "AFMC Pune",
    location: "Pune",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "https://placehold.co/100x100/10B981/FFFFFF?text=AFMC",
  },
  {
    name: "KMC Manipal",
    location: "Manipal",
    stream: "Medical",
    degrees: ["MBBS", "BDS"],
    logo: "https://placehold.co/100x100/10B981/FFFFFF?text=KMC",
  },
  {
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    stream: "Management",
    degrees: ["MBA", "PGDM"],
    logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=IIMA",
  },
  {
    name: "IIM Bangalore",
    location: "Bengaluru",
    stream: "Management",
    degrees: ["MBA", "PGDM"],
    logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=IIMB",
  },
  {
    name: "FMS Delhi",
    location: "New Delhi",
    stream: "Management",
    degrees: ["MBA"],
    logo: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=FMS",
  },
];

const STREAMS = ["Engineering", "Medical", "Management"] as const;
const DEGREE_MAP: Record<(typeof STREAMS)[number], string[]> = {
  Engineering: ["All", "B.Tech", "B.E."],
  Medical: ["All", "MBBS", "BDS"],
  Management: ["All", "MBA", "BBA", "PGDM"],
};

export default function CollegeFinder() {
  const [activeStream, setActiveStream] =
    useState<(typeof STREAMS)[number]>("Engineering");
  const [activeDegree, setActiveDegree] = useState<string>("All");
  const collegesPerPage = 12;

  const filteredColleges = useMemo(() => {
    return COLLEGES.filter((c) => {
      const streamMatch = c.stream === activeStream;
      const degreeMatch =
        activeDegree === "All" || c.degrees.includes(activeDegree);
      return streamMatch && degreeMatch;
    }).slice(0, collegesPerPage);
  }, [activeStream, activeDegree]);

  return (
    <section id="college-finder" className="section-padding bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Find Your Perfect College
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select a stream and degree to discover top institutions tailored to
            your career path.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 flex-wrap">
          {STREAMS.map((s) => (
            <button
              key={s}
              className={`filter-btn ${s === activeStream ? "active" : ""}`}
              onClick={() => {
                setActiveStream(s);
                setActiveDegree("All");
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
            {DEGREE_MAP[activeStream].map((d) => (
              <button
                key={d}
                className={`degree-btn ${d === activeDegree ? "active" : ""}`}
                onClick={() => setActiveDegree(d)}
              >
                {d === "All" ? "All Degrees" : d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredColleges.length === 0 ? (
            <p className="text-slate-500 text-center col-span-full">
              No colleges found for the selected criteria.
            </p>
          ) : (
            filteredColleges.map((college) => (
              <div
                key={college.name}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 bg-slate-50 flex items-center justify-center h-24">
                  <img
                    src={college.logo}
                    alt={`${college.name} Logo`}
                    className="max-h-16 w-auto"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-md font-bold text-slate-800 truncate">
                    {college.name}
                  </h3>
                  <p className="text-sm text-slate-500">{college.location}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href={`/colleges?stream=${activeStream}&degree=${activeDegree}`}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md border border-slate-200"
          >
            View All Colleges (Coming Soon)
          </a>
        </div>
      </div>
    </section>
  );
}
