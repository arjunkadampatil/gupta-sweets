import laddoo from '../assets/images/laddoo.svg';
import jalebi from '../assets/images/jalebi.svg';
import kajuKatli from '../assets/images/kaju-katli.svg';
import gulabJamun from '../assets/images/gulab-jamun.svg';
import rasgulla from '../assets/images/rasgulla.svg';
import cake from '../assets/images/cake.svg';
import pastry from '../assets/images/pastry.svg';
import cookies from '../assets/images/cookies.svg';
import namkeen from '../assets/images/namkeen.svg';
import bakery from '../assets/images/bakery.svg';
import giftBox from '../assets/images/gift-box.svg';

export const CATEGORIES = ['All', 'Indian Sweets', 'Cakes', 'Pastries', 'Cookies', 'Namkeen', 'Bakery', 'Gift Boxes'];

// Showcase only: there is intentionally no cart or ordering logic attached to these items.
export const PRODUCTS = [
  { id: 'besan-laddoo', name: 'Besan Laddoo', category: 'Indian Sweets', image: laddoo, price: '₹520 / kg', description: 'Slow-roasted gram flour, pure ghee and a hint of cardamom.', tag: 'Bestseller' },
  { id: 'jalebi', name: 'Kesar Jalebi', category: 'Indian Sweets', image: jalebi, price: '₹360 / kg', description: 'Crisp spirals soaked in saffron syrup, served warm every evening.', tag: 'Hot & Fresh' },
  { id: 'kaju-katli', name: 'Kaju Katli', category: 'Indian Sweets', image: kajuKatli, price: '₹1,100 / kg', description: 'Smooth cashew fudge finished with edible silver vark.' },
  { id: 'gulab-jamun', name: 'Gulab Jamun', category: 'Indian Sweets', image: gulabJamun, price: '₹25 / pc', description: 'Khoya dumplings in rose-cardamom syrup.' },
  { id: 'rasgulla', name: 'Rasgulla', category: 'Indian Sweets', image: rasgulla, price: '₹25 / pc', description: 'Soft, spongy chhena balls in a light sugar syrup.' },
  { id: 'black-forest', name: 'Black Forest Cake', category: 'Cakes', image: cake, price: '₹650 / 500 g', description: 'Chocolate sponge, cherries and fresh cream. Eggless on request.', tag: 'Eggless option' },
  { id: 'truffle-pastry', name: 'Truffle Pastry', category: 'Pastries', image: pastry, price: '₹110', description: 'Layers of dark chocolate ganache and moist sponge.' },
  { id: 'choco-cookies', name: 'Choco Chip Cookies', category: 'Cookies', image: cookies, price: '₹300 / 500 g', description: 'Buttery cookies loaded with dark chocolate chunks.' },
  { id: 'namkeen-mix', name: 'Gupta Special Mixture', category: 'Namkeen', image: namkeen, price: '₹280 / 500 g', description: 'Crunchy sev, peanuts and lentils in a house spice blend.' },
  { id: 'fresh-bakes', name: 'Croissant & Loaf', category: 'Bakery', image: bakery, price: 'From ₹70', description: 'Butter croissants and whole wheat loaves, baked through the day.' },
  { id: 'gift-box', name: 'Royal Gift Box', category: 'Gift Boxes', image: giftBox, price: '₹1,250', description: 'Kaju katli, badam barfi and anjeer rolls in a keepsake box.', tag: 'Festive pick' },
];

export const GALLERY = [
  { id: 'g1', image: laddoo, title: 'Morning batch of besan laddoo' },
  { id: 'g2', image: jalebi, title: 'Fresh kesar jalebi' },
  { id: 'g3', image: cake, title: 'Celebration cakes' },
  { id: 'g4', image: kajuKatli, title: 'Kaju katli with silver vark' },
  { id: 'g5', image: giftBox, title: 'Festive gift boxes' },
  { id: 'g6', image: gulabJamun, title: 'Warm gulab jamun' },
  { id: 'g7', image: bakery, title: 'From the bakery oven' },
  { id: 'g8', image: cookies, title: 'Cookie jar favourites' },
];
