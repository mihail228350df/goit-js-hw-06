const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener(
  'input',
  event => (spanEl.style.fontSize = `${event.currentTarget.value}px`),
);
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs