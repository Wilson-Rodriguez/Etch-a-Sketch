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

    if (divSize < 1 || divSize > 100) {
        alert(error)
        return
    }

    gridContainer.innerHTML = ""
    const divWidthHeight = `${800/divSize}px`

    for (let i=0; i<divSize*divSize; i++) {
        let element = document.createElement("div")
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "black";
        })

        element.style.width = divWidthHeight
        element.style.height = divWidthHeight
        element.style.backgroundColor = "gray"
        gridContainer.appendChild(element)
    }

}