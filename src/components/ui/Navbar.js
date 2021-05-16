import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import logo from '../../assets/images/png/logo_hv.png'

import './Navbar.css'

export const Navbar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);

    const history = useHistory();

    const handleClick = () => {
        
        history.replace('/login');

        dispatch({
            type: types.logout,
        });


    }

    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark mb-5">
            <Link 
                className="navbar-brand logo" 
                to="/"
            >
                <img src={ logo } alt="heroes_villians" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav justify-content-between" id="Nav-content">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/Marvel Comics"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/DC Comics"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/NBC - Heroes"
                    >
                        NBCHeroes
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/George Lucas"
                    >
                        George Lucas
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/Dark Horse Comics"
                    >
                        Dark Horse Comics
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/Image Comics"
                    >
                        Image Comics
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/Star Trek"
                    >
                        Star Trek
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/Icon Comics"
                    >
                        Icon Comics
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-nowrap" 
                        exact
                        to="/publishers/ABC Studios"
                    >
                        ABC Studios
                    </NavLink>
                    


                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link btn btn-custom" 
                        exact
                        to="/search"
                    >
                        Buscador
                    </NavLink>
                
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto d-none">

                    <span className="nav-item nav-link text-info" > 
                        {name}
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleClick } 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}