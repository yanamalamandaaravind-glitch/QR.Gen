import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <QrCode className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-slate-900 tracking-tight">QRForge</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
            <a href="#about" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">About</a>
            <Link 
              to="/create" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              Create QR
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <Link 
              to="/create" 
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Create QR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
