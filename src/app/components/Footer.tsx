"use client";
import Link from "next/link";
import { useEnquiryModal } from "./EnquiryModalContext";

export default function Footer() {
  const { open } = useEnquiryModal();
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="#" className="flex items-center gap-2 mb-4">
              <svg
                className="h-8 w-8 text-white"
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
              <span className="text-xl font-bold text-white">
                Admission Dunia 2.0
              </span>
            </Link>
            <p className="text-slate-400">
              Your trusted partner in navigating the path to higher education.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#top-colleges" className="hover:text-blue-400">
                  Top Universities
                </Link>
              </li>
              <li>
                <Link href="#college-finder" className="hover:text-blue-400">
                  College Finder
                </Link>
              </li>
              <li>
                <Link href="#counselors" className="hover:text-blue-400">
                  Expert Counseling
                </Link>
              </li>
              <li>
                <button onClick={open} className="hover:text-blue-400">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <p>123 Education Lane, Knowledge City</p>
              </li>
              <li>
                <p>contact@admissiondunia.com</p>
              </li>
              <li>
                <p>+1 234 567 8900</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                IG
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                LI
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                TW
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; 2025 Admission Dunia 2.0. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
