import HottubLayout from "../_components/HottubLayout";

export default function ContactPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Contact Us</p>
      <h2 className="spa-title">Contact Us</h2>
      <h3 className="spa-section-title">Contact Our Customer Support</h3>
      <p className="spa-copy">To make sure we can address your request quickly, please use the form below.</p>
      <div className="spa-columns" style={{ marginTop: "16px" }}>
        <div className="spa-card">
          <h4>Retail Store Location</h4>
          <p>Hotspring Store Ltd<br />742 Main Street<br />Los Angeles, CA<br />555 123 1234</p>
        </div>
        <div className="spa-card">
          <h4>Services</h4>
          <p>Hotspring Retail<br />Service Department<br />Los Angeles, CA<br />555 987 0987</p>
        </div>
      </div>
      <div style={{ marginTop: "18px", maxWidth: "420px" }}>
        <h3 className="spa-section-title">Contact Us</h3>
        <form className="spa-form">
          <div className="spa-form-row"><label htmlFor="name">Your Name</label><input id="name" type="text" /></div>
          <div className="spa-form-row"><label htmlFor="email">Email</label><input id="email" type="email" /></div>
          <div className="spa-form-row"><label htmlFor="subject">Subject</label><input id="subject" type="text" /></div>
          <div className="spa-form-row"><label htmlFor="message">Your Message</label><textarea id="message" /></div>
          <div><button type="submit" className="spa-button">Submit</button></div>
        </form>
      </div>
    </HottubLayout>
  );
}
