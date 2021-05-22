//define functions here

function getIt() {
  $('p').on('click', () => alert('Hey!'))
}

function frameIt() {
  $('img').on('load', function() { 
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function() {
    if ($(this).val() === 'g') {
      alert('You have pressed g.')
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    if ($( "input:first" ).val() === "correct") {
      alert('your form is going to be submitted now.');
      return;
    }
    alert("you entered the wrong value");
    return;
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
