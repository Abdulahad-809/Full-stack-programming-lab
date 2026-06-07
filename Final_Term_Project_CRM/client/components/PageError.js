"use client";

import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageError({ title = "Unable to load this page", message, onRetry }) {
  const router = useRouter();

  return (
    <div className="panel page-error">
      <span><AlertCircle size={26} /></span>
      <h2>{title}</h2>
      <p>{message}</p>
      <div>
        <button className="button secondary" onClick={() => router.back()}>
          <ArrowLeft size={16} /> Go back
        </button>
        {onRetry && (
          <button className="button primary" onClick={onRetry}>
            <RefreshCw size={16} /> Try again
          </button>
        )}
      </div>
    </div>
  );
}
