/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BRAND_COLORS = {
  primary: '#1E3A8A', // Blue
  secondary: '#F97316', // Orange
};

export const CATEGORIES = [
  'ICs & Semiconductors',
  'Passives',
  'Power Modules',
  'Battery & BMS',
  'Tools & Equipment',
  'Electromaal Labs', // Custom products
];

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'TP4056 Li-ion Charger Module',
    description: 'Micro-USB charging module with battery protection for 3.7V Li-ion cells.',
    price: 45,
    category: 'Power Modules',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 1250,
    stock: 500,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'XL6009 Boost Converter Module',
    description: 'High-performance step-up module with adjustable output voltage.',
    price: 120,
    category: 'Power Modules',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 850,
    stock: 120,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'T12 Digital Soldering Station',
    description: 'OLED display, rapid heating, and precision temperature control.',
    price: 4500,
    category: 'Tools & Equipment',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 320,
    stock: 25,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Electromaal Mini UPS (12V/2A)',
    description: 'Our custom-developed mini UPS for routers and small devices. 4 hours backup.',
    price: 1850,
    category: 'Electromaal Labs',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    reviews: 45,
    stock: 15,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'ESP32-WROOM-32U Development Board',
    description: 'Dual-core WiFi + Bluetooth SoC with external antenna connector.',
    price: 550,
    category: 'ICs & Semiconductors',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 640,
    stock: 200,
  },
  {
    id: '6',
    name: 'BMS 3S 40A Enhanced Version',
    description: 'Balance charge module for 18650 lithium battery packs.',
    price: 320,
    category: 'Battery & BMS',
    image: 'https://images.unsplash.com/photo-1591179064731-db3e288e7e1c?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviews: 180,
    stock: 85,
  }
];
