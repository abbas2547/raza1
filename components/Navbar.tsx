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
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/40 bg-transparent shadow-none backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/eluue-logo.jpeg"
            alt="Eluue WebServices logo"
            width={64}
            height={64}
            className="rounded-full border border-orange-200/70 object-cover shadow-[0_0_22px_rgba(255,122,24,0.25)]"
            priority
          />
          <span className="text-lg font-semibold tracking-[0.06em] text-slate-900 md:text-xl">
            Eluue WebServices
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeSection === item.id
                  ? "border-orange-200 bg-orange-50 text-orange-700"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:eluue2547@gmail.com"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto w-full max-w-6xl px-6 pb-4 md:hidden">
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block rounded-xl px-4 py-2 text-sm transition ${
                  activeSection === item.id
                    ? "bg-orange-50 text-orange-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:eluue2547@gmail.com"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-xl bg-orange-500 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
