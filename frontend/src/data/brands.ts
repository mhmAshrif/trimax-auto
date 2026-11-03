export type FeaturedBrand = {
  id: string
  name: string
  featured?: boolean
  description: string
}

export const brands: FeaturedBrand[] = [
  {
    id: 'piaggio',
    name: 'Piaggio',
    featured: true,
    description: 'Browse demonstration catalogue entries labeled Piaggio.',
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    description: 'Browse demonstration catalogue entries labeled Bajaj.',
  },
  {
    id: 'tvs',
    name: 'TVS',
    description: 'Browse demonstration catalogue entries labeled TVS.',
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    description: 'Browse demonstration catalogue entries labeled Mahindra.',
  },
]

export const featuredBrands = brands.map((brand) =>
  brand.id === 'bajaj' ? { ...brand, name: 'BAJAJ' } : brand,
)