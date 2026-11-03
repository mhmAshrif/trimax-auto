import type { ReactNode } from 'react'
import vehicleImage from '../assets/image1.jpg'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import SecondaryButton from '../components/SecondaryButton'
import { aboutUsContent } from '../data/aboutUs'

const valueIcons: Record<(typeof aboutUsContent.values)[number]['icon'], ReactNode> = {
  range: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  support: <><circle cx="12" cy="8" r="3.5" /><path d="M4 20c.7-3.5 3.5-5.3 8-5.3s7.3 1.8 8 5.3" /></>,
  quality: <><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  enquiry: <><path d="M4 5.5h16v11H9l-5 3v-14Z" /><path d="M8 10h8M8 13h5" /></>,
}

function AboutUsPage() {
  return (
    <div className="about-page">
      <section className="about-page-intro" aria-labelledby="about-page-title">
        <Container className="about-page-intro-grid">
          <div className="about-page-intro-copy">
            <p className="about-page-eyebrow"><span /> COMPANY PROFILE</p>
            <h1 id="about-page-title">ABOUT TRIMAX AUTO</h1>
            <p>{aboutUsContent.introduction}</p>
            <SecondaryButton href="/#contact">Contact Us <span aria-hidden="true">↗</span></SecondaryButton>
          </div>
          <figure className="about-page-image">
            <img src={vehicleImage} alt="Red passenger car used as temporary automotive imagery for Trimax Auto." />
            <figcaption>Temporary image. Replace with client-approved photography.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="about-who-section" aria-labelledby="who-we-are-title">
        <Container className="about-who-layout">
          <p className="about-page-eyebrow">01 <span>/</span> OUR COMPANY</p>
          <div>
            <SectionHeading level={2} titleId="who-we-are-title" title="WHO WE ARE" />
            <p className="about-section-copy">{aboutUsContent.whoWeAre}</p>
          </div>
          <span className="about-monogram" aria-hidden="true">TA</span>
        </Container>
      </section>

      <section className="about-purpose-section" aria-label="Our mission and vision">
        <Container className="about-purpose-grid">
          <article className="about-purpose-card">
            <p className="about-page-eyebrow">02 <span>/</span> OUR MISSION</p>
            <SectionHeading title="OUR MISSION" />
            <p>{aboutUsContent.mission}</p>
          </article>
          <article className="about-purpose-card">
            <p className="about-page-eyebrow">03 <span>/</span> OUR VISION</p>
            <SectionHeading title="OUR VISION" />
            <p>{aboutUsContent.vision}</p>
          </article>
        </Container>
      </section>

      <section className="about-values-section" aria-labelledby="why-choose-title">
        <Container>
          <SectionHeading
            titleId="why-choose-title"
            title="WHY CHOOSE US"
            eyebrow="TRIMAX AUTO"
            description="Editable information areas for the details Trimax Auto chooses to share."
          />
          <div className="about-values-grid">
            {aboutUsContent.values.map((value, index) => (
              <article className="about-value-card" key={value.id}>
                <span className="about-value-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {valueIcons[value.icon]}
                  </svg>
                </span>
                <span className="about-value-index">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-contact-section" aria-labelledby="about-contact-title">
        <Container className="about-contact-inner">
          <div>
            <p className="about-page-eyebrow"><span /> GET IN TOUCH</p>
            <h2 id="about-contact-title">Have a question for Trimax Auto?</h2>
            <p>Contact us to discuss your automotive spare-parts enquiry.</p>
          </div>
          <SecondaryButton href="/#contact">Contact Us <span aria-hidden="true">↗</span></SecondaryButton>
        </Container>
      </section>
    </div>
  )
}

export default AboutUsPage