import './Gallery.css';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import SmartImage from './SmartImage.jsx';
import Reveal from './Reveal.jsx';
import { GALLERY } from '../data/products.js';

function Lightbox({ index, onClose, onStep }) {
  const item = GALLERY[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, onStep]);

  return (
    <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button type="button" className="lightbox__close icon-btn" onClick={onClose} aria-label="Close gallery" autoFocus><X size={20} /></button>
      <button type="button" className="lightbox__nav lightbox__nav--prev icon-btn" onClick={(e) => { e.stopPropagation(); onStep(-1); }} aria-label="Previous image"><ChevronLeft size={22} /></button>
      <motion.figure key={item.id} className="lightbox__figure" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <figcaption>{item.title} <span>{index + 1} / {GALLERY.length}</span></figcaption>
      </motion.figure>
      <button type="button" className="lightbox__nav lightbox__nav--next icon-btn" onClick={(e) => { e.stopPropagation(); onStep(1); }} aria-label="Next image"><ChevronRight size={22} /></button>
    </motion.div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i + d + GALLERY.length) % GALLERY.length), []);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Gallery</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">A peek behind the counter</h2></Reveal>
        </div>
        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 0.06} className={`gallery__item gallery__item--${i + 1}`}>
              <button type="button" className="gallery__btn" onClick={() => setOpen(i)} aria-label={`Open image: ${g.title}`}>
                <SmartImage src={g.image} alt={g.title} ratio="auto" />
                <span className="gallery__overlay"><Maximize2 size={18} /> {g.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>{open !== null && <Lightbox index={open} onClose={close} onStep={step} />}</AnimatePresence>
    </section>
  );
}
