// todo 
let signUpInfo = {} 

const submitHandler = (e) => {
   let fname = document.getElementById('name').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value
let confirmPassword = document.getElementById('confirm-password').value
 
   if (password === confirmPassword) {
      signUpInfo.fullName = document.getElementById("name").value,
    signUpInfo.email = document.getElementById("email").value,
    signUpInfo.password = document.getElementById('password').value,
   signUpInfo.confirmPassword = document.getElementById('confirm-password').value
      console.log(signUpInfo)
    alert('User logged in')
      document.getElementById('myForm').reset()
      
   } else {
      alert('incorrect password')
      document.getElementById("password").value = '';
document.getElementById("confirm-password").value = '';
  }
   
}


const togglePassword = document.getElementById("toggle-password");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function (e) {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
  this.classList.toggle("fa-eye-slash");
});

const toggleConfirmPassword = document.getElementById(
  "toggle-confirm-password"
);
const confirmPassword = document.getElementById("confirm-password");

toggleConfirmPassword.addEventListener("click", function (e) {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
  this.classList.toggle("fa-eye-slash");
});