document.getElementById("email").addEventListener("click", function (evt) {
    let odd = "jhahnwy.pc", even = "onto@itsae", text = "";
    for(let i = 0; i < odd.length; i++) { text += odd[i] + even[i]; }
    evt.target.classList.remove("unloaded");
    evt.target.innerHTML = "<a href=\"mailto:" + text + "\">" + text + "</a>";
});