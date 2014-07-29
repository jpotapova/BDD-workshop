function validateRequired(valueToValidate) {
  var isValid = false;
  if ( (valueToValidate > "") && (valueToValidate !== " ") ) {
    isValid = true;
  }
  return isValid;
}

function validateMinLength(valueToValidate, minLengthRequired) {
  var isValid = false;
  if (valueToValidate.length >= minLengthRequired) {
    isValid = true;
  }
  return isValid;
}

function validateNumeric(valueToValidate) {
  var isValid = !isNaN(valueToValidate);
  return isValid;
}

function validateSpecial(valueToValidate) {
  var isValid = false;
  if (valueToValidate.indexOf("#") > -1 ) {
    isValid = true;
  }
  if (valueToValidate.indexOf("$") > -1 ) {
    isValid = true;
  }
  if (valueToValidate.indexOf("!") > -1 ) {
    isValid = true;
  }
  return isValid;
}

function validate(valueToValidate, rule){
  var isValid = false;

  var parts = rule.split('-');

  rule = parts[0];
  var additional = parts[1];

  if (rule === "required") {
    isValid = validateRequired(valueToValidate);
  } else if (rule === "numeric") {
    isValid = validateNumeric(valueToValidate);
  } else if (rule === "minlength") {
    isValid = validateMinLength(valueToValidate, parseInt(additional));
  }
  return isValid;
}
