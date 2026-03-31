import HottubLayout from '../shared/HottubLayout';

function RegisterPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Create Account</p>
      <h2 className="spa-title">Create New Account</h2>
      <h3 className="spa-section-title">User Account Details</h3>
      <p className="spa-copy">To create an account with our store, fill in all mandatory fields.</p>
      <div style={{ maxWidth: '360px', marginTop: '16px' }}>
        <form className="spa-form">
          {[
            ['Email Address', 'email'],
            ['Password', 'password'],
            ['Re-Enter Password', 'password'],
            ['First Name', 'text'],
            ['Last Name', 'text'],
          ].map(([label, type]) => (
            <div key={label} className="spa-form-row">
              <label>{label}</label>
              <input type={type} />
            </div>
          ))}
          <p className="spa-copy">
            <input type="checkbox" id="newsletter" /> <label htmlFor="newsletter">Yes, send me emails about products and specials.</label>
          </p>
          <div>
            <button type="submit" className="spa-button">Create Account</button>
            <a href="/login" style={{ marginLeft: '12px', fontSize: '10px', color: '#6a8aa7' }}>Back to login</a>
          </div>
        </form>
      </div>
    </HottubLayout>
  );
}

export default RegisterPage;
