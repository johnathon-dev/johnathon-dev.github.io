window.onscroll = function() {
    const footer = document.querySelector('footer');
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.visibility = 'visible';
        footer.style.opacity = '1';
        footer.style.bottom = '0px';
    } else {
        footer.style.visibility = 'hidden';
        footer.style.opacity = '0';
        footer.style.bottom = '-44px';
    }
};