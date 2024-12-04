document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const emailInput = document.getElementById("emailInput");
    const errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
  
      const emailValue = emailInput.value.trim(); // Get and trim the input value
  
      // Logic to validate email
      if (emailValue === "") {
        // If the input is empty
        showError("Email address cannot be empty.");
      } else if (!isValidEmail(emailValue)) {
        // If the input is not a valid email
        showError("Please enter a valid email address.");
      } else {
        // Input is valid, hide the error message
        hideError();
  
        // Proceed with the desired action (form submission, etc.)
        alert("Form submitted successfully!");
      }
    });
  
    // Function to validate email format using regex
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic regex for email validation
      return emailRegex.test(email);
    }
  
    // Function to show error message
    function showError(message) {
      errorMessage.textContent = message; // Set the error message text
      errorMessage.style.visibility = "visible"; // Make the error message visible
    }
  
    // Function to hide error message
    function hideError() {
      errorMessage.style.visibility = "hidden"; // Hide the error message
      errorMessage.textContent = ""; // Clear the error message text
    }
  });
  