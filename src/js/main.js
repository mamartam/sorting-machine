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
  generateArray(20, mainArray);
  generateElement(mainArray);
  console.log(bubbleSort(mainArray));
});

function randomaizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray(lenght, array) {
  mainArray.splice(0);
  for (let i = 0; i < lenght; i++) {
    array.push(randomaizer(1, 200));
  }
}

function generateElement(array) {
  mainContainer.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    createColumn(array[i]);
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let bubble = array[j];
        let bubbleStyle = mainContainer.children[j].style.height;
        array[j] = array[j + 1];
        mainContainer.children[j].style.height =
          mainContainer.children[j + 1].style.height;
        array[j + 1] = bubble;
        mainContainer.children[j + 1].style.height = bubbleStyle;
      }

      console.log(array);
      await sleep(200);
    }
    mainContainer.children[i - 1].style.backgroundColor = "green";
  }
  return array;
}
