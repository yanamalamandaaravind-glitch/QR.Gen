export const demoQRCodes = [
  {
    id: 1,
    type: 'Website',
    description: 'Links directly to your homepage or landing page.',
    actionText: 'Scan to visit',
    // Using an image placeholder for a generic QR code
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com'
  },
  {
    id: 2,
    type: 'Text',
    description: 'Displays plain text messages or secret notes.',
    actionText: 'Scan to read',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hello+World'
  },
  {
    id: 3,
    type: 'Email',
    description: 'Opens email client with pre-filled subject and body.',
    actionText: 'Scan to email',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:test@example.com'
  },
  {
    id: 4,
    type: 'Phone',
    description: 'Prompts to dial a specific phone number instantly.',
    actionText: 'Scan to call',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=tel:+1234567890'
  },
  {
    id: 5,
    type: 'Location',
    description: 'Opens maps with specific latitude and longitude.',
    actionText: 'Scan to navigate',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=geo:40.7128,-74.0060'
  },
  {
    id: 6,
    type: 'Contact',
    description: 'Adds a vCard to your device contacts.',
    actionText: 'Scan to save',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEGIN:VCARD%0AVERSION:3.0%0AN:Doe;John;;;%0AFN:John+Doe%0ATEL;TYPE=CELL:+1234567890%0AEND:VCARD'
  },
  {
    id: 7,
    type: 'Image',
    description: 'Links to a hosted image or gallery.',
    actionText: 'Scan to view',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Image+Placeholder'
  },
  {
    id: 8,
    type: 'Wi-Fi',
    description: 'Connects devices to a Wi-Fi network automatically.',
    actionText: 'Scan to connect',
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WIFI:T:WPA;S:MyNetwork;P:MyPassword;;'
  }
];
