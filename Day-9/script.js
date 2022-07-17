const audios = document.querySelectorAll("audio");
const container = document.querySelector(".container");

function stopAll() {
    audios.forEach(audio => {
        audio.pause();
    })
}
audios.forEach(audio => {
    let button = document.createElement("button");
    button.innerText = audio.id;
    container.appendChild(button);
    button.addEventListener("click", () => {
        stopAll();
        audio.play();
    })
})