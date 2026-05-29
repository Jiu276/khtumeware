const reviews = [
  {
    name: "Christopher M.",
    title: "Easy Upgrade",
    text: "Every handle is a perfect fit and instantly upgrades the look of my cabinets. Installation was easy, and the team is always ready to help.",
  },
  {
    name: "James L.",
    title: "Stylish & Sturdy",
    text: "These cabinet handles feel solid and look so elegant. They really elevate the style of my kitchen. Installation was quick and hassle-free.",
  },
  {
    name: "Sarah K.",
    title: "Great Quality",
    text: "Handles feel very solid and look elegant. They make a noticeable difference compared to the cheap ones I had before.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        See what our customers are saying
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <blockquote
            key={r.name}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-neutral-900">{r.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              &ldquo;{r.text}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-900">
              {r.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
