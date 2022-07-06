ingresarDatos()
function ingresarDatos() {
    let valor = parseInt(prompt(`Ingrese el valor del producto que desea comprar:`))
    let cuotas = parseInt(prompt(`¿En cuántas cuotas va a pagar? (3, 6, 12)`))
    while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
        alert(`Por favor, ingrese una opción válida`)
        cuotas = parseInt(prompt(`¿En cuántas cuotas va a pagar? (3, 6, 12)`))
    }
    let codigo = prompt(`Si tiene un código de descuento, puede ingresarlo:`)
    let pct = calPorcentaje(codigo)
    let precioFinal = calPrecioFinal(valor, pct, cuotas)
    mostrar(codigo, valor, pct, precioFinal, cuotas)
}

function calPrecioFinal(valor, pct, cuotas) {
    let precioFinal = valor / (1 + pct / 100) / cuotas + (cuotas * 125)
    return precioFinal.toFixed(2)
}

function calPorcentaje(codigo) {
    switch (codigo) {
        case "deluxe":
            return 25
        case "premium":
            return 15
        case "offer":
            return 10
        default:
            return 1
    }
}

function mostrar(codigo, valor, pct, precioFinal, cuotas) {
document.getElementById("resultado").innerHTML=`Con el código "${codigo}", el producto seleccionado ($${valor}) recibe un descuento del ${pct}%. Total a pagar: $${precioFinal} en ${cuotas} cuotas.`
}
