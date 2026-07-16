let totalCount = 0;

function calculateForm() {
  const fName = document.getElementById("firstName").value;
  const email = document.getElementById("email").value;

  let hasNameError = true;
  let hasEmailError = true;
  if (!fName) {
    document.getElementById("fnameError").innerHTML = "Name can not be empty";
    document.getElementById("fnameError").style.color = "red";
    hasNameError = true;
  } else if (fName.length < 3) {
    document.getElementById("fnameError").innerHTML =
      "Name must be at least 3 char";
    document.getElementById("fnameError").style.color = "red";
    hasNameError = true;
  } else {
    document.getElementById("fnameError").innerHTML = "";
    hasNameError = false;
  }

  if (!email) {
    document.getElementById("emailError").innerHTML =
      "Email is a required fireld";
    document.getElementById("emailError").style.color = "red";
    hasEmailError = true;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "Please provide a valid email address";
    document.getElementById("emailError").style.color = "red";
    hasEmailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    hasEmailError = false;
  }

  if (!hasNameError && !hasEmailError) {
    document.getElementById("total").innerHTML = ++totalCount;
  }
  return false;
}