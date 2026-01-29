import React, { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MOCK_NOTIFICATIONS } from '@/lib/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

export const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 right-0 left-0 md:left-64 z-20 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 md:hidden">
        <Button variant="ghost" size="sm" className="p-2">
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      <div className="hidden md:flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-xl w-96">
        <Search className="w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search crops, orders, or market trends..." 
          className="bg-transparent border-none outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900">{format(new Date(), 'EEEE, MMMM do')}</p>
          <p className="text-xs text-gray-500">Welcome back!</p>
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 rounded-xl hover:bg-gray-50 transition-colors text-gray-600"
          >
            <Bell className="w-5 h-5" />
            {notifications.some(n => !n.read) && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <div className="flex gap-2">
                    <button onClick={markAllRead} className="text-xs text-emerald-600 hover:underline">Mark read</button>
                    <button onClick={clearAll} className="text-xs text-red-500 hover:underline">Clear</button>
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 text-sm">No notifications</div>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} className={cn("p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors", !notif.read && "bg-emerald-50/30")}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-medium text-gray-900">{notif.title}</h4>
                          <span className="text-[10px] text-gray-400">{notif.time}</span>
                        </div>
                        <p className="text-xs text-gray-600">{notif.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};