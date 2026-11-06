export type DirectorProfile = {
  id: string
  name: string
  position: string
  heading: string
  description: string
  imageAlt: string
  imagePlaceholderLabel: string
  imageUrl?: string
}

export const leadershipProfiles: DirectorProfile[] = [
  {
    id: 'mohamed-rimas',
    name: 'Mohamed Rimas',
    position: 'Founder / Director',
    heading: 'A Vision Built on Quality',
    description: 'Add a client-approved introduction for Mohamed Rimas here. Confirm all personal details and wording before publishing.',
    imageAlt: 'Director portrait to be supplied for Mohamed Rimas.',
    imagePlaceholderLabel: 'Portrait for Mohamed Rimas to be supplied',
  },
  {
    id: 'mohamed-rishan',
    name: 'Mohamed Rishan',
    position: 'Founder / Director',
    heading: 'Leadership profile to be confirmed',
    description: 'Add a verified profile description after the director’s details and preferred wording are confirmed.',
    imageAlt: 'Director portrait placeholder; image to be supplied after confirmation.',
    imagePlaceholderLabel: 'Portrait to be supplied after confirmation',
  },
]