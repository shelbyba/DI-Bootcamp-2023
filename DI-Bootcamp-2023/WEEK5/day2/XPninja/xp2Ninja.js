// We will create a form that ask the user for their email. Then, using a 
// function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.
// Write your own javascript validation function to 
// check if the entered value is a valid email address.
//  The address should contain some valid characters, 
//  and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }
  