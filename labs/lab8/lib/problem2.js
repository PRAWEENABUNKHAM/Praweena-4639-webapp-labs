const planet = document.createElement("div");
planet.classList.add("planet");
planet.style.backgroundColor = "gray";

const moon = document.createElement("div");
moon.classList.add("moon");
moon.style.backgroundColor = "yellow";

planet.appendChild(moon);
document.body.appendChild(planet);

const text = document.createElement("div");
text.textContent = "The planet and the moon";
text.style.color = "white";

document.body.appendChild(text);