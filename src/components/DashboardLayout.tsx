import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

export interface NavItem {
  to: string
  label: string
  icon: string
}

interface DashboardLayoutProps {
  portal: 'merchant' | 'partner'
  nav: NavItem[]
  userName: string
  children: ReactNode
}

export function DashboardLayout({ portal, nav, userName, children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen lg:flex">
      <aside className="border-b border-bp-border bg-bp-surface lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between p-4 lg:block">
          <Logo subtitle={portal === 'merchant' ? 'Merchant' : 'Partner'} />
        </div>
        <nav className="flex gap-1 overflow-x-auto px-2 pb-2 lg:flex-col lg:px-3 lg:py-4">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-bp-accent/10 text-bp-accent'
                    : 'text-bp-muted hover:bg-bp-surface2 hover:text-bp-text'
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto hidden border-t border-bp-border p-4 lg:block">
          <div className="text-xs text-bp-muted">Signed in as</div>
          <div className="truncate text-sm font-medium">{userName}</div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-bp-border bg-bp-bg/80 px-4 py-3 backdrop-blur-md sm:px-6">
          <div className="font-mono text-xs text-bp-muted lg:hidden">{userName}</div>
          <div className="ml-auto flex items-center gap-2">
            <span className="bp-badge bg-bp-green/10 text-bp-green">● Live</span>
            <span className="hidden font-mono text-xs text-bp-muted sm:inline">branchlesspay.com</span>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
