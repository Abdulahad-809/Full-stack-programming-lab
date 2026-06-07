"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Edit3, LoaderCircle, Plus, Search, Trash2, Users, X } from "lucide-react";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "@/lib/api";
import EmptyState from "@/components/EmptyState";
import Loader from "@/components/Loader";

const formatMoney = (value) => `PKR ${Number(value || 0).toLocaleString()}`;
const validStatuses = ["Lead", "Active", "Inactive"];

export default function CustomersPage() {
  const searchParams = useSearchParams();
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const requestedStatus = searchParams.get("status");
  const [status, setStatus] = useState(validStatuses.includes(requestedStatus) ? requestedStatus : "All");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [deletingId, setDeletingId] = useState("");
  const latestRequest = useRef(0);

  const loadCustomers = useCallback(async () => {
    const requestId = ++latestRequest.current;
    setLoading(true);
    setLoadError("");
    try {
      const params = {};
      if (search.trim()) params.search = search.trim();
      if (status !== "All") params.status = status;
      const { data } = await api.get("/customers", { params });
      if (requestId === latestRequest.current) setCustomers(data.customers);
    } catch (error) {
      const message = getErrorMessage(error);
      if (requestId === latestRequest.current) {
        setLoadError(message);
        toast.error(message);
      }
    } finally {
      if (requestId === latestRequest.current) setLoading(false);
    }
  }, [search, status]);

  useEffect(() => {
    const timer = setTimeout(loadCustomers, 250);
    return () => clearTimeout(timer);
  }, [loadCustomers]);

  useEffect(() => {
    const nextStatus = searchParams.get("status");
    setStatus(validStatuses.includes(nextStatus) ? nextStatus : "All");
  }, [searchParams]);

  const remove = async (customer) => {
    if (!window.confirm(`Delete ${customer.name}? This cannot be undone.`)) return;
    setDeletingId(customer._id);
    try {
      await api.delete(`/customers/${customer._id}`);
      toast.success("Customer deleted successfully");
      await loadCustomers();
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setDeletingId("");
    }
  };

  const clearFilters = () => { setSearch(""); setStatus("All"); };

  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">Customer pipeline</p><h1>Customers</h1><p>Manage leads, active clients, and inactive accounts.</p></div><Link className="button primary" href="/customers/add"><Plus size={18} /> Add customer</Link></div>
      <section className="panel customer-panel">
        <div className="toolbar">
          <div className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search customers by name..." aria-label="Search customers" /></div>
          <div className="status-tabs" aria-label="Filter by status">
            {["All", ...validStatuses].map((option) => <button key={option} className={status === option ? "active" : ""} onClick={() => setStatus(option)}>{option}</button>)}
          </div>
          {(search || status !== "All") && <button className="clear-button" onClick={clearFilters}><X size={16} /> Clear</button>}
        </div>
        <div className="table-wrap">
          <table><thead><tr><th>Customer</th><th>Email</th><th>Phone</th><th>Status</th><th>Source</th><th>Value</th><th className="actions-cell">Actions</th></tr></thead>
          <tbody>{customers.map((customer) => <tr key={customer._id}><td data-label="Customer"><div className="customer-identity"><span className="avatar small">{customer.name.charAt(0)}</span><div><strong>{customer.name}</strong><span>{customer.company}</span></div></div></td><td data-label="Email">{customer.email}</td><td data-label="Phone">{customer.phone}</td><td data-label="Status"><span className={`status-badge ${customer.status.toLowerCase()}`}>{customer.status}</span></td><td data-label="Source"><span className="source-badge">{customer.source}</span></td><td data-label="Value"><strong>{formatMoney(customer.value)}</strong></td><td data-label="Actions" className="actions-cell"><Link className="table-action" href={`/customers/${customer._id}/edit`} aria-label={`Edit ${customer.name}`}><Edit3 size={16} /></Link><button className="table-action danger" disabled={deletingId === customer._id} onClick={() => remove(customer)} aria-label={`Delete ${customer.name}`}>{deletingId === customer._id ? <LoaderCircle className="spin-icon" size={16} /> : <Trash2 size={16} />}</button></td></tr>)}</tbody></table>
        </div>
        {!loading && loadError && !customers.length && <div className="inline-error"><p>{loadError}</p><button className="button primary compact" onClick={loadCustomers}>Try again</button></div>}
        {!loading && !loadError && !customers.length && <EmptyState icon={Users} title="No matching customers" message="Try clearing your filters or add a new customer record." action={<button className="button secondary" onClick={clearFilters}>Clear filters</button>} />}
        {loading && <div className="table-loading"><Loader label="Loading customers" /></div>}
      </section>
    </>
  );
}
