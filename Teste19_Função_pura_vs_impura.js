//pura

function somar(a, b){
    return a + b
}

// Sempre que entrar 2 e 3, sai 5.

//impura

let total = 0
function adicionaraototal(valor) {
    total += valor
}

//Ela depende e altera estado externo.

/*Qual é superior?

Para previsibilidade e teste, função pura é superior.
Função impura é inevitável em vários casos, mas você deve restringi-la.

Exemplos inevitavelmente impuros:

gravar no banco
chamar API
escrever no console
alterar DOM*/