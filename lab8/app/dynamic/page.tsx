import dynamic from "next/dynamic";

const DynamicCard = dynamic(() => import("../components/DynamicCard"), {
  loading: () => (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      Loading component...
    </div>
  ),
});

export default function DynamicPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Dynamic Component</h1>
        <p className="mt-4 max-w-2xl text-slate-700">
          This page loads a separate component and updates its data when the
          button is clicked.
        </p>
      </section>

      <section className="mt-8 max-w-xl">
        <DynamicCard />
      </section>
    </main>
  );
}
