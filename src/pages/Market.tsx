import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { MOCK_CROPS } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import { Search, Filter, MapPin, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Crop } from '@/types';

export const Market = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const categories = ['All', 'Grains', 'Vegetables', 'Fruits', 'Commercial'];

  const filteredCrops = MOCK_CROPS.filter(crop => 
    (selectedCategory === 'All' || crop.category === selectedCategory) &&
    (crop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     crop.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBuyClick = (crop: Crop) => {
    setSelectedCrop(crop);
    setIsPaymentModalOpen(true);
    setPaymentSuccess(false);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setIsPaymentModalOpen(false);
        navigate('/orders');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-500">Browse fresh produce from farmers across India</p>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search crops..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCrops.map((crop) => (
          <Card key={crop.id} className="flex flex-col h-full group">
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
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">{crop.name}</h3>
                <span className="text-emerald-600 font-bold text-lg">{formatCurrency(crop.price)}</span>
              </div>
              
              <div className="space-y-2 mb-4 flex-1">
                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {crop.location}
                </p>
                <p className="text-sm text-gray-500">Seller: <span className="text-gray-900 font-medium">{crop.seller}</span></p>
                <p className="text-sm text-gray-500">Available: <span className="text-gray-900 font-medium">{crop.quantity} {crop.unit}</span></p>
              </div>

              <Button className="w-full" onClick={() => handleBuyClick(crop)}>
                Buy Now
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Payment Modal */}
      <Modal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)}
        title="Complete Purchase"
      >
        {paymentSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-gray-500">Your order has been placed successfully.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-xl flex gap-4 items-center">
              <img src={selectedCrop?.image} alt="" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <h4 className="font-bold text-gray-900">{selectedCrop?.name}</h4>
                <p className="text-emerald-600 font-bold">{selectedCrop && formatCurrency(selectedCrop.price)}</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
              <div className="grid grid-cols-2 gap-3">
                {['UPI', 'Credit Card', 'Net Banking', 'Wallet'].map((method) => (
                  <label key={method} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                    <input type="radio" name="payment" className="text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-sm font-medium text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Input label="Delivery Address" placeholder="Enter full address" />
            </div>

            <Button 
              className="w-full py-3 text-lg" 
              onClick={handlePayment}
              isLoading={isProcessing}
            >
              Pay {selectedCrop && formatCurrency(selectedCrop.price)}
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};