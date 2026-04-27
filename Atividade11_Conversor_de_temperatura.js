function converterCelsius (celsius, unidade){

    if (unidade === "F"){
        const fahrenheit = celsius * 1.8 + 32
        return fahrenheit.toFixed(2)    
    }
    else if (unidade === "K"){
        const kelvin = celsius + 273.15
        return kelvin.toFixed(2)
    }
    else {
        return "Unidade inválida"
    }
}

console.log(converterCelsius(25, "F"))
console.log(converterCelsius(0, "K"))
console.log(converterCelsius(-10, "F"))
console.log(converterCelsius(35, "K"))
console.log(converterCelsius(20, "G"))