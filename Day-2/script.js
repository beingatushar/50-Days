const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const bars = document.querySelectorAll(".bar");
const steps = document.querySelectorAll(".step");
let step = 0;
let maxSteps = 3;

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
next.addEventListener('click', () => {
    step++;
    check();
    console.log(step);
    bars[step - 1].classList.toggle("bar-active");
    steps[step].classList.toggle("step-active");
})
prev.addEventListener('click', () => {
    step--;
    check();
    console.log(step);
    bars[step].classList.toggle("bar-active");
    steps[step + 1].classList.toggle("step-active");

})