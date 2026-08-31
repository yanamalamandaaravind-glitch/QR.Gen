import Hero from '../components/Hero';
import DemoQRCode from '../components/DemoQRCode';
import HowItWorks from '../components/HowItWorks';
import QRTypeCard from '../components/QRTypeCard';
import FeatureCard from '../components/FeatureCard';
import TechStack from '../components/TechStack';
import { qrTypes } from '../data/qrTypes';
import { features } from '../data/features';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DemoQRCode />
      <HowItWorks />
      
      {/* QR Types Section */}
      <section className="py-24 bg-slate-50" id="qr-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Supported QR Types</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need in one place. Generate a wide variety of QR codes tailored to your use case.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {qrTypes.map(type => (
              <QRTypeCard key={type.id} type={type} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose QRForge?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Designed with simplicity and power in mind, providing the best experience for generating QR codes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <TechStack />
    </div>
  );
}
