import './Reviews.css';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReviewCard from './ReviewCard.jsx';
import Reveal from './Reveal.jsx';
import { REVIEWS } from '../data/reviews.js';

function usePerView() {
  const get = () => (window.innerWidth < 720 ? 1 : window.innerWidth < 1020 ? 2 : 3);
  const [perView, setPerView] = useState(get);
  useEffect(() => {
    const onResize = () => setPerView(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return perView;
}

export default function Reviews() {
  const perView = usePerView();
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const total = REVIEWS.length;

  const go = useCallback((step) => {
    setDirection(step);
    setStart((s) => (s + step + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go]);

  const visible = Array.from({ length: Math.min(perView, total) }, (_, i) => REVIEWS[(start + i) % total]);

  return (
    <section id="reviews" className="section section--alt reviews">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Kind words</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">What our customers say</h2></Reveal>
        </div>

        <div className="reviews__carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <button type="button" className="icon-btn reviews__nav" onClick={() => go(-1)} aria-label="Previous reviews"><ChevronLeft size={20} /></button>
          <div className="reviews__track" style={{ gridTemplateColumns: `repeat(${visible.length}, 1fr)` }}>
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {visible.map((r) => (
                <motion.div
                  key={r.id}
                  layout
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ReviewCard review={r} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button type="button" className="icon-btn reviews__nav" onClick={() => go(1)} aria-label="Next reviews"><ChevronRight size={20} /></button>
        </div>

        <div className="reviews__dots" role="tablist" aria-label="Choose review">
          {REVIEWS.map((r, i) => (
            <button key={r.id} type="button" role="tab" aria-selected={i === start} aria-label={`Show review ${i + 1}`} className={i === start ? 'is-active' : ''} onClick={() => { setDirection(i > start ? 1 : -1); setStart(i); }} />
          ))}
        </div>
      </div>
    </section>
  );
}
