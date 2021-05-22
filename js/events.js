//define functions here

function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').on('load', function() { 
    $(this).addClass('tasty');
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  $('')
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
submitIt();
});
