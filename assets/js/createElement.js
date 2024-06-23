'use strict';

// const newsItem = {
//     title: 'News Title',
//     body: 'News Body News Body News Body News Body News Body',
//     date: '2024-05-10'
// }

// const articleEl = document.createElement('article');
// // articleEl.textContent = 'News Item boby';
// // articleEl.style.color = 'grey';
// const h3El = createNewElement('h3', newsItem.title);
// const pEl = createNewElement('p', newsItem.body);
// const dateEl = createNewElement('p', newsItem.date);
// articleEl.append(h3El, pEl, dateEl);

// const sectionEl = document.querySelector('section'); 
// sectionEl.append(articleEl);

// function createNewElement(type, content) {
//     const newElement = document.createElement(type);
//     newElement.textContent = content;
//     return newElement;
// }

let currentPage = 1;
const USERS_URL = 'https://randomuser.me/api/?results=5&seed=footbar';

const rootEl = document.querySelector('#root');
const [ prevBtn, nextBtn ] = document.querySelectorAll('.navBtn');
prevBtn.disabled = false;

fetchUsers();

prevBtn.addEventListener('click', () => {
    rootEl.innerHTML = '';
    currentPage--;
    fetchUsers(currentPage);
    if (currentPage > 1) {
        prevBtn.disabled = false;
    } else {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', () => {
    rootEl.innerHTML = '';
    currentPage++;
    fetchUsers(currentPage);
    prevBtn.disabled = false;
});

function fetchUsers(currentPage) {
    fetch(`${USERS_URL}&page=${currentPage}`)
        .then(resonse => resonse.json())
        .then(({ results }) => generateUsers(results))
        .catch(err => console.log('err ->', err));
}

function generateUsers(users) {
    console.log(users)
    users.forEach(user => generateSingleUser(user));
}

function generateSingleUser({ 
    picture: { large: imgSrc }, 
    dob: { age }, 
    name: { first, last }
}) {
    const userCard = createNewElement('article', ['userCard']);
    rootEl.append(userCard);
    
    const userImgEl = createNewImageElement('img', ['userImg'], imgSrc, `${first} ${last} image`);
    const userNameEl = createNewElement('h2', ['userName'], `${first} ${last}`);
    const userAgeEl = createNewElement('p', ['userAge'], `${age} years old`);
    const trashBtn = createNewElement('button', ['trashIcon']);
    userCard.append(userImgEl, userNameEl, userAgeEl, trashBtn);
    
    const trachIcon = createNewElement('i', ['fa-solid', 'fa-trash']);
    trashBtn.append(trachIcon);
    trashBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });
}

function createNewElement(type, classNames, content) {
    const el = document.createElement(type);
    addClassesToElement(el, classNames);
    if (content) {
        el.textContent = content;
    }
    return el;
}

function createNewImageElement(type, classNames, src, alt) {
    const el = document.createElement(type);
    addClassesToElement(el, classNames);
    el.src = src;
    el.alt = alt;
    return el;
}

function addClassesToElement(el, classes) {
    classes.forEach(className => {
        el.classList.add(className)
    });
}

