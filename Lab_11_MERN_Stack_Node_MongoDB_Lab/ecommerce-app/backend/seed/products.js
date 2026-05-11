import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../models/Product.js";

dotenv.config();

const products = [
  {
    name: "Wireless Headphones",
    description: "Comfortable Bluetooth headphones with clear audio and long battery life.",
    price: 59.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    inStock: true
  },
  {
    name: "Smart Watch",
    description: "Track workouts, notifications, steps, and daily activity from your wrist.",
    price: 89.99,
    category: "Wearables",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    inStock: true
  },
  {
    name: "Laptop Backpack",
    description: "Durable everyday backpack with padded laptop storage and organizer pockets.",
    price: 39.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    inStock: true
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Product seed data inserted successfully");
  } catch (error) {
    console.error("Seed failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts();
