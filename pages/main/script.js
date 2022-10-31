// animals slider

import animalsItems from '../../assets/js/data.js';

const arrowPrev = document.querySelector('.nav__prev');
const arrowNext = document.querySelector('.nav__next');
const slideItems = document.querySelectorAll('.slide__layout');

let currentContainer = 0;
let isActive = true;
let maxCount = 6;

function createAnimalSlide(index) {
  const slideImage = document.createElement('img');
  slideImage.classList.add('slide__image');
  slideImage.src = animalsItems[index].img;

  const slideTitle = document.createElement('p');
  slideTitle.classList.add('slide__title');
  slideTitle.innerHTML = animalsItems[index].title;

  const slideDesc = document.createElement('p');
  slideDesc.classList.add('slide__desc');
  slideDesc.innerHTML = animalsItems[index].desc;

  const slideContent = document.createElement('div');
  slideContent.classList.add('slide__content');
  slideContent.append(slideTitle, slideDesc);

  const slideIcon = document.createElement('div');
  slideIcon.classList.add('slide__icon', animalsItems[index].icon);

  const slideContainer = document.createElement('div');
  slideContainer.classList.add('slide__container');
  slideContainer.append(slideContent, slideIcon);

  const animalCard = document.createElement('div');
  animalCard.classList.add('card');
  animalCard.append(slideImage, slideContainer);

  return animalCard;
}

function insertCardsIntoLayout(slideItems) {
  for (let cardsLayout of slideItems) {
    cardsLayout.innerHTML = '';
  }
  for (let cardsLayout of slideItems) {
    for (let i = 0; i < maxCount; i++) {
      cardsLayout.append(createAnimalSlide([i]));
    }
  }
}

insertCardsIntoLayout(slideItems);

function getCardsLayoutsNotActive() {
  const layoutsNotActive = [];
  for (let cardsLayout of slideItems) {
    if (!cardsLayout.classList.contains('active')) {
      layoutsNotActive.push(cardsLayout);
    }
  }
  return layoutsNotActive;
}

function changeCurrentLayout(n) {
  currentContainer = (n + slideItems.length) % slideItems.length;
}

function hideLayout(direction) {
  isActive = false;
  slideItems[currentContainer].classList.add(direction);
  slideItems[currentContainer].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}

function showLayout(direction) {
  slideItems[currentContainer].classList.add('next', direction);
  slideItems[currentContainer].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isActive = true;
  });
}

function nextLayout(n) {
  hideLayout('to-left');
  changeCurrentLayout(n + 1);
  showLayout('from-right');
}

function previousLayout(n) {
  hideLayout('to-right');
  changeCurrentLayout(n - 1);
  showLayout('from-left');
}

arrowNext.addEventListener('click', function () {
  if (isActive) {
    nextLayout(currentContainer);
    insertCardsIntoLayout(getCardsLayoutsNotActive());
  }
});

arrowPrev.addEventListener('click', function () {
  if (isActive) {
    previousLayout(currentContainer);
    insertCardsIntoLayout(getCardsLayoutsNotActive());
  }
});
