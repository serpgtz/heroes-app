import React, { useMemo } from 'react'
import {  Navigate,  useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

  const { heroeId } = useParams();
  


  // const hero = getHeroById(heroeId)

  
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);


  const navigate = useNavigate()

  if(!hero){
    return <Navigate to="/" replace />;
  }

  console.log(hero)

  const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
  } = hero;


  const handleClick = () => {

    if(window.history.length <= 2){
      navigate("/")
    }else {
      navigate(-1)
    }

    
  }

  return (
    <div className='row mt-5'>
        <div className='col-4'>
            <img
              src={`../assets/heroes/${ id}.jpg`}
              alt={superhero}
              className='img-thumbnail animate__animated animate__fadeInDownBig'
              />
        </div>
        <div className='col-8'>
          <h1 className='superhero'>{superhero}</h1>
          <ul className='list-group list-group-flush'>
              <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
              <li className='list-group-item'><b>publisher: </b>{publisher}</li>
              <li className='list-group-item'><b>first_appearance: </b>{first_appearance}</li>
          </ul>

          <h5>Characters</h5>
          <p className='characters-p'>{characters}</p>

          <button className='btn btn-outline-info animate__animated animate__fadeInLeft'
                  onClick={handleClick}>Return</button>

        </div>

    </div>
  )
}
