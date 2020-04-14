$("#register-form").on("submit", function(event) {
  // Clear all additional html in case an user click the button again.
  $(".form-group .error-msg").remove();
  $(".icon-error").remove();
  $(".email").attr("placeholder", "Email Address");

  var allInput = $(".form-group input")

  for (var i = 0; i < allInput.length; i++) {
    var input = allInput[i];
    // Get back to original border color.
    $(input).removeClass("invalid placeholder-red");

    // Verify Email.
    if ($(input).hasClass("email")) {
      // Check if the email address matches the pattern.
      if (!(/.+@.+/.test(input.value))) {
        $(input).addClass("placeholder-red invalid")
          .attr("placeholder", "email@example.com")
          .after('<small class="error-msg"><em>Looks Like this is not an email</em></small>')
          .after('<image class="icon-error" src="images/icon-error.svg" alt="icon-error">');

        // Prevent from submitting the form.
        event.preventDefault();
      }

      // Check if Empty Value.
    } else if (input.value === "") {
      $(input).addClass("invalid").after('<small class="error-msg"><em>' + input.placeholder + ' cannot be empty</em></small>')
        .after('<image class="icon-error" src="images/icon-error.svg" alt="icon-error">');
      event.preventDefault();
    }


  }
})
