import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

import './SearchScreen.css';

export const SearchScreen = ({history}) => {
    const [heroesFiltered, setHeroesFiltered] = useState([]);

    const body = document.querySelector("body");
    body.classList.add('red-blue_BG')

    // Las dos lineas de abajo se pueden hacer simplemente desestructurando location
    const location = useLocation();
    // const {location} = useLocation();
    const {q = '' } = queryString.parse(location.search);
    
    
    const [ {searchText }, handleInputChange, reset ] = useForm({searchText: q});

    const heroesFilter = useMemo(() => getHeroesByName( q ), [q])

    heroesFilter.then( result => {
        setHeroesFiltered( result );
    } );

    // if (heroesFiltered == null) {
    //     setHeroesFiltered([]);
    //     console.log( heroesFiltered )
    // }
    
    // Cambiando el fondo sie el heroe es buueno o malo.
    // const body = document.getElementsByName("body")
    // console.log(document.body.style.backgroundImage)
    // document.body.style.backgroundImage = "url('../../assets/images/png/red_blue_BG.png')";
    // body.style.backgroundImage = "url('../../assets/images/png/red_blue_BG.png')";

    
    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${searchText}`);
        
        // console.log(searchText);
        reset();
    }


    return (
        <div>
            {/* <h1>Buscador</h1> */}

            <div className="row">
                <div className="col-md-4">

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            name="searchText"
                            placeholder="Nombre de héroe o villano"
                            className="form-control"
                            autoComplete="off"
                            value={searchText }
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            id="search"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-md-8 results">

                    {/* <h4> Resultados </h4>
                    <hr/> */}

                    {
                        (q ==='')
                            &&
                            <div className="alert alert-info">
                                Busca un personaje
                            </div>
                    }
                    {
                        (q !=='' && heroesFiltered.length === 0 )
                            &&
                            <div className="alert alert-danger">
                                No hay un nombre de personaje con "{ q }"
                            </div>
                    }

                    {
                        heroesFiltered?.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))

                    }

                </div>
            </div>

        </div>
    )
}
