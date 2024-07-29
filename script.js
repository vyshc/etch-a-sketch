const body = document.querySelector("body");
const container = document.querySelector("#container");
const resize = document.querySelector("#resize");

//intially -->
// let n = 5 (create a grid of 5x5)
//later when the user clicks btnGridSize -->
//get user value of n
//render grid accordingly
//use one function with n as argument to render grid

let n = 5; //grid size is 5x5 initially

function renderGrid(n) {
  container.innerHTML = "";
  //create row div
  for (let i = 0; i < n; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.style.height = `${Math.floor(600 / n)}px`;
    container.appendChild(rowDiv);
    //create column divs within each row
    for (let j = 0; j < n; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");
      colDiv.style.width = `${Math.floor(600 / n)}px`;
      rowDiv.appendChild(colDiv);
      let hoverCount = 0,
        isHover = false,
        color = "";
      colDiv.addEventListener("mouseover", () => {
        hoverCount++;
        if (isHover == false) {
          color = randomizeColor();
        }
        colDiv.style.backgroundColor = `rgb(${color},${hoverCount * 0.1})`;
        isHover = true;
      });
    }
  }
}

function randomizeColor() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);

  return `${red}, ${blue}, ${green}`;
}

renderGrid(n); //inital 5x5 grid

resize.addEventListener("click", () => {
  let n = prompt("enter grid size");
  if (n > 100 || n == null) {
    alert("value should be less than 100, try again");
    return;
  }
  renderGrid(n);
});

//what's left:
// mouseover changes background by only 10% opacity
// randomize the squares’ RGB values with each interaction.
