import './Footer.css';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-react';
import Logo from './Logo.jsx';
import { BUSINESS, LOCATION, NAV_LINKS } from '../data/site.js';

// Social profiles are placeholders until the business shares real handles.
const SOCIALS = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
  { label: 'YouTube', icon: Youtube },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size={40} />
          <p>Traditional Indian sweets, cakes and fresh bakery, made in small batches every day.</p>
          <ul className="footer__socials">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a href="#home" aria-label={`${label} (coming soon)`} title={`${label} (coming soon)`}><Icon size={18} /></a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h3>Explore</h3>
          <ul>{NAV_LINKS.map((l) => <li key={l.id}><Link to={{ pathname: '/', hash: `#${l.id}` }}>{l.label}</Link></li>)}</ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={`tel:${BUSINESS.phone}`}><Phone size={15} /> {BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`}><Mail size={15} /> {BUSINESS.email}</a></li>
            {LOCATION.addressLines.map((l) => <li key={l} className="footer__muted">{l}</li>)}
          </ul>
        </div>

        <div>
          <h3>Visit</h3>
          <ul>
            <li className="footer__muted">Mon – Sat · 8 AM – 10 PM</li>
            <li className="footer__muted">Sunday · 9 AM – 9 PM</li>
            <li><Link to="/shop">Shop online (coming soon)</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {BUSINESS.name}. All rights reserved.</span>
        <span className="footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
