import React from 'react';
import { Sparkles, User, Calendar, MessageSquare } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SparkleClean</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100">
              <Calendar className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}