function verificarAprovacao(nota){
    if (nota < 0 || nota > 10){
        return "Nota Inválida"
    }
        if (nota >= 9){
            return "Excelente"
        }
        if (nota >= 7){
            return "Aprovado"
        }
        return "Reprovado"
    
}

console.log(verificarAprovacao(10))
console.log(verificarAprovacao(7))
console.log(verificarAprovacao(6))
console.log(verificarAprovacao(11))
console.log(verificarAprovacao(-1))