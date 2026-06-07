"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { useCart } from "./cart/CartProvider";

const categories = ["beds", "cabinets", "bookcases", "boxes", "chairs", "tables"];

export default function Header() {
  const router = useRouter();
  const { count } = useCart();

  function handleSearch(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const q = form.get("q")?.toString().trim();
    if (q) router.push(`/shop?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="border-b border-plank-line bg-gradient-to-b from-white to-plank-smoke">
      <div className="page-shell py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/" className="serif-title text-4xl font-bold text-plank-ink">
            <span className="text-plank-orange">R</span>ustik Plank
          </Link>

          <div className="flex flex-1 flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-5 text-sm italic">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/admin" className="font-semibold not-italic text-plank-orange">
                Admin
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 font-bold">
                <span>Yt</span>
                <span>X</span>
                <span>f</span>
              </div>
              <span>07584 031409</span>
              <Link href="/admin" className="flex items-center gap-1 italic">
                <UserRound size={16} /> My Account
              </Link>
              <Link href="/cart" className="flex items-center gap-2 font-semibold">
                <ShoppingCart size={20} className="text-plank-orange" />
                {count} Item{count === 1 ? "" : "s"}
              </Link>
              <form onSubmit={handleSearch} className="flex h-9 overflow-hidden border border-plank-line bg-white">
                <input
                  name="q"
                  placeholder="Search"
                  className="w-40 px-3 text-sm outline-none sm:w-52"
                />
                <button className="grid w-10 place-items-center" aria-label="Search products">
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <nav className="mt-6 grid grid-cols-2 gap-2 text-center text-sm uppercase tracking-normal text-plank-ink sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/shop?category=${category}`}
              className="border border-transparent py-2 transition hover:border-plank-line hover:bg-white"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
