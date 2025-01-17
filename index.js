document.addEventListener("DOMContentLoaded", () => {
    infoContainerHover()
})

function infoContainerHover() {
    const cardContainer = document.getElementById("cardContainer")
    const infoContainer = document.getElementById("infoContainer")
    const bgContainer = document.getElementById("bgContainer")
    const hiddenStatements = document.querySelectorAll(".hidden-statement")

    cardContainer.addEventListener("mouseover", () => {
        infoContainer.style.height = "200px"
        infoContainer.style.transition = "height 0.5s ease"

        bgContainer.style.background = "rgba(0, 0, 0, 0.5)"

        hiddenStatements.forEach(box => {
            box.classList.remove("visible")
        })

        hiddenStatements.forEach(box => {
            box.classList.add("visible")
        })
    })

    cardContainer.addEventListener("mouseleave", () => {
        infoContainer.style.height = "100px"
        bgContainer.style.background = "rgb(200, 161, 113)"
        hiddenStatements.forEach(box => {
            box.classList.remove("visible")
        })
    })
}