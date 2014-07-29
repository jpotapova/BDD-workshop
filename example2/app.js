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
