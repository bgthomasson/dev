// riffing off this https://css-tricks.com/make-super-quick-little-slider-play-values/

var range = document.querySelector("#range");
var mutant = document.getElementsByTagName("body")[0];

range.addEventListener("input", function() {

  var toggle = this.value;
  
  switch (toggle) {
    case "1":
      mutant.style.background = "#fbfcf7"; // off white
      break;
    case "2":
      mutant.style.background = "#ffc0cb"; //pink
      break;
    case "3":
      mutant.style.background = "#ffc733"; //orange
      break;
    case "4":
      mutant.style.background = "#ffd700"; // gooooold
      break;
    case "5":
      mutant.style.background = "#98fb98"; // green
      break;
    case "6":
      mutant.style.background = "#e0ffff"; // cyan 
      break;
    case "7":
      mutant.style.background = "#b0e0e6"; // blue
      break;
    case "8":
      mutant.style.background = "#e6e6fa"; // purple
      break;
    case "9":
      mutant.style.background = "#dcdcdc"; //grey
      break;
    default:
      mutant.style.background = "#fbfcf7";
  }
  
});