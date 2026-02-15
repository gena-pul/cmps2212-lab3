const buttons = document.querySelectorAll('.color-btn');

function changeColor() {
    // Usually in a function handler, 'this is used to 
    // refer to a button that was clicked.
    this.style.backgroundColor = 'yellow';
}

buttons.forEach(function(button) {
    // attaching to ALL buttons
    button.addEventListener('click', changeColor);
});

