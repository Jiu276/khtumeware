"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FINISH_TAGS, MAIN_CATEGORIES, MATERIAL_TAGS, ROOM_TAGS, STYLE_TAGS } from "@/lib/catalog/taxonomy";

export function ShopFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const current = {
    category: params.get("category") ?? "",
    sub: params.get("sub") ?? "",
    finish: params.get("finish") ?? "",
    material: params.get("material") ?? "",
    style: params.get("style") ?? "",
    room: params.get("room") ?? "",
  };

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.push(`/shop?${next.toString()}`);
  };

  const clearAll = () => router.push("/shop");

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
          Filters
        </h2>
        <button
          type="button"
          onClick={clearAll}
          className="text-xs text-neutral-500 hover:text-neutral-900"
        >
          Clear all
        </button>
      </div>

      <FilterGroup label="Category">
        <select
          value={current.category}
          onChange={(e) => update("category", e.target.value)}
          className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">All categories</option>
          {MAIN_CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      </FilterGroup>

      <FilterGroup label="Finish">
        <div className="flex flex-wrap gap-2">
          {FINISH_TAGS.slice(0, 8).map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => update("finish", current.finish === f.slug ? "" : f.slug)}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs ${
                current.finish === f.slug
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200"
              }`}
            >
              <span
                className="h-3 w-3 rounded-full border border-neutral-300"
                style={{ backgroundColor: f.hex }}
              />
              {f.name}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup label="Material">
        <select
          value={current.material}
          onChange={(e) => update("material", e.target.value)}
          className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">All materials</option>
          {MATERIAL_TAGS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </FilterGroup>

      <FilterGroup label="Style">
        <select
          value={current.style}
          onChange={(e) => update("style", e.target.value)}
          className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">All styles</option>
          {STYLE_TAGS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </FilterGroup>

      <FilterGroup label="Room">
        <select
          value={current.room}
          onChange={(e) => update("room", e.target.value)}
          className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">All rooms</option>
          {ROOM_TAGS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </FilterGroup>

      <div className="rounded-lg bg-neutral-50 p-4 text-xs text-neutral-600">
        <p className="font-medium text-neutral-900">B2B Wholesale</p>
        <p className="mt-1">
          Business accounts get tier pricing and NET 30 terms.{" "}
          <Link href="/contact" className="underline">Contact sales</Link>
        </p>
      </div>
    </aside>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </p>
      {children}
    </div>
  );
}
