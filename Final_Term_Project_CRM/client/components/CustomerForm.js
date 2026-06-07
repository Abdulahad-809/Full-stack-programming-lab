"use client";

import { useState } from "react";
import { ArrowLeft, Building2, FileText, Save, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "@/lib/api";

const blankCustomer = {
  name: "", email: "", phone: "", company: "", status: "Lead",
  source: "Website", value: 0, notes: "",
};

export default function CustomerForm({ customer }) {
  // The same form handles both adding and editing to keep validation consistent.
  const [form, setForm] = useState(customer ? { ...blankCustomer, ...customer } : blankCustomer);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (customer?._id) {
        await api.put(`/customers/${customer._id}`, form);
        toast.success("Customer updated successfully");
      } else {
        await api.post("/customers", form);
        toast.success("Customer created successfully");
      }
      router.push("/customers");
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <button className="back-link" type="button" onClick={() => router.back()}><ArrowLeft size={17} /> Back to customers</button>
      <div className="page-heading"><div><p className="eyebrow">Customer records</p><h1>{customer ? "Edit customer" : "Add a new customer"}</h1><p>Keep contact and pipeline details clear and up to date.</p></div></div>
      <form className="panel customer-form" onSubmit={submit}>
        <section className="form-section">
          <header><span><UserRound size={18} /></span><div><h2>Customer Information</h2><p>Basic contact information for this account.</p></div></header>
          <div className="form-grid">
            <label>Full name <b>*</b><input required name="name" value={form.name} onChange={update} placeholder="Sara Ahmed" /></label>
            <label>Email address <b>*</b><input required type="email" name="email" value={form.email} onChange={update} placeholder="sara@company.com" /></label>
            <label>Phone number <b>*</b><input required name="phone" value={form.phone} onChange={update} placeholder="+92 300 1234567" /></label>
          </div>
        </section>
        <section className="form-section">
          <header><span><Building2 size={18} /></span><div><h2>Business Details</h2><p>Pipeline stage, source, and estimated value.</p></div></header>
          <div className="form-grid">
            <label>Company <b>*</b><input required name="company" value={form.company} onChange={update} placeholder="Company name" /></label>
            <label>Status <b>*</b><select name="status" value={form.status} onChange={update}><option>Lead</option><option>Active</option><option>Inactive</option></select></label>
            <label>Source<select name="source" value={form.source} onChange={update}><option>Website</option><option>Referral</option><option>Social Media</option><option>Email</option><option>Phone</option><option>Other</option></select></label>
            <label>Pipeline value (PKR) <b>*</b><input required min="0" step="1" type="number" name="value" value={form.value} onChange={update} /><span className="field-hint">Enter zero or a positive estimated value.</span></label>
          </div>
        </section>
        <section className="form-section">
          <header><span><FileText size={18} /></span><div><h2>Notes</h2><p>Add useful context for future follow-ups.</p></div></header>
          <label>Customer notes<textarea name="notes" rows="4" value={form.notes} onChange={update} placeholder="Meeting details, requirements, next steps..." /></label>
        </section>
        <div className="form-actions"><button className="button secondary" type="button" onClick={() => router.back()}>Cancel</button><button className="button primary" disabled={loading}><Save size={17} /> {loading ? "Saving..." : "Save customer"}</button></div>
      </form>
    </div>
  );
}
