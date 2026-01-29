import React from 'react';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Truck, Package, MapPin, Clock } from 'lucide-react';

export const SupplyChain = () => {
  const steps = [
    { title: 'Harvested', date: 'May 10, 08:00 AM', status: 'completed', icon: Package, location: 'Farm, Punjab' },
    { title: 'Quality Check', date: 'May 10, 02:00 PM', status: 'completed', icon: CheckCircle2, location: 'Collection Center' },
    { title: 'In Transit', date: 'May 11, 09:00 AM', status: 'active', icon: Truck, location: 'Highway NH-44' },
    { title: 'Delivered', date: 'Estimated May 12', status: 'pending', icon: MapPin, location: 'Buyer Warehouse' },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Supply Chain Tracking</h1>
        <p className="text-gray-500">Track the journey of Order #ORD-002</p>
      </div>

      <Card className="p-8">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                  step.status === 'completed' ? 'bg-emerald-100 border-emerald-500 text-emerald-600' :
                  step.status === 'active' ? 'bg-blue-100 border-blue-500 text-blue-600 animate-pulse' :
                  'bg-gray-50 border-gray-200 text-gray-400'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-lg font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {step.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {step.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};