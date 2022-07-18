window.addEventListener('keydown', (e) => {
    document.body.innerHTML = `
    <div class="box">
        <div class="heading">event.key</div>
        <div class="card">${(e.key===" ")?'Space':e.key}</div>
    </div>
    <div class="box">
        <div class="heading">event.keyCode</div>
        <div class="card">${e.keyCode}</div>
    </div>
    <div class="box">
        <div class="heading">event.code</div>
        <div class="card">${e.code}</div>
    </div>
    `
})