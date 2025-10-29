"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { EnquiryModalProvider } from "../../components/EnquiryModalContext";
import EnquiryModal from "../../components/EnquiryModal";
import Link from "next/link";
import { Award } from "lucide-react";

const TOP_ENGINEERING_COLLEGES = [
  {
    rank: 1,
    name: "IIT Bombay - Indian Institute of Technology - [IITB]",
    location: "Mumbai, Maharashtra",
    rating: "5/5",
    ranking: "#1 out of 150 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 66",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,36,000",
    logo: "/college/IITBombay.png",
    slug: null,
  },
  {
    rank: 2,
    name: "IIT Delhi - Indian Institute of Technology [IITD]",
    location: "New Delhi, Delhi NCR",
    rating: "4.9/5",
    ranking: "#1 out of 286 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 355",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,27,750",
    logo: "/college/iitdelhi.png",
    slug: null,
  },
  {
    rank: 3,
    name: "IIT Madras - Indian Institute of Technology - [IITM]",
    location: "Chennai, Tamil Nadu",
    rating: "4.9/5",
    ranking: "#1 out of 25 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 5512",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,53,417",
    logo: "/college/IIT_Madras_Logo.png",
    slug: null,
  },
  {
    rank: 4,
    name: "IIT Kanpur - Indian Institute of Technology - [IITK]",
    location: "Kanpur, Uttar Pradesh",
    rating: "4.9/5",
    ranking: "#3 out of 269 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 271",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,53,120",
    logo: "/college/iitk.png",
    slug: null,
  },
  {
    rank: 5,
    name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    location: "Kharagpur, West Bengal",
    rating: "4.9/5",
    ranking: "#4 out of 150 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 953",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,30,600",
    logo: "/college/IITKGP.png",
    slug: null,
  },
  {
    rank: 6,
    name: "IIT Roorkee - Indian Institute of Technology - [IITR]",
    location: "Roorkee, Uttarakhand",
    rating: "4.9/5",
    ranking: "#5 out of 286 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 845",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,24,100",
    logo: "/college/IITR.jpeg",
    slug: null,
  },
  {
    rank: 7,
    name: "IIT Guwahati - Indian Institute of Technology - [IITG]",
    location: "Guwahati, Assam",
    rating: "4.9/5",
    ranking: "#5 out of 269 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 1276",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,43,700",
    logo: "/college/IITG.png",
    slug: null,
  },
  {
    rank: 8,
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    rating: "4.9/5",
    ranking: "#2 out of 200 in India 2025",
    cutoff: "-",
    deadline: "26 May - 10 Jun 2025",
    fees: "₹6,38,175",
    logo: "/college/bits.png",
    slug: "bits-pilani",
  },
  {
    rank: 9,
    name: "IIT Hyderabad - Indian Institute of Technology - [IITH]",
    location: "Hyderabad, Telangana",
    rating: "4.9/5",
    ranking: "#7 out of 300 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 1015",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,49,888",
    logo: "/college/IITH.png",
    slug: null,
  },
  {
    rank: 10,
    name: "IIT BHU - Indian Institute of Technology",
    location: "Varanasi, Uttar Pradesh",
    rating: "4.9/5",
    ranking: "#8 out of 150 in India 2025",
    cutoff: "JEE-Advanced 2025 Cut off 1924",
    deadline: "3 June - 22 Jun 2025",
    fees: "₹2,18,815",
    logo: "/college/IIT_BHU.jpeg",
    slug: null,
  },
];

export default function TopEngineeringColleges() {
  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white py-20 pt-28 md:pt-32 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
                    NIRF Ranking 2025
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  Top 10 Engineering
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Colleges in India
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Discover India&apos;s premier engineering institutions
                  offering world-class education, cutting-edge research
                  facilities, and exceptional placement opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold mb-1">10</div>
                    <div className="text-sm text-blue-200">Top Colleges</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold mb-1">50L+</div>
                    <div className="text-sm text-blue-200">Highest Package</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm text-blue-200">Placements</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                className="w-full h-16 fill-current text-gray-50"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
          </div>

          {/* Table Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wide">
                        Rank
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
                        College Name
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
                        NIRF Ranking
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
                        JEE Cutoff
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
                        Deadline
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
                        Annual Fees
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {TOP_ENGINEERING_COLLEGES.map((college) => (
                      <tr
                        key={college.rank}
                        className="hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg">
                            #{college.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-4">
                            <img
                              src={college.logo}
                              alt={college.name}
                              className="w-16 h-16 object-contain rounded-lg"
                            />
                            <div>
                              {college.slug ? (
                                <Link
                                  href={`/colleges/${college.slug}`}
                                  className="hover:text-blue-600"
                                >
                                  <h3 className="font-bold text-gray-900 text-base mb-1">
                                    {college.name}
                                  </h3>
                                </Link>
                              ) : (
                                <h3 className="font-bold text-gray-900 text-base mb-1">
                                  {college.name}
                                </h3>
                              )}
                              <p className="text-sm text-gray-600">
                                {college.location} |{" "}
                                <span className="text-amber-500">
                                  ★ {college.rating}
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-semibold text-gray-900">
                              {college.ranking}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-gray-900">
                            {college.cutoff}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">
                            {college.deadline}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-lg font-bold text-blue-600">
                              {college.fees}
                            </p>
                            <p className="text-xs text-gray-500">
                              1st Year Fees
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-gray-200">
                {TOP_ENGINEERING_COLLEGES.map((college) => (
                  <div
                    key={college.rank}
                    className="p-6 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold flex-shrink-0">
                        #{college.rank}
                      </div>
                      <div className="flex-1">
                        <img
                          src={college.logo}
                          alt={college.name}
                          className="w-16 h-16 object-contain rounded-lg mb-3"
                        />
                        {college.slug ? (
                          <Link href={`/colleges/${college.slug}`}>
                            <h3 className="font-bold text-gray-900 text-base mb-2 hover:text-blue-600">
                              {college.name}
                            </h3>
                          </Link>
                        ) : (
                          <h3 className="font-bold text-gray-900 text-base mb-2">
                            {college.name}
                          </h3>
                        )}
                        <p className="text-sm text-gray-600 mb-3">
                          {college.location} |{" "}
                          <span className="text-amber-500">
                            ★ {college.rating}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold text-gray-900">
                          {college.ranking}
                        </span>
                      </div>
                      <p>
                        <span className="font-semibold">Cutoff:</span>{" "}
                        {college.cutoff}
                      </p>
                      <p>
                        <span className="font-semibold">Deadline:</span>{" "}
                        {college.deadline}
                      </p>
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-lg font-bold text-blue-600">
                          {college.fees}
                        </p>
                        <p className="text-xs text-gray-500">1st Year Fees</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  const event = new CustomEvent("openEnquiry");
                  window.dispatchEvent(event);
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl text-lg"
              >
                Get Free Career Counseling
              </button>
            </div>
          </div>
        </main>

        <Footer />
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  );
}
