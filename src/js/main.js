const mainContainer = document.querySelector(".main");
const generateArrayBtn = document.querySelector(".generate-array-btn");

const mainArray = [];

function createColumn(height) {
  let newColumn = document.createElement("div");
  newColumn.classList.add("column");
  newColumn.style.height = `${height}px`;
  mainContainer.appendChild(newColumn);
}

generateArrayBtn.addEventListener("click", (event) => {
  mainContainer.innerHTML = "";
  mainArray.splice(0);
  generateArray(5, mainArray);
  generateElement(mainArray);
  console.log(bubbleSort(mainArray));
});

function randomaizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray(lenght, array) {
  for (let i = 0; i < lenght; i++) {
    array.push(randomaizer(1, 200));
  }
}

function generateElement(array) {
  for (let i = 0; i < array.length; i++) {
    createColumn(array[i]);
  }
}
let bubble;
function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        bubble = array[j];
        array[j] = array[j + 1];
        array[j + 1] = bubble;
      }
    }
  }
  return array;
}
