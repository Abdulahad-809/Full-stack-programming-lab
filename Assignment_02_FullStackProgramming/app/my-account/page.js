import HottubLayout from "../_components/HottubLayout";

export default function MyAccountPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; My Account</p>
      <h2 className="spa-title">User Profile Details</h2>
      <section>
        <h3 className="spa-section-title">User profile</h3>
        <p className="spa-copy">
          Your dashboard lets you view recent orders, manage billing and shipping addresses, and edit account details.
        </p>
        <div className="spa-account-links">
          <a href="/profile/edit">Edit Profile</a>
          <a href="/profile/order-details">Order Details</a>
          <a href="/profile/order-summary">Order Summary</a>
          <a href="/shopping/cart">Shopping Cart</a>
          <a href="/shopping/payment">Checkout</a>
        </div>
      </section>

      <section style={{ marginTop: "16px" }}>
        <h3 className="spa-section-title">Recent Orders</h3>
        <table className="spa-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order</th>
              <th>Status</th>
              <th>Total</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((row) => (
              <tr key={row}>
                <td>05/08</td>
                <td>Customer ID {row}05</td>
                <td>On Hold</td>
                <td>$ 700.00</td>
                <td>
                  <a href="/product" className="spa-button" style={{ display: "inline-grid", placeItems: "center", width: "92px" }}>
                    View Order
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: "18px" }}>
        <h3 className="spa-section-title">My Addresses</h3>
        <div className="spa-address-grid">
          <article className="spa-card">
            <h4>Billing address</h4>
            <p>Faryal Javed<br />House 4B<br />Street 15, Lahore<br />54000</p>
            <a href="/billing-address" className="spa-button" style={{ display: "inline-grid", placeItems: "center", width: "112px" }}>
              Edit Address
            </a>
          </article>
          <article className="spa-card">
            <h4>Billing address</h4>
            <p>Faryal Javed<br />House 4B<br />Street 15, Lahore<br />54000</p>
            <a href="/shipping-address" className="spa-button" style={{ display: "inline-grid", placeItems: "center", width: "112px" }}>
              Edit Address
            </a>
          </article>
        </div>
      </section>
    </HottubLayout>
  );
}
