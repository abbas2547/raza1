const plans = [
  {
    name: "Basic Plan",
    subtitle: "Best for small personal projects",
    price: "₹ 1499",
    features: [
      "1 Page Website",
      "Responsive (Mobile-Friendly) Design",
      "Basic UI Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Revision Included",
      "Delivery in 2–3 Days",
    ],
  },
  {
    name: "Standard Plan",
    subtitle: "Ideal for startups & small businesses",
    badge: "Most Popular",
    price: "₹ 2999",
    features: [
      "Up to 5 Pages Website",
      "Custom UI/UX Design",
      "Fully Responsive Design",
      "SEO Optimization",
      "Speed Optimization",
      "Contact Forms + Basic Integrations",
      "3 Revisions Included",
      "Delivery in 5–7 Days",
    ],
  },
  {
    name: "Premium Plan",
    subtitle: "Perfect for growing brands & advanced needs",
    price: "₹ 4999",
    features: [
      "Up to 10 Pages Website",
      "Advanced Custom Design (UI/UX)",
      "Web Application Features",
      "API Integrations",
      "Authentication System (Login/Register)",
      "Performance Optimization",
      "SEO + Advanced Optimization",
      "Unlimited Revisions",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise Plan",
    subtitle: "For large-scale or custom projects",
    price: "₹ 6999",
    features: [
      "Custom Web Application Development",
      "Scalable Architecture",
      "Full Backend Development",
      "Database Design & Integration",
      "Advanced Security Implementation",
      "Third-party Integrations",
      "Ongoing Maintenance & Support",
      "Dedicated Project Handling",
      "Custom Timeline & Pricing",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-32">
      <div className="text-center">
        <p className="text-sm tracking-[0.28em] uppercase text-orange-600">Pricing Plans</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
          Choose your perfect website plan
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Transparent plans for every stage of your business, from simple portfolios to full-scale custom web applications.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
              plan.badge ? "border-orange-200 bg-orange-50" : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.subtitle}</p>
              </div>
              {plan.badge ? (
                <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {plan.badge}
                </span>
              ) : null}
            </div>

            <div className="mt-8 rounded-3xl bg-slate-900/95 px-6 py-8 text-center text-white shadow-[0_20px_70px_-40px_rgba(15,23,42,0.7)]">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Starting at</p>
              <p className="mt-4 text-4xl font-semibold">{plan.price}</p>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/abbaszaidi10?text=Hi%20i%20am%20interested%20in%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Select plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
