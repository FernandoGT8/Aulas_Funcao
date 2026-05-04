const numeros = [5, 10, 15, 20]

const total = numeros.reduce(function(acumulador, numero){
    return acumulador + numero
}, 0)

console.log(total)