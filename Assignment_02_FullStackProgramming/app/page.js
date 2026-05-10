import HottubLayout from "./_components/HottubLayout";
import ProductCard from "./_components/ProductCard";
import { productCards } from "./_components/siteData";

export default function HomePage() {
  return (
    <HottubLayout activePath="/category">
      <section className="spa-hero">
        <div className="spa-hero__content">
          <h2>
            Barrier Reef 155 Jet
            <br />
            TV Stereo Home Theater
            <br />
            Supter Spa
          </h2>
          <p>5 Person</p>
          <p>Large hot tub with TV and home theater spa system.</p>
          <div className="spa-hero__price">$4899.00</div>
          <a
            href="/product"
            className="spa-button"
            style={{ display: "inline-grid", placeItems: "center", width: "96px" }}
          >
            More Details
          </a>
        </div>
        <div className="spa-hero__image" />
      </section>

      <section className="spa-home-promos">
        <div className="spa-promo-card">5-8 PERSON SPA</div>
        <div className="spa-promo-card">TV THEATER SPA</div>
        <div className="spa-promo-card spa-promo-card--red">
          <strong>SAVE 50%</strong>
        </div>
      </section>

      <section className="spa-home-hub">
        <a href="/my-account">My Account</a>
        <a href="/profile/edit">Edit Profile</a>
        <a href="/shopping/cart">Shopping Cart</a>
        <a href="/shopping/payment">Checkout</a>
        <a href="/shopping/terms">Terms</a>
        <a href="/login">Login</a>
      </section>

      <h2 className="spa-section-title">NEW PRODUCTS</h2>
      <div className="spa-product-grid">
        {productCards.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </HottubLayout>
  );
}
