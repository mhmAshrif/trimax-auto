export type HomepageStat = {
  id: string
  value: string
  label: string
}

export const homepageStats: HomepageStat[] = [
  { id: 'experience', value: '16+', label: 'Years Experience' },
  { id: 'parts', value: '2,500+', label: 'Parts Available' },
  { id: 'team', value: '10+', label: 'Team Members' },
  { id: 'established', value: '2010', label: 'Established' },
]

export const homepageStatsDisclaimer = 'Client-provided placeholders. Confirm all figures before publishing.'