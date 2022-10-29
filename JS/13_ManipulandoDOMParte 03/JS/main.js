//querySelector
//acessar a tag
let paragrafo = document.querySelector('p');
paragrafo.style.background='#FBBEBA'

//acessar a tag e a class
let parClass = document.querySelector('p.exemplo').innerHTML = ('Mudei o texto aqui');

//acessar a class
let elemento = document.querySelector('.myclass').style.fontSize = 'x-large'


//trabalhando com eventos no JS
const Clique =() =>(
    document.querySelector('#myspan').style.background = '#cefbba'
)


//metodo querySelectorAll
let listaLi = document.querySelectorAll('li');
for(i = 0; i < listaLi.length; i++){
    listaLi[i].style.border ='1px solid #OOOOff '
    listaLi[i].style.padding = '3px'
    console.log(listaLi);

}


//acessando array de li utilizando apenas id
let myLi = document.querySelectorAll('#my-li');
MediaList.forEach((li) => li.innerHTML = 'Mudou aqui')



//getElementByID
//getElementByTagName