"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EnquiryModalProvider } from "../components/EnquiryModalContext";
import { ALL_COLLEGES, College } from "../../data/colleges";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [degreeFilter, setDegreeFilter] = useState("all");

  useEffect(() => {
    // keep body background consistent with rest of app
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f8fafc";
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return ALL_COLLEGES.filter((c) => {
      const nameMatch = c.name.toLowerCase().includes(term);
      const stateMatch = stateFilter === "all" || c.state === stateFilter;
      const degreeMatch =
        degreeFilter === "all"
          ? true
          : c.programs.some((p) =>
              p
                .toLowerCase()
                .includes(degreeFilter.toLowerCase().replace(/\./g, ""))
            );
      return nameMatch && stateMatch && degreeMatch;
    });
  }, [search, stateFilter, degreeFilter]);

  return (
    <EnquiryModalProvider>
      <div className="text-slate-700">
        <Header />

        <main className="pt-20">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
                  Find Your Perfect College
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Explore top institutions, filter by your preferences, and take
                  the next step in your academic journey.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg mb-12 sticky top-[70px] z-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                  <div className="lg:col-span-2">
                    <label
                      htmlFor="search-college"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Search College
                    </label>
                    <input
                      id="search-college"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Enter college name..."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="filter-state"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      State
                    </label>
                    <select
                      id="filter-state"
                      value={stateFilter}
                      onChange={(e) => setStateFilter(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="all">All States</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Haryana">Haryana</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="filter-degree"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Degree Program
                    </label>
                    <select
                      id="filter-degree"
                      value={degreeFilter}
                      onChange={(e) => setDegreeFilter(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="all">All Programs</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="MBBS">MBBS</option>
                      <option value="MBA">MBA</option>
                      <option value="BBA">BBA</option>
                      <option value="BDS">BDS</option>
                    </select>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button
                      onClick={() => {
                        /* filtering is reactive */
                      }}
                      className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors shadow-md"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.length === 0 ? (
                  <div className="text-center py-16 col-span-full">
                    <h3 className="text-2xl font-semibold text-slate-700">
                      No Colleges Found
                    </h3>
                    <p className="text-slate-500 mt-2">
                      Try adjusting your search filters to find what you are
                      looking for.
                    </p>
                  </div>
                ) : (
                  filtered.map((college: College) => (
                    <div
                      key={college.slug}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                    >
                      <div className="w-full h-48 relative">
                        <Image
                          src={college.photo}
                          alt={`Photo of ${college.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          {college.levels.map((l: string) => (
                            <span
                              key={l}
                              className={`text-xs font-semibold ${
                                l === "UG"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-purple-100 text-purple-700"
                              } px-2 py-0.5 rounded-full`}
                            >
                              {l}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {college.name}
                        </h3>
                        <p className="text-sm text-slate-500 flex items-center gap-1.5 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                          </svg>
                          {college.state}
                        </p>
                        <div>
                          <p className="text-sm font-semibold text-slate-600 mb-2">
                            Popular Programs:
                          </p>
                          <ul className="flex flex-wrap gap-2 text-xs font-medium">
                            {college.programs.slice(0, 3).map((p: string) => (
                              <li
                                key={p}
                                className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                              >
                                {p}
                              </li>
                            ))}
                            {college.programs.length > 3 && (
                              <li className="text-slate-500 font-medium">
                                +{college.programs.length - 3} more
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="mt-auto pt-5">
                          <a
                            href={`/college/${college.slug}`}
                            className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </EnquiryModalProvider>
  );
}
