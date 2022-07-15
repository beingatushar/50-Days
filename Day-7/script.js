const ps = document.querySelector(".ps");
const xbox = document.querySelector(".xbox");
ps.classList.add("active");
xbox.classList.add("inactive");
ps.addEventListener("mouseover", () => {
    ps.classList.remove("inactive");
    ps.classList.add("active");
    xbox.classList.add("inactive");
    xbox.classList.remove("active");
})
xbox.addEventListener("mouseover", () => {
    xbox.classList.remove("inactive");
    xbox.classList.add("active");
    ps.classList.add("inactive");
    ps.classList.remove("active");
})