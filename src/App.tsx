import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { SellerDashboard } from '@/pages/SellerDashboard';
import { BuyerDashboard } from '@/pages/BuyerDashboard';
import { Market } from '@/pages/Market';
import { CropPlanning } from '@/pages/CropPlanning';
import { Weather } from '@/pages/Weather';
import { SupplyChain } from '@/pages/SupplyChain';
import { Orders } from '@/pages/Orders';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="seller-dashboard" element={<SellerDashboard />} />
            <Route path="buyer-dashboard" element={<BuyerDashboard />} />
            <Route path="market" element={<Market />} />
            <Route path="crop-planning" element={<CropPlanning />} />
            <Route path="weather" element={<Weather />} />
            <Route path="supply-chain" element={<SupplyChain />} />
            <Route path="orders" element={<Orders />} />
            <Route path="ai-assistant" element={<div className="p-8 text-center text-gray-500">AI Assistant is available globally via the floating button.</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;