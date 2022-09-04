document.onscroll = window.onresize = function() {
    const divList = document.getElementsByTagName('div');

    for(let i = 0; i < divList.length; i++) {
        let height = 0;
        if(i > 0) height = divList[i - 1].offsetHeight;
        if(window.scrollY > divList[i].offsetTop - (height + 77)) document.body.style.backgroundColor = divList[i].getAttribute("data-color");
    }
};