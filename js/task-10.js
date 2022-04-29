const boxes=[];
const startWidth=30;
const startHeight=30;

const refs={
  input:document.querySelector('#controls>input'),
  createBtn:document.querySelector('[data-create]'),
  destroyBtn:document.querySelector('[data-destroy]'),
  container:document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', createBoxes)

refs.destroyBtn.addEventListener('click', destroyBoxes)


function createBoxes(){
  if (refs.container.innerHTML==='') {
    for (let i=0; i<refs.input.value; i+=1){
    boxes.push(`<div style="background-color:${getRandomHexColor()}; width:${startWidth+i*10}px; height:${startHeight+i*10}px"></div>`);
    }
  refs.container.insertAdjacentHTML('beforeend',boxes.join(''));
  } else {
    boxes.length=0;
    for (let i=refs.container.querySelectorAll('div').length;i<(refs.container.querySelectorAll('div').length+(+refs.input.value));i+=1){
      boxes.push(`<div style="background-color:${getRandomHexColor()}; width:${startWidth+i*10}px; height:${startHeight+i*10}px"></div>`);
    }
    refs.container.insertAdjacentHTML('beforeend',boxes.join(''));
    
  }
}

function destroyBoxes() {
  refs.container.innerHTML='';
  boxes.length=0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
