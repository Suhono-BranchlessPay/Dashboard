import { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../components/AuthLayout'

export default function PartnerLogin() {
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/partner/dashboard')
  }

  return (
    <AuthLayout
      title="Partner sign in"
      subtitle="Monitor settlements, webhooks, and partner health"
      footer={
        <>
          New partner?{' '}
          <Link to="/partner/register" className="text-bp-accent hover:underline">
            Register
          </Link>
          {' · '}
          <Link to="/merchant/login" className="text-bp-accent hover:underline">
            Merchant portal
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="bp-label" htmlFor="partnerId">Partner ID</label>
          <input id="partnerId" className="bp-input" required placeholder="partner_otomax_001" />
        </div>
        <div>
          <label className="bp-label" htmlFor="apiKey">API key</label>
          <input id="apiKey" type="password" className="bp-input" required placeholder="bp_partner_..." />
        </div>
        <button type="submit" className="bp-btn-primary w-full">
          Sign in
        </button>
      </form>
    </AuthLayout>
  )
}
