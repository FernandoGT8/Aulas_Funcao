const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const somatotal = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
}, 0)

console.log(somatotal)

/* Como ler isso
começa com acumulador = 0
soma 10 → 10
soma 20 → 30
soma 30 → 60
Quando usar

Quando você quer reduzir uma coleção a um único valor:

soma
média
objeto agrupado
total por categoria*/