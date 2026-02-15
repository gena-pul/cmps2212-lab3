const swatches = document.querySelectorAll('.swatch');

function applyColor() {
    // 'this' refers to the clicked swatch
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

swatches.forEach(function(swatch){
    swatch.addEventListener('click', applyColor);
});