export default function Features() {
  const data = [
    {
      title: "Fast Delivery",
      description: "I canbuild your website in just  2-3 days.",
    },
    {
      title: "Unlimited Requests",
      description: "Whenever you want, I can update your website quickly.",
    },
    {
      title: "Premium Quality",
      description:
        "I will build a website that delights you and keeps your visitors coming back.",
    },
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-32 md:grid-cols-3">
      {data.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-sm transition hover:scale-[1.03] hover:shadow-lg"
        >
          <h3 className="text-xl font-medium text-slate-900">{item.title}</h3>
          <p className="mt-2 text-slate-600">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
