"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, CircleDollarSign, Clock3, Plus, ReceiptText, UserCheck, UserMinus, Users, UserSearch } from "lucide-react";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import EmptyState from "@/components/EmptyState";
import Loader from "@/components/Loader";

const formatMoney = (value) => `PKR ${Number(value).toLocaleString()}`;

export default function DashboardPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [loadError, setLoadError] = useState("");
  const { user } = useAuth();

  const loadCustomers = useCallback(async () => {
    setLoadError("");
    try {
      const { data } = await api.get("/customers");
      setCustomers(data.customers);
    } catch (error) {
      const message = getErrorMessage(error);
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadCustomers(); }, [loadCustomers]);

  const stats = useMemo(() => ({
    total: customers.length,
    leads: customers.filter((customer) => customer.status === "Lead").length,
    active: customers.filter((customer) => customer.status === "Active").length,
    inactive: customers.filter((customer) => customer.status === "Inactive").length,
    value: customers.reduce((sum, customer) => sum + Number(customer.value || 0), 0),
  }), [customers]);

  const seed = async () => {
    setSeeding(true);
    try {
      const { data } = await api.post("/customers/seed");
      toast.success(data.message);
      await loadCustomers();
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setSeeding(false);
    }
  };

  const statCards = [
    ["Total customers", stats.total, Users, "blue"],
    ["Leads", stats.leads, UserSearch, "violet"],
    ["Active", stats.active, UserCheck, "green"],
    ["Inactive", stats.inactive, UserMinus, "orange"],
    ["Pipeline value", formatMoney(stats.value), CircleDollarSign, "cyan"],
  ];

  return (
    <>
      <section className="welcome-card">
        <div><span className="hero-badge"><BarChart3 size={14} /> CRM overview</span><h1>Welcome back, {user?.name?.split(" ")[0]}.</h1><p>Review your customer pipeline, follow account status, and move business activity forward.</p><div className="welcome-actions"><Link href="/customers/add" className="button light"><Plus size={17} /> Add customer</Link><Link href="/invoices" className="button ghost-light"><ReceiptText size={17} /> Create invoice</Link><Link href="/customers" className="button ghost-light"><Users size={17} /> View customers</Link></div></div><div className="welcome-graphic"><BarChart3 size={48} /><span>Customer pipeline</span></div>
      </section>

      <section className="stats-grid">
        {statCards.map(([label, value, Icon, color]) => <article className="stat-card" key={label}><span className={`stat-icon ${color}`}><Icon size={21} /></span><div><p>{label}</p><strong>{loading ? "..." : value}</strong></div></article>)}
      </section>

      <div className="dashboard-lower-grid">
      <section className="panel recent-panel">
        <div className="panel-heading"><div><span className="section-icon"><Clock3 size={19} /></span><div><h2>Recent customers</h2><p>Your latest customer activity</p></div></div><Link href="/customers">View all <ArrowRight size={16} /></Link></div>
        {loading ? (
          <div className="table-loading"><Loader label="Loading dashboard" /></div>
        ) : loadError ? (
          <div className="inline-error"><p>{loadError}</p><button className="button primary compact" onClick={loadCustomers}>Try again</button></div>
        ) : customers.length ? (
          <div className="recent-list">{customers.slice(0, 5).map((customer) => <Link href={`/customers/${customer._id}/edit`} className="recent-row" key={customer._id}><div className="customer-identity"><span className="avatar small">{customer.name.charAt(0)}</span><div><strong>{customer.name}</strong><span>{customer.company}</span></div></div><span className={`status-badge ${customer.status.toLowerCase()}`}>{customer.status}</span><span className="row-value">{formatMoney(customer.value)}</span><ArrowRight size={16} /></Link>)}</div>
        ) : (
          <EmptyState icon={Users} title="No customers yet" message="Load the sample records or add your first customer to see dashboard insights." action={<button className="button primary" onClick={seed} disabled={seeding}>Load 15 Sample Customers</button>} />
        )}
      </section>
      <section className="panel distribution-panel">
        <div className="panel-heading"><div><span className="section-icon"><BarChart3 size={19} /></span><div><h2>Status distribution</h2><p>Customer pipeline breakdown</p></div></div></div>
        <div className="distribution-content">
          {[
            ["Active customers", stats.active, "active"],
            ["Lead customers", stats.leads, "lead"],
            ["Inactive customers", stats.inactive, "inactive"],
          ].map(([label, count, type]) => {
            const percentage = stats.total ? Math.round((count / stats.total) * 100) : 0;
            return <div className="distribution-row" key={label}><div><span>{label}</span><strong>{count} <small>({percentage}%)</small></strong></div><div className="distribution-track"><i className={type} style={{ width: `${percentage}%` }} /></div></div>;
          })}
          {stats.total < 15 && <button className="seed-card-button" onClick={seed} disabled={seeding}>{seeding ? "Loading sample records..." : "Load 15 Sample Customers"}</button>}
        </div>
      </section>
      </div>
    </>
  );
}
