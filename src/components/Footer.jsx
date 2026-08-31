import { Link } from 'react-router-dom';
import { QrCode, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <QrCode className="h-8 w-8 text-primary-500" />
              <span className="font-bold text-2xl text-white tracking-tight">QRForge</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              The modern platform for generating high-quality QR codes. 
              Built as a comprehensive portfolio project showcasing clean code and modern design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/create" className="text-slate-400 hover:text-primary-400 transition-colors">Create QR</Link></li>
              <li><a href="#features" className="text-slate-400 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#demo" className="text-slate-400 hover:text-primary-400 transition-colors">Examples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} QRForge. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
