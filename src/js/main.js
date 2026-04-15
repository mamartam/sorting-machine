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
  generateArray(10, mainArray);
  generateElement(mainArray);
  console.log(mainArray);
  // console.log(startSorting(mainArray));
  // startSorting(mainArray);
  console.log(sorting(mainArray));
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

function startSorting(array) {
  generateArrayBtn.disabled = true;
  // return bubbleSorting(array);
  return optionSorting(array);
}

async function bubbleSorting(array) {
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

let testArray = [10, 2, 5, 20];

async function sorting(array) {
  try {
    for (let i = array.length - 1; i >= 0; i--) {
      let max = array[0];
      let index = 0;
      for (let j = 1; j <= i; j++) {
        if (array[j] > max) {
          max = array[j];
          index = j;
          mainContainer.children[index].style.backgroundColor = "green";
          await sleep(300);
          mainContainer.children[index].style.backgroundColor = "red";
        }
      }
      let bubble = array[i];
      let bubbleStyle = mainContainer.children[i].style.height;

      array[i] = max;
      mainContainer.children[i].style.height =
        mainContainer.children[index].style.height;

      array[index] = bubble;
      mainContainer.children[index].style.height = bubbleStyle;
      mainContainer.children[i].style.backgroundColor = "purple";
    }

    return array;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("finish");
  }
}
