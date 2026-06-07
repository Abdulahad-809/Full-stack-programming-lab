import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <div className="page-shell py-12">
      <SectionTitle eyebrow="Contact">Talk to Rustik Plank</SectionTitle>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="space-y-4">
          {[
            [Phone, "07584 031409", "Monday to Saturday, 9am to 6pm"],
            [Mail, "orders@rustikplank.test", "Product, delivery, and supplier queries"],
            [MapPin, "Rustik Plank Studio", "Furniture market district"]
          ].map(([Icon, title, text]) => (
            <div key={title} className="flex gap-4 border border-plank-line bg-plank-fog p-5">
              <Icon className="text-plank-orange" />
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-stone-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="grid gap-4 border border-plank-line p-6">
          <label className="text-sm">
            Name
            <input className="mt-1 h-11 w-full border border-plank-line px-3 outline-none focus:border-plank-orange" />
          </label>
          <label className="text-sm">
            Email
            <input type="email" className="mt-1 h-11 w-full border border-plank-line px-3 outline-none focus:border-plank-orange" />
          </label>
          <label className="text-sm">
            Message
            <textarea className="mt-1 min-h-36 w-full border border-plank-line p-3 outline-none focus:border-plank-orange" />
          </label>
          <button className="w-max rounded-full bg-plank-orange px-7 py-3 font-semibold uppercase text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
