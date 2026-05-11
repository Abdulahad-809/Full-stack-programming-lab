import React, { useState } from 'react';

const initialProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High-quality over-ear headphones with noise cancellation.',
  },
  {
    id: 2,
    title: 'Smart Watch',
    description: 'Track your activity, sleep, and notifications on the go.',
  },
  {
    id: 3,
    title: 'Portable Speaker',
    description: 'Compact speaker with rich sound and long battery life.',
  },
];

export default function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  return (
    <div className="page">
      <h1>Products</h1>
      <p>Browse our products and add them to your cart.</p>

      <div className="product-grid">
        {initialProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
