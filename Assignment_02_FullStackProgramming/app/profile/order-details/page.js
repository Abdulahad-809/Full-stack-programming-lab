import HottubLayout from "../../_components/HottubLayout";

export default function OrderDetailsPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Profile &gt; Order Details</p>
      <h2 className="spa-title">Order Details</h2>
      <p className="spa-copy">Order #52 was created in December 21 and is currently on hold.</p>

      <section style={{ marginTop: "18px" }}>
        <h3 className="spa-section-title">Your Order Details</h3>
        <table className="spa-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The person smoking spa with green light mode</td>
              <td>1</td>
              <td>$ 500.00</td>
            </tr>
            <tr>
              <td>Five person smoking spa with green light mode</td>
              <td>1</td>
              <td>$ 500.00</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "12px", marginLeft: "auto", maxWidth: "220px", fontSize: "10px", color: "#666" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}><span>Cart Subtotal</span><span>$ 500.00</span></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}><span>Shipping</span><span>Free Shipping</span></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}><span>Payment method</span><span>Direct bank transfer</span></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}><strong>Total with shipping</strong><strong>$ 500.00</strong></div>
        </div>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3 className="spa-section-title">Your Bank details</h3>
        <div className="spa-columns">
          <div className="spa-card">
            <p>Bank: Your Bank Name</p>
            <p>Account: December 21 2014</p>
            <p>BIC: 234569</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "24px" }}>
        <div className="spa-columns--3">
          <article className="spa-card">
            <h4>Customer details</h4>
            <p>Customer Name</p>
            <p>customer@example.com</p>
            <p>0300 123 737</p>
          </article>
          <article className="spa-card">
            <h4>Billing address</h4>
            <p>Faryal Javed</p>
            <p>House 10B</p>
            <p>Care 15 New Colony</p>
            <p>Lahore 54000</p>
          </article>
          <article className="spa-card">
            <h4>Shipping address</h4>
            <p>Faryal Javed</p>
            <p>House 10B</p>
            <p>Care 15 New Colony</p>
            <p>Lahore 54000</p>
          </article>
        </div>
      </section>
    </HottubLayout>
  );
}
