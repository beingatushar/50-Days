const button = document.querySelector(".joke-button");
const jokeElement = document.querySelector(".joke-text");

const getJoke = () => fetch("https://icanhazdadjoke.com/slack")
    .then(response => response.json())
    .then(response => response.attachments[0].fallback)
    .then((response) => {
        jokeElement.innerText = response
    })
getJoke()
button.addEventListener("click", () => {
    getJoke()
})