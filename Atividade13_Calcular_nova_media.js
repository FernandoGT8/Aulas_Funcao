function calcularMedia (a, b, c){

    const media = (a + b + c) / 3
    let status = ""
    
    if (media >= 7){
        status = "Aprovado"
    }
    else if (media >= 5){
        status = "Recuperação"
    }
    else {
        status = "Reprovado"
    }
    return status
}

console.log(calcularMedia(8, 6, 10))
console.log(calcularMedia(5, 5, 5))
console.log(calcularMedia(5, 5, 4))