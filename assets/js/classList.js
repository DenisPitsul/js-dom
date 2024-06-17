const task1El = document.querySelector("#task1");

task1El.addEventListener("click", doneTaskHandler);

function doneTaskHandler(e) {
    // this.className = 'doneTask';
    // this.classList.add('doneTask');
    this.classList.toggle('doneTask');
    this.classList.replace('redTask', 'greenTask');
}

const title = document.querySelector('.title');

title.addEventListener('click', (e) => {
    e.target.classList.toggle('roundBorger');
});