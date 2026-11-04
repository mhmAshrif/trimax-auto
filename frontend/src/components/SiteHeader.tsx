import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { siteConfig } from '../config/site'
import logo from '../assets/logo-transparent.png'
import Container from './Container'

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const currentPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')

  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link
          className="wordmark"
          to="/"
          aria-label="Trimax Auto home"
        >
          <img className="wordmark-logo" src={logo} alt="Trimax Auto Parts" />
        </Link>

        <nav
          className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div className="navigation-links">
            {siteConfig.navigation.map((item) => (
              <Link
                className={`navigation-link${item.href === currentPath ? ' is-current' : ''}${item.href === '/contact' ? ' contact-link button button-primary' : ''}`}
                to={item.href}
                key={item.href}
                aria-current={
                  item.href === currentPath ||
                  (item.href.startsWith('/#') && currentPath === '/' && location.hash === item.href.slice(1))
                    ? 'page'
                    : undefined
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          className={`button button-secondary icon-button menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </Container>
    </header>
  )
}

export default SiteHeader
