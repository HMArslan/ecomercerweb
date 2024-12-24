const username =document.querySelector("#email").value
const userpassword =document.querySelector("#pass").value
const logdata =[]
logdata.push (username , userpassword)
console.log("🚀 ~ logindata:",logdata)

function log (){

    localStorage.setItem("login" , JSON.stringify (logdata)) 
    // if (username == username && userpassword == "") 
    //     alert("successfully login")
    // else{alert("Enter valid email and passwrord")
        
    }

log ()
// console.log("🚀 ~ log:", log)

// window.location 