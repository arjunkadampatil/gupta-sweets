import './Products.css';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from './ProductCard.jsx';
import SkeletonLoader from './SkeletonLoader.jsx';
import Reveal from './Reveal.jsx';
import { CATEGORIES, PRODUCTS } from '../data/products.js';

// Wait until every image in the list has been fetched, so the grid swaps from
// skeletons to real cards in one go instead of popping in piece by piece.
function usePreloadImages(sources) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      sources.map((src) => new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = resolve;
        img.src = src;
      }))
    ).then(() => !cancelled && setReady(true));
    return () => { cancelled = true; };
  }, [sources]);
  return ready;
}

export default function Products() {
  const [category, setCategory] = useState('All');
  const sources = useMemo(() => [...new Set(PRODUCTS.map((p) => p.image))], []);
  const ready = usePreloadImages(sources);

  const visible = useMemo(
    () => (category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category]
  );

  return (
    <section id="products" className="section section--alt products">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Our specialities</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Made fresh, made to share</h2></Reveal>
          <Reveal delay={0.1}><p className="section-sub">A look at what's on our counters today. Visit the shop or call us to know what's fresh right now.</p></Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="filters" role="tablist" aria-label="Product categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                className={`filter ${category === c ? 'is-active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {category === c && <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span className="filter__label">{c}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="products__grid" aria-live="polite" aria-busy={!ready}>
          {!ready ? (
            <SkeletonLoader count={6} />
          ) : (
            <AnimatePresence initial={false}>
              {visible.map((p) => <ProductCard key={p.id} product={p} />)}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
