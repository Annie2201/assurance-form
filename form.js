function validateStep1() {
  var checkboxes = document.querySelectorAll(
    '#step1 .question input[type="checkbox"]:not(#exception)'
  );

  var atLeastOneChecked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      atLeastOneChecked = true;
      break; 
    }
  }

  var bodyElement = document.body;

  if (atLeastOneChecked) {
    bodyElement.innerHTML = "<h1>DIFFÉRÉ</h1>";
  } else {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  }
}

function validateStep2() {
    var checkboxes = document.querySelectorAll(
        '#step2 .question input[type="checkbox"]'
      );
    
      var atLeastOneChecked = false;
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          atLeastOneChecked = true;
          break; 
        }
      }
    
      var bodyElement = document.body;
    
      if (atLeastOneChecked) {
        bodyElement.innerHTML = "<h1>DIFFÉRÉ PLUS</h1>";
      } else {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "block";
      }
}

function validateStep3() {
    var checkboxes = document.querySelectorAll(
        '#step3 .question input[type="checkbox"]'
      );
    
      var atLeastOneChecked = false;
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          atLeastOneChecked = true;
          break; 
        }
      }
    
      var bodyElement = document.body;
    
      if (atLeastOneChecked) {
        bodyElement.innerHTML = "<h1>IMMÉDIAT PLUS</h1>";
      } else {
        bodyElement.innerHTML = "<h1>GARANTIE</h1>";
      }
}
