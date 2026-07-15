console.log("connected")

function validateForm(){

const fName = document.getElementById("firstName").value;
const lName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

console.log(fName,lName,email,email);

if(!fName){
    document.getElementById("fnameError").innerHTML = "First Name is Required!"

}
else if(fName.length<4){
    document.getElementById("fnameError").innerHTML = "First Name should be at least 4 character!"


}
else{
    document.getElementById("fnameError").innerHTML="";
}
if(!lName){
    document.getElementById("lnameError").innerHTML="Last Name is required."
}
else if(lName.length<4){
    document.getElementById("lnameError").innerHTML = "at least 4 char"
}
else{
    document.getElementById("lnameError").innerHTML =""
}

if(!email){
    document.getElementById("emailError").innerHTML="email required"

}
else if(!email.includes("@")){
    document.getElementById("emailError").innerHTML="@ must be givien"
}
else{
    document.getElementById("emailError").innerHTML=""
}



    return false;
}
