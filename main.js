
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png"
    }else {
        icon.src = "sun.png"
    }
}

var Q6 = document.getElementById("Q6");
Q6.onclick = function(){
    var A6 = document.getElementById("A6");
    if (A6.style.display === "none"){
        A6.style.display = "flex";
        Q6.innerText = "Hide Answer";
    }else{
        A6.style.display = "none";
        Q6.innerText = "Show Answer";
    }
}

var Q5 = document.getElementById("Q5");
Q5.onclick = function(){
    var A5 = document.getElementById("A5");
    if (A5.style.display === "none"){
        A5.style.display = "flex";
        Q5.innerText = "Hide Answer";
    }else{
        A5.style.display = "none";
        Q5.innerText = "Show Answer";
    }
}

var Q4 = document.getElementById("Q4");
Q4.onclick = function(){
    var A4 = document.getElementById("A4");
    if (A4.style.display === "none"){
        A4.style.display = "flex";
        Q4.innerText = "Hide Answer";
    }else{
        A4.style.display = "none";
        Q4.innerText = "Show Answer";
    }
}

var Q3 = document.getElementById("Q3");
Q3.onclick = function(){
    var A3 = document.getElementById("A3");
    if (A3.style.display === "none"){
        A3.style.display = "flex";
        Q3.innerText = "Hide Answer";
    }else{
        A3.style.display = "none";
        Q3.innerText = "Show Answer";
    }
}

var Q2 = document.getElementById("Q2");
Q2.onclick = function(){
    var A2 = document.getElementById("A2");
    if (A2.style.display === "none"){
        A2.style.display = "flex";
        Q2.innerText = "Hide Answer";
    }else{
        A2.style.display = "none";
        Q2.innerText = "Show Answer";
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

