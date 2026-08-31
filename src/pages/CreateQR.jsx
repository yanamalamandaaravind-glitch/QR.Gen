import { useState } from 'react';
import QRTypeSelector from '../components/QRTypeSelector';
import QRForm from '../components/QRForm';
import QRPreview from '../components/QRPreview';
import GenerateButton from '../components/GenerateButton';
import { qrTypes } from '../data/qrTypes';

export default function CreateQR() {
  const [selectedType, setSelectedType] = useState(qrTypes[0]);
  const [formData, setFormData] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setFormData({});
    setIsGenerated(false);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call/generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({});
    setIsGenerated(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Create Your QR Code</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a QR type, enter your information, and generate your custom QR code instantly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Area */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col h-full">
            <QRTypeSelector 
              selectedType={selectedType} 
              onSelect={handleTypeSelect} 
            />
            
            <div className="flex-grow flex flex-col">
              <QRForm 
                selectedType={selectedType} 
                formData={formData} 
                setFormData={setFormData} 
              />
              
              <div className="mt-6">
                <GenerateButton 
                  onClick={handleGenerate} 
                  isLoading={isGenerating} 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Preview Area */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 h-fit">
            <QRPreview 
              selectedType={selectedType}
              isGenerated={isGenerated}
              qrData={formData}
              onReset={handleReset}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
