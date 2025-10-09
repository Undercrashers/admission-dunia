"use client";
import { FormEvent, useMemo, useState } from "react";
import { useEnquiryModal } from "./EnquiryModalContext";

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
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-2xl relative transform transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="section-title text-left mb-2">
          Start Your Journey Today
        </h2>
        <p className="section-subtitle text-left !mb-8">
          Fill out the form for a free counseling session.
        </p>
        <form onSubmit={onSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  status.type === "error" && !formState.name.trim()
                    ? "border-red-500"
                    : "border-slate-300"
                }`}
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange("name")}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  status.type === "error" && !formState.email.trim()
                    ? "border-red-500"
                    : "border-slate-300"
                }`}
                placeholder="john.doe@example.com"
                value={formState.email}
                onChange={handleChange("email")}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  status.type === "error" && !formState.phone.trim()
                    ? "border-red-500"
                    : "border-slate-300"
                }`}
                placeholder="+1 (555) 123-4567"
                value={formState.phone}
                onChange={handleChange("phone")}
              />
            </div>
            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Desired Course
              </label>
              <input
                id="course"
                type="text"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  status.type === "error" && !formState.course.trim()
                    ? "border-red-500"
                    : "border-slate-300"
                }`}
                placeholder="e.g., Computer Science"
                value={formState.course}
                onChange={handleChange("course")}
              />
            </div>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us more about your academic goals..."
              value={formState.message}
              onChange={handleChange("message")}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
        {status.type && (
          <div
            className={`mt-6 text-center text-lg font-medium ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
