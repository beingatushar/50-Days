const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const bars = document.querySelectorAll(".bar");
const steps = document.querySelectorAll(".step");
let step = 0;
let maxSteps = steps.length - 1;

function check() {
    if (step === 0) {
        prev.disabled = true;
    } else if (step === maxSteps) {
        next.disabled = true
    } else {
        next.disabled = false;
        prev.disabled = false;

    }
}
check();


function toggleClass(elements, name, count) {
    elements[count].classList.toggle(`${name}-active`);
}

function clickButton(action) {
    let isNext = (action === "next");
    if (isNext) step++;
    else step--;
    check();
    toggleClass(bars, "bar", (isNext ? step - 1 : step));
    toggleClass(steps, "step", (isNext ? step : step + 1));
}
next.addEventListener("click", () => clickButton("next"));
prev.addEventListener("click", () => clickButton("prev"));