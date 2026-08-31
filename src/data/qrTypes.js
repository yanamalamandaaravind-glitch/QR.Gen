import { 
  Link, 
  Type, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Image as ImageIcon, 
  Wifi 
} from 'lucide-react';

export const qrTypes = [
  {
    id: 'url',
    name: 'URL',
    description: 'Link to any website',
    icon: Link,
    fields: ['url']
  },
  {
    id: 'text',
    name: 'Text',
    description: 'Display plain text',
    icon: Type,
    fields: ['text']
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Send an email',
    icon: Mail,
    fields: ['email', 'subject', 'message']
  },
  {
    id: 'phone',
    name: 'Phone',
    description: 'Call a phone number',
    icon: Phone,
    fields: ['phone']
  },
  {
    id: 'location',
    name: 'Location',
    description: 'Share a location',
    icon: MapPin,
    fields: ['latitude', 'longitude', 'mapLink']
  },
  {
    id: 'contact',
    name: 'Contact',
    description: 'Share contact details',
    icon: User,
    fields: ['name', 'phone', 'email']
  },
  {
    id: 'image',
    name: 'Image',
    description: 'Show an image',
    icon: ImageIcon,
    fields: ['image']
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    description: 'Connect to a network',
    icon: Wifi,
    fields: ['ssid', 'password', 'security']
  }
];
