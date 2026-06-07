import Link from "next/link";
import { Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getCategories, getProducts } from "@/lib/api";
import { formatCurrency } from "@/lib/format";

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const hero = products.find((product) => product.slug === "ribbon-lounge-chair") || products[0];
  const visibleCategories = categories.filter((category) =>
    ["chairs", "beds", "tables"].includes(category.slug)
  );
  const groups = ["featured", "special", "popular"].map((collection) => ({
    collection,
    products: products.filter((product) => product.collection === collection).slice(0, 4)
  }));

  return (
    <>
      <section className="hero-curve bg-gradient-to-r from-plank-smoke via-white to-plank-smoke">
        <div className="page-shell grid min-h-[520px] items-center gap-8 py-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative z-10">
            <img
              src="/images/hero-lounger.jpg"
              alt="Ribbon lounge chair"
              className="h-[360px] w-full object-contain lg:h-[430px]"
            />
          </div>
          <div className="relative z-10 max-w-md">
            <span className="mb-5 inline-block h-0 w-0 border-x-[28px] border-t-[44px] border-x-transparent border-t-plank-amber drop-shadow-md" />
            <h1 className="serif-title text-4xl leading-tight text-plank-ink">
              Reclaimed furniture shaped for modern homes
            </h1>
            <p className="mt-5 text-stone-600">
              Hand-finished timber pieces, warm grain, and functional storage for bedrooms,
              dining rooms, and quiet corners.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="serif-title text-5xl text-plank-orange">{formatCurrency(hero.price)}</span>
              <span className="text-xs font-bold uppercase">Our Price</span>
              <Link
                href={`/products/${hero.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm uppercase shadow-sm"
              >
                Add to <Truck size={17} className="text-plank-orange" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-10 grid gap-6 md:grid-cols-3">
        {visibleCategories.map((category) => (
          <Link
            href={`/shop?category=${category.slug}`}
            key={category.slug}
            className="group relative min-h-44 overflow-hidden bg-plank-fog shadow-sm"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute left-5 top-5">
              <p className="serif-title text-3xl uppercase leading-none">{category.name}</p>
              <p className="serif-title text-2xl uppercase text-plank-orange">Collection</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="page-shell mt-12">
        <div className="grid overflow-hidden border-y border-plank-line bg-white md:grid-cols-3">
          {groups.map(({ collection, products: groupProducts }) => (
            <div key={collection} className="border-plank-line px-8 py-9 md:border-r md:last:border-r-0">
              <h2 className="serif-title mb-5 border-b border-plank-line pb-4 text-2xl uppercase">
                {collection}
              </h2>
              {groupProducts.map((product) => (
                <ProductCard key={product._id} product={product} compact />
              ))}
              <Link
                href={`/shop?collection=${collection}`}
                className="mt-4 block rounded-b-[28px] bg-plank-fog py-5 text-center hover:text-plank-orange"
              >
                See All {collection}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-14">
        <SectionTitle>Hot Deal</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/shop?collection=special" className="relative overflow-hidden border border-plank-line p-3">
            <img src="/images/deal-elite.jpg" alt="Elite collection deal" className="h-full w-full object-cover" />
          </Link>
          <Link href="/shop?q=reclaimed" className="relative overflow-hidden border border-plank-line p-3">
            <img src="/images/deal-reclaimed.jpg" alt="Reclaimed furniture deal" className="h-full w-full object-cover" />
          </Link>
        </div>
      </section>

      <section className="page-shell mt-10 bg-[#fffbc7] px-8 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-5xl font-black uppercase text-[#13bfa8]">Buy Online</p>
            <p className="text-2xl font-black uppercase tracking-[0.25em] text-red-500">Pick up in store</p>
          </div>
          <div className="h-px bg-[#dad19a] md:h-16 md:w-px" />
          <div>
            <p className="text-2xl uppercase">Now available in our store system</p>
            <p className="text-sm uppercase text-stone-600">
              Available on select products. <Link href="/shop" className="text-plank-orange underline">Learn more</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell mt-14">
        <SectionTitle>Latest Updates</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["/images/update-classic-bedroom.jpg", "Classic bedroom arrivals"],
            ["/images/update-modern-bedroom.jpg", "Modern storage refresh"],
            ["/images/update-oak-bedroom.jpg", "Oak bedroom styling"]
          ].map(([image, title]) => (
            <article key={title}>
              <img src={image} alt={title} className="h-44 w-full object-cover" />
              <h3 className="serif-title mt-3 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-stone-500">
                New timber finishes and coordinated bedroom pieces are now available for order.
              </p>
              <Link href="/shop" className="ribbon-button mt-5 inline-block border border-plank-line px-7 py-2 text-sm">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell mt-16 flex flex-wrap items-center justify-center gap-9 text-3xl font-black text-stone-600">
        {["f4b", "QANTAS", "Interrisk", "GE Money", "Rockwell Collins", "LexisNexis", "ooh!media"].map((brand) => (
          <span key={brand} className={brand === "f4b" ? "text-5xl text-lime-500" : ""}>
            {brand}
          </span>
        ))}
      </section>
    </>
  );
}
