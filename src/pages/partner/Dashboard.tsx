import { DashboardLayout } from '../../components/DashboardLayout'

const partnerNav = [{ to: '/partner/dashboard', label: 'Dashboard', icon: '◫' }]

const partners = [
  { name: 'OtomaX', latency: 312, error: '0.2%', status: 'green' },
  { name: 'Digiflazz', latency: 890, error: '1.1%', status: 'yellow' },
  { name: 'Tiger Engine', latency: 245, error: '0.1%', status: 'green' },
  { name: 'W38s', latency: 1620, error: '4.8%', status: 'red' },
]

const settlements = [
  ['SET-88421', 'CONFIRMED', 'Rp 12.400.000', '2m ago'],
  ['SET-88420', 'PENDING', 'Rp 850.000', '5m ago'],
  ['SET-88419', 'RECONCILED', 'Rp 3.200.000', '12m ago'],
]

export default function PartnerDashboard() {
  return (
    <DashboardLayout portal="partner" nav={partnerNav} userName="OtomaX Integration">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Partner dashboard</h1>
        <p className="text-sm text-bp-muted">Settlement feed · webhook health · audit trail</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Settlements today', value: '1,842', color: 'text-bp-accent' },
          { label: 'Success rate', value: '99.1%', color: 'text-bp-green' },
          { label: 'Volume (IDR)', value: 'Rp 428M', color: 'text-bp-text' },
          { label: 'Webhook retries', value: '7', color: 'text-bp-yellow' },
        ].map((s) => (
          <div key={s.label} className="bp-card p-4">
            <div className="text-xs uppercase tracking-wide text-bp-muted">{s.label}</div>
            <div className={`mt-2 text-2xl font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <div className="bp-card p-4 lg:col-span-3">
          <h2 className="font-semibold">Live settlement feed</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead className="text-xs uppercase text-bp-muted">
                <tr>
                  <th className="pb-2">Ref ID</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bp-border">
                {settlements.map(([ref, status, amount, time]) => (
                  <tr key={ref}>
                    <td className="py-2.5 font-mono">{ref}</td>
                    <td className="py-2.5">
                      <span
                        className={`bp-badge ${
                          status === 'CONFIRMED' || status === 'RECONCILED'
                            ? 'bg-bp-green/10 text-bp-green'
                            : 'bg-bp-yellow/10 text-bp-yellow'
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-2.5">{amount}</td>
                    <td className="py-2.5 text-bp-muted">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bp-card p-4 lg:col-span-2">
          <h2 className="font-semibold">Partner health</h2>
          <ul className="mt-4 space-y-3">
            {partners.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      p.status === 'green'
                        ? 'bg-bp-green shadow-[0_0_8px_rgba(0,255,135,0.5)]'
                        : p.status === 'yellow'
                          ? 'bg-bp-yellow'
                          : 'bg-bp-red'
                    }`}
                  />
                  {p.name}
                </div>
                <div className="font-mono text-xs text-bp-muted">
                  {p.latency}ms · {p.error}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bp-card mt-6 p-4">
        <h2 className="font-semibold">Monad audit trail</h2>
        <p className="mt-1 text-sm text-bp-muted">Latest on-chain settlement hashes</p>
        <div className="mt-3 space-y-2 font-mono text-xs">
          {['0x8f3a…c21d', '0x2b91…7e04', '0x44cd…aa88'].map((hash) => (
            <div key={hash} className="rounded-lg bg-bp-surface2 px-3 py-2 text-bp-accent">
              {hash} · confirmed
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
