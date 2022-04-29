const decrButton = document.querySelector('button[data-action = "decrement"]');
const incrButton = document.querySelector('button[data-action = "increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrButton.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrButton.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});
