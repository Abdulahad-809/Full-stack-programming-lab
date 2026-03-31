import HottubLayout from '../shared/HottubLayout';

function PaymentFormPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Shopping &gt; Payment Form</p>
      <h2 className="spa-title">Secure Checkouts</h2>
      <h3 className="spa-section-title">Payment Information</h3>

      <div className="spa-columns" style={{ alignItems: 'start' }}>
        <section>
          <h3 className="spa-section-title" style={{ color: '#ef1b23' }}>
            Step 1. Billing Address
          </h3>
          <form className="spa-form">
            {[
              'First Name',
              'Last Name',
              'Email',
              'Phone',
              'Address',
              'City',
              'State',
              'Zip Code',
              'Country',
            ].map((field) => (
              <div key={field} className="spa-form-row">
                <label>{field}</label>
                {field === 'Country' ? (
                  <select aria-label={field}>
                    <option>Pakistan</option>
                  </select>
                ) : (
                  <input type="text" />
                )}
              </div>
            ))}
          </form>

          <div style={{ height: '16px' }} />

          <form className="spa-form">
            {['First Name', 'Email', 'Phone', 'Address', 'City', 'State', 'Zip Code', 'Country'].map(
              (field) => (
                <div key={field} className="spa-form-row">
                  <label>{field}</label>
                  {field === 'Country' ? (
                    <select aria-label={`Shipping ${field}`}>
                      <option>Pakistan</option>
                    </select>
                  ) : (
                    <input type="text" />
                  )}
                </div>
              )
            )}
          </form>
        </section>

        <section>
          <h3 className="spa-section-title" style={{ color: '#ef1b23' }}>
            Step 2. Card Details
          </h3>
          <form className="spa-form">
            {['Card Type', 'Card Number', 'Expiration', 'Secure Code'].map((field) => (
              <div key={field} className="spa-form-row">
                <label>{field}</label>
                {field === 'Card Type' || field === 'Expiration' ? (
                  <select aria-label={field}>
                    <option>Select</option>
                  </select>
                ) : (
                  <input type="text" />
                )}
              </div>
            ))}
          </form>

          <section style={{ marginTop: '24px' }}>
            <h3 className="spa-section-title" style={{ color: '#ef1b23' }}>
              Step 3. Review Your Order
            </h3>
            <table className="spa-table">
              <thead>
                <tr>
                  <th>Item title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS SCYBA X SERIES 119</td>
                  <td>$ 500</td>
                  <td>1</td>
                  <td>$ 500</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '12px',
                fontSize: '10px',
              }}
            >
              <span>Total with shipping</span>
              <strong style={{ color: '#2d8c31' }}>$ 515.00</strong>
            </div>
            <div style={{ marginTop: '12px' }}>
              <button type="button" className="spa-button" style={{ background: '#79a830' }}>
                Place Your Order
              </button>
            </div>
          </section>

          <div style={{ textAlign: 'right', marginTop: '110px', fontSize: '10px', color: '#666' }}>
            <div>Cart subtotal: $ 500</div>
            <div>Total: $ 515.00</div>
            <div style={{ marginTop: '12px' }}>
              <a href="/shopping/cart" style={{ marginRight: '12px', color: '#6a8aa7' }}>
                Update Shopping
              </a>
              <button type="button" className="spa-button">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </section>
      </div>
    </HottubLayout>
  );
}

export default PaymentFormPage;
