// problem1.js — implement handleMenuClick, then register it ONCE.
const menu = document.querySelector("#menu");
const selection = document.querySelector("#selection");
const count = document.querySelector("#count");
 
let picks = 0; // module-level counter
 
function handleMenuClick(e) {
  /*
	1. If e.target is not an <li>, do nothing 
	2. Set selection content to “You picked: <item>”
	3. Set the item background color to a highlight colour.
	4. Increment picks to “Total picks: <picks>”
  */
    if (!e.target.matches("li")) return;

    selection.textContent = `You picked: ${e.target.textContent}`;

    e.target.style.backgroundColor = "#FFFF00";

    picks++;
    count.textContent = `Total picks: ${picks}`;

}
 
menu.addEventListener("click", handleMenuClick);

