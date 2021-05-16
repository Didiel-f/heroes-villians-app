import React, { useContext } from 'react';

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Didiel'
            }
        }
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch(action);
        /* if ( lp ) {
            
            history.push(`${lp}`);
        }else{ */
            // history.push('/');
        // console.log(history);
        history.replace(lastPath);
    };

    handleLogin();

    return (

        <>
        {/* <div className="container-xl mt-5">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" placeholder="Ingrese nombre" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> */}
        
        
        
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
        </>
    )
}
