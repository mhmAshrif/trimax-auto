import { useEffect, useRef } from 'react'
import AboutSection from '../components/home/AboutSection'
import LeadershipSection from '../components/home/LeadershipSection'
import BrandStrip from '../components/home/BrandStrip'
import CompanyStats from '../components/home/CompanyStats'
import ContactCallout from '../components/home/ContactCallout'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeHero from '../components/home/HomeHero'
import WhyChooseUs from '../components/home/WhyChooseUs'

function HomePage() {
  const homepageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = homepageRef.current
    if (!root || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const sections = root.querySelectorAll(':scope > section')
    sections.forEach((section) => section.classList.add('home-reveal'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="homepage" ref={homepageRef}>
      <HomeHero />
      <CompanyStats />
      <BrandStrip />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutSection />
      <LeadershipSection />
      <ContactCallout />
    </div>
  )
}

export default HomePage