import HottubLayout from "../_components/HottubLayout";

export default function EditShippingAddressPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; My Account &gt; Edit Shipping Address</p>
      <h2 className="spa-title">Edit Shipping Address</h2>
      <p className="spa-copy">Please fill this form below to update your profile details</p>
      <div style={{ maxWidth: "360px", marginTop: "16px" }}>
        <form className="spa-form">
          {["First Name", "Last Name", "Street", "Phone", "City", "State", "Zip Code", "Country"].map((field) => (
            <div key={field} className="spa-form-row">
              <label>{field}</label>
              <input type="text" />
            </div>
          ))}
          <div><button type="submit" className="spa-button">Update Address</button></div>
        </form>
      </div>
    </HottubLayout>
  );
}
