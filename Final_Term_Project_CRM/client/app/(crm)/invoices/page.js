"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Download, Eye, FilePlus2, LoaderCircle, Plus, ReceiptText, Trash2, Users, X } from "lucide-react";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "@/lib/api";
import { downloadInvoicePdf } from "@/lib/pdf";
import InvoicePreview from "@/components/InvoicePreview";
import EmptyState from "@/components/EmptyState";
import Loader from "@/components/Loader";

const blankService = { description: "", quantity: 1, price: 0 };
const money = (value) => `PKR ${Number(value || 0).toLocaleString()}`;

export default function InvoicesPage() {
  const [customers, setCustomers] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [services, setServices] = useState([{ ...blankService }]);
  const [summary, setSummary] = useState("");
  const [draftDate] = useState(() => new Date().toISOString());
  const [dataLoading, setDataLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [deletingId, setDeletingId] = useState("");
  const [loadError, setLoadError] = useState("");

  const loadData = useCallback(async () => {
    setDataLoading(true);
    setLoadError("");
    try {
      const [customerResponse, invoiceResponse] = await Promise.all([
        api.get("/customers"),
        api.get("/invoices"),
      ]);
      setCustomers(customerResponse.data.customers);
      setInvoices(invoiceResponse.data.invoices);
    } catch (error) {
      const message = getErrorMessage(error);
      setLoadError(message);
      toast.error(message);
    } finally {
      setDataLoading(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const selectedCustomer = customers.find((customer) => customer._id === customerId);
  const totalAmount = useMemo(
    () => services.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.price || 0), 0),
    [services]
  );
  const preview = customerId ? {
    invoiceNumber: "Draft invoice",
    invoiceDate: draftDate,
    customer: selectedCustomer,
    services: services.map((item) => ({ ...item, amount: Number(item.quantity) * Number(item.price) })),
    totalAmount,
    summary,
  } : null;

  const updateService = (index, key, value) => {
    setServices((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, [key]: value } : item));
  };
  const removeService = (index) => {
    if (services.length === 1) return toast.error("An invoice needs at least one service");
    setServices((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!customerId) return toast.error("Please select a customer");
    if (services.some((item) => {
      const quantity = Number(item.quantity);
      const price = Number(item.price);
      return !item.description.trim() || !Number.isFinite(quantity) || !Number.isFinite(price) || quantity < 1 || price < 0;
    })) {
      return toast.error("Complete every service with a valid quantity and price");
    }

    setGenerating(true);
    try {
      const { data } = await api.post("/invoices", { customer: customerId, services, summary });
      toast.success("Invoice generated and saved");
      setInvoices((current) => [data.invoice, ...current]);
      setCustomerId("");
      setServices([{ ...blankService }]);
      setSummary("");
      downloadInvoicePdf(data.invoice);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setGenerating(false);
    }
  };

  const removeInvoice = async (invoice) => {
    if (!window.confirm(`Delete invoice ${invoice.invoiceNumber}?`)) return;
    setDeletingId(invoice._id);
    try {
      await api.delete(`/invoices/${invoice._id}`);
      setInvoices((current) => current.filter((item) => item._id !== invoice._id));
      toast.success("Invoice deleted");
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setDeletingId("");
    }
  };

  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">Billing workspace</p><h1>Invoice Generator</h1><p>Create professional customer invoices and manage your billing history.</p></div></div>
      <div className="invoice-builder-grid">
        <form className="panel invoice-builder" onSubmit={submit}>
          <div className="panel-heading"><div><span className="section-icon"><FilePlus2 size={19} /></span><div><h2>Build an invoice</h2><p>Add a customer and service details</p></div></div></div>
          <label>Customer<select required disabled={dataLoading || !customers.length} value={customerId} onChange={(event) => setCustomerId(event.target.value)}><option value="">{dataLoading ? "Loading customers..." : customers.length ? "Select a customer" : "No customers available"}</option>{customers.map((customer) => <option key={customer._id} value={customer._id}>{customer.name} - {customer.company}</option>)}</select></label>
          {!dataLoading && !customers.length && !loadError && <div className="invoice-notice"><Users size={18} /><p>Add a customer before creating an invoice.</p><Link href="/customers/add">Add customer</Link></div>}
          <div className="service-heading"><div><strong>Services</strong><span>{services.length} line item{services.length > 1 ? "s" : ""}</span></div><button type="button" className="add-line" onClick={() => setServices((current) => [...current, { ...blankService }])}><Plus size={16} /> Add service</button></div>
          <div className="service-list">{services.map((service, index) => <div className="service-row" key={index}><label className="service-description">Description<input required value={service.description} onChange={(event) => updateService(index, "description", event.target.value)} placeholder="e.g. Website development" /></label><label>Quantity<input required min="1" type="number" value={service.quantity} onChange={(event) => updateService(index, "quantity", event.target.value)} /></label><label>Price (PKR)<input required min="0" type="number" value={service.price} onChange={(event) => updateService(index, "price", event.target.value)} /></label><button type="button" className="remove-line" onClick={() => removeService(index)} aria-label="Remove service"><X size={17} /></button></div>)}</div>
          <label>Summary<textarea rows="3" value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Payment terms or a short project summary..." /></label>
          <div className="builder-total"><span>Invoice total</span><strong>{money(totalAmount)}</strong></div>
          <button className="button primary full-button" disabled={generating || dataLoading || !customers.length}><Download size={18} /> {generating ? "Generating..." : "Generate, save & download"}</button>
        </form>
        <div className="preview-sticky"><InvoicePreview invoice={preview} showDownload={false} /></div>
      </div>

      <section className="panel saved-invoices">
        <div className="panel-heading"><div><span className="section-icon"><ReceiptText size={19} /></span><div><h2>Saved invoices</h2><p>{invoices.length} invoice{invoices.length !== 1 ? "s" : ""} in your workspace</p></div></div></div>
        {dataLoading && <div className="table-loading"><Loader label="Loading invoices" /></div>}
        {!dataLoading && loadError && <div className="inline-error"><p>{loadError}</p><button className="button primary compact" onClick={loadData}>Try again</button></div>}
        {!dataLoading && !loadError && invoices.length ? <div className="invoice-list">{invoices.map((invoice) => <div className="invoice-list-row" key={invoice._id}><div className="invoice-number"><span><ReceiptText size={18} /></span><div><strong>{invoice.invoiceNumber}</strong><small>{new Date(invoice.invoiceDate).toLocaleDateString()}</small></div></div><div><small>CUSTOMER</small><strong>{invoice.customer?.name || "Deleted customer"}</strong></div><div><small>TOTAL</small><strong>{money(invoice.totalAmount)}</strong></div><div className="invoice-actions"><Link href={`/invoices/${invoice._id}`} className="table-action" aria-label="View invoice"><Eye size={16} /></Link><button className="table-action" onClick={() => downloadInvoicePdf(invoice)} aria-label="Download invoice"><Download size={16} /></button><button className="table-action danger" disabled={deletingId === invoice._id} onClick={() => removeInvoice(invoice)} aria-label="Delete invoice">{deletingId === invoice._id ? <LoaderCircle className="spin-icon" size={16} /> : <Trash2 size={16} />}</button></div></div>)}</div> : null}
        {!dataLoading && !loadError && !invoices.length && <EmptyState icon={ReceiptText} title="No saved invoices" message="Your generated invoices will appear here." />}
      </section>
    </>
  );
}
