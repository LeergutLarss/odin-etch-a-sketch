// Create empty squares
function createSquares() {
    let squaresCount = 0;


    const grid = document.querySelector(".grid");

    while(squaresCount < 256) {
        const squares = document.createElement("div");
        squares.classList.add("emptySquare");    
        grid.appendChild(squares);
        squaresCount++;    
    }
} 
//empty squares as array

//colorSquares
function colorSquares(grid) {
    grid.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.background = 'grey';
        })
    });
    grid.forEach(square => {
        square.addEventListener("mouseout", () => {
            square.classList.remove("onhover");
        })
    });          
}


//clearGrid
function clearGrid(grid) {
    const clearButton = document.querySelector(".pannel button");
    clearButton.addEventListener("click", () => {
        grid.forEach(square => {
            square.style.background = "white";
        });
    })
}


createSquares();
const grid = document.querySelectorAll(".emptySquare");
colorSquares(grid);
clearGrid(grid);

