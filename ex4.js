const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    // Arrow functions don't have 'this'
    //they inherit 'this' from window
    // so this.classList is undefined and produces an error.
    event.currentTarget.classList.add('active');
});