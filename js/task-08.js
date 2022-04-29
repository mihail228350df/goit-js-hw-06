const form = document.querySelector('.login-form');

// console.log(form.elements)





form.addEventListener('submit',onFormSubmit)







function onFormSubmit (event) {
event.preventDefault();

const {elements:{email,password}}=event.currentTarget;    //  не совсем понятно деструктуризация как произошла тут
if (email.value==='' || password.value==='') {
    alert('all fields must be filled');
} else {
const output={email:email.value,
    password:password.value}
console.log(output)
}
}
