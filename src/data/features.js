import { Zap, Layers, Image as ImageIcon, Download, Smartphone, Layout } from 'lucide-react';

export const features = [
  {
    id: 1,
    title: 'Fast QR generation',
    description: 'Create high-quality QR codes instantly with our optimized engine.',
    icon: Zap
  },
  {
    id: 2,
    title: 'Multiple QR types',
    description: 'Support for URLs, text, vCard, Wi-Fi, location, and much more.',
    icon: Layers
  },
  {
    id: 3,
    title: 'Image QR support',
    description: 'Embed images and logos directly into your custom QR codes.',
    icon: ImageIcon
  },
  {
    id: 4,
    title: 'Easy download',
    description: 'Export your generated QR codes in PNG or SVG formats in one click.',
    icon: Download
  },
  {
    id: 5,
    title: 'Mobile friendly',
    description: 'Our platform works perfectly on desktops, tablets, and smartphones.',
    icon: Smartphone
  },
  {
    id: 6,
    title: 'Simple interface',
    description: 'A clean and intuitive design that makes generating QR codes effortless.',
    icon: Layout
  }
];
