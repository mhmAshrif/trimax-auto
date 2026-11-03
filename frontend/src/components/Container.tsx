import type { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container ${className}`.trim()}>{children}</div>
}

export default Container