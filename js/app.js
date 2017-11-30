//trae los elementos correspomndientes a la clase 'card' del HTML
var cards = document.getElementsByClassName('card');
// console.log(cards);
for (var i = 0; i < cards.length; i++){
  var item = cards[i];
  // console.log(cards[i]);
  item.classList.add('efects') //iteramos sobre cada elemento del arreglo cards en la posición i
  item.addEventListener('mouseover', rotation);
}

function rotation() {
  if (this.classList.contains('rotation-efect')) {
    this.classList.remove('rotation-efect');
  }
  else{
    this.classList.add('rotation-efect');
  }
}
