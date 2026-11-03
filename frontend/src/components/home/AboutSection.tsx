import vehicleImage from '../../assets/image1.jpg'
import Container from '../Container'
import PrimaryButton from '../PrimaryButton'
import SectionHeading from '../SectionHeading'

function AboutSection() {
  return (
    <section className="about-section" id="about-us" aria-labelledby="about-title">
      <Container className="about-grid">
        <figure className="about-visual">
          <img src={vehicleImage} alt="Red passenger car shown as temporary automotive imagery." loading="lazy" />
          <figcaption>REPLACE WITH APPROVED COMPANY PHOTOGRAPHY</figcaption>
        </figure>
        <div className="about-copy">
          <SectionHeading
            title="ABOUT TRIMAX AUTO"
            titleId="about-title"
            eyebrow="COMPANY PROFILE"
            description="Trimax Auto is an automotive spare-parts company. Add a company introduction here after the business details are confirmed."
          />
          <PrimaryButton href="/about">Learn More <span aria-hidden="true">↗</span></PrimaryButton>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection