import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

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

export default function App() {
  const loading = useInitialLoad();
  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<ComingSoon />} />
        <Route path="/shop" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </>
  );
}
