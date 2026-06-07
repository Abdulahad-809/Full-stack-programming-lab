import Link from "next/link";

const columns = [
  {
    title: "Informations",
    links: ["Terms and conditions", "About us", "Sitemap", "Contact", "Return policy", "Suppliers"]
  },
  {
    title: "My Account",
    links: ["Your Account", "Information", "Addresses", "Orders history", "Delivery Information", "Search Terms"]
  },
  {
    title: "Help and More",
    links: ["New products", "Top sellers", "Manufacturers", "Suppliers", "Specials"]
  },
  {
    title: "Links",
    links: ["Delivery", "Service", "Gift Cards", "Mobile", "Manufacturers"]
  }
];

export default function Footer() {
  return (
    <footer className="mt-20 border-b-[12px] border-plank-orange bg-gradient-to-b from-white via-plank-fog to-plank-smoke">
      <div className="footer-curve page-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="serif-title mb-6 text-xl uppercase text-plank-orange">{column.title}</h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href={link === "Contact" ? "/contact" : "/shop"} className="hover:text-plank-orange">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs text-stone-500">
          © 2014 Rustik Plank Furniture. Lab 12 dynamic ecommerce implementation.
        </p>
      </div>
    </footer>
  );
}
