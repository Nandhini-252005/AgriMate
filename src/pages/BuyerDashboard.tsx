import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Clock, Star, ArrowRight } from 'lucide-react';
import { MOCK_CROPS } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

export const BuyerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Buyer Dashboard</h1>
          <p className="text-gray-500">Find the best produce directly from farmers</p>
        </div>
        <Button onClick={() => navigate('/market')}>
          Browse Market
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-emerald-900 h-64 flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200" 
          alt="Farm" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-8 md:px-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fresh from the Farm to Your Table</h2>
          <p className="text-emerald-100 mb-6 text-lg">Connect directly with farmers and get the best prices for organic produce.</p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 border-none">
            Start Shopping
          </Button>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-8">Recommended for You</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_CROPS.slice(0, 4).map((crop) => (
          <Card key={crop.id} className="group cursor-pointer" onClick={() => navigate('/market')}>
            <div className="h-48 overflow-hidden relative">
              <img 
                src={crop.image} 
                alt={crop.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-emerald-700 shadow-sm">
                {crop.category}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{crop.name}</h4>
                <span className="text-emerald-600 font-bold">{formatCurrency(crop.price)}<span className="text-xs text-gray-400 font-normal">/{crop.unit}</span></span>
              </div>
              <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {crop.seller} • {crop.location}
              </p>
              <Button variant="outline" size="sm" className="w-full">View Details</Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="p-6 flex items-center gap-4 bg-blue-50 border-blue-100">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Bulk Orders</h4>
            <p className="text-sm text-gray-500">Get special discounts</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center gap-4 bg-amber-50 border-amber-100">
          <div className="p-3 bg-amber-100 rounded-full text-amber-600">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Fast Delivery</h4>
            <p className="text-sm text-gray-500">Within 24-48 hours</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center gap-4 bg-purple-50 border-purple-100">
          <div className="p-3 bg-purple-100 rounded-full text-purple-600">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Top Quality</h4>
            <p className="text-sm text-gray-500">Verified farmers only</p>
          </div>
        </Card>
      </div>
    </div>
  );
};