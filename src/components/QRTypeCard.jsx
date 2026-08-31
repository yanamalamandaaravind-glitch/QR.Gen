export default function QRTypeCard({ type }) {
  const Icon = type.icon;
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 transition-all group flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{type.name}</h3>
      <p className="text-sm text-slate-600 line-clamp-2">{type.description}</p>
    </div>
  );
}
