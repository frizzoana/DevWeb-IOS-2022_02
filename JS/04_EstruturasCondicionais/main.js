// Estrutura condicional simples
// Igual duplo
const a = 10;
if (a == 10) {
console.log('a é 10');
}
const b = '10';
if (b == 10) {
console.log('b é 10');
}


//triplo igual - verifica o tipo


// Estrutura condicional composta
console.clear();
const e = '10';
if (e === 10) console.log('e é o numeral 10');    /* === TRIPLO IGUAL QUER DIZER EXATAMENTE IGUAL*/
else {
console.log(`Resultado da condição: ${e === 10}`);
console.log('e não é o numeral 10');
}


// Multiplas condições
console.clear();
const f = 4;
const g = 11;
if (f > 5 || g > 10) {          /*se a primeira for verdadeira, ele não executa a segunda / para forçar precisamos usar |||   */
console.log(`Condição é ${f > 5 || g > 10}`);
console.log('f é maior do que 5 ou g é maior do 10');
} else console.log('f não é maior do que 5 e g não é maior do 10');
if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do 10');      /*se a primeira for falsa, ele não executa a segunda / para forçar precisamos usar &&& */
else {
console.log(`Condição é ${f > 5 && g > 10}`);
console.log('f não é maior do que 5 ou g não é maior do 10');
}



// Desvios encadeados
// console.clear();
// const num = 'Ola';
// if (num % 2 == 0 && !isNaN(num)) console.log('Número par!');
// else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar');
// else console.log('Não é um número!');



console.clear();
const num = 10;
if (num % 2 == 0 && !isNaN(num)) console.log('Número par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar');
else console.log('Não é um número!');



// Operador ternário - exemplo 1
console.clear();
let resultado = 3 > 4 ? "Sim" : "Não";
console.log(resultado)


// Operador ternário - exemplo 2
console.clear();
let result = Math.PI < 4 ? console.log('Sim') : console.log('Não'); 

/*o "console.log" foi utilizado duas vezes, para economizar tempo e espaço é recomendado usar o exemplo de cima*/



// Switch      
const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';
console.clear();
switch (cor) {
case 'vermelha':
console.log('A cor é vermelha');    /*true*/
break;
case 'azul':
console.log('A cor é azul');
break;
default:
console.log('A cor não é vermelha ou azul');
break;
}


// Switch 2
const h = 7;
const cor = h > 10 ? 'vermelha' : 'azul';
console.clear();
switch (cor) {
case 'vermelha':
console.log('A cor é vermelha');
break;
case 'azul':
console.log('A cor é azul');  /*true*/
break;
default:
console.log('A cor não é vermelha ou azul');
break;
}



