import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";


let signupform = document.getElementById("signupform");


signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  let retypePassword = e.target[2].value;

  

  if(password !== retypePassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("User signed up:", userCredential.user);
    alert("Signup successful! Redirecting to login...");

    window.location.href = "./login.html";
  })
  .catch((error) => {
    console.error("Error:", error.message);
    alert(error.message);
  });
  
});






