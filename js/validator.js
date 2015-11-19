//---------------------------------------------------------------------------||

function isTextboxSet(txt) {  
  if(txt == null || txt.length == 0){
    return false;
  } else {
    return true;
  }
}

function validateRadio(radio) {
  for(var i = 0; i < radio.length; i++) {
    if(radio[i].checked) return true;
  }
  return false;
}

// generic templates 

function handleRadio(radio) {
	// var radio = pfcg.elements[radio];
  
  if(validateRadio(radio)){
   for(var i = 0; i < radio.length; i++) {
      if(radio[i].checked) {
        var result = radio[i].value;
      }
    }
    return result;
    error_output.textContent = "";
  } else {
    error_output.textContent = "You need to select something.";
  }
}

function handleText(namecheck) {
  // var namecheck = form.username.value;
  
  if(isTextboxSet(namecheck)) {
    username_output.textContent = namecheck;
    error_name.textContent = "";
  } else {
    error_name.textContent = "You have no name.";
  }
}

