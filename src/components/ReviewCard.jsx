import { memo } from 'react';
import { Quote, Star } from 'lucide-react';

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <Quote className="review-card__quote" size={34} aria-hidden="true" />
      <div className="review-card__stars" aria-label={`Rated ${review.rating} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} fill={i < review.rating ? 'currentColor' : 'none'} aria-hidden="true" />
        ))}
      </div>
      <p className="review-card__text">“{review.text}”</p>
      <footer className="review-card__author">
        <span className="review-card__avatar" aria-hidden="true">{review.initials}</span>
        <div>
          <strong>{review.name}</strong>
          <span>Verified visitor</span>
        </div>
      </footer>
    </article>
  );
}

export default memo(ReviewCard);
