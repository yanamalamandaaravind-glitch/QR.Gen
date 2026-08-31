import QRInput from './QRInput';

export default function QRForm({ selectedType, formData, setFormData }) {
  
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderFields = () => {
    switch (selectedType.id) {
      case 'url':
        return (
          <QRInput 
            label="Website URL" 
            id="url" 
            placeholder="https://example.com"
            value={formData.url}
            onChange={(e) => handleChange('url', e.target.value)}
          />
        );
      case 'text':
        return (
          <QRInput 
            label="Text" 
            id="text" 
            isTextArea 
            placeholder="Enter any text here..."
            value={formData.text}
            onChange={(e) => handleChange('text', e.target.value)}
          />
        );
      case 'email':
        return (
          <>
            <QRInput 
              label="Email Address" 
              id="email" 
              type="email" 
              placeholder="recipient@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <QRInput 
              label="Subject" 
              id="subject" 
              placeholder="Email subject"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
            />
            <QRInput 
              label="Message" 
              id="message" 
              isTextArea 
              placeholder="Type your message..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </>
        );
      case 'phone':
        return (
          <QRInput 
            label="Phone Number" 
            id="phone" 
            type="tel" 
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        );
      case 'location':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <QRInput 
                label="Latitude" 
                id="latitude" 
                placeholder="40.7128"
                value={formData.latitude}
                onChange={(e) => handleChange('latitude', e.target.value)}
              />
              <QRInput 
                label="Longitude" 
                id="longitude" 
                placeholder="-74.0060"
                value={formData.longitude}
                onChange={(e) => handleChange('longitude', e.target.value)}
              />
            </div>
            <QRInput 
              label="Or Maps Link" 
              id="mapLink" 
              placeholder="https://maps.google.com/..."
              value={formData.mapLink}
              onChange={(e) => handleChange('mapLink', e.target.value)}
            />
          </>
        );
      case 'contact':
        return (
          <>
            <QRInput 
              label="Full Name" 
              id="name" 
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <QRInput 
              label="Phone Number" 
              id="contactPhone" 
              type="tel" 
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
            <QRInput 
              label="Email Address" 
              id="contactEmail" 
              type="email" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </>
        );
      case 'image':
        return (
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Image
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
              <p className="text-slate-500 font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-400">PNG, JPG, GIF up to 5MB</p>
            </div>
            {/* Note: Backend integration for actual upload goes here later */}
          </div>
        );
      case 'wifi':
        return (
          <>
            <QRInput 
              label="Network Name (SSID)" 
              id="ssid" 
              placeholder="MyWiFiNetwork"
              value={formData.ssid}
              onChange={(e) => handleChange('ssid', e.target.value)}
            />
            <QRInput 
              label="Password" 
              id="password" 
              type="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Security Type
              </label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-700 font-medium appearance-none"
                value={formData.security || 'WPA'}
                onChange={(e) => handleChange('security', e.target.value)}
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">None</option>
              </select>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">2. Enter Information</h3>
      {renderFields()}
    </div>
  );
}
