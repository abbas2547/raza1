export default function Features() {
  const data = [
    {
      title: "Fast Delivery",
      description: "i bulid your website in few hours.",
    },
    {
      title: "Unlimited Requests",
      description: "whenever you want i build your website just contact me.",
    },
    {
      title: "Premium Quality",
      description:
        "I will build a website that will delight you so much so that you will have all your future websites built by me as well.",
    },
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-32 md:grid-cols-3">
      {data.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/20 bg-black/45 p-8 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:scale-[1.03]"
        >
          <h3 className="text-xl font-medium">{item.title}</h3>
          <p className="mt-2 text-gray-200">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
