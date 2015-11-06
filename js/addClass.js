var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#like')[0].on('click', addClass);

function addClass(){
  const className = "activated";
  if (this.classList) {
    this.classList.add(className);
  } else {
    this.className += ' ' + className;
  }
}