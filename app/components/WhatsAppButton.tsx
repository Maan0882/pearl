"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-25 right-6 z-[9999]"
    >
      <Link
        href="https://wa.me/+91 79903 53622"
        target="_blank"
        className="group relative flex items-center justify-center"
      >
        {/* GLOW */}
        <div className="absolute inset-0 rounded-full bg-green-500 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />

        {/* BUTTON */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            relative
            w-16
            h-16
            rounded-full
            bg-gradient-to-br
            from-green-400
            to-green-600
            shadow-[0_20px_50px_rgba(34,197,94,0.4)]
            border
            border-white/20
            backdrop-blur-xl
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* SHINE EFFECT */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

          <MessageCircle
            className="text-white relative z-10"
            size={30}
          />
        </motion.div>

        {/* TOOLTIP */}
        <div
          className="
            absolute
            right-20
            px-4
            py-2
            rounded-xl
            bg-slate-900
            text-white
            text-sm
            font-semibold
            whitespace-nowrap
            opacity-0
            translate-x-4
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            pointer-events-none
          "
        >
          Chat on WhatsApp
        </div>
      </Link>
    </motion.div>
  );
}