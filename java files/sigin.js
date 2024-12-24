const firstname = document.querySelector("#fname").value
const lastname = document.querySelector("#lname").value
const email = document.querySelector("#sigemail").value
const password = document.querySelector("#sigpass").value
const confirmpassword = document.querySelector("#cpass").value
const data = []

data.push(firstname,lastname,email,password,confirmpassword)
console.log("🚀 ~ data:", data)


function sigin () {
  
    localStorage.setItem("sigin"  , JSON.stringify(data) )
 
    console.log(data);
    
    
}
