import HottubLayout from "../_components/HottubLayout";

const calcFields = [
  "Choose Shell Color",
  "Choose Cabinet Finish",
  "Spa Cover",
  "Steps",
  "Audio Package",
  "Water Care System",
  "Installation",
  "Delivery",
];

export default function ProductPage() {
  return (
    <HottubLayout activePath="/category" showRelated>
      <p className="spa-breadcrumbs">Home &gt; Emerald Bay XL TV DVD Stereo Hot Tub</p>
      <h2 className="spa-section-title">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h2>
      <section className="spa-gallery">
        <div>
          <div className="spa-gallery-main" />
          <div className="spa-gallery-thumbs">
            <div className="spa-product-card__image--sand" />
            <div className="spa-product-card__image--silver" />
            <div className="spa-product-card__image--blue" />
          </div>
        </div>
        <div>
          <p className="spa-muted">MATERIAL, SHELL COLOR, INSTALLATION</p>
          <div className="spa-product-card__price">$1970.00</div>
          <ul className="spa-spec-list">
            <li>Manufacturing Warranty</li>
            <li>Seating Capacity: 6</li>
            <li>Water Capacity: 350 gal</li>
            <li>Size: 91 x 91 x 38</li>
            <li>Number of Pumps: 2</li>
            <li>Jets: 90 Jets</li>
          </ul>
          <button type="button" className="spa-button" style={{ marginTop: "10px" }}>Add To Cart</button>
        </div>
        <aside>
          <div className="spa-calc">
            <h4>Price Calculator</h4>
            <form className="spa-form">
              {calcFields.map((field) => (
                <div key={field}>
                  <label>{field}</label>
                  <select aria-label={field}>
                    <option>Select</option>
                  </select>
                </div>
              ))}
              <div style={{ marginTop: "10px" }}>
                <div className="spa-product-card__price" style={{ fontSize: "18px" }}>Total Price: $2000.00</div>
                <button type="button" className="spa-button">Add To Cart</button>
              </div>
            </form>
          </div>
          <div className="spa-resources">
            <h4 className="spa-section-title">Download Resources</h4>
            <div className="spa-resource-thumb" />
          </div>
        </aside>
      </section>
      <div className="spa-tabs">
        {["Details", "Spa Specs", "Accessories", "Reviews", "Q & A"].map((tab) => (
          <button key={tab} type="button">{tab}</button>
        ))}
      </div>
      <div className="spa-tab-panel">
        <h3 className="spa-section-title">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h3>
        <p className="spa-copy">
          This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
        </p>
        <p className="spa-copy">
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        </p>
      </div>
    </HottubLayout>
  );
}
