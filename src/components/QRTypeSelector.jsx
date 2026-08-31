import { qrTypes } from '../data/qrTypes';

export default function QRTypeSelector({ selectedType, onSelect }) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">1. Select QR Type</h3>
      <div className="grid grid-cols-4 gap-3">
        {qrTypes.map(type => {
          const Icon = type.icon;
          const isSelected = selectedType.id === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected 
                  ? 'border-primary-600 bg-primary-50 text-primary-700' 
                  : 'border-slate-100 bg-white text-slate-600 hover:border-primary-200 hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-primary-600' : 'text-slate-400'}`} />
              <span className="text-xs font-semibold">{type.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
