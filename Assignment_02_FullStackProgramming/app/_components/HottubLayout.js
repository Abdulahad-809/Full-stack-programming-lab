import Link from "next/link";
import RelatedProducts from "./RelatedProducts";
import { navLinks, promoBrands } from "./siteData";

export default function HottubLayout({
  activePath,
  children,
  showRelated = false,
  contentClassName = "",
  mainClassName = "",
}) {
  return (
    <div className="spa-page">
      <div className="spa-page__backdrop" />
      <div className="spa-page__shell">
        <div className="spa-topbar">
          <span>Call for Customer support: 020 38989565</span>
          <div className="spa-topbar__links">
            <a href="/my-account">My Account</a>
            <span>|</span>
            <a href="/my-account">Wishlist</a>
            <span>|</span>
            <a href="/product">To Checkout</a>
          </div>
        </div>

        <header className="spa-header">
          <Link className="spa-brand" href="/">
            <h1>HOTSPRING</h1>
            <p>Portable Spas</p>
          </Link>
          <div className="spa-cart">
            <a className="spa-cart__icon" href="/shopping/cart">
              Cart
            </a>
            <span>My Cart . 0 Item(s)</span>
          </div>
        </header>

        <nav className="spa-nav">
          <div className="spa-nav__links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activePath === link.href ? "is-active" : ""}
              >
                {link.label}
              </a>
            ))}
          </div>
          <form className="spa-nav__search">
            <input type="search" placeholder="Search" aria-label="Search" />
            <button type="submit">Search</button>
          </form>
        </nav>

        <main className={`spa-main ${mainClassName}`.trim()}>
          <section className={`spa-panel ${contentClassName}`.trim()}>{children}</section>

          {showRelated ? <RelatedProducts /> : null}

          <section className="spa-brands">
            {promoBrands.map((item) => (
              <div key={item} className="spa-brands__item">
                {item}
              </div>
            ))}
          </section>

          <section className="spa-quick-links">
            <h3>Quick Links</h3>
            <div className="spa-quick-links__grid">
              <Link href="/">Home</Link>
              <a href="/category">Category</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/product">Product</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/my-account">My Account</a>
              <a href="/profile/edit">Edit Profile</a>
              <a href="/profile/order-details">Order Details</a>
              <a href="/profile/order-summary">Order Summary</a>
              <a href="/billing-address">Billing Address</a>
              <a href="/shipping-address">Shipping Address</a>
              <a href="/shopping/cart">Shopping Cart</a>
              <a href="/shopping/payment">Payment Form</a>
              <a href="/shopping/terms">Terms &amp; Conditions</a>
              <a href="/forgot-password">Forgot Password</a>
            </div>
          </section>
        </main>

        <footer className="spa-footer">
          <section>
            <h3>Contact Us</h3>
            <p>yoursitename.com</p>
            <p>CALL 24/7: 888 - 201 - 8899</p>
            <p>
              Street
              <br />
              State &amp; Zip Code
              <br />
              City &amp; Country
            </p>
          </section>
          <section>
            <h3>Information</h3>
            <a href="/about">About Us</a>
            <a href="/contact">Customer Service</a>
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Site Map</a>
          </section>
          <section>
            <h3>My Account</h3>
            <a href="/login">Sign In</a>
            <a href="/shopping/cart">View Cart</a>
            <a href="/my-account">My Wishlist</a>
            <a href="/profile/edit">Edit Profile</a>
            <a href="/profile/order-summary">Order Summary</a>
          </section>
          <section>
            <h3>Signup For A Newsletter</h3>
            <input type="email" placeholder="Your email address" aria-label="Newsletter email" />
            <div className="spa-footer__payments">
              <span>AMEX</span>
              <span>MC</span>
              <span>VISA</span>
              <span>PayPal</span>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
