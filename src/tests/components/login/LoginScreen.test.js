import React from 'react'
import { mount } from 'enzyme';
import { MemoryRouter, Router, Route } from 'react-router-dom';

import { AuthContext } from '../../../components/auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../components/types/types';


describe('Pruebas en <LoginScreen />', () => {

    const historyMock = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn()
    }

    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue } >
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    );
    
    afterEach( () => {
        jest.clearAllMocks();
    });


    
    test('should mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    
    test('should realizar el dispatch y la navegación', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Didiel'
            }
        });

        
        expect( historyMock.replace ).toHaveBeenCalledWith('/');
        
        localStorage.setItem('lastPath', '/dc' );
        handleClick();  
        
        expect( historyMock.replace ).toHaveBeenCalledWith('/dc');
    });
    
});
