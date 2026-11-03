export type ServicePlaceholder = {
  id: string
  title: string
  description: string
  icon: 'document' | 'conversation' | 'parts' | 'details'
  isPlaceholder: true
}

export const services: ServicePlaceholder[] = [
  {
    id: 'service-area-one',
    title: 'Service area to be confirmed',
    description: 'Add a brief, client-approved description of this service before publishing.',
    icon: 'document',
    isPlaceholder: true,
  },
  {
    id: 'service-area-two',
    title: 'Service area to be confirmed',
    description: 'Replace this placeholder with details confirmed by Trimax Auto.',
    icon: 'conversation',
    isPlaceholder: true,
  },
  {
    id: 'service-area-three',
    title: 'Service area to be confirmed',
    description: 'Describe this service here once the business information is verified.',
    icon: 'parts',
    isPlaceholder: true,
  },
  {
    id: 'service-area-four',
    title: 'Service area to be confirmed',
    description: 'Add only services offered and confirmed by the Trimax Auto team.',
    icon: 'details',
    isPlaceholder: true,
  },
]