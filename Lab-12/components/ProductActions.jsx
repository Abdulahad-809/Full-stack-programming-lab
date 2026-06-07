"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./cart/CartProvider";

export default function ProductActions({ product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <label className="flex items-center gap-2 text-sm">
        Qty
        <input
          type="number"
          min="1"
          max={product.stock || 99}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className="h-11 w-20 border border-plank-line px-3 outline-none focus:border-plank-orange"
        />
      </label>
      <button
        onClick={() => addItem(product, quantity)}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-plank-orange px-7 text-sm font-semibold uppercase text-white transition hover:bg-plank-wood"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
}
