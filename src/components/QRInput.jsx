export default function QRInput({ label, id, type = 'text', placeholder, value, onChange, isTextArea = false }) {
  const baseClasses = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-700 font-medium placeholder-slate-400";
  
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>
      
      {isTextArea ? (
        <textarea
          id={id}
          rows="4"
          className={`${baseClasses} resize-none`}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={baseClasses}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
        />
      )}
    </div>
  );
}
