
var firstNameEl = document.getElementById('firstName');
var lastNameEl = document.getElementById('lastName');
var emailEl = document.getElementById("Email");
var passwordEl = document.getElementById("password1");

var claimBtnEl = document.getElementById("ClaimBtnEl");

var errormsgFirstNameEl = document.getElementById("errormsgFirstName");
var errormsgLastNameEl = document.getElementById("errormsgLastName"); 
var errormsgEmailEl = document.getElementById("errormsgEmail");
var errormsgPasswordEl = document.getElementById("errormsgPassword");



function claimtrail(){
// firstname
if(firstNameEl.value===""){

    errormsgFirstNameEl.textContent="First name cannot be empty";
}
else if(firstNameEl.value.length<=4){
    firstNameEl.textContent="first name requires at least 4 characters";
}
else{
    errormsgFirstNameEl.textContent="";
}

// last name
if(lastNameEl.value===""){
    errormsgLastNameEl.textContent="Last name cannot be empty";
}
else if(lastNameEl.value.length<=4){
    errormsgLastNameEl.textContent="Last name requires at least 4 characters";
}
else{
    errormsgLastNameEl.textContent="";
}

//email address
if(emailEl.value===""){
errormsgEmailEl.textContent="Email cannot be empty";
inputEmailEl.style.borderColor ="red";

}

else{
    errormsgEmailEl.textContent="";
}
//password
if(passwordEl.value==""){
    errormsgPasswordEl.textContent="Email cannot be empty";
}


else{
    errormsgEmailEl.textContent="";
}


}