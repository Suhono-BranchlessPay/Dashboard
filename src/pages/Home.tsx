import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Logo subtitle="Dashboard Portal" />
      <p className="mt-4 max-w-md text-center text-sm text-bp-muted">
        BranchlessPay merchant and partner portals — on-chain audit trail, settlement monitoring, and compliance evidence.
      </p>
      <div className="mt-10 grid w-full max-w-lg gap-4 sm:grid-cols-2">
        <Link to="/merchant/login" className="bp-card group p-6 transition hover:border-bp-accent/40 hover:shadow-glow">
          <div className="text-lg font-bold">Merchant</div>
          <p className="mt-2 text-sm text-bp-muted">Anchors, evidence packs, verify URLs</p>
          <span className="mt-4 inline-block text-sm text-bp-accent group-hover:underline">Sign in →</span>
        </Link>
        <Link to="/partner/login" className="bp-card group p-6 transition hover:border-bp-accent2/40 hover:shadow-glow">
          <div className="text-lg font-bold">Partner</div>
          <p className="mt-2 text-sm text-bp-muted">Settlements, webhooks, partner health</p>
          <span className="mt-4 inline-block text-sm text-bp-accent group-hover:underline">Sign in →</span>
        </Link>
      </div>
    </div>
  )
}
