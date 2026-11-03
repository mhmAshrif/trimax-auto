export const siteConfig = {
  companyName: 'Trimax Auto',
  companyDescription: 'Company description to be added.',
  whatsappPhoneNumber: import.meta.env.VITE_WHATSAPP_PHONE || '0000000000',
  contact: {
    email: 'Email address to be added',
    phone: 'Phone number to be added',
    address: 'Company address to be added',
    businessHours: 'Business hours to be confirmed',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Brands', href: '/brands' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ],
  socialLinks: [
    { label: 'LinkedIn', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
  ],
} as const