document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(name.trim()=== ""){
            alert("Please enter your name.");
            return;
        }
        if(email.trim()=== ""){
            alert("Please enter your email.");
            return;
        }
        const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("Please enter a valid email address.");
            return;
        }
        if(password.trim() === ""){
            alert("please enter your password.");
            return;
        }
        // if (password === "") {
        // passwordError.textContent = "Please enter a password.";
        // return;
        // }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
        return;
        }
        // Regular expression to check if password contains both letters and numbers
        const passwordcheck = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        if (!passwordcheck.test(password)) {
            alert("Password must letters and numbers.");
        return;
        }
            alert("From submitted successfully!");

            form.reset();
        });
});