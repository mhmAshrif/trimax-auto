import { Outlet } from 'react-router'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import WhatsAppButton from '../components/WhatsAppButton'

function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main className="site-content" id="home" aria-label="Main content">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}

export default SiteLayout