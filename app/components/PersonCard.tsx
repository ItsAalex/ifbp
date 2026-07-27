import Image from 'next/image';
import Link from 'next/link';

import { Person } from '../data/dummy';

export function PersonCard({ person }: { person: Person }) {
  return (
    <Link key={person.id} href={`/persons/${person.name}`}>
      <div className="person-card">
        <div className="person-avatar">
          <Image
            src={person.photoUrl}
            alt={person.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="205px"
          />
        </div>
        <h4 className="person-name">{person.name}</h4>
        <p className="person-role">{person.role}</p>
        <p className="person-known">{person.knownFor.join(' · ')}</p>
      </div>
    </Link>
  );
}
