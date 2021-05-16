// import { heroes } from "../data/heroes";


export const getHeroesByName = async(name = '') => {

    // const accessToken = 10219804794494209;
    const url = `https://superheroapi.com/api/10219804794494209/search/${ name } `

    const result = await fetch( url )
                    .then( response => {
                        return response.json();
                    } )
                    .then( result => {
                        if ( result.results == null ) {
                            return [];
                        }
                        return result.results;
                    } )

                    // console.log(result)




    if(name === ''){
        return [];
    }

    return result;


    // name = name.toLocaleLowerCase();
    // return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name) );
}