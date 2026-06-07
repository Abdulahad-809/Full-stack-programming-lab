"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { createOrder } from "@/lib/api";
import { formatCurrency } from "@/lib/format";

const emptyCustomer = {
  name: "",
  email: "",
  phone: "",
  address: ""
};

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [customer, setCustomer] = useState(emptyCustomer);
  const [status, setStatus] = useState("");

  async function checkout(event) {
    event.preventDefault();
    setStatus("Saving order...");
    try {
      await createOrder({
        customer,
        items: items.map((item) => ({
          product: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        subtotal
      });
      clearCart();
      setCustomer(emptyCustomer);
      setStatus("Order placed successfully.");
    } catch (error) {
      setStatus(error.message || "Could not place order. Make sure the backend and MongoDB are running.");
    }
  }

  return (
    <div className="page-shell py-12">
      <h1 className="serif-title text-4xl">Shopping Cart</h1>

      {!items.length ? (
        <div className="mt-8 border border-plank-line bg-plank-fog p-10 text-center">
          <p>Your cart is empty.</p>
          <Link href="/shop" className="mt-4 inline-block rounded-full bg-plank-orange px-6 py-3 text-white">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <section className="space-y-4">
            {items.map((item) => (
              <article key={item.id} className="grid gap-4 border border-plank-line p-4 sm:grid-cols-[120px_1fr_auto]">
                <img src={item.image} alt={item.name} className="h-28 w-full object-contain" />
                <div>
                  <Link href={`/products/${item.slug}`} className="font-semibold hover:text-plank-orange">
                    {item.name}
                  </Link>
                  <p className="mt-2 text-plank-wood">{formatCurrency(item.price)}</p>
                  <label className="mt-3 flex items-center gap-2 text-sm">
                    Quantity
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, event.target.value)}
                      className="h-9 w-20 border border-plank-line px-2"
                    />
                  </label>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-plank-line hover:text-plank-orange"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={17} />
                </button>
              </article>
            ))}
          </section>

          <aside className="h-max border border-plank-line bg-plank-fog p-6">
            <div className="flex justify-between border-b border-plank-line pb-4">
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <form onSubmit={checkout} className="mt-6 space-y-4">
              {Object.keys(emptyCustomer).map((key) => (
                <label key={key} className="block text-sm capitalize">
                  {key}
                  {key === "address" ? (
                    <textarea
                      required
                      value={customer[key]}
                      onChange={(event) => setCustomer({ ...customer, [key]: event.target.value })}
                      className="mt-1 min-h-24 w-full border border-plank-line p-3 outline-none focus:border-plank-orange"
                    />
                  ) : (
                    <input
                      required={key !== "phone"}
                      type={key === "email" ? "email" : "text"}
                      value={customer[key]}
                      onChange={(event) => setCustomer({ ...customer, [key]: event.target.value })}
                      className="mt-1 h-11 w-full border border-plank-line px-3 outline-none focus:border-plank-orange"
                    />
                  )}
                </label>
              ))}
              <button className="w-full rounded-full bg-plank-orange px-6 py-3 font-semibold uppercase text-white">
                Place Order
              </button>
              {status ? <p className="text-sm text-stone-600">{status}</p> : null}
            </form>
          </aside>
        </div>
      )}
    </div>
  );
}
