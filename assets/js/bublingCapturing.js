'use strict';

const innerDivEl = document.querySelector(".innerDiv");
const outerDivEl = document.querySelector(".outerDiv");

innerDivEl.addEventListener('click', handler);
outerDivEl.addEventListener('click', handler);
document.body.addEventListener('click', handler);

innerDivEl.addEventListener('click', handler, { capture: true });
outerDivEl.addEventListener('click', handler, { capture: true });
document.body.addEventListener('click', handler, { capture: true });

function handler(e) {
    console.log('this ->', this);
    console.log('e.currentTarget ->', e.currentTarget);
    console.log('e.target ->', e.target);
}

let clickCounter = 0;

document.body.addEventListener('click', clickHandler, { capture: true });

function clickHandler(e) {
    clickCounter++;
    console.log('clickCounter ->', clickCounter);
    e.stopPropagation();
}