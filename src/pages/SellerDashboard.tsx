import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Package, AlertTriangle, CloudSun, ArrowRight } from 'lucide-react';
import { MOCK_CROPS, MOCK_ORDERS, MOCK_WEATHER } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import { WeatherWidget } from '@/components/ui/WeatherWidget';

export const SellerDashboard = () => {
  const navigate = useNavigate();
  const totalSales = MOCK_ORDERS.reduce((acc, order) => acc + order.amount, 0);
  const activeListings = MOCK_CROPS.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Farmer Dashboard</h1>
          <p className="text-gray-500">Overview of your farm's performance</p>
        </div>
        <Button onClick={() => navigate('/market')}>
          + List New Crop
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white border-none">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Total Revenue</p>
              <h3 className="text-3xl font-bold mt-2">{formatCurrency(totalSales)}</h3>
            </div>
            <div className="p-2 bg-white/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-emerald-100">
            <span className="bg-white/20 px-1.5 py-0.5 rounded text-white mr-2">+12%</span>
            from last month
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Listings</p>
              <h3 className="text-3xl font-bold mt-2 text-gray-900">{activeListings}</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <span className="text-emerald-600 font-medium">3 crops</span> low on stock
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Pending Orders</p>
              <h3 className="text-3xl font-bold mt-2 text-gray-900">
                {MOCK_ORDERS.filter(o => o.status === 'pending').length}
              </h3>
            </div>
            <div className="p-2 bg-amber-50 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Needs immediate attention
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-none">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-100 text-sm font-medium">Weather Alert</p>
              <h3 className="text-xl font-bold mt-2">Heavy Rain</h3>
            </div>
            <div className="p-2 bg-white/20 rounded-lg">
              <CloudSun className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 text-sm text-blue-100">
            Expected in 24 hours. Protect crops.
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/orders')}>View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {MOCK_ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-gray-50 last:border-0">
                    <td className="py-4 font-medium text-gray-900">{order.id}</td>
                    <td className="py-4 text-gray-600">{order.cropName}</td>
                    <td className="py-4 font-medium text-gray-900">{formatCurrency(order.amount)}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize
                        ${order.status === 'delivered' ? 'bg-green-100 text-green-700' : 
                          order.status === 'pending' ? 'bg-amber-100 text-amber-700' : 
                          'bg-blue-100 text-blue-700'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Weather Widget */}
        <div className="space-y-6">
          <WeatherWidget data={MOCK_WEATHER} />
          
          <Card className="p-6 bg-gradient-to-br from-violet-500 to-purple-600 text-white border-none relative overflow-hidden group cursor-pointer" onClick={() => navigate('/crop-planning')}>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">AI Crop Planner</h3>
              <p className="text-violet-100 text-sm mb-4">Get personalized crop recommendations based on soil & weather.</p>
              <div className="flex items-center text-sm font-medium">
                Try Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          </Card>
        </div>
      </div>
    </div>
  );
};