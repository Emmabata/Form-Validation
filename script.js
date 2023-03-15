 const myNam = document.getElementById("Name");
 const email = document.getElementById("Email");
 const phoneNumber = document.getElementById("phoneNum");
//  const phoneRegEx = new RegExp(/^[0-9]{11}$/);
 const passWord = document.getElementById("pwrd");
 //const pattern = Element.getAttribute("pattern")

 console.log(myNam)


//  FOR NAME
 myNam.addEventListener("change", () => {
    if(myNam.value.length < 3) {
        alert("Name is less than three characters");
    }
    if(myNam.value.includes("@")) {
        alert("symbols not needed in this section")
    }
 })


// //  FOR EMAIL
email.addEventListener("change", () => {
    if(!email.value.includes("@")) {
        alert("Invalid email")
    }
})

// // FOR PHONE NUMBER
phoneNumber.addEventListener("change", () => {
     
    if(!phoneNumber.value.includes([+234])) {
        alert("input your country code")
    }else{return true};

    if(phoneNumber.value.length != 10 ) {
        alert("invalid phone number")
    }
    if(!phoneNumber.test(phoneNumber.value)) {
        alert("Phone number must contain only numbers")
    }
    
})

// // FOR PASSWORD
passWord.addEventListener("change", () => {
    if(passWord.value.length < 5) {
        alert("minimum of 5 characters needed")
    }
    if(passWord.value.length > 8) {
        alert("maximum of 8 characters needed")
    }
})