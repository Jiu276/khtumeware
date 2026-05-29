import Image from "next/image";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="overflow-hidden bg-neutral-900 text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80"
            alt="Metal craftsmanship and hardware finishing"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-14 lg:px-12 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            KhtumeWare specializes in cabinet handles & home hardware
          </h2>
          <p className="mt-2 text-lg text-amber-400">
            Timeless hardware you&apos;ll adore
          </p>
          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-neutral-300">
            <li>
              ✦ We design cabinet handles that are durable, affordable, and made
              to elevate everyday living.
            </li>
            <li>
              ✦ Modern design and reliable quality for kitchens, bathrooms, and
              wardrobes worldwide.
            </li>
            <li>
              ✦ Built for easy upgrades — simplicity, function, and timeless
              aesthetics for every home and business project.
            </li>
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex w-fit rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
