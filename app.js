document.addEventListener('DOMContentLoaded', () => {
    /*setTimeout(function() {
        // After 15 seconds, hide cube loader and show welcome page
        document.querySelector('.cube-loader').style.display = 'none';
        document.querySelector('.welcome-page').style.display = 'flex';
    }, 15000); // 15 seconds in milliseconds*/

    /////HIDE AMOUNT AND DISPLAY AMOUNT FUNCTION/////
     
const showBalance = document.querySelector('.seen')
const hideBalance= document.querySelector('.unseen')
hideBalance.addEventListener('click', ()=>{
    hideBalance.style.display="none"
    showBalance.style.display="flex"
     document.querySelector('.total').textContent="********"
     document.querySelector('.total-income').textContent="********"
})
showBalance.addEventListener('click', ()=>{
    hideBalance.style.display="flex"
    showBalance.style.display="none"
    const totalElement = document.querySelector('.total');
    const totalIncomeElement = document.querySelector('.total-income');
    
    // Example: Assuming you have stored actual balance values somewhere
    const actualTotal = 1000; // Replace with your actual balance value
    const actualTotalIncome = 500; // Replace with your actual income value
    
    totalElement.textContent = actualTotal.toFixed(2); // Display actual balance
    totalIncomeElement.textContent = actualTotalIncome.toFixed(2); // Di
})










    
    const signupName = document.querySelector('.signup-name')
    const signupEmail = document.querySelector('.signup-email')
    const signupPassword = document.querySelector('.signup-password')
    const singUppage = document.querySelector('.singup-section');
    const checkBoxsignup = document.querySelector('.signupcheckbtn')
    const getStartedBtn = document.querySelector(".getstarr-btn");
    getStartedBtn.addEventListener("click", () => {
        singUppage.style.display = "flex";
        document.querySelector('.welcome-page').style.display = 'none';
    });

     const loginEmail= document.querySelector('.login-email')
     const loginPassword = document.querySelector('.login-password')
    const loginPage = document.querySelector('.login-section');
    const LoginLink = document.querySelectorAll('.login');
    LoginLink.forEach(login => {
        login.addEventListener('click', (event) => {
            event.preventDefault();
            singUppage.style.display = "none";
            loginPage.style.display = "flex";
            document.querySelector('.welcome-page').style.display = 'none'; 
        });
    });

    const signUpLink = document.querySelector('.signup');
    signUpLink.addEventListener('click', (event) => {
        event.preventDefault();
        singUppage.style.display = "flex";
        loginPage.style.display = "none";
        document.querySelector('.welcome-page').style.display = 'none';
    });

   const homeDisplay= document.querySelector(".landing-page")
    function showNextPageAfterSignup() {
        loginPage.style.display = 'none';
        document.querySelector('.welcome-page').style.display='none';
        singUppage.style.display="none"
        homeDisplay.classList.remove('hidden') 
        document.querySelector('footer').classList.remove('hidden')
    }

    singUppage.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (signupName.value.trim() !== '' && signupEmail.value.trim() !== '' && signupPassword.value.trim() !== ''){
            showNextPageAfterSignup()
            updatePersonInfo()
        } else {
            alert('complete the empty filed')
        } if (checkBoxsignup.checked){
            showNextPageAfterSignup()
          
        } else {
            alert('Agree to procced')
        }
    })


    loginPage.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (loginEmail.value.trim() !== '' && loginPassword.value.trim() !== ''){
            showNextPageAfterSignup()
        } else{
            alert('please fill the empty filed.')
        }
    })
   ////////////////////////// SIGNUP TRIM VALUE///////////////////     
   
const personNameDisplay = document.querySelector('.person-name');
const personEmailDisplay = document.querySelector('.person-email');

 function updatePersonInfo(){
const personname= signupName.value.trim()
const personemail=signupEmail.value.trim()
personNameDisplay.textContent= `${personname}`
personEmailDisplay.textContent= `${personemail}`

 }
///////FORM SUBMITTING ///////////
 const  cardApp= document.querySelector('.card-application');
 cardApp.addEventListener('submit', (e)=>{
    e.preventDefault()
    showPage(landingPage);
    
 }) 




    const homeIcon = document.querySelector('.home');
    const walletIcon = document.querySelector('.wallet');
    const profileIcon = document.querySelector('.profile');
    const addIcon = document.querySelector('.add')

    const landingPage = document.querySelector('.dashboard');
    const debitCardPage = document.querySelector('.debit-card');
    const profilePage = document.querySelector('.profile-page');
    const addIncomePage = document.querySelector('.trasfer')

    function showPage(pageToShow) {
        landingPage.style.display = 'none';
        debitCardPage.style.display = 'none';
        profilePage.style.display = 'none';
        addIncomePage.style.display="none"

        pageToShow.style.display = 'block'; // Assuming landing-page is flex, adjust as needed
    }

    // Initial page shown
    showPage(landingPage);

    // Event listeners for icon clicks
    homeIcon.addEventListener('click', () => {
        showPage(landingPage);
        resetApplyCardButton()
    });

    walletIcon.addEventListener('click', () => {
        showPage(debitCardPage);
        resetApplyCardButton()
    });

    profileIcon.addEventListener('click', () => {
        showPage(profilePage);
        resetApplyCardButton()
    });
    addIcon.addEventListener('click', () => {
        showPage(addIncomePage);
        resetApplyCardButton()
    });
    function resetApplyCardButton() {
        document.querySelector('.flip-card').style.display = "none";
        document.querySelector('.card-application').style.display = "none";
        document.querySelector('.done-btn-wrapper').style.display = "none";
        document.querySelector('.bank-about').style.display="none"
    }



    //APPLY FOR CARD ///
    const applyCradBtn = document.querySelector('#applycard');
    applyCradBtn.addEventListener('click',()=>{
         document.querySelector('.flip-card').style.display="flex"
         document.querySelector('.card-application').style.display="block"
        document.querySelector('.done-btn-wrapper').style.display="flex"
    })

    
    const inputNumber = document.querySelector(".number-inp");
    const expInput= document.querySelector('.thru-inp')
    const nameInput= document.querySelector('.name-inp')
    const cvcInput = document.querySelector('.cvcinp')
   
    const  cardNumber = document.querySelector('#cardnumber')
    const  cardCvc= document.querySelector('#cvccard')
    const  cardExpdate = document.querySelector('#date-exp')
    const  cardName = document.querySelector('#name-card')

    function format(inputValue) {
        // Implement your formatting logic here
        // For example, format credit card number with spaces every 4 digits
        return inputValue.replace(/\D/g, '') // Remove non-numeric characters
        .replace(/(.{4})/g, '$1 '); // Add space every 4 characters
                         
    }

     function setCardName(e){
        cardName.innerHTML= format(e.target.value)
     }
     function setCardNumber(e){
        cardNumber.innerHTML= format(e.target.value)
     }

     function setExpdate(e){
        cardExpdate.innerHTML= format(e.target.value)
     }

     function setCardCvc(e){
        cardCvc.innerHTML= format(e.target.value)
     }


     inputNumber.addEventListener('keyup',setCardNumber);
     function setCardNumber(e){
        cardNumber.innerHTML=format(e.target.value);
     }
     expInput.addEventListener('keyup', setExpdate)
     function setExpdate(e){
        cardExpdate.textContent=format(e.target.value);
     }
     nameInput.addEventListener('keyup',setCardName)
     function setCardName(e) {
        const value = e.target.value;
    
        // Update the cardName element
        cardName.textContent = value; // Assuming no formatting needed for the name
    }

    cvcInput.addEventListener('keyup',setCardCvc)
    function setCardCvc(e){
         const value = e.target.value;
         cardCvc.textContent=value;
    }
    //PROFILE PAGE //////////////////// PROFILE PAGE ///////
        const arrowBtn= document.querySelector('.right-arrow')
        const redDotBtn =document.querySelector('.reddot')
        arrowBtn.addEventListener('click', ()=>{
            document.querySelector('.bank-about').style.display="flex"
        })
        redDotBtn.addEventListener('click',()=>{
            document.querySelector('.bank-about').style.display="none"
        })








        
});

