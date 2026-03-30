const suma = (a,b) => {
    return a + b
}

// valor del Euro en Yen, Dolar y Libra:
let oneEuroIs = {
    "JPY": 200, 
    "USD": 1, 
    "GBP": 0.87,
}

//Funciones de conversion
function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

//Exportar funciones
module.exports = {suma, fromEuroToDollar, fromDollarToYen, fromYenToPound };