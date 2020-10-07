export const identificarTransporte = (medioDeTransporte) => {
    let transporte = Number(medioDeTransporte)
    let medioSeleccionado = ''

    switch (transporte) {
        case 0.021:
            return medioSeleccionado = "Auto (Gasolina)"
        case 0.249:
            return medioSeleccionado = "Camioneta (Diésel)"
        case 0.092:
            return medioSeleccionado = "Motocicleta (Gasolina)"
        case 0.039:
            return medioSeleccionado = "Bus Transantiago (Transporte público)"
        case 0.012:
            return medioSeleccionado = "Bus (Vehículo privado)"
        case 0.279:
            return medioSeleccionado = "Avión (Chile)"
        case 0.179:
            return medioSeleccionado = "Avión (Internacional)"
        case 0:
            return medioSeleccionado = "Caminando"

        default:
            medioSeleccionado = "Caminando"
    }

    return medioSeleccionado
}