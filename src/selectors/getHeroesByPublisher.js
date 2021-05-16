import { heroes } from "../data/apiHeros";

 export const getHeroesByPublisher = async(publisher) => {



    // let data = []
    // console.log("INICIO DE PROCESO")
    // for (let index = 1; index < 731; index++) {
    //     const url = `https://superheroapi.com/api/10219804794494209/${ index } `

    //     const resp = await fetch( url );
    //     const result = await resp.json();

    //     data.push(result)
        
    // }


    const validPublishers = ['DC Comics', 'Marvel Comics', 'NBC - Heroes', 'George Lucas', 'Dark Horse Comics', 'Image Comics', 'Star Trek', 'Icon Comics', 'ABC Studios'];

    if ( !validPublishers.includes( publisher ) ){
        throw new Error(`Publisher "${ publisher }" no es correcto `);
    }

    const h = heroes.filter( hero => hero.biography["publisher"] === publisher );
    return h
    // return heroes.filter( hero => hero.biography["publisher"] === publisher );

}