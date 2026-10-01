import './FestiveBanner.css';
import { motion } from 'framer-motion';
import { Download, Gift } from 'lucide-react';
import Reveal from './Reveal.jsx';
import giftBox from '../assets/images/gift-box.svg';

export default function FestiveBanner() {
  return (
    <section className="festive" aria-labelledby="festive-title">
      <div className="container">
        <Reveal className="festive__card">
          <div className="festive__copy">
            <span className="festive__tag"><Gift size={15} /> Festive season</span>
            <h2 id="festive-title">Diwali gift boxes are here</h2>
            <p>Handpicked mithai and dry fruit boxes, wrapped and ready to give. Corporate orders welcome.</p>
            <div className="festive__ctas">
              <a href="/pdfs/gupta-sweets-festival-specials.pdf" download className="btn btn--light"><Download size={18} /> Festival Specials</a>
              <a href="/pdfs/gupta-sweets-corporate-orders.pdf" download className="btn btn--outline-light">Corporate Orders</a>
            </div>
          </div>
          <motion.img
            src={giftBox}
            alt="Festive gift box with ribbon"
            className="festive__img"
            loading="lazy"
            animate={{ y: [0, -12, 0], rotate: [-3, 2, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="festive__sparkle festive__sparkle--1" aria-hidden="true" />
          <span className="festive__sparkle festive__sparkle--2" aria-hidden="true" />
          <span className="festive__sparkle festive__sparkle--3" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
