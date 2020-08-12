import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
const { mount } = require("enzyme");
import '@testing-library/jest-dom'

const { Navbar } = require("../../../components/ui/Navbar");
import { AuthContext } from '../../../components/auth/AuthContext';
import { types } from '../../../components/types/types';


describe('Pruebas em Navbar', () => {
    
    const historyMock = {
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn(),
        location: {}
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Didiel'
        }
    }

    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar /> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    afterEach( () => {
        jest.clearAllMocks();
    } );
    
    test('should mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim() ).toBe(contextValue.user.name);
    });



    test('should llamar el logout y usar el history', () => {
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith( { type: types.logout} );
        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    });
    
    

});

