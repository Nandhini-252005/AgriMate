export type UserRole = 'farmer' | 'buyer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Crop {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  seller: string;
  location: string;
  image: string;
  category: string;
  harvestDate: string;
}

export interface Order {
  id: string;
  cropId: string;
  cropName: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  date: string;
  quantity: number;
}

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
  forecast: Array<{ day: string; temp: number; icon: string }>;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  time: string;
}