import Link from "next/link";

export function PromoBar() {
  return (
    <div className="bg-neutral-900 px-4 py-2.5 text-center text-sm text-white">
      <span className="font-medium">Save 10% on all products</span>
      <span className="mx-2 text-neutral-400">|</span>
      <span>
        Use code{" "}
        <code className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-amber-300">
          KHT10
        </code>
      </span>
      <span className="mx-2 hidden text-neutral-400 sm:inline">|</span>
      <span className="hidden sm:inline">
        Free shipping on orders over $65 — US & UK
      </span>
    </div>
  );
}
