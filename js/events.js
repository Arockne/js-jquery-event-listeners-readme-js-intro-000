//define functions here

function getIt() {
  $('p').on('click', () => alert('Hey!'))
}

function frameIt() {
  $('img').on('load', function() { 
    $(this).addClass('tasty');
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(event) {
    console.log(event.key);
    if (event.key === 'g' || event.key === "G") {
      alert('g key was pressed.');
    }
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
submitIt();
});
