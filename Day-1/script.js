let prev = document.querySelector(".panel-active")
const panels = document.querySelectorAll(".panel")
for (let panel of panels) {
    panel.addEventListener('click', () => {
        prev.classList.toggle("panel-active")
        panel.classList.toggle("panel-active")
        prev = panel
    })
}