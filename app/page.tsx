import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import SmoothScroll from "../components/SmoothScroll";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-bg">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src="/workspace-bg.png"
          alt="Workspace background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,210,230,0.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(220,240,255,0.22),transparent_28%),radial-gradient(circle_at_72%_78%,rgba(219,255,227,0.18),transparent_28%)]" />
        <div className="absolute -top-16 left-8 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute right-4 bottom-16 h-60 w-60 rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute top-14 left-6 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.2em] text-white/80 uppercase backdrop-blur md:block">
         
        </div>
      </div>

      <SmoothScroll />
      <Navbar />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="experience" className="px-6">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
