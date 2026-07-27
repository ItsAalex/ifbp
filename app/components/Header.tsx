import { Search, BookmarkPlus } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
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
  );
}
