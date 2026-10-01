// Reusable placeholder shapes shown while content or images are loading.
export function SkeletonBlock({ width = '100%', height = 16, radius = 14, style }) {
  return <span className="skeleton" style={{ display: 'block', width, height, borderRadius: radius, ...style }} aria-hidden="true" />;
}

export function ProductCardSkeleton() {
  return (
    <div className="product-card product-card--skeleton" aria-hidden="true">
      <SkeletonBlock height={190} radius={18} />
      <div style={{ padding: '18px 4px 4px', display: 'grid', gap: 10 }}>
        <SkeletonBlock width="40%" height={12} />
        <SkeletonBlock width="70%" height={20} />
        <SkeletonBlock height={12} />
        <SkeletonBlock width="85%" height={12} />
      </div>
    </div>
  );
}

export default function SkeletonLoader({ count = 6, variant = 'product' }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) =>
        variant === 'product' ? <ProductCardSkeleton key={i} /> : <SkeletonBlock key={i} height={220} radius={20} />
      )}
    </>
  );
}
