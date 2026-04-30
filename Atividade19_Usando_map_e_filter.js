const pedidos = [
    { cliente: "João", valor: 100 },
    { cliente: "Maria", valor: 300 },
    { cliente: "Pedro", valor: 50 },
    { cliente: "Ana", valor: 500 }
]

const resultado = pedidos.filter(function(pedido){
    return pedido.valor > 100
    
}).map(function(pedido){
    return {
        cliente: pedido.cliente,
        valorFinal: pedido.valor * 0.9
    }
})

console.log(resultado)