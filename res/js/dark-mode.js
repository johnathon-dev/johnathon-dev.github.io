let mode = sessionStorage.getItem("darkmode");
document.getElementById('ws-dark-mode').addEventListener("click", clicked);

function clicked() {
    document.body.classList.toggle('dark');
    sessionStorage.setItem("darkmode", document.body.classList.contains('dark').toString());
}

if(mode === 'true') document.body.classList.add('dark');
window.onload = function() {
    document.body.classList.remove('pre');
};