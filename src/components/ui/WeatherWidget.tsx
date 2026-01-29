import React from 'react';
import { Card } from './Card';
import { Cloud, Sun, CloudRain, Wind, Droplets, MapPin } from 'lucide-react';
import { WeatherData } from '@/types';
import { motion } from 'framer-motion';

export const WeatherWidget = ({ data }: { data: WeatherData }) => {
  const getWeatherIcon = (condition: string) => {
    if (condition.toLowerCase().includes('rain')) return <CloudRain className="w-12 h-12 text-blue-400" />;
    if (condition.toLowerCase().includes('cloud')) return <Cloud className="w-12 h-12 text-gray-400" />;
    return <Sun className="w-12 h-12 text-amber-400" />;
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none overflow-hidden relative">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-100 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{data.location}</span>
            </div>
            <h2 className="text-4xl font-bold">{data.temp}°C</h2>
            <p className="text-blue-100">{data.condition}</p>
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            {getWeatherIcon(data.condition)}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
            <Wind className="w-5 h-5 text-blue-200" />
            <div>
              <p className="text-xs text-blue-200">Wind</p>
              <p className="font-semibold">{data.windSpeed} km/h</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
            <Droplets className="w-5 h-5 text-blue-200" />
            <div>
              <p className="text-xs text-blue-200">Humidity</p>
              <p className="font-semibold">{data.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
    </Card>
  );
};