import { memo } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';

function PdfDownloadCard({ pdf, index }) {
  const fileName = pdf.file.split('/').pop();
  return (
    <motion.article
      className="pdf-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pdf-card__icon"><FileText size={24} /></div>
      <div className="pdf-card__body">
        <h3>{pdf.title}</h3>
        <p>{pdf.description}</p>
        <span className="pdf-card__meta">PDF · {pdf.pages} page</span>
      </div>
      <div className="pdf-card__actions">
        <a className="btn btn--ghost btn--sm" href={pdf.file} target="_blank" rel="noopener noreferrer" aria-label={`Open ${pdf.title} PDF in a new tab`}>
          <Eye size={16} /> View
        </a>
        <a className="btn btn--primary btn--sm" href={pdf.file} download={fileName} aria-label={`Download ${pdf.title} PDF`}>
          <Download size={16} /> Download
        </a>
      </div>
    </motion.article>
  );
}

export default memo(PdfDownloadCard);
