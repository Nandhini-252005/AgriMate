import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MOCK_ORDERS } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Orders = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'shipped': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>

      <div className="space-y-4">
        {MOCK_ORDERS.map((order) => (
          <Card key={order.id} className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{order.cropName}</h3>
                <p className="text-sm text-gray-500">Order ID: {order.id} • {order.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-bold text-gray-900">{formatCurrency(order.amount)}</p>
              </div>
              
              <div className={`px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                <span className="capitalize">{order.status}</span>
              </div>

              <Button variant="outline" size="sm" onClick={() => navigate('/supply-chain')}>
                Track
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};