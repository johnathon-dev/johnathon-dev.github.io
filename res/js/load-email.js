document.getElementById("email").addEventListener("click", function (evt) {
    let odd = "jhahnwy.pc", even = "onto@itsae", text = "";
    for(let i = 0; i < odd.length; i++) { text += odd[i] + even[i]; }
    text = "<a href=\"mailto:johnathon@wiyt.space\">" + text + "</a>";
    evt.target.classList.remove("unloaded");
    evt.target.innerHTML = text;
});