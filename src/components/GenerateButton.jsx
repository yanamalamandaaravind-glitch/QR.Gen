import { Wand2 } from 'lucide-react';

export default function GenerateButton({ onClick, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`w-full mt-6 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white shadow-lg transition-all ${isLoading
        ? 'bg-blue-600 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
        }`}
    >
      <Wand2 className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
      {isLoading ? 'Generating...' : 'Generate QR Code'}
    </button>
  );
}
