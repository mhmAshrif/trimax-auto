import heroVideo from '../../assets/home page video.mp4'
import Container from '../Container'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <figure className="home-hero-visual">
        <video src={heroVideo} autoPlay muted loop playsInline aria-hidden="true" tabIndex={-1} />
      </figure>
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
      </Container>
    </section>
  )
}

export default HomeHero