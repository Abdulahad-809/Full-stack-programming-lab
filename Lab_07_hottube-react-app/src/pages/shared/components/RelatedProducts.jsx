import { relatedProducts } from '../siteData';

function RelatedProducts() {
  return (
    <section className="spa-related">
      <h3>Customers Who Viewed This Item Also</h3>
      <div className="spa-related__row">
        <button type="button" aria-label="Previous products">
          &#8249;
        </button>
        <div className="spa-related__items">
          {relatedProducts.map((product) => (
            <article key={product.id} className="spa-mini-card">
              <div className="spa-mini-card__thumb" />
              <div>
                <strong>{product.price}</strong>
                <p>{product.name}</p>
              </div>
            </article>
          ))}
        </div>
        <button type="button" aria-label="Next products">
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default RelatedProducts;
