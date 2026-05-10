import HottubLayout from "../../_components/HottubLayout";

export default function ShoppingCartPage() {
  return (
    <HottubLayout activePath="/contact" showRelated>
      <p className="spa-breadcrumbs">Home &gt; Shopping Cart</p>
      <h2 className="spa-title">Shopping Cart</h2>
      <h3 className="spa-section-title">Your Shopping Cart</h3>
      <p className="spa-copy">
        Items in your cart. To change quantity or remove a product, update and click edit.
      </p>

      <div style={{ marginTop: "14px" }}>
        {[1, 2].map((item, index) => (
          <div
            key={item}
            style={{
              display: "grid",
              gridTemplateColumns: "56px 1fr 80px 120px",
              gap: "12px",
              padding: "10px 0",
              borderTop: "1px solid #ddd",
              alignItems: "start",
            }}
          >
            <div
              className={index === 0 ? "spa-product-card__image spa-product-card__image--blue" : "spa-product-card__image spa-product-card__image--sand"}
              style={{ aspectRatio: "1 / 1" }}
            />
            <div>
              <strong style={{ fontSize: "10px", color: "#21425c" }}>
                {index === 0
                  ? "The Cuberra 3 Person 89 Jet and Tub TV Hot Spa"
                  : "The Cuberra 5 Person 47 Jet Hot Tub TV Home Spa"}
              </strong>
              <p className="spa-copy" style={{ marginTop: "4px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div style={{ fontSize: "10px", color: "#666" }}>
              <label htmlFor={`qty-${item}`}>Quantity</label>
              <select id={`qty-${item}`} aria-label={`Quantity ${item}`}>
                <option>1</option>
              </select>
            </div>
            <div style={{ textAlign: "right", fontSize: "10px", color: "#666" }}>
              <div>$ 500.00</div>
              <div style={{ marginTop: "20px", color: "#6a8aa7" }}>Remove | Edit Product</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "right", marginTop: "18px", fontSize: "10px", color: "#666" }}>
        <div>Cart subtotal: $ 500</div>
        <div style={{ fontWeight: "700", color: "#ef1b23" }}>Total: $ 500.00</div>
        <div style={{ marginTop: "12px" }}>
          <a href="/shopping/cart" style={{ marginRight: "12px", color: "#6a8aa7" }}>
            Update Shopping
          </a>
          <a
            href="/shopping/payment"
            className="spa-button"
            style={{ display: "inline-grid", placeItems: "center" }}
          >
            Proceed To Checkout
          </a>
        </div>
      </div>
    </HottubLayout>
  );
}
