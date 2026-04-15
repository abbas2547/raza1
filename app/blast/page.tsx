import Image from "next/image";

const buildPlans = [
  {
    domain: ".in Domain Website",
    price: "Rs 1,999",
    note: "Best for local business, portfolio, and startup launch.",
  },
  {
    domain: ".com Domain Website",
    price: "Rs 2,599",
    note: "Great for global presence and professional branding.",
  },
];

const processSteps = [
  {
    title: "Subscribe",
    text: "Choose your website package and share your requirements.",
  },
  {
    title: "Request",
    text: "Tell me what you need. I can build any type of web application.",
  },
  {
    title: "Receive",
    text: "Get your project delivered clean, modern, and ready to use.",
  },
];

export default function BlastPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-black">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-semibold italic">whenevr</h1>
          <a
            href="https://t.me/abbaszaidi10"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
          >
            Contact Abbas
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/workspace-bg.png"
            alt="Developer workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-white">
          <p className="mb-4 text-sm tracking-[0.28em] uppercase text-white/80">
            Web Developer - Abbas
          </p>
          <h2 className="max-w-3xl text-4xl leading-tight font-semibold md:text-6xl">
            I sell my projects and can build any type of web application.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            If you want a clean, modern, and professional one-page website or a
            custom web app, choose a package below and get started today.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-3xl font-semibold">Website Build Price</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {buildPlans.map((plan) => (
            <article
              key={plan.domain}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <p className="text-sm tracking-wide text-black/60 uppercase">
                {plan.domain}
              </p>
              <p className="mt-3 text-5xl font-semibold">{plan.price}</p>
              <p className="mt-4 text-base text-black/70">{plan.note}</p>
              <a
                href="https://t.me/abbaszaidi10"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
              >
                Buy this one page
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-6 overflow-hidden rounded-3xl border border-black/10">
          <Image
            src="/reference-layout.png"
            alt="Reference style layout"
            width={1365}
            height={768}
            className="h-auto w-full"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h4 className="text-3xl font-semibold">{step.title}</h4>
              <p className="mt-3 text-lg text-black/70">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-center text-sm text-black/70">
          Created by Abbas
        </div>
      </footer>
    </main>
  );
}
