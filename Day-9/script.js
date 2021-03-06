const songs = document.querySelectorAll("audio");
const container = document.body;
let lastSong = null;
songs.forEach(song => {
    let button = document.createElement("button");
    button.innerText = song.id;
    container.appendChild(button);
    button.addEventListener("click", () => {
        if (lastSong) {
            lastSong.pause();
            lastSong.currentTime = 0;
        }
        song.play();
        lastSong = song;
    })
})