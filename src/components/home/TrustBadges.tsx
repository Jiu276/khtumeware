const badges = [
  {
    title: "Estimated Delivery",
    desc: "3–8 Days",
    icon: "📦",
  },
  {
    title: "Free Shipping",
    desc: "Orders over $65",
    icon: "🚚",
  },
  {
    title: "Warranty & Service",
    desc: "120-day replacement",
    icon: "🛡️",
  },
];

export function TrustBadges() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {badges.map((b) => (
          <div key={b.title} className="flex flex-col items-center px-4 py-10 text-center">
            <span className="text-3xl">{b.icon}</span>
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">{b.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
