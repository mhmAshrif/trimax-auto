import { useRef } from 'react'
import { featuredBrands } from '../../data/brands'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import SecondaryButton from '../SecondaryButton'

function BrandStrip() {
  const brandTrack = useRef<HTMLDivElement>(null)
  const renderBrandCards = (duplicate = false) => featuredBrands.map((brand) => (
    <div className={`brand-placeholder${brand.featured ? ' is-featured' : ''}`} key={`${brand.id}${duplicate ? '-loop' : ''}`}>
      {brand.featured && <span className="brand-placeholder-label">FEATURED BRAND</span>}
      <img className="brand-logo-image" src={brand.logoUrl} alt={`${brand.name} logo`} />
    </div>
  ))

  return (
    <section className="brands-section" id="brands" aria-labelledby="brands-title">
      <Container>
        <div className="brands-heading-row">
          <SectionHeading title="BRANDS WE WORK WITH" titleId="brands-title" eyebrow="A PROVISIONAL SELECTION" />
          <div className="brand-scroll-controls" aria-label="Brand list controls">
            <button
              type="button"
              className="button button-secondary icon-button"
              aria-label="Scroll brands left"
              onClick={() => brandTrack.current?.scrollBy({ left: -260, behavior: 'smooth' })}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="button button-secondary icon-button"
              aria-label="Scroll brands right"
              onClick={() => brandTrack.current?.scrollBy({ left: 260, behavior: 'smooth' })}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="brand-track" ref={brandTrack} tabIndex={0} aria-label="Provisional brand names">
          <div className="brand-track-rail">
            <div className="brand-track-group">{renderBrandCards()}</div>
            <div className="brand-track-group" aria-hidden="true">{renderBrandCards(true)}</div>
          </div>
        </div>
        <p className="brand-disclaimer">Brand names and logos are shown for catalogue identification only. No official relationship is implied.</p>
        <div className="brand-strip-cta">
          <SecondaryButton href="/brands">View All Brands <span aria-hidden="true">↗</span></SecondaryButton>
        </div>
      </Container>
    </section>
  )
}

export default BrandStrip