import './Faq.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { FAQS } from '../data/reviews.js';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="section-head">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal delay={0.05}><h2 id="faq-title" className="section-title">Good to know</h2></Reveal>
        </div>
        <div className="faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="faq__icon"><Plus size={18} /></motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
