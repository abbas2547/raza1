import Link from "next/link";

const telegramHref =
  "https://t.me/abbaszaidi10?text=Hi%20i%20am%20interested%20in%20your%20service";

const footerSections = [
  {
    title: "Services",
    items: [
      { label: "Website Design (UI/UX)", href: "#features" },
      { label: "Custom Website Development", href: "#features" },
      { label: "Web Application Development", href: "#features" },
      { label: "E-commerce Development", href: "#features" },
      { label: "Landing Page Design", href: "#features" },
      { label: "Website Redesign & Optimization", href: "#features" },
      { label: "Responsive (Mobile-Friendly) Design", href: "#features" },
      { label: "Website Maintenance & Support", href: "#contact" },
      { label: "Performance & Speed Optimization", href: "#features" },
      { label: "SEO-Friendly Development", href: "#features" },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { label: "HTML, CSS, JavaScript", href: "#features" },
      { label: "React / Next.js", href: "#features" },
      { label: "Node.js / Express", href: "#features" },
      { label: "WordPress Development", href: "#features" },
      { label: "Tailwind CSS / Bootstrap", href: "#features" },
      { label: "REST APIs Integration", href: "#features" },
      { label: "Git & GitHub", href: "#features" },
      { label: "Firebase / MongoDB", href: "#features" },
      { label: "Figma / Adobe XD", href: "#features" },
      { label: "Deployment (Vercel, Netlify, cPanel)", href: "#features" },
    ],
  },
  {
    title: "Information",
    items: [
      { label: "Pricing Plans", href: "#pricing" },
      { label: "Project Process", href: "#experience" },
      { label: "Client Testimonials", href: "#experience" },
      { label: "Case Studies", href: "#experience" },
      { label: "FAQ", href: "#contact" },
      { label: "Blog / Insights", href: "#contact" },
      { label: "Terms & Conditions", href: "#contact" },
      { label: "Privacy Policy", href: "#contact" },
    ],
  },
  {
    title: "Company / About",
    items: [
      { label: "About Me", href: "#contact" },
      { label: "My Skills & Experience", href: "#experience" },
      { label: "Portfolio", href: "#experience" },
      { label: "Resume / CV", href: "#contact" },
      { label: "Work Process", href: "#experience" },
      { label: "Contact Me", href: telegramHref, external: true },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: telegramHref, external: true },
      { label: "Documentation", href: "#contact" },
      { label: "Contact Support", href: telegramHref, external: true },
      { label: "Report an Issue", href: "#contact" },
      { label: "Live Chat", href: telegramHref, external: true },
      { label: "Project Inquiry Form", href: telegramHref, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-slate-900"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
          <p>Eluue WebServices · Saharanpur, India · Email: eluue2547@gmail.com · Instagram: @eluue2547</p>
          <p className="mt-2">© {new Date().getFullYear()} Eluue WebServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
