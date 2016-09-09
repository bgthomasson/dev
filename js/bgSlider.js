var range = document.querySelector("#range");
var h1 = document.getElementsByTagName("body")[0];
// just to mess around with selector options
// yes I tested it on the h1 first, now testing other elements...

range.addEventListener("input", function() {
  // here's the original example to make sure it works- it does for this: 
  // h1.style["font-size"] = this.value + "em";
  // OK cool now let's do something different and more complicated like changing colors...
  // h1.style.background = "#123";
  // Oh there is a very simple, fundamental thing to remember- input is TEXT by default,
  // so all those numbers aren't INTEGERS to JS! So wrap in "parentheses".

  var toggle = this.value;
  
  switch (toggle) {
    case "1":
      h1.style.background = "#fbfcf7"; // off white
      break;
    case "2":
      h1.style.background = "#ffc0cb"; //pink
      break;
    case "3":
      h1.style.background = "#ffc733"; //orange
      break;
    case "4":
      h1.style.background = "#ffd700"; // gooooold
      break;
    case "5":
      h1.style.background = "#98fb98"; // green
      break;
    case "6":
      h1.style.background = "#e0ffff"; // cyan 
      break;
    case "7":
      h1.style.background = "#b0e0e6"; // blue
      break;
    case "8":
      h1.style.background = "#e6e6fa"; // purple
      break;
    case "9":
      h1.style.background = "#dcdcdc"; //grey
      break;
    default:
      h1.style.background = "#fbfcf7";
  }
  
});