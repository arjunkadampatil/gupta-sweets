import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BUSINESS } from '../data/site.js';

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['What we collect', 'This website does not have accounts, forms or online ordering, so we do not collect personal information through it. Your light or dark theme choice is saved only in your own browser.'],
      ['When you contact us', `If you call, email or message us on WhatsApp, we use your details only to reply to you and to prepare your order. We do not sell or share them.`],
      ['Third-party links', 'Buttons for Google Maps and WhatsApp open those services, which have their own privacy policies.'],
      ['Questions', `Write to ${BUSINESS.email} and we will be happy to help.`],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['About this website', 'This website is a showcase of our products. Images are illustrative and actual products may look slightly different.'],
      ['Prices and availability', 'Prices shown on the website and in downloadable menus are indicative and may change without notice. Availability of items varies by day and season.'],
      ['Orders', 'Online ordering is not available yet. Orders are confirmed only when placed in person or over the phone.'],
      ['Contact', `For any questions about these terms, call ${BUSINESS.phone} or email ${BUSINESS.email}.`],
    ],
  },
};

export default function Legal({ type }) {
  const page = CONTENT[type];
  return (
    <main className="legal">
      <div className="container legal__inner">
        <Link to="/" className="btn btn--ghost btn--sm" style={{ marginBottom: 28 }}><ArrowLeft size={16} /> Back to home</Link>
        <h1>{page.title}</h1>
        <p className="legal__updated">{BUSINESS.name} · Sample policy for the demo website</p>
        {page.sections.map(([heading, text]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
