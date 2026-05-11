export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Contact Page</h1>
        <p className="mt-4 text-slate-700">
          You can send a message using the form below.
        </p>
      </section>

      <form className="mt-6 max-w-md rounded-md border bg-white p-5 shadow-sm">
        <label className="block">
          Name
          <input
            placeholder="Enter name"
            className="mt-2 w-full rounded-md border px-3 py-2"
          />
        </label>

        <label className="mt-4 block">
          Email
          <input
            type="email"
            placeholder="Enter email"
            className="mt-2 w-full rounded-md border px-3 py-2"
          />
        </label>

        <label className="mt-4 block">
          Message
          <textarea
            placeholder="Enter message"
            className="mt-2 w-full rounded-md border px-3 py-2"
          />
        </label>

        <button
          type="button"
          className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
