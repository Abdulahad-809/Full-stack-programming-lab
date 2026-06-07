"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./cart/CartProvider";
import { formatCurrency } from "@/lib/format";

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart();

  return (
    <article className="group grid grid-cols-[120px_1fr] gap-4 border-b border-plank-line py-6 last:border-b-0 sm:grid-cols-[160px_1fr]">
      <Link href={`/products/${product.slug}`} className="grid min-h-32 place-items-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-36 w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex min-w-0 flex-col justify-center">
        {product.badge ? (
          <span className="mb-2 w-max rounded-full bg-plank-orange px-2 py-1 text-xs font-semibold uppercase text-white">
            {product.badge}
          </span>
        ) : null}
        <Link href={`/products/${product.slug}`} className="font-semibold leading-tight hover:text-plank-orange">
          {product.name}
        </Link>
        {!compact ? <p className="mt-2 line-clamp-2 text-sm text-stone-500">{product.description}</p> : null}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="serif-title text-xl text-plank-wood">{formatCurrency(product.price)}</span>
          {product.oldPrice ? (
            <span className="text-sm text-stone-400 line-through">{formatCurrency(product.oldPrice)}</span>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="ribbon-button border border-plank-line bg-white px-7 py-2 text-sm transition hover:text-plank-orange"
          >
            Detail
          </Link>
          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-2 rounded-full border border-plank-line px-4 py-2 text-sm transition hover:border-plank-orange hover:text-plank-orange"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
