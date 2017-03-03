// hope I remember all this

var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#generate')[0].on('click', generatePrediction);

// aiming for main() style structure for modularity and such
// but will start with giant lump of code since I muck up modularity

function isTextboxSet(txt) {  
  if(txt == null || txt.length == 0){
    return false;
  } else {
    return true;
  }
}

function generatePrediction() {
  // take input string. I don't THINK it needs sanitization- but saying that scares me lol. 
  var nomen = numero.username.value;
  
  if(isTextboxSet(nomen)) {
    namesplash.textContent = "The meaning of " + nomen;
  } else {
    results.innerHTML = "<p>Something went wrong...</p>";
  }
  
  // OK testing of all this and above works. 
  
  // original intent was to have a db of values but will go simpler route for now. 
  // putting all lowercase cuts effort of building db in half
  // var lowername = username.toLowerCase;
  
  // will have to use substring() or related func regardless of method used to assign numerical values
  
  // username.length may be useful. 
  // username.substring(0, n)
  
  // instead of standard substitution table, all chars are assigned their UTF-16 code number.
  // username.charCodeAt(parameter); 
  // parameter is location within string, via substring access, so iterate over string, 
  // adding each result to a lump sum. 
  // returned value is an integer, which is what we want for this. 
  // IF 0 or NAN or anything else, error message
  // return lump sum integer
  
  // reduce- add together integers in array
  // subroutine: if sum > 1 digit, reiterate process. 
  // EXCEPT: if(sum == 11 || 22 || 33) that is a "master number" and returns immediately.
  // return sum
  
  // take the final number and look it up in prediction db/array
  // result.textContent = lorem_ipsum;
  // alternately, use case statement directly
  // case N: result.innerHTML = '<p>blah blah blah</p><p>boop beep baap</p>';
  
  
  
}