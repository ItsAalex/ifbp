export type MediaItem = {
  id: number;
  title: string;
  released_year: number;
  rating: number;
  genre: string[];
  type: 'movie' | 'series';
  posterUrl: string;
  description: string;
};

export type Person = {
  id: number;
  name: string;
  role: string;
  photoUrl: string;
  knownFor: string[];
};

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    released_year: 1994,
    rating: 9.3,
    genre: ['Drama'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'Two imprisoned men bond over years, finding solace and redemption.',
  },
  {
    id: 2,
    title: 'Breaking Bad',
    released_year: 2008,
    rating: 9.5,
    genre: ['Crime', 'Drama'],
    type: 'series',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
    description: 'A chemistry teacher turned methamphetamine manufacturer.',
  },
  {
    id: 3,
    title: 'The Godfather',
    released_year: 1972,
    rating: 9.2,
    genre: ['Crime', 'Drama'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'The aging patriarch of an organized crime dynasty transfers control to his son.',
  },
  {
    id: 4,
    title: 'Chernobyl',
    released_year: 2019,
    rating: 9.4,
    genre: ['Drama', 'History'],
    type: 'series',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg',
    description: 'The true story of one of the worst man-made catastrophes in history.',
  },
  {
    id: 5,
    title: 'Inception',
    released_year: 2010,
    rating: 8.8,
    genre: ['Action', 'Sci-Fi'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
  },
  {
    id: 10,
    title: 'Dune: Part Two',
    released_year: 2024,
    rating: 8.6,
    genre: ['Sci-Fi', 'Adventure'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'Paul Atreides unites with Chani and the Fremen to seek revenge.',
  },
  {
    id: 11,
    title: 'Shogun',
    released_year: 2024,
    rating: 9.0,
    genre: ['Drama', 'History'],
    type: 'series',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR0,0,67,98_AL_.jpg',
    description: "A shipwrecked English navigator becomes a samurai lord's confidant.",
  },
  {
    id: 12,
    title: 'Alien: Romulus',
    released_year: 2024,
    rating: 7.4,
    genre: ['Horror', 'Sci-Fi'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'Young colonizers face the ultimate survival horror in deep space.',
  },
  {
    id: 13,
    title: 'The Bear',
    released_year: 2024,
    rating: 8.7,
    genre: ['Drama', 'Comedy'],
    type: 'series',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: "A young chef returns home to run his family's sandwich shop.",
  },
  {
    id: 20,
    title: 'Oppenheimer',
    released_year: 2023,
    rating: 8.9,
    genre: ['Drama', 'History'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'The story of American scientist J. Robert Oppenheimer.',
  },
  {
    id: 21,
    title: 'Severance',
    released_year: 2022,
    rating: 8.7,
    genre: ['Thriller', 'Sci-Fi'],
    type: 'series',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'Employees have their memories surgically divided between work and personal life.',
  },
  {
    id: 22,
    title: 'Poor Things',
    released_year: 2023,
    rating: 8.0,
    genre: ['Comedy', 'Drama'],
    type: 'movie',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg',
    description: 'A young woman brought back to life embarks on an adventure across Europe.',
  },
];

export const trendingPeople: Person[] = [
  {
    id: 1,
    name: 'Cillian Murphy',
    role: 'Actor',
    photoUrl:
      'https://m.media-amazon.com/images/M/MV5BNWM3NTg0NGYtNTFmYS00OWY1LTlkNTgtNzZlMWY4OGRmMmEzXkEyXkFqcGc@._V1_CR1542,983,1114,1670_QL75_UX280_CR0,3,280,414_.jpg',
    knownFor: ['Oppenheimer', 'Peaky Blinders'],
  },
  {
    id: 2,
    name: 'Zendaya',
    role: 'Actress',
    photoUrl:
      'https://m.media-amazon.com/images/M/MV5BZjM5N2U3MzQtZWU5My00YzE0LThmZTgtYjE1NDJjNmIzZmIxXkEyXkFqcGc@._V1_QL75_UY414_CR16,0,280,414_.jpg',
    knownFor: ['Dune', 'Euphoria'],
  },
  {
    id: 3,
    name: 'Pedro Pascal',
    role: 'Actor',
    photoUrl:
      'https://m.media-amazon.com/images/M/MV5BZWNlYmQ3MzctNTM4OC00Mjk5LTlmM2EtNTU4MjgxMjNiZGEyXkEyXkFqcGc@._V1_QL75_UY414_CR29,0,280,414_.jpg',
    knownFor: ['The Last of Us', 'The Mandalorian'],
  },
  {
    id: 4,
    name: 'Florence Pugh',
    role: 'Actress',
    photoUrl:
      'https://m.media-amazon.com/images/M/MV5BZmIxMTFkZTctYzhkZi00MmQ4LThhYzEtMmQwMGZjNzA5MDg0XkEyXkFqcGc@._V1_QL75_UY414_CR15,0,280,414_.jpg',
    knownFor: ['Oppenheimer', 'Midsommar'],
  },
  {
    id: 5,
    name: 'Austin Butler',
    role: 'Actor',
    photoUrl:
      'https://m.media-amazon.com/images/M/MV5BYWI2MTc5YmUtMDgyOC00ZjE5LTg5MWYtMTYzNDRlOWI4OTAyXkEyXkFqcGc@._V1_QL75_UY414_CR26,0,280,414_.jpg',
    knownFor: ['Dune: Part Two', 'Elvis'],
  },
];

export const top10: MediaItem[] = mediaItems
  .filter((item) => item.rating >= 9.0)
  .sort((a, b) => b.rating - a.rating);

export const hotPicks: MediaItem[] = mediaItems
  .filter((item) => item.released_year >= 2024)
  .sort((a, b) => b.released_year - a.released_year);

export const wishlist: MediaItem[] = mediaItems.filter((item) => [20, 21, 22].includes(item.id));
