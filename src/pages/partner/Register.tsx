import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../components/AuthLayout'
import { CountryTaxField } from '../../components/CountryTaxField'
import type { CountryCode } from '../../lib/taxId'
import { detectCountryFromBrowser, validateTaxId } from '../../lib/taxId'

export default function PartnerRegister() {
  const navigate = useNavigate()
  const [country, setCountry] = useState<CountryCode>(() => detectCountryFromBrowser())
  const [taxId, setTaxId] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateTaxId(country, taxId)) return
    navigate('/partner/dashboard')
  }

  return (
    <AuthLayout
      title="Partner registration"
      subtitle="Integrate your platform with BranchlessPay settlement"
      footer={
        <>
          Already a partner?{' '}
          <Link to="/partner/login" className="text-bp-accent hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="bp-label" htmlFor="platformName">Platform name</label>
          <input id="platformName" className="bp-input" required placeholder="OtomaX / Digiflazz / Custom H2H" />
        </div>
        <div>
          <label className="bp-label" htmlFor="webhookUrl">Webhook URL</label>
          <input id="webhookUrl" type="url" className="bp-input" required placeholder="https://api.partner.com/bp/webhook" />
        </div>
        <CountryTaxField
          country={country}
          onCountryChange={setCountry}
          taxId={taxId}
          onTaxIdChange={setTaxId}
        />
        <div>
          <label className="bp-label" htmlFor="email">Technical contact email</label>
          <input id="email" type="email" className="bp-input" required placeholder="dev@partner.com" />
        </div>
        <div>
          <label className="bp-label" htmlFor="password">Password</label>
          <input id="password" type="password" className="bp-input" required minLength={8} />
        </div>
        <button type="submit" className="bp-btn-primary w-full" disabled={!validateTaxId(country, taxId)}>
          Register partner
        </button>
      </form>
    </AuthLayout>
  )
}
