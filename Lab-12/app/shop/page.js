import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getCategories, getProducts } from "@/lib/api";
import { titleCase } from "@/lib/format";

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "all";
  const collection = params?.collection || "all";
  const q = params?.q || "";
  const [products, categories] = await Promise.all([
    getProducts({ category, collection, q }),
    getCategories()
  ]);

  return (
    <div className="page-shell py-12">
      <SectionTitle eyebrow="Catalogue">
        {q ? `Search results for "${q}"` : category !== "all" ? titleCase(category) : "All Furniture"}
      </SectionTitle>

      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="h-max border border-plank-line bg-plank-fog p-6">
          <h2 className="serif-title mb-4 text-xl">Browse</h2>
          <div className="space-y-2">
            <Link className="block hover:text-plank-orange" href="/shop">
              All products
            </Link>
            {categories.map((item) => (
              <Link
                key={item.slug}
                className={`block hover:text-plank-orange ${category === item.slug ? "text-plank-orange" : ""}`}
                href={`/shop?category=${item.slug}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <h2 className="serif-title mb-4 mt-8 text-xl">Collections</h2>
          <div className="space-y-2">
            {["featured", "special", "popular"].map((item) => (
              <Link
                key={item}
                className={`block capitalize hover:text-plank-orange ${collection === item ? "text-plank-orange" : ""}`}
                href={`/shop?collection=${item}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </aside>

        <section>
          {products.length ? (
            <div className="grid gap-x-8 md:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-plank-line bg-white p-10 text-center">
              <h2 className="serif-title text-2xl">No products found</h2>
              <p className="mt-2 text-stone-500">Try another category or search term.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
