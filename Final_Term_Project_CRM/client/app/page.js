import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  FileText,
  Filter,
  LockKeyhole,
  Search,
  Users,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const features = [
  { icon: LockKeyhole, title: "Secure JWT Authentication", text: "Protected accounts and private CRM data for every user." },
  { icon: Users, title: "Customer Pipeline", text: "Organize leads, active clients, and inactive accounts in one place." },
  { icon: Filter, title: "Search & Filter", text: "Find customer records instantly by name and pipeline status." },
  { icon: FileText, title: "PDF Invoice Generation", text: "Create, save, preview, and download professional invoices." },
  { icon: Bot, title: "Rule-Based Assistant", text: "Use quick predefined commands to navigate common CRM tasks." },
  { icon: BadgeCheck, title: "Responsive Dashboard", text: "Work comfortably across desktop, tablet, and mobile screens." },
];

export default function LandingPage() {
  return (
    <main className="landing">
      <nav className="landing-nav">
        <BrandLogo />
        <div>
          <Link className="text-link" href="/login">Log in</Link>
          <Link className="button primary compact" href="/register">Create account <ArrowRight size={16} /></Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Full Stack MERN + Next.js CRM</span>
          <h1>Manage customers, invoices, and sales activity in <span>one CRM dashboard.</span></h1>
          <p>ClientFlow CRM helps teams organize leads, track customer status, generate invoices, and manage business operations securely.</p>
          <div className="hero-actions">
            <Link className="button primary large" href="/register">Create Account <ArrowRight size={18} /></Link>
            <Link className="button secondary large" href="/login">Log in</Link>
          </div>
          <div className="hero-proof">
            <div><strong>15+</strong><span>sample customers</span></div>
            <div><strong>JWT</strong><span>protected workspace</span></div>
            <div><strong>PDF</strong><span>business invoices</span></div>
          </div>
        </div>

        <div className="crm-preview" aria-label="ClientFlow CRM dashboard preview">
          <div className="preview-bar">
            <BrandLogo size="sm" />
            <span><Search size={14} /> Search customers...</span>
          </div>
          <div className="preview-body">
            <aside>
              <b>Workspace</b>
              <span className="selected">Overview</span>
              <span>Customers</span>
              <span>Invoices</span>
            </aside>
            <div className="preview-dashboard">
              <div className="preview-heading"><div><small>MONDAY OVERVIEW</small><strong>Sales command center</strong></div><button>+ Add customer</button></div>
              <div className="preview-stats">
                <article><small>Total customers</small><strong>15</strong><i>+3 this month</i></article>
                <article><small>Active clients</small><strong>6</strong><i>40% of pipeline</i></article>
                <article><small>Pipeline value</small><strong>PKR 2.1M</strong><i>Across all accounts</i></article>
              </div>
              <div className="preview-table">
                <header><strong>Recent customers</strong><span>View all</span></header>
                <div><b>SA</b><span><strong>Sara Ahmed</strong><small>Nexa Labs</small></span><em className="lead">Lead</em><i>PKR 85,000</i></div>
                <div><b>AR</b><span><strong>Ali Raza</strong><small>Vertex Solutions</small></span><em className="active">Active</em><i>PKR 145,000</i></div>
                <div><b>HM</b><span><strong>Hamza Malik</strong><small>CloudPeak</small></span><em className="inactive">Inactive</em><i>PKR 45,000</i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <p className="eyebrow">Complete CRM workflow</p>
        <h2>Business tools built around customer relationships</h2>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title}><span><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
