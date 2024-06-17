'use strict';

const heartBtn = document.querySelector('button');

heartBtn.addEventListener('click', heartClickHandler);

function heartClickHandler(e) {
    this.classList.toggle('redHeard');
    e.stopPropagation();
}

const article = document.querySelector('article')

article.addEventListener('click', articleClickHandler)

function articleClickHandler(e) {
  this.classList.toggle('clickedArticle');
}