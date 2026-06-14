import { Link } from 'react-router-dom'

interface LogoProps {
  subtitle?: string
}

export function Logo({ subtitle }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-bp-accent to-bp-accent2 text-lg font-bold text-bp-bg shadow-glow">
        BP
      </div>
      <div>
        <div className="text-base font-bold tracking-tight">BranchlessPay</div>
        {subtitle && (
          <div className="font-mono text-[10px] uppercase tracking-widest text-bp-muted">
            {subtitle}
          </div>
        )}
      </div>
    </Link>
  )
}
