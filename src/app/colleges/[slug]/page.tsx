"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { EnquiryModalProvider } from "../../components/EnquiryModalContext";
import EnquiryModal from "../../components/EnquiryModal";
import { getCollegeBySlug } from "../../../data/colleges";
import {
  ChevronLeft,
  MapPin,
  Award,
  BookOpen,
  Users,
  DollarSign,
  Globe,
  GraduationCap,
  Building2,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export default function CollegeDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const college = slug ? getCollegeBySlug(slug) : null;
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  if (!college) {
    return (
      <EnquiryModalProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                College Not Found
              </h1>
              <Link href="/colleges" className="text-blue-600 hover:underline">
                Back to Colleges
              </Link>
            </div>
          </main>
          <Footer />
          <EnquiryModal />
        </div>
      </EnquiryModalProvider>
    );
  }

  const normalizeImageSrc = (src?: string) => {
    if (!src) return "/default-college.jpg";
    if (src.startsWith("./")) return src.replace("./", "/");
    if (!src.startsWith("/") && !src.startsWith("http")) return "/" + src;
    return src;
  };

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />

        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <Link
                href="/colleges"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Colleges
              </Link>
            </div>
          </div>

          {/* Hero Section - Centered Photo with College Info */}
          <div className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              {/* Centered Main Image */}
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={normalizeImageSrc(college.photo)}
                    alt={college.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* College Name and NIRF Ranking - Centered */}
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  {college.name}
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  {college.nirtRanking && (
                    <div className="flex items-center bg-amber-50 px-6 py-3 rounded-full">
                      <Award className="w-6 h-6 mr-2 text-amber-600" />
                      <span className="text-lg font-semibold text-gray-900">
                        NIRF Ranking:{" "}
                        <span className="text-amber-600">
                          {college.nirtRanking}
                        </span>
                      </span>
                    </div>
                  )}
                  {college.location && (
                    <div className="flex items-center bg-blue-50 px-6 py-3 rounded-full">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      <span className="text-lg font-medium text-gray-900">
                        {college.location}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    const event = new CustomEvent("openEnquiry");
                    window.dispatchEvent(event);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Stats Cards - Row 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-3">
                    Study Modes
                  </h3>
                </div>
                <div className="space-y-2">
                  {college.studyModes?.map((mode, idx) => (
                    <div key={idx} className="bg-blue-50 px-4 py-2 rounded-lg">
                      <p className="font-semibold text-gray-900">{mode}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-3">
                    Levels Offered
                  </h3>
                </div>
                <div className="space-y-2">
                  {college.levels.map((level, idx) => (
                    <div key={idx} className="bg-green-50 px-4 py-2 rounded-lg">
                      <p className="font-semibold text-gray-900">{level}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-3">
                    Course Fee
                  </h3>
                </div>
                <p className="text-2xl font-bold text-purple-600">
                  {college.fee || "Contact for info"}
                </p>
              </div>

              {/* About Section - Large Card */}
              <div className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    <Building2 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">
                    About {college.name}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {college.about ||
                    "Information about this college will be available soon."}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-900 font-medium">
                      World-Class Infrastructure & Research
                    </span>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-900 font-medium">
                      Strong Corporate Tie-Ups
                    </span>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-900 font-medium">
                      Experienced Faculty & Researchers
                    </span>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-900 font-medium">
                      Excellent Placement Record
                    </span>
                  </div>
                </div>
              </div>

              {/* Programs Offered */}
              <div className="md:col-span-1 lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">
                    Programs Offered
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {college.programs.map((program, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100"
                    >
                      <span className="text-orange-600 mr-3 font-bold">•</span>
                      <span className="font-semibold text-gray-900">
                        {program}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarships */}
              <div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Trophy className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">
                    Scholarships
                  </h3>
                </div>
                <div className="space-y-3">
                  {college.scholarships?.map((scholarship, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100"
                    >
                      <span className="text-emerald-600 mr-3 font-bold">✓</span>
                      <span className="font-semibold text-gray-900">
                        {scholarship}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placements */}
              <div className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">
                    Placement Partners
                  </h2>
                </div>

                {college.placements && college.placements.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                    {college.placements.map((placement, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center border border-blue-100 hover:shadow-md transition-shadow"
                      >
                        <span className="font-bold text-center text-gray-900 text-sm md:text-base">
                          {placement.company}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">
                    No placement information available.
                  </p>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Placement Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                      1
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">
                      Personal Interview
                    </h4>
                    <p className="text-gray-700">
                      Face-to-face discussion with recruiters
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                      2
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">
                      Group Discussion
                    </h4>
                    <p className="text-gray-700">
                      Collaborative problem-solving sessions
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                      3
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">
                      Written Test
                    </h4>
                    <p className="text-gray-700">
                      Technical and aptitude assessments
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                {college.faq && college.faq.length > 0 ? (
                  <div className="space-y-4">
                    {college.faq.map((item, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() =>
                            setExpandedFAQ(expandedFAQ === idx ? null : idx)
                          }
                          className="w-full px-6 py-4 text-left font-bold text-gray-900 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex justify-between items-center transition-colors"
                        >
                          <span className="text-lg">{item.question}</span>
                          <span
                            className={`transition-transform text-purple-600 text-xl ${
                              expandedFAQ === idx ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {expandedFAQ === idx && (
                          <div className="px-6 py-4 text-gray-700 bg-white text-base leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">
                    No FAQs available for this college.
                  </p>
                )}
              </div>

              {/* Website Info */}
              {college.website && (
                <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row items-center justify-between text-white">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <Globe className="w-8 h-8 mr-3" />
                        <h3 className="text-2xl font-bold">
                          Visit Official Website
                        </h3>
                      </div>
                      <p className="text-blue-100">
                        Learn more about admission process and programs
                      </p>
                    </div>
                    <a
                      href={`https://${college.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                    >
                      {college.website}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enquiry CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Free Career Consultation
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Fill the form to get expert guidance from our counselors
              </p>
              <button
                onClick={() => {
                  const event = new CustomEvent("openEnquiry");
                  window.dispatchEvent(event);
                }}
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-full transition-colors shadow-xl text-lg"
              >
                Enquire Now
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
