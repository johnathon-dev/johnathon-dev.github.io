const header = document.getElementById("ws-header");
const offsetTop = header.offsetTop;

window.onscroll = function() {
    if(window.scrollY > offsetTop) header.classList.add("sticky");
    else header.classList.remove("sticky");
};