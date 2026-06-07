"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import CustomerForm from "@/components/CustomerForm";
import PageError from "@/components/PageError";
import api, { getErrorMessage } from "@/lib/api";

export default function EditCustomerPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    setError("");
    api.get(`/customers/${id}`)
      .then(({ data }) => setCustomer(data.customer))
      .catch((requestError) => {
        const message = getErrorMessage(requestError);
        setError(message);
        toast.error(message);
      });
  }, [id, retryKey]);

  if (error) return <PageError title="Customer could not be loaded" message={error} onRetry={() => setRetryKey((value) => value + 1)} />;
  if (!customer) return <div className="screen-center inset"><div className="loader" /></div>;
  return <CustomerForm customer={customer} />;
}
