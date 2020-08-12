import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    // Las dos lineas de abajo se pueden hacer simplemente desestructurando location
    const location = useLocation();
    // const {location} = useLocation();
    const {q = '' } = queryString.parse(location.search);
    
    
    const [ {searchText }, handleInputChange, reset ] = useForm({searchText: q});

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])

    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${searchText}`);
        
        console.log(searchText);
        reset();
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            value={searchText }
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr/>

                    {
                        (q ==='')
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    {
                        (q !=='' && heroesFiltered.length === 0 )
                            &&
                            <div className="alert alert-danger">
                                There is not a hero name with "{ q }"
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
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
