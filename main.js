var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png"
    }else {
        icon.src = "sun.png"
    }
}

var Q1 = document.getElementById("Q1");
Q1.onclick = function(){
    var A1 = document.getElementById("A1");
    if (A1.style.display === "none"){
        A1.style.display = "flex";
        Q1.innerText = "Hide Answer";
    }else{
        A1.style.display = "none";
        Q1.innerText = "Show Answer";
    }
}


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

