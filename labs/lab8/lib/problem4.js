const cat = document.querySelector("#cat");

let position = 0;

const speed = 200;
const delay = 5000; // 5 seconds

// Keep the cat at the starting position
cat.style.transform = "translateX(0px)";

// Wait 5 seconds before moving
setTimeout(() => {
    requestAnimationFrame(walk);
}, delay);

function walk() {
    const catWidth = cat.offsetWidth;
    const maxPosition = window.innerWidth - catWidth;

    // Move the cat
    position += speed / 60;

    // Stop at the right edge
    if (position >= maxPosition) {
        position = maxPosition;

        cat.style.transform = `translateX(${position}px)`;

        // Keep the same width before changing the image
        const currentWidth = cat.offsetWidth;

        // Change to static cat image
        cat.src =
            "https://www.kasandbox.org/programming-images/animals/cat.png";

        // Keep the same width
        cat.style.width = `${currentWidth}px`;

        return;
    }

    // Move the cat
    cat.style.transform = `translateX(${position}px)`;

    // Continue animation
    requestAnimationFrame(walk);
}