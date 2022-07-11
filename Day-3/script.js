const switchKey = document.querySelector("#switch");
const body = document.body;
const a = document.querySelectorAll("a");
let url = switchKey.src;
switchKey.addEventListener("click", () => {
    if (url.includes("hamburger")) {
        url = url.replace(/hamburger/g, "cross");
        console.log(1);
    } else {
        url = url.replace(/cross/g, "hamburger");
        console.log(2);
    }
    switchKey.src = url;
    switchKey.classList.toggle("a-rotate");
    body.classList.toggle("body-rotate");
    document.querySelector(".switch-container").classList.toggle("a-rotate");
    for (let i of a) {
        i.classList.toggle("a-rotate");
    }
})