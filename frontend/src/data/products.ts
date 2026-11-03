// Product data for demonstration only. Replace with real data for production.
import type { CatalogItem } from '../types/catalog'
import vehicleImage from '../assets/image1.jpg'

export type Product = CatalogItem & {
  brand: string
  partNumber?: string
  category: string
  imageUrl: string
  imageAlt: string
  isDemonstration: true
}

export const demoProducts: Product[] = [
  {
    id: 'demo-brake-pad-set',
    name: 'Brake Pad Set',
    brand: 'Piaggio',
    partNumber: 'DEMO-PBG-1001',
    category: 'Brake Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-oil-filter',
    name: 'Engine Oil Filter',
    brand: 'Bajaj',
    partNumber: 'DEMO-BJG-2002',
    category: 'Engine Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-chain-kit',
    name: 'Drive Chain Kit',
    brand: 'TVS',
    partNumber: 'DEMO-TVS-3003',
    category: 'Other Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-headlamp-assembly',
    name: 'Headlamp Assembly',
    brand: 'Mahindra',
    partNumber: 'DEMO-MHD-4004',
    category: 'Electrical Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-shock-absorber',
    name: 'Shock Absorber',
    brand: 'Piaggio',
    partNumber: 'DEMO-PBG-5005',
    category: 'Suspension Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-side-mirror',
    name: 'Side Mirror',
    brand: 'Bajaj',
    partNumber: 'DEMO-BJG-6006',
    category: 'Body Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-spark-plug',
    name: 'Spark Plug',
    brand: 'TVS',
    partNumber: 'DEMO-TVS-7007',
    category: 'Engine Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
  {
    id: 'demo-clutch-cable',
    name: 'Clutch Cable',
    brand: 'Mahindra',
    partNumber: 'DEMO-MHD-8008',
    category: 'Other Parts',
    description: 'Demonstration listing. Replace with a client-confirmed product description.',
    imageUrl: vehicleImage,
    imageAlt: 'Temporary automotive photo placeholder; not a verified image of this part.',
    isDemonstration: true,
  },
]
