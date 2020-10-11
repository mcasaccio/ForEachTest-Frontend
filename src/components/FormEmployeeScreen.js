import React from 'react'

import { useDispatch } from 'react-redux'
import { calcularCarbono } from '../helpers/calcularCarbono'

import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import { enviarForm } from '../actions/enviarForm'

export const FormEmployeeScreen = () => {

    const dispatch = useDispatch();
   


    const [formEmployeeValues, handleEmployeeInputChange] = useForm({
        puntoInicio: '',
        puntoTermino: '',
        kilometros: '0',
        idaVuelta: '',
        cantidadPersonas: '',
        nombrePasajeros: '',
        medioDeTransporte: '',
    });


    const { puntoInicio, puntoTermino, kilometros, idaVuelta, cantidadPersonas, medioDeTransporte, nombrePasajeros } = formEmployeeValues

    const handleEmployee = (e) => {
        e.preventDefault();

        if (!puntoInicio) {
            return Swal.fire('Error', 'Ingrese un punto de inicio', 'error')
        }
        if (!puntoTermino) {
            return Swal.fire('Error', 'Ingrese un punto de término', 'error')
        }
        if (kilometros < 1) {
            return Swal.fire('Error', 'Ingrese un número superior de kilómetros', 'error')
        }
        if (!idaVuelta) {
            return Swal.fire('Error', 'Seleccione si el recorrido es ida y vuelta', 'error')
        }
        if (!cantidadPersonas) {
            return Swal.fire('Error', 'Seleccione la cantidad de pasajeros', 'error')
        }
        if (!medioDeTransporte) {
            return Swal.fire('Error', 'Seleccione el medio de transporte a utilizar', 'error')
        }
        if (!nombrePasajeros) {
            return Swal.fire('Error', 'Indique el nombre de los pasajeros', 'error')
        }



        if (puntoInicio && puntoTermino && kilometros && idaVuelta && cantidadPersonas && medioDeTransporte && nombrePasajeros) {

            let carbono = calcularCarbono(medioDeTransporte, kilometros, idaVuelta, cantidadPersonas)
            dispatch( enviarForm({ ...formEmployeeValues, carbono }) )

        }
        

    }



    return (
        <form onSubmit={handleEmployee}>


            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Punto de inicio"
                    name="puntoInicio"
                    onChange={handleEmployeeInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Punto de termino"
                    name="puntoTermino"
                    onChange={handleEmployeeInputChange}
                />
            </div>

            <div className="form-group">
                <label>Kilometros recorridos: {kilometros > 0 && kilometros} </label>
                <input
                    type="range"
                    className="form-control-range"
                    name="kilometros"
                    min="0"
                    max="200"
                    value={kilometros}
                    onChange={handleEmployeeInputChange}
                />
            </div>


            <div className="form-group">
                <label>El recorrido es ida y vuelta?</label>
                <select className="form-control" name="idaVuelta" onChange={handleEmployeeInputChange} >
                    <option value="" defaultValue>Seleccione una opción</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                </select>
            </div>


            <div className="form-group">
                <label>Cantidad de empleados en el viaje:</label>
                <select className="form-control" name="cantidadPersonas" onChange={handleEmployeeInputChange} >
                    <option value="" defaultValue>Seleccionar cantidad</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6 personas</option>
                    <option value="7">7 personas</option>
                    <option value="8">8 personas</option>
                    <option value="9">9 personas</option>
                    <option value="10">10 personas</option>
                    <option value="12">12 personas</option>
                    <option value="13">13 personas</option>
                    <option value="14">14 personas</option>
                    <option value="15">15 personas</option>
                    <option value="16">16 personas</option>
                    <option value="17">17 personas</option>
                    <option value="18">18 personas</option>
                    <option value="19">19 personas</option>
                    <option value="20">20 personas</option>
                </select>
            </div>

            { cantidadPersonas &&
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Indique sus nombres"
                        name="nombrePasajeros"
                        onChange={handleEmployeeInputChange}
                    />
                </div>
            }

            <div className="form-group">
                <label>Medio de transporte requerido:</label> {medioDeTransporte && <strong>${medioDeTransporte} [kgCO2/km]</strong>}
                <select className="form-control" name="medioDeTransporte" onChange={handleEmployeeInputChange} >
                    <option value="" defaultValue>Seleccionar transporte</option>
                    <option value="0.033">Metro (Tren, Subway, Subterráneo)</option>
                    <option value="0.021">Auto (Gasolina)</option>
                    <option value="0.249">Camioneta (Diésel) </option>
                    <option value="0.092">Motocicleta (Gasolina) </option>
                    <option value="0.039">Bus Transantiago (Transporte público) </option>
                    <option value="0.012">Bus (Vehículo privado) </option>
                    <option value="0.279">Avión (Chile) </option>
                    <option value="0.179">Avión (Internacional) </option>
                    <option value="0">Caminando</option>
                </select>
            </div>

            <div className="form-group">
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Enviar datos"
                    onChange={handleEmployeeInputChange} />
            </div>
        </form>
    )
}
