export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Website Design (UI/UX)</li>
              <li>Custom Website Development</li>
              <li>Web Application Development</li>
              <li>E-commerce Development</li>
              <li>Landing Page Design</li>
              <li>Website Redesign & Optimization</li>
              <li>Responsive (Mobile-Friendly) Design</li>
              <li>Website Maintenance & Support</li>
              <li>Performance & Speed Optimization</li>
              <li>SEO-Friendly Development</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Tools & Technologies
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>HTML, CSS, JavaScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>WordPress Development</li>
              <li>Tailwind CSS / Bootstrap</li>
              <li>REST APIs Integration</li>
              <li>Git & GitHub</li>
              <li>Firebase / MongoDB</li>
              <li>Figma / Adobe XD</li>
              <li>Deployment (Vercel, Netlify, cPanel)</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Pricing Plans</li>
              <li>Project Process</li>
              <li>Client Testimonials</li>
              <li>Case Studies</li>
              <li>FAQ</li>
              <li>Blog / Insights</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Company / About
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>About Me</li>
              <li>My Skills & Experience</li>
              <li>Portfolio</li>
              <li>Resume / CV</li>
              <li>Work Process</li>
              <li>Client Success Stories</li>
              <li>Contact Me</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Contact Support</li>
              <li>Report an Issue</li>
              <li>Live Chat</li>
              <li>Project Inquiry Form</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/70 pt-6 text-sm text-slate-500">
          <p>Eluue WebServices · Saharanpur, India · Email: eluue2547@gmail.com · Instagram: @eluue2547</p>
          <p className="mt-2">© {new Date().getFullYear()} Eluue WebServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
