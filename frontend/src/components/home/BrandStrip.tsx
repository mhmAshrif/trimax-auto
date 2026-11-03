import { useRef } from 'react'
import { featuredBrands } from '../../data/brands'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import SecondaryButton from '../SecondaryButton'

function BrandStrip() {
  const brandTrack = useRef<HTMLDivElement>(null)

  return (
    <section className="brands-section" id="brands" aria-labelledby="brands-title">
      <Container>
        <div className="brands-heading-row">
          <SectionHeading title="BRANDS WE WORK WITH" titleId="brands-title" eyebrow="A PROVISIONAL SELECTION" />
          <div className="brand-scroll-controls" aria-label="Brand list controls">
            <button
              type="button"
              aria-label="Scroll brands left"
              onClick={() => brandTrack.current?.scrollBy({ left: -260, behavior: 'smooth' })}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Scroll brands right"
              onClick={() => brandTrack.current?.scrollBy({ left: 260, behavior: 'smooth' })}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="brand-track" ref={brandTrack} tabIndex={0} aria-label="Provisional brand names">
          {featuredBrands.map((brand) => (
            <div className={`brand-placeholder${brand.featured ? ' is-featured' : ''}`} key={brand.id}>
              {brand.featured && <span className="brand-placeholder-label">FEATURED NAME</span>}
              <span className={`brand-name brand-name-${brand.id}`}>{brand.name}</span>
            </div>
          ))}
        </div>
        <p className="brand-disclaimer">Provisional names shown for layout only. No official relationship is implied.</p>
        <div className="brand-strip-cta">
          <SecondaryButton href="/brands">View All Brands <span aria-hidden="true">↗</span></SecondaryButton>
        </div>
      </Container>
    </section>
  )
}

export default BrandStrip