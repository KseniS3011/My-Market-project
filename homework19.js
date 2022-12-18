"use strict";

//Exercise #1

let a = '$100';
let b = '300$';

let sum = +a.slice(1)+parseInt(b);

console.log(sum);

//Exercise #2

let message = ' привет, медвед     ';
message = message.trim();
let letter = message[0];
letter = letter.toUpperCase();
message = letter + message.slice(1);

console.log(message); 

//Exercise #3

let c = prompt('Сколько вам лет?');
let c1 = c/11;
let c2 = c/12;
let c3 = c/13;
let c4 = c/14;
let d = ((+c+10)%10);
let e;
let f;

if (c1 === 1) {
    e = 'лет';
} else if (c2 === 1) {
    e = 'лет';
} else if (c3 === 1) {
    e = 'лет';
} else if (c4 === 1) {
    e = 'лет';
} else if (d === 1) {
        e = 'год';
} else if ((d > 1) && (d < 5)) {
    e = 'года';
} else if ((d >= 5) || (d === 0)) {
    e = 'лет';
}

if (c <= 3) {
    f = 'младенец'
} else if ((c > 3) && (c<=11)) {
    f = 'ребенок'
} else if ((c > 11) && (c<=18)) {
    f = 'подросток'
} else if ((c > 18) && (c<=40)) {
    f = 'познаете жизнь'
} else if ((c > 40) && (c<=80)) {
    f = 'познали жизнь'
} else if (c > 80) {
    f = 'долгожитель'
}


alert( `Вам ${c} ${e}, и вы ${f}`);

//Exercise #4

let msg = 'Я работаю со строками как профессионал!';
let separate = msg.split(' ');  
let count = Object.keys(separate).length;

console.log(count); 