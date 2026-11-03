import type { PropsWithChildren } from 'react'

type PrimaryButtonProps = PropsWithChildren<{
  href: string
  className?: string
}>

function PrimaryButton({ children, href, className = '' }: PrimaryButtonProps) {
  return (
    <a className={`button button-primary ${className}`.trim()} href={href}>
      {children}
    </a>
  )
}

export default PrimaryButton