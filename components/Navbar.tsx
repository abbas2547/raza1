"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("features");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/zyrox-logo.png"
            alt="Zyrox Webservices logo"
            width={64}
            height={64}
            className="rounded-full border border-cyan-300/40 object-cover shadow-[0_0_22px_rgba(34,211,238,0.35)]"
            priority
          />
          <span className="text-lg font-semibold tracking-[0.06em] text-white md:text-xl">
            Zyrox WebServices
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeSection === item.id
                  ? "border-white/45 bg-white/20 text-white"
                  : "border-white/20 text-white/90 hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://t.me/abbaszaidi10?text=Hi%20I%20am%20interested%20in%20your%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Hire Abbas
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto w-full max-w-6xl px-6 pb-4 md:hidden">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-black/50 p-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block rounded-xl px-4 py-2 text-sm transition ${
                  activeSection === item.id
                    ? "bg-white/20 text-white"
                    : "text-white/85 hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/abbaszaidi10"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-xl bg-white px-4 py-2 text-center text-sm font-medium text-black"
            >
              Hire Abbas
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
