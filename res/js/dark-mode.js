let dark = false;
document.getElementById('ws-dark-mode').addEventListener("click", clicked);

function clicked() {
    if(dark) {
        document.getElementById('ws-header').classList.remove('dark');
        document.getElementById('ws-menu').classList.remove('dark');
        document.getElementById('ws-cover').classList.remove('dark');
        document.body.classList.remove('dark');
        document.querySelector(".svg").classList.remove('dark');
        document.querySelector(".path").classList.remove('dark');
    } else {
        document.getElementById('ws-header').classList.add('dark');
        document.getElementById('ws-menu').classList.add('dark');
        document.getElementById('ws-cover').classList.add('dark');
        document.body.classList.add('dark');
        document.querySelector(".svg").classList.add('dark');
        document.querySelector(".path").classList.add('dark');
    }
    dark =! dark;
}