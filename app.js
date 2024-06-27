document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(function() {
        // After 15 seconds, hide cube loader and show welcome page
        document.querySelector('.cube-loader').style.display = 'none';
        document.querySelector('.welcome-page').style.display = 'flex';
    }, 2000); // 15 seconds in milliseconds

    const singUppage = document.querySelector('.singup-section')
    const getStartedBtn = document.querySelector(".getstarr-btn")
     getStartedBtn.addEventListener("click", ()=>{
        singUppage.style.display="flex"
        document.querySelector('.welcome-page').style.display = 'none';
     })

     const loginPage = document.querySelector('.login-section')
     const LoginLink = document.querySelectorAll('.login')
     LoginLink.forEach(login =>{
        login.addEventListener('click', ()=>{
            singUppage.style.display="none"
            document.querySelector('.welcome-page').style.display = 'none';
            loginPage.style.display="flex"
        })
     })

     const signUpLink = document.querySelector('.signup').addEventListener('click', ()=>{
        singUppage.style.display="flex"
            document.querySelector('.welcome-page').style.display = 'none';
            loginPage.style.display="none"
     })

})

 