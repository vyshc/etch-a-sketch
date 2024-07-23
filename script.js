const body = document.querySelector("body");
const gridContainer = document.querySelector("#gridContainer");
const btnGridSize = document.querySelector("#gridSize");
const btnGridClear = document.querySelector("#gridClear");

//intially -->
// let n = 5 (create a grid of 5x5)
//later when the user clicks btnGridSize -->
//get user value of n
//render grid accordingly
//use one function with n as argument to render grid

let n = 5;

function renderGrid(n) {
    gridContainer.innerHTML="";
  for (let i = 0; i < n; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.style.height = `${Math.floor(600 / n)}px`;
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < n; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");
      colDiv.style.width = `${Math.floor(600 / n)}px`;
      rowDiv.appendChild(colDiv);
      colDiv.addEventListener("mouseover",()=>{
        colDiv.style.backgroundColor= "black";
      });
    }
  }
}

renderGrid(n); //inital 5x5 grid

btnGridSize.addEventListener("click", () => {
  let n = prompt("enter grid size");
  renderGrid(n);
});

//what's left: 
//clear Grid button functionality
// mouseover changes background by only 10% opacity
// randomize the squares’ RGB values with each interaction.