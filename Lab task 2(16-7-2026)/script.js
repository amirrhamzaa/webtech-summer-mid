console.log("Conected with javaScript")
function validateForm() {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const creditCompleted = document.getElementById("totalCreditCompleted").value;
    const department = document.getElementById("department").value;

    let isValidError = true;


    console.log(fName, lName, studentId, email, creditCompleted, department);
    if (!fName) {
        document.getElementById("fnameError").innerHTML = "Enter your first name.";
        isValidError = false;
    }

    else {
        document.getElementById("fnameError").innerHTML = "";
    }


    if (!lName) {
        document.getElementById("lnameError").innerHTML = "Enter your last name.";
        isValidError = false;
    }
    else {
        document.getElementById("lnameError").innerHTML = "";

    }


    if (!studentId) {
        document.getElementById("studentIdError").innerHTML = "Enter your student id.";
        isValidError = false;
    }

    else if (!studentId.includes("-")) {
        document.getElementById("studentIdError").innerHTML = "Student id must contain a hypen(-).";
        isValidError = false;
    }
    else {
        document.getElementById("studentIdError").innerHTML = "";
    }


    if (!email) {
        document.getElementById("emailError").innerHTML = "Enter your student email.";
        isValidError = false;
    }
    else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Incorrect! Your email have to @student.aiub.edu";
        isValidError = false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }


    if (!creditCompleted) {
        document.getElementById("totalCreditCompletedError").innerHTML = "Enter your completed credit amount in number.";
        isValidError = false;
    }
    else if (Number(creditCompleted) < 0) {
        document.getElementById("totalCreditCompletedError").innerHTML =
            "Credit can't be negative.";
        isValidError = false;
    }
    else if (Number(creditCompleted) >= 148) {
        document.getElementById("totalCreditCompletedError").innerHTML =
            "Credit must be less than 148.";
        isValidError = false;
    }
    else {
        document.getElementById("totalCreditCompletedError").innerHTML = "";
    }

    if (!department) {
        document.getElementById("departmentError").innerHTML = "Select your department.";
        isValidError = false;

    } else {
        document.getElementById("departmentError").innerHTML = "";
    }

    if (isValidError) {
        const table = document.getElementById("registrationTable");

        const row = table.insertRow();

        row.insertCell(0).innerHTML = fName;
        row.insertCell(1).innerHTML = lName;
        row.insertCell(2).innerHTML = studentId;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = creditCompleted;
        row.insertCell(5).innerHTML = department;

        document.querySelector("form").reset();
    }

    return false;
}