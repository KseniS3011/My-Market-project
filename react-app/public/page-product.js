"use strict";

setTimeout (function() {

let form = document.querySelector('form');
let button = document.querySelector('button.form__button_button');

let inputName = document.querySelector('.input1');
let mistakeName = document.querySelector('.input-mistake-name');

let inputGrade = document.querySelector('.input2');
let mistakeGrade = document.querySelector('.input-mistake-grade');

let inputReview = document.querySelector('.textarea');
let mistakeReview = document.querySelector('.input-mistake-review');

inputName.value = localStorage.getItem('name');
inputGrade.value = localStorage.getItem('grade');
inputReview.value = localStorage.getItem('reviewText');

form.addEventListener('submit', validate);
inputName.addEventListener('focus', clearmistakeName);
inputGrade.addEventListener('focus', clearmistakeGrade);
inputReview.addEventListener('focus', clearmistakeReview);

inputName.addEventListener('input', changeName);
inputGrade.addEventListener('input', changeGrade);
inputReview.addEventListener('input', changeReviewText);

function validate(event) {

    event.preventDefault()

    let nameLength = inputName.value.trim().length;
    let NameSymbols = inputName.value.trim();
    let grade = +inputGrade.value.trim();


    if (nameLength >= 3) {
        console.log('ok');

    } else if (NameSymbols === '') {

        mistakeName.classList.add('input-mistake-name-color');
        inputName.classList.add('input1-mistake');
        mistakeName.innerHTML = 'Вы забыли ввести Имя и Фамилию';
        return;

    } else {
        mistakeName.classList.add('input-mistake-name-color');
        inputName.classList.add('input1-mistake');
        mistakeName.innerHTML = 'Имя не может быть короче двух символов';
        return;
    }

    for (let i = 0; i < nameLength; i++) {

        let codeOfSymbol = NameSymbols.charCodeAt(i);

        if (codeOfSymbol === 32) {

        } else if (codeOfSymbol > 64 && codeOfSymbol < 90) {

        } else if (codeOfSymbol > 96 && codeOfSymbol < 122) {

        } else if (codeOfSymbol > 1039 && codeOfSymbol < 1103) {

        } else {
            mistakeName.classList.add('input-mistake-name-color');
            inputName.classList.add('input1-mistake');
            mistakeName.innerHTML = 'Используйте буквы русского или английского алфавита';
            return;
        }
    }

    if (grade > 0 && grade < 6) {
        console.log('OK');

    } else {
        mistakeGrade.classList.add('input-mistake-grade-color');
        inputGrade.classList.add('input2-mistake');
        mistakeGrade.innerHTML = 'Оценка должна быть от 1 до 5';
        return;
    }

    if (inputReview.value.trim() === '') {
        mistakeReview.classList.add('input-mistake-review-color');
        inputReview.classList.add('textarea-mistake');
        mistakeReview.innerHTML = 'Вы забыли ввести текст отзыва';
        return;
    } else {
        console.log('OK');
    }

    form.reset();
    localStorage.removeItem('name');
    localStorage.removeItem('grade');
    localStorage.removeItem('reviewText');
    console.log('ok');
}

function clearmistakeName() {
    mistakeName.classList.remove('input-mistake-name-color');
    inputName.classList.remove('input1-mistake');
    mistakeGrade.classList.remove('input-mistake-grade-color');
    inputGrade.classList.remove('input2-mistake');
    mistakeName.innerHTML = '';
    mistakeGrade.innerHTML = '';
    mistakeReview.classList.remove('input-mistake-review-color');
    inputReview.classList.remove('textarea-mistake');
    mistakeReview.innerHTML = '';
}

function clearmistakeGrade() {
    mistakeGrade.classList.remove('input-mistake-grade-color');
    inputGrade.classList.remove('input2-mistake');
    mistakeGrade.innerHTML = '';
    mistakeReview.classList.remove('input-mistake-review-color');
    inputReview.classList.remove('textarea-mistake');
    mistakeReview.innerHTML = '';
}

function clearmistakeReview() {
    mistakeReview.classList.remove('input-mistake-review-color');
    inputReview.classList.remove('textarea-mistake');
    mistakeReview.innerHTML = '';
}

function changeName() {
    localStorage.setItem('name', inputName.value);
}

function changeGrade() {
    localStorage.setItem('grade', inputGrade.value);
}

function changeReviewText() {
    localStorage.setItem('reviewText', inputReview.value);
}






let sidebar = document.querySelector('.sidebar');
let like = document.querySelector('.sidebar-info__like');
let choiseButton = document.querySelector('.sidebar-info > .sidebar__button');


let header = document.querySelector('.heading');
let likeNumber = document.querySelector('.cart-number-2_hidden');
let CartNumber = document.querySelector('.cart-number-1_hidden');

let message = document.querySelector('.message-cart_hidden');

let likeCount = +localStorage.getItem('likeCount');
let productCount = +localStorage.getItem('productCount');

console.log(likeCount);
console.log(productCount);

render();

like.addEventListener('click', changeLike);
choiseButton.addEventListener('click', changeCart);


function changeLike(event) {

    likeCount = 1 - likeCount;
    localStorage.setItem('likeCount', +likeCount);
    console.log(likeCount);
    render();
}

function changeCart(event) {

    productCount = 1 - productCount;
    localStorage.setItem('productCount', +productCount);
    console.log(productCount);
    message.classList.add('message-cart');

        setTimeout(function () {
            message.classList.remove('message-cart');
        }, 3900);
    render();
}

function render() {

    if (+likeCount) {
        like.classList.remove('sidebar-info__like');
        like.classList.add('sidebar-info__like_focus');
        likeNumber.classList.add('cart-number-2');

    } else {

        like.classList.add('sidebar-info__like');
        like.classList.remove('sidebar-info__like_focus');
        likeNumber.classList.remove('cart-number-2');
    }

    if (+productCount) {

        choiseButton.classList.add('sidebar__button_choise');
        CartNumber.classList.add('cart-number-1');
        choiseButton.innerHTML = 'Товар уже в корзине';

    } else {

        choiseButton.classList.remove('sidebar__button_choise');
        CartNumber.classList.remove('cart-number-1');
        message.classList.remove('message-cart');
        choiseButton.innerHTML = 'Добавить в корзину';
    }
}

}, 500);