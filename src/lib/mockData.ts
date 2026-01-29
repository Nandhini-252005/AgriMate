import { Crop, Order, WeatherData, Notification } from '@/types';

export const MOCK_CROPS: Crop[] = [
  {
    id: '1',
    name: 'Organic Wheat',
    price: 2200,
    quantity: 500,
    unit: 'kg',
    seller: 'Ramesh Kumar',
    location: 'Punjab, India',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400',
    category: 'Grains',
    harvestDate: '2024-03-15'
  },
  {
    id: '2',
    name: 'Basmati Rice',
    price: 4500,
    quantity: 1000,
    unit: 'kg',
    seller: 'Suresh Singh',
    location: 'Haryana, India',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400',
    category: 'Grains',
    harvestDate: '2024-04-01'
  },
  {
    id: '3',
    name: 'Fresh Tomatoes',
    price: 40,
    quantity: 200,
    unit: 'kg',
    seller: 'Anita Devi',
    location: 'Maharashtra, India',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400',
    category: 'Vegetables',
    harvestDate: '2024-05-10'
  },
  {
    id: '4',
    name: 'Alphonso Mangoes',
    price: 1200,
    quantity: 100,
    unit: 'dozen',
    seller: 'Rajesh Patil',
    location: 'Ratnagiri, India',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400',
    category: 'Fruits',
    harvestDate: '2024-05-20'
  },
  {
    id: '5',
    name: 'Cotton Bales',
    price: 6000,
    quantity: 50,
    unit: 'bale',
    seller: 'Vikram Reddy',
    location: 'Telangana, India',
    image: 'https://images.unsplash.com/photo-1594315590298-3296052b32a1?auto=format&fit=crop&q=80&w=400',
    category: 'Commercial',
    harvestDate: '2024-02-28'
  },
  {
    id: '6',
    name: 'Red Onions',
    price: 25,
    quantity: 3000,
    unit: 'kg',
    seller: 'Nashik Farmers Co-op',
    location: 'Nashik, India',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=400',
    category: 'Vegetables',
    harvestDate: '2024-05-05'
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    cropId: '1',
    cropName: 'Organic Wheat',
    buyerId: 'B1',
    sellerId: 'S1',
    amount: 11000,
    status: 'delivered',
    date: '2024-05-01',
    quantity: 5
  },
  {
    id: 'ORD-002',
    cropId: '3',
    cropName: 'Fresh Tomatoes',
    buyerId: 'B1',
    sellerId: 'S2',
    amount: 2000,
    status: 'shipped',
    date: '2024-05-12',
    quantity: 50
  },
  {
    id: 'ORD-003',
    cropId: '2',
    cropName: 'Basmati Rice',
    buyerId: 'B2',
    sellerId: 'S1',
    amount: 45000,
    status: 'pending',
    date: '2024-05-14',
    quantity: 10
  }
];

export const MOCK_WEATHER: WeatherData = {
  temp: 32,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  location: 'New Delhi, India',
  forecast: [
    { day: 'Mon', temp: 33, icon: 'sun' },
    { day: 'Tue', temp: 31, icon: 'cloud' },
    { day: 'Wed', temp: 29, icon: 'rain' },
    { day: 'Thu', temp: 30, icon: 'cloud-sun' },
    { day: 'Fri', temp: 34, icon: 'sun' }
  ]
};

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: '1', title: 'Order Shipped', message: 'Your order #ORD-002 has been shipped.', read: false, time: '2 hours ago' },
  { id: '2', title: 'Price Alert', message: 'Wheat prices have increased by 5%.', read: false, time: '5 hours ago' },
  { id: '3', title: 'Weather Warning', message: 'Heavy rain expected in your region tomorrow.', read: true, time: '1 day ago' }
];