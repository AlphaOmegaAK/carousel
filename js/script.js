const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

function activate() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

    setTimeout(activate, 5000)
}

setInterval(activate, 5000);