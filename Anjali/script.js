document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty field validation
    if(email === "" && password === ""){
        alert("Error: Email and Password cannot be empty.");
        return;
    }

    if(email === ""){
        alert("Error: Please enter your email.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Error: Please enter a valid email address.");
        return;
    }

    if(password === ""){
        alert("Error: Please enter your password.");
        return;
    }

    if(password.length < 6){
        alert("Error: Password must be at least 6 characters long.");
        return;
    }

    // Success
    alert("Login Successful!\nWelcome " + email);

});