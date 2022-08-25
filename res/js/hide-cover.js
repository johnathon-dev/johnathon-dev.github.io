const cover = document.getElementById('ws-cover');
cover.addEventListener('click', function() {
    cover.style.opacity = '0';
    cover.style.visibility = 'hidden';
    document.body.classList.add('scrolling');
});