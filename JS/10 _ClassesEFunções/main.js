//criação da classe carro
class carro {
    constructor(nome, ano, portas, janelas){
        this.nome = nome;
        this.ano = ano;
        this.portas = portas; 
        this.janelas = janelas;
    }

//metodo que retorna a idade do meu carro
idadeCarro(anoAtual){
    return anoAtual - this.ano;
}
}






//criação de objetos que herdam as caracteristicas da classe carro
let carro1 = new carro("celta", 2002, 2, 4)
let carro2 = new carro("veloster", 2016, 3, 4)


//apresentar os objetos no console.log
console.log(carro1.nome)


console.clear

console.log(carro1);
console.log(carro1.ano);



//pegar o ano atual
let dataHoje = new Date();
let ano = dataHoje.getFullYear();



//retornar a idade do objeto carro1
console.log(carro1.idadeCarro(ano))