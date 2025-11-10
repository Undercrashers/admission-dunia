"use client";
import { EnquiryModalProvider } from "./components/EnquiryModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import CollegeFinder from "./components/CollegeFinder";
import StudyAbroad from "./components/StudyAbroad";
import Services from "./components/Services";
import Counselors from "./components/Counselors";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import EnquiryModal from "./components/EnquiryModal";
import WhatsAppButton from "./components/WhatsAppButton";
import EnquiryButton from "./components/EnquiryButton";

export default function Home() {
  return (
    <EnquiryModalProvider>
      <div className="text-slate-700">
        <Header />
        <main>
          <Hero />
          <Partners />
          <CollegeFinder />
          <StudyAbroad />
          <Services />
          <Counselors />
          <Testimonials />
          <CTA />
          <WhatsAppButton />
          <EnquiryButton />
        </main>
        <Footer />
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  );
}
