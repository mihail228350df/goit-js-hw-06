const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur',onValidationInputBlur);

function onValidationInputBlur() {
 if (validationInputRef.value.length === +validationInputRef.getAttribute('data-length')) {
    validationInputRef.classList='valid';
 } else {
    validationInputRef.classList='invalid';
 }
}