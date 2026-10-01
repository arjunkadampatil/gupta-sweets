import './ComingSoon.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { BUSINESS } from '../data/site.js';
import laddoo from '../assets/images/laddoo.svg';

// Placeholder for the Order Now / Shop Now CTAs. Nothing is submitted or stored here.
export default function ComingSoon() {
  const { pathname } = useLocation();
  const isShop = pathname.startsWith('/shop');
  const isOrder = pathname.startsWith('/order');
  const eyebrow = isShop || isOrder ? 'Coming soon' : 'Page not found';
  const heading = isShop ? 'Online shop is on its way' : isOrder ? 'Online ordering is on its way' : 'This page wandered off';
  const text = isShop || isOrder
    ? "We're still setting this up. Until then, call us and we'll keep your favourites ready for pickup."
    : "We couldn't find that page, but the sweets are still right where you left them.";

  return (
    <main className="coming-soon">
      <motion.div className="coming-soon__card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <motion.img src={laddoo} alt="" aria-hidden="true" className="coming-soon__img" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{heading}</h1>
        <p>{text}</p>
        <div className="coming-soon__ctas">
          <Link to="/" className="btn btn--ghost"><ArrowLeft size={18} /> Back to home</Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn btn--primary"><Phone size={18} /> Call {BUSINESS.phone}</a>
        </div>
      </motion.div>
    </main>
  );
}
