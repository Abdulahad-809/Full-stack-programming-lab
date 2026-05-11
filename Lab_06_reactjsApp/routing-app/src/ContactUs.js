import React, { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulate a request delay
    window.setTimeout(() => {
      setStatus('Message sent! Thank you for contacting us.');
      setName('');
      setEmail('');
      setMessage('');
    }, 500);
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Please fill out the form below and we'll get back to you shortly.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="How can we help?"
            rows={5}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}
