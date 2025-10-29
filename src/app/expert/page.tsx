"use client";
import { EnquiryModalProvider } from "../components/EnquiryModalContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Counselors from "../components/Counselors";
import EnquiryModal from "../components/EnquiryModal";
import { GraduationCap, Heart, Users } from "lucide-react";

export default function ExpertCounseling() {
  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 pt-28 md:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Expert College Admission Counseling
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Get personalized guidance from India&apos;s top admission
                  experts. Your dream college is just one consultation away.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-3xl font-bold">5000+</p>
                      <p className="text-blue-100 text-sm">Students Guided</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-3xl font-bold">98%</p>
                      <p className="text-blue-100 text-sm">Success Rate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-3xl font-bold">15+</p>
                      <p className="text-blue-100 text-sm">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Counseling Services?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We provide end-to-end support for your admission journey
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Initial counseling session absolutely free
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Personalized Roadmap
                  </h3>
                  <p className="text-gray-600">
                    Custom strategy based on your profile
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Application Support
                  </h3>
                  <p className="text-gray-600">
                    Complete assistance with forms & documents
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Post-Admission Help
                  </h3>
                  <p className="text-gray-600">
                    Guidance even after securing admission
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Counselors />
        </main>
        <Footer />
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  );
}
