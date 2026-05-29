import type { Product } from "./products";
import { FINISH_TAGS } from "./taxonomy";

export interface ProductFilters {
  category?: string;
  subCategory?: string;
  finish?: string;
  material?: string;
  style?: string;
  room?: string;
  search?: string;
}

export function filterProducts(
  items: Product[],
  filters: ProductFilters
): Product[] {
  return items.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.subCategory && product.subCategory !== filters.subCategory)
      return false;
    if (
      filters.finish &&
      !product.variants.some((v) => v.finish === filters.finish)
    )
      return false;
    if (filters.material && product.material !== filters.material) return false;
    if (filters.style && product.style !== filters.style) return false;
    if (filters.room && !product.room.includes(filters.room)) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const haystack = [
        product.title,
        product.designCode,
        product.description,
        ...product.variants.map((v) => v.sku),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export function parseCollectionPath(segments: string[]): ProductFilters {
  const filters: ProductFilters = {};
  if (segments[0]) filters.subCategory = segments[0];
  if (segments[1]) {
    const finish = FINISH_TAGS.find((f) => f.slug === segments[1]);
    if (finish) filters.finish = finish.slug;
  }
  return filters;
}

export function parseShopSearchParams(
  params: Record<string, string | string[] | undefined>
): ProductFilters {
  const get = (key: string) => {
    const v = params[key];
    return typeof v === "string" ? v : undefined;
  };
  return {
    category: get("category"),
    subCategory: get("sub"),
    finish: get("finish"),
    material: get("material"),
    style: get("style"),
    room: get("room"),
    search: get("q"),
  };
}
