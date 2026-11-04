export type HomepageStat = {
  id: string
  target: number
  suffix?: string
  useGrouping?: boolean
  label: string
}

export const homepageStats: HomepageStat[] = [
  { id: 'experience', target: 16, suffix: '+', label: 'Years Experience' },
  { id: 'parts', target: 2500, suffix: '+', useGrouping: true, label: 'Parts Available' },
  { id: 'team', target: 10, suffix: '+', label: 'Team Members' },
  { id: 'established', target: 2010, label: 'Established' },
]

export const homepageStatsDisclaimer = 'Client-provided placeholders. Confirm all figures before publishing.'