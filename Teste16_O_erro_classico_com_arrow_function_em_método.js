const usuario = {
    nome: "Bruno",
    saudacao: () => {
        return `Olá, ${this.nome}`
    }
}

console.log(usuario.saudacao())

/*Isso não funciona como a maioria espera.

Por quê

Arrow function não tem this próprio.
Ela captura o this do escopo externo.

Regra objetiva
método de objeto com this → use sintaxe normal
callback curta → arrow costuma ser melhor*/