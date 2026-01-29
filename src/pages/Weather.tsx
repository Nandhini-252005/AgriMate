import React from 'react';
import { WeatherWidget } from '@/components/ui/WeatherWidget';
import { MOCK_WEATHER } from '@/lib/mockData';
import { Card } from '@/components/ui/Card';
import { Cloud, CloudRain, Sun, Wind, Droplets, MapPin } from 'lucide-react';

export const Weather = () => {
  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'sun': return <Sun className="w-8 h-8 text-amber-500" />;
      case 'cloud': return <Cloud className="w-8 h-8 text-gray-400" />;
      case 'rain': return <CloudRain className="w-8 h-8 text-blue-500" />;
      default: return <Sun className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Weather Forecast</h1>
        <div className="flex items-center gap-2 text-gray-500 bg-white px-4 py-2 rounded-xl shadow-sm">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{MOCK_WEATHER.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeatherWidget data={MOCK_WEATHER} />
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-blue-50 border-blue-100">
            <h3 className="font-bold text-blue-900 mb-4">Farming Advisory</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                  <CloudRain className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Heavy Rain Alert</p>
                  <p className="text-xs text-blue-700 mt-1">Expected in next 48 hours. Ensure proper drainage in fields.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600 mt-1">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-900">High Temperature</p>
                  <p className="text-xs text-amber-700 mt-1">Irrigate crops in early morning to prevent evaporation loss.</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-8">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {MOCK_WEATHER.forecast.map((day, idx) => (
          <Card key={idx} className="p-4 text-center hover:bg-gray-50 transition-colors">
            <p className="text-gray-500 text-sm mb-2">{day.day}</p>
            <div className="flex justify-center mb-2">
              {getWeatherIcon(day.icon)}
            </div>
            <p className="text-xl font-bold text-gray-900">{day.temp}°C</p>
          </Card>
        ))}
      </div>
    </div>
  );
};