import HottubLayout from '../shared/HottubLayout';

const team = ['Jennifer Lawrence', 'Jennifer Lawrence', 'Jennifer Lawrence', 'Jennifer Lawrence'];

function AboutPage() {
  return (
    <HottubLayout activePath="/about">
      <p className="spa-breadcrumbs">Home &gt; About Us</p>
      <h2 className="spa-title">About Us</h2>
      <div className="spa-columns">
        <div>
          <h3 className="spa-section-title">Welcome to the Company</h3>
          <p className="spa-copy">
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </p>
          <p className="spa-copy">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
          </p>
        </div>
        <div className="spa-image-block" />
      </div>
      <h3 className="spa-section-title" style={{ marginTop: '18px' }}>Our Company Associates</h3>
      <div className="spa-team-grid">
        {team.map((name, index) => (
          <article key={`${name}-${index}`} className="spa-team-card">
            <div className="spa-team-card__image" />
            <h4>{name}</h4>
            <p>Business Consultant</p>
            <p>Helping customers choose the right spa solution.</p>
          </article>
        ))}
      </div>
    </HottubLayout>
  );
}

export default AboutPage;
