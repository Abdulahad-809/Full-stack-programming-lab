"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import api, { getErrorMessage } from "@/lib/api";
import InvoicePreview from "@/components/InvoicePreview";
import PageError from "@/components/PageError";

export default function InvoiceDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    setError("");
    api.get(`/invoices/${id}`)
      .then(({ data }) => setInvoice(data.invoice))
      .catch((requestError) => {
        const message = getErrorMessage(requestError);
        setError(message);
        toast.error(message);
      });
  }, [id, retryKey]);

  if (error) return <PageError title="Invoice could not be loaded" message={error} onRetry={() => setRetryKey((value) => value + 1)} />;
  if (!invoice) return <div className="screen-center inset"><div className="loader" /></div>;
  return <div className="invoice-detail"><button className="back-link" onClick={() => router.back()}><ArrowLeft size={17} /> Back to invoices</button><InvoicePreview invoice={invoice} /></div>;
}
