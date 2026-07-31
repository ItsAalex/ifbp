import { top10, hotPicks, wishlist, trendingPeople } from './data/dummy';
import { MediaCard } from './components/MediaCard';
import { PersonCard } from './components/PersonCard';
import { SectionHeader } from './components/SectionHeader';

export default function Home() {
  return (
    <div className="page-wrapper">
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
              <MediaCard key={item.id} item={item} priority={true} />
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
    </div>
  );
}
