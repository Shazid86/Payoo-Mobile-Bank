// search: form submit reloading the page {homework}...

// Step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){

  // Step-2: prevent default behavior (prevent reloading browser)
  event.preventDefault();
 

  // Step-3: get the phone number and the pin number
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber);

  // Step-4: validate phone and pin
  // this is temporary, you shouldn't do this
  if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('your are logged in');
    window.location.href = '/home.html';
    // Step-5: allow user to use the website
  }
  else{
    alert('wrong phone number or pin');
  }
});