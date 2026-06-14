import { Link } from 'react-router-dom'
import { DashboardLayout } from '../../components/DashboardLayout'

const merchantNav = [
  { to: '/merchant/dashboard', label: 'Dashboard', icon: '◫' },
  { to: '/merchant/anchors', label: 'Anchors', icon: '⛓' },
  { to: '/merchant/evidence', label: 'Evidence', icon: '📋' },
]

const stats = [
  { label: 'Records anchored', value: '1,312', icon: '🔐', color: 'text-bp-accent' },
  { label: 'Protected', value: '$45,536', icon: '💰', color: 'text-bp-green' },
  { label: 'Integrity score', value: '95.4', icon: '🛡️', color: 'text-bp-primary' },
  { label: 'Hours saved', value: '688 hrs', icon: '⏱️', color: 'text-bp-text' },
]

export default function MerchantDashboard() {
  return (
    <DashboardLayout portal="merchant" nav={merchantNav} userName="BranchlessPay Inc">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Merchant dashboard</h1>
        <p className="text-sm text-bp-muted">On-chain audit trail overview</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bp-card p-4">
            <div className="text-lg">{s.icon}</div>
            <div className="text-xs uppercase tracking-wide text-bp-muted">{s.label}</div>
            <div className={`mt-2 font-display text-2xl font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="bp-card mt-6 p-4">
        <h2 className="font-display font-semibold">Your connected platforms</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Odoo', 'QuickBooks', 'Square POS'].map((erp) => (
            <span key={erp} className="bp-badge border border-bp-border bg-bp-surface2 text-bp-text">
              {erp}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="bp-card p-4 lg:col-span-2">
          <h2 className="font-semibold">Recent anchors</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="text-xs uppercase text-bp-muted">
                <tr>
                  <th className="pb-2">Reference</th>
                  <th className="pb-2">Type</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bp-border">
                {[
                  ['INV-2026-0042', 'invoice', 'Anchored', '06f7796b…'],
                  ['PAY-8CA91D53', 'payment', 'Anchored', 'd056648d…'],
                  ['PO-9912', 'purchase', 'Pending', '—'],
                ].map(([ref, type, status, hash]) => (
                  <tr key={ref}>
                    <td className="py-2.5 font-mono">{ref}</td>
                    <td className="py-2.5 text-bp-muted">{type}</td>
                    <td className="py-2.5">
                      <span
                        className={`bp-badge ${
                          status === 'Anchored'
                            ? 'bg-bp-green/10 text-bp-green'
                            : 'bg-bp-yellow/10 text-bp-yellow'
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-2.5 font-mono text-xs text-bp-accent">{hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/merchant/anchors" className="mt-4 inline-block text-sm text-bp-accent hover:underline">
            View all anchors →
          </Link>
        </div>

        <div className="bp-card p-4">
          <h2 className="font-semibold">Quick actions</h2>
          <div className="mt-4 space-y-2">
            <Link to="/merchant/anchors" className="bp-btn-ghost w-full justify-start">
              ⛓ New anchor
            </Link>
            <Link to="/merchant/evidence" className="bp-btn-ghost w-full justify-start">
              📋 Export evidence
            </Link>
            <a
              href="https://branchlesspay.com/verify"
              target="_blank"
              rel="noreferrer"
              className="bp-btn-ghost w-full justify-start"
            >
              ✓ Public verify
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
