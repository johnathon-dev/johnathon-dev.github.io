let open = false;
document.getElementById('ws-hamburger').addEventListener("click", clicked);

function clicked() {
    if(open) {
        document.getElementById('ws-menu').style.opacity = '0';
        document.getElementById('ws-menu').style.visibility = 'hidden';
        document.getElementById('ws-menu').style.left = '-33.33333%';
        document.getElementById('rect1').style.transform = 'rotate(0)';
        document.getElementById('rect2').style.opacity = '1';
        document.getElementById('rect3').style.transform = 'rotate(0)';
    } else {
        document.getElementById('ws-menu').style.opacity = '1';
        document.getElementById('ws-menu').style.visibility = 'visible';
        document.getElementById('ws-menu').style.left = '0';
        document.getElementById('rect1').style.transform = 'rotate(13deg)';
        document.getElementById('rect2').style.opacity = '0';
        document.getElementById('rect3').style.transform = 'rotate(-13deg)';
    }
    open =! open;
}