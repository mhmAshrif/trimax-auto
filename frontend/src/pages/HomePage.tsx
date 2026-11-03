import AboutSection from '../components/home/AboutSection'
import LeadershipSection from '../components/home/LeadershipSection'
import BrandStrip from '../components/home/BrandStrip'
import CompanyStats from '../components/home/CompanyStats'
import ContactCallout from '../components/home/ContactCallout'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeHero from '../components/home/HomeHero'
import WhyChooseUs from '../components/home/WhyChooseUs'

function HomePage() {
  return (
    <>
      <HomeHero />
      <CompanyStats />
      <BrandStrip />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutSection />
      <LeadershipSection />
      <ContactCallout />
    </>
  )
}

export default HomePage