import './LocationSection.css';
import { Clock, ExternalLink, MapPin } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { BUSINESS, LOCATION, TIMINGS, googleMapsUrl } from '../data/site.js';

// Illustrated map preview. It needs no API key and always renders, and clicking it
// opens the configured coordinates in Google Maps.
function MapPreview() {
  return (
    <svg viewBox="0 0 600 420" className="map-preview__svg" aria-hidden="true">
      <rect width="600" height="420" fill="var(--map-land)" />
      <path d="M-20 300 C 120 250, 220 360, 360 300 S 560 230, 640 270 L 640 340 C 540 300, 460 380, 340 360 S 120 320, -20 370 Z" fill="var(--map-water)" />
      <rect x="400" y="40" width="150" height="110" rx="18" fill="var(--map-park)" />
      <rect x="40" y="60" width="110" height="80" rx="14" fill="var(--map-park)" />
      <g stroke="var(--map-road)" strokeLinecap="round" fill="none">
        <path d="M0 200 H600" strokeWidth="16" />
        <path d="M300 0 V420" strokeWidth="16" />
        <path d="M0 110 H600 M0 270 H260 M160 0 V420 M450 0 V260" strokeWidth="8" />
        <path d="M60 0 L240 420 M600 60 L340 420" strokeWidth="5" opacity=".7" />
      </g>
      <g fill="var(--map-block)">
        <rect x="190" y="130" width="80" height="50" rx="6" /><rect x="330" y="130" width="90" height="50" rx="6" />
        <rect x="190" y="220" width="80" height="40" rx="6" /><rect x="330" y="220" width="100" height="40" rx="6" />
        <rect x="480" y="170" width="90" height="20" rx="6" /><rect x="30" y="220" width="110" height="40" rx="6" />
      </g>
    </svg>
  );
}

export default function LocationSection() {
  const mapsUrl = googleMapsUrl(LOCATION);
  return (
    <section id="visit" className="section location">
      <div className="container location__grid">
        <Reveal className="map-preview">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="map-preview__link" aria-label={`Open ${BUSINESS.name} location in Google Maps`}>
            <MapPreview />
            <span className="map-pin" aria-hidden="true">
              <span className="map-pin__pulse" />
              <MapPin size={34} strokeWidth={2.2} />
            </span>
            <span className="map-preview__label"><MapPin size={14} /> {BUSINESS.name} · {LOCATION.label}</span>
            <span className="map-preview__hint">Tap to open in Google Maps <ExternalLink size={14} /></span>
          </a>
        </Reveal>

        <div className="location__info">
          <Reveal><span className="eyebrow">Visit us</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Come say hello</h2></Reveal>
          <Reveal delay={0.1}>
            <address className="location__address">
              {LOCATION.addressLines.map((line) => <span key={line}>{line}</span>)}
            </address>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="timings" aria-label="Store timings">
              {TIMINGS.map((t) => (
                <li key={t.day}><Clock size={16} /><span>{t.day}</span><strong>{t.hours}</strong></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <MapPin size={18} /> Open in Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
