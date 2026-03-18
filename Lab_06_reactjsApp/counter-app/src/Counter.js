import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <section style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <p style={{ fontSize: "2rem", margin: "1rem 0" }}>
        Current count: <strong>{count}</strong>
      </p>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}
