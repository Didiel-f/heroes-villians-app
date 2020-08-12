const { mount } = require("enzyme");
import React from 'react';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../components/auth/AuthContext';

describe('Pruebas en DashboardRoutes', () => {

    test('should mostrarse correctamente', () => {

        const contextValue = { 
            dispatch: jest.fn(),
            user: {
                name: 'Ale'
            }
        }


        

        const wrapper = mount(

            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <DashboardRoutes /> 
                </MemoryRouter>
            </AuthContext.Provider>
    
        );
        // console.log(wrapper.find('span').at(0).text().trim());
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('span').text().trim() ).toBe('Ale');

            
    })
    
    
})
