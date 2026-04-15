export default function Contact() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-semibold">Get in touch</h2>
      <p className="mt-4 text-gray-300">+91 9457111036</p>
      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://t.me/abbaszaidi10"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-black/40 px-5 py-2 backdrop-blur-sm transition hover:bg-black/55"
        >
          Telegram
        </a>
        <a
          href="https://instagram.com/zyroxwebservices"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-black/40 px-5 py-2 backdrop-blur-sm transition hover:bg-black/55"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
