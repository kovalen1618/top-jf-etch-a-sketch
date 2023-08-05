// Get container element to place canvas divs within
const canvas = document.getElementById('canvas');

// Create canvas with 16 divs
function createCanvas () {
    let i = 0;
    while (i < 16) {
        let newDiv = document.createElement('div');
        newDiv.textContent = i + 1;
        canvas.appendChild(newDiv)

        i++;
    }
}

createCanvas();