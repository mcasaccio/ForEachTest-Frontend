import Swal from 'sweetalert2';

import { types } from '../types/types';
import { simpleFetch } from '../helpers/fetch'



export const enviarForm = (data) => {
    return async (dispatch, getState) => {



        try {
            dispatch(viajes(data));
            await simpleFetch('viajes', data, 'POST')
            Swal.fire('Excelente', 'Datos enviados correctamente', 'success')

        } catch (error) {
            console.log(error)
        }



    }
}

export const verRegistroViajes = () => {
    return async (dispatch) => {

        try {
            const resp = await simpleFetch('viajes', {}, 'GET')
            const body = await resp.json();
            dispatch( cargarViajes(body) )

        } catch (error) {
            console.log(error)
        }



    }
}



const viajes = (infoPasajeros) => ({
    type: types.form,
    payload: infoPasajeros
});

const cargarViajes = (viajes) => ({
    type: types.cargarViajes,
    payload: viajes
});