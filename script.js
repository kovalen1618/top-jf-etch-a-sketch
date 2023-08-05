// Get container element to place canvas divs within
const canvas = document.getElementById('canvas');

// Create canvas with 16 divs
function createCanvas () {
    let i = 0;
    while (i < 16) {
        let newRow = document.createElement('div');

        let j = 0;
        while (j < 16) {
            let newColumn = document.createElement('div');
            newRow.appendChild(newColumn)

            j++;
        }
        
        canvas.appendChild(newRow);

        i++;
    }
}

createCanvas();