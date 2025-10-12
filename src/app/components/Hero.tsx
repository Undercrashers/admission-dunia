"use client";
import { useEnquiryModal } from "./EnquiryModalContext";

export default function Hero() {
  const { open } = useEnquiryModal();
  return (
    <section className="bg-slate-100 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Navigate Your Future.{" "}
            <span className="text-blue-600">Unlock Your Dream College.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
            Admission Dunia 2.0 provides expert guidance and personalized
            counseling to help you secure admission into top universities
            worldwide.
          </p>
          <div className="mt-8">
            <button
              onClick={open}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-xl"
            >
              Get Free Counseling
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center h-full relative">
          <div className="w-full h-full min-h-[400px] relative">
            {/* Local college logos */}
            <div
              className="bubble absolute top-[5%] left-[40%] w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "0s" }}
            >
              <img
                src="/college/amity.png"
                alt="Amity University"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute top-[25%] left-[65%] w-32 h-32 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-2s" }}
            >
              <img
                src="/college/aims.jpeg"
                alt="AIIMS Delhi"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute bottom-[25%] left-[50%] w-20 h-20 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-4s" }}
            >
              <img
                src="/college/iim.jpeg"
                alt="IIM Ahmedabad"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute bottom-[35%] right-[0%] w-28 h-28 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-1.5s" }}
            >
              <img
                src="/college/vit.png"
                alt="VIT Vellore"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute top-[2%] right-[8%] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center z-20 cursor-pointer transition-transform hover:scale-110"
              style={{ animationDelay: "-3s" }}
            >
              <img
                src="/college/bits.png"
                alt="BITS Pilani"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute top-[55%] left-[30%] w-28 h-28 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-5s" }}
            >
              <img
                src="/college/kiit.png"
                alt="KIIT"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute bottom-[5%] left-[70%] w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-6s" }}
            >
              <img
                src="/college/srm.png"
                alt="srm"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            {/* Additional small bubbles */}
            <div
              className="bubble absolute top-[18%] left-[52%] w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-2.8s" }}
            >
              <img
                src="/college/lpu.jpeg"
                alt="LPU"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute top-[36%] left-[42%] w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-3.6s" }}
            >
              <img
                src="/college/rv.jpeg"
                alt="RV College"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div
              className="bubble absolute top-[48%] left-[58%] w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "-4.4s" }}
            >
              <img
                src="/college/cmcvellore.png"
                alt="CMC Vellore"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
