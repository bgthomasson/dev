var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#generate')[0].on('click', generatePrediction);

// set as required in the form so modern browsers shouldn't get this 
// but can't hurt to have backup
function isTextboxSet(txt) {  
  if(txt == null || txt.length == 0){
    return false;
  } else {
    return true;
  }
}

function determineTotal(name) {
  // so we have an empty bucket-
  var total = 0; 
  // and make an iterating loop to fill it with the value of each char-
  for(var i = 0; i < name.length; i++) {
    var alpha = name.substring(0); 
    // had this as substring(0, i) at first but returned as NaN. 
    // after grabbing a character, make a var to hold its UTF16 integer value. 
    // index is 0 because there should be only one item selected. 
    var beta = alpha.charCodeAt(0); 
    total = total + beta; 
  }
  // hang on, let's do a tiny error handler
  if(total < 1) return 0; // will serve as error code
  else return total;
  // which then goes into the function that reduces it
}

function reducer(lump) {
  var sum = 0;
  for(var i = 0; i < lump.length; i++) {
    var digit = lump.substring(0);
    sum = sum + digit;
  }
  if(sum < 1) return 404; // math not found
  else return sum;
}

function generatePrediction() {
  // take input string. I don't THINK it needs sanitization- but saying that scares me lol. 
  var nomen = numero.username.value;
  var lump_sum = determineTotal(nomen);
  var final_sum = reducer(lump_sum);
  /*
  if ((final_sum.length == 1) || (final_sum == 11) || (final_sum == 22) || (final_sum == 404)) { 
    prognosticate(final_sum);
  } else {
    var rerun = reducer(final_sum); 
    prognosticate(rerun);
  }
  */
  
  if(isTextboxSet(nomen)) {
    namesplash.textContent = "The meaning of " + nomen;
    results.innerHTML = "<p>Your name is "  + nomen.length + " moon units long</p>";
    results.innerHTML += "<p>The lump sum is " + lump_sum + "</p>";
    results.innerHTML += "<p>The final sum is " + final_sum + "</p>";
  } else {
    results.innerHTML = "<p>You didn't enter a name! Also, your browser sucks.</p>";
  }
  
}