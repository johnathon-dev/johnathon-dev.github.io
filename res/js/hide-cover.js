const cover = document.getElementById('ws-cover');
let covered = sessionStorage.getItem("uncovered");

function clicked() {
    cover.style.opacity = '0';
    cover.style.visibility = 'hidden';
    document.body.classList.add('scrolling');
    sessionStorage.setItem("uncovered", "true");
}

if(covered === 'true') clicked();
else cover.addEventListener('click', clicked);