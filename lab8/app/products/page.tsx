const products = [
  {
    name: "Laptop",
    price: "Rs. 120000",
    detail: "Useful for study, assignments, and programming work.",
  },
  {
    name: "Mouse",
    price: "Rs. 1500",
    detail: "A basic wireless mouse for daily use.",
  },
  {
    name: "Keyboard",
    price: "Rs. 3000",
    detail: "Comfortable keyboard for typing and coding.",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Products Page</h1>
        <p className="mt-4 text-slate-700">
          Here are some sample products with prices.
        </p>
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-md border bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 font-medium text-blue-700">{product.price}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {product.detail}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
