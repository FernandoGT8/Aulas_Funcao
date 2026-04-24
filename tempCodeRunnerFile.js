function analisarPedido (valor, formaPagamento){
    if (formaPagamento === "dinheiro"){
        const descontoDinheiro = valor * ((100 - 10) / 100)
       return `Total final: R$ ${descontoDinheiro}`
    }   
}
console.log(analisarPedido(100, "dinheiro"))