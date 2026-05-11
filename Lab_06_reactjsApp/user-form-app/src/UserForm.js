import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="user-form">
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="submitted">
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Email:</strong> {submitted.email}
          </p>
        </div>
      )}
    </div>
  );
}
