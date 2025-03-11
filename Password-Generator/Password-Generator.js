let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// For showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$₹%^&*()-_+=<>"


// Function to generate Password
function generatePassword () {
    let genPassword = "";
    let allchars = "";
    
    allchars += uppercase.checked ? upperChars : "";
    allchars += lowercase.checked ? lowerChars : "";
    allchars += numbers.checked ? allNumbers : "";
    allchars += symbols.checked ? allSymbols : "";

    // if(allchars == "" || allchars.length == 0){
    //     return genPassword;
    // }


    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }
    return genPassword;
}


copyIcon.addEventListener('click', () => {
    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title = 'password copied';
        copyIcon.innerHTML = 'check'

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy"
        }, 2000);
    }
})