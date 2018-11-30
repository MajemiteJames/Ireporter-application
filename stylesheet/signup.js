
function formValidation() {
  const uid = document.registration.userid;
  const passid = document.registration.passid;
  const confirmPassword = document.registration.confirmPassword;
  const uemail = document.registration.email;
  function useridValidation(uid, mx, my) {
    const uidLen = uid.value.length;
    if (uidLen === 0 || uidLen >= my || uidLen < mx) {
      alert("User Id should not be empty / length be between "+mx+" to "+my);
      uid.focus();
      return false;
    }
    return true;
  }

  function passidValidation(passid, mx, my) {
    const passidLen = passid.value.length;
    if (passidLen === 0 || passidLen >= my || passidLen < mx) {
      alert("Password should not be empty / length be between "+mx+" to "+my);
      passid.focus();
      return false;
    }
    return true;
  }

  

  if (useridValidation(uid, 5, 12)) {
    if (passidValidation(passid,7,12)){
    if (confirmPassword_validation(confirmPassword)){ 
    if(ValidateEmail(uemail)){
            } 
        }
    
}
}
    return false;
}

function ValidateEmail(uemail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


    /*    function ValidateEmail(uemail){
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(uemail.value.match(mailformat)){
            return true;
}
            else{
            alert("You have entered an invalid email address!");
            uemail.focus();
            return false;
}
}
