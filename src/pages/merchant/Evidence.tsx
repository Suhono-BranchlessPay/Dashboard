import { DashboardLayout } from '../../components/DashboardLayout'

const merchantNav = [
  { to: '/merchant/dashboard', label: 'Dashboard', icon: '◫' },
  { to: '/merchant/anchors', label: 'Anchors', icon: '⛓' },
  { to: '/merchant/evidence', label: 'Evidence', icon: '📋' },
]

const evidencePacks = [
  {
    name: 'Q2 2026 Tax Audit Pack',
    period: 'Apr – Jun 2026',
    anchors: 842,
    status: 'Ready',
    format: 'PDF + CSV',
  },
  {
    name: 'Sunmi POS Settlement Evidence',
    period: 'Jun 2026',
    anchors: 128,
    status: 'Ready',
    format: 'ZIP',
  },
  {
    name: 'Odoo Invoice Trail',
    period: 'May 2026',
    anchors: 315,
    status: 'Generating',
    format: 'PDF',
  },
]

export default function MerchantEvidence() {
  return (
    <DashboardLayout portal="merchant" nav={merchantNav} userName="BranchlessPay Inc">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Evidence</h1>
          <p className="text-sm text-bp-muted">Compliance exports with on-chain verification hashes</p>
        </div>
        <button type="button" className="bp-btn-primary shrink-0">
          Generate pack
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {evidencePacks.map((pack) => (
          <article key={pack.name} className="bp-card flex flex-col p-5">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold leading-snug">{pack.name}</h2>
              <span
                className={`bp-badge shrink-0 ${
                  pack.status === 'Ready'
                    ? 'bg-bp-green/10 text-bp-green'
                    : 'bg-bp-yellow/10 text-bp-yellow'
                }`}
              >
                {pack.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-bp-muted">{pack.period}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-bp-muted">Anchors included</dt>
                <dd className="font-mono">{pack.anchors}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-bp-muted">Format</dt>
                <dd>{pack.format}</dd>
              </div>
            </dl>
            <div className="mt-auto flex gap-2 pt-5">
              <button
                type="button"
                className="bp-btn-primary flex-1 text-xs"
                disabled={pack.status !== 'Ready'}
              >
                Download
              </button>
              <button type="button" className="bp-btn-ghost text-xs">
                Share
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="bp-card mt-6 p-4">
        <h2 className="font-semibold">Verification manifest</h2>
        <p className="mt-1 text-sm text-bp-muted">
          Each evidence pack includes SHA-256 content hashes and BranchlessPay anchor IDs for independent verification.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-bp-surface2 p-3 font-mono text-xs text-bp-green">
{`{
  "pack_id": "evidence-q2-2026",
  "merchant_tax_id": "12.345.678.9-012.345",
  "anchor_count": 842,
  "verify_base": "https://branchlesspay.com/verify"
}`}
        </pre>
      </div>
    </DashboardLayout>
  )
}
