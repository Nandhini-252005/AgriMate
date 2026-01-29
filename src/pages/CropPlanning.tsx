import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Sprout, Droplets, ThermometerSun, MapPin, ArrowRight } from 'lucide-react';

export const CropPlanning = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setResult({
        crop: 'Wheat (HD-2967)',
        confidence: '92%',
        reason: 'Suitable for current temperature (20-25°C) and loamy soil conditions.',
        waterNeeds: 'Moderate',
        duration: '120-140 days'
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">AI Crop Planner</h1>
        <p className="text-gray-500 mt-2">Get scientific crop recommendations based on your soil and local weather.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Location" placeholder="e.g. Punjab, Ludhiana" icon={<MapPin />} />
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Soil Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none">
                  <option>Loamy</option>
                  <option>Clay</option>
                  <option>Sandy</option>
                  <option>Black Soil</option>
                </select>
              </div>
              <Input label="Land Area (Acres)" type="number" placeholder="e.g. 5" />
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Season</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none">
                  <option>Rabi (Winter)</option>
                  <option>Kharif (Monsoon)</option>
                  <option>Zaid (Summer)</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full py-3 text-lg" isLoading={loading}>
                Analyze & Recommend
              </Button>
            </div>
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-emerald-50 border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <Sprout className="w-5 h-5" /> Why use AI?
            </h3>
            <ul className="space-y-3 text-sm text-emerald-700">
              <li className="flex gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5" /> Increase yield by up to 30%</li>
              <li className="flex gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5" /> Reduce water wastage</li>
              <li className="flex gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5" /> Optimize fertilizer usage</li>
            </ul>
          </Card>
        </div>
      </div>

      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="p-8 border-emerald-200 bg-gradient-to-br from-white to-emerald-50/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommendation Result</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-100 text-center">
                <p className="text-sm text-gray-500 mb-1">Recommended Crop</p>
                <p className="text-xl font-bold text-emerald-600">{result.crop}</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-100 text-center">
                <p className="text-sm text-gray-500 mb-1">Confidence Score</p>
                <p className="text-xl font-bold text-blue-600">{result.confidence}</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-100 text-center">
                <p className="text-sm text-gray-500 mb-1">Duration</p>
                <p className="text-xl font-bold text-amber-600">{result.duration}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Analysis</h4>
              <p className="text-gray-600">{result.reason}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};