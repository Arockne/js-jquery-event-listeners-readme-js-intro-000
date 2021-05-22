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
  $('#typing').on('keydown', function(event) {
    for (let i = 0; i < $(this).val().length; i++) {
      let lastChar = $(this).val()[i.length - 1];
      if (lastChar === 'g') {
        alert('G was pressed');
      }
    }
  });
}

// function submitIt() {
//   $("form").on("submit", function() {
//     if ($( "input:first" ).val() === "correct") {
//       alert('Your form is going to be submitted now.');
//       return;
//     }
//     alert("you entered the wrong value");
//     return;
//   });
// }

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
//submitIt();
});
