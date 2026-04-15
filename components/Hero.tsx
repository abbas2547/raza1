"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute top-28 right-10 hidden rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs text-white/80 backdrop-blur md:block">
        floral aesthetic
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-5xl leading-tight font-semibold md:text-7xl"
      >
        World-class design whenever you need it.
      </motion.h1>

      <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
        A modern web development &amp; design subscription.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://t.me/abbaszaidi10"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-6 py-3 text-black"
        >
          Telegram
        </a>
        <a
          href="https://instagram.com/abbaszaidi_03"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-6 py-3"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
