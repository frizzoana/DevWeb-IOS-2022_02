//criando array unidimensional
var array1 = ["Marcelo", 15, "Colin", 47, true];
console.log(array1);
console.log(array1[2]);  /*para pegar um só elemento*/
console.clear();
array1[3] = 80;
console.log(array1);


//array bidimensinal
var array2 = [
    ["pipoca", 10, false],  /*linha 0*/
    ["string", 20, true],  /*linha 1*/
    ["margarina", 12, false],  /*linha 2*/
]
console.log(array2)
console.log(array2[2])   /*para chegar em uma linha especifica*/
console.log(array2[2][0]) /*para especificar e chegar num especifico*/
console.clear()
array2[1][0] = "salsicha"
console.log(array2)



console.clear()

//array de objeto carro
var carro = ["Uno", 1998, "0km", false, 2]
var x = carro.toString()
console.log(typeof x)
console.log(typeof carro)
console.log(carro)
console.log(x)

console.clear()
var y = carro.join(" ? ")   /*para trocar um separdor*/
console.log(carro)
console.log(x)
console.log(y)



console.log(carro.length)  /*para saber o tamanho do meu array*/



// console.clear()
// //todo metodo é acompanhado de parenteses
// var t = carro.pop()  /*pop retira o ultimo valor*/
// console.log(carro)
// console.log(t)



//inserir uma informação no final do array 
console.clear()
var u = carro.push("lego");
console.log(carro)
console.log(u)



//remove o elemento do inicio do array
console.clear()
var p = carro.shift()
console.log(carro)
console.log(p)

//adiciona uma informação no inicio do array
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)



//apagar um elemento do array em uma posição pré selecionada
delete carro[1]
console.log(carro)