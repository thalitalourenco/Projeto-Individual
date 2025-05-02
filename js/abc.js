var formSignin = document.querySelector('.btnLogin')
var formSignup = document.querySelector('.btnCadastro')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnLogin').addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnCadastro').addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})
