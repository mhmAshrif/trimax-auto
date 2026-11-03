import { featuredProducts } from '../../data/featuredProducts'
import { Link } from 'react-router'
import Container from '../Container'
import PrimaryButton from '../PrimaryButton'
import SectionHeading from '../SectionHeading'
import SecondaryButton from '../SecondaryButton'
import WhatsAppButton from '../WhatsAppButton'

function FeaturedProducts() {
  return (
    <section className="products-section" id="products" aria-labelledby="products-title">
      <Container>
        <div className="products-heading-row">
          <SectionHeading
            title="FEATURED PRODUCTS"
            titleId="products-title"
            eyebrow="DEMONSTRATION CATALOGUE"
            description="Sample listings for layout preview. Product details and imagery are placeholders."
          />
          <SecondaryButton href="/products" className="products-view-all">View All Products <span aria-hidden="true">↗</span></SecondaryButton>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  loading={index > 1 ? 'lazy' : 'eager'}
                />
                <span className="demo-label">DEMO ITEM</span>
                <span className="product-image-index">0{index + 1}</span>
              </div>
              <div className="product-card-body">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="product-actions">
                  <Link className="button button-secondary" to={`/products/${product.id}`}>View Details</Link>
                  <WhatsAppButton variant="inline" message={`Enquiry about demonstration item: ${product.name}`} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="products-footer">
          <p>All listings and product visuals are for demonstration only.</p>
          <PrimaryButton href="/contact">Ask about a part <span aria-hidden="true">↗</span></PrimaryButton>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts