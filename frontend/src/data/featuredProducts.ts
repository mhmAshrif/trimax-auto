import type { CatalogItem } from '../types/catalog'
import vehicleImage from '../assets/image1.jpg'

export type FeaturedProduct = CatalogItem & {
  brand: string
  imageAlt: string
  isDemonstration: true
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'demo-brake-pad-set',
    name: 'Brake pad set',
    category: 'Braking',
    brand: 'Demonstration listing',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive image used for a demonstration product listing.',
    isDemonstration: true,
  },
  {
    id: 'demo-oil-filter',
    name: 'Engine oil filter',
    category: 'Engine',
    brand: 'Demonstration listing',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive image used for a demonstration product listing.',
    isDemonstration: true,
  },
  {
    id: 'demo-chain-kit',
    name: 'Drive chain kit',
    category: 'Drivetrain',
    brand: 'Demonstration listing',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive image used for a demonstration product listing.',
    isDemonstration: true,
  },
  {
    id: 'demo-headlamp-assembly',
    name: 'Headlamp assembly',
    category: 'Lighting',
    brand: 'Demonstration listing',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive image used for a demonstration product listing.',
    isDemonstration: true,
  },
]