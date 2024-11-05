import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  // const heroes = getHeroesByPublisher(publisher);

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row animate__animated animate__fadeIn">
      {heroes?.map((hero) => (
        <div key={hero.id} className="col-sm-6 col-md-4 mb-3 d-flex">
          <div className="card h-100" style={{ maxWidth: 270 }}>
            <HeroCard {...hero} />
          </div>
        </div>
      ))}
    </div>
  );
};
