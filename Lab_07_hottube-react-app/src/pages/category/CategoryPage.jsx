import HottubLayout from '../shared/HottubLayout';
import ProductCard from '../shared/components/ProductCard';
import { productCards } from '../shared/siteData';

const filters = {
  'Shopping Options': ['Category', 'Brand', 'Info'],
  'Seating Capacity': ['2 - 4 People', '5 - 7 People', '8 People And More'],
  'Choose Sizes': ['5 - 6 Feet Long', '6 - 7 Feet Long', '7 - 8 Feet Long', '8 Feet To Large Size'],
  'Price Type': ['Under $3,000', '$3,000 To $4,000', '$4,000 To $5,000', '$5,000 To $6,000'],
};

function CategoryPage() {
  return (
    <HottubLayout activePath="/category">
      <div className="spa-sidebar-layout">
        <aside className="spa-sidebar">
          {Object.entries(filters).map(([title, items]) => (
            <section key={title} className="spa-filter-block">
              <h2>{title}</h2>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <button type="button">{item}</button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </aside>

        <section>
          <div className="spa-listing-header">
            <div>
              <p className="spa-breadcrumbs">Home &gt; Category</p>
              <h2>Top Product Listing</h2>
            </div>
            <div className="spa-listing-meta">
              <span>6 Items</span>
              <select aria-label="Show products">
                <option>9</option>
              </select>
            </div>
          </div>

          <div className="spa-product-grid">
            {productCards.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </HottubLayout>
  );
}

export default CategoryPage;
