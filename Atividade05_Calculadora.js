function calcular(a, b, operacao){

    if(operacao === "somar"){
        return a + b
    }

    else if(operacao === "subtrair"){
        return a - b
    }

    else if(operacao === "multiplicar"){
        return a * b
    }

    else {
        return "Inválido"
    }
    
}
console.log(calcular(10, 5, "somar"))
console.log(calcular(10, 5, "subtrair"))
console.log(calcular(10, 5, "multiplicar"))
console.log(calcular(10, 5, "dividir"))