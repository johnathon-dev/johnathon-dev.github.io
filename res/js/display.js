const elements = document.getElementsByClassName('item-display');

for(const element of elements) {
    let count = 0;

    element.addEventListener('click', function() {
        const images = getImages(element), updatedPosition = "left " + (element.offsetWidth * images) + "px center";
        if(element.style.backgroundPosition === updatedPosition) {
            count = 0;
            element.style.backgroundPosition = "left 0px center";
        } else {
            count++;
            element.style.backgroundPosition = "left " + (count * element.offsetWidth) + "px center";
        }
    });

    window.addEventListener('resize', function() {
        element.style.backgroundPosition = "left " + (count * element.offsetWidth) + "px center";
    });
}

function getImages(element) {
    if(element.id === "red-baby-ring") return 4;
    else if(element.id === "teamsesh-buckshot-ring") return 7;
    else return 0;
}