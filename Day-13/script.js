const bubblesContainer = document.querySelector(".bubbles");
const inputText = document.querySelector(".input-text");
inputText.addEventListener('keyup', (e) => {
    bubblesContainer.innerHTML =
        e.target.value
        .split(',')
        .map(element => element.replaceAll(/\s/g, ''))
        .filter(element => element != "")
        .map(element => `<div class = "bubble">${element}</div>`)
        .join('');
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 50);
        let prev = null;
        let times = 100;
        for (let i = 0; i < times; i++) {
            setTimeout(() => {
                let curr = pickRandomBubble();
                prev && prev.classList.toggle("bubble-active");
                curr.classList.toggle("bubble-active");
                prev = curr;
            }, 40 * i);
        }
    }
})

function pickRandomBubble() {
    const bubbles = document.querySelectorAll('.bubble');
    return bubbles[Math.floor(Math.random() * bubbles.length)]
}