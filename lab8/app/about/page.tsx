export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-4 max-w-2xl text-slate-700">
          This website is created for a lab task. It contains a few pages and a
          navigation menu.
        </p>
      </section>

      <section className="mt-8 rounded-md border bg-white p-6">
        <h2 className="text-xl font-semibold">Pages Included</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Home page</li>
          <li>About page</li>
          <li>Products page</li>
          <li>Contact page</li>
        </ul>
      </section>
    </main>
  );
}
