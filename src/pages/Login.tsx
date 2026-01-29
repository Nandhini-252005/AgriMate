import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Mail, Lock, Leaf, ArrowRight } from 'lucide-react';
import { UserRole } from '@/types';

export const Login = () => {
  const [role, setRole] = useState<UserRole>('farmer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      login(role);
      setLoading(false);
      navigate(role === 'farmer' ? '/seller-dashboard' : '/buyer-dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md p-8 relative z-10 shadow-2xl border-0">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform rotate-3">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Sign in to access your AgriMate dashboard</p>
        </div>

        <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${role === 'farmer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setRole('farmer')}
          >
            Farmer
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${role === 'buyer' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setRole('buyer')}
          >
            Buyer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="pl-10" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                type="password" 
                placeholder="Password" 
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-emerald-600 hover:underline font-medium">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full py-3 text-lg group" isLoading={loading}>
            Sign In
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-emerald-600 font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </Card>
    </div>
  );
};