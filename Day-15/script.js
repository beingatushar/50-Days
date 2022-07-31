const numberContainer = document.querySelectorAll(".number");
const numbers = [12000, 5000, 7500];
for (let i = 0; i < numberContainer.length; i++) {
    change(numberContainer[i], numbers[i]);
}

function change(container, number) {
    const steps = number / 50;
    let counter = 0;
    const a = setInterval(() => {
        if (counter === number) {
            clearInterval(a);
        }
        container.innerText = counter;
        counter += steps;
    }, 1)
}