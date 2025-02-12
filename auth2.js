import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "./firebase.js";
  let loginform = document.getElementById("loginform");


  loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential)
        
        if (userCredential.user.accessToken) {
            alert("Login successful!");
            
            
            window.location.href = "./loader.html?button=loginform";
        }
    })
    .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message);
    });
});