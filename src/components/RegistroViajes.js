import React, { useEffect } from 'react'
import { verRegistroViajes } from '../actions/enviarForm'

import { useDispatch, useSelector } from 'react-redux'

import { ListaRegistros } from './ListaRegistros'



export const RegistroViajes = () => {
    const dispatch = useDispatch();

    const { viajes } = useSelector(state => state.form)

    useEffect(() => {

        dispatch(verRegistroViajes())

    }, [dispatch])



    return (

        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Punto Inicio</th>
                    <th scope="col">Punto Termino</th>
                    <th scope="col">Kilometros</th>
                    <th scope="col">Medio de transporte</th>
                    <th scope="col">Cantidad Personas</th>
                    <th scope="col">Pasajeros</th>
                    <th scope="col">Ida y vuelta?</th>
                    <th scope="col">Contaminación</th>
                </tr>
            </thead>
            <tbody>
                {viajes ? viajes.map(viaje => <ListaRegistros {...viaje} key={viaje._id} />) : 'Cargando...'}
            </tbody>
        </table>


    )

}