// Método ForEach ()
var frutas = ["Banana", "Maça", "Kiui", "Melancia"]

//Método ForEach() é utilizado para percorrer um array e aplicar alguma mudança ou configuração
frutas.forEach(minhafuncao);

function minhafuncao(valor, indice) {
console.log('o indice é ${indice}')
console.log('o valor é ${valor}')
}


//Metodo forEach() com array de objetos utilizando arrow function

const alunos = [
    {
        id: 1,
        nome: "Marcelo",
        passou: true,
    },
    {
        id: 2,
        nome: "Agata",
        passou: false,
    },
    {
        id:3,
        nome: 'Vitor',
        passou: false,
    }
]

alunos.forEach((aprovados) => console.log(aprovados.passou));



//Metodos map()
const numeros = [2, 7, 8, 50, 34];
const novosNumeros = numeros.map(Math.sqrt);/*sqrt calcula a raiz quadrada*/
console.log(novosNumeros);


console.clear()
const cachorro =
[
    {
  id: 1,
  nome: "bololinho",
  idade:11,
    },
    {
  id: 2,
  nome: "toby",
  idade: 7,
    },
    {
  id: 3,
  nome:"pingo",
  idade: 6,
    }
]

const mapcachorro = cachorro.map((nomeDog) => {
    return (nomeDog.nome)
}
);

console.log(cachorro)
console.log(mapcachorro)

//Metodo filter() percorre o array  e retorna as informações que passam no filtro
console.clear
const idade = [5, 9, 10, 18, 25, 35, 45, 89]

//percorre o array e retorna apenas as idades menores que 30

let filtraIdade = idade.filter((idade) => {return idade < 30 })
console.log(filtraIdade)


//Metodo find()
console.clear
console.log(
    cachorro.find((procuraNome) => {
        return procuraNome.nome === "pingo";
    })
)

