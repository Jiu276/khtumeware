"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart/CartContext";
import { FEATURED_FINISHES, MAIN_CATEGORIES } from "@/lib/catalog/taxonomy";

const navLinks = [
  { href: "/shop?filter=bestsellers", label: "Bestsellers" },
  { href: "/shop?sub=cabinet-pulls", label: "Cabinet Pulls" },
  { href: "/shop?sub=cabinet-knobs", label: "Cabinet Knobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Support" },
];

export function Header() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <MenuIcon />
        </button>

        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold tracking-wide text-white">
            KH
          </span>
          <span className="text-xl font-semibold tracking-tight text-neutral-900">
            KhtumeWare
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <Link
            href="/account"
            className="hidden rounded-full p-2 text-neutral-600 hover:bg-neutral-100 sm:block"
            aria-label="Account"
          >
            <UserIcon />
          </Link>
          <Link
            href="/cart"
            className="relative rounded-full p-2 text-neutral-600 hover:bg-neutral-100"
            aria-label="Cart"
          >
            <CartIcon />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-3">
          <form action="/shop" method="get" className="mx-auto flex max-w-xl gap-2">
            <input
              name="q"
              type="search"
              placeholder="Search cabinet pulls, knobs, finishes..."
              className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm focus:border-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="border-t border-neutral-100 bg-white px-4 py-4 lg:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Shop by Finish
          </p>
          <div className="grid grid-cols-2 gap-2">
            {FEATURED_FINISHES.map((f) => (
              <Link
                key={f.slug}
                href={`/collections/cabinet-pulls/${f.slug}`}
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {f.name}
              </Link>
            ))}
          </div>
          <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Categories
          </p>
          {MAIN_CATEGORIES.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              href={`/shop?category=${c.slug}`}
              className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
              onClick={() => setMenuOpen(false)}
            >
              {c.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}
