# BranchlessPay Dashboard — Frontend UI

React portal for **Merchant** and **Partner** users. Dark theme BranchlessPay design system, mobile responsive.

| Item | Value |
|------|-------|
| Stack | React 18 · TypeScript · Vite · Tailwind CSS · React Router |
| GitHub | https://github.com/Suhono-BranchlessPay/Dashboard |
| Branch | **`dev` only** |

---

## Pages (8)

| Portal | Route | Page |
|--------|-------|------|
| Merchant | `/merchant/register` | Register (+ Tax ID auto-detect) |
| Merchant | `/merchant/login` | Login |
| Merchant | `/merchant/dashboard` | Dashboard |
| Merchant | `/merchant/anchors` | Anchors |
| Merchant | `/merchant/evidence` | Evidence |
| Partner | `/partner/register` | Register (+ Tax ID auto-detect) |
| Partner | `/partner/login` | Login |
| Partner | `/partner/dashboard` | Dashboard |

Landing hub: `/` (portal picker — not counted in the 8 pages)

---

## Tax ID auto-detect

Register forms detect country from browser locale and switch tax field label/format:

| Country | Tax ID |
|---------|--------|
| 🇮🇩 ID | NPWP |
| 🇵🇭 PH | TIN |
| 🇻🇳 VN | MST |
| 🇲🇽 MX | RFC |
| 🇧🇷 BR | CNPJ |
| 🇮🇳 IN | GSTIN |
| + SG, US, PK, BD, MA |

Logic: `src/lib/taxId.ts`

---

## Quick start

```powershell
cd Dashboard
npm install
npm run dev
```

Open http://localhost:5173

```powershell
npm run build
npm run preview
```

---

## Design system

BP dark theme tokens in `tailwind.config.js`:

- Background `#080B10`, surface `#0D1117`
- Accent cyan `#00D4FF`, purple `#7B61FF`, green `#00FF87`
- Utility classes: `.bp-card`, `.bp-input`, `.bp-btn-primary`

---

## Contact

suhono@branchlesspay.com
