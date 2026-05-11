import HottubLayout from '../shared/HottubLayout';

function EditProfilePage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Profile &gt; Edit Profile Details</p>
      <h2 className="spa-title">Edit Profile details</h2>
      <p className="spa-copy">Please fill this form below to update your profile details.</p>

      <div style={{ maxWidth: '360px', marginTop: '16px' }}>
        <form className="spa-form">
          {[
            ['First Name', 'text'],
            ['Last Name', 'text'],
            ['Email', 'email'],
            ['Current Password', 'password'],
            ['Confirm Password', 'password'],
          ].map(([label, type]) => (
            <div key={label} className="spa-form-row">
              <label>{label}</label>
              <input type={type} />
            </div>
          ))}
          <div>
            <button type="submit" className="spa-button" style={{ background: '#79a830' }}>
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </HottubLayout>
  );
}

export default EditProfilePage;
