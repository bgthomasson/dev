var range = document.querySelector("#range");
var h1 = document.getElementsByTagName("h1")[0];
// just to mess around with selector options

range.addEventListener("input", function() {
  // here's the original example to make sure it works- it does for this: 
  h1.style["font-size"] = this.value + "em";
  // OK cool now let's do something different and more complicated like changing colors...
  
  
  
});