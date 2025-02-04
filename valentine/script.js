function moveRandomE1(e1m) {
    e1m.style.position = "absolute";
    e1m.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    e1m.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomE1(e.target);
})