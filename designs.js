// Select color input
const userColor = document.querySelector('#colorPicker');

// Select size input
const userForm = document.querySelector('#sizePicker');

// Select table
const userTable = document.querySelector('#pixelCanvas');


function makeGrid() {
// reset grid
// set grid background to white, colorPicker to black, and delete all table elements
  userTable.setAttribute('style', 'background-color: white');
  userColor.value = '#000000';
  prevTable = document.querySelectorAll('tbody');
  prevTable.forEach(function(element) {
    element.remove();
  });

  // build table via nested loop
  height = userForm.inputHeight.value;
  width = userForm.inputWidth.value;

  for(i = 1; i <= height; i++) {
    userTable.insertAdjacentHTML('afterbegin', '<tr id=row' + i + '></tr>');
    for(j = 1; j <= width; j++) {
      currentRow = document.querySelector('#row' + i);
      currentRow.insertAdjacentHTML('afterbegin', '<td></td>');
    }
  }
  addClickListeners();
}

userForm.addEventListener('submit', function(event) {
  //to prevent drawn grid from vanishing, stop event bubbling
  event.preventDefault();

  makeGrid();
});

function addClickListeners() {
  allCells = document.getElementsByTagName('td');
  for(i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', function(event) {
      // current cell allCells[i] is event.target
      event.target.setAttribute('style', 'background-color:' + userColor.value);
    });
  }
}
