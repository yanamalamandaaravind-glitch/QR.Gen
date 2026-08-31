import { demoQRCodes } from '../data/demoQRCodes';

export default function DemoQRCode() {
  return (
    <section className="py-24 bg-slate-50" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Example QR Codes</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Scan these demo QR codes to see how different types of codes work in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoQRCodes.map((qr) => (
            <div 
              key={qr.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group text-center"
            >
              <div className="mb-6 inline-block p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={qr.image} 
                  alt={`${qr.type} QR Code demo`} 
                  className="w-32 h-32 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{qr.type} QR</h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{qr.description}</p>
              <div className="text-sm font-semibold text-primary-600">
                {qr.actionText} &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
