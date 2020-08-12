const { MemoryRouter, Route } = require("react-router-dom");
const { mount } = require("enzyme");
import React from 'react'
import { SearchScreen } from '../../../components/search/SearchScreen';



describe('Pruebas en SearchScreen', () => {



    test('should mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']} >
                <Route path='/search' component={ SearchScreen } /> 
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');
    });
    


    test('should mostrar a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batman']} >
                <Route path='/search' component={ SearchScreen } /> 
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value') ).toBe('Batman');
    });




    test('should mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=bkala']} >
                <Route path='/search' component={SearchScreen} />
            </MemoryRouter>
         ); 

         expect(wrapper.find('.alert-danger').text().trim() ).toBe('There is not a hero name with "bkala"');
    })
    


    test('should llamar el push del history', () => {
       
        const historyMock={
            push: jest.fn()
        }

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=Bat']} >
                <Route
                    path='/search'
                    component={ () => <SearchScreen history={historyMock} /> }
                />
            </MemoryRouter>
        );

        

        wrapper.find('input').simulate('change', {
            target: { 
                name: 'searchText',
                value: 'Bat'
            }
        });

        const e = {
            preventDefault: jest.fn()
        }

        wrapper.find('form').simulate('submit', e);

        expect( historyMock.push ).toHaveBeenCalledWith('?q=Bat');

    });
    





    
});

