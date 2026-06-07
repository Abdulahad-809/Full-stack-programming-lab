"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plus,
  Users,
  ReceiptText,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Chatbot from "./Chatbot";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/customers/add", label: "Add Customer", icon: Plus },
  { href: "/invoices", label: "Invoices", icon: ReceiptText },
];

export default function AppShell({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const pageName = links.find(({ href }) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href)
  )?.label || "Workspace";

  return (
    <ProtectedRoute>
      <div className="app-shell">
        {open && <button className="sidebar-backdrop" onClick={() => setOpen(false)} aria-label="Close navigation" />}
        <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
          <div className="sidebar-brand">
            <BrandLogo />
            <button className="icon-button sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={20} /></button>
          </div>

          <nav className="sidebar-nav">
            <p className="eyebrow">Workspace</p>
            {links.map(({ href, label, icon: Icon }) => {
              const active = href === "/customers"
                ? pathname === "/customers" || pathname.includes("/edit")
                : pathname === href || (href === "/invoices" && pathname.startsWith("/invoices/"));
              return (
                <Link key={href} href={href} className={`nav-link ${active ? "active" : ""}`} onClick={() => setOpen(false)}>
                  <Icon size={19} /> {label}
                </Link>
              );
            })}
          </nav>

          <div className="sidebar-user">
            <div className="avatar">{user?.name?.charAt(0).toUpperCase()}</div>
            <div className="user-copy"><strong>{user?.name}</strong><span>{user?.email}</span></div>
            <button className="icon-button" onClick={logout} title="Logout" aria-label="Logout"><LogOut size={18} /></button>
          </div>
          <button className="sidebar-logout" onClick={logout}><LogOut size={17} /> Log out</button>
        </aside>

        <main className="main-content">
          <header className="desktop-topbar">
            <div>
              <span>{pageName}</span>
              <small>Secure CRM workspace</small>
            </div>
            <div className="topbar-actions">
              <Link href="/customers/add" className="topbar-link"><Plus size={16} /> Add customer</Link>
              <Link href="/invoices" className="button primary compact"><ReceiptText size={16} /> New invoice</Link>
              <div className="topbar-user"><span className="avatar small">{user?.name?.charAt(0)}</span><div><strong>{user?.name}</strong><small>CRM account</small></div></div>
            </div>
          </header>
          <header className="mobile-header">
            <button className="icon-button" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
            <BrandLogo size="sm" />
          </header>
          <div className="page-container">{children}</div>
        </main>
        <Chatbot />
      </div>
    </ProtectedRoute>
  );
}
