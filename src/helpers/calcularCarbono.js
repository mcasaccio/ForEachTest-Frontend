export const calcularCarbono = (medioDeTransporte, kilometros, idaVeulta, cantidadPersonas) => {
    let resultado = ''
    const a = Number(medioDeTransporte)
    const b = Number(kilometros)
    const c = Number(idaVeulta)
    const d = Number(cantidadPersonas)

    resultado = a * b * c * d

    return resultado
}