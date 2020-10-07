import { types } from '../types/types'



export const formReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        
        case types.form:
            return {
                ...state,
                ...action.payload,
            }

        case types.cargarViajes:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }

}