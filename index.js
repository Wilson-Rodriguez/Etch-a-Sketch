const gridSize = document.querySelector("#gridSize")
const gridContainer = document.querySelector("#gridContainer")

gridSize.addEventListener("click", () => {
    const divSize = prompt("Enter the size for the grid")
    createGrid(Number(divSize))
})

function createGrid(divSize) {
    const error = "Input must be a valid whole number between 1-100"

    if (isNaN(divSize) || !Number.isInteger(divSize)) {
        alert(error)
        return 
    }

    const divWidthHeight = `${800/divSize}px`

    for (let i=0; i<divSize*divSize; i++) {
        let element = document.createElement("div")
        element.style.width = divWidthHeight
        element.style.height = divWidthHeight
        element.style.backgroundColor = "blue"
        gridContainer.appendChild(element)
    }

}