import './Navbar.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV_LINKS } from '../data/site.js';

// Plain anchors on the home page; client-side links elsewhere so there is no full reload.
function NavAnchor({ id, onHome, ...props }) {
  return onHome ? <a href={`#${id}`} {...props} /> : <Link to={{ pathname: '/', hash: `#${id}` }} {...props} />;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  // On other pages, section links point back to the home page.

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for whichever section is in the middle of the screen.
  useEffect(() => {
    if (!onHome) { setActive(null); return undefined; }
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main">
        <NavAnchor id="home" onHome={onHome} className="navbar__brand" onClick={() => setOpen(false)}>
          <Logo size={38} />
        </NavAnchor>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <NavAnchor id={link.id} onHome={onHome} className={active === link.id ? 'is-active' : ''}>
                {link.label}
              </NavAnchor>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Link to="/order" className="btn btn--primary btn--sm navbar__cta">Order Now</Link>
          <button type="button" className="icon-btn navbar__toggle" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <NavAnchor id={link.id} onHome={onHome} onClick={() => setOpen(false)} className={active === link.id ? 'is-active' : ''}>
                    {link.label}
                  </NavAnchor>
                </motion.li>
              ))}
            </ul>
            <Link to="/order" className="btn btn--primary" onClick={() => setOpen(false)}>Order Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
