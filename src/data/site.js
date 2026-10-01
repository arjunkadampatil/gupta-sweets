// Single place for business details and the map location.
// Replace LOCATION with the real shop details when they are available.
export const BUSINESS = {
  name: 'Gupta Sweets',
  tagline: 'Sweets & Bakery',
  phone: '0123456789',
  phoneIntl: '910123456789', // used for WhatsApp links (country code + number)
  email: 'gupta@gmail.com',
  whatsappText: 'Hi Gupta Sweets, I would like to know more about your sweets and bakery items.',
};

export const LOCATION = {
  label: 'Demo Location',
  addressLines: ['Shop No. 00, Sample Market Road', 'Demo City, India'],
  // Demo coordinates (central Lucknow). Swap for the real shop's coordinates.
  lat: 26.8467,
  lng: 80.9462,
};

export const googleMapsUrl = (loc = LOCATION) =>
  `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;

export const TIMINGS = [
  { day: 'Monday – Saturday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 9:00 PM' },
  { day: 'Festivals', hours: 'Extended hours' },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'menus', label: 'Menus' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];
