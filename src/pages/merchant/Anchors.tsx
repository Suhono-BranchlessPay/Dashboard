import { DashboardLayout } from '../../components/DashboardLayout'

const merchantNav = [
  { to: '/merchant/dashboard', label: 'Dashboard', icon: '◫' },
  { to: '/merchant/anchors', label: 'Anchors', icon: '⛓' },
  { to: '/merchant/evidence', label: 'Evidence', icon: '📋' },
]

const anchors = [
  {
    id: '06f7796b-dcbd-400c-ab01-e55c95cdb9a2',
    ref: 'PAY-8CA91D53',
    event: 'sunmi_payment',
    amount: 'Rp 100.000',
    status: 'Anchored',
    time: '2026-06-14 12:27',
  },
  {
    id: 'd056648d-083b-453a-b02a-ee1e55a282bd',
    ref: 'INV-2026-0042',
    event: 'invoice',
    amount: 'Rp 2.650.000',
    status: 'Anchored',
    time: '2026-06-14 11:05',
  },
  {
    id: '72b7ad9a-083b-453a-b02a-ee1e55a282bd',
    ref: 'TEST-AB12CD34',
    event: 'sunmi_transaction',
    amount: 'Rp 10.000',
    status: 'Queued',
    time: '2026-06-14 10:42',
  },
]

export default function MerchantAnchors() {
  return (
    <DashboardLayout portal="merchant" nav={merchantNav} userName="BranchlessPay Inc">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Anchors</h1>
          <p className="text-sm text-bp-muted">Immutable records on BranchlessPay / Monad</p>
        </div>
        <button type="button" className="bp-btn-primary shrink-0">
          + Anchor document
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {['All', 'Anchored', 'Pending', 'Failed'].map((f, i) => (
          <button
            key={f}
            type="button"
            className={`rounded-lg px-3 py-1.5 text-sm ${
              i === 0 ? 'bg-bp-accent/15 text-bp-accent' : 'border border-bp-border text-bp-muted hover:text-bp-text'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {anchors.map((a) => (
          <article key={a.id} className="bp-card p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono font-semibold">{a.ref}</span>
                <span className="bp-badge bg-bp-surface2 text-bp-muted">{a.event}</span>
                <span
                  className={`bp-badge ${
                    a.status === 'Anchored'
                      ? 'bg-bp-green/10 text-bp-green'
                      : 'bg-bp-yellow/10 text-bp-yellow'
                  }`}
                >
                  {a.status}
                </span>
              </div>
              <div className="mt-1 text-sm text-bp-muted">{a.amount} · {a.time}</div>
              <div className="mt-1 truncate font-mono text-xs text-bp-accent">{a.id}</div>
            </div>
            <div className="mt-3 flex gap-2 sm:mt-0">
              <a
                href={`https://branchlesspay.com/verify/${a.id}`}
                target="_blank"
                rel="noreferrer"
                className="bp-btn-ghost text-xs"
              >
                Verify
              </a>
              <button type="button" className="bp-btn-primary text-xs">
                Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </DashboardLayout>
  )
}
