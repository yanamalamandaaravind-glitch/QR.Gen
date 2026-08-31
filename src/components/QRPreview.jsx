import { Download, RefreshCw, QrCode } from 'lucide-react';

export default function QRPreview({ selectedType, isGenerated, qrData, onReset }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[500px] relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-slate-900 z-0"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        {!isGenerated ? (
          <>
            <div className="w-64 h-64 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center mb-8 bg-slate-800/50 backdrop-blur-sm">
              <QrCode className="w-16 h-16 text-slate-600 mb-4" />
              <p className="text-slate-400 font-medium px-8">Your QR Code will appear here</p>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse"></span>
              Waiting for input...
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-4 rounded-2xl shadow-xl mb-8 transform transition-all hover:scale-105 duration-300">
              {/* Using qrserver API for a simple demo QR, since we don't have a backend yet */}
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Example+QR+Code+for+${selectedType.name}`} 
                alt="Generated QR Code" 
                className="w-56 h-56 object-contain"
              />
            </div>
            
            <h4 className="text-white font-bold text-xl mb-2">{selectedType.name} QR Code</h4>
            <p className="text-slate-400 text-sm mb-8 max-w-[250px]">
              Successfully generated and ready to use.
            </p>
            
            <div className="w-full space-y-3">
              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> Download PNG
              </button>
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700">
                <Download className="w-4 h-4" /> Download SVG
              </button>
              <button 
                onClick={onReset}
                className="w-full bg-transparent hover:bg-slate-800 text-slate-300 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors mt-4"
              >
                <RefreshCw className="w-4 h-4" /> Create Another
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
