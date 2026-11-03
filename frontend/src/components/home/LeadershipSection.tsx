import Container from '../Container'
import SectionHeading from '../SectionHeading'
import { leadershipProfiles } from '../../data/leadership'

function LeadershipSection() {
  return (
    <section className="leadership-section" aria-labelledby="leadership-title">
      <Container>
        <div className="leadership-heading-row">
          <SectionHeading
            titleId="leadership-title"
            title="MEET OUR LEADERSHIP"
            eyebrow="THE PEOPLE BEHIND TRIMAX AUTO"
            description="Leadership details and portraits are presented as editable placeholders where not yet confirmed."
          />
          <a className="button button-secondary" href="/about">About Trimax Auto <span aria-hidden="true">↗</span></a>
        </div>

        <div className="leadership-grid">
          {leadershipProfiles.map((director, index) => (
            <article className="leadership-card" key={director.id}>
              {director.imageUrl ? (
                <img className="leadership-portrait" src={director.imageUrl} alt={director.imageAlt} loading="lazy" />
              ) : (
                <div className="leadership-portrait-placeholder" role="img" aria-label={director.imageAlt}>
                  <svg viewBox="0 0 64 64" aria-hidden="true">
                    <circle cx="32" cy="22" r="11" />
                    <path d="M12 57c2-13 9-19 20-19s18 6 20 19" />
                  </svg>
                  <span>{director.imagePlaceholderLabel}</span>
                </div>
              )}
              <div className="leadership-card-copy">
                <p className="leadership-card-index">DIRECTOR / 0{index + 1}</p>
                <p className="leadership-card-position">{director.position}</p>
                <h3>{director.name}</h3>
                <h4>{director.heading}</h4>
                <p className="leadership-card-description">{director.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default LeadershipSection