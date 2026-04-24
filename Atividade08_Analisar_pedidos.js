/*
Agora você já está num nível em que dá para juntar tudo que você aprendeu até aqui em um único problema mais real.

Desafio

Crie uma função chamada analisarPedido que:

Recebe:
valor (total da compra)
formaPagamento ("dinheiro", "cartao", "pix")
Regras
Se valor for menor ou igual a 0 →
retornar "Valor inválido"
Se for "dinheiro":
desconto de 10%
Se for "pix":
desconto de 5%
Se for "cartao":
sem desconto
Se a forma de pagamento não for nenhuma dessas →
retornar "Forma de pagamento inválida"


Saída

Retornar uma string no formato:

"Total final: R$ X"


Exemplo esperado
console.log(analisarPedido(100, "dinheiro")) // Total final: R$ 90
console.log(analisarPedido(100, "pix"))      // Total final: R$ 95
console.log(analisarPedido(100, "cartao"))   // Total final: R$ 100
console.log(analisarPedido(-10, "pix"))      // Valor inválido
console.log(analisarPedido(100, "boleto"))   // Forma de pagamento inválida
O que esse desafio exige de você
const (para guardar cálculo)
if / else if / else
múltiplas validações
cálculo com porcentagem
retorno formatado
Dica estratégica (importante)

A ordem importa. Pense assim:

valida valor
valida forma de pagamento
calcula
retorna

Se você resolver esse corretamente, você já está bem acima do básico.

Manda o código quando terminar.*/