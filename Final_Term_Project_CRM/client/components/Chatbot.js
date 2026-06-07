"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Compass, Send, X, CircleHelp } from "lucide-react";
import api, { getErrorMessage } from "@/lib/api";

const commandMap = {
  "add customer": ["/customers/add", "Opening add customer form..."],
  "open invoice": ["/invoices", "Opening invoice generation module..."],
  "generate invoice": ["/invoices", "Opening invoice generation module..."],
  dashboard: ["/dashboard", "Opening dashboard..."],
  "show leads": ["/customers?status=Lead", "Showing lead customers..."],
  "show active": ["/customers?status=Active", "Showing active customers..."],
  "show inactive": ["/customers?status=Inactive", "Showing inactive customers..."],
};

const helpText = "Try these commands: show customers, add customer, open invoice, dashboard, show leads, show active.";

export default function Chatbot() {
  // This assistant is intentionally rule-based and only responds to predefined CRM commands.
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "I can help navigate the CRM using quick predefined commands." },
  ]);
  const router = useRouter();

  const send = async (preset) => {
    const command = (preset || input).trim().toLowerCase();
    if (!command || loading) return;

    let reply = "Sorry, I only understand predefined CRM commands. Type help to see options.";
    if (command === "help") reply = helpText;
    setMessages((current) => [...current, { from: "user", text: command }]);
    setInput("");

    if (command === "show customers") {
      setLoading(true);
      try {
        const { data } = await api.get("/customers");
        const customers = data.customers.slice(0, 6);
        reply = customers.length
          ? `Recent customers: ${customers.map((customer) => `${customer.name} (${customer.status})`).join(", ")}. Opening customer list...`
          : "No customers found yet. Opening customer list...";
        setTimeout(() => router.push("/customers"), 450);
      } catch (error) {
        reply = getErrorMessage(error);
      } finally {
        setLoading(false);
      }
    }

    if (commandMap[command]) {
      const [path, response] = commandMap[command];
      reply = response;
      setTimeout(() => router.push(path), 450);
    }

    setMessages((current) => [...current, { from: "bot", text: reply }]);
  };

  return (
    <>
      {open && (
        <section className="chat-panel" aria-label="CRM assistant">
          <header><div><span className="assistant-mark"><Compass size={17} /></span><div><strong>Quick Assistant</strong><span>CRM navigation commands</span></div></div><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button></header>
          <div className="chat-messages">
            {messages.map((message, index) => <div key={index} className={`chat-message ${message.from}`}>{message.text}</div>)}
          </div>
          <div className="quick-commands">
            {["help", "show customers", "add customer", "open invoice"].map((command) => <button key={command} disabled={loading} onClick={() => send(command)}>{command}</button>)}
          </div>
          <form className="chat-input" onSubmit={(event) => { event.preventDefault(); send(); }}>
            <input value={input} disabled={loading} onChange={(event) => setInput(event.target.value)} placeholder={loading ? "Loading customers..." : "Enter a CRM command..."} aria-label="Chat command" />
            <button type="submit" disabled={loading} aria-label="Send command"><Send size={17} /></button>
          </form>
        </section>
      )}
      <button className="chat-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle CRM assistant">
        {open ? <X size={20} /> : <CircleHelp size={22} />}
      </button>
    </>
  );
}
