import React, { useMemo, useState } from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import './HeroList.css';

export const HeroList = ({ publisher }) => {
    const [data, setData] = useState([]);

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    heroes.then( response => {
        setData( response )
    } );

    const body = document.querySelector("body");
    body.classList.add('red-blue_BG')
    
    return (
        <div className="animate__animated animate__fadeIn text-center">
            {
                data.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        { ...hero }
                        
                    />
                ))
            }
        </div>
    )
}
