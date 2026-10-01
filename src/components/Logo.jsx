export default function Logo({ size = 40 }) {
  return (
    <span className="logo" aria-label="Gupta Sweets">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill="var(--primary)" />
        <circle cx="32" cy="35" r="15" fill="var(--accent)" />
        <circle cx="27" cy="30" r="5" fill="#fff" opacity=".45" />
        <path d="M30 15q2-6 4 0" stroke="#7FB069" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <span className="logo__text">
        <strong>Gupta</strong> Sweets
      </span>
    </span>
  );
}
