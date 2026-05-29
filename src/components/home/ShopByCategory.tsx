import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    slug: "cabinet-pulls",
    name: "Cabinet Handles",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=80",
    href: "/shop?sub=cabinet-pulls",
  },
  {
    slug: "cabinet-knobs",
    name: "Cabinet Knobs",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    href: "/shop?sub=cabinet-knobs",
  },
  {
    slug: "towel-bars",
    name: "Bathroom Hardware",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b48d6e?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=bathroom-hardware",
  },
  {
    slug: "door-stops",
    name: "Door Hardware",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    href: "/shop?category=door-hardware",
  },
];

export function ShopByCategory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.href}
            className="group text-center"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-neutral-900">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
