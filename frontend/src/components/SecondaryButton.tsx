import type { PropsWithChildren } from 'react'

type SecondaryButtonProps = PropsWithChildren<{
  href: string
  className?: string
}>

function SecondaryButton({ children, href, className = '' }: SecondaryButtonProps) {
  return (
    <a className={`button button-secondary ${className}`.trim()} href={href}>
      {children}
    </a>
  )
}

export default SecondaryButton