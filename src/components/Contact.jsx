import './Contact.css';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { BUSINESS, LOCATION, googleMapsUrl } from '../data/site.js';

const ACTIONS = [
  { label: 'Call us', value: BUSINESS.phone, icon: Phone, href: `tel:${BUSINESS.phone}` },
  { label: 'Email us', value: BUSINESS.email, icon: Mail, href: `mailto:${BUSINESS.email}` },
  { label: 'WhatsApp', value: 'Chat with us', icon: MessageCircle, href: `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(BUSINESS.whatsappText)}`, external: true },
  { label: 'Directions', value: 'Open in Maps', icon: MapPin, href: googleMapsUrl(LOCATION), external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Get in touch</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">We'd love to hear from you</h2></Reveal>
          <Reveal delay={0.1}><p className="section-sub">Planning a celebration or bulk gifting? Call, write or message us and we'll help you put it together.</p></Reveal>
        </div>
        <div className="contact__grid">
          {ACTIONS.map(({ label, value, icon: Icon, href, external }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a className="contact-card" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <span className="contact-card__icon"><Icon size={24} /></span>
                <span className="contact-card__label">{label}</span>
                <strong>{value}</strong>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
