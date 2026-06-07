import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="page-shell py-12">
      <SectionTitle eyebrow="About">Rustik Plank Furniture</SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <img src="/images/deal-reclaimed.jpg" alt="Reclaimed furniture workshop" className="h-full min-h-80 w-full object-cover" />
        <div className="flex flex-col justify-center">
          <h1 className="serif-title text-4xl">Reclaimed wood, practical forms, warm rooms.</h1>
          <p className="mt-5 text-stone-600">
            Rustik Plank is a furniture storefront focused on wooden pieces for everyday homes:
            beds, tables, chairs, cabinets, bookcases, and storage. This lab version turns the
            supplied static mockup into a dynamic ecommerce application with API-backed products.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Responsive UI", "MongoDB Data", "CRUD Admin"].map((item) => (
              <div key={item} className="border border-plank-line bg-plank-fog p-5 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
