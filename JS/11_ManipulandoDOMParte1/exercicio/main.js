//alerta
window.alert('Bem-vindo!');

//titulo
document.title = "Exercício, Dom parte 1";

//section
// console.log(document.section);
// console.log(document.article);
var sec= document.createElement('section');
document.body.appendChild(sec);

var h1= document.createElement('h1');
h1.innerHTML = 'Olá alunos!';
sec.appendChild(h1);

var p= document.createElement('p');
p.innerHTML = 'lerolero';
sec.appendChild(p);


var art= document.createElement('article');
document.body.appendChild(art);

var h1= document.createElement('h1');
h1.innerHTML = 'Olá alunos!';
art.appendChild(h1);

var p= document.createElement('p');
p.innerHTML = 'lerolero';
art.appendChild(p);


