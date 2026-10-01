import './Hero.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import laddoo from '../assets/images/laddoo.svg';
import jalebi from '../assets/images/jalebi.svg';
import kajuKatli from '../assets/images/kaju-katli.svg';
import gulabJamun from '../assets/images/gulab-jamun.svg';
import cake from '../assets/images/cake.svg';

// Each floating item sits at a different depth; deeper items move more with the mouse.
const FLOATERS = [
  { src: jalebi, alt: 'Jalebi', className: 'floater--a', depth: 70, delay: 0 },
  { src: kajuKatli, alt: 'Kaju katli', className: 'floater--b', depth: 45, delay: 0.6 },
  { src: gulabJamun, alt: 'Gulab jamun', className: 'floater--c', depth: 90, delay: 1.1 },
  { src: cake, alt: 'Cake', className: 'floater--d', depth: 55, delay: 1.6 },
];

function Floater({ item, mx, my }) {
  const x = useTransform(mx, (v) => v * item.depth);
  const y = useTransform(my, (v) => v * item.depth);
  return (
    <motion.div className={`floater ${item.className}`} style={{ x, y, translateZ: item.depth }}>
      <motion.img
        src={item.src}
        alt={item.alt}
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        draggable="false"
      />
    </motion.div>
  );
}

export default function Hero() {
  const stageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 18 });
  const rotateY = useTransform(mx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(my, [-0.5, 0.5], [12, -12]);

  const handleMove = (e) => {
    if (reduceMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <section id="home" className="hero" onMouseMove={handleMove} onMouseLeave={reset}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span className="hero__badge" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Sparkles size={15} /> Fresh every morning
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            Traditional mithai,<br />
            <span className="hero__accent">baked with love</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
            From slow-roasted besan laddoo to celebration cakes, Gupta Sweets brings you the taste of home, made fresh in small batches every day.
          </motion.p>
          <motion.div className="hero__ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <Link to="/order" className="btn btn--primary">Order Now <ArrowRight size={18} /></Link>
            <a href="#menus" className="btn btn--ghost"><Download size={18} /> Download Menu</a>
          </motion.div>
          <motion.ul className="hero__stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <li><strong>60+</strong><span>Sweets & bakes</span></li>
            <li><strong>100%</strong><span>Pure ghee</span></li>
            <li><strong>Daily</strong><span>Fresh batches</span></li>
          </motion.ul>
        </div>

        <div className="hero__stage" ref={stageRef} aria-hidden="true">
          <motion.div className="hero__scene" style={{ rotateX, rotateY }}>
            <div className="hero__ring" />
            <motion.div className="hero__plate" style={{ translateZ: 30 }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              <img src={laddoo} alt="" draggable="false" />
            </motion.div>
            {FLOATERS.map((item) => (
              <Floater key={item.alt} item={item} mx={mx} my={my} />
            ))}
          </motion.div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About section"><span /></a>
    </section>
  );
}
