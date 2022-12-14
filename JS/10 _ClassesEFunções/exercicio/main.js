class aluno {
    constructor(id, nome, idade, desistente) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.desistente = desistente;
    }
}

let aluno1 = new aluno(1, "Ana", 18, false);
let aluno2 = new aluno(2, "Bia", 12, false);
let aluno3 = new aluno(3, "Lari", 16, false);

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);