"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // SHOW BUTTON IMMEDIATELY AFTER SMALL SCROLL
      setVisible(window.scrollY > 50);
    };

    // RUN ON PAGE LOAD
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-[99999]

        flex items-center justify-center

        w-14 h-14
        rounded-2xl

        bg-gradient-to-br
        from-indigo-600
        via-purple-600
        to-violet-700

        border border-white/20
        backdrop-blur-xl

        shadow-[0_10px_40px_rgba(124,58,237,0.45)]

        transition-all duration-300 ease-out

        hover:scale-110
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(139,92,246,0.6)]

        active:scale-95

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-white/10" />

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 animate-pulse" />

      {/* Icon */}
      <ChevronUp className="relative z-10 w-6 h-6 text-white" />
    </button>
  );
}