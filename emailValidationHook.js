// emailValidationHook.js
function emailValidationHook(records) {
  return records.map((record) => {
    const email = record.get('email');
    if (!email) {
      record.addError('email', 'Email is required');
    } else {
      // A simple regex for email validation
      const validEmailAddressRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!validEmailAddressRegex.test(email)) {
        record.addError('email', 'Invalid email address');
      }
    }
    return record;
  });
}

// Since we can't use export, we attach our function to the window object for global access
window.emailValidationHook = emailValidationHook;
