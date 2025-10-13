"use client";

import { FormEvent, useMemo, useState } from "react";
import { useEnquiryModal } from "./EnquiryModalContext";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryModal() {
  const { isOpen, close } = useEnquiryModal();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const requiredIds = useMemo(
    () => ["name", "email", "phone", "course"] as const,
    []
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    const missing = requiredIds.filter((k) => !formState[k].trim());
    if (missing.length) {
      setStatus({
        type: "error",
        message: "Please fill out all required fields.",
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you! Your enquiry has been sent successfully.",
      });
      setFormState({ name: "", email: "", phone: "", course: "", message: "" });
      setSubmitting(false);
      setTimeout(close, 2000);
    }, 1500);
  };

  const handleChange =
    (key: keyof typeof formState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((s) => ({ ...s, [key]: e.target.value }));
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="relative bg-white/90 backdrop-blur-lg border border-slate-200 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-2xl">
              <button
                onClick={close}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">
                Start Your Journey Today
              </h2>
              <p className="text-slate-500 mb-8 text-base">
                Fill out the form for a free counseling session.
              </p>

              <form onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Arjun Singh" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "arjun.singh@admission.com" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                    { id: "course", label: "Desired Course", type: "text", placeholder: "e.g., Computer Science" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base ${
                          status.type === "error" && !formState[id as keyof typeof formState]?.trim()
                            ? "border-red-500"
                            : "border-slate-300"
                        }`}
                        placeholder={placeholder}
                        value={formState[id as keyof typeof formState]}
                        onChange={handleChange(id as keyof typeof formState)}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base"
                    placeholder="Tell us more about your academic goals..."
                    value={formState.message}
                    onChange={handleChange("message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 text-center text-base md:text-lg font-medium ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
