function ProductCard({ product }) {
  return (
    <article className="spa-product-card">
      <div className={`spa-product-card__image spa-product-card__image--${product.variant}`} />
      <div className="spa-product-card__content">
        <h3>{product.title}</h3>
        <p>The goods of our stores are very reliable and we care about the customer.</p>
        <div className="spa-product-card__price">{product.price}</div>
        <div className="spa-product-card__actions">
          <button type="button">Add To Cart</button>
          <a href="/product">More Details</a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
