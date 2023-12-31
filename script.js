/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */
let color = '';

function art() {
  this.style.backgroundColor = color;
}

function PixelArt(el, rows, cols) {
  // Creating table
  const gridEl = document.querySelector(el);
  const table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    tr.style.width = '20px';
    tr.style.height = '20px';

    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      td.classList.add('box');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  gridEl.appendChild(table);

  // Generate random color on boxes
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  for (let i = 0; i < cols; i++) {
    table.lastChild.childNodes[i].style.backgroundColor = '#' + randomColor;
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Pick color
    table.lastChild.childNodes[i].addEventListener('click', function () {
      color = this.style.backgroundColor;
    });
  }

  // Event Listeners
  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols; j++) {
      // On click event
      table.childNodes[i].childNodes[j].addEventListener('click', art);
      // On drag event
      table.childNodes[i].childNodes[j].addEventListener('dragenter', art);
    }
  }
}
