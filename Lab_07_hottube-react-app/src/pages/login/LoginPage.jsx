import HottubLayout from '../shared/HottubLayout';

function LoginPage() {
  return (
    <HottubLayout activePath="/contact" showRelated>
      <p className="spa-breadcrumbs">Home &gt; Login</p>
      <h2 className="spa-title">Login Or Creat Account</h2>
      <div className="spa-auth-grid">
        <section>
          <h3 className="spa-section-title">User Login Details</h3>
          <form className="spa-form" style={{ maxWidth: '300px' }}>
            <div className="spa-form-row"><label htmlFor="login-email">Email</label><input id="login-email" type="email" /></div>
            <div className="spa-form-row"><label htmlFor="login-password">Password</label><input id="login-password" type="password" /></div>
            <div>
              <button type="submit" className="spa-button">Login</button>
              <a href="/forgot-password" style={{ marginLeft: '12px', fontSize: '10px', color: '#6a8aa7' }}>Forget your password?</a>
            </div>
          </form>
        </section>
        <section className="spa-card">
          <h3 className="spa-section-title">New Customer</h3>
          <p>By creating an account with our store, you will be able to move through checkout faster.</p>
          <ul className="spa-copy" style={{ paddingLeft: '16px', margin: '8px 0 14px' }}>
            <li>Faster shopping experience</li>
            <li>Track order status</li>
            <li>Save multiple shipping addresses</li>
          </ul>
          <a href="/register" className="spa-button" style={{ display: 'inline-grid', placeItems: 'center', width: '140px' }}>Create New Account</a>
        </section>
      </div>
    </HottubLayout>
  );
}

export default LoginPage;
