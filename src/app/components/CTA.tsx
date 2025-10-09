"use client";
import { useEnquiryModal } from "./EnquiryModalContext";

export default function CTA() {
  const { open } = useEnquiryModal();
  return (
    <section id="cta" className="section-padding bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Our experts are here to guide you every step of the way. Get in touch
          for a free counseling session.
        </p>
        <button
          onClick={open}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-transform hover:scale-105 shadow-xl"
        >
          Book Free Session
        </button>
      </div>
    </section>
  );
}
