//button1
function background() {
    let item1 = document.getElementById('item1');
    item1.style.backgroundColor = 'blue';
    console.log(item1);
  }
  
  //button2
  function font() {
    let item2 = document.getElementsByClassName('item');
    item2[1].style.fontWeight = 'bold';
    console.log(item2);
  }
  
  //button3
  function zebrado() {
    let li = document.getElementsByTagName('li');
    console.log(li);
    for (let i = 0; i < li.length; i++) {
        if (i % 2) li[i].style.backgroundColor = 'darkgray';
        else li[i].style.backgroundColor = 'fff';
    }
    console.log(li)
  }
  
  //button4
  function bottom() {
    let nome = document.getElementsByName('fitem');
    nome[0].style.borderBottom = 'solid 5px red';
    console.log(nome);
  }
  
  let item5 = document.getElementById('item5');
  
  //button5
  function delet(){
    item5.remove();
  }
  
  let lista = document.getElementById('items');
  let item4 = document.getElementById('item4');
  
  //button6
  function reset(){
    lista.insertBefore(item5, item4.nextSibling);
    item5.textContent = 'Item recuperado';
  }