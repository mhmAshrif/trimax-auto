import type { ReactNode } from 'react'
import { Link } from 'react-router'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import SecondaryButton from '../components/SecondaryButton'
import WhatsAppButton from '../components/WhatsAppButton'
import { services } from '../data/services'

const serviceIcons: Record<(typeof services)[number]['icon'], ReactNode> = {
  document: <><path d="M6 3.75h8l4 4v12.5H6z" /><path d="M14 3.75v4h4M9 12h6M9 15.5h6" /></>,
  conversation: <><path d="M4 5.5h16v11H9l-5 3v-14Z" /><path d="M8 10h8M8 13h5" /></>,
  parts: <><path d="M4 7h16M4 12h16M4 17h16" /><circle cx="8" cy="7" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="10" cy="17" r="2" /></>,
  details: <><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5M12 8h.01" /></>,
}

function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-page-hero" aria-labelledby="services-page-title">
        <Container>
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Services</li>
            </ol>
          </nav>
          <SectionHeading
            level={1}
            titleId="services-page-title"
            title="OUR SERVICES"
            eyebrow="TRIMAX AUTO"
            description="Service details are being confirmed. The sections below are editable placeholders and do not describe confirmed offerings."
          />
        </Container>
      </section>

      <section className="services-directory-section" aria-labelledby="service-directory-title">
        <Container>
          <SectionHeading
            titleId="service-directory-title"
            title="SERVICE INFORMATION"
            eyebrow="DETAILS TO BE CONFIRMED"
            description="Replace each placeholder with accurate information approved by the Trimax Auto team."
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.id}>
                <div className="service-card-topline">
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {serviceIcons[service.icon]}
                    </svg>
                  </span>
                  <span className="service-card-index">0{index + 1}</span>
                </div>
                <p className="service-card-status">PLACEHOLDER</p>
                <h2>{service.title}</h2>
                <p className="service-card-description">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="services-contact-section" aria-labelledby="services-contact-title">
        <Container className="services-contact-inner">
          <div>
            <p className="services-eyebrow"><span /> GET IN TOUCH</p>
            <h2 id="services-contact-title">Need more information?</h2>
            <p>Send an enquiry to discuss your requirements with Trimax Auto.</p>
          </div>
          <div className="services-contact-actions">
            <WhatsAppButton variant="inline" message="Hello, I would like to enquire about Trimax Auto services." />
            <SecondaryButton href="/#contact">Contact Us <span aria-hidden="true">↗</span></SecondaryButton>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ServicesPage