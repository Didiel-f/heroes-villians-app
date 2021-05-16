import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './HeroCard.css';

export const HeroCard = ({
    id,
    name,
    biography,
    // first_appearance,
    characters,
    image
}) => {

    
    
    return (
        <Link to={`/hero/${id}`} className="my-card text-left">
            <LazyLoadImage src={ image.url } effect="blur" className="img img-responsive" alt={name}/>
            <div className="profile-name">{name}</div>
            <div className="profile-position">{ biography["alter-ego"] }</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{ biography["publisher"]}</h3>
                            <p>Primera aparición: <br />{ biography["first-appearance"]}</p>
                            {
                                (biography["alter-ego"] !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
