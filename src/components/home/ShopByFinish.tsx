import Image from "next/image";
import Link from "next/link";
import { FEATURED_FINISHES } from "@/lib/catalog/taxonomy";

const finishImages: Record<string, string> = {
  "brushed-brass":
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
  "matte-black":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  "brushed-nickel":
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
  "oil-rubbed-bronze":
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
};

export function ShopByFinish() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Shop by Finish
          </h2>
          <p className="mt-2 text-neutral-600">
            Choose the perfect handle color to match your cabinet finish
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {FEATURED_FINISHES.map((finish) => (
            <Link
              key={finish.slug}
              href={`/collections/cabinet-pulls/${finish.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={finishImages[finish.slug]}
                  alt={finish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="mb-2 inline-block h-4 w-4 rounded-full border border-white/30"
                    style={{ backgroundColor: finish.hex }}
                  />
                  <p className="text-sm font-semibold text-white">{finish.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
