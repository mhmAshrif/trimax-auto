import { siteConfig } from '../config/site'
import { Link } from 'react-router'
import logo from '../assets/logo-transparent.png'
import Container from './Container'
import SocialLinks from './SocialLinks'

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <Container className="footer-main">
        <div className="footer-brand">
          <Link className="footer-wordmark" to="/">
            <img className="footer-logo" src={logo} alt="Trimax Auto Parts" />
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
          <SocialLinks
            className="footer-socials"
            linkClassName="footer-social-link"
            placeholderClassName="footer-social-placeholder"
            items={siteConfig.socialLinks}
          />
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