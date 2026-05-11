import HottubLayout from '../shared/HottubLayout';

function OrderSummaryPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Profile &gt; Order Summary</p>
      <h2 className="spa-title">Order Summery</h2>
      <p className="spa-copy">Order #52 was created in December 21 and is currently on hold.</p>

      <section style={{ marginTop: '18px' }}>
        <h3 className="spa-section-title">Your Order Summary</h3>
        <div className="spa-card">
          <p>Order ID: 0057</p>
          <p>Date: December 21 2014</p>
          <p>Status: On Hold</p>
          <p>BIC: 234569</p>
        </div>
      </section>

      <p className="spa-copy" style={{ marginTop: '12px' }}>
        After your payment facility you can track account. Please use your Order ID in the payment reference.
      </p>

      <section style={{ marginTop: '18px' }}>
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
              <td>Five person smoking spa with green light mode</td>
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

        <div style={{ marginTop: '12px', marginLeft: 'auto', maxWidth: '220px', fontSize: '10px', color: '#666' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Cart Subtotal</span><span>$ 500.00</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Shipping</span><span>Free Shipping</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Payment method</span><span>Direct bank transfer</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Total with shipping</strong><strong>$ 500.00</strong></div>
        </div>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h3 className="spa-section-title">Your Bank details</h3>
        <div className="spa-card">
          <p>Bank: Your Bank Name</p>
          <p>Account: 345 4567 4565 2345</p>
          <p>BIC: FACSLSUB49-45</p>
        </div>
      </section>

      <section style={{ marginTop: '24px' }}>
        <div className="spa-columns--3">
          <article className="spa-card">
            <h4>Customer details</h4>
            <p>Customer Name</p>
            <p>name@example.com</p>
            <p>445 787</p>
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

export default OrderSummaryPage;
