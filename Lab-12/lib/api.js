import { categories as fallbackCategories, products as fallbackProducts } from "./fallbackData";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "API request failed");
  }

  return response.json();
}

export async function getProducts(params = {}) {
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => value && value !== "all")
  ).toString();

  try {
    return await request(`/products${query ? `?${query}` : ""}`);
  } catch {
    return fallbackProducts.filter((product) => {
      const matchesCategory = !params.category || params.category === "all" || product.category === params.category;
      const matchesCollection = !params.collection || params.collection === "all" || product.collection === params.collection;
      const q = params.q?.toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      return matchesCategory && matchesCollection && matchesSearch;
    });
  }
}

export async function getProduct(id) {
  try {
    return await request(`/products/${id}`);
  } catch {
    return fallbackProducts.find((product) => product.slug === id || product._id === id) || null;
  }
}

export async function getCategories() {
  try {
    return await request("/categories");
  } catch {
    return fallbackCategories;
  }
}

export async function createOrder(order) {
  return request("/orders", {
    method: "POST",
    body: JSON.stringify(order)
  });
}

export async function createProduct(product) {
  return request("/products", {
    method: "POST",
    body: JSON.stringify(product)
  });
}

export async function updateProduct(id, product) {
  return request(`/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product)
  });
}

export async function deleteProduct(id) {
  return request(`/products/${id}`, {
    method: "DELETE"
  });
}
