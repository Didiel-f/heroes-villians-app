import React from 'react';
import { AuthContext } from '../../components/auth/AuthContext';
const { mount } = require("enzyme");
const { AppRouter } = require("../../routers/AppRouter");
import '@testing-library/jest-dom';

describe('Pruebas en AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    
    test('should mostrar login si no está autenticado', () => {

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <AppRouter /> 
            </AuthContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot;
        
    });
    
    test('should mostrar el componente marvel si está autenticado', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true
            }
        }
        
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue } >
                <AppRouter /> 
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);

    })
    
    

})
