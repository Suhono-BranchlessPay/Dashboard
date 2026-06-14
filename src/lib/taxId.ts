export type CountryCode =
  | 'ID'
  | 'PH'
  | 'VN'
  | 'MX'
  | 'BR'
  | 'IN'
  | 'PK'
  | 'BD'
  | 'MA'
  | 'US'
  | 'SG'

export interface CountryTaxConfig {
  code: CountryCode
  name: string
  flag: string
  taxIdLabel: string
  taxIdPlaceholder: string
  taxIdHint: string
  pattern: RegExp
  format: (value: string) => string
}

const digitsOnly = (v: string) => v.replace(/\D/g, '')

const formatNpwp = (v: string) => {
  const d = digitsOnly(v).slice(0, 15)
  if (d.length <= 2) return d
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`
  if (d.length <= 9) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}.${d.slice(8)}`
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}.${d.slice(8, 9)}-${d.slice(9)}`
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}.${d.slice(8, 9)}-${d.slice(9, 12)}.${d.slice(12)}`
}

export const COUNTRIES: CountryTaxConfig[] = [
  {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    taxIdLabel: 'NPWP',
    taxIdPlaceholder: '12.345.678.9-012.345',
    taxIdHint: '15-digit Nomor Pokok Wajib Pajak',
    pattern: /^\d{2}\.\d{3}\.\d{3}\.\d-\d{3}\.\d{3}$/,
    format: formatNpwp,
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    taxIdLabel: 'TIN',
    taxIdPlaceholder: '123-456-789-000',
    taxIdHint: '12-digit Tax Identification Number',
    pattern: /^\d{3}-\d{3}-\d{3}-\d{3}$/,
    format: (v) => {
      const d = digitsOnly(v).slice(0, 12)
      if (d.length <= 3) return d
      if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`
      if (d.length <= 9) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`
      return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6, 9)}-${d.slice(9)}`
    },
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    taxIdLabel: 'MST',
    taxIdPlaceholder: '0123456789',
    taxIdHint: '10 or 13-digit Mã số thuế',
    pattern: /^\d{10}(\d{3})?$/,
    format: (v) => digitsOnly(v).slice(0, 13),
  },
  {
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    taxIdLabel: 'RFC',
    taxIdPlaceholder: 'XAXX010101000',
    taxIdHint: '12–13 character Registro Federal de Contribuyentes',
    pattern: /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/,
    format: (v) => v.replace(/[^A-Za-z0-9&]/g, '').toUpperCase().slice(0, 13),
  },
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    taxIdLabel: 'CNPJ',
    taxIdPlaceholder: '12.345.678/0001-90',
    taxIdHint: '14-digit Cadastro Nacional da Pessoa Jurídica',
    pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    format: (v) => {
      const d = digitsOnly(v).slice(0, 14)
      if (d.length <= 2) return d
      if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`
      if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`
      if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`
      return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`
    },
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    taxIdLabel: 'GSTIN',
    taxIdPlaceholder: '22AAAAA0000A1Z5',
    taxIdHint: '15-character GST Identification Number',
    pattern: /^\d{2}[A-Z]{5}\d{4}[A-Z]\d[A-Z\d]$/,
    format: (v) => v.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 15),
  },
  {
    code: 'PK',
    name: 'Pakistan',
    flag: '🇵🇰',
    taxIdLabel: 'NTN',
    taxIdPlaceholder: '1234567-8',
    taxIdHint: '7-digit National Tax Number + check digit',
    pattern: /^\d{7}-\d$/,
    format: (v) => {
      const d = digitsOnly(v).slice(0, 8)
      if (d.length <= 7) return d
      return `${d.slice(0, 7)}-${d.slice(7)}`
    },
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    flag: '🇧🇩',
    taxIdLabel: 'TIN',
    taxIdPlaceholder: '123456789',
    taxIdHint: '9 or 12-digit Tax Identification Number',
    pattern: /^\d{9}(\d{3})?$/,
    format: (v) => digitsOnly(v).slice(0, 12),
  },
  {
    code: 'MA',
    name: 'Morocco',
    flag: '🇲🇦',
    taxIdLabel: 'ICE',
    taxIdPlaceholder: '123456789012345',
    taxIdHint: '15-digit Identifiant Commun de l\'Entreprise',
    pattern: /^\d{15}$/,
    format: (v) => digitsOnly(v).slice(0, 15),
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    taxIdLabel: 'EIN',
    taxIdPlaceholder: '12-3456789',
    taxIdHint: '9-digit Employer Identification Number',
    pattern: /^\d{2}-\d{7}$/,
    format: (v) => {
      const d = digitsOnly(v).slice(0, 9)
      if (d.length <= 2) return d
      return `${d.slice(0, 2)}-${d.slice(2)}`
    },
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    taxIdLabel: 'UEN',
    taxIdPlaceholder: '201234567A',
    taxIdHint: 'Unique Entity Number (9–10 chars)',
    pattern: /^[0-9]{8}[A-Z]$|^[STFG]\d{2}[A-Z0-9]{5,6}$/,
    format: (v) => v.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 10),
  },
]

export function detectCountryFromBrowser(): CountryCode {
  const lang = navigator.language?.toUpperCase() ?? 'EN-US'
  const region = lang.split('-')[1] as CountryCode | undefined
  if (region && COUNTRIES.some((c) => c.code === region)) return region
  return 'ID'
}

export function getCountryConfig(code: CountryCode): CountryTaxConfig {
  return COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0]
}

export function validateTaxId(code: CountryCode, value: string): boolean {
  const config = getCountryConfig(code)
  return config.pattern.test(value.trim())
}
