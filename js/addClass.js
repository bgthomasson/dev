// a simple AJAXian script to change bg color on clicked buttons. 
// We also need to change tense, so "like" becomes "liked", etc. 

var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#like')[0].on('click', addClass);

function addClass(){
  var className = "activated";
  if (this.classList) {
    this.classList.add(className);
  } else {
    this.className += ' ' + className;
  }
}