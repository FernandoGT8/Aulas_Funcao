function analisarNumero(numero) {
    if(numero === 0){
        return "Zero"
    }

    else if(numero < 0){
        return "Negativo"
    }

    else{
        if (numero % 2 === 0){
            return "Positivo e Par"
        }
        else {
            return "Positivo e Ímpar"
        }
    }
}

console.log(analisarNumero(2))
console.log(analisarNumero(9))
console.log(analisarNumero(0))
console.log(analisarNumero(-8))