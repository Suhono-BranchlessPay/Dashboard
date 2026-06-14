import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../components/AuthLayout'
import { CountryTaxField } from '../../components/CountryTaxField'
import type { CountryCode } from '../../lib/taxId'
import { detectCountryFromBrowser, validateTaxId } from '../../lib/taxId'

export default function MerchantRegister() {
  const navigate = useNavigate()
  const [country, setCountry] = useState<CountryCode>(() => detectCountryFromBrowser())
  const [taxId, setTaxId] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateTaxId(country, taxId)) return
    navigate('/merchant/dashboard')
  }

  return (
    <AuthLayout
      title="Merchant registration"
      subtitle="Create your BranchlessPay merchant account"
      footer={
        <>
          Already registered?{' '}
          <Link to="/merchant/login" className="text-bp-accent hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="bp-label" htmlFor="businessName">Business name</label>
          <input id="businessName" className="bp-input" required placeholder="PT BranchlessPay Indonesia" />
        </div>
        <div>
          <label className="bp-label" htmlFor="email">Work email</label>
          <input id="email" type="email" className="bp-input" required placeholder="ops@company.com" />
        </div>
        <CountryTaxField
          country={country}
          onCountryChange={setCountry}
          taxId={taxId}
          onTaxIdChange={setTaxId}
        />
        <div>
          <label className="bp-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="bp-input" required minLength={8} />
        </div>
        <button type="submit" className="bp-btn-primary w-full" disabled={!validateTaxId(country, taxId)}>
          Create merchant account
        </button>
      </form>
    </AuthLayout>
  )
}
