import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

  // const publisher = "Marvel Comics"

  return (
    <div>
      <h1 className='h1-principal'>Marvel Comics</h1>
      <hr/>
       <HeroList publisher="Marvel Comics" />
    </div>
  )
}
