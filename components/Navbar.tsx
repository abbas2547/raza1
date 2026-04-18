"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

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
  }, [isHomePage]);

  const navPillClass =
    "rounded-full border px-3 py-1.5 text-sm transition whitespace-nowrap lg:px-4 lg:py-2";

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/40 bg-transparent shadow-none backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="relative z-20 flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/eluue-logo.jpeg"
            alt="Eluue WebServices logo"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 rounded-full border border-orange-200/70 object-cover shadow-[0_0_22px_rgba(255,122,24,0.25)] sm:h-14 sm:w-14 md:h-16 md:w-16"
            priority
          />
          <span className="max-w-[10rem] truncate text-base font-semibold tracking-[0.06em] text-slate-900 sm:max-w-none sm:text-lg md:text-xl">
            Eluue WebServices
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 basis-0 flex-wrap items-center justify-end gap-2 md:flex lg:gap-3">
          {isHomePage &&
            navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${navPillClass} ${
                  activeSection === item.id
                    ? "border-orange-200 bg-orange-50 text-orange-700"
                    : "border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className={`${navPillClass} border-orange-200 bg-orange-50 font-medium text-orange-700 hover:bg-orange-100`}
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className={`${navPillClass} border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-100`}
              >
                Logout
              </button>
              <div className="flex max-w-[min(100%,12rem)] items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 sm:px-3 sm:py-1.5 lg:max-w-[14rem]">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? "User avatar"}
                    width={28}
                    height={28}
                    className="shrink-0 rounded-full"
                  />
                ) : (
                  <div className="h-7 w-7 shrink-0 rounded-full bg-orange-100" />
                )}
                <span className="min-w-0 flex-1 truncate text-sm text-slate-700">
                  {session.user.name ?? "Signed in"}
                </span>
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className={`${navPillClass} border-orange-200 bg-orange-50 font-medium text-orange-700 hover:bg-orange-100`}
            >
              Login
            </Link>
          )}
          <a
            href="https://t.me/abbaszaidi10?text=Hi%20i%20am%20interested%20in%20your%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium whitespace-nowrap text-white transition hover:bg-orange-600 lg:px-5 lg:py-2"
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
            {isHomePage &&
              navItems.map((item) => (
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
              href="https://t.me/eluue2547?text=Hi%20i%20am%20interested%20in%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-xl bg-orange-500 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Contact Us
            </a>
            {session?.user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-center text-sm font-medium text-orange-700"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700"
                >
                  Logout
                </button>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? "User avatar"}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-orange-100" />
                  )}
                  <span className="max-w-40 truncate text-sm text-slate-700">
                    {session.user.name ?? "Signed in"}
                  </span>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-center text-sm font-medium text-orange-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
