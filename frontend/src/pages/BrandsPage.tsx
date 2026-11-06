import { Link } from 'react-router'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { brands } from '../data/brands'

function BrandsPage() {
  return (
    <div className="brands-page">
      <section className="brands-page-heading">
        <Container>
          <nav className="brands-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Brands</li>
            </ol>
          </nav>
          <SectionHeading
            level={1}
            title="OUR BRANDS"
            eyebrow="BRAND DIRECTORY"
            description="Explore the brand labels currently represented in our demonstration catalogue."
          />
          <p className="brands-page-disclaimer">
            Brand names and logos are shown for catalogue identification only. No official dealership or authorized partnership is implied.
          </p>
        </Container>
      </section>

      <Container className="brands-page-content">
        <div className="brand-directory-grid">
          {brands.map((brand) => (
            <article
              className={`brand-directory-card${brand.featured ? ' is-featured' : ''}`}
              key={brand.id}
            >
              <div className="brand-directory-card-topline">
                <span>BRAND / {brand.id.toUpperCase()}</span>
                {brand.featured && <span className="brand-featured-label">FEATURED BRAND</span>}
              </div>
              <div className={`brand-logo-placeholder brand-logo-${brand.id}`}>
                <img className="brand-logo-image" src={brand.logoUrl} alt={`${brand.name} logo`} />
              </div>
              <p>{brand.description}</p>
              <Link
                className="button button-secondary brand-products-link"
                to={`/products?brand=${encodeURIComponent(brand.name)}`}
              >
                View {brand.name} Products <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default BrandsPage