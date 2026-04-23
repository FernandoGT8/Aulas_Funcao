function sacar(saldo, valor){
    if (valor <= 0){
        return "Valor Inválido"
    }
    
    if (valor > saldo){
        return "Saldo Insuficiente"
    }

    return `Saque de R$ ${valor} realizado`
}

console.log(sacar(100, 0))
console.log(sacar(100, 150))
console.log(sacar(100, 50))

/*Por que isso é superior

Você trata casos inválidos no início e evita if aninhado desnecessário.*/