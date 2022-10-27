//button1
const eventClique = () => {
let fundo = document.getElementById('item');
fundo.style.backgroundColor = '#444';
console.log(fundo);
};

//button2
const eventClique2 = () => {
let fonte = document.getElementsByClassName('negrito');
items[1].style.fontWeight = 'bold';
console.log(fonte)
}
//button3
let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0; i < li.length; i++) {
if (i % 2) li[i].style.backgroundColor = '#444';
else li[i].style.backgroundColor = '#fff';
}

//button4    term
let nome = document.getElementsByName('fitem');
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';


//button5
let rem = document.getElementById('per');
rem.remove();


//button6 term
let lista = document.getElementById('itens');
let item4 = document.getElementById('item4');
lista.insertBefore(item4, item3.nextSibling);
