"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { EnquiryModalProvider } from "../../components/EnquiryModalContext";
import EnquiryModal from "../../components/EnquiryModal";
import Link from "next/link";
import { Award } from "lucide-react";

const TOP_MEDICAL_COLLEGES = [
  {
    rank: 1,
    name: "AIIMS Delhi - All India Institute of Medical Sciences",
    location: "New Delhi, Delhi",
    rating: "5/5",
    ranking: "#1 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 50",
    deadline: "15 May - 30 Jun 2025",
    fees: "₹1,396",
    logo: "/college/aimsdelhi.png",
    slug: "aiims-delhi",
  },
  {
    rank: 2,
    name: "PGI Chandigarh - Postgraduate Institute of Medical Education & Research",
    location: "Chandigarh",
    rating: "4.9/5",
    ranking: "#2 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 215",
    deadline: "15 May - 30 Jun 2025",
    fees: "₹2,430",
    logo: "/college/aimsdelhi.png",
    slug: null,
  },
  {
    rank: 3,
    name: "CMC Vellore - Christian Medical College",
    location: "Vellore, Tamil Nadu",
    rating: "4.9/5",
    ranking: "#3 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 135",
    deadline: "1 Jun - 25 Jun 2025",
    fees: "₹2,00,000",
    logo: "/college/cmcvellore.png",
    slug: "cmc-vellore",
  },
  {
    rank: 4,
    name: "AIIMS Jodhpur",
    location: "Jodhpur, Rajasthan",
    rating: "4.9/5",
    ranking: "#4 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 265",
    deadline: "15 May - 30 Jun 2025",
    fees: "₹1,396",
    logo: "/college/aimsdelhi.png",
    slug: null,
  },
  {
    rank: 5,
    name: "JIPMER - Jawaharlal Institute of Postgraduate Medical Education & Research",
    location: "Puducherry",
    rating: "4.9/5",
    ranking: "#5 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 405",
    deadline: "15 May - 30 Jun 2025",
    fees: "₹1,800",
    logo: "/college/jpimer.png",
    slug: "jipmer-puducherry",
  },
  {
    rank: 6,
    name: "King George's Medical University",
    location: "Lucknow, Uttar Pradesh",
    rating: "4.8/5",
    ranking: "#6 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 510",
    deadline: "1 Jun - 28 Jun 2025",
    fees: "₹75,000",
    logo: "/college/aimsdelhi.png",
    slug: null,
  },
  {
    rank: 7,
    name: "AFMC Pune - Armed Forces Medical College",
    location: "Pune, Maharashtra",
    rating: "4.8/5",
    ranking: "#7 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 628",
    deadline: "20 May - 15 Jun 2025",
    fees: "Fully Funded",
    logo: "/college/aimsdelhi.png",
    slug: "afmc-pune",
  },
  {
    rank: 8,
    name: "Maulana Azad Medical College",
    location: "New Delhi, Delhi",
    rating: "4.8/5",
    ranking: "#8 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 785",
    deadline: "1 Jun - 25 Jun 2025",
    fees: "₹50,000",
    logo: "/college/aimsdelhi.png",
    slug: null,
  },
  {
    rank: 9,
    name: "KMC Manipal - Kasturba Medical College",
    location: "Manipal, Karnataka",
    rating: "4.7/5",
    ranking: "#9 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 3200",
    deadline: "10 Jun - 30 Jun 2025",
    fees: "₹15,00,000",
    logo: "/college/manipal.jpeg",
    slug: "kmc-manipal",
  },
  {
    rank: 10,
    name: "Grant Medical College",
    location: "Mumbai, Maharashtra",
    rating: "4.7/5",
    ranking: "#10 out of 500 in India 2025",
    cutoff: "NEET 2025 Cut off 2950",
    deadline: "5 Jun - 28 Jun 2025",
    fees: "₹60,000",
    logo: "/college/aimsdelhi.png",
    slug: null,
  },
];

export default function TopMedicalColleges() {
  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-green-50">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-green-600 via-teal-700 to-green-800 text-white py-20 pt-28 md:pt-32 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
                    NIRF Ranking 2025
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  Top 10 Medical
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Colleges in India
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Explore India&apos;s finest medical institutions offering
                  excellence in healthcare education, state-of-the-art
                  facilities, and exceptional clinical training opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold mb-1">10</div>
                    <div className="text-sm text-green-200">Top Colleges</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold mb-1">AIIMS</div>
                    <div className="text-sm text-green-200">
                      Premier Institute
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold mb-1">NEET</div>
                    <div className="text-sm text-green-200">
                      Based Admission
                    </div>
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
                  <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
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
                        NEET Cutoff
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
                    {TOP_MEDICAL_COLLEGES.map((college) => (
                      <tr
                        key={college.rank}
                        className="hover:bg-green-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-bold text-lg">
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
                                  className="hover:text-green-600"
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
                            <p className="text-lg font-bold text-green-600">
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
                {TOP_MEDICAL_COLLEGES.map((college) => (
                  <div
                    key={college.rank}
                    className="p-6 hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-bold flex-shrink-0">
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
                            <h3 className="font-bold text-gray-900 text-base mb-2 hover:text-green-600">
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
                        <p className="text-lg font-bold text-green-600">
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
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl text-lg"
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
