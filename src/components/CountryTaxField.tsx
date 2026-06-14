import { useState } from 'react'
import type { CountryCode } from '../lib/taxId'
import { COUNTRIES, getCountryConfig, validateTaxId } from '../lib/taxId'

interface CountryTaxFieldProps {
  country: CountryCode
  onCountryChange: (code: CountryCode) => void
  taxId: string
  onTaxIdChange: (value: string) => void
}

export function CountryTaxField({
  country,
  onCountryChange,
  taxId,
  onTaxIdChange,
}: CountryTaxFieldProps) {
  const [touched, setTouched] = useState(false)
  const config = getCountryConfig(country)
  const valid = taxId.length === 0 || validateTaxId(country, taxId)

  return (
    <div className="space-y-4">
      <div>
        <label className="bp-label" htmlFor="country">
          Country / Region
        </label>
        <select
          id="country"
          className="bp-input"
          value={country}
          onChange={(e) => {
            onCountryChange(e.target.value as CountryCode)
            onTaxIdChange('')
            setTouched(false)
          }}
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name} ({c.code})
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-bp-accent">Auto-detected from browser locale — change if needed</p>
      </div>

      <div>
        <label className="bp-label" htmlFor="taxId">
          {config.taxIdLabel}
        </label>
        <input
          id="taxId"
          className={`bp-input font-mono ${touched && !valid ? 'border-bp-red focus:ring-bp-red/20' : ''}`}
          placeholder={config.taxIdPlaceholder}
          value={taxId}
          onChange={(e) => onTaxIdChange(config.format(e.target.value))}
          onBlur={() => setTouched(true)}
          autoComplete="off"
        />
        <p className="mt-1 text-xs text-bp-muted">{config.taxIdHint}</p>
        {touched && !valid && taxId.length > 0 && (
          <p className="mt-1 text-xs text-bp-red">Invalid {config.taxIdLabel} format for {config.name}</p>
        )}
      </div>
    </div>
  )
}
