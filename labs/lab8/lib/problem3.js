const catPic = document.querySelector("#cat-pic");
const mustachePic = document.querySelector("#mustache-pic");

catPic.addEventListener("click", function (event) {
    const x = event.pageX;
    const y = event.pageY;

    mustachePic.style.left = `${x - 50}px`;
    mustachePic.style.top = `${y - 20}px`;
});