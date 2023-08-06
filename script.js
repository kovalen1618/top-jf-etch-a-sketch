// Get container element to place canvas divs within
const canvas = document.getElementById('canvas');

// Create canvas with 'input' divs
function createCanvas (input) {
    // Resets canvas
    canvas.textContent = '';

    let i = 0;
    while (i < input) {
        let newRow = document.createElement('div');

        let j = 0;
        while (j < input) {
            let newColumn = document.createElement('div');
            newRow.appendChild(newColumn)

            j++;
        }
        
        canvas.appendChild(newRow);

        i++;
    }
}

let button = document.getElementById('create');
button.addEventListener('click', function() {
    let input = prompt('Grid Width: ', 1);

    // Limits to 100 x 100 canvas
    createCanvas(input > 100 ? 100 : input);
})
