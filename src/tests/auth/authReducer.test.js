const { authReducer } = require("../../components/auth/authReducer");
const { types } = require("../../components/types/types");



describe('Pruebas en authReducer', () => {
    
    
    test('debe retornar el estado por defecto', () => {
        
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });
    
    test('should autenticar y colocar el name del usuario', () => {
            
        const action = {
            type: types.login,
            payload: {
                name: 'Didiel'
            }
        }

        const state = authReducer({ odcvs:'asdasd'}, action );
        
        expect(state).toEqual({
            name: 'Didiel',
            logged: true
        });
        
    });
    
    test('should borrar el name del usuario y el logged en false', () => {
        
        
        const action = {
            type: types.logout,
            payload: {
                name: 'Didiel'
            }
        }
    
        const user = authReducer({ odcvs:'asdasd'}, action );
        
        expect(user).toEqual({
            logged: false
        });
    }); 
    
});
