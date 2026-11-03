import { homeFeatures } from '../../data/homeFeatures'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import type { HomeFeature } from '../../data/homeFeatures'

function FeatureIcon({ icon }: { icon: HomeFeature['icon'] }) {
  const paths = {
    range: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    support: <><circle cx="12" cy="8" r="3.5" /><path d="M4 20c.7-3.5 3.5-5.3 8-5.3s7.3 1.8 8 5.3" /></>,
    quality: <><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    enquiry: <><path d="M4 5.5h16v11H9l-5 3v-14Z" /><path d="M8 10h8M8 13h5" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[icon]}
    </svg>
  )
}

function WhyChooseUs() {
  return (
    <section className="features-section" id="services" aria-labelledby="features-title">
      <Container>
        <SectionHeading
          title="WHY CHOOSE TRIMAX AUTO?"
          titleId="features-title"
          eyebrow="A CLEARER WAY TO ENQUIRE"
          description="Editable information areas for the details Trimax Auto chooses to share."
        />
        <div className="feature-grid">
          {homeFeatures.map((feature, index) => (
            <article className="feature-card" key={feature.id}>
              <div className="feature-icon"><FeatureIcon icon={feature.icon} /></div>
              <span className="feature-index">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs