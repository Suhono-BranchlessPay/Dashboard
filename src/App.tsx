import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MerchantAnchors from './pages/merchant/Anchors'
import MerchantDashboard from './pages/merchant/Dashboard'
import MerchantEvidence from './pages/merchant/Evidence'
import MerchantLogin from './pages/merchant/Login'
import MerchantRegister from './pages/merchant/Register'
import PartnerDashboard from './pages/partner/Dashboard'
import PartnerLogin from './pages/partner/Login'
import PartnerRegister from './pages/partner/Register'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/merchant/register" element={<MerchantRegister />} />
        <Route path="/merchant/login" element={<MerchantLogin />} />
        <Route path="/merchant/dashboard" element={<MerchantDashboard />} />
        <Route path="/merchant/anchors" element={<MerchantAnchors />} />
        <Route path="/merchant/evidence" element={<MerchantEvidence />} />

        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/dashboard" element={<PartnerDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
