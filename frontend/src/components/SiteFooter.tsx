import { siteConfig } from '../config/site'
import { Link } from 'react-router'
import Container from './Container'

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <Container className="footer-main">
        <div className="footer-brand">
          <Link className="footer-wordmark" to="/">
            TRIMAX <span className="wordmark-subtitle">AUTO</span>
          </Link>
          <p>{siteConfig.companyDescription}</p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2>Quick links</h2>
          <ul className="footer-links">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-column" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading">Contact</h2>
          <ul className="footer-details">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </section>

        <section className="footer-column" aria-labelledby="footer-social-heading">
          <h2 id="footer-social-heading">Social</h2>
          <div className="footer-socials">
            {siteConfig.socialLinks.map((item) =>
              item.url ? (
                <a className="footer-social-link" href={item.url} key={item.label}>
                  {item.label}
                </a>
              ) : (
                <span key={item.label}>{item.label} link to be added</span>
              ),
            )}
          </div>
        </section>
      </Container>

      <Container className="footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
        <p>Automotive spare parts</p>
      </Container>
    </footer>
  )
}

export default SiteFooter