"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EnquiryModalProvider } from "../components/EnquiryModalContext";
import { ALL_COLLEGES, College } from "../../data/colleges";

export default function CollegesPage() {
  const [filtered, setFiltered] = useState<College[]>(ALL_COLLEGES);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [degreeFilter, setDegreeFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Image Fix
  const normalizeImageSrc = (src?: string) => {
    if (!src) return "/default-college.jpg";
    if (src.startsWith("./")) return src.replace("./", "/");
    if (!src.startsWith("/") && !src.startsWith("http")) return "/" + src;
    return src;
  };

  // Unique states
  const uniqueStates = useMemo(() => {
    const states = new Set(ALL_COLLEGES.map((c) => c.state));
    return Array.from(states).sort();
  }, []);

  // Unique programs
  const uniquePrograms = useMemo(() => {
    const programs = new Set<string>();
    ALL_COLLEGES.forEach((c) => c.programs.forEach((p) => programs.add(p)));
    return Array.from(programs).sort();
  }, []);

  useEffect(() => {
    let results = ALL_COLLEGES;

    if (search.trim()) {
      results = results.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (stateFilter !== "all") {
      results = results.filter((c) => c.state === stateFilter);
    }

    if (degreeFilter !== "all") {
      results = results.filter((c) =>
        c.programs.some((p) =>
          p.toLowerCase().includes(degreeFilter.toLowerCase())
        )
      );
    }

    setFiltered(results);
  }, [search, stateFilter, degreeFilter]);

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />

        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <main className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          {/* Mobile Search */}
          <div className="md:hidden fixed top-4 left-4 right-4 z-50">
            <div className="backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 px-4 py-3">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search colleges..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-black placeholder-slate-500 focus:outline-none text-sm"
                />
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </button>
              </div>

              {showFilters && (
                <div className="border-t border-white/50 p-4 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      State
                    </label>
                    <select
                      value={stateFilter}
                      onChange={(e) => setStateFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-white text-black border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All States</option>
                      {uniqueStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Program
                    </label>
                    <select
                      value={degreeFilter}
                      onChange={(e) => setDegreeFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-white text-black border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Programs</option>
                      {uniquePrograms.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20 md:mt-0">
            {/* Hero Section */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block mb-5">
                <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-sm md:text-base font-semibold text-blue-700 backdrop-blur-sm">
                  Discover Your Future
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight tracking-tight">
                Find Your Perfect College
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed md:leading-loose px-4">
                Discover top institutions, compare programs, and take the next
                step in your academic journey.
              </p>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:block mb-12">
              <div className="backdrop-blur-xl bg-white/70 border border-white/60 rounded-3xl shadow-lg p-8 sticky top-4 z-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Search College
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Type college name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      State
                    </label>
                    <select
                      value={stateFilter}
                      onChange={(e) => setStateFilter(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-black"
                    >
                      <option value="all">All States</option>
                      {uniqueStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Program
                    </label>
                    <select
                      value={degreeFilter}
                      onChange={(e) => setDegreeFilter(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-black"
                    >
                      <option value="all">All Programs</option>
                      {uniquePrograms.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 px-1">
              <p className="text-sm text-slate-600 font-medium">
                Showing{" "}
                <span className="text-blue-600 font-bold">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1 ? "college" : "colleges"}
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.length === 0 ? (
                <div className="col-span-full backdrop-blur-xl bg-white/70 border border-white/60 rounded-3xl shadow-lg p-16 text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    No Colleges Found
                  </h3>
                  <p className="text-slate-600">
                    Try different filters or adjust your search terms.
                  </p>
                </div>
              ) : (
                filtered.map((college) => (
                  <div
                    key={college.slug}
                    className="group backdrop-blur-xl bg-white/70 border border-white/60 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-[450px]"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={normalizeImageSrc(college.photo)}
                        alt={college.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-2 text-slate-800 line-clamp-2 group-hover:text-blue-600">
                        {college.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C7 2 3 6 3 11c0 5.25 5.75 10.5 9 11 3.25-.5 9-5.75 9-11 0-5-4-9-9-9zm0 12.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                        </svg>
                        {college.state}
                      </p>

                      <p className="text-xs font-semibold text-slate-700 mb-2">
                        Popular Programs:
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {college.programs.slice(0, 3).map((p) => (
                          <span
                            key={p}
                            className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium"
                          >
                            {p}
                          </span>
                        ))}
                        {college.programs.length > 3 && (
                          <span className="text-xs text-slate-500 px-2.5 py-1 font-medium">
                            +{college.programs.length - 3} more
                          </span>
                        )}
                      </div>

                      <a
                        href={`/college/${college.slug}`}
                        className="mt-auto block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </EnquiryModalProvider>
  );
}
