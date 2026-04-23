const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dobrados = numeros.map(n => n * 2)

console.log(dobrados)

/*O que map faz

Para cada item do array, ele executa a função passada e gera um novo array.

Equivalente mental:

pega 1, aplica n => n * 2, vira 2
pega 2, vira 4
etc.*/