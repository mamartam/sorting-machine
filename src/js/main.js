const mainContainer = document.querySelector(".main");
const array = [50, 80, 20, 100, 40];

function createColumn(height) {
  let newColumn = document.createElement("div");
  newColumn.classList.add("column");
  newColumn.style.height = `${height}px`;
  mainContainer.appendChild(newColumn);
}

for (let i = 0; i < array.length; i++) {
  createColumn(array[i]);
}
