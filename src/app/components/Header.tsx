"use client";

import Link from "next/link";
import { useState } from "react";
import { useEnquiryModal } from "./EnquiryModalContext";
import { GraduationCap, Stethoscope, Briefcase, Scale } from "lucide-react";

export default function Header() {
  const { open } = useEnquiryModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [topCollegesOpen, setTopCollegesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <span className="text-xl font-bold text-blue-700 tracking-tight">
            Admission Dunia 2.0
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Top Universities Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setTopCollegesOpen(true)}
            onMouseLeave={() => setTopCollegesOpen(false)}
          >
            <button className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Top Universities
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-xl shadow-2xl p-6 w-[600px]">
                <div className="grid grid-cols-2 gap-4">
                  {/* Engineering Card */}
                  <Link
                    href="/top-colleges/engineering"
                    className="group/card bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg hover:shadow-lg transition-all border border-blue-100 hover:border-blue-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover/card:text-blue-600 transition-colors">
                        Engineering
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Top 10 IITs, NITs & Engineering Colleges
                    </p>
                  </Link>

                  {/* Medical Card */}
                  <Link
                    href="/top-colleges/medical"
                    className="group/card bg-gradient-to-br from-green-50 to-teal-50 p-5 rounded-lg hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover/card:text-green-600 transition-colors">
                        Medical
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Top 10 AIIMS, Medical Colleges & MBBS
                    </p>
                  </Link>

                  {/* Management Card */}
                  <Link
                    href="/top-colleges/management"
                    className="group/card bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg hover:shadow-lg transition-all border border-purple-100 hover:border-purple-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover/card:text-purple-600 transition-colors">
                        Management
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Top 10 IIMs, MBA & Business Schools
                    </p>
                  </Link>

                  {/* Law Card */}
                  <Link
                    href="/top-colleges/law"
                    className="group/card bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-lg hover:shadow-lg transition-all border border-amber-100 hover:border-amber-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                        <Scale className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover/card:text-amber-600 transition-colors">
                        Law
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Top 10 NLUs & Law Colleges
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/colleges"
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            College Finder
          </Link>
          <Link
            href="/expert"
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Expert Counseling
          </Link>
          <button
            onClick={open}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-slate-200 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {/* Mobile Top Universities Section */}
          <div className="w-full px-4">
            <p className="text-slate-700 font-medium text-center mb-3">
              Top Universities
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/top-colleges/engineering"
                className="bg-blue-50 p-3 rounded-lg text-center border border-blue-100"
                onClick={() => setMenuOpen(false)}
              >
                <GraduationCap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-900">Engineering</p>
              </Link>
              <Link
                href="/top-colleges/medical"
                className="bg-green-50 p-3 rounded-lg text-center border border-green-100"
                onClick={() => setMenuOpen(false)}
              >
                <Stethoscope className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-900">Medical</p>
              </Link>
              <Link
                href="/top-colleges/management"
                className="bg-purple-50 p-3 rounded-lg text-center border border-purple-100"
                onClick={() => setMenuOpen(false)}
              >
                <Briefcase className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-900">Management</p>
              </Link>
              <Link
                href="/top-colleges/law"
                className="bg-amber-50 p-3 rounded-lg text-center border border-amber-100"
                onClick={() => setMenuOpen(false)}
              >
                <Scale className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-900">Law</p>
              </Link>
            </div>
          </div>

          <div className="w-full border-t border-slate-200 pt-4 space-y-4 flex flex-col items-center">
            <Link
              href="/colleges"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              College Finder
            </Link>
            <Link
              href="/expert"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Expert Counseling
            </Link>
            <button
              onClick={() => {
                open();
                setMenuOpen(false);
              }}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
