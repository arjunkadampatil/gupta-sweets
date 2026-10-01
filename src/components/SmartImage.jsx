import { useState } from 'react';

// Lazy-loaded image that shows a shimmering skeleton until the file has loaded,
// and a soft fallback if it fails.
export default function SmartImage({ src, alt, className = '', ratio = '4 / 3', eager = false }) {
  const [status, setStatus] = useState('loading');

  return (
    <div className={`smart-image ${className}`} style={{ aspectRatio: ratio }} data-status={status}>
      {status !== 'loaded' && <span className="skeleton smart-image__placeholder" aria-hidden="true" />}
      {status === 'error' ? (
        <span className="smart-image__fallback">Image unavailable</span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  );
}
