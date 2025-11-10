"use client";
import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import {
  EnquiryModalProvider,
  useEnquiryModal,
} from "../../components/EnquiryModalContext";
import {
  getCountryData,
  formatCurrency,
  type University,
} from "@/data/studyAbroadData";

function CountryContent() {
  const params = useParams();
  const country = typeof params.country === "string" ? params.country : "";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { open } = useEnquiryModal();

  const countryData = getCountryData(country);

  const filteredUniversities = useMemo(() => {
    if (!countryData) return [];

    let filtered = countryData.universities;

    if (searchTerm) {
      filtered = filtered.filter(
        (university) =>
          university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          university.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation !== "all") {
      filtered = filtered.filter((university) =>
        university.location
          .toLowerCase()
          .includes(selectedLocation.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "fees":
          return a.totalFees.amount - b.totalFees.amount;
        case "location":
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

    return filtered;
  }, [countryData, searchTerm, selectedLocation, sortBy]);

  const locations = useMemo(() => {
    if (!countryData) return [];

    const locationSet = new Set(
      countryData.universities.map(
        (university: University) =>
          university.location.split(",")[1]?.trim() || university.location
      )
    );

    return Array.from(locationSet).sort();
  }, [countryData]);

  if (!countryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Country Not Found
            </h1>
            <p className="text-gray-600">
              Please check the URL or go back to the homepage.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Universities in {countryData.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover top medical universities offering quality education at
              affordable costs. Choose from {filteredUniversities.length}{" "}
              universities with detailed information about fees, facilities, and
              more.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search universities..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="fees">Sort by Fees</option>
                <option value="location">Sort by Location</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                  {university.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm line-clamp-1">
                      {university.location}
                    </span>
                  </div>

                  <div className="flex items-start text-green-600 font-semibold">
                    <svg
                      className="w-4 h-4 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    <span className="text-sm">
                      {formatCurrency(
                        university.totalFees.amount,
                        university.totalFees.currency
                      )}{" "}
                      / {university.totalFees.duration}
                    </span>
                  </div>
                </div>

                {university.highlights && university.highlights.length > 0 && (
                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {university.highlights
                        .slice(0, 3)
                        .map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            <span className="line-clamp-1">{highlight}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                <div className="border-t pt-4 mt-auto">
                  <button
                    onClick={open}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg"
                  >
                    Get Details & Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No universities found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Expert Guidance?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experienced counselors are here to help you choose the right
              university and navigate the admission process.
            </p>
            <button
              onClick={open}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Talk to Expert Counselor
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryModal />
    </div>
  );
}

export default function CountryPage() {
  return (
    <EnquiryModalProvider>
      <CountryContent />
    </EnquiryModalProvider>
  );
}
