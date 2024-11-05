import { heroes } from "../data/heroes";


export const getHeroesByPublisher = ( publisher ) =>{

    const validPublishers = ["DC Comics", "Marvel Comics"]

    if(!validPublishers.includes( publisher )){
        throw new Error(`Publisher ${publisher} NO es correcto`)
    }

    return heroes.filter(h => h.publisher === publisher);


  


}

