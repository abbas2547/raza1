export default function Contact() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-semibold">Get in touch</h2>
      <p className="mt-4 text-slate-600">+91 9457111036</p>
      <p className="mt-2 text-slate-600">
        Email: <a href="mailto:eluue2547@gmail.com" className="text-orange-600 hover:text-orange-700">eluue2547@gmail.com</a>
      </p>
      <p className="mt-2 text-slate-600">
        Instagram: <a href="https://instagram.com/eluue2547" className="text-orange-600 hover:text-orange-700">@eluue2547</a>
      </p>
      <p className="mt-2 text-slate-600">Location: Saharanpur, India</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:eluue2547@gmail.com"
          className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-orange-700 transition hover:bg-orange-100"
        >
          Email
        </a>
        <a
          href="https://instagram.com/eluue2547"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-slate-700 transition hover:bg-slate-100"
        >
          Instagram
        </a>
        <a
          href="https://t.me/abbaszaidi10"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-slate-700 transition hover:bg-slate-100"
        >
          Telegram
        </a>
      </div>
    </section>
  );
}
