import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-950">Home Page</h1>
        <p className="mt-4 max-w-2xl text-slate-700">
          Welcome to my website. This app has multiple pages with simple
          navigation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
          >
            About
          </Link>
          <Link
            href="/products"
            className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-md border bg-white p-5">
          <h2 className="font-semibold">About</h2>
          <p className="mt-2 text-sm text-slate-600">
            Learn basic information about the website.
          </p>
        </div>
        <div className="rounded-md border bg-white p-5">
          <h2 className="font-semibold">Products</h2>
          <p className="mt-2 text-sm text-slate-600">
            View a small list of sample products.
          </p>
        </div>
        <div className="rounded-md border bg-white p-5">
          <h2 className="font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-slate-600">
            Fill out a simple contact form.
          </p>
        </div>
      </section>
    </main>
  );
}
