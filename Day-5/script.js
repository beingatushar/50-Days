const loading = document.querySelector("#loading");
const bg = document.querySelector(".bg");
let i = 0;
let a = setInterval(() => {
    bg.style.filter = `blur(${25-i/4}px)`;
    loading.innerText = `${i}%`;
    i++;
    if (i == 100) {
        clearInterval(a);
        loading.remove();
        bg.style.filter = none;
    }
}, 2);