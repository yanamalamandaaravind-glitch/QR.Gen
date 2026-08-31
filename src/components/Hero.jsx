import { Link } from 'react-router-dom';
import { ArrowRight, QrCode } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
          QRForge 1.0 is here
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Create QR Codes in <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Instantly
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Generate custom QR codes for links, text, images, contacts, Wi-Fi and more. Fast, reliable, and completely free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/create"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all w-full sm:w-auto justify-center"
          >
            Create QR Code
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#qr-types"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all w-full sm:w-auto justify-center"
          >
            Explore QR Types
          </a>
        </div>
      </div>

      {/* Hero Visual Area */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10 h-full w-full pointer-events-none"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-0 opacity-80 transform rotate-1 md:rotate-2 scale-105">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={`bg-white p-4 rounded-2xl shadow-md border border-slate-100 aspect-square flex items-center justify-center ${item % 2 === 0 ? 'translate-y-4 md:translate-y-8' : ''}`}>
              <QrCode className="w-24 h-24 text-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
