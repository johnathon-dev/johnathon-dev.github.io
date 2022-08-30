window.addEventListener('scroll', reveal);
window.addEventListener('resize', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i < reveals.length; i++) {
        const innerHeight = window.innerHeight, revealTop = reveals[i].getBoundingClientRect().top, revealPoint = 150;
        let checkFirst = reveals[0].classList.contains('active');
        reveals[i].classList.toggle('active', revealTop < (innerHeight - revealPoint));
        if(checkFirst) {
            document.getElementById('scroll').style.opacity = "0";
            document.getElementById('scroll').style.marginTop = "0px";
        } else {
            document.getElementById('scroll').style.opacity = "0.5";
            document.getElementById('scroll').style.marginTop = "64px";
        }
    }
}