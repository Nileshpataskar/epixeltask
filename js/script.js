function validateForm() {
  // First Name and Last Name: Required fields
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  if (!firstName || !lastName) {
    alert("First Name and Last Name are required.");
    return false;
  }

  // Email: Must be a valid email format
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Phone Number: Must be a valid phone number format
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const phonePattern = /^[0-9]{10}$/; // Adjust pattern based on required format
  if (!phonePattern.test(phoneNumber)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Password: Minimum 8 characters
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // All validations passed
  alert("Succesfully Validated!");
  console.log({
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    email: email,
    password: password,
  });

  return true;
}
