var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#generate')[0].on('click', generatePrediction);

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
  // and make an interating loop to fill it with the value of each char-
  for(var i = 0; i < name.length; i++) {
    var alpha = name.substring(0); 
    // had this as substring(0, i) at first but returned as NaN. 
    // after grabbing a character, make a var to hold its UTF16 integer value. 
    // index is 0 because there should be only one item selected. 
    var beta = alpha.charCodeAt(0); 
    total = total + beta; 
  }
  // hang on, let's do a tiny error handler
  if(total < 1) return 666; // cuz obviously the devil did it
  else return total;
  // which then goes into the function that reduces it 
}

function reducer(lump) {
  // split number into digits and add them together, ex: 34 becomes 3 + 4
  // can recycle basic logic from the other since we are splitting and adding-
  var sum = 0;
  for(var i = 0; i < lump.length; i++) {
    var digit = lump.substring(0);
    // cool but now we don't need the char code, we need the value as an integer!
    // time to look up type casting? well we didn't need to before so let's just go. 
    sum = sum + digit;
    }
    
    // OK BUT. "Ben Thomasson" resulted in 858. 8 + 5 + 8 = 21. 
    // the goal is to get a single digit. SO we need to check. 
    if (sum.length == 1) { 
      return sum
    }
    else {
       if(sum == 11 || sum == 22 || sum == 33) return sum
       else // reiterate loop... how do we do that efficiently?
    }
    
    // maybe this part should be an outer loop? discrete func that calls reducer()?
  
}

function generatePrediction() {
  // take input string. I don't THINK it needs sanitization- but saying that scares me lol. 
  var nomen = numero.username.value;
  var lump_sum = determineTotal(nomen);
  // var final_sum = reducer(lump_sum);
  
  if(isTextboxSet(nomen)) {
    namesplash.textContent = "The meaning of " + nomen;
    results.innerHTML = "<p>Your name is "  + nomen.length + " moon units long</p>";
    results.innerHTML += "<p>The lump sum is " + lump_sum + "</p>";
  } else {
    results.innerHTML = "<p>Something went wrong...</p>";
    // Should do proper error reporting here!!!
  }
  
  // OK testing of all this and above works. ----------------------------------|
  
  // will have to use substring() or related func regardless of method used to 
  // assign numerical values. 
  // username.length may be useful. hang on let me plagiarize from another Ben.  
  // String.slice( begin [, end ] )
  // String.substring( from [, to ] )
  // String.substr( start [, length ] )
  // In all cases, the second argument is optional. If it is not provided, 
  // the substring will consist of the start index all the way through the end of the string. 
  // For both the slice() and substring() methods, the second argument is exclusive; 
  // that is, the resultant substring will not contain the character at the final index.
  // Whch is a problem when you want to handle every char, and since substr() has 
  // it built in it seems most useful. We can set it like string.substr(0) and it 
  // SHOULD start at 0 index (first char) and iterate the entire length. 
  // OK so we do the thing. fereach? oops that's the hillbilly version. 
  // we loop thru with i just like iterating any array
  // string.substr(0, i) ?? for the first it would turn to 0,0 so would that work?
  // string.charCodeAt(i)
  
  // instead of standard substitution table, all chars are assigned their 
  // UTF-16 code number. Since all digits will be added together, length is irrelevant. 
  // also, since all of this is mumbo jumbo, we can call it unicorn numerology. 
  
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