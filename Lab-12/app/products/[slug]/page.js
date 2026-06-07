import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";
import { getProduct, getProducts } from "@/lib/api";
import { formatCurrency, titleCase } from "@/lib/format";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  const related = (await getProducts({ category: product.category }))
    .filter((item) => item.slug !== product.slug)
    .slice(0, 2);

  return (
    <div className="page-shell py-12">
      <Link href="/shop" className="text-sm text-plank-orange">
        Back to shop
      </Link>

      <section className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid min-h-[420px] place-items-center border border-plank-line bg-plank-fog p-8">
          <img src={product.image} alt={product.name} className="max-h-[420px] w-full object-contain" />
        </div>

        <div>
          <p className="text-sm uppercase text-plank-orange">{titleCase(product.category)}</p>
          <h1 className="serif-title mt-2 text-4xl text-plank-ink">{product.name}</h1>
          <p className="mt-5 text-stone-600">{product.description}</p>

          <div className="mt-6 flex flex-wrap items-end gap-4">
            <span className="serif-title text-5xl text-plank-orange">{formatCurrency(product.price)}</span>
            {product.oldPrice ? <span className="text-stone-400 line-through">{formatCurrency(product.oldPrice)}</span> : null}
          </div>

          <ProductActions product={product} />

          <dl className="mt-8 grid gap-4 border-t border-plank-line pt-6 text-sm">
            <div>
              <dt className="font-semibold">Material</dt>
              <dd className="text-stone-600">{product.material || "Reclaimed oak and hand finished timber"}</dd>
            </div>
            <div>
              <dt className="font-semibold">Dimensions</dt>
              <dd className="text-stone-600">{product.dimensions || "Custom sizing available"}</dd>
            </div>
            <div>
              <dt className="font-semibold">Care</dt>
              <dd className="text-stone-600">{product.care || "Wipe clean with a soft dry cloth"}</dd>
            </div>
            <div>
              <dt className="font-semibold">Stock</dt>
              <dd className="text-stone-600">{product.stock} available</dd>
            </div>
          </dl>
        </div>
      </section>

      {related.length ? (
        <section className="mt-16">
          <h2 className="serif-title mb-4 text-2xl">Related products</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {related.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
