import { heroes } from "../data/apiHeros";


export const getHeroesByName = async(name = '') => {

    // const url = `https://superheroapi.com/api/10219804794494209/search/${ name } `

    // const result = await fetch( url )
    //                 .then( response => {
    //                     return response.json();
    //                 } )
    //                 .then( result => {
    //                     if ( result.results == null ) {
    //                         return [];
    //                     }
    //                     return result.results;
    //                 } )





    if(name === ''){
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.name.toLocaleLowerCase().includes(name) );

    // return result;



    
    // name = name.toLocaleLowerCase();
    // return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name) );
}