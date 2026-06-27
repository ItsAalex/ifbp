import Image from 'next/image';
import { Search, BookmarkPlus, Star } from 'lucide-react';
import Link from 'next/link';

import { top10, hotPicks, wishlist, trendingPeople, MediaItem, Person } from './data/dummy';

// ── Reusable card components ──────────────────────────────────────────────────

function MediaCard({ item, rank }: { item: MediaItem; rank?: number }) {
  return (
    <div className="media-card">
      {rank && <span className="rank-badge">#{rank}</span>}
      <div className="media-card-poster">
        <Image src={item.posterUrl} alt={item.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="media-card-info">
        <span className="media-type-badge">{item.type === 'movie' ? 'Film' : 'Serija'}</span>
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

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="person-card">
      <div className="person-avatar">
        <Image src={person.photoUrl} alt={person.name} fill style={{ objectFit: 'cover' }} />
      </div>
      <h4 className="person-name">{person.name}</h4>
      <p className="person-role">{person.role}</p>
      <p className="person-known">{person.knownFor.join(' · ')}</p>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            ifbp
          </Link>
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search for movies, tv shows, actors..." />
          </div>
          <nav className="header-nav">
            <a href="/wishlist" className="nav-text watchlist-link" title="Watchlist">
              <BookmarkPlus size={18} />
              <span>Watchlist</span>
            </a>
            <a href="/login" className="nav-text login-btn">
              Sign in
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to ifbp</p>
          <h1 className="hero-title">The Movie Encyclopedia for You</h1>
          <p className="hero-sub">Rate, save, and discover movies and TV shows worth watching.</p>
          <a href="#hot-picks" className="hero-cta">
            Explore now
          </a>
        </div>
        <div className="hero-glow" />
      </section>

      <main className="main-content">
        {/* HOT PICKS */}
        <section id="hot-picks" className="content-section">
          <SectionHeader
            title="Hot Picks"
            subtitle="The latest movies and TV shows everyone's watching."
          />
          <div className="cards-row">
            {hotPicks.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* TOP 10 */}
        <section className="content-section">
          <SectionHeader
            title="Top 10"
            subtitle="The highest-rated movies and TV shows of all time"
          />
          <div className="cards-row">
            {top10.map((item, index) => (
              <MediaCard key={item.id} item={item} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* TRENDING PEOPLE */}
        <section className="content-section">
          <SectionHeader title="Trending Actors" subtitle="Trending Actors This Month" />
          <div className="people-row">
            {trendingPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        {/* WISHLIST */}
        <section className="content-section">
          <SectionHeader title="My List" subtitle="Movies and TV Shows You've Saved to Watch" />
          <div className="cards-row">
            {wishlist.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>
          © 2026 <strong>ifbp</strong> — All rights reserved.
        </p>
      </footer>
    </div>
  );
}
