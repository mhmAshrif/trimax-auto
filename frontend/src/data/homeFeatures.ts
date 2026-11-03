export type HomeFeature = {
  id: string
  title: string
  description: string
  icon: 'range' | 'support' | 'quality' | 'enquiry'
}

export const homeFeatures: HomeFeature[] = [
  {
    id: 'product-range',
    title: 'Product Range',
    description: 'Add confirmed product categories and availability details here.',
    icon: 'range',
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Share the support channels and information confirmed by your team.',
    icon: 'support',
  },
  {
    id: 'quality-focus',
    title: 'Quality Focus',
    description: 'Publish verified product and sourcing information when available.',
    icon: 'quality',
  },
  {
    id: 'easy-enquiries',
    title: 'Easy Enquiries',
    description: 'Contact Trimax Auto to discuss a part or request more information.',
    icon: 'enquiry',
  },
]