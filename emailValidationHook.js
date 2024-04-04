// Assuming @flatfile/plugin-record-hook is accessible and imported correctly
// Note: This assumes you have a way to import or include @flatfile/plugin-record-hook in your environment

function emailValidationHook(record) {
  // Email field validation
  const email = record.get("email");
  const validEmailAddressRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !validEmailAddressRegex.test(email)) {
    console.log("Invalid email address:", email); // Log for debugging
    record.addError("email", "Invalid email address");
  }
  return record;
}

// Attach the hook to the window object for global access
window.emailValidationHook = emailValidationHook;
