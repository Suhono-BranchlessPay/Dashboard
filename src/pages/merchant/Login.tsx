import { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../components/AuthLayout'

export default function MerchantLogin() {
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/merchant/dashboard')
  }

  return (
    <AuthLayout
      title="Merchant sign in"
      subtitle="Access anchors, evidence, and compliance tools"
      footer={
        <>
          New merchant?{' '}
          <Link to="/merchant/register" className="text-bp-accent hover:underline">
            Register
          </Link>
          {' · '}
          <Link to="/partner/login" className="text-bp-accent hover:underline">
            Partner portal
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="bp-label" htmlFor="email">Email</label>
          <input id="email" type="email" className="bp-input" required placeholder="ops@company.com" />
        </div>
        <div>
          <label className="bp-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="bp-input" required />
        </div>
        <button type="submit" className="bp-btn-primary w-full">
          Sign in
        </button>
      </form>
    </AuthLayout>
  )
}
