"use client";
import { EnquiryModalProvider } from "../components/EnquiryModalContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Counselors from "../components/Counselors";
import EnquiryModal from "../components/EnquiryModal";

export default function Home() {
  return (
    <EnquiryModalProvider>
      <div className="text-slate-700">
        <Header />
        <main>
          <Counselors />
        </main>
        <Footer />
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  );
}
