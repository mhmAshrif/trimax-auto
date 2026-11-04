
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutUsPage from './pages/AboutUsPage'
import BrandsPage from './pages/BrandsPage'
import ContactUsPage from './pages/ContactUsPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ServicesPage from './pages/ServicesPage'
import SiteLayout from './layouts/SiteLayout'
import './homepage.css'
import './about-page.css'
import './brands-page.css'
import './products-page.css'
import './product-details.css'
import './site-layout.css'
import './services-page.css'
import './contact-page.css'
import './futuristic-pages.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
