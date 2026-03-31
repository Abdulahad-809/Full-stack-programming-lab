import HottubLayout from '../shared/HottubLayout';

const sections = [
  'Interpretation',
  'Risk and title',
  'Charges',
  'Payment',
  'Delivery',
  'Force Majeure',
  'Returns',
  'General',
];

function TermsConditionsPage() {
  return (
    <HottubLayout activePath="/contact">
      <p className="spa-breadcrumbs">Home &gt; Terms &amp; Conditions</p>
      <h2 className="spa-title">Terms and Conditions for Sale</h2>
      <h3 className="spa-section-title">General Terms and Conditions</h3>
      <p className="spa-copy">
        These terms and conditions apply to all orders. Please read them carefully before using our store.
      </p>

      <div style={{ marginTop: '16px' }}>
        {sections.map((section, index) => (
          <section key={section} style={{ marginBottom: '16px' }}>
            <h4 style={{ margin: '0 0 6px', fontSize: '11px', color: '#333' }}>
              {index + 1}. {section}
            </h4>
            <p className="spa-copy">
              This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            </p>
          </section>
        ))}
      </div>
    </HottubLayout>
  );
}

export default TermsConditionsPage;
