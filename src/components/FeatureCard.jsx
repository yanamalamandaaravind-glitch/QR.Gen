export default function FeatureCard({ feature }) {
  const Icon = feature.icon;
  
  return (
    <div className="flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
