//Username - Validation//
function validarNome(id){
    if(nome.value.length < 3 ){
        resp ("nome", "red")
    } else{
        resp("nome", "green")
    }
}
function resp(nomeInput, color){
    if(color == "red"){
        document.getElementById(nomeInput).style.border="2px solid red";
    } else {
        document.getElementById(nomeInput).style.border="2px solid green";
    }
}
 

//Email - Validation //
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validarEmail(id){
    
    if (email.value.match(mailFormat)){
        resp("email", "green")
    }  else {
        resp("email", "red")
    }
    
    
}

function resp(emailInput, color){
    if(color == "red"){
        document.getElementById(emailInput).style.border="2px solid red";
    } else {
        document.getElementById(emailInput).style.border="2px solid green";
    }
}

//Passsword-Validation//
var passFormat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


function validarPass(id){
    if(password.value.match(passFormat)){
        resp("password", "green")
    } else {
        resp("password", "red")
    }
}
function resp(passInput, color){
    if(color == "red"){
        document.getElementById(passInput).style.border="2px solid red";
    } else {
        document.getElementById(passInput).style.border="2px solid green";
    }
}

//Password-Match-Validation//

function matchPassword(id){
    const password= form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if(password !=confirmPassword){
        resp("confirmPassword", "red")
    } else {
        resp("confirmPassword", "green")
    }
}

function resp(confirmInput, color){
    if(color == "red"){
        document.getElementById(confirmInput).style.border="2px solid red";
    } else {
        document.getElementById(confirmInput).style.border="2px solid green";
    }
}

