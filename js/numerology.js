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
    // call function that does the thing
    // results.innerHTML = lorem_ipsum;
  } else {
    results.innerHTML = "<p>Something went wrong...</p>";
  }
  
  // OK testing of all this and above works. ----------------------------------
  
  // will have to use substring() or related func regardless of method used to assign numerical values
  // username.length may be useful. 
  // username.substring(0, n)
  
  // instead of standard substitution table, all chars are assigned their 
  // UTF-16 code number. Since all digits will be added together, length is irrelevant. 
  // also, since all of this is mumbo jumbo, we can call it unicorn style numerology. 
  
  // username.charCodeAt(parameter); 
  // parameter is location within string, via substring access, so iterate over string, 
  // adding each result to a lump sum. 
  
  // returned value is an integer, which is what we want for this. 
  // IF n < 1 or NAN or anything else, error message
  // return lump sum integer
  
  // reduce- add together integers in array
  // subroutine: if sum > 1 digit, reiterate process. 
  // EXCEPT: if(sum == 11 || 22 || 33) that is a "master number" and returns immediately.
  // return sum
  
  // as long as can figure out right way to use substring for this, should come together by this point. 
  
  // case N: result.innerHTML = '<p>blah blah blah</p><p>boop beep baap</p>';
  
  
  
}