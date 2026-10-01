import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loader"
      role="status"
      aria-live="polite"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="loader__inner">
        <div className="loader__plate">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="loader__laddoo"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
        </div>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Gupta Sweets
        </motion.h1>
        <p>Preparing something sweet…</p>
        <div className="loader__bar"><motion.span initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.4, ease: 'easeInOut' }} /></div>
      </div>
      <span className="sr-only">Loading Gupta Sweets website</span>
    </motion.div>
  );
}
