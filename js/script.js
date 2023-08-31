// first name validation in JavaScript
var validname = /^[a-zA-Z]+ [a-zA-Z]+$/;
var fname = document.getElementById('inputFieldName').value;
if(!notname.test(fname)){
    alert('Invalid First name given.');
}else{
    alert('Valid First name given.');
}

const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const first = document.getElementById('first').value;
  const last = document.getElementById('last').value;

  if (first.trim() === '' || last.trim() === '') {
    alert('The fields are required.');
  } else {
    alert(`Name: ${first} ${last}`);
  }
});