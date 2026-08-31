export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choose QR Type', desc: 'Select from URL, Text, Email, and more.' },
    { num: '02', title: 'Enter Your Information', desc: 'Fill in the required details for your selected type.' },
    { num: '03', title: 'Generate QR Code', desc: 'Click the generate button to create your custom code instantly.' },
    { num: '04', title: 'Download or Share', desc: 'Save as PNG/SVG or share it directly with your audience.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Generate your perfect QR code in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group text-center lg:text-left">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-20 right-0 h-0.5 bg-slate-200 w-[calc(100%-2rem)] z-0"></div>
              )}

              <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 bg-slate-900 rounded-2xl flex items-center justify-center text-primary-400 font-bold text-xl mb-6 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
