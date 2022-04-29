function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef=document.body;
const displayColorRef=document.querySelector('span.color')
const changeColorBtnRef=document.querySelector('.change-color')

changeColorBtnRef.addEventListener('click',onChangeColorBtn);

function onChangeColorBtn(){
bodyRef.style.backgroundColor=getRandomHexColor() ;
displayColorRef.textContent=bodyRef.style.backgroundColor;
}