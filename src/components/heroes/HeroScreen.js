import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import  logoCarga  from '../../assets/images/gifs/heroes-villians.gif';

import './HeroScreen.css';

export const HeroScreen = ({history}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState({})

    const {heroeId} = useParams();

    const data = useMemo(() => getHeroById(heroeId) , [heroeId]);

    data.then( response => {
        setHero( response )
    } )
    
    // console.log('Hero: ', hero, 'heroeId: ', heroeId );

    // if(!hero){
        //     return <Redirect to="/" />;
        // }

        const handleReturn = () => {
            
            if( history.length <=2 ){
                history.push("/");
        }else{
            history.goBack();
        }
        
    }
    
    const {
        name,
        biography = "",
        appearance = "",
        work,
        connections,
        image,
        powerstats
    } = hero;

    useEffect(() => {
        if ( powerstats ) {
            setIsLoading( false );

            // Cambiando el fondo sie el heroe es buueno o malo.
            const body = document.querySelector("body");
            if ( biography.alignment === "good" ) {
                body.classList.add('good_BG')
                body.classList.remove('bad_BG')
                body.classList.remove('red-blue_BG')
            } else if ( biography.alignment === "bad" ) {
                body.classList.add('bad_BG')
                body.classList.remove('good_BG')
                body.classList.remove('red-blue_BG')
            };
        }
    }, [ powerstats, biography.alignment ])
        
    if ( isLoading ) {
        return (
            <div className="text-center font-italic">
                <h1>CARGANDO</h1>
                <img className="img-fluid" src={ logoCarga } alt="logo de carga"/>
            </div>
        );
    }

    
    

    // Haciendo los graficos con las estadísticas de poder.
    // console.log(ancho)

    const intelligence = document.getElementById("intelligence");
    
    if ( intelligence ) {

        // INTELLIGENCE
        const anchoIntelligence = `${ powerstats.intelligence }%`;
        const intelligence = document.getElementById("intelligence");

        intelligence.style.setProperty('--widthEnd', `${ parseInt(powerstats.intelligence) - 1 }%`);
        
        intelligence.style.backgroundColor = 'cyan';
        intelligence.style.width = anchoIntelligence;

        // if( powerstats.intelligence === "10" || powerstats.intelligence === "11" ) {
        //     intelligence.style.fontSize = "14px";
        // }
        
        
        // STRENGTH
        const anchoStrength = `${ powerstats.strength }%`;
        const strength = document.getElementById("strength");

        strength.style.setProperty('--widthEnd', `${ parseInt( powerstats.strength ) - 1 }%`);
        
        strength.style.backgroundColor = 'yellow';
        strength.style.width = anchoStrength;

        // if( powerstats.strength === "10" || powerstats.strength === "11" ) {
        //     strength.style.fontSize = "14px";
        // }
        
        
        // SPEED
        const widthSpeed = `${ powerstats.speed }%`;
        const speed = document.getElementById("speed");

        speed.style.setProperty('--widthEnd', `${ parseInt( powerstats.speed ) - 1 }%`);
        
        speed.style.backgroundColor = 'chartreuse';
        speed.style.width = widthSpeed;

        // if( powerstats.speed === "10" || powerstats.speed === "11" ) {
        //     speed.style.fontSize = "14px";
        // }
        
        
        // durability
        const widthDurability = `${ powerstats.durability }%`;
        const durability = document.getElementById("durability");

        durability.style.setProperty('--widthEnd', `${ parseInt( powerstats.durability ) - 1 }%`);
        
        
        durability.style.backgroundColor = 'magenta';
        durability.style.width = widthDurability;

        // if( powerstats.durability === "10" || powerstats.durability === "11" ) {
        //     durability.style.fontSize = "14px";
        // }

        
        // durability
        const widthPower = `${ powerstats.power }%`;
        const power = document.getElementById("power");
        
        power.style.setProperty('--widthEnd', `${ parseInt( powerstats.power ) - 1 }%`);
        
        power.style.backgroundColor = 'red';
        power.style.width = widthPower;

        // if( powerstats.power === "10" || powerstats.power === "11" ) {
        //     power.style.fontSize = "14px";
        // }

        
        // combat
        const widthCombat = `${ powerstats.combat }%`;
        const combat = document.getElementById("combat");

        combat.style.setProperty('--widthEnd', `${ parseInt( powerstats.combat ) - 1 }%`);
        
        combat.style.backgroundColor = 'SkyBlue';
        combat.style.width = widthCombat;

        // if( powerstats.combat === "10" || powerstats.combat === "11" ) {
        //     combat.style.fontSize = "14px";
        // }
    };




    return (
        <div className="row mt-5">
            <div className="col-md-4 container-img-powerstats">
                <img 
                    src={ image?.url }
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft hero-picture"
                />

                {
                    powerstats.intelligence !== "null" && (
                        
                        <div className="card text-white bg-dark mt-3 mb-3" >
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-md-5 col-sm-5 col-5 powerstats-title">
                                        <p>intelligence</p>
                                        <p>strength</p>
                                        <p>speed</p>
                                        <p>durability</p>
                                        <p>power</p>
                                        <p>combat</p>
                                    </div>
                                    
                                    <div className="col-md-7 col-sm-7 col-7 powerstats-bar-container">
                                        <div className="powerstats-bar" id="intelligence"> <b> { powerstats?.intelligence } </b> </div>

                                        <div className="powerstats-bar" id="strength"> <b> { powerstats?.strength } </b> </div>

                                        <div className="powerstats-bar" id="speed"> <b> { powerstats?.speed } </b> </div>

                                        <div className="powerstats-bar" id="durability"> <b> { powerstats?.durability } </b> </div>

                                        <div className="powerstats-bar" id="power"> <b> { powerstats?.power } </b> </div>

                                        <div className="powerstats-bar" id="combat"> <b> { powerstats?.combat } </b> </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    )
                }

            </div>

            
            <div className="col-md-8 animate__animated animate__fadeIn container">
                <div className="card text-white bg-dark mb-3">
                    <ul className="list-group list-group-flush">
                        <div className="card-header"><h1>{name}</h1></div>
                        <div className="card-body">
                            <h5 className="card-title">Biografía</h5>
                            <li className="list-group-item card-text"> <b> Alter ego: </b> { biography["alter-egos"] } </li>
                            <li className="list-group-item card-text"> <b> Publisher: </b> { biography?.publisher } </li>
                            <li className="list-group-item card-text"> <b> First appearance: </b> { biography["first-appearance"] } </li>
                            <li className="list-group-item card-text"> <b> Pseudónimos: </b> { biography.aliases } </li>
                            <li className="list-group-item card-text"> <b> Lugar de nacimiento: </b> { biography["place-of-birth"] } </li>
                            <li className="list-group-item card-text"> <b> Personajes </b> { biography["full-name"] } </li>

                            <h5 className="card-title">Apariencia</h5>
                            <li className="list-group-item card-text"> <b> Género: </b> { appearance.gender } </li>
                            <li className="list-group-item card-text"> <b> Raza: </b> { appearance.race } </li>
                            <li className="list-group-item card-text"> <b> Altura: </b> { appearance.height[1] } </li>
                            <li className="list-group-item card-text"> <b> Peso: </b> { appearance.weight[1] } </li>
                            <li className="list-group-item card-text"> <b> Color de ojos: </b> { appearance["eye-color"] } </li>
                            <li className="list-group-item card-text"> <b> Color de cabello: </b> { appearance["hair-color"] } </li>

                            <h5 className="card-title">Trabajo</h5>
                            <li className="list-group-item card-text"> <b> Ocupación: </b> { work?.occupation } </li>
                            <li className="list-group-item card-text"> <b> Base: </b> { work?.base } </li>

                            <h5 className="card-title">Conexiones</h5>
                            <li className="list-group-item card-text"> <b> Grupos afiliados: </b> { connections?.["group-affiliation"] } </li>
                            <li className="list-group-item card-text"> <b> Parientes: </b> { connections?.relatives } </li>
                        </div>
                    </ul>

                    <button 
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Regresar
                    </button>
                </div>
            </div>

        </div>
    )
}


