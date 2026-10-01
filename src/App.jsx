import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Home from './pages/Home.jsx';
import './pages/ComingSoon.css';

// Secondary pages are split out so the home page loads faster.
const ComingSoon = lazy(() => import('./pages/ComingSoon.jsx'));
const Legal = lazy(() => import('./pages/Legal.jsx'));

const MIN_LOADER_MS = 1300;

function useInitialLoad() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const started = performance.now();
    let timer;
    const finish = () => {
      const wait = Math.max(0, MIN_LOADER_MS - (performance.now() - started));
      timer = setTimeout(() => setLoading(false), wait);
    };
    const ready = document.fonts ? document.fonts.ready : Promise.resolve();
    const loaded = document.readyState === 'complete' ? Promise.resolve() : new Promise((r) => window.addEventListener('load', r, { once: true }));
    Promise.all([ready, loaded]).then(finish);
    return () => clearTimeout(timer);
  }, []);
  return loading;
}

// Scroll to the top on page change, or to the section in the URL hash (e.g. /#menus).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return undefined; }
    const id = hash.slice(1);
    const scroll = () => document.getElementById(id)?.scrollIntoView();
    // Scroll once the home page has rendered, then once more after images settle the layout.
    const raf = requestAnimationFrame(scroll);
    const timer = setTimeout(scroll, 450);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const loading = useInitialLoad();

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: '100svh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<ComingSoon />} />
          <Route path="/shop" element={<ComingSoon />} />
          <Route path="/privacy-policy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
