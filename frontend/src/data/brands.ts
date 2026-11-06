import bajajLogo from '../assets/bajaj.png'
import mahindraLogo from '../assets/mahindra.png'
import piaggioLogo from '../assets/piaggio1.png'
import tvsLogo from '../assets/tvs.png'

export type FeaturedBrand = {
  id: string
  name: string
  featured?: boolean
  description: string
  logoUrl: string
}

export const brands: FeaturedBrand[] = [
  {
    id: 'piaggio',
    name: 'Piaggio',
    featured: true,
    description: 'Browse demonstration catalogue entries labeled Piaggio.',
    logoUrl: piaggioLogo,
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    description: 'Browse demonstration catalogue entries labeled Bajaj.',
    logoUrl: bajajLogo,
  },
  {
    id: 'tvs',
    name: 'TVS',
    description: 'Browse demonstration catalogue entries labeled TVS.',
    logoUrl: tvsLogo,
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    description: 'Browse demonstration catalogue entries labeled Mahindra.',
    logoUrl: mahindraLogo,
  },
]

export const featuredBrands = brands.map((brand) =>
  brand.id === 'bajaj' ? { ...brand, name: 'BAJAJ' } : brand,
)