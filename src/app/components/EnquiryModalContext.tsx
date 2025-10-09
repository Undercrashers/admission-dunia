"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type EnquiryModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | undefined>(
  undefined
);

export function EnquiryModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasOpened = sessionStorage.getItem("modalOpened") === "true";
    if (!hasOpened && !openedRef.current) {
      openedRef.current = true;
      setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("modalOpened", "true");
      }, 1500);
    }
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx)
    throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  return ctx;
}
