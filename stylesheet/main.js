
$( ".message a" ).click( function(){
$('form').animate({height:"toggle", opacity:"togggle"}, "slow");
}); 



/*let username = document.vform.username.value;
if (username = ""){
    document.getElementById("name_error") = "username is required"
    return false;
}
*/
/*// get all input text object
//debugger;
var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var confirm_password = document.forms["vform"]["confirm_password"];

// get all error display error

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

// set event listener

//username.addEventListener("blur", usernameverify, true); 
//email.addEventListener("blur", emailverify, true);
//password.addEventListener("blur", passwordverify, true);

// validation function

function validate(){
    if(username.value == ""){
        username.style.border = "1px solid red";
        name_eror.textContent = "username is required";
        username.focus();
        return false;
    }
   // email validation
    if(email.value == ""){
        email.style.border = "1px solid red";
        email_eror.textContent = "email is required";
        email.focus();
        return false;
    }
    // password validation
    if(password.value == ""){
        password.style.border = "1px solid red";
        password_eror.textContent = "password is required";
        passowrd.focus();
        return false;
    }
    // event handler

    /*function nameverify(){
        if (username !=""){
            username.style.border = "1px solid #5e6e66";
            username_error.innerHTML = "";
            return true;
        }
    }  if (email !=""){
        email.style.border = "1px solid #5e6e66";
        email_error.innerHTML = "";
        return true;
    }
    if (password !=""){
        password.style.border = "1px solid #5e6e66";
        password_error.innerHTML = "";
        return true;
    }
}*/
