import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "ClientFlow CRM",
  description: "Customer management, sales pipeline, and invoice workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111b31",
                color: "#f8fafc",
                border: "1px solid rgba(148, 163, 184, .2)",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
