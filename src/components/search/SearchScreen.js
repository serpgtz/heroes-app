import React, {useMemo} from 'react'
import  queryString  from "query-string";
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../Hook/UseForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

  console.log(history)

  const location = useLocation();
  // console.log(location.search)
  // console.log( queryString.parse( location.search))

  const { q = "" } = queryString.parse( location.search)// se pone ifual a"" para que no de un error al ser undefine

  console.log(q)

  

  const[ values, handleInputChange, reset] = useForm({
    searchText:q
  })

  const { searchText} = values

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])



  const navigate = useNavigate()

  



  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`); // Usa navigate en lugar de history.push
    
 
  }

  const handleReset = (e) => {
    e.preventDefault()
    reset()
    navigate("?q=");
  }

  return (
    <div>
        <h1>Search</h1>
        <hr />

        <div className='row'>
            <div className='col-5'>
              <h4> Search Form </h4>
              <hr />

              <form onSubmit={handleSearch}>
                <input
                type='text'
                name='searchText'
                value={searchText}
                onChange={handleInputChange}
                placeholder='"find your Hero' 
                className='form-control'
                autoComplete='off'/>
                <button 
                type='submit'
                className='btn m-1 btn-block btn-outline-primary'>

                  Search...
                </button>
                <button className='btn m-1 btn-block btn-outline-secondary'
                onClick={handleReset}>
                  Reset
                </button>
               
              </form>
               

            </div>

            <div className='col-7'>
            
              <h4>Results</h4>
              <hr />

              {
                (q === "")
                && 
                <div className='alert alert-info'>
                  Search a Hero
                </div>
              }
              {
                (q !=="" && heroesFiltered.length === 0)
                && 
                <div className='alert alert-danger'>
                  There is no a hero with {q}
                </div>
              }
              <div className='row'>
                {
                    heroesFiltered.map( hero => (
                      <div className='card-search'>
                      <HeroCard 
                      key={hero.id}
                      {...hero}
                      />
                      </div>
                    ))
                    
                }
                </div>
                
            </div>
        </div>
    </div>


  )
}
