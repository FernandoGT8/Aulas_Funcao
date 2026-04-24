function calcularIMC(peso, altura){
    const imc = peso / (altura * altura)
    if (imc < 18.5){
        return "Abaixo do peso"
    }
    else if (imc <= 24.9){
        return "Peso normal"
    }
    else if (imc <= 29.9){
        return "Excesso de peso"
    }
    else if (imc <= 34.9){
        return "Obesidade classe I"
    }
    else if (imc <= 39.9){
        return "Obesidade classe II"
    }
    else {
        return "Obesidade classe III"
    }
}

console.log(calcularIMC(50, 1.70))
console.log(calcularIMC(68, 1.70))
console.log(calcularIMC(85, 1.70))
console.log(calcularIMC(110, 1.70))