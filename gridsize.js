
createGridAutoRow = () => {
  let sheet = document.createElement('style');
  let autorow = (window.innerHeight / 2)
  sheet.innerHTML = `.references_grid { grid-auto-rows: calc(${autorow}px - .75rem); }`;
  document.body.appendChild(sheet);
}

window.addEventListener('resize', () => {
  createGridAutoRow();
})

createGridAutoRow();