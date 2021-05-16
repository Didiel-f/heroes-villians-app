import React from 'react';
import { useParams } from 'react-router';
import { HeroList } from '../heroes/HeroList';

export const Publishers = () => {
    
    const { publisher } = useParams();

    console.log( publisher );
    
    return (
        <div>
            {/* <h1 className="bg-dark text-white text-center rounded pb-2">Resultados del editor { publisher } </h1>
            <hr/> */}

            <HeroList publisher={ publisher } />
        </div>
    )
}