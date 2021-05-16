// import { heroes } from "../data/heroes";

 export const getHeroById = async(id) => {


    const url = `https://superheroapi.com/api/10219804794494209/${ id } `

    const resp = await fetch( url );
    const result = await resp.json();
    return result;

    // return heroes.find( hero => hero.id === id );

}