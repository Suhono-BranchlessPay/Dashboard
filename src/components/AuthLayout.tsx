import type { ReactNode } from 'react'
import { Logo } from './Logo'

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
  footer?: ReactNode
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <div className="mb-8">
        <Logo subtitle="Dashboard Portal" />
      </div>
      <div className="bp-card w-full max-w-md p-6 sm:p-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-1 text-sm text-bp-muted">{subtitle}</p>
        <div className="mt-6">{children}</div>
        {footer && <div className="mt-6 border-t border-bp-border pt-4 text-center text-sm text-bp-muted">{footer}</div>}
      </div>
    </div>
  )
}
