import './DownloadMenu.css';
import PdfDownloadCard from './PdfDownloadCard.jsx';
import Reveal from './Reveal.jsx';
import { PDFS } from '../data/pdfs.js';

export default function DownloadMenu() {
  return (
    <section id="menus" className="section menus">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Menus</span></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Download our menus</h2></Reveal>
          <Reveal delay={0.1}><p className="section-sub">Browse prices and seasonal specials offline, or share them with family before your visit.</p></Reveal>
        </div>
        <div className="menus__grid">
          {PDFS.map((pdf, i) => <PdfDownloadCard key={pdf.id} pdf={pdf} index={i} />)}
        </div>
      </div>
    </section>
  );
}
