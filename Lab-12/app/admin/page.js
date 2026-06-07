"use client";

import { useEffect, useMemo, useState } from "react";
import { Pencil, Plus, RefreshCw, Trash2 } from "lucide-react";
import { createProduct, deleteProduct, getProducts, updateProduct } from "@/lib/api";
import { formatCurrency } from "@/lib/format";

const blankProduct = {
  name: "",
  category: "chairs",
  collection: "featured",
  description: "",
  price: "134.99",
  oldPrice: "",
  image: "/images/product-dining-chair.jpg",
  badge: "",
  stock: "10",
  material: "Reclaimed oak and hand finished timber",
  dimensions: "Custom sizing available",
  care: "Wipe clean with a soft dry cloth"
};

const imageOptions = [
  "/images/product-dining-chair.jpg",
  "/images/product-lounge-chair.jpg",
  "/images/product-shell-chairs.jpg",
  "/images/product-bookcase.jpg",
  "/images/product-platform-bed.jpg",
  "/images/product-square-table.jpg",
  "/images/product-storage-chest.jpg",
  "/images/product-nesting-bowls.jpg"
];

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(blankProduct);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const isEditing = useMemo(() => Boolean(editingId), [editingId]);

  async function loadProducts() {
    setMessage("Loading products...");
    const data = await getProducts();
    setProducts(data);
    setMessage(data.some((item) => String(item._id).startsWith("seed-")) ? "Showing fallback data until the API is running." : "");
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function changeField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function editProduct(product) {
    setEditingId(product._id);
    setForm({
      name: product.name,
      category: product.category,
      collection: product.collection,
      description: product.description,
      price: String(product.price),
      oldPrice: product.oldPrice ? String(product.oldPrice) : "",
      image: product.image,
      badge: product.badge || "",
      stock: String(product.stock || 0),
      material: product.material || blankProduct.material,
      dimensions: product.dimensions || blankProduct.dimensions,
      care: product.care || blankProduct.care
    });
  }

  async function submitProduct(event) {
    event.preventDefault();
    setMessage("Saving product...");
    const payload = {
      ...form,
      price: Number(form.price),
      oldPrice: form.oldPrice ? Number(form.oldPrice) : undefined,
      stock: Number(form.stock)
    };

    try {
      if (isEditing) {
        await updateProduct(editingId, payload);
      } else {
        await createProduct(payload);
      }
      setForm(blankProduct);
      setEditingId(null);
      await loadProducts();
      setMessage("Product saved.");
    } catch (error) {
      setMessage(error.message || "Could not save product. Start the backend and MongoDB first.");
    }
  }

  async function removeProduct(id) {
    setMessage("Deleting product...");
    try {
      await deleteProduct(id);
      await loadProducts();
      setMessage("Product deleted.");
    } catch (error) {
      setMessage(error.message || "Could not delete product.");
    }
  }

  return (
    <div className="page-shell py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase text-plank-orange">Admin</p>
          <h1 className="serif-title text-4xl">Product CRUD</h1>
        </div>
        <button onClick={loadProducts} className="inline-flex items-center gap-2 rounded-full border border-plank-line px-5 py-3">
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      {message ? <p className="mt-5 border border-plank-line bg-plank-fog p-3 text-sm">{message}</p> : null}

      <div className="mt-8 grid gap-10 lg:grid-cols-[380px_1fr]">
        <form onSubmit={submitProduct} className="h-max border border-plank-line bg-plank-fog p-6">
          <h2 className="serif-title mb-5 text-2xl">{isEditing ? "Edit Product" : "Create Product"}</h2>
          <div className="grid gap-4">
            <label className="text-sm">
              Name
              <input name="name" required value={form.name} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3" />
            </label>
            <label className="text-sm">
              Description
              <textarea name="description" required value={form.description} onChange={changeField} className="mt-1 min-h-24 w-full border border-plank-line p-3" />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm">
                Category
                <select name="category" value={form.category} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3">
                  {["beds", "cabinets", "bookcases", "boxes", "chairs", "tables"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm">
                Collection
                <select name="collection" value={form.collection} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3">
                  {["featured", "special", "popular"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <label className="text-sm">
                Price
                <input name="price" required type="number" step="0.01" value={form.price} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3" />
              </label>
              <label className="text-sm">
                Old
                <input name="oldPrice" type="number" step="0.01" value={form.oldPrice} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3" />
              </label>
              <label className="text-sm">
                Stock
                <input name="stock" required type="number" value={form.stock} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3" />
              </label>
            </div>
            <label className="text-sm">
              Image
              <select name="image" value={form.image} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3">
                {imageOptions.map((image) => (
                  <option key={image} value={image}>{image}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              Badge
              <input name="badge" value={form.badge} onChange={changeField} className="mt-1 h-11 w-full border border-plank-line px-3" />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-plank-orange px-6 py-3 font-semibold uppercase text-white">
              <Plus size={18} />
              {isEditing ? "Update Product" : "Create Product"}
            </button>
            {isEditing ? (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm(blankProduct);
                }}
                className="rounded-full border border-plank-line px-6 py-3"
              >
                Cancel edit
              </button>
            ) : null}
          </div>
        </form>

        <section className="overflow-hidden border border-plank-line">
          <div className="grid grid-cols-[90px_1fr_auto] bg-plank-fog px-4 py-3 text-sm font-semibold uppercase">
            <span>Image</span>
            <span>Product</span>
            <span>Actions</span>
          </div>
          {products.map((product) => (
            <article key={product._id} className="grid grid-cols-[90px_1fr_auto] items-center gap-4 border-t border-plank-line px-4 py-4">
              <img src={product.image} alt={product.name} className="h-16 w-20 object-contain" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-stone-500">
                  {product.category} · {product.collection} · {formatCurrency(product.price)}
                </p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => editProduct(product)} className="grid h-10 w-10 place-items-center rounded-full border border-plank-line" aria-label={`Edit ${product.name}`}>
                  <Pencil size={17} />
                </button>
                <button onClick={() => removeProduct(product._id)} className="grid h-10 w-10 place-items-center rounded-full border border-plank-line text-red-600" aria-label={`Delete ${product.name}`}>
                  <Trash2 size={17} />
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
