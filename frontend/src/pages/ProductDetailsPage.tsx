import { Link, useParams } from 'react-router'
import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import SecondaryButton from '../components/SecondaryButton'
import WhatsAppButton from '../components/WhatsAppButton'
import { demoProducts } from '../data/products'

function ProductDetailsPage() {
  const { productId } = useParams()
  const product = demoProducts.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="product-not-found">
        <Container className="product-not-found-content">
          <p className="product-details-eyebrow">CATALOGUE / 404</p>
          <SectionHeading
            level={1}
            title="PRODUCT NOT FOUND"
            description="This product link may be incorrect, or the item is no longer in this demonstration catalogue."
          />
          <SecondaryButton href="/products">Back to Products</SecondaryButton>
        </Container>
      </section>
    )
  }

  const relatedProducts = demoProducts
    .filter((item) => item.id !== product.id && (item.brand === product.brand || item.category === product.category))
    .sort((first, second) => {
      const firstMatch = Number(first.category === product.category) + Number(first.brand === product.brand)
      const secondMatch = Number(second.category === product.category) + Number(second.brand === product.brand)
      return secondMatch - firstMatch || first.name.localeCompare(second.name)
    })
    .slice(0, 4)

  const enquiryMessage = `Enquiry about ${product.name}${product.partNumber ? `, part number ${product.partNumber}` : ''}`

  return (
    <div className="product-details-page">
      <section className="product-details-heading">
        <Container>
          <nav className="product-details-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/products">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>
          <p className="product-details-eyebrow">{product.category.toUpperCase()} / DEMONSTRATION ITEM</p>
          <h1>{product.name}</h1>
        </Container>
      </section>

      <Container>
        <div className="product-details-layout">
          <div className="product-gallery">
            <figure className="product-gallery-main">
              <img src={product.imageUrl} alt={product.imageAlt} />
              <figcaption>Temporary image placeholder</figcaption>
            </figure>
            <div className="product-gallery-thumbnails" aria-label="Product image gallery">
              <div className="product-gallery-thumbnail is-active" aria-hidden="true">
                <img src={product.imageUrl} alt="" />
              </div>
              <p>Product photography to be supplied</p>
            </div>
          </div>

          <section className="product-details-summary" aria-labelledby="product-summary-title">
            <p className="product-details-eyebrow">PRODUCT INFORMATION</p>
            <h2 id="product-summary-title">{product.name}</h2>
            <p className="product-demo-badge">Demonstration data</p>

            <dl className="product-attributes">
              <div>
                <dt>Brand</dt>
                <dd>{product.brand}</dd>
              </div>
              <div>
                <dt>Part number</dt>
                <dd>{product.partNumber ?? 'Not provided'}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
            </dl>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description ?? 'Product description to be confirmed.'}</p>
            </div>

            <div className="product-details-actions">
              <WhatsAppButton variant="inline" message={enquiryMessage} />
              <SecondaryButton href="/products">Back to Products</SecondaryButton>
            </div>
          </section>
        </div>
      </Container>

      {relatedProducts.length > 0 && (
        <section className="related-products-section" aria-labelledby="related-products-title">
          <Container>
            <SectionHeading
              title="RELATED PRODUCTS"
              titleId="related-products-title"
              eyebrow="MORE FROM THE CATALOGUE"
              description="Other demonstration listings from the same brand or category."
            />
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
            <div className="related-products-back">
              <PrimaryButton href="/products">Browse All Products</PrimaryButton>
            </div>
          </Container>
        </section>
      )}
    </div>
  )
}

export default ProductDetailsPage