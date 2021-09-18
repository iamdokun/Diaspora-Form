let resetPasswordInfo = {}

const submitHandler = (e) => {
    
    let currentPassword = document.getElementById('current-password').value
    let newPassword = document.getElementById('new-password').value
    let confirmPassword = document.getElementById('confirm-password').value

    if (newPassword === confirmPassword) {
        resetPasswordInfo.currentPassword = document.getElementById("current-password").value
        resetPasswordInfo.newPasswordInfo= document.getElementById("new-password").value
        resetPasswordInfo.confirmPassword = document.getElementById("confirm-password").value
        console.log(resetPasswordInfo)
        alert(`current password: ${currentPassword}, new password: ${newPassword}, confirm password: ${confirmPassword}`)
        document.getElementById('myForm').reset()
    }
}

const viewCurrentPassword = () => {
    let currentPassword = document.getElementById('current-password')
    
    if (currentPassword.type === "password") {
        currentPassword.type = 'text'
    } else {currentPassword.type = 'password'}
}

const viewNewPassword = () => {
    let newPassword = document.getElementById('new-password')
    
    if (newPassword.type === "password") {
        newPassword.type = 'text'
    } else {newPassword.type = 'password'}
}

const viewConfirmPassword
    = () => {
    let confirmPassword = document.getElementById('confirm-password')
    
    if (confirmPassword.type === "password") {
        confirmPassword.type = 'text'
    } else {confirmPassword.type = 'password'}
}