import Image from 'next/image';
import { Star } from 'lucide-react';

import { MediaItem } from '../data/dummy';

export function MediaCard({
  item,
  rank,
  priority = false,
}: {
  item: MediaItem;
  rank?: number;
  priority?: boolean;
}) {
  return (
    <div className="media-card">
      {rank && <span className="rank-badge">#{rank}</span>}
      <div className="media-card-poster">
        {/* loading - load image immediately, priority - start download image before starts rendering page */}
        <Image
          src={item.posterUrl}
          alt={item.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="205px"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      <div className="media-card-info">
        <span className="media-type-badge">{item.type === 'movie' ? 'Movie' : 'TV Show'}</span>
        <h3 className="media-card-title">{item.title}</h3>
        <div className="media-card-meta">
          <span className="rating">
            <Star size={12} fill="currentColor" />
            {item.rating}
          </span>
          <span className="year">{item.released_year}</span>
        </div>
        <div className="genre-tags">
          {item.genre.map((g) => (
            <span key={g} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
