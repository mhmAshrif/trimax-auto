type SectionHeadingProps = {
  title: string
  titleId?: string
  level?: 1 | 2
  eyebrow?: string
  description?: string
}

function SectionHeading({ title, titleId, level = 2, eyebrow, description }: SectionHeadingProps) {
  const Heading = level === 1 ? 'h1' : 'h2'

  return (
    <header className="section-heading">
      {eyebrow && <p className="section-heading-eyebrow">{eyebrow}</p>}
      <Heading className="section-heading-title" id={titleId}>{title}</Heading>
      {description && <p className="section-heading-description">{description}</p>}
    </header>
  )
}

export default SectionHeading