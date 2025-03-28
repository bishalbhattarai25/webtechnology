document.getElementById("myForm").addEventListener("submit", function (event) {
    let isValid = true;

    // Get input values
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let address = document.getElementById("address").value.trim();
    let fee =document.getElementById("fee").value.trim();

    // Reset previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("addressError").innerText = "";
    document.getElementById("feeError").innerText="";


    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Age validation (between 1 and 100)
    if (isNaN(age) || age < 1 || age > 100) {
        document.getElementById("ageError").innerText = "Enter a valid age (1-100).";
        isValid = false;
    }

    // Address validation (minimum 10 characters)
    if (address.length < 10) {
        document.getElementById("addressError").innerText = "Address must be at least 10 characters.";
        isValid = false;
    }

    if(isNaN(fee)|| fee<0){
        document.getElementById("feeError").innerText="Enter a valid fee";
        isValid=false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});