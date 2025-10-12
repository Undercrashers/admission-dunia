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
    logo: "college_building/niitk.jpeg",
  },
  {
    name: "BITS PILANI",
    location: "Pilani/Hyderabad/Goa",
    stream: "Engineering",
    degrees: ["B.Tech", "B.E."],
    logo: "college_building/bitsp.jpeg",
  },
  {
    name: "VIT",
    location: "Vellore/Chennai",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "college_building/viit.webp",
  },
  {
    name: "MANIPAL [MIT]",
    location: "Manipal/Bangalore",
    stream: "Engineering",
    degrees: ["B.Tech", "B.E."],
    logo: "college_building/manipal.jpeg",
  },
  {
    name: "AMRITA Vishwa Vidyapeetham",
    location: "Amaravati/Amritapuri",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "college_building/amrita.jpeg",
  },
  {
    name: "KALINGA Institute of Technology",
    location: "Bhubaneswar",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "college_building/kiit.jpg",
  },
  {
    name: "RAMAIAH Institute of Technology",
    location: "Bangalore",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "college_building/ram.jpeg",
  },
  {
    name: "BPIT",
    location: "New Delhi",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "college_building/bpit.jpeg",
  },
  {
    name: "DR. AKHILESH DAS GUPTA Institute",
    location: "New Delhi",
    stream: "Engineering",
    degrees: ["B.Tech", "MBA"],
    logo: "college_building/akhil.jpeg",
  },
  {
    name: "Banasthali Vidyapith",
    location: "Rajasthan",
    stream: "Engineering",
    degrees: ["B.Tech", "B.E."],
    logo: "college_building/banas.jpeg",
  },
  {
    name: "K.J Somaiya / Dr.D.Y. Patil",
    location: "Maharashtra",
    stream: "Engineering",
    degrees: ["B.Tech"],
    logo: "college_building/kj.jpeg",
  },
  {
    name: "NMIMS",
    location: "Mumbai/Bangalore",
    stream: "Management",
    degrees: ["BBA", "MBA"],
    logo: "college_building/nmim.jpeg",
  },
  {
    name: "IIET",
    location: "Multiple",
    stream: "Management",
    degrees: ["MBA"],
    logo: "college_building/iiet.jpeg",
  },
  {
    name: "AIIMS Delhi",
    location: "New Delhi",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "college_building/aims.jpeg",
  },
  {
    name: "CMC Vellore",
    location: "Vellore",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "college_building/cmc.jpeg",
  },
  {
    name: "JIPMER",
    location: "Puducherry",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "college_building/jpi.jpeg",
  },
  {
    name: "AFMC Pune",
    location: "Pune",
    stream: "Medical",
    degrees: ["MBBS"],
    logo: "college_building/afmc.webp",
  },
  {
    name: "KMC Manipal",
    location: "Manipal",
    stream: "Medical",
    degrees: ["MBBS", "BDS"],
    logo: "college_building/kmc.jpg",
  },
  {
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    stream: "Management",
    degrees: ["MBA", "PGDM"],
    logo: "college_building/iim.jpeg",
  },
  {
    name: "IIM Bangalore",
    location: "Bengaluru",
    stream: "Management",
    degrees: ["MBA", "PGDM"],
    logo: "college_building/iimb.jpeg",
  },
  {
    name: "FMS Delhi",
    location: "New Delhi",
    stream: "Management",
    degrees: ["MBA"],
    logo: "college_building/fms.jpeg",
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
    <section id="college-finder" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            Find Your Perfect College
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your stream and degree to explore top-ranked colleges suited for you.
          </p>
        </div>

        {/* Stream selection (subtle premium style) */}
        <div className="relative flex justify-center mb-10">
          <div className="backdrop-blur-md bg-white/60 border border-slate-200 shadow-sm rounded-full flex flex-wrap justify-center items-center gap-3 px-3 py-3">
            {STREAMS.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setActiveStream(s);
                  setActiveDegree("All");
                }}
                className={`relative px-6 py-2.5 text-sm md:text-base font-semibold rounded-full transition-all duration-300 
                ${
                  s === activeStream
                    ? "text-white bg-gradient-to-r from-blue-600 to-indigo-500 shadow-md"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {s}
                {s === activeStream && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 blur-md opacity-25 -z-10"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Degree filters */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-12">
          {DEGREE_MAP[activeStream].map((d) => (
            <button
              key={d}
              onClick={() => setActiveDegree(d)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
              ${
                d === activeDegree
                  ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {d === "All" ? "All Degrees" : d}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredColleges.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full">
              No colleges found for the selected criteria.
            </p>
          ) : (
            filteredColleges.map((college) => {
              // split locations by "/" and trim whitespace; fallback to single location
              const locations = college.location
                ? college.location.split("/").map((s) => s.trim()).filter(Boolean)
                : [];

              return (
                <div
                  key={college.name}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative w-full h-40">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-3 left-4 text-white">
                      <h3 className="text-lg font-semibold drop-shadow-sm">
                        {college.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Minimal, subtle spaced locations */}
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 tracking-wide">
                      {locations.length > 0 ? (
                        locations.map((loc, i) => (
                          <span key={`${college.name}-loc-${i}`} className="px-0.5">
                            {loc}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-gray-600">{college.location}</span>
                      )}
                    </div>

                    {/* Degrees (light weight) */}
                    <p className="mt-3 text-sm text-gray-700 font-medium">
                      {college.degrees.join(", ")}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={`/colleges?stream=${activeStream}&degree=${activeDegree}`}
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-indigo-600 transition-all"
          >
            View All Colleges (Coming Soon)
          </a>
        </div>
      </div>
    </section>
  );
}