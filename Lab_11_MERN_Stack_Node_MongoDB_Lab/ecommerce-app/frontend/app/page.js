export const dynamic = "force-dynamic";

async function getProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  try {
    const response = await fetch(`${apiUrl}/api/products`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  } catch (error) {
    console.error("Unable to load products:", error.message);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-2 text-3xl font-bold">Ecommerce Store</h1>
      <p className="mb-6 text-gray-700">
        Products fetched from MongoDB using Express API.
      </p>

      {products.length === 0 ? (
        <p>No products found. Start backend and run seed command.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <div key={product._id} className="border bg-white p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mb-3 h-40 w-full object-cover"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="mt-2">{product.description}</p>
              <p className="mt-2 font-bold">${product.price}</p>
              <button className="mt-3 border bg-gray-200 px-3 py-1">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
