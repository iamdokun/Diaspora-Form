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


const viewPassword = () => {
    
   let password = document.getElementById('password')
   
    if (password.type === "password") {
        password.type = "text"
        
    } else { password.type = 'password' }
   
  
}
const viewConfirmPassword = () => {
    
   let confrimPassword = document.getElementById('confirm-password')
   
    if (confrimPassword.type === "password") {
        confrimPassword.type = "text"
        
    } else { confrimPassword.type = 'password' }
   
  
}