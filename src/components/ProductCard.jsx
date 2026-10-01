import { memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SmartImage from './SmartImage.jsx';

// Showcase card with a subtle 3D tilt that follows the pointer.
function ProductCard({ product }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { px.set(0); py.set(0); };

  return (
    <motion.article
      layout
      className="product-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="product-card__media">
        <SmartImage src={product.image} alt={product.name} ratio="4 / 3" />
        {product.tag && <span className="product-card__tag">{product.tag}</span>}
      </div>
      <div className="product-card__body">
        <span className="product-card__cat">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.price && <span className="product-card__price">{product.price}</span>}
      </div>
    </motion.article>
  );
}

export default memo(ProductCard);
