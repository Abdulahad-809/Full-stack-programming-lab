"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, BarChart3, CheckCircle2, ReceiptText, Users } from "lucide-react";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import BrandLogo from "./BrandLogo";

export default function AuthForm({ mode }) {
  const register = mode === "register";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { saveSession } = useAuth();
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post(`/auth/${mode}`, form);
      saveSession(data.token, data.user);
      toast.success(register ? "Account created successfully" : "Welcome back");
      router.replace("/dashboard");
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-showcase">
        <Link href="/" className="auth-brand"><BrandLogo size="lg" /></Link>
        <div className="auth-showcase-content">
          <p className="eyebrow">Customer operations, organized</p>
          <h1>A focused workspace for your customer pipeline.</h1>
          <p>Manage contacts, follow sales status, and prepare invoices from one secure business dashboard.</p>
          <div className="auth-benefits">
            <span><Users size={18} /><div><strong>Customer management</strong><small>Track leads and active accounts</small></div></span>
            <span><BarChart3 size={18} /><div><strong>Pipeline visibility</strong><small>See status and value at a glance</small></div></span>
            <span><ReceiptText size={18} /><div><strong>Invoice workflow</strong><small>Generate and save professional invoices</small></div></span>
          </div>
          <div className="auth-mini-dashboard">
            <div><small>PIPELINE VALUE</small><strong>PKR 2.1M</strong></div>
            <div className="auth-mini-bars"><i /><i /><i /><i /></div>
            <footer><span><CheckCircle2 size={14} /> Secure JWT session</span><span>15 customer records ready</span></footer>
          </div>
        </div>
        <p className="auth-footnote">Full Stack Programming Lab - Final Term Project</p>
      </section>

      <section className="auth-form-wrap">
        <form className="auth-card" onSubmit={submit}>
          <div className="auth-mobile-logo"><BrandLogo size="md" /></div>
          <div className="auth-card-heading">
            <p className="eyebrow">{register ? "New CRM workspace" : "ClientFlow CRM"}</p>
            <h2>{register ? "Create your CRM account" : "Welcome back"}</h2>
            <p>{register ? "Start managing customers and invoices securely." : "Log in to manage your CRM workspace."}</p>
          </div>
          {register && <label>Full name <b>*</b><input required name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Enter your full name" /></label>}
          <label>Email address <b>*</b><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label>
          <label>Password <b>*</b><input required minLength="6" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="At least 6 characters" /></label>
          <button className="button primary auth-submit" disabled={loading}>
            {loading ? <span className="button-spinner" /> : null}
            {loading ? "Please wait..." : register ? "Create account" : "Sign in"}
            {!loading && <ArrowRight size={18} />}
          </button>
          <p className="auth-switch">{register ? "Already have an account?" : "New to ClientFlow CRM?"} <Link href={register ? "/login" : "/register"}>{register ? "Sign in" : "Create an account"}</Link></p>
        </form>
      </section>
    </main>
  );
}
