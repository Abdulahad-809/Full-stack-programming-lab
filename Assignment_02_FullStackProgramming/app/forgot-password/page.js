import HottubLayout from "../_components/HottubLayout";

export default function ForgotPasswordPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Forgot Your Password</p>
      <h2 className="spa-title">Forget Your Password</h2>
      <h3 className="spa-section-title">User Account Details</h3>
      <p className="spa-copy">Please enter your email address below to receive your password</p>
      <div style={{ maxWidth: "320px", marginTop: "16px" }}>
        <form className="spa-form">
          <div className="spa-form-row">
            <label htmlFor="forgot-email">Email</label>
            <input id="forgot-email" type="email" />
          </div>
          <div><button type="submit" className="spa-button">Submit</button></div>
        </form>
      </div>
    </HottubLayout>
  );
}
