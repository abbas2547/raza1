export default function Pricing() {
  return (
    <section className="py-32 text-center">
      <h2 className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
        Build Your Website
      </h2>
      <div className="mt-12 flex justify-center">
        <div className="scale-105 rounded-2xl border border-white/25 bg-black/45 p-10 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <p className="text-sm tracking-[0.22em] text-cyan-200 uppercase">
            Our devlopment charges
          </p>
          <h3 className="mt-2 text-5xl font-semibold text-white drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
          ₹ 2599
          </h3>
          <p className="mt-3 text-gray-200">exclude Domain and Hosting</p>
        </div>
      </div>
    </section>
  );
}
