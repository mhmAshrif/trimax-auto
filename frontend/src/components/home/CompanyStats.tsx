import Container from '../Container'
import { homepageStats, homepageStatsDisclaimer } from '../../data/homepageStats'

function CompanyStats() {
  return (
    <section className="company-stats-section" aria-label="Company statistics">
      <Container>
        <div className="company-stats-grid">
          {homepageStats.map((stat) => (
            <article className="company-stat" key={stat.id}>
              <p>{stat.value}</p>
              <h2>{stat.label}</h2>
            </article>
          ))}
        </div>
        <p className="company-stats-disclaimer">{homepageStatsDisclaimer}</p>
      </Container>
    </section>
  )
}

export default CompanyStats