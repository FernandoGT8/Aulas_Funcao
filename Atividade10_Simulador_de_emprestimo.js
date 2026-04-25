function aprovarEmprestimo (salario, valorParcela, tempoTrabalho){
    if (salario <= 0 || valorParcela <= 0 || tempoTrabalho <= 0){
        return "Dados inválidos"
    }

    const saldoEmprestimo = salario * 0.30

    if (valorParcela <= saldoEmprestimo && tempoTrabalho >= 12){
        return "Empréstimo Aprovado"
    }
    else {
        return "Empréstimo Recusado"
    }
}

console.log(aprovarEmprestimo(4000, 1000, 24))
console.log(aprovarEmprestimo(5000, 2000, 36))
console.log(aprovarEmprestimo(10000, 1000, 6))
console.log(aprovarEmprestimo(0, 500, 20))
console.log(aprovarEmprestimo(3000, 400, -5))
console.log(aprovarEmprestimo(3000, 900, 12))