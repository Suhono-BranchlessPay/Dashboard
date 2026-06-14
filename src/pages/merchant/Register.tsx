import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../components/AuthLayout'
import { CountryTaxField } from '../../components/CountryTaxField'
import { detectCountryFromBrowser, validateTaxId } from '../../lib/taxId'
import type { CountryCode } from '../../lib/taxId'

const ERP_PLATFORMS = [
  'QuickBooks',
  'Xero',
  'Zoho',
  'FreshBooks',
  'Wave',
  'Tally',
  'Odoo',
  'ERPNext',
  'Square POS',
  'Other',
]

export default function MerchantRegister() {
  const navigate = useNavigate()
  const [country, setCountry] = useState<CountryCode>(() => detectCountryFromBrowser())
  const [taxId, setTaxId] = useState('')
  const [referralValid, setReferralValid] = useState<boolean | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateTaxId(country, taxId)) return
    navigate('/merchant/dashboard')
  }

  return (
    <AuthLayout
      title="Create account"
      subtitle="Merchant dashboard — anchor every transaction on-chain"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/merchant/login" className="text-bp-accent hover:underline">
            Login
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="bp-label" htmlFor="fullName">Full name</label>
          <input id="fullName" className="bp-input" required placeholder="Verry Santoso" />
        </div>
        <div>
          <label className="bp-label" htmlFor="businessName">Company name</label>
          <input id="businessName" className="bp-input" required placeholder="PT BranchlessPay Indonesia" />
        </div>
        <div>
          <label className="bp-label" htmlFor="email">Email</label>
          <input id="email" type="email" className="bp-input" required placeholder="ops@company.com" />
        </div>
        <div>
          <label className="bp-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="bp-input" required minLength={8} />
        </div>
        <div>
          <label className="bp-label" htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" type="password" className="bp-input" required minLength={8} />
        </div>
        <div>
          <label className="bp-label" htmlFor="erp">ERP platform</label>
          <select id="erp" className="bp-input" required defaultValue="Odoo">
            {ERP_PLATFORMS.map((erp) => (
              <option key={erp} value={erp}>{erp}</option>
            ))}
          </select>
        </div>
        <CountryTaxField
          country={country}
          onCountryChange={setCountry}
          taxId={taxId}
          onTaxIdChange={setTaxId}
        />
        <div>
          <label className="bp-label" htmlFor="referral">Referral code (optional)</label>
          <div className="relative">
            <input
              id="referral"
              className="bp-input pr-10"
              placeholder="BP-REF-XXXX"
              onChange={(e) => {
                const v = e.target.value.trim()
                setReferralValid(v.length === 0 ? null : v.startsWith('BP-'))
              }}
            />
            {referralValid === true && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-bp-green">✓</span>
            )}
          </div>
        </div>
        <button type="submit" className="bp-btn-primary w-full" disabled={!validateTaxId(country, taxId)}>
          Create account
        </button>
      </form>
    </AuthLayout>
  )
}
