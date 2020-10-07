import React from 'react'
import {identificarTransporte} from '../helpers/identificarTransporte'



export const ListaRegistros = ({cantidadPersonas, carbono, createdAt, idaVuelta, kilometros, medioDeTransporte, nombrePasajeros, puntoInicio, puntoTermino }) => {

    let transporte = identificarTransporte(medioDeTransporte)

    let fechaCreacion = new Date(createdAt);

    let fecha = fechaCreacion.getFullYear()+'-'+(fechaCreacion.getMonth()+1)+'-'+fechaCreacion.getDate();

    return (
            <tr>
                <td>{fecha}</td>
                <td>{puntoInicio}</td>
                <td>{puntoTermino}</td>
                <td>{kilometros}</td>
                <td>{transporte}</td>
                <td>{cantidadPersonas}</td>
                <td>{nombrePasajeros}</td>
                <td>{(idaVuelta === '1') ? 'VERDADERO' : 'FALSO'}</td>
                <td>{carbono}</td>
            </tr>
    )
}