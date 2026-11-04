type SocialLinkItem = {
  label: string
  url: string
}

type SocialLinksProps = {
  items: readonly SocialLinkItem[]
  className?: string
  linkClassName?: string
  placeholderClassName?: string
}

function SocialIcon({ label }: { label: string }) {
  if (label === 'LinkedIn') {
    return (
      <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.05 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM3.55 8.4h3V20h-3V8.4Zm4.9 0h2.88v1.58h.04c.4-.76 1.38-1.96 3.18-1.96 3.4 0 4.03 2.23 4.03 5.13V20h-3v-6.07c0-1.45-.03-3.31-2.02-3.31-2.03 0-2.34 1.58-2.34 3.2V20h-3V8.4Z" />
      </svg>
    )
  }

  if (label === 'Instagram') {
    return (
      <svg className="social-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-link-icon-dot" cx="17.6" cy="6.7" r="1" />
      </svg>
    )
  }

  if (label === 'Facebook') {
    return (
      <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6H17V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.4Z" />
      </svg>
    )
  }

  return (
    <svg className="social-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9s1-6.6 3.2-9Z" />
    </svg>
  )
}

function SocialLinks({ items, className = '', linkClassName = '', placeholderClassName = '' }: SocialLinksProps) {
  return (
    <div className={className}>
      {items.map((item) => item.url ? (
        <a
          className={`social-link-content ${linkClassName}`.trim()}
          href={item.url}
          key={item.label}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
        >
          <SocialIcon label={item.label} />
          <span>{item.label}</span>
        </a>
      ) : (
        <span
          className={`social-link-content social-link-placeholder ${placeholderClassName}`.trim()}
          key={item.label}
          aria-label={`${item.label} link to be added`}
        >
          <SocialIcon label={item.label} />
          <span>{item.label} link to be added</span>
        </span>
      ))}
    </div>
  )
}

export default SocialLinks
