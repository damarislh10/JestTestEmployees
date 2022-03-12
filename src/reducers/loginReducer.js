import {types} from '../types/types';

const action = {   
    type:'hola', 
    payload:{
        id:1,
        displayname:''
    }
    
}

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:

        return{
            id: action.payload.id,
            displayname: action.payload.displayname
        }
        case types.logout:
            return {}

        default:
          return state;
    }
}