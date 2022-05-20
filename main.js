
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add("form__message--${type}");
}

setFormMessage(loginForm, "success", "You're logged in!");

document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});

loginForm.addEventListener("submit")


var db = openDatabase("data","1.0","database", 65535);
$(function(){
$("#enter").click(function(){
    db.transaction(function(transaction){

        var sql="INSERT INTO info VALUES("
        "email, " +
        "username, " +
        "passcode)";

        transaction.executeSql(sql, undefined, 
            function() {
                alert("Information was added");
            },function(){
                alert("Error");
            })
    });
});
});

