import React from 'react';
import { Link } from 'react-router-dom';


export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <>
<div className="card h-100 custom-card-body">
    <div className='text-card'>
        <h3 className='card-title publisher text-center'>{publisher}</h3>
        <h5 className="card-title text-center">{superhero}</h5>
        <p className="card-text text-center">{alter_ego}</p>
        {alter_ego !== characters && <p className="card-text">{characters}</p>}
        <p>First Appearance:</p><small className='small-card-body'>{first_appearance}</small>
    </div>
        <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img-bottom hero-image"
            alt={superhero}
        />
        
            <Link className='custom-link' to={`/heroe/${ id }`}>
                Mas...
            </Link>
     
       
</div>
    </>
  );
};
