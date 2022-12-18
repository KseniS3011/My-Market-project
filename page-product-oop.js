"use strict";

class FormBase {
    finish() {
        alert('Форма отправлена');
    }
}


class Form extends FormBase {

    constructor(

        formSelector,

        nameSelector,
        gradeSelector,
        reviewSelector,

        nameMistakeSelector,
        gradeMistakeSelector,
        reviewMistakeSelector


    ) {
        super();

        this.form = document.querySelector(formSelector);

        this.name = document.querySelector(nameSelector);
        this.nameMistake = document.querySelector(nameMistakeSelector);

        this.grade = document.querySelector(gradeSelector);
        this.gradeMistake = document.querySelector(gradeMistakeSelector);

        this.review = document.querySelector(reviewSelector);
        this.reviewMistake = document.querySelector(reviewMistakeSelector);


        this.name.value = localStorage.getItem('name');
        this.grade.value = localStorage.getItem('grade');
        this.review.value = localStorage.getItem('reviewText');


        this.form.addEventListener('submit', this.validate.bind(this));
        this.name.addEventListener('focus', this.clearMistakes.bind(this));
        this.grade.addEventListener('focus', this.clearMistakes.bind(this));
        this.review.addEventListener('focus', this.clearMistakes.bind(this));

        this.name.addEventListener('input', this.changeName.bind(this));
        this.grade.addEventListener('input', this.changeGrade.bind(this));
        this.review.addEventListener('input', this.changeReviewText.bind(this));
    }

    validate(event) {
        event.preventDefault();

        let nameLength = this.name.value.trim().length;
        let NameSymbols = this.name.value.trim();


        if (nameLength >= 3) {
            console.log('ok');

        } else if (NameSymbols === '') {

            this.fillMistake1Name();
            return;

        } else {

            this.fillMistake2Name();
            return;
        }

        for (let i = 0; i < nameLength; i++) {

            let codeOfSymbol = NameSymbols.charCodeAt(i);

            if (codeOfSymbol === 32) {

            } else if (codeOfSymbol > 64 && codeOfSymbol < 90) {

            } else if (codeOfSymbol > 96 && codeOfSymbol < 122) {

            } else if (codeOfSymbol > 1039 && codeOfSymbol < 1103) {

            } else {
                this.fillMistake3Name();
                return;
            }
        }

        let grade = +this.grade.value.trim();

        if (grade > 0 && grade < 6) {
            console.log('OK');

        } else {

            this.fillMistakeGrade();
            return;

        }

        if (this.review.value.trim() === '') {

            this.fillMistakeReview();
            return;

        } else {
            console.log('OK');
        }


        this.form.reset();
        localStorage.removeItem('name');
        localStorage.removeItem('grade');
        localStorage.removeItem('reviewText');
        console.log('ok');

        this.finish();
    }

    fillMistake1Name() {
        this.nameMistake.classList.add('input-mistake-name-color');
        this.name.classList.add('input1-mistake');
        this.nameMistake.innerHTML = 'Вы забыли ввести Имя и Фамилию';
        
    }

    fillMistake2Name() {
        this.nameMistake.classList.add('input-mistake-name-color');
        this.name.classList.add('input1-mistake');
        this.nameMistake.innerHTML = 'Имя не может быть короче двух символов';
       
    }

    fillMistake3Name() {
        this.nameMistake.classList.add('input-mistake-name-color');
        this.name.classList.add('input1-mistake');
        this.nameMistake.innerHTML = 'Используйте буквы русского или английского алфавита';
       
    }

    fillMistakeGrade() {
        this.gradeMistake.classList.add('input-mistake-grade-color');
        this.grade.classList.add('input2-mistake');
        this.gradeMistake.innerHTML = 'Оценка должна быть от 1 до 5';
        
    }

    fillMistakeReview() {
        this.reviewMistake.classList.add('input-mistake-review-color');
        this.review.classList.add('textarea-mistake');
        this.reviewMistake.innerHTML = 'Вы забыли ввести текст отзыва';
        
    }

    clearMistakes() {
        this.nameMistake.classList.remove('input-mistake-name-color');
        this.name.classList.remove('input1-mistake');
        this.gradeMistake.classList.remove('input-mistake-grade-color');
        this.grade.classList.remove('input2-mistake');
        this.reviewMistake.classList.remove('input-mistake-review-color');
        this.review.classList.remove('textarea-mistake');
        this.nameMistake.innerHTML = '';
        this.gradeMistake.innerHTML = '';
        this.reviewMistake.innerHTML = '';
    }


    changeName() {
        localStorage.setItem('name', this.name.value);
    }

    changeGrade() {
        localStorage.setItem('grade', this.grade.value);
    }

    changeReviewText() {
        localStorage.setItem('reviewText', this.review.value);
    }

}

let review = new Form(
    '.form',
    '.input1',
    '.input2',
    '.textarea',
    '.input-mistake-name',
    '.input-mistake-grade',
    '.input-mistake-review'
);

