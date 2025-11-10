"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllCountries, getCountryData } from "@/data/studyAbroadData";

const countries = getAllCountries();

export default function StudyAbroad() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Study Abroad - Medical Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class medical education opportunities across different
            countries with affordable fees and global recognition.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => {
            const countryData = getCountryData(country.slug);
            if (!countryData) return null;

            return (
              <Link
                key={country.slug}
                href={`/study-abroad/${country.slug}`}
                className="block group"
                onMouseEnter={() => setHoveredCard(country.slug)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                  {/* Country Flag Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="text-3xl bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
                      {country.flag}
                    </div>
                  </div>

                  {/* College Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/study-abroad/${country.slug}-medical.jpg`}
                      alt={`Medical college in ${country.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Country Name Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {country.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        Featured Institution
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {countryData.universities[0]?.name ||
                          "Top Medical University"}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {countryData.description}
                    </p>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Explore Colleges
                      </span>
                      <svg
                        className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                          hoveredCard === country.slug ? "translate-x-1" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Guidance for Study Abroad?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get expert counseling for admission procedures, visa requirements,
            and course selection for international medical education.
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent("openEnquiry");
              window.dispatchEvent(event);
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
