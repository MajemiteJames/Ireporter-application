
function ValidateForm() {
  const username = document.getElementById('username');
  const phoneNum = document.getElementById('phoneNum');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm_password');
  let valid = true;
  if (username.value.length === 0) {
    username.className = 'wrong-input';
    username.nextElementSibling.innerHTML = "Username can't be blank";
    valid = false;
  }
  if (phoneNum.value.length < 10) {
    phoneNum.className = 'wrong-input';
    phoneNum.nextElementSibling.innerHTML = 'Contact number cannot be less than 10';
    valid = false;
  }
  if (password.value.length < 6) {
    password.className = 'wrong-input';
    password.nextElementSibling.innerHTML = 'Password cannot be less than 6';
    valid = false;
  }
  if (password.value !== confirmPassword.value) {
    confirmPassword.className = 'wrong-input';
    confirmPassword.nextElementSibling.innerHTML = 'Password does not match';
    valid = false;
  }
  return valid;
}
function removeMessage() {
  const errorinput = document.querySelectorAll('wrong-input'); 
  [].forEach.call(errorinput, function (el) {
  el.classList.remove('wrong-input'); 
  });
  const errorpara = document.querySelectorAll('.error'); 
  [].forEach.call(errorpara, function(el){
      el.innerHTML="";
   });
}

removeMessage();