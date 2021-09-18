// todo 
let loginInfo = {}

const submitHandler = (e) => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
     
    loginInfo.email = document.getElementById('email').value
    loginInfo.password = document.getElementById('password').value
    console.log(loginInfo)
     alert(`email: ${email} password: ${password}`)
    }
  
  
const viewPassword = () => {
    
    let password = document.getElementById('password')
    if (password.type === "password") {
        password.type = "text"
        
    } else {password.type = 'password'}
}