"use strict";

let review = document.querySelector('.review');
let stars1 = document.querySelectorAll('.review-content__stars');
let star1 = document.querySelectorAll('.star1');
let star2 = document.querySelectorAll('.star2');

let arrStars = Array.from(star1);
let arrStarsSecond = Array.from(star2);
console.log(arrStars);

//Звездный рейтинг (1-й отзыв)

for (let i = 1; i < arrStars.length + 1; i++) {

    if (arrStars[i]) {
        arrStars[i].addEventListener('click', starClick);

        function starClick(event) {

            event.preventDefault()
            console.log('ok');
            arrStars[i].classList.add('choise');

            for (let a = i - 1; a > 0; a--) {

                arrStars[a].classList.add('choise');

            }
        }
    }

        arrStars[i].addEventListener('click', starClickOut);

        function starClickOut(event) {

            event.preventDefault()
            console.log('ok');
            arrStars[i+1].classList.remove('choise');

            for (let j = i; j < arrStars.length + 1; j++) {

                arrStars[j].classList.remove('choise');
            }
        }
}



