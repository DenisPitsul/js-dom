'use strict';

const loadingButtons = document.querySelectorAll('button');

loadingButtons.forEach(loadingButton => {
    loadingButton.onclick = loadResourse;
});

function loadResourse() {
    console.log(`Load resourse from ${this.dataset.host}`);
    console.log(`Load resourse by ${this.dataset.userName}`);
}

const colorButtons = document.querySelectorAll('div button');

colorButtons.forEach(button => {
    button.onclick = updateBackgroundColor;
});

function updateBackgroundColor() {
    document.body.style.backgroundColor = this.dataset.color;
}