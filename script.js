$(document).ready(function () {
  $("#myForm").on("submit", function (event) {
    let isValid = true;
    
    $(".error").remove(); // Remove previous error messages

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val();

    if (name.length < 3) {
      $("#name").after('<span class="error" style="color:red;">Name must be at least 3 characters</span>');
      isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      $("#email").after('<span class="error" style="color:red;">Enter a valid email</span>');
      isValid = false;
    }

    if (password.length < 6) {
      $("#password").after('<span class="error" style="color:red;">Password must be at least 6 characters</span>');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }
  });
});
