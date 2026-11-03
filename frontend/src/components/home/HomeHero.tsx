import vehicleImage from '../../assets/image1.jpg'
import Container from '../Container'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Container className="home-hero-grid">
        <div className="home-hero-copy">
          <p className="home-eyebrow"><span /> TRIMAX AUTO <span className="eyebrow-slash">/</span> PARTS FOR THE ROAD AHEAD</p>
          <h1 id="home-hero-title">
            QUALITY AUTO PARTS.
            <span>BUILT FOR PERFORMANCE.</span>
          </h1>
          <p className="home-hero-description">
            Discover reliable automotive spare parts for the brands and vehicles you depend on.
          </p>
          <div className="home-hero-actions">
            <PrimaryButton href="/products">Explore Products <span aria-hidden="true">↗</span></PrimaryButton>
            <SecondaryButton href="/contact">Contact Us</SecondaryButton>
          </div>
          <p className="home-hero-note">AUTOMOTIVE SPARE PARTS <span>/</span> PRODUCT CATALOGUE</p>
        </div>

        <figure className="home-hero-visual">
          <img src={vehicleImage} alt="Red passenger car shown as temporary Trimax Auto imagery." />
          <figcaption>
            <span>TRIMAX AUTO <i aria-hidden="true" /></span>
            <span>CLIENT PHOTOGRAPHY PLACEHOLDER</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}

export default HomeHero