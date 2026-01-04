"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [consent, setConsent] = useState<string | null>(null);
  const [closed, setClosed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) setConsent(savedConsent);
  }, []);
  
  // Don't render anything during server-side rendering
  if (!isClient) {
    return null;
  }

  const handleClose = () => {
    setClosed(true);
    const timeout = setTimeout(() => {
      setClosed(false);
    }, 5 * 60 * 1000); // 5 minutes
    return () => clearTimeout(timeout);
  };

  const handleConsent = (value: "accepted" | "declined") => {
    setConsent(value);
    localStorage.setItem("cookieConsent", value);
  };

  return (
<AnimatePresence>
      {consent === null && !closed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-500"
        >
          <div className="relative w-[320px] sm:w-[400px] bg-card border border-border rounded-2xl shadow-xl text-center p-6">
            
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition text-2xl font-bold cursor-pointer"
            >
              ×
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <img
                src="https://i.postimg.cc/Y2LCMyC9/cookie.png"
                alt="Cookie icon"
                className="w-50 h-40 opacity-90"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2">
              We use cookies
            </h3>

            {/* Text */}
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              This website uses cookies to improve your experience and analyze
              traffic.
            </p>

            {/* Accept */}
            <button
              onClick={() => handleConsent("accepted")}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold
                         hover:bg-primary/90 transition cursor-pointer"
            >
              Accept cookies
            </button>

            {/* Decline */}
            <button
              onClick={() => handleConsent("declined")}
              className="mt-3 text-xs text-muted-foreground cursor-pointer hover:text-foreground underline transition"
            >
              Decline cookies 
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
